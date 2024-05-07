<template fixed="true">
    <var-app-bar title="消息" fixed="true">
    
       

        <template #right>
            <var-button color="transparent" text-color="#fff" round text @click="handleClick()">
                <Icon type="notice" extraclass="icon"></Icon>
            </var-button>
        </template>
    </var-app-bar>
    
</template>
<script setup>
import { useRouter } from 'vue-router';
import { Snackbar } from '@varlet/ui'
import Icon from '../components/icon.vue';

const router = useRouter();

function goSelectResume() {
    router.push({ name: 'selectResume' });
}

function handleClick() {
    Snackbar.success({name:'notice'});
}
</script>

<style scoped>
.icon{
    font-size: 22px;

}
</style>

