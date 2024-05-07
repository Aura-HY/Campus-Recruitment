<template>
  <div class="bar">
      <chatBar></chatBar>
  </div>
  <div class="body">
      <chatCard></chatCard>
  </div>
  
</template>

<script>
import chatBar from '../components/chatBar.vue';

export default {
  components: {
    chatBar,
    
  }
}
</script>

<style scoped>
.bar{
  height: 10%;
}
.body{
  height: 50%;
  overflow: auto;
}
</style>