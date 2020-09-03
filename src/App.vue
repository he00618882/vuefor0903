<template>
  
  <div>
    <div id="app">
      <div>
        <router-view/>
      </div>
      
    </div>

  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.img-dack{
  width: 100%;
  height: 100%;
  object-fit:cover;
}
.static{
    width: 100%;
  height: 100%;
  position: absolute;
  left:  0%;
  top:0%;
  z-index: 105;
}


</style>

