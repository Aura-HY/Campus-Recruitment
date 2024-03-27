<template>
    <navigationRoutesVue></navigationRoutesVue>

    <navigationBarVue></navigationBarVue>

    <pullDownRefresh></pullDownRefresh>
</template>

<script>
import navigationRoutesVue from './components/navigationRoutes.vue';
import navigationBarVue from './components/navigationBar.vue';
import pullDownRefresh from './components/pullDownRefresh.vue';
export default {
    components: {
        navigationRoutesVue,navigationBarVue,pullDownRefresh
    },
};



</script>

<style scoped>


</style>