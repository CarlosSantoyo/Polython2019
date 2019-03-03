import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-ajax/iron-ajax.js';
/**
 * @customElement
 * @polymer
 */
class StrawApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'straw-app'
      }
    };
  }
}

window.customElements.define('straw-app', StrawApp);
