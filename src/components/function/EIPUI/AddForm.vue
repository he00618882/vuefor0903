<template lang="html">
    <div class='block'>
        <div>
            <table width='100%' border='0' cellSpacing='3' cellPadding='5' style="border-radius: 4px;  background-color: #64abe1;" >
                <tr>
                    <td>
                        <div class='sub_tit' width='100%'>
                            {{storeData.type=='add'?"新增":"修改"}} 
                        </div>
                        <table width='100%' border='0' cellSpacing='0' cellPadding='0' class='tb_style'>
                            <tbody>
                                <tr>
                                    <td scope='row' align="left"  width='10%' >監測編碼:</td>
                                    <td >
                                        <div v-if="storeData.type=='edit'">
                                            {{storeData.nowDdata.MN_COD}}
                                        </div>
                                        <div class='inputbox' v-if="storeData.type=='add'">
                                            <input type='text'  v-model="storeData.nowDdata.MN_COD"  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope='row' align="left">監測項目:</td>
                                    <td>
                                        <div class='inputbox' >
                                            <input type='text'  v-model="storeData.nowDdata.MN_NAM"  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope='row'>檢體來源:</td>
                                    <td>
                                        <div class='selectbox'>
                                            <select v-model="storeData.nowDdata.SRC">
                                                <option v-for="listData in storeData.bitList" :value="listData.value">{{listData.name}}</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope='row'>狀態:</td>
                                    <td>
                                        <div class='selectbox'>
                                            <select v-model="storeData.nowDdata.TSC">
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
                <input type='button' :value="storeData.type=='edit'?'修改':'新增'" @click="callToChange()"/>
                <input type='button' value='取消' @click="storeData.type=''"/>
            </div>
        </div>

        
    </div>
</template>



<script>
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import 'vue2-datepicker/locale/zh-cn';
    import { Base64 } from 'js-base64'
export default {
    name: 'AddForm',
    data () {
        return {
            
        }
    },
    methods:{
        callToChange(){
            let tag = 'pvt.if.trnMnCodData'
            let param = new FormData()
            let conf = {
                params: {
                wtag: tag
                }
            };
            let obj = {};
            if(this.storeData.type=='add'){
                obj = {
                    wb_base64: 0, 
                    encode: "N",
                    funTyp: 'A',
                    MN_COD :this.storeData.nowDdata.MN_COD ,
                    MN_NAM :this.storeData.nowDdata.MN_NAM ,
                    SRC :this.storeData.nowDdata.SRC,
                    RTP :'13131',
                }
            }else if(this.storeData.nowDdata.TSC=='A'){
                obj = {
                    wb_base64: 0, 
                    encode: "N",
                    funTyp: 'U',
                    MN_NO :this.storeData.nowDdata.MN_NO ,
                    MN_NAM :this.storeData.nowDdata.MN_NAM ,
                    SRC :this.storeData.nowDdata.SRC,
                    RTP :'13131',
                }
            }else{
                obj = {
                    wb_base64: 0, 
                    encode: "N",
                    funTyp: 'D',
                    MN_NO :this.storeData.nowDdata.MN_NO ,
                }
            }
            param.append("var", Base64.encode(JSON.stringify(obj)));
            this.$axios.post("/api", param, conf)
            .then(response => {
                let e = JSON.parse(Base64.decode(response.data)).sts
                if(e == '000000'){
                    alert('成功了~ 叭!叭!~叭!~把!叭!邦!邦!邦!');
                    this.storeData.isSeach=true;
                    this.storeData.type='';
                }else{
                    alert('失敗了ㄅㄅ');
                }
                this.seachData = e ;
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    props: ['storeData'],
    components: { DatePicker },
}
</script>