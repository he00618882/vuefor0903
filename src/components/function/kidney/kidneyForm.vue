

<template lang="html">
    <div class="block">
        <div class='sub_tit'>
            1.提供者資料
        </div>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tbody>
                <tr class="bg">
                    <td>收案途徑:</td>
                    <td> 
                        <input type="radio" id="acceptance_channels_Y" value="Y" v-model="DC001.Q0001">
                        <label for="acceptance_channels_Y">本院</label>
                        <input type="radio" id="acceptance_channels_N" value="N" v-model="DC001.Q0001">
                        <label for="acceptance_channels_N">轉入(變更登錄等候)</label>
                    </td>
                    <td>填表人員:</td>
                    <td> 
                        <div class="inputbox2">
                            <input type="text" v-model="DC001.Q0002" />
                        </div>
                    </td>
                    <td>腎臟內科負責醫師:</td>
                    <td> 
                        <div class="inputbox2">
                            <input type="text" v-model="DC001.Q0003"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>腎臟外科負責醫師:</td>
                    <td> 
                        <div class="inputbox2">
                            <input type="text" v-model="DC001.Q0004"/>
                        </div>
                    </td>
                    <td>登錄日期:</td>
                    <td> 
                        <date-picker v-model="DC001.Q0005" valueType="format"></date-picker>
                    </td>
                    <td>首次登錄日期:</td>
                    <td> 
                        <date-picker v-model="DC001.Q0006" valueType="format"></date-picker>
                    </td>
                </tr>
                <tr class="bg">
                    <td>CCPC收案:</td>
                    <td colspan="5"> 
                        <input type="radio" id="CCPC_F" value="F" v-model="DC001.Q0007.Q0007">
                        <label for="CCPC_F">否</label>
                        <input type="radio" id="CCPC_T" value="T" v-model="DC001.Q0007.Q0007">
                        <label for="CCPC_T">是</label>
                        <span v-if="DC001.Q0007.Q0007 == 'T'">
                            收案日期:<date-picker v-model="DC001.Q0007.S0002" valueType="format"></date-picker>
                        </span>
                    </td>
                </tr>
                
            </tbody>
        </table>


        <br><br>
        <div class='sub_tit'>
            2.等候者資料
        </div>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tbody>
                <tr class="bg" >
                    <td width="10%">姓名:</td>
                    <td width="30%"> 
                        <div class="inputbox2">
                            <input type="text" v-model="DC002.Q0001" />
                        </div>
                    </td>
                    <td width="10%">性別:</td>
                    <td width="25%"> 
                        <input type="radio" id="waiter_gender_M" value="M" v-model="DC002.Q0002">
                        <label for="waiter_gender_M">男</label>
                        <input type="radio" id="waiter_gender_F" value="F" v-model="DC002.Q0002">
                        <label for="waiter_gender_F">女</label>
                    </td>
                    <td width="10%">身分證(護照)號碼:</td>
                    <td width="15%"> 
                        <div class="inputbox2">
                            <input type="text" v-model="DC002.Q0003" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>出生日期 :</td>
                    <td>
                        <span class="inputbox2">
                            <date-picker  v-model="DC002.Q0004" valueType="format" ></date-picker>
                            年齡:<input  type="number" v-model="waiter_age" style="width:80px;"  />
                        </span>
                    </td>
                    <td>血型:</td>
                    <td> 
                        <input type="radio" id="waiter_blood_type_A" value="A" v-model="DC002.Q0005">
                        <label for="waiter_blood_type_A">A</label>
                        <input type="radio" id="waiter_blood_type_B" value="B" v-model="DC002.Q0005">
                        <label for="waiter_blood_type_B">B</label>
                        <input type="radio" id="waiter_blood_type_AB" value="AB" v-model="DC002.Q0005">
                        <label for="waiter_blood_type_AB">AB</label>
                        <input type="radio" id="waiter_blood_type_O" value="O" v-model="DC002.Q0005">
                        <label for="waiter_blood_type_O">O</label>
                    </td>
                    <td>Rh:</td>
                    <td>
                        <input type="radio" id="waiter_Rh+" value="+" v-model="DC002.Q0006">
                        <label for="waiter_Rh+">+</label>
                        <input type="radio" id="waiter_Rh-" value="-" v-model="DC002.Q0006">
                        <label for="waiter_Rh-">-</label>
                    </td>
                </tr>
                <tr class="bg">
                    <td>醫院病歷號碼</td>
                    <td>
                        <div class="inputbox">
                            <input type="text"  v-model="DC002.Q0007" />
                        </div>
                    </td>
                    <td>身高:</td>
                    <td> 
                        <div class="inputbox2">
                            <input type="text"  v-model="DC002.Q0008" />
                        </div>
                    </td>
                    <td>體重:</td>
                    <td> 
                        <div class="inputbox2">
                            <input type="text" v-model="DC002.Q0009" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>職業:</td>
                    <td> 
                        <div class="selectbox" >
                            <select v-model="DC002.Q0010">
                                <option v-for="list in professionList" :value="list.value">{{list.name}}</option>
                            </select>
                        </div>
                    </td>
                    <td>教育程度:</td>
                    <td> 
                        <div class="selectbox" >
                            <select v-model="DC002.Q0011">
                                <option  value=""></option>
                                <option v-for="list in educationList" :value="list.value">{{list.name}}</option>
                            </select>
                        </div>
                    </td>
                    <td>婚姻狀況:</td>
                    <td> 
                        <div class="selectbox" >
                            <select v-model="DC002.Q0012">
                                <option v-for="list in maritalList" :value="list.value">{{list.name}}</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr  class="bg">
                    <td>國籍:</td>
                    <td colspan="1"> 
                        <input type="radio" id="waiter_nationality_TW" value="TW" v-model="DC002.Q0013.Q0013">
                        <label for="waiter_nationality_TW">中華民國</label>
                        <input type="radio" id="waiter_nationality_OT" value="OT" v-model="DC002.Q0013.Q0013">
                        <label for="waiter_nationality_OT">其他:</label>
                        <span  v-if="DC002.Q0013.Q0013 == 'OT' ">
                        請說明：
                        <span class="selectbox" >
                            <input type="text" style="width:200px;" v-model="DC002.Q0013.S0002" />
                        </span>
                        </span>
                    </td>
                    <td>居住地址:</td>
                    <td colspan="3">
                        <input type="text"  v-model="DC002.Q0014" />
                    </td>
                </tr>
                <tr>
                    <td> 聯絡人1</td>
                    <td colspan="5">聯絡電話:
                        <div class="inputbox2">
                            <input type="text"  v-model="DC002.Q0015.S0001" />
                        </div>
                        關係:
                        <div class="inputbox2">
                            <input type="text"  v-model="DC002.Q0015.S0002" />
                        </div>
                    </td>
                </tr>
                <tr  class="bg">
                    <td> 聯絡人2</td>
                    <td colspan="5">聯絡電話:
                        <div class="inputbox2">
                            <input type="text"  v-model="DC002.Q0016.S0001" />
                        </div>
                        關係:
                        <div class="inputbox2">
                            <input type="text"  v-model="DC002.Q0016.S0002" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td> 聯絡人3</td>
                    <td colspan="5">聯絡電話:
                        <div class="inputbox2">
                            <input type="text"  v-model="DC002.Q0017.S0001" />
                        </div>
                        關係:
                        <div class="inputbox2">
                            <input type="text"  v-model="DC002.Q0017.S0002" />
                        </div>
                    </td>
                </tr>
                <tr  class="bg">
                    <td> 聯絡人4</td>
                    <td colspan="5">聯絡電話:
                        <div class="inputbox2">
                            <input type="text"  v-model="DC002.Q0018.S0001" />
                        </div>
                        關係:
                        <div class="inputbox2">
                            <input type="text"  v-model="DC002.Q0018.S0002" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>備註:</td>
                    <td colspan="5"> 
                        <div class="inputbox2" >
                            <textarea style="width:150vh;" rows="8" v-model="DC002.Q0019" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>




