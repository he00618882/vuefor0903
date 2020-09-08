<template lang="html">
    <div class='block'>
        <div>
            <table width='100%' border='0' cellSpacing='3' cellPadding='5' style="border-radius: 4px;  background-color: #64abe1;">
                <tr>
                    <td>
                        <div class='sub_tit' width='100%'>
                            查詢 
                        </div>
                        <table width='100%' border='0' cellSpacing='0' cellPadding='0' class='tb_style'>
                            <tbody>
                                <tr>
                                    <th colspan="6" align="right"><a class='add' @click="storeData.type='add'; storeData.nowDdata={}"><span></span>新增</a></th>
                                </tr>
                                <tr>
                                    <td scope='row' align="left" width='7%'>監測編碼:</td>
                                    <td>
                                        <div class='selectbox'>
                                            <select v-model="efCode">
                                                <option value=""></option>
                                                <option v-for="list in  storeData.dataList" :value="list.MN_NO">{{list.MN_NAM}}</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td scope='row' width='7%%'>監測項目:</td>
                                    <td>
                                        <div class='selectbox'>
                                            <select v-model="bit">
                                                <option value=""></option>
                                                <option v-for="listData in storeData.bitList" :value="listData.value">{{listData.name}}</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td scope='row' width='7%%'>檢體來源:</td>
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
                <input type='button' value='查詢' @click="testCall(); isShow=true"/>
                <input type='button' value='匯出' onclick="alert('木有這功能 別點了')" />
            </div>
        </div>

        <table class="listBox" width="100%" cellPadding="0" border="0" cellSpacing="0" v-if="isShow==true">
            <tbody>
                <tr>
                    <th>項次</th>
                    <th>監測編碼</th>
                    <th>監測項目</th>
                    <th>檢體來源</th>
                    <th>生效日期</th>
                    <th>失效日期</th>
                    <th>狀態</th>
                    <th>異動人員</th>
                    <th>異動時間</th>
                    <th>#</th>
                </tr>
                <tr v-for="value , index in seachData">
                    <td>{{index+1}}</td>
                    <td>{{value.MN_COD}}</td>
                    <td>{{base64Decode(value.MN_NAM)}}</td>
                    <td>{{base64Decode(value.srcNam)}}</td>
                    <td>{{value.EFF_DAT}}</td>
                    <td>{{value.STP_DAT}}</td>
                    <td>{{value.TSC}}</td>
                    <td>{{value.RTP}}</td>
                    <td>{{value.RTT}}</td>
                    <td><a @click="storeData.type='edit' ; let c =  Object.assign({}, value); c.MN_NAM = base64Decode(c.MN_NAM) ;c.srcNam = base64Decode(c.srcNam) ;  storeData.nowDdata= c ">修改</a></td>
                </tr>
            </tbody>
        </table>
            {{isDoSeach(storeData.isSeach)}}
    </div>
</template>



<script>
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import 'vue2-datepicker/locale/zh-cn';
    import textbox from '../../Common/textbox';
    import { Base64 } from 'js-base64'

export default {
    name: 'Query',
    Base64,
    data () {
        return {
            isShow:false,
            seachData:[
               
            ],
            efCode:"",
            tsc:'A',
            bit:'',
        }
    },
    methods:{
        testCall(){
            let tag = 'pvt.if.getMnCodData'
            let param = new FormData()
            let conf = {
                params: {
                wtag: tag
                }
            };
            let obj = {
                wb_base64: 0, 
                encode: "N",
                TSC: this.tsc,
                MN_NO :(this.efCode ? this.efCode :''),
                SRC :(this.bit ? this.bit :'')
            }
            param.append("var", Base64.encode(JSON.stringify(obj)));
            this.$axios.post("/api", param, conf)
            .then(response => {
                //console.log(response)
                //console.log(Base64.decode(response.data))
                
                let e = JSON.parse(Base64.decode(response.data)).val
                this.seachData = e ;


            })
            .catch(error => {
                console.log(error)
            })
        },
        base64Decode(value){
            return Base64.decode(value)
        },
        isDoSeach(){
            if(this.storeData.isSeach){
                this.storeData.isSeach=false;
                this.testCall()
            }
        }
    },
    props: ['storeData'],
    components: { DatePicker ,textbox},
}
</script>