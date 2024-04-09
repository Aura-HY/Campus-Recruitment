<template>
    <div class="body">
        <router-view></router-view>
    </div>

    <div class="foot">
        <var-bottom-navigation v-model:active="active" fixed="true">
            <var-bottom-navigation-item name="home" label="首页" icon="home" @click="goHome" />
            <var-bottom-navigation-item name="message" label="信息" icon="message-text-outline" @click="goMessage" />
            <var-bottom-navigation-item name="user" label="我的" icon="account-circle" @click="goUser" />
        </var-bottom-navigation>
    </div>

</template>

<script>
import navigationBarVue from './components/navigationBar.vue';
import { useRouter } from 'vue-router';
export default {
    components: {
        navigationBarVue
    },
    methods:{
        goHome() {
            this.$router.push({ name: 'home' });
        },
        goMessage() {
            this.$router.push({ name: 'message' });
        },
        goUser() {
            this.$router.push({ name: 'user' });
        }
    }
};



</script>

<style scoped>
.head{
    width: 100vw;
    height: 7vh;
}

.body{
    width: 100vw;
    height: 93vh;
}

.foot{
    width: 100vw;
    height: 7vh;
}
</style>