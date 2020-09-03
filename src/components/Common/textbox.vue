
<template lang="html">
  <div>
    <input type='text' v-bind:value="value" :placeholder="placeholder" 
      v-on:input="$emit('input', $event.target.value)" >
  </div>
</template>





<script>
export default {
  data () {
    return {

    }
  },
  props: ['value', 'placeholder'],
}
</script>
