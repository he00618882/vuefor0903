

<template lang="html">
    <div class="block">
        <br>
        <br>
        <div class='sub_tit'>
            9.腎臟疾病嚴重度等級登入表
        </div>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tr class="bg">
                <td> 
                    登錄狀態
                </td>
                <td> 
                    <input type="radio" id="severity_level_tsc_T" value="T" v-model="severity_level_tsc">
                    <label for="severity_level_tsc_T">有效</label>
                    <input type="radio" id="severity_level_tsc_F" value="F" v-model="severity_level_tsc">
                    <label for="severity_level_tsc_F">失效</label>
                    <date-picker v-model="severity_level_date" valueType="format"  ></date-picker>
                </td>
            </tr>
        </table>
        <br>
        <br>
        <div class='sub_tit'>
            10.退出等候紀錄及移植紀錄
        </div>
        <table width="100%" border="0" cellSpacing="0" cellPadding="0" class="tb_style">
            <tr class="bg" >
                <tr class="bg">
                <td width="10%"> 
                    退出
                </td>
                <td> 退出原因:
                    <div class="inputbox2">
                        <div class="selectbox">
                            <select name="type" v-model="drop_out" >
                                <option value=""></option>
                                <option value="1">死亡</option>
                                <option value="2">失去聯絡</option>
                                <option value="3">已接受移植</option>
                                <option value="4">病人不願意移植</option>
                                <option value="5">不適合移植</option>
                                <option value="6">其他</option>
                            </select>
                        </div>
                    </div>
                        <date-picker v-model="drop_out_date" valueType="format"  ></date-picker>說明:
                    <div class="inputbox2" >
                        <textarea  style="width:100vh;" rows="2" v-model="drop_out_data" />
                    </div>
                </td>
            </tr>
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
        severity_level_tsc: '',
        severity_level_date:"",
        drop_out:"",
        drop_out_date:"",
        drop_out_data:"",
        }
    },
    components: { DatePicker },
    props: ['storeData'],
}
</script>
