import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class StrawApp extends PolymerElement {
    static get template() {
        return html `
      <style>
        :host {
          display: inline-block;
        }
      </style>
      <h2 >STRAW-app [[prop1]]!</h2>
    `;
    }

    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'Gamer Streaming'
            }
        };
    }

}

window.customElements.define('straw-app', StrawApp);