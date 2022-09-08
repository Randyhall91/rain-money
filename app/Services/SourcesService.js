import { appState } from "../AppState.js"
import { Source } from "../Models/Source.js"
import { saveState } from "../Utils/Store.js"




class SourceService {

  createSource(formData) {
    let source = new Source(formData)
    appState.sources = [source, ...appState.sources]
    saveState('sources', appState.sources)

  }
}

export const sourceService = new SourceService