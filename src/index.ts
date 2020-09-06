import {
  LitElement,
  html,
  nothing,
  css,
  customElement,
  property,
} from "lit-element";

@customElement("compatability-checker")
export class CompatabilityChecker extends LitElement {
  @property({ type: String }) compatability = "";
  @property({ type: Number }) hasPerson = true;

  getCompatability(person) {
    console.log(person);
    this.hasPerson = !!person;
    console.log(this.hasPerson);

    if (person == "Andreas") {
      this.compatability = "You are compawtible 😻😻😻";
    } else if (person == "Trisha") {
      this.compatability = "You are in love with yourself, that is amazing 🤩";
    } else if (person != "Trisha" || "Andreas") {
      this.compatability = "Thank you, next 🙄?";
    }
  }

  render() {
    return html`

      <style>
        section p {
          font-size: 11px; 
          font-family: Arial; 
        }

        h3 {
          font-family: Arial;
        }

        input {
          padding: 10px; 
          border-radius: 3px; 
          outline: none; 
          border: 1px solid rgba(0,0,0,0.3);      
        }
      </style>

      <section>
        <input 
          @change="${(e) => {
            this.getCompatability(e.target.value);
          }}" 
          placeholder="Who is your S.O.?">
        </input>
<!--
        <p>️FYI S️.️O️.️ ️s️t️a️n️d️s️ ️f️o️r️ ️s️i️g️n️i️f️i️c️a️n️t️ ️o️t️h️e️r️️️ ️n️o️t️ ️S️T️A️C️K️O️V️E️R️F️L️O️W️ 😜</p>
-->
      </section>

      <div ?hidden=${!this.hasPerson}>
        <h3>${this.compatability}</h3>
      </div>

      <mwc-button label="standard"></mwc-button>


    `;
  }
}
