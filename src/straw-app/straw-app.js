<<<<<<< HEAD
import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-ajax/iron-ajax.js';
=======
import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/iron-image/iron-image.js';

>>>>>>> 840ea4be3d202dad4c3ebca37ce35a6dc4c26040
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