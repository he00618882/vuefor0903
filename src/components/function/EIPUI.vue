<template lang="html">
<div class='main'>
    <div  :style="(dataList.type?'opacity: 0.2;':'')">
        <Query :storeData="dataList"></Query>
        
    </div>
    <div class="OverLay" v-if="dataList.type">
        <div  class="OverLay_ui">
            <AddForm :storeData="dataList"></AddForm>
        </div>
    </div>
</div>
</template>



<script>
    import  Query from './EIPUI/Query';
    import  AddForm from './EIPUI/AddForm';
    
    import  store from "./EIPUIStore"

    export default {
        store,
        name: 'EIPUI',
        data () {
            return {
                dataList:store.state,
            }
        },
        components: { Query  , AddForm},
    }
</script>