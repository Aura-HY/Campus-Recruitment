<template fixed="true">
    <var-app-bar title="修改我的简历" fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" round text @click="goSelectResume()">
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>

        <template #right>
            <var-button color="transparent" text-color="#fff" round text @click="handleClick()">
                修改
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
    Snackbar.success('修改成功');
}
</script>
