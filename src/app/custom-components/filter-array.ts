import { LitElement, html, property, customElement } from 'lit-element';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {

  @property({type: Array}) rankings: any[] = [];
  @property() title: string;
  numbers: any[] = [];
  strings: any[] = [];

  constructor(){
      super();
  }

   arrayManipulation(){
    this.rankings.forEach((value) => {
        value == Number(value) ? this.numbers.push(value)  : this.strings.push(value);
    });
  }
  
  render() {
    // call arrayManipulation for business logic
    this.arrayManipulation();
    return html`
        <h1>${this.title}</h1>
        <p>Ranking Array: ${this.rankings}</p>
        <p>Numbers Array ${this.numbers.map(item => html`<li> ${item}</li>`)}</p>
        <p>Strings Array ${this.strings.map(item => html`<li> ${item}</li>`)}</p>`;
  }
}
