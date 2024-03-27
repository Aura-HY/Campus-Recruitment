<template>
  <var-select placeholder="纸片风格的多选" chip multiple v-model="value10">
      <var-option label="饭堂兼职" />
      <var-option label="校内配送" />
      <var-option label="代拿" />
      <var-option label="宣传" />
    </var-select>
</template>

<script setup>
import { ref } from 'vue'

const value10 = ref([])
</script>

<style>

</style>