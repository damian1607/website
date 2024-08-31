class MyHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
    <header>
    <a href="/"><img class="header" src="/images/logo.png" /></a>
    <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="https://github.com/damian1607/website">GitHub-Repo</a></li>
    </ul>
    </nav>
    </header>
    `;
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `<footer>
    <a href="/"><img class="footer" src="/images/logo.png" /></a>
    <a class="footer" href="/privacy-policy">Datenschutzerklärung</a>
    <p>&lt;3</p>
    </footer>
    `;
    }
}
      
customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);