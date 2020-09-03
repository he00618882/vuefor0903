

<template lang="html">
    <div class="block">
        <br>
        <div class='sub_tit'>
            3.腎臟疾病診斷
        </div>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tbody>
                <tr class="bg">
                    <td> 
                        原發病大類:
                    </td>
                    <td> 
                        <div class="selectbox" >
                            <select v-model="DC003.Q0001">
                                <option v-for="list in kidney_diagnosis_primary_mList" :value="list.value">{{list.name}}</option>
                            </select>
                        </div>
                    </td>
                    <td> 
                        原發病細類:
                    </td>
                    <td>
                        <div class="selectbox">
                            <select v-model="DC003.Q0002">
                                <option v-for="list in kidney_diagnosis_primary_dList[DC003.Q0001]" :value="list.value">{{list.name}}</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td width="10%"> 
                        首次透析方式:
                    </td>
                    <td width="40%"> 
                        <input type="checkbox" id="kidney_first_type_1" value="B" v-model="DC003.Q0003.S0001">
                        <label for="kidney_first_type_1">血液透析</label>
                        <input type="checkbox" id="kidney_first_type_2" value="P" v-model="DC003.Q0003.S0002">
                        <label for="kidney_first_type_2">腹膜透析</label>
                        <date-picker v-if="DC003.Q0003.Q0003.length > 0" v-model="DC003.Q0003.S0003" valueType="format" ></date-picker>
                    </td>
                    <td width="10%"> 
                        目前透析狀況:
                    </td>
                    <td width="40%">
                        <input type="checkbox" id="kidney_now_type_1" value="B" v-model="DC003.Q0004.S0001">
                        <label for="kidney_now_type_1">血液透析</label>
                        <input type="checkbox" id="kidney_now_type_2" value="P" v-model="DC003.Q0004.S0002">
                        <label for="kidney_now_type_2">腹膜透析</label>
                        <span v-if="DC003.Q0004.S0002 == true">
                            說明：
                            <div class="inputbox2" >
                                <textarea  style="width:55vh;" rows="2" v-model="DC003.Q0004.S0003" />
                            </div>
                        </span>
                    </td>
                </tr>
                <tr v-if="DC003.Q0004.S0002 == true" class="bg">
                    <td width="10%"> 
                        透析狀態:
                    </td>
                    <td width="40%"> 
                        <input type="radio" id="kidney_now_status_1" value="TW" v-model="DC003.Q0005">
                        <label for="kidney_now_status_1">每週一、三、五</label>
                        <input type="radio" id="kidney_now_status_2" value="OT" v-model="DC003.Q0005">
                        <label for="kidney_now_status_2">每週二、四、六:</label>
                    </td>
                    <td width="10%"> 
                        透析時段:
                    </td>
                    <td width="40%">
                        <input type="radio" id="kidney_now_period_M" value="M" v-model="DC003.Q0006">
                        <label for="kidney_now_period_M">上午</label>
                        <input type="radio" id="kidney_now_period_A" value="A" v-model="DC003.Q0006">
                        <label for="kidney_now_period_A">下午</label>
                        <input type="radio" id="kidney_now_period_N" value="N" v-model="DC003.Q0006">
                        <label for="kidney_now_period_N">晚上</label>
                    </td>
                </tr>
                <tr :class="DC003.Q0004.S0002 == true?'':'bg'" >
                    <td width="10%"> 
                        透析院所:
                    </td>
                    <td colspan="4" width="90%"> 
                        <input type="radio" id="kidney_courtyard_S" value="S" v-model="DC003.Q0007.Q0007">
                        <label for="kidney_courtyard_S">沙鹿院區</label>
                        <input type="radio" id="kidney_courtyard_W" value="W" v-model="DC003.Q0007.Q0007">
                        <label for="kidney_courtyard_W">梧棲院區</label>
                        <input type="radio" id="kidney_courtyard_T" value="T" v-model="DC003.Q0007.Q0007">
                        <label for="kidney_courtyard_T">外院</label>
                        <span v-if="DC003.Q0007.Q0007 == 'T'">
                            說明：
                            <div class="inputbox2" >
                                <textarea  style="width:100vh;" rows="2" v-model="DC003.Q0007.S0003" />
                            </div>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>

        <br>
        <br>
        <div class='sub_tit'>
            4.臨床病史
        </div>
        <table width="100%" border="1" cellSpacing="0" cellPadding="0" class="tb_style">
            <tbody>
                <tr>
                    <td width="10%"> 
                        糖尿病
                    </td>
                    <td class="bg"> 
                        (
                        <input type="radio" id="clinical_history_diabetes_F" value="F" v-model="DC004.Q0001.Q0001">
                        <label for="clinical_history_diabetes_F">無</label>
                        <input type="radio" id="clinical_history_diabetes_T" value="T" v-model="DC004.Q0001.Q0001">
                        <label for="clinical_history_diabetes_T">有</label>
                        );
                        <span v-if="DC004.Q0001.Q0001=='T'">
                            罹病時間:
                            <date-picker v-model="DC004.Q0001.S0002.N0001" type="month" placeholder="Select month"></date-picker> &nbsp;控制方式:
                            <input type="checkbox" id="clinical_history_diabetes_do_E" value='E' v-model="DC004.Q0001.S0002.N0002">
                            <label for="clinical_history_diabetes_do_E">飲食控制</label>
                            <input type="checkbox" id="clinical_history_diabetes_do_M" value='M' v-model="DC004.Q0001.S0002.N0003">
                            <label for="clinical_history_diabetes_do_M">服降血糖藥物</label>
                            <input type="checkbox" id="clinical_history_diabetes_do_I" value='I' v-model="DC004.Q0001.S0002.N0004">
                            <label for="clinical_history_diabetes_do_I">胰島素治療</label>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td> 
                        肺結核
                    </td>
                    <td class="bg"> 
                        (
                            <input type="radio" id="clinical_history_tuberculosis_F" value="F" v-model="DC004.Q0002.Q0002">
                            <label for="clinical_history_tuberculosis_F">無</label>
                            <input type="radio" id="clinical_history_tuberculosis_T" value="T" v-model="DC004.Q0002.Q0002">
                            <label for="clinical_history_tuberculosis_T">有</label>
                        );
                        <span v-if="DC004.Q0002.Q0002 == 'T'">
                        (
                            <input type="radio" id="clinical_history_tuberculosis_isInfection_T" value="T" v-model="DC004.Q0002.S0002.N0001">
                            <label for="clinical_history_tuberculosis_isInfection_T">非傳染性</label>
                            <input type="radio" id="clinical_history_tuberculosis_isInfection_F" value="F" v-model="DC004.Q0002.S0002.N0001">
                            <label for="clinical_history_tuberculosis_isInfection_F">傳染性:驗痰AFB楊性或培養陽性</label>
                        );
                        (
                            <input type="radio" id="clinical_history_tuberculosis_isCure_T" value="T" v-model="DC004.Q0002.S0002.N0002">
                            <label for="clinical_history_tuberculosis_isCure_T">已完全治療</label>
                            <input type="radio" id="clinical_history_tuberculosis_isCure_F" value="F" v-model="DC004.Q0002.S0002.N0002">
                            <label for="clinical_history_tuberculosis_isCure_F">未完全治療</label>
                        );
                        </span>
                    </td>
                </tr>
                <tr>
                    <td> 
                        肺結核病人接觸史
                    </td>
                    <td class="bg"> 
                        (
                            <input type="radio" id="clinical_history_tuberculosis_contact_F" value="F" v-model="DC004.Q0003.Q0003">
                            <label for="clinical_history_tuberculosis_contact_F">無</label>
                            <input type="radio" id="clinical_history_tuberculosis_contact_T" value="T" v-model="DC004.Q0003.Q0003">
                            <label for="clinical_history_tuberculosis_contact_T">有</label>
                        );
                        <span v-if="DC004.Q0003.Q0003 =='T'">
                        胸腔科照會結果(
                            <input type="radio" id="clinical_history_tuberculosis_contact_treatment_N" value="N" v-model="DC004.Q0003.S0002">
                            <label for="clinical_history_tuberculosis_contact_treatment_N">不用治療</label>
                            <input type="radio" id="clinical_history_tuberculosis_contact_treatment_I" value="I" v-model="DC004.Q0003.S0002">
                            <label for="clinical_history_tuberculosis_contact_treatment_I">治療中</label>
                            <input type="radio" id="clinical_history_tuberculosis_contact_treatment_F" value="F" v-model="DC004.Q0003.S0002">
                            <label for="clinical_history_tuberculosis_contact_treatment_F">已完成治療</label>
                        );
                        </span>
                    </td>
                </tr>
                <tr>
                    <td> 
                        慢性肝炎
                    </td>
                    <td class="bg"> 
                        (
                            <input type="radio" id="clinical_history_chronic_hepatitis_F" value="F" v-model="DC004.Q0004.Q0004">
                            <label for="clinical_history_chronic_hepatitis_F">無</label>
                            <input type="radio" id="clinical_history_chronic_hepatitis_T" value="T" v-model="DC004.Q0004.Q0004">
                            <label for="clinical_history_chronic_hepatitis_T">有</label>
                        );
                        <span v-if="DC004.Q0004.Q0004=='T'">
                            <input type="checkbox" id="clinical_history_chronic_hepatitis_have_B" value='B' v-model="DC004.Q0004.S0002.N0001.R0001">
                            <label for="clinical_history_chronic_hepatitis_have_B">B型肝炎</label>
                            <input type="checkbox" id="clinical_history_chronic_hepatitis_have_C" value='C' v-model="DC004.Q0004.S0002.N0001.R0002">
                            <label for="clinical_history_chronic_hepatitis_have_C">C型肝炎</label>
                            治療：
                            <input type="radio" id="clinical_history_chronic_hepatitis_have_treatment_N" value="N" v-model="DC004.Q0004.S0002.N0002">
                            <label for="clinical_history_chronic_hepatitis_have_treatment_N" >未治療</label>
                            <input type="radio" id="clinical_history_chronic_hepatitis_have_treatment_T" value="I" v-model="DC004.Q0004.S0002.N0002">
                            <label for="clinical_history_chronic_hepatitis_have_treatment_T">已治療</label>說明：
                            <div class="inputbox2" >
                                <textarea  style="width:100vh;" rows="2" v-model="DC004.Q0004.S0002.N0003" />
                            </div>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td> 
                        惡性腫瘤
                    </td>
                    <td class="bg"> 
                        (
                            <input type="radio" id="clinical_history_malignant_tumor_F" value="F" v-model="DC004.Q0005.Q0005">
                            <label for="clinical_history_malignant_tumor_F">無</label>
                            <input type="radio" id="clinical_history_malignant_tumor_T" value="T" v-model="DC004.Q0005.Q0005">
                            <label for="clinical_history_malignant_tumor_T">有</label>
                        );
                        <span v-if="DC004.Q0005.Q0005=='T'">
                            說明:
                            <div class="inputbox2">
                                <textarea  style="width:100vh;" rows="2" v-model="DC004.Q0005.S0002"/>
                            </div>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td> 
                        自體免疫疾病
                    </td>
                    <td class="bg"> 
                        (
                            <input type="radio" id="clinical_history_immune_disease_F" value="F" v-model="DC004.Q0006.Q0006">
                            <label for="clinical_history_immune_disease_F">無</label>
                            <input type="radio" id="clinical_history_immune_disease_T" value="T" v-model="DC004.Q0006.Q0006">
                            <label for="clinical_history_immune_disease_T">有</label>
                        );
                        <span v-if="DC004.Q0006.Q0006=='T'">
                            1.勾選「類固醇/免疫抑制劑治療：
                            <input type="radio" id="clinical_history_immune_disease_treatment_F" value="F" v-model="DC004.Q0006.S0002.N0001">
                            <label for="clinical_history_immune_disease_treatment_F">無</label>
                            <input type="radio" id="clinical_history_immune_disease_treatment_T" value="T" v-model="DC004.Q0006.S0002.N0001">
                            <label for="clinical_history_immune_disease_treatment_T">有</label>
                            );
                            <span v-if="DC004.Q0006.S0002.N0001 == 'T'">
                                說明:
                                <div class="inputbox2" >
                                    <textarea  style="width:100vh;" rows="2" v-model="DC004.Q0006.S0002.N0002" />
                                </div>
                            </span>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td> 
                        移植手術史
                    </td>
                    <td class="bg"> 
                        <span>
                            (
                            <input type="radio" id="clinical_history_transplant_surgery_F" value="F" v-model="DC004.Q0007.Q0007">
                            <label for="clinical_history_transplant_surgery_F">無</label>
                            <input type="radio" id="clinical_history_transplant_surgery_T" value="T" v-model="DC004.Q0007.Q0007">
                            <label for="clinical_history_transplant_surgery_T">有</label>
                            );
                            <span v-if="DC004.Q0007.Q0007=='T'">
                                器官別:
                                <div class="inputbox2"  >
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="DC004.Q0007.S0002.N0001" >
                                            <option value="1">心臟</option>
                                            <option value="2">肝臟</option>
                                            <option value="3">肺臟</option>
                                            <option value="4">腎臟</option>
                                            <option value="5">胰臟</option>
                                            <option value="6">腸</option>
                                            <option value="7">國內腎臟組間交換</option>
                                        </select>
                                    </div>
                                </div>
                                移植日期:
                                <div class="inputbox2" style="background-color: #e9eef1">
                                    <date-picker v-model="DC004.Q0007.S0002.N0002" valueType="format"></date-picker>
                                </div>
                            </span>
                        </span>
                    </td>
                </tr>


                <tr>
                    <td> 
                        活體器官捐贈史
                    </td>
                    <td class="bg"> 
                        (
                            <input type="radio" id="clinical_history_organ_donation_F" value="F" v-model="DC004.Q0008.Q0008">
                            <label for="clinical_history_organ_donation_F">無</label>
                            <input type="radio" id="clinical_history_organ_donation_T" value="T" v-model="DC004.Q0008.Q0008">
                            <label for="clinical_history_organ_donation_T">有</label>
                        );
                        <span v-if="DC004.Q0008.Q0008=='T'">
                            器官別:
                            <div class="inputbox2">
                                <div class="selectbox" >
                                    <select name="type" v-model="DC004.Q0008.S0002.N0001">
                                        <option value="1">肝臟</option>
                                        <option value="2">腎臟</option>
                                    </select>
                                </div>
                            </div>
                            捐贈日期:
                            <date-picker v-model="DC004.Q0008.S0002.N0002" valueType="format"></date-picker>
                            說明:
                            <div class="inputbox2">
                                <textarea  style="width:100vh;" rows="2" v-model="DC004.Q0008.S0002.N0003"/>
                            </div>
                        </span>
                    </td>
                </tr>

                <tr>
                    <td> 
                        輸血史
                    </td>
                    <td class="bg"> 
                        (
                            <input type="radio" id="clinical_history_blood_transfusion_F" value="F" v-model="DC004.Q0009">
                            <label for="clinical_history_blood_transfusion_F">無</label>
                            <input type="radio" id="clinical_history_blood_transfusion_T" value="One" v-model="DC004.Q0009">
                            <label for="clinical_history_blood_transfusion_T">有</label>
                        );
                    </td>
                </tr>
                <tr>
                    <td> 
                        懷孕史
                    </td>
                    <td class="bg"> 
                        (

                            <input type="radio" id="clinical_history_pregnancy_F" value="F" v-model="DC004.Q0010.Q0010">
                            <label for="clinical_history_pregnancy_F">無</label>
                            <input type="radio" id="clinical_history_pregnancy_T" value="T" v-model="DC004.Q0010.Q0010">
                            <label for="clinical_history_pregnancy_T">有</label>
                        )
                        <span v-if="DC004.Q0010.Q0010=='T'">
                        G:
                        <div class="inputbox2">
                            <input type="number" v-model="DC004.Q0010.S0002.N0001">
                        </div>
                        P:
                        <div class="inputbox2">
                            <input type="number" v-model="DC004.Q0010.S0002.N0002">
                        </div>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td> 
                        其他急病病史
                    </td>
                    <td class="bg"> 
                        <div class="inputbox2">
                            <textarea  style="width:100vh;" rows="2" v-model="DC004.Q0011"/>
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
            kidney_diagnosis_primary_m: '1',
            kidney_diagnosis_primary_mList: [
                {value:"1",name:"腎臟實質疾病"},
                {value:"2",name:"系統性疾病"},
                {value:"3",name:"阻塞性腎病變及泌尿系統疾病"},
                {value:"4",name:"腎血管病變"},
                {value:"5",name:"遺傳性疾病"},
                {value:"6",name:"其他已知原因腎衰竭"},
                {value:"7",name:"不明原因之腎衰竭"},
                {value:"8",name:"中毒"},
            ],
            kidney_diagnosis_primary_d:"1",
            kidney_diagnosis_primary_dList: {
                "1":[
                        {value:"1",name:"慢性腎絲球腎炎(臨床診斷， 未有病理切片者)"},
                        {value:"2",name:"慢性腎絲球腎炎(有病理切片診斷者)"},
                        {value:"3",name:"局部腎絲球硬化症"},
                        {value:"4",name:"膜性腎病變"},
                        {value:"5",name:"膜性增生性腎炎"},
                        {value:"6",name:"間質增生性腎炎"},
                        {value:"7",name:"微小變化型腎病變"},
                        {value:"8",name:"半月狀腎絲球腎炎"},
                        {value:"9",name:"鏈球菌感染後腎絲球腎炎"},
                        {value:"10",name:"腎小管組織腎炎"},
                        {value:"11",name:"止痛劑性腎病變"},
                        {value:"12",name:"其他型腎絲球腎炎"},
                        {value:"13",name:"快速進行性腎絲腎球炎（臨床診斷，未有病理切片者）"},
                        {value:"14",name:"快速進行性腎絲腎球炎（有病理切片診斷者）"},
                        {value:"15",name:"慢性腎間質型腎炎（臨床診斷，未有病理切片者）"},
                        {value:"16",name:"慢性腎間質性腎炎（有病理切片診斷者）"},
                        {value:"17",name:"慢性腎盂腎炎"},
                        {value:"18",name:"急性腎衰竭(未恢復)"},
                        {value:"19",name:"其他腎實質疾病"},
                    ],
                "2":[
                        {value:"1",name:"腎硬化症(缺血性腎病變)"},
                        {value:"2",name:"惡性高血壓"},
                        {value:"3",name:"糖尿病"},
                        {value:"4",name:"紅斑性狼瘡"},
                        {value:"5",name:"類澱粉腎病變"},
                        {value:"6",name:"硬皮症"},
                        {value:"7",name:"多發性骨髓病"},
                        {value:"8",name:"痛風性腎病變"},
                        {value:"9",name:"肝硬化"},
                        {value:"10",name:"心衰竭"},
                        {value:"11",name:"妊娠毒血症"},
                        {value:"12",name:"其他代謝異常引起的腎衰竭"},
                        {value:"13",name:"其他系統性疾病引起之腎衰竭"},
                        {value:"14",name:"敗血症"},
                    ],
                "3":[
                        {value:"1",name:"結石"},
                        {value:"2",name:"腎結核"},
                        {value:"3",name:"腎尿路惡性腫瘤"},
                        {value:"4",name:"其他惡性腫瘤導致之尿路阻塞"},
                        {value:"5",name:"逆流性腎病變"},
                        {value:"6",name:"其他原因引起之阻塞性腎病變"},
                    ],
                "4":[
                        {value:"1",name:"腎梗塞"},
                        {value:"2",name:"腎動脈栓塞"},
                        {value:"3",name:"腎靜脈血栓症"},
                        {value:"4",name:"溶血性尿毒症候群"},
                        {value:"5",name:"其他腎血管疾病"},
                    ],
                "5":[
                        {value:"1",name:"多囊腎"},
                        {value:"2",name:"其他腎囊腫性疾病"},
                        {value:"3",name:"遺傳性腎炎"},
                        {value:"4",name:"腎形成不全"},
                        {value:"5",name:"其他遺傳性疾病導致腎衰竭"},
                    ],
                "6":[
                        {value:"1",name:"其他已知原因腎衰竭"},
                    ],
                "7":[
                        {value:"1",name:"不明原因之腎衰竭"},
                    ],
                "8":[
                        {value:"1",name:"一般藥物中毒"},
                        {value:"2",name:"農藥中毒"},
                        {value:"3",name:"化學製劑中毒"},
                        {value:"4",name:"其他中毒"},
                    ],
            },
            kidney_first_type:[],
            kidney_first_time:"",
            kidney_now_type:[],
            kidney_now_description:"",
            kidney_now_status:"",
            kidney_now_period:"",
            kidney_courtyard:"",
            kidney_courtyard_description:"",
            clinical_history_diabetes:"",
            clinical_history_diabetes_year:"",
            clinical_history_diabetes_month:"",
            clinical_history_diabetes_do:[],
            clinical_history_tuberculosis:"",
            clinical_history_tuberculosis_isInfection:"",
            clinical_history_tuberculosis_isCure:"",
            clinical_history_tuberculosis_contact_treatment:"",
            clinical_history_tuberculosis_contact:"",
            clinical_history_chronic_hepatitis:"",
            clinical_history_chronic_hepatitis_have:[],
            clinical_history_chronic_hepatitis_have_treatment:"",
            clinical_history_chronic_hepatitis_have_treatment_description:"",
            clinical_history_malignant_tumor:"",
            clinical_history_malignant_tumor_description:"",
            clinical_history_immune_disease_description:"",
            clinical_history_immune_disease_treatment:"",
            clinical_history_immune_disease:"",
            clinical_history_transplant_surgery_type:"",
            clinical_history_transplant_surgery_date:"",
            clinical_history_transplant_surgery:"",
            clinical_history_organ_donation_description:"",
            clinical_history_organ_donation_date:"",
            clinical_history_organ_donation_type:"",
            clinical_history_organ_donation:"",
            clinical_history_blood_transfusion:"",
            clinical_history_other_illnesses:"",
            clinical_history_pregnancy:"",
            clinical_history_pregnancy_G:"",
            clinical_history_pregnancy_P:"",
            DC003:this.storeData.DC003,
            DC004:this.storeData.DC004,
        }
    },
    components: { DatePicker },
    props: ['storeData'],
}
</script>
