import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
    infoText1: {type: String},
    infoText2: {type: String},
    infoText3: {type: String},
    infoText4: {type: String},
  }

  static styles = css`
    :host {
      display: inline-block;
      margin-left: 25px;
    }

    .info-block1 {
      margin-top: 20px;
      border: 1px solid #444;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
    }

    .info-block2 {
      margin-top: 20px;
      background-color: #fff;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      font-size: 32px;
    }

    .info-block3 {
      margin-top: 20px;
      border: 1px solid #444;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
    }

    .info-block4 {
      margin-top: 20px;
      border: 1px solid #444;
      background-image: "https://www.psu.edu/psu-edu-assets/images/power-facts/penn-state-tuition.jpg";
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
    }

    .info-block5 {
      margin-top: 20px;
      border: 1px solid #444;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
    }

    .info-block6 {
      margin-top: 20px;
      border: 1px solid #444;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
    }

    .info-block7 {
      margin-top: 20px;
      border: 1px solid #444;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
    }

    .info-block8 {
      margin-top: 20px;
      border: 1px solid #444;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
    }

    .info-block9 {
      margin-top: 20px;
      border: 1px solid #444;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
    }

    .block-container {
      display: grid;
      grid-gap: 325px;
      grid-template-columns: repeat(3, 125px);
      grid-template-rows: repeat(3, 50px);
    }

  `;

  constructor() {
    super();
    this.header = 'My app';
    this.infoText1 = "88,000+ Students"
    this.infoText2 = "58% of the population from Penn";
    this.infoText3 = "Students from 50 states and 145 Countries";
    this.infoText4 = "Check out Undergraduate Admissions statistics";
  }

  render() {
    return html`
      <div class="block-container">
        <div class="info-block1">
          <h2>${this.infoText1}</h2>
        </div>
        <div class="info-block2">
          <h2>${this.infoText2}</h2>
        </div>
        <div class="info-block3">
          <h2>${this.infoText3}</h2>
        </div>
        <div class="info-block4">
          <h2>${this.infoText4}</h2>
        </div>
        <div class="info-block5">
          <h2>${this.infoText1}</h2>
        </div>
        <div class="info-block6">
          <h2>${this.infoText1}</h2>
        </div>
        <div class="info-block7">
          <h2>${this.infoText1}</h2>
        </div>
        <div class="info-block8">
          <h2>${this.infoText1}</h2>
        </div>
        <div class="info-block9">
          <h2>${this.infoText1}</h2>
        </div>
      </div>
    `;
  }
}

customElements.define('psu-block', PsuBlock);