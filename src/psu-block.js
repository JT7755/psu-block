import { LitElement, html, css } from 'lit';

class PsuBlock extends LitElement {
  static properties = {
    
    infoText1: {type: String},
    infoText2: {type: String},
    gearBlock: {type: Boolean, reflect: true},
    block1: {type: Boolean, reflect: true},
    block2: {type: Boolean, reflect: true},
    block3: {type: Boolean, relflect: true},
    block4: {type: Boolean, reflect: true},
    block5: {type: Boolean, reflect: true}

  }

  static styles = css`
    :host {
      display: block;
      margin-left: 55px;
    }

    :host([block1]) .block {
      background-color: #1e407c;
      padding: 100px 14px 0px 14px;
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
      margin-top: 20px;
      position: relative;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      color: white;
      font-size: 32px;
    }

    :host([block1]) .block .infoBlock1{
      padding: 0 14%;
      margin-top: 100px;
      font-size: 2.25rem;
    }

    :host([block2]) .block {
      margin-top: 20px;
      background-color: #fff;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      font-size: 32px;
    }

    :host([block2]) .block h3{
      text-align: left;
      color: #001e44;
      margin: 20% 0 0;
      font-size: 2.25rem;
    }

    :host([block2]) .block p {
      color: #001e44;
      font-size: 1.5rem;
      line-height: 1.5rem;
      width: 94%;
      text-align: left;
    }

    :host([block2]) .block b {
      padding-top: 0px;
      padding-right: 14%;
      padding-bottom: 0px;
      padding-left: 14%;
      background-color: #1e407c;
      height: 3px;
      font-weight: 700;
      display: block;
    }

    :host([block3]) .block {
      margin-top: 20px;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 1.17rem;
      background-color: rgb(30,64,124); 
      background: -moz-linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%); 
      background: -webkit-linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%); 
      background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
    }

    :host([block3]) .block h3 {
      padding: 0 14%;
      margin-top: 100px;
      font-size: 2.25rem;
      text-align: left;
    }

    .infoBlock4 {
      background-color: rgba(0, 3, 33, 0.5); 
      background-image: url(https://www.psu.edu/psu-edu-assets/images/power-facts/penn-state-tuition.jpg);
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
      margin-top: 20px;
      position: relative;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      color: white;
      font-size: 32px;
    }

    .infoBlock4 h3 {
      padding: 0 14%;
      margin-top: 100px;
      font-size: 2.25rem;
    }

    :host([block1]) .block {
      margin-top: 20px;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      color: white;
      font-size: 32px;
    }

    .infoBlock5 h3 {
      padding: 0 14%;
      margin-top: 100px;
      font-size: 2.25rem;
      text-align: left;
    }

    .infoBlock6 {
      margin-top: 20px;
      background-color: #fff;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      font-size: 32px;
    }

    .infoBlock6 b {
      padding-top: 0px;
      padding-right: 14%;
      padding-bottom: 0px;
      padding-left: 14%;
      background-color: #1e407c;
      height: 3px;
      font-weight: 700;
      display: block;
    }

    .infoBlock7 {
      margin-top: 20px;
      background-color: #001e44; 
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
    }

    .infoBlock7 h3 {
      padding: 0 14%;
      margin-top: 100px;
      font-size: 2.25rem;
      text-align: left;
    }

    .infoBlock8 {
      margin-top: 20px;
      background-color: #001e44; 
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      color: white;
      font-size: 32px;
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
    }

    .infoBlock8 h3 {
      padding: 0 14%;
      margin-top: 100px;
      font-size: 2.25rem;
      text-align: left;
    }

    .infoBlock9 {
      margin-top: 20px;
      background-color: rgba(0, 3, 33, 0.5); 
      background-image: url(https://www.psu.edu/psu-edu-assets/images/power-facts/data-digest.jpg);
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
      position: relative;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      color: white;
      font-size: 32px;
    }

    .infoBlock9 h3 {
      padding: 0 14%;
      margin-top: 100px;
      font-size: 2.25rem;
    }

  `;

  constructor() {
    super();
    this.infoText1 = this.infoText1 || "default";
    this.infoText2 = this.infoText2 || "default";

    // this.infoText2 = "58%";
    // this.infoText21 = "Of students are Pennsylvania residents.";
    // this.infoText3 = "Students from 50 states and 145 Countries";
    // this.infoText4 = "Check out Undergraduate Admissions statistics";
    // this.infoText5 = "Nearly 10,000 international students"
    // this.infoText6 = "39%";
    // this.infoText7 = "Of students are from diverse backgrounds.";
    // this.infoText8 = "7,900+ faculty across all campuses";
    // this.infoText9 = "759,000+ alumni";
    // this.infoText10 = "See Penn State's Data Digest dashboards";
  }

  render() {
    return html`
      <div class="block">
        <div class="infoBlock1">
          <h3>${this.infoText1}</h3>
            <p>${this.gearBlock ? html`<b></b> <p> ${this.infoText2} </p>` : html` `}</p>
        </div>
      </div>

        <!-- <div class="infoBlock2">
          <h3>${this.infoText2}</h3>
          <b></b>
          <p> ${this.infoText21}</p>
        </div>
        <div class="infoBlock3">
          <h3>${this.infoText3}</h3>
        </div>
        <div class="infoBlock4">
          <h3>${this.infoText4}</h3>
        </div>
        <div class="infoBlock5">
          <h3>${this.infoText5}</h3>
        </div>
        <div class="infoBlock6">
          <h3>${this.infoText6}</h3>
          <b></b>
          <p> ${this.infoText7}</p>
        </div>
        <div class="infoBlock7">
          <h3>${this.infoText8}</h3>
        </div>
        <div class="infoBlock8">
          <h3>${this.infoText9}</h3>
        </div>
        <div class="infoBlock9">
          <h3>${this.infoText10}</h3>
        </div>
      </div> -->
    `;
  }
}

customElements.define('psu-block', PsuBlock);