<script>
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import 'vue2-datepicker/locale/zh-cn';


export default {



    name: 'kidneyForm',
    data () {
        return {
        acceptance_channels:'',
        Physician_in_charge_of_Nephrology:"",
        Filler:"",
        Physician_in_charge_of_renal_surgery:"",
        Login_date:"",
        first_login_date:"",
        CCPC:"",
        Accepted_date:"",
        waiter:"",
        waiter_id:"",
        waiter_gender:"",
        waiter_birthday:"",
        waiter_age:"",
        waiter_blood_type:"",
        waiter_Rh:"+",
        waiter_chart:"",
        waiter_weight:"",
        waiter_height:"",
        weight:"",
        waiter_profession:"22",
        professionList:[
            {value:"1",name:"農林漁牧礦業"},
            {value:"2",name:"製造業"},
            {value:"3",name:"資訊工業"},
            {value:"4",name:"資訊服務業"},
            {value:"5",name:"營造業"},
            {value:"6",name:"商業"},
            {value:"7",name:"運輸業"},
            {value:"8",name:"通信業"},
            {value:"9",name:"金融保險及不動產服務"},
            {value:"10",name:"社會服務業"},
            {value:"11",name:"大眾傳播/廣告業"},
            {value:"12",name:"個人服務業"},
            {value:"13",name:"工商服務業"},
            {value:"14",name:"公共行政業(公務人員)"},
            {value:"15",name:"軍人"},
            {value:"16",name:"大專教師"},
            {value:"17",name:"中小學教師"},
            {value:"18",name:"家管"},
            {value:"19",name:"學生"},
            {value:"20",name:"退休"},
            {value:"21",name:"待業中"},
            {value:"22",name:"其他"},
        ],
        waiter_marital_status:"2",
        maritalList:[
            {value:"1",name:"已婚"},
            {value:"2",name:"未婚"},
            {value:"3",name:"離婚"},
            {value:"4",name:"獨居"},
        ],
        waiter_education:"1",
        educationList:[
            {value:"1",name:"無"},
            {value:"2",name:"小學"},
            {value:"3",name:"國中"},
            {value:"4",name:"高中職"},
            {value:"5",name:"專科"},
            {value:"6",name:"大學"},
            {value:"7",name:"碩士"},
            {value:"8",name:"博士"},
        ],
        waiter_nationality:"",
        waiter_nationality_OT_CT:"",
        waiter_address:"",
        waiter_tel1:"",
        waiter_rel1:"",
        waiter_tel2:"",
        waiter_rel2:"",
        waiter_tel3:"",
        waiter_rel3:"",
        waiter_tel4:"",
        waiter_rel4:"",
        DC001:this.storeData.DC001,
        DC002:this.storeData.DC002,
        }
    },
    components: { DatePicker },
    props: ['storeData'],
}
</script>
