<!--封装底部导航栏 首页+信息+我的-->
<template>
    <var-bottom-navigation v-model:active="active" fixed="true">
        <var-bottom-navigation-item name="home" label="首页" icon="home" @click="goHome" />
        <var-bottom-navigation-item name="message" label="信息" icon="message-text-outline" @click="goMessage" />
        <var-bottom-navigation-item name="user" label="我的" icon="account-circle" @click="goUser" />
    </var-bottom-navigation>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<script setup name="navigation">
import { ref } from 'vue';

const active = ref('home');
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
    router.push({ name: 'home' });
}
function goMessage() {
    router.push({ name: 'message' });
}
function goUser() {
    router.push({ name: 'user' });
}
</script>

<style scoped></style>
