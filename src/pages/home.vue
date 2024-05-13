<template>
    <div class="head">
        <div class="headson">
            <Select @send-id="typeId1"></Select>
            <div class="img">
            <img src="../assets/2.jpg" alt="图" />
        </div>
        </div>
        
    </div>
    

    <div class="body">
        <jobCard :paramId="typeId"></jobCard>
    </div>
    
</template>

<script>
import Select from "../components/select.vue"
import jobCard from "../components/jobCard.vue"
export default{
    name:"home",
    data(){
        return{
            typeId:''
        }
    },
    methods:{
        typeId1(paramId){
            this.typeId = paramId;
        }
    },
    components: {
    Select,
    jobCard,
}
}



</script>

<style scoped>
.head{
    height: 40%;
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
    height: 60%;
    overflow: auto;
}
.img{
    height: 80%;
}
</style>