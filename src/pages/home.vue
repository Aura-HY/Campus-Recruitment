<template>
    <div class="head">
        <div class="headson">
            <div class="hello">
                <div class="hi">您 好，</div>
                <div class="name"><h3>{{ nickname }}</h3></div>
            </div>
            <Select @send-id="typeId1"></Select>

        </div>     
    </div>
    

    <div class="body">
        <div class="img">
                <var-swipe class="swipe-example">
                    <var-swipe-item>
                        <img class="swipe-example-image" src="../../public/2.jpg">
                    </var-swipe-item>
                    <var-swipe-item>
                        <img class="swipe-example-image"  src="../../public/1.jpg">
                    </var-swipe-item>
                </var-swipe>
        </div>
        <jobCard :paramId="typeId"></jobCard>
    </div>
    
</template>

<script>
import Select from "../components/select.vue"
import jobCard from "../components/jobCard.vue"
import user from "../api/user"
export default{
    name:"home",
    data(){
        return{
            userId:localStorage.getItem('userId'),
            nickname:'',
            typeId:''
        }
    },
    created(){
        this.getUserName()
    },
    methods:{
        typeId1(paramId){
            this.typeId = paramId;
        },
        async getUserName(){
            const name = await user.getUserName(this.userId);
            this.nickname = name[0].nickname;
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
    height:15%;
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
    height: 85%;
    overflow: auto;
}
.img{
    margin-left:15%;
    height: 25%;
    margin-top:10px;
}
.hi{
    margin-top:3%;
    color:rgb(97, 98, 99);
    font-size:x-small;
}
.hello{
    margin-left:2%;
}
</style>