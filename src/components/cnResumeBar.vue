<template fixed="true">
    <var-app-bar title="我的新简历" fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" round text @click="goSelectResume()">
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>

        <template #right>
                <var-button color="transparent" text-color="#fff" round text>
                    <var-icon name="plus-circle" :size="30" />
                </var-button>
        </template>
    </var-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goSelectResume() {
    router.push({ name: 'selectResume' });
}
</script>
