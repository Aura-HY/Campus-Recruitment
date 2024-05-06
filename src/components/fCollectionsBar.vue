<template fixed="true">
    <var-app-bar title="职位收藏" fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" round text @click="gouser()">
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>
    </var-app-bar>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function gouser(){
    router.push({name:'user'})
}
</script>
