import { EditorView, ViewUpdate } from "@codemirror/view";
import { syntaxTree } from "@codemirror/language";

interface TokenInfo {
  text: string;
  from: number;
  to: number;
}

export const extractTokens = (
  view: EditorView,
  tokenName: string
): TokenInfo[] => {
  const tokens: TokenInfo[] = [];
  const tree = syntaxTree(view.state);

  tree.iterate({
    enter: (node) => {
      if (node.type.name === tokenName) {
        tokens.push({
          text: view.state.sliceDoc(node.from, node.to),
          from: node.from,
          to: node.to,
        });
      }
    },
  });

  return tokens;
};

const tokenExtractor = (fluctsTokens: Set<string>) =>
  EditorView.updateListener.of((update: ViewUpdate) => {
    if (update.docChanged) {
      fluctsTokens.clear();
      extractTokens(update.view, "fluct").forEach((t) =>
        fluctsTokens.add(t.text)
      );
    }
  });

export { tokenExtractor };
