import { LitElement, html } from 'lit-element';
import style from './LitSearchStyle';

export class LitSearch extends LitElement {
  static get properties() {
    return {
      item: { type: String },
      data: { type: Array  }
    };
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();
    
    this.item = '';
    this.data = [];
  }

  render() {
    return html`
      <p>Hola</p>
    `;
  }
}
