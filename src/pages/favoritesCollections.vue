<template>
    <div class="top">
        <fCollectionsBar></fCollectionsBar>
    </div>
    <div class="main">
        <jobCard></jobCard>
    </div>
    
</template>

<script>
import fCollectionsBar from '../components/fCollectionsBar.vue';
import jobCard from '../components/jobCard.vue';
export default {
    components: {
        jobCard,
        fCollectionsBar
    }
};
</script>

<style scoped>
.top {
    height: 10%;
    width: 100%;
}
.main{
    overflow-y: auto;
    height: 90%;
}
</style>
