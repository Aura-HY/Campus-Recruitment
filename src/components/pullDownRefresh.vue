<!-- 下拉刷新 -->
<template>
    <var-pull-refresh v-model="isRefresh" @refresh="refresh">
        <var-cell v-for="(item, index) in data" :key="index" border>
            {{ item + ' ' + (index + 1) }}
        </var-cell>

        <div style="height: 200px"></div>
    </var-pull-refresh>
</template>

<script setup>
import { ref } from 'vue';

const data1 = Array(2).fill('List Item');
const data2 = Array(2).fill('This is new List Item');
const isRefresh = ref(false);
const data = ref(data1);

function refresh() {
    setTimeout(() => {
        data.value = data.value[0] === 'List Item' ? data2 : data1;
        isRefresh.value = false;
    }, 2000);
}
</script>
