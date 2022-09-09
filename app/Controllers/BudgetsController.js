import { appState } from "../AppState.js";
import { Budget } from "../Models/Budget.js";
import { budgetsService } from "../Services/BudgetsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";
import { _drawTotalSources } from "./SourcesController.js";

function _drawBudgets() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.BudgetTemplate)
  setHTML('budgets', template)
}



function _drawTotalBudget() {
  let total = 0
  let filtered = appState.budgets.filter(f => f.purchased == true)
  filtered.forEach(b => total += b.price)
  setHTML('totalBudget', total)
  return total
}

_drawTotalSources()

function _moneyLeft() {
  let totalBudget = _drawTotalBudget()
  let totalSource = _drawTotalSources()
  console.log(totalBudget, totalSource, 'totals');
  let total = 0
  total = totalSource - totalBudget
  setHTML('totalMoney', total)
}
export class BudgetsController {
  constructor() {
    _drawBudgets()
    _drawTotalBudget()
    // console.log('budgets controller is working')
    appState.on('budgets', _drawBudgets)
    appState.on('budgets', _drawTotalBudget)
    _moneyLeft()
  }
  createBudget() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      budgetsService.createBudget(formData)
      // @ts-ignore
      form.reset()


    } catch (error) {
      console.error('[CREATE_BUDGET]', error);
    }
  }

  ifPurchased(id) {
    budgetsService.ifPurchased(id)
  }


}