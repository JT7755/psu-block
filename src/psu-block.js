import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .info-block1 {
      margin-top: 20px;
      border: 1px solid #444;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 403.531px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
    }

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="block-container">
        <div class="info-block1">
          <h2>88,000+ Students</h2>
        </div>
      </div>
    `;
  }
}

customElements.define('psu-block', PsuBlock);