import { LitElement, html, css } from 'lit';

class PsuBlock extends LitElement {
  static properties = {

    hasImage: {type: Boolean},
    image: {type: Boolean},

    url: {type: String},
    urlImage: {type: String},
    
    infoText1: {type: String},
    infoText2: {type: String},

    gearBlock: {type: Boolean, reflect: true},
    block1: {type: Boolean, reflect: true},
    block2: {type: Boolean, reflect: true},
    block3: {type: Boolean, relflect: true},
    block4: {type: Boolean, reflect: true},
    block5: {type: Boolean, reflect: true},
    block6: {type: Boolean, reflect: true},

  }

  static styles = css`
    :host {
      Display: block;
      --beaverblue: #1e407c;
      --whiteout: #fff;
      --nittanynavy: #001e44;
      --blockwidth: 375px;
      --blockheight: 342px;
      --fontsize: 32px;
      --fontweight: 700;
      --fontfam: "Roboto", sans-serif;
      margin-left: 90px;
    }

    :host([block1]) .block {
      background-color: var(--beaverblue);
      color: var(--whiteout);
      margin-top: 20px;
      position: relative;
      width: var(--blockwidth);
      height: var(--blockheight);
      font-size: 28px;
    }

    :host([block1]) .infoBlock h3 {
      padding-right: 18%;
      padding-left: 14%;
      padding-top: 29%;
      padding-bottom: 16%;
      text-align: left;
    }

    :host([block2]) .block {
      margin-top: 20px;
      background-color: var(--whiteout);
      width: var(--blockwidth);
      height: var(--blockheight);
      text-align: center;
      font-size: 32px;
    }

    :host([block2]) .infoBlock p {
      display: block;
      padding-left: 25px;
      margin-right: 25px;
      font-size: 18px;
      color: var(--nittanynavy);
      text-align: left;
    }

    :host([block2]) .infoBlock b {
      background-color: var(--beaverblue);
      margin-left: 24px;
      margin-right: 25px;
      height: 3px;
      font-weight: var(--fontweight);
      display: block;
    }

    :host([block2]) .infoBlock h3 {
      font-size: 35px;
      padding-top: 20%;
      padding-left: 13%;
      text-align: left;
      color: var(--nittanynavy);
    }

    :host([block3]) .block {
      background-color: var(--beaverblue);
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
      margin-top: 20px;
      position: relative;
      width: var(--blockwidth);
      height: var(--blockheight);
      color: white;
      font-size: 32px;     
      background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
    }

    :host([block3]) .infoBlock h3 {
      text-align: left;
      padding-right: 14%;
      padding-left: 14%;
      padding-top: 27%;
      padding-bottom: 16%;
    }

    :host([block4]) .block {
      background-color: rgba(0, 3, 33, 0.5); 
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
      margin-top: 20px;
      width: var(--blockwidth);
      height: var(--blockheight);
      color: var(--whiteout);
      font-size: 32px;
    } 

    :host([block4]) .infoBlock h3 {
      padding-right: 14%;
      padding-left: 10%;
      padding-top: 22%;
      padding-bottom: 3%;
    }
    
    :host([url]) .infoBlock svg {
      padding-left: 340px;
    }

    :host([block4]) svg:hover,
    :host([block4]) svg:focus {
      width: 32px;
      height: 32px;
    }


    :host([block5]) .block {
      margin-top: 20px;
      background-color: #001e44; 
      width: var(--blockwidth);
      height: var(--blockheight);
      text-align: center;
      color: white;
      font-size: 32px;
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
    }

    :host([block5]) .infoBlock h3 {
      text-align: left;
      padding-right: 20%;
      padding-left: 14%;
      padding-top: 25%;
      padding-bottom: 14%;
    }

    :host([block6]) .block {
      margin-top: 20px;
      background-color: rgba(0, 3, 33, 0.5); 
      background-size: cover;
      background-position: center;
      background-blend-mode: multiply;
      width: var(--blockwidth);
      height: var(--blockheight);
      color: var(--whiteout);
      font-size: 32px;
    }

    :host([block6]) .infoBlock h3 {
      padding-right: 14%;
      padding-left: 10%;
      padding-top: 22%;
      padding-bottom: 3%;
    }

    :host([block6]) svg:hover,
    :host([block6]) svg:focus {
      width: 32px;
      height: 32px;
    }
  `;

