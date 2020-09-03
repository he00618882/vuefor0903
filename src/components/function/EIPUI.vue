<template lang="html">
<div class='main'>
    <div  :style="(dataList.type =='add'?'opacity: 0.2;':'')">
        <Query :storeData="dataList"></Query>
        
    </div>
    <div class="OverLay" v-if="dataList.type">
        <div  class="OverLay_ui">
            <kidneyAddForm :storeData="dataList"></kidneyAddForm>
        </div>
    </div>
</div>
</template>



<script>
    import  Query from './kidney/Query';
    import  kidneyAddForm from './kidney/kidneyAddForm';
    
    import  store from "./EIPUIStore"

    export default {
        store,
        name: 'kidneyapp',
        data () {
            return {
                dataList:store.state,
            }
        },
        components: { Query  , kidneyAddForm},
    }
</script>