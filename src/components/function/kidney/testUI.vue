<template lang="html">
    <div class='block' >
       RRRRRRRRRRR
        <div v-html="rawHtml">

        </div>
       <textbox v-model="text1"></textbox>
    </div>
</template>



<script>
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import 'vue2-datepicker/locale/zh-cn';
    import textbox from '../../Common/textbox';


export default {
    name: 'testUI',
    data () {
        return {
            rawHtml:"",
            text1:'1231321'
        }
    },
    methods:{
        init() {
            this.rawHtml += '<textbox v-model="text1"></textbox>'
        },
    },
    mounted () {
        this.init()
    },
    components: { DatePicker ,textbox},
}
</script>