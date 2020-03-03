// remap all links to vscode:// to vscode-insiders://

function updateLinks() {
  // 1. get all links that start with `vscode:`
  const codeLinks = Array.from(document.querySelectorAll('a[href^="vscode:"]'));

  const count = codeLinks.length;

  console.log(`Updating ${count} link${count === 1 ? "" : "s"}`);

  // 2. if there are none, do nothing
  if (!count) return;
  codeLinks.forEach((link: HTMLAnchorElement) => {
    const url = new URL(link.href);
    // 3. replace stable protocol with the insiders protocol
    url.protocol = "vscode-insiders:";
    link.href = url.href;
  });
}

updateLinks();

const observer = new MutationObserver(_mutations => {
  return updateLinks();
});

observer.observe(document.body, {
  attributes: true,
  childList: true,
  characterData: true
});
