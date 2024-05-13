<template>
   <div class = "head">
    <messageBar></messageBar>
   </div>
    <div class="body">
        <messageCard></messageCard>
    </div>
    
</template>

<script>
import messageBar from "../components/messageBar.vue"
import messageCard from "../components/messageCard.vue"
export default{
    name:"message",
    data(){
        return{

        }
    },
    components: {
        messageCard,
        messageBar,
}
}



</script>

<style scoped>
.head{
    height: 8%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.headson{
    height: 100%;
    width: 90%;

}
.body{
    height: 92%;
    overflow: auto;
}
</style>