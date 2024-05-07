<template fixed="true">
    <var-app-bar title="消息" fixed="true">
       

        <template #right>
            <var-button color="transparent" text-color="#fff" round text @click="handleClick()">
                
            </var-button>
        </template>
    </var-app-bar>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { Snackbar } from '@varlet/ui'

const router = useRouter();

function goSelectResume() {
    router.push({ name: 'selectResume' });
}

function handleClick() {
    Snackbar.success('保存成功');
}
</script>
