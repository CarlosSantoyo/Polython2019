import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/iron-image/iron-image.js';

/**
 * @customElement
 * @polymer
 */
class StrawApp extends PolymerElement {
    static get template() {
        return html `
      <style>
        :host {
          display: block;
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