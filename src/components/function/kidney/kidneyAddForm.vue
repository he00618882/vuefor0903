<template lang="html">
    <div class='block'>
        <div>
                        <table width='100%' border='0' cellSpacing='3' cellPadding='5' style="border-radius: 4px;  background-color: #64abe1;">
                <tr>
                    <td>
                        <div class='sub_tit' width='100%'>
                            {{storeData.type=='add'?"新增":"修改"}} 
                        </div>
                        <table width='100%' border='0' cellSpacing='0' cellPadding='0' class='tb_style'>
                            <tbody>
                                <tr>
                                    <td scope='row' align="left">監測編碼:</td>
                                    <td>
                                        <div class='selectbox'>
                                            <select v-model="efCode">
                                                <option v-for="list in dataList" :value="list.MN_NO">{{list.MN_NAM}}</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td scope='row'>監測項目:</td>
                                    <td>
                                        <div class='selectbox'>
                                            <select v-model="bit">
                                                <option value="A">水管</option>
                                                <option value="D">窩懶得打ㄅ欠</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td scope='row'>檢體來源:</td>
                                    <td>
                                        <div class='selectbox'>
                                            <select v-model="tsc">
                                                <option value="A">生效</option>
                                                <option value="D">失效</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </table>
            <br>
            <div class="btn_set">
                <input v-if="storeData.type=='edit'" type='button' value='修改' @click="isShow=true"/>
                <input v-if="storeData.type=='add'" type='button' value='新增' @click="isShow=true"/>
                <input type='button' value='取消' @click="storeData.type=''"/>
            </div>
        </div>

        
    </div>
</template>



<script>
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import 'vue2-datepicker/locale/zh-cn';
    
export default {
    name: 'kidneyAddForm',
    data () {
        return {
            id: '',
            chart: '',
            time1:"",
            time2:"",
            isShow:false,
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
            efCode:"",
            tsc:'A',
            bit:'',
        }
    },
    methods:{
        testCall(){

        }
    },
    props: ['storeData'],
    components: { DatePicker },
}
</script>