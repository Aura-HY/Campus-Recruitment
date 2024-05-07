
<template fixed="true">
    <var-app-bar fixed="true"  :title='nickname'>
        <template #left>
            <var-button color="transparent" text-color="#fff" round text @click="goback()">
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>

        <template #right>
            <var-button color="transparent" text-color="#fff" round text @click="handleClick()">
                
            </var-button>
        </template>
    </var-app-bar>
</template>
<script >
import { useRouter } from 'vue-router';
export default {

  data(){
 return{
    router:useRouter(),
}
 },
 props:{
    nickname:{
        type:String,
        default:''
    }
 },
 methods:{
    goback(){
        this.router.go(-1);
    }
 }
}
</script>
