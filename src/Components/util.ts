export const bounceIcon = (button: HTMLButtonElement) => {
  const svg = button.firstElementChild;
  const target = svg instanceof SVGElement ? svg : button;

  target.classList.add("animate-bounce-once");
  setTimeout(() => {
    target.classList.remove("animate-bounce-once");
  }, 500);
};
