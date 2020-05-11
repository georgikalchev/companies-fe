import { createSelector } from 'reselect'

export const selectExpandedCompanies = createSelector(
  state => state.ui,
  ui => ui.expandedCompanies
)
export const selectExpandedJobAreas = createSelector(
  state => state.ui,
  ui => ui.expandedJobAreas
)
export const selectSelected = createSelector(
  state => state.ui,
  ui => ui.selected
)
export const selectEditPanelVisibility = createSelector(
  state => state.ui,
  ui => ui.editPanel
)
export const selectMinorErrorVisibility = createSelector(
  state => state.ui,
  ui => ui.displayMinorError
)

