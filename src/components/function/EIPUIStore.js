import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定義一個新的 Vue Store
const EIPUIStore = new Vuex.Store({
    state: {
        type:'',
        nowDdata:{
            MN_COD:"",
            MN_NAM:"",
            SRC:"",
            TSC:"",
        },
        bitList:[
            {value:'1',name:'水質'},
            {value:'2',name:'器械'},
            {value:'3',name:'環境'},
            {value:'4',name:'人員'},
         ],
        isSeach:'false',
         dataList:[{
             MN_NO: '20190128084743000021',
             MN_COD: 'AIRB',
             MN_NAM: '空氣落菌',
             SRC: '1'
             },
             {
             MN_NO: '20190201135955000023',
             MN_COD: 'BCWQ',
             MN_NAM: '燒傷中心水質',
             SRC: '1'

             },
             {
             MN_NO: '20190308134623000026',
             MN_COD: 'ERPA',
             MN_NAM: '員工餐廳準備區',
             SRC: '3'

             },
             {
             MN_NO: '20190123143114000020',
             MN_COD: 'ERTB',
             MN_NAM: '員工餐廳餐具',
             SRC: '2'
             },
             {
             MN_NO: '20190306110518000025',
             MN_COD: 'ERWQ',
             MN_NAM: '員工餐廳水質',
             SRC: '1'
             },
             {
             MN_NO: '20190115144044000004',
             MN_COD: 'ESMN',
             MN_NAM: '內視鏡監測',
             SRC: '2'
             },
             {
             MN_NO: '20190314100148000029',
             MN_COD: 'ESMN-G',
             MN_NAM: '內視鏡監測(腸胃管鏡)',
             SRC: '1'
             }],
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
export default EIPUIStore;