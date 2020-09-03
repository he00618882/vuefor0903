import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定義一個新的 Vue Store
const mainStore = new Vuex.Store({
    state: {
      user: "使用者A",
    },
    mutations: {
      // 將state設定為參數
      showData(state,value) {
        
        state.code = value.code;
        state.description = value.description;
        state.rate = value.rate;
        state.rate_float = value.rate_float;
        // console.log(value)
        // // let e = 'message';
        // Vue.set(state, 'theShoww' ,value);
        // console.log(state)
      }, 
    }

})
export default mainStore;