import { CLOSE_NAVIGATION_DRAWER, OPEN_NAVIGATION_DRAWER, SET_SECTION } from './action-types'
import { CREATE_STORY_STARTED, OPEN_STORY_STARTED } from '../story/action-types'

import { WELCOME_SECTION } from '../welcome/constants'
import { createReducer } from '../../shared/redux'

const initialState = {
  section: WELCOME_SECTION,
  drawerOpen: false
}

const closeDrawer = (state) => ({
  ...state,
  drawerOpen: false
})

export default createReducer(initialState, {
  [SET_SECTION]: (state, { id }) => ({
    ...state,
    section: id,
    drawerOpen: false
  }),

  [OPEN_NAVIGATION_DRAWER]: (state) => ({
    ...state,
    drawerOpen: true
  }),
  [CLOSE_NAVIGATION_DRAWER]: closeDrawer,
  [OPEN_STORY_STARTED]: closeDrawer,
  [CREATE_STORY_STARTED]: closeDrawer
})
