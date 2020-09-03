

<template lang="html">
    <div class="block">
        <br>
        <br>
        <div class='sub_tit'>
            8.受贈者禁忌症
        </div>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tr class="bg" >
                <th colspan="2" width="80%" style="background-color: #f4efc5"> 
                    禁忌症
                </th>
                <th style="background-color: #f4efc5" width="20%"> 
                    無/有
                </th>
            </tr>
            <tr>
                <td class="bg" colspan="2"> 
                        1.有無法控制的染者
                </td>
                <th class="bg"> 
                    <input type="radio" id="contraindications_1_F" value="F" v-model="contraindications_1">
                    <label for="contraindications_1_F">無</label>
                    <input type="radio" id="contraindications_1_T" value="T" v-model="contraindications_1">
                    <label for="contraindications_1_T">有</label>
                </th>
            </tr>
            <tr>
                <td  colspan="2"> 
                        2.愛滋病帶原者，惟符合以下標準時，不再此限:
                </td>
                <th  rowspan="5"> 
                    <input type="radio" id="contraindications_2_F" value="F" v-model="contraindications_2">
                    <label for="contraindications_2_F">無</label>
                    <input type="radio" id="contraindications_2_T" value="T" v-model="contraindications_2">
                    <label for="contraindications_2_T">有</label>
                </th>
            </tr>
            <tr>
                <td  width="2%"></td>
                <td  width="78%"> 
                        (1)CD4數值大於200 cells/µl 至少六個月
                </td>
            </tr>
            <tr>
                <td  width="2%"></td>
                <td  width="78%"> 
                        (2)遵循醫囑病穩定接受雞尾酒療法且最近6個月測量HIV viral load小於50 copies/ml
                </td>
            </tr>
            <tr>
                <td  width="2%"></td>
                <td  width="78%"> 
                        (3)排除有未受控制、潛在致命的伺機性感染或腫瘤
                </td>
            </tr>
            <tr>
                <td  width="2%"></td>
                <td  width="78%"> 
                        (4)日後仍有抗逆轉錄病毒之治療選擇(硬是先雨感染科醫師討論及確認)
                </td>
            </tr>

            <tr>
                <td class="bg" colspan="2"> 
                        3.肺結核未完全治療者
                </td>
                <th class="bg"> 
                    <input type="radio" id="contraindications_3_F" value="F" v-model="contraindications_3">
                    <label for="contraindications_3_F">無</label>
                    <input type="radio" id="contraindications_3_T" value="T" v-model="contraindications_3">
                    <label for="contraindications_3_T">有</label>
                </th>
            </tr>


            <tr>
                <td  colspan="2"> 
                        4.有惡性腫瘤者，不宜腎臟移植
                </td>
                <th  rowspan="4"> 
                    <input type="radio" id="contraindications_4_F" value="F" v-model="contraindications_4">
                    <label for="contraindications_4_F">無</label>
                    <input type="radio" id="contraindications_4_T" value="T" v-model="contraindications_4">
                    <label for="contraindications_4_T">有</label>
                </th>
            </tr>
            <tr>
                <td  width="2%"></td>
                <td  width="78%"> 
                        (1)incidental renal carcinoma，in situ carcinoma(exclubing bladder)，Dukes'A colon cancer，basal cell carcinoma，以上四者不影響腎臟移植
                </td>
            </tr>
            <tr>
                <td  width="2%"></td>
                <td  width="78%"> 
                        (2)malignant melanoma，breast cancer ， GI carcinoma，lung cancer，完全治療後後，無癌症復發，未達五年者(disease-free interval&lt;5 years)
                </td>
            </tr>
            <tr>
                <td  width="2%"></td>
                <td  width="78%"> 
                        (3)其他癌症，完全治療後，無癌症復發未達兩年者(disease-free interval&lt;2 years)
                </td>
            </tr>

            <tr>
                <td class="bg" colspan="2"> 
                        5.活性自體免疫疾病，需prednisolone&lt;10mg/day(或相當劑量的其他類固醇)或其他 免疫抑制劑者
                </td>
                <th class="bg"> 
                    <input type="radio" id="contraindications_5_F" value="F" v-model="contraindications_5">
                    <label for="contraindications_5_F">無</label>
                    <input type="radio" id="contraindications_5_T" value="T" v-model="contraindications_5">
                    <label for="contraindications_5_T">有</label>
                </th>
            </tr>

            <tr>
                <td colspan="2"> 
                        6.經臨床評估無法配合長期移植術後治療者
                </td>
                <th> 
                    <input type="radio" id="contraindications_6_F" value="F" v-model="contraindications_6">
                    <label for="contraindications_6_F">無</label>
                    <input type="radio" id="contraindications_6_T" value="T" v-model="contraindications_6">
                    <label for="contraindications_6_T">有</label>
                </th>
            </tr>


            <tr>
                <td class="bg" colspan="2"> 
                        7.重大疾病不宜手術者
                </td>
                <th class="bg"> 
                    <input type="radio" id="contraindications_7_F" value="F" v-model="contraindications_7">
                    <label for="contraindications_7_F">無</label>
                    <input type="radio" id="contraindications_7_T" value="T" v-model="contraindications_7">
                    <label for="contraindications_7_T">有</label>
                </th>
            </tr>

            <tr>
                <td colspan="2"> 
                        8.嚴重腦血管或周邊血管病變，使日常生活無法自理，且無法接受重建手術者
                </td>
                <th> 
                    <input type="radio" id="contraindications_8_F" value="F" v-model="contraindications_8">
                    <label for="contraindications_8_F">無</label>
                    <input type="radio" id="contraindications_8_T" value="T" v-model="contraindications_8">
                    <label for="contraindications_8_T">有</label>
                </th>
            </tr>

            <tr>
                <td class="bg" colspan="2"> 
                        9.藥癮、酒癮患者
                </td>
                <th class="bg"> 
                    <input type="radio" id="contraindications_9_F" value="F" v-model="contraindications_9">
                    <label for="contraindications_9_F">無</label>
                    <input type="radio" id="contraindications_9_T" value="T" v-model="contraindications_9">
                    <label for="contraindications_9_T">有</label>
                </th>
            </tr>
            <tr>
                <td colspan="2"> 
                        10.最近半年是否曾輸血
                </td>
                <th> 
                    <input type="radio" id="contraindications_10_F" value="F" v-model="contraindications_10">
                    <label for="contraindications_10_F">無</label>
                    <input type="radio" id="contraindications_10_T" value="T" v-model="contraindications_10">
                    <label for="contraindications_10_T">有</label>
                </th>
            </tr>
            <tr>
                <td class="bg" colspan="2"> 
                        11.B、C肝炎帶原者每半年GI門診追蹤
                </td>
                <th class="bg"> 
                    <input type="radio" id="contraindications_11_F" value="F" v-model="contraindications_11">
                    <label for="contraindications_11_F">無</label>
                    <input type="radio" id="contraindications_11_T" value="T" v-model="contraindications_11">
                    <label for="contraindications_11_T">有</label>
                </th>
            </tr>
            <tr>
                <td colspan="2"> 
                        12.副甲狀腺功能亢進( iPTH>800 )
                </td>
                <th> 
                    <input type="radio" id="contraindications_12_F" value="F" v-model="contraindications_12">
                    <label for="contraindications_12_F">無</label>
                    <input type="radio" id="contraindications_12_T" value="T" v-model="contraindications_12">
                    <label for="contraindications_12_T">有</label>
                </th>
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
            contraindications_1:"",
            contraindications_2:"",
            contraindications_3:"",
            contraindications_4:"",
            contraindications_5:"",
            contraindications_6:"",
            contraindications_7:"",
            contraindications_8:"",
            contraindications_9:"",
            contraindications_10:"",
            contraindications_11:"",
            contraindications_12:"",
        }
    },
    components: { DatePicker },
    props: ['storeData'],
}
</script>
