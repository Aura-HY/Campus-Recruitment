<template>
  <h1>你好 我叫陈景清</h1>
  <h1>halo I am lunamoom</h1>
  <icon type="massenge" extraclass="icon"/>
  <navigationRoutesVue></navigationRoutesVue>






</template>

<script>
import icon from './components/icon.vue';
import navigationRoutesVue from './components/navigationRoutes.vue';
export default {
    
    components: {
        icon,
        navigationRoutesVue
    }
}
</script>

<style scoped>
.icon{
    font-size: 30px;
    float: none ;
}
</style>