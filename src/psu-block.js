import { LitElement, html, css } from 'lit';

class PsuBlock extends LitElement {
  static properties = {
    
    infoText1: {type: String},
    infoText2: {type: String},
    textChange1: {type: String},
    textChange2: {type: String},

    gearBlock: {type: Boolean, reflect: true},
    block1: {type: Boolean, reflect: true},
    block2: {type: Boolean, reflect: true},
    block3: {type: Boolean, relflect: true},
    block4: {type: Boolean, reflect: true},
    block5: {type: Boolean, reflect: true},
    block6: {type: Boolean, reflect: true},
    block7: {type: Boolean, relflect: true},
    block8: {type: Boolean, reflect: true},
    block9: {type: Boolean, reflect: true},

  }

  static styles = css`
    :host {
      display: block;
      margin-left: 65px;
    }

    :host([block1]) .block {
      background-color: #1e407c;
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

    :host([block2]) .block {
      margin-top: 20px;
      background-color: #fff;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      font-size: 32px;
    }

    :host([block2]) .block p {
      font-size: 1rem;
      line-height: 1.5rem;
      width: 94%;
      color: #001e44
    }

    :host([block2]) .block b {
      background-color: #1e407c;
      height: 3px;
      font-weight: 700;
      margin-top: 1rem;
      margin-bottom: 0.75rem;
      display: block;
    }

    :host([block2]) .block h3 {
      text-align: left;
      color: #001e44
    }

    :host([block3]) .block {
      background-color: #1e407c;
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
      background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
    }

    /* :host([block3]) .block h3 {
      display: block;
      padding: 0 3.75rem;
      font-size: 1.75rem;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 1rem;
    }  */

    :host([block4]) .block {
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

    :host([block5]) .block {
      margin-top: 20px;
      background-color: #1e407c;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      color: white;
      font-size: 32px;
    }

    :host([block6]) .block {
      margin-top: 20px;
      background-color: #fff;
      padding: 0px 14px 0px 14px;
      width: 375px;
      height: 342.250px;
      text-align: center;
      font-size: 32px;
    }

    :host([block6]) .block p {
      font-size: 1rem;
      line-height: 1.5rem;
      width: 94%;
      color: #001e44
    }

    :host([block6]) .block b {
      background-color: #1e407c;
      height: 3px;
      font-weight: 700;
      margin-top: 1rem;
      margin-bottom: 0.75rem;
      display: block;
    }

    :host([block6]) .block h3 {
      text-align: left;
      font-size: 2.25rem;
      color: #001e44
    }

    :host([block7]) .block {
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

    :host([block8]) .block {
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

    :host([block9]) .block {
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

  `;

  constructor() {
    super();
    this.infoText1 = this.infoText1 || "default";
    this.infoText2 = this.infoText2 || "default";
  }

  render() {
    return html`
      <div class="block">
        <div class="infoBlock">
          <h3>${this.infoText1}</h3>
            <p>${this.gearBlock ? html`<b></b> <p> ${this.infoText2} </p>` : html` `}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('psu-block', PsuBlock);