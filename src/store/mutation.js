import {RECEIVE_FEN,RECEIVE_BRAND,RECEIVE_HOME} from "./mutation-types"
export default {
  [RECEIVE_FEN](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_BRAND](state, {brand}) {
    state.brand = brand
  },
  [RECEIVE_HOME](state,{home}){
    state.home = home
  }
}
