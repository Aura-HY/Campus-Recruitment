<template>
  <div class="select">
    <var-select placeholder="筛选兼职类型" chip multiple v-model="value10" style="margin:20px">
            <var-option  v-for="item in items" :key="item.id" :label=item.type />
    </var-select>
</div>
</template>

<script setup>
import { ref } from 'vue'

const value10 = ref([])
const items = [
    {id:1,type:'type 1'},
    {id:2,type:'type 2'},
    {id:3,type:'type 3'}
]

</script>

<style>

</style>