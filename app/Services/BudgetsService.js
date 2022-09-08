import { appState } from "../AppState.js";
import { Budget } from "../Models/Budget.js";
import { saveState } from "../Utils/Store.js";




class BudgetsService {
  ifPurchased(id) {
    let budget = appState.budgets.find(budget => budget.id == id)

    // @ts-ignore
    budget.purchased = !budget.purchased

    appState.emit('budgets')
    saveState('budgets', appState.budgets)
  }

  createBudget(formData) {
    let budget = new Budget(formData)
    appState.budgets = [budget, ...appState.budgets]
    console.log(appState.budgets);
    saveState('budgets', appState.budgets)

  }

}

export const budgetsService = new BudgetsService()