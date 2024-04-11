<template>
    <Select></Select>
    <jobCard></jobCard>
    <div class="bottom">
        <navigationRoutesVue></navigationRoutesVue>
    </div>
</template>

<script setup>
import Select from "../components/select.vue"
import jobCard from "../components/jobCard.vue"
import navigationRoutesVue from "../components/navigationRoutes.vue"
components: {
    Select,
    jobCard,
    navigationRoutesVue
}


</script>

<style>

</style>