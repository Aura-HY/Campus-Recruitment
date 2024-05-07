<template>
   <div class = "head">
    <messageBar :nickname="name1"></messageBar>
   </div>
    <div class="body">
        
        <messageCard @send-name="sendName"></messageCard>
    </div>
    
</template>

<script>
import messageBar from "../components/messageBar.vue"
import messageCard from "../components/messageCard.vue"
export default{
    name:"message",
    data(){
        return{
            name1:''
        }
    },
    methods:{
        sendName(nickname){
            console.log(nickname);
            this.name1 = nickname;
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