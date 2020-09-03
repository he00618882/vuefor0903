

<template lang="html">
    <div class="block">
        <br>
        <br>
        <div class='sub_tit'>
            5.實驗室檢查
        </div>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tr class="bg" >
                <th colspan="6" style="background-color: #e9eeff"> 
                    <div>
                    1.HLA typing
                    </div>
                </th>
            </tr>
            <tr>
                <td class="bg" width="100%"> 
                    <table style="background-color: #e9eef1" width="100%">
                        <tr>
                            <td width="7%">HLA-A
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text' style="width:120px;text-align: right;" v-model="laboratory_examination_HLA_A_1"  />
                                </div>
                            </td>
                            <td width="7%">HLA-B
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text' style="width:120px;text-align: right;" v-model="laboratory_examination_HLA_B_1"  />
                                </div>
                            </td>
                            <td width="7%">HLA-C
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text' style="width:120px;text-align: right;" v-model="laboratory_examination_HLA_C_1"  />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td >HLA-DR
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text' style="width:120px;text-align: right;" v-model="laboratory_examination_HLA_DR_1"  />
                                </div>
                            </td>
                            <td>HLA-DQ
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text' style="width:120px;text-align: right;" v-model="laboratory_examination_HLA_DQ_1"  />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                PRA I
                            </td>
                            <td colSpan="5">
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_PRA_I_1" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="inputbox2">
                                    <input type='text' style="width:120px;text-align: right;" v-model="laboratory_examination_PRA_I_2"  />
                                </div>報告時間:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_PRA_I_date" valueType="format"  ></date-picker>
                                    <!-- <date-picker v-model="laboratory_examination_PRA_I_date" valueType="format" :popup-style="{ visibility: 'hidden' }" ></date-picker> -->
                                </div>
                                ,PRA II
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_PRA_II_1" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="inputbox2">
                                    <input type='text' style="width:120px;text-align: right;" v-model="laboratory_examination_PRA_II_2"  />
                                </div>報告時間:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_PRA_II_date" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tr>
                <td class="bg" width="100%"> 
                    <table style="background-color: #e9eef1" width="100%">
                        <tr class="bg" >
                            <th colspan="6" style="background-color: #e9eeff"> 
                                <div>
                                2.血清學檢查
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td width="7%">
                                Anti-HIV
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_Anti_HIV" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                報告日:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_Anti_HIV_date" valueType="format" style="width:150px;"  ></date-picker>
                                </div>
                            </td>
                            <td width="7%">HBsAg:
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_HBsAg_2" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                報告日:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_HBsAg_date" valueType="format" style="width:150px;"  ></date-picker>
                                </div>
                            </td>
                            <td width="7%"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                HBeAg
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_HBeAg" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>Anti-HBe
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_Anti_HBe" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Anti-HBs
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_Anti_HBs" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                報告日:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_Anti_HBs_date" valueType="format" style="width:150px;"  ></date-picker>
                                </div>
                            </td>
                            <td>Anti-HBc
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_Anti_HBc" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                報告日:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_Anti_HBc_date" valueType="format" style="width:150px;"  ></date-picker>
                                </div>
                            </td>
                            <td>Anti-HCV
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_Anti_HCV" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                報告日:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_Anti_HCV_date" valueType="format" style="width:150px;"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>VDRL(STS)
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_VDRL" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                報告日:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_VDRL_date" valueType="format" style="width:150px;"  ></date-picker>
                                </div>
                            </td>
                            <td>CMV IgG
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_CMV_IgG" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                報告日:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_CMV_IgG_date" valueType="format" style="width:150px;"  ></date-picker>
                                </div>
                            </td>
                            <td>EBV-VCA IgG
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <div class="selectbox"  style="width:180px;">
                                        <select name="type" v-model="laboratory_examination_EBV_VCA" >
                                            <option value="1">陰性(-)</option>
                                            <option value="2">陽性(+)</option>
                                        </select>
                                    </div>
                                </div>
                                報告日:
                                <div class="inputbox2">
                                    <date-picker v-model="laboratory_examination_EBV_VCA_date" valueType="format" style="width:150px;"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>AFP：
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text'  v-model="laboratory_examination_AFP"  />
                                </div>
                            </td>
                            <td>CEA：
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text'  v-model="laboratory_examination_CEA"  />
                                </div>
                            </td>
                            <td>CA-199：
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text'  v-model="laboratory_examination_CA_199"  />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>PSA：
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text'  v-model="laboratory_examination_PSA"  />
                                </div>
                            </td>
                            <td>CA-125：
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text'  v-model="laboratory_examination_CA_125"  />
                                </div>
                            </td>
                            <td>CA-153：
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <input type='text'  v-model="laboratory_examination_CA_153"  />
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <br>
        <br>
        <div class='sub_tit'>
            6.相關檢查
        </div>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tr class="bg" >
                <th colspan="3" style="background-color: #f4cb93"> 
                    相關檢查
                </th>
            </tr>
            <tr>
                <td style="background-color: #fffff1" width="100%"> 
                    <table style="background-color: #fffff1" width="100%">
                        <tr>
                            <td>心臟超音波
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <date-picker v-model="censor_cardiac_ultrasound" valueType="format"  ></date-picker>
                                </div>
                            </td>
                            <td>腹部超音波
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <date-picker v-model="censor_abdomina_ultrasound" valueType="format"  ></date-picker>
                                </div>
                            </td>
                            <td>腹部電腦斷層
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <date-picker v-model="censor_abdominal_CT" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>子宮頸抹片檢查
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <date-picker v-model="censor_pap_smear" valueType="format"  ></date-picker>
                                </div>
                            </td>
                            <td>乳房攝影檢查
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <date-picker v-model="censor_mammography" valueType="format"  ></date-picker>
                                </div>
                            </td>
                            <td>口腔黏膜檢查
                            </td>
                            <td>
                                <div class="inputbox2">
                                    <date-picker v-model="censor_oral_mucosal_examination" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>糞便潛血檢查
                            </td>
                            <td colspan="5">
                                <div class="inputbox2">
                                    <date-picker v-model="censor_fecal_occult_blood" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>其他檢查1
                            </td>
                            <td colspan="5">檢查名稱
                                <div class='inputbox2'>
                                    <input type='text' v-model="censorList_name_1"  />
                                </div>
                                檢查日期
                                <div class='inputbox2'>
                                    <date-picker v-model="censorList_date_1" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>其他檢查2
                            </td>
                            <td colspan="5">檢查名稱
                                <div class='inputbox2'>
                                    <input type='text' v-model="censorList_name_2"  />
                                </div>
                                檢查日期
                                <div class='inputbox2'>
                                    <date-picker v-model="censorList_date_2" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>其他檢查3
                            </td>
                            <td colspan="5"><span >
                                檢查名稱</span>
                                <div class='inputbox2'>
                                    <input type='text' v-model="censorList_name_3"  />
                                </div>
                                檢查日期
                                <div class='inputbox2'>
                                    <date-picker v-model="censorList_date_3" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>其他檢查4
                            </td>
                            <td colspan="5">檢查名稱
                                <div class='inputbox2'>
                                    <input type='text' v-model="censorList_name_4"  />
                                </div>
                                檢查日期
                                <div class='inputbox2'>
                                    <date-picker v-model="censorList_date_4" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>腎臟科門診
                            </td>
                            <td>
                                    <date-picker v-model="censor_nephrology_clinic" valueType="format"  ></date-picker>
                            </td>
                            <td>泌尿科門診
                            </td>
                            <td>
                                    <date-picker v-model="censor_urology_clinic" valueType="format"  ></date-picker>
                            </td>
                            <td>口腔醫學門診
                            </td>
                            <td>
                                    <date-picker v-model="censor_stomatology_clinic" valueType="format"  ></date-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>心臟內科門診
                            </td>
                            <td  colspan="5">
                                    <date-picker v-model="censor_cardiology_clinic" valueType="format"  ></date-picker>
                            </td>
                        </tr>
                        <tr>
                            <td>其他門診1
                            </td>
                            <td  colspan="5">
                                門診名稱:
                                <div class='inputbox2'>
                                    <input type='text' v-model="roomList_name_1"  />
                                </div>
                                門診日期:
                                <div class='inputbox2'>
                                    <date-picker v-model="roomList_date_1" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>其他門診2
                            </td>
                            <td  colspan="5">
                                門診名稱:
                                <div class='inputbox2'>
                                    <input type='text' v-model="roomList_name_2"  />
                                </div>
                                門診日期:
                                <div class='inputbox2'>
                                    <date-picker v-model="roomList_date_2" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>其他門診3
                            </td>
                            <td  colspan="5">
                                門診名稱:
                                <div class='inputbox2'>
                                    <input type='text' v-model="roomList_name_3"  />
                                </div>
                                門診日期:
                                <div class='inputbox2'>
                                    <date-picker v-model="roomList_date_3" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>其他門診4
                            </td>
                            <td  colspan="5">
                                門診名稱:
                                <div class='inputbox2'>
                                    <input type='text' v-model="roomList_name_4"  />
                                </div>
                                門診日期:
                                <div class='inputbox2'>
                                    <date-picker v-model="roomList_date_4" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>其他門診5
                            </td>
                            <td  colspan="5">
                                門診名稱:
                                <div class='inputbox2'>
                                    <input type='text' v-model="roomList_name_5"  />
                                </div>
                                門診日期:
                                <div class='inputbox2'>
                                    <date-picker v-model="roomList_date_5" valueType="format"  ></date-picker>
                                </div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <br>
        <br>
        <div class='sub_tit'>
            7.受贈者適應症
        </div>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tr class="bg" >
                <th colspan="2" style="background-color: #f4cb93"> 
                    受贈者適應症
                </th>
            </tr>
            <tr>
                <td class="bg" width="100%"> 
                    <table style="background-color: #e9eef1" width="100%">
                        <tr>
                            <td colspan="2">
                                <input type="radio" id="indications_for_recipients_1" value="1" v-model="indications_for_recipients">
                                <label for="indications_for_recipients_1">1.因慢性腎衰竭(尿毒症)，已進入定期透析治療，且具全民健康保險重大傷病永久證明者</label>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <input type="radio" id="indications_for_recipients_2" value="2" v-model="indications_for_recipients" disabled="true">
                                <label for="indications_for_recipients_2">2.慢性腎功能障礙，經兩次以上之檢查，相隔一個月以上，Cr&gt;6 mg/dL或Ccr&lt;15 ml/min/1.73m² </label>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <input type="radio" id="indications_for_recipients_3" value="3" v-model="indications_for_recipients" disabled="true">
                                <label for="indications_for_recipients_3">3.重度慢性腎衰竭，肌酸酐廓清率Ccr&lt;15 ml/min/1.73m²或血清肌酸酐Cr&gt;6 mg/dL且伴有下列任何一種併發症者</label> 
                            </td>
                        </tr>
                        <tr v-if="indications_for_recipients == '3'">
                            <td width="3%"></td>
                            <td width="97%">
                                <input type="checkbox" id="indications_for_recipients_have_1" value="1" v-model="indications_for_recipients_have">
                                <label for="indications_for_recipients_have_1">(1)心臟衰竭或肺水腫</label><br>
                                <input type="checkbox" id="indications_for_recipients_have_2" value="2" v-model="indications_for_recipients_have">
                                <label for="indications_for_recipients_have_2">(2)心包膜炎</label><br>
                                <input type="checkbox" id="indications_for_recipients_have_3" value="3" v-model="indications_for_recipients_have">
                                <label for="indications_for_recipients_have_3">(3)出血傾向</label><br>
                                <input type="checkbox" id="indications_for_recipients_have_4" value="4" v-model="indications_for_recipients_have">
                                <label for="indications_for_recipients_have_4">(4)神經症狀:意識障礙，收續或末梢神經病變</label><br>
                                <input type="checkbox" id="indications_for_recipients_have_5" value="5" v-model="indications_for_recipients_have">
                                <label for="indications_for_recipients_have_5">(5)高血鉀(藥物難以控制)</label><br>
                                <input type="checkbox" id="indications_for_recipients_have_6" value="6" v-model="indications_for_recipients_have">
                                <label for="indications_for_recipients_have_6">(6)高血鉀(藥物難以控制)</label><br>
                                <input type="checkbox" id="indications_for_recipients_have_7" value="7" v-model="indications_for_recipients_have">
                                <label for="indications_for_recipients_have_7">(7)噁心、嘔吐(藥物難以控制)</label><br>
                                <input type="checkbox" id="indications_for_recipients_have_8" value="8" v-model="indications_for_recipients_have">
                                <label for="indications_for_recipients_have_8">(8)惡病體質(cachexia)</label><br>
                                <input type="checkbox" id="indications_for_recipients_have_9" value="9" v-model="indications_for_recipients_have">
                                <label for="indications_for_recipients_have_9">(9)重度痰血症。(BUN&gt;100mg/dL)</label><br>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                「B型肝炎帶原捐贈者」之腎臟:
                                    <input type="radio" id="indications_for_recipients_B_T" value="T" v-model="indications_for_recipients_B">
                                    <label for="indications_for_recipients_B_T">使用</label>
                                    <input type="radio" id="indications_for_recipients_B_F" value="F" v-model="indications_for_recipients_B">
                                    <label for="indications_for_recipients_B_F">不使用 </label>
                                <br>
                                「C型肝炎帶原捐贈者」之腎臟:
                                    <input type="radio" id="indications_for_recipients_C_T" value="T" v-model="indications_for_recipients_C">
                                    <label for="indications_for_recipients_C_T">使用</label>
                                    <input type="radio" id="indications_for_recipients_C_F" value="F" v-model="indications_for_recipients_C">
                                    <label for="indications_for_recipients_C_F">不使用 C型肝炎帶原捐贈者之腎臟。</label>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
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
            roomList:[
                {name:'',date:''}
            ],
            laboratory_examination_HLA_A_1:"00,00",
            laboratory_examination_HLA_A_2:"",
            laboratory_examination_HLA_B_1:"00,00",
            laboratory_examination_HLA_B_2:"",
            laboratory_examination_HLA_C_1:"00,00",
            laboratory_examination_HLA_C_2:"",
            laboratory_examination_HLA_DR_1:"00,00",
            laboratory_examination_HLA_DR_2:"",
            laboratory_examination_HLA_DQ_1:"00,00",
            laboratory_examination_HLA_DQ_2:"",
            laboratory_examination_PRA_I_1:"00,00",
            laboratory_examination_PRA_I_2:"00,00",
            laboratory_examination_PRA_I_date:"",
            laboratory_examination_PRA_II_1:"00,00",
            laboratory_examination_PRA_II_2:"00,00",
            laboratory_examination_PRA_II_date:"",
            laboratory_examination_Anti_HIV:"",
            laboratory_examination_Anti_HIV_date:"",
            laboratory_examination_HBsAg_2:"",
            laboratory_examination_HBsAg_date:"",
            laboratory_examination_HBeAg:"",
            laboratory_examination_Anti_HBe:"",
            laboratory_examination_Anti_HBs:"",
            laboratory_examination_Anti_HBs_date:"",
            laboratory_examination_Anti_HBc:"",
            laboratory_examination_Anti_HBc_date:"",
            laboratory_examination_Anti_HCV:"",
            laboratory_examination_Anti_HCV_date:"",
            laboratory_examination_VDRL:"",
            laboratory_examination_VDRL_date:"",
            laboratory_examination_CMV_IgG:"",
            laboratory_examination_CMV_IgG_date:"",
            laboratory_examination_EBV_VCA:"",
            laboratory_examination_EBV_VCA_date:"",
            laboratory_examination_AFP:"",
            laboratory_examination_CEA:"",
            laboratory_examination_CA_199:"",
            laboratory_examination_PSA:"",
            laboratory_examination_CA_125:"",
            laboratory_examination_CA_153:"",
            censor_cardiac_ultrasound:"",
            censor_abdomina_ultrasound:"",
            censor_abdominal_CT:"",
            censor_pap_smear:"",
            censor_mammography:"",
            censor_oral_mucosal_examination:"",
            censor_fecal_occult_blood:"",
            censor_nephrology_clinic:"",
            censor_urology_clinic:"",
            censor_stomatology_clinic:"",
            censor_cardiology_clinic:"",
            indications_for_recipients:"1",
            indications_for_recipients_have:[],
            indications_for_recipients_B:"",
            indications_for_recipients_C:"",
            censorList_name_1:"",
            censorList_date_1:"",
            censorList_name_2:"",
            censorList_date_2:"",
            censorList_name_3:"",
            censorList_date_3:"",
            censorList_name_4:"",
            censorList_date_4:"",
            roomList_name_1:"",
            roomList_date_1:"",
            roomList_name_2:"",
            roomList_date_2:"",
            roomList_name_3:"",
            roomList_date_3:"",
            roomList_name_4:"",
            roomList_date_4:"",
            roomList_name_5:"",
            roomList_date_5:"",
            DC005:this.storeData.DC005,
            DC006:this.storeData.DC006,
        }
    },
    components: { DatePicker },
    methods:{
        toAddCensoritem(){
            let ob = {name:'',date:''};
            this.censorList.push(ob)
        },
        toDelCensoritem(index){
            console.log(index)
            this.censorList.splice(index, 1);
        },
        toAddRoomitem(){
            let ob = {name:'',date:''};
            this.roomList.push(ob)
        },
        toDelRoomitem(index){
            console.log(index)
            this.roomList.splice(index, 1);
        }
    },
    props: ['storeData'],
}
</script>
