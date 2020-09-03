
<template lang="html">
  <div class="index">
    <header>
        <div class="container_user">
          <div class="div_user">亂打的使用者</div>
        </div>
        <input type="checkbox" id="chk" V-model='ckValue' style="display: none;"/>
        <div class ="container">
            <label class="but"  for="chk"></label>
            <div class="item">                  
              <router-link to="/EIPUI">
                    UI
              </router-link>
            </div>
            <div class="item">                  
              <router-link to="/liver">
                    不存在
              </router-link>   
            </div>
             <div class="item">                  
              <router-link to="/liver">
                    不存在
              </router-link>   
            </div>
        </div>
        
    </header>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>





<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:['其他','人事','住院','申報','學習護照','行政管理','護理','病歷管理','資訊','報告','醫師專用','醫事','電子病歷','營養','收費','個案管理','門診','藥劑'],
      ckValue:false
    }
  }
}
</script>


