import {RECEIVE_FEN,RECEIVE_BRAND} from "./mutation-types"
export default {
  [RECEIVE_FEN](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_BRAND](state, {brand}) {
    state.brand = brand
  }
}
