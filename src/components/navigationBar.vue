<!--封装顶部导航栏-->
<template fixed="true">
    <var-app-bar :title='title' fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" @click="goBack" round text>
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>

        <template #right>
            <var-menu>
                <var-button color="transparent" text-color="#fff" round text>
                    <var-icon name="menu" :size="24" />
                </var-button>

                <template #menu>
                    <var-cell @click="cellClick1" ripple>{{ select1 }}</var-cell>
                    <var-cell @click="cellClick2" ripple>{{ select2 }}</var-cell>
                    <var-cell @click="cellClick3" ripple>{{ select3 }}</var-cell>
                </template>
            </var-menu>
        </template>
    </var-app-bar>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    data(){
        return{
            router:useRouter()
        }
    },
    props: {
    title: {
        type: String,
        default: '标题'
    },
    select1: {
        type: String,
        default: '选项卡'
    },
    select2: {
        type: String,
        default: '选项卡'
    },
    select3: {
        type: String,
        default: '选项卡'
    }
    },
methods: {
    goBack() {
        this.router.go(-1);
    },
    cellClick1(){
        this.$emit('cellClick1');
    },
    cellClick2(){
        this.$emit('cellClick2');
    },
    cellClick3(){
        this.$emit('cellClick3');
    }
}
};
</script>