<template>
    <div class="bar">
        <noticeBar></noticeBar>
    </div>
    <div class="body">
        <noticeCard></noticeCard>
    </div>
    
</template>

<script>
import noticeBar from '../components/noticeBar.vue';
import noticeCard from '../components/noticeCard.vue'
export default {
    components: {
        noticeBar,
        noticeCard
    }
}
</script>

<style scoped>
.bar{
    height: 10%;
}
.body{
    height: 50%;
    overflow: auto;
}
</style>