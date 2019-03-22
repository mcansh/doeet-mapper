function getSomeCandy() {
    // 1. get all links that start with `vscode:`
    const codeLinks = Array.from(document.querySelectorAll('a[href^="vscode:"]'));
    // 2. if there are none, do nothing
    if (!codeLinks.length)
        return;
    codeLinks.forEach((link) => {
        const url = new URL(link.href);
        // 3. replace stable protocol with the insiders protocol
        url.protocol = 'vscode-insiders:';
        link.href = url.href;
    });
}
getSomeCandy();
