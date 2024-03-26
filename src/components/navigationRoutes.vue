
<template>
    <!--封装底部导航栏 首页+信息+我的-->
    <var-bottom-navigation v-model:active="active" fixed="true">
        <var-bottom-navigation-item name="home" label="首页" icon="home" />
        <var-bottom-navigation-item name="message" label="信息" icon="message-text-outline" />
        <var-bottom-navigation-item name="user" label="我的" icon="account-circle" />
    </var-bottom-navigation>
</template>

<script setup>
    import { ref } from 'vue'

    const active = ref('home')
</script>
    
<style scoped>

</style>
