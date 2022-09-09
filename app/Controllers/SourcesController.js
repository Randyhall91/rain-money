import { appState } from "../AppState.js"
import { sourceService } from "../Services/SourcesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"


function _drawSources() {
  let template = ''
  appState.sources.forEach(source => template += source.SourceTemplate)
  setHTML('sources', template)
}
export function _drawTotalSources() {
  let total = 0
  appState.sources.forEach(source => total += source.amount)
  setHTML('totalSources', total)
  return total
}

export class SourcesController {

  constructor() {
    _drawSources()
    _drawTotalSources()
    appState.on('sources', _drawSources)
    appState.on('sources', _drawTotalSources)

    // console.log('hello from sources controller');
  }

  createSources() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      sourceService.createSource(formData)
      // @ts-ignore
      form.reset()


    } catch (error) {
      console.error('[CREATE_BUDGET]', error);
    }

  }




}