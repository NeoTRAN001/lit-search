import { LitElement, html } from 'lit-element';
import style from './LitSearchStyle';

export class LitSearch extends LitElement {
  static get properties() {
    return {
      item:   { type: String },
      data:   { type: Array  },
      result: { type: Array }
    };
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();
    
    this.data = [
      {name: 'iPhone',        value: '1000'},
      {name: 'Xbox One',      value: '1000'},
      {name: 'Xbox Series X', value: '1000'},
      {name: 'Play Station',  value: '1000'},
      {name: 'TV LG',         value: '1000'}
    ];
    this.item = '';
    this.result= this.data;
  }

  render() {
    return html`
      <div class="container">
        <h1>Buscador LitElement</h1>

        <input type="text" id="form" @keyup=${this.getValue}/>
        <button @click=${this.getValue} id="button">Buscar</button>
        
        <ul>
          ${this.result.map(item => html`
            <li>${item.name} - ${item.value}</li>
          `)}
        </ul>
      </div>
    `;
  }

  getValue() {
    this.item = this.shadowRoot.querySelector('#form').value.toLowerCase();
    this.result = [];
    
    this.data.map(product => {
      let name = product.name.toLowerCase();
      
      if(name.indexOf(this.item) !== -1) {
        this.result = [...this.result, product]
      }
    });

    if(this.result.length < 1) this.result = [{name: 'Producto: ', value: 'no encontrado'}];
  }
}