<template>
    <Select @send-id="typeId1"></Select>
    <jobCard :paramId="typeId"></jobCard>
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

<style>

</style>