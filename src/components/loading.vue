<template>
    <!--注册按钮功能-->
    <var-button @click="loading = !loading" style="margin-bottom: 8px">
        {{ loading ? '关闭' : '打开' }}
    </var-button>
    <!--存在内容时 loading 是否显示-->
    <var-loading description="LOADING" :loading="loading">
        <var-card title="介绍" description="Varlet 是一个基于Vue3开发的 Material 风格移动端组件库，全面拥抱Vue3生态，由社区的小伙伴开发和维护。" />
    </var-loading>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
</script>


