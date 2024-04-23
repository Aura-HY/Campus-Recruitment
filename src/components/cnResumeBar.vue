<template fixed="true">
    <var-app-bar title="我的新简历" fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" round text @click="goSelectResume()">
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>

        <template #right>
            <var-button color="transparent" text-color="#fff" round text @click="handleClick()">
                保存
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
