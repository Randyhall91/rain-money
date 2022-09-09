import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"




export class Budget {
  constructor(data) {
    this.name = data.name
    this.price = parseInt(data.price)
    this.purchased = data.purchased || false
    this.id = data.id || generateId()
  }
  get BudgetTemplate() {
    return /*html*/`
    <div class="col-md-3 mt-3 p-2 m-2 border bg-light">
      <div class="d-flex justify-content-between">
        <h3>${this.name}</h3>
        <h3 class="text-success">$${this.price}</h3>
      </div>
      <div>
        <p>Purchased <input onchange="app.budgetsController.ifPurchased('${this.id}')" type="checkbox" ${this.purchased ? 'checked' : ''}></p>
      </div>
    </div>
  `
  }

}