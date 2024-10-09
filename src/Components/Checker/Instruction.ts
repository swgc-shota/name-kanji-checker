import van from 'vanjs-core';
import { joyo } from './kanji/joyo';
import { jinmei1, jinmei2 } from './kanji/jinmei';
const { div, h2, p, ol, li, strong, a, details, summary, br } = van.tags;

const Instruction = () => {
  return div(
    {
      class: 'instruction',
    },
    h2('「名前に使える漢字のチェックツール」について'),
    p(
      '上のテキストエリアに文字を入力すると、名前に使える漢字は緑、使えない漢字は赤でハイライトされます。'
    ),
    p(
      '本ツールは、',
      a(
        {
          target: '_blank',
          href: 'https://www.moj.go.jp/MINJI/minji86.html',
        },
        '法務省：子の名に使える漢字'
      ),
      'に記載のある',
      a(
        {
          target: '_blank',
          href: 'https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf',
        },
        '常用漢字表'
      ),
      '及び',
      a(
        {
          target: '_blank',
          href: 'https://www.moj.go.jp/content/001131003.pdf',
        },
        '人名用漢字表'
      ),
      'の漢字を対象に作成されています。'
    ),
    p(
      'デフォルトで入力されているのは、常用漢字表に参考情報として記載されている、一部の常用漢字に対応する',
      a(
        {
          target: '_blank',
          href: 'https://ja.wikipedia.org/wiki/%E5%BA%B7%E7%86%99%E5%AD%97%E5%85%B8',
        },
        '康熙字典'
      ),
      '体です。人名用漢字表に記載のあるものとそうでないものとバランスがちょうど良さそうだったのでサンプルに選びました。'
    ),
    p(
      'なお、本ツールが想定する、人名に使える漢字の一覧は下記の通りです(一部に重複する漢字も含まれます)。'
    ),

    details(summary('常用漢字の一覧'), div({ class: 'p-4 font-normal' }, joyo)),
    details(
      summary('人名用漢字 一の一覧'),
      div({ class: 'p-4 font-normal' }, jinmei1)
    ),
    details(
      summary('人名用漢字 二の一覧'),
      div({ class: 'p-4 font-normal' }, jinmei2)
    ),
    p(
      '目を皿のようにしてチェックしましたが、制作者は恐ろしいほどの抜け作です。しかも一部手作業で漢字を集めたので、間違いがあるかもしれません。確実を期すのであれば、法務局が提供する',
      a(
        {
          target: '_blank',
          href: 'https://houmukyoku.moj.go.jp/KOSEKIMOJIDB/M01.html',
        },
        '戸籍統一文字情報の検索ツール'
      ),
      'をご利用ください。'
    ),
    p(
      '「子の名に使える漢字」の「人名用漢字」「常用漢字」にチェックし、検索したい漢字の読みを入力することで該当する漢字の一覧が出てきます。'
    ),
    h2('免責事項'),
    p(
      '「名前に使える漢字のチェックツール」（以下、「本ツール」）をご利用いただく前に、以下の免責事項を必ずお読みください。本ツールを使用することにより、ユーザーは以下の条件に同意したものとみなされます。'
    ),
    ol(
      li(
        p(
          strong('情報の正確性'),
          '：',
          br(),
          '本ツールは、人名に使える漢字とそうでない漢字を判別する目的で提供されていますが、完全な正確性を保証するものではありません。最新の公式情報と異なる場合がある可能性があります。'
        )
      ),
      li(
        p(
          strong('利用目的'),
          '：',
          br(),
          '本ツールは、教育および一般的な参考目的のみを意図しています。公式な文書作成や法的な判断には、必ず最新の公式情報源をご確認ください。'
        )
      ),
      li(
        p(
          strong('責任の制限'),
          '：',
          br(),
          '本ツールの使用によって生じたいかなる損害（直接的、間接的、偶発的、結果的損害を含む）に対しても、開発者は責任を負いません。'
        )
      ),
      li(
        p(
          strong('データの取り扱い'),
          '：',
          br(),
          '本ツールは、ユーザーが入力したデータをサーバーに送信せず、ブラウザ上でのみ処理します。ただし、インターネット上でのデータ転送の完全な安全性は保証できません。'
        )
      ),
      li(
        p(
          strong('第三者の権利'),
          '：',
          br(),
          'ユーザーは、著作権やその他の第三者の権利を侵害しない方法で本ツールを使用する責任があります。'
        )
      ),
      li(
        p(
          strong('更新と変更'),
          '：',
          br(),
          '本ツールの機能および本免責事項は、予告なく変更または中止される場合があります。定期的に最新情報をご確認ください。'
        )
      ),
      li(
        p(
          strong('準拠法'),
          '：',
          br(),
          '本免責事項の解釈および適用は、日本の法律に準拠するものとします。'
        )
      )
    ),
    p(
      '本ツールを使用することにより、ユーザーは上記の免責事項を理解し、同意したものとみなされます。ご不明な点がある場合は、',
      a(
        {
          href: 'https://toach.biz/contact/',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        'こちらのフォーム'
      ),
      'からお問い合わせください。'
    ),
    p('最終更新日：2024年10月10日')
  );
};

export default Instruction;