  constructor() {
    super();
    this.infoText1 = this.infoText1 || "default";
    this.infoText2 = this.infoText2 || "default";

    this.url = null;
    this.urlImage = null;
  }

  render() {
    return html`
      ${this.urlImage ? html `<div class="block" style='background-image: url("${this.urlImage}");'>
        <div class="infoBlock">
          <h3>${this.infoText1}</h3>
            <p>${this.gearBlock ? html`<b></b> <p> ${this.infoText2} </p>` : html` `}</p>
          <div> ${this.url ? html `
          <a href=${this.url}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_173_1032" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9"></rect>
                      </mask>
                  <g mask="url(#mask0_173_1032)">
                      <path d="M4.22222 22C3.61111 22 3.08796 21.7824 2.65278 21.3472C2.21759 20.912 2 20.3889 2 19.7778V4.22222C2 
                                3.61111 2.21759 3.08796 2.65278 2.65278C3.08796 2.21759 3.61111 2 4.22222 2H10.8889C11.2037 2 11.4676 
                                2.10648 11.6806 2.31944C11.8935 2.53241 12 2.7963 12 3.11111C12 3.42593 11.8935 3.68981 11.6806 3.90278C11.4676 
                                4.11574 11.2037 4.22222 10.8889 4.22222H4.22222V19.7778H19.7778V13.1111C19.7778 12.7963 19.8843 12.5324 20.0972 
                                12.3194C20.3102 12.1065 20.5741 12 20.8889 12C21.2037 12 21.4676 12.1065 21.6806 12.3194C21.8935 12.5324 22 12.7963 
                                22 13.1111V19.7778C22 20.3889 21.7824 20.912 21.3472 21.3472C20.912 21.7824 20.3889 22 19.7778 22H4.22222ZM8.66667 
                                15.3333C8.46296 15.1296 8.36111 14.8704 8.36111 14.5556C8.36111 14.2407 8.46296 13.9815 8.66667 13.7778L18.2222 
                                4.22222H15.3333C15.0185 4.22222 14.7546 4.11574 14.5417 3.90278C14.3287 3.68981 14.2222 3.42593 14.2222 3.11111C14.2222 2.7963 
                                14.3287 2.53241 14.5417 2.31944C14.7546 2.10648 15.0185 2 15.3333 2H20.8889C21.2037 2 21.4676 2.10648 21.6806 2.31944C21.8935 2.53241 22 2.7963 22 
                                3.11111V8.66667C22 8.98148 21.8935 9.24537 21.6806 9.45833C21.4676 9.6713 21.2037 9.77778 20.8889 9.77778C20.5741 9.77778 20.3102 9.6713 20.0972 9.45833C19.8843 9.24537 
                                19.7778 8.98148 19.7778 8.66667V5.77778L10.1944 15.3611C9.99074 15.5648 9.74074 15.6667 9.44445 15.6667C9.14815 15.6667 8.88889 15.5556 
                                8.66667 15.3333Z" fill="#CCE9FF">
                  </path>
                </g>
            </svg>
          </a>
          ` :html` `}
        </div>
      </div>` : html` <div class="block">
        <div class="infoBlock">
          <h3> ${this.infoText1}</h3>
          <p> ${this.gearBlock ? html `<b></b> <p> ${this.infoText2} </p> `: html ` `}</p>
      </div>
  </div> `}
    `;
  }
}

customElements.define('psu-block', PsuBlock);