import {reqMsite,reqfenlei,reqbrand} from "../api"
import {RECEIVE_FEN,RECEIVE_BRAND} from "./mutation-types"
export default {
  async getTypes({commit}, callback){
    const result = await reqfenlei()
    commit(RECEIVE_FEN,{categorys:result.data})
    callback && callback()
  },
  async getBrand({commit}){
    const result = await reqbrand()
    commit(RECEIVE_BRAND,{brand:result.data})
  }
}
