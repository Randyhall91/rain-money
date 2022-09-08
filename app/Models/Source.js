import { generateId } from "../Utils/generateId.js";






export class Source {
  constructor(data) {
    console.log('source model');
    this.income = data.income
    this.amount = data.amount
    this.budgetId = generateId()
  }

  get SourceTemplate() {
    return /*html*/`
    <div class="col-md-3 col-sm-4 p-2 border bg-secondary">
      <div class="d-flex justify-content-between">
        <h3>${this.income}</h3>
        <h3 class="text-success">$${this.amount}</h3>
      </div>
    </div>   
    
    `
  }




}