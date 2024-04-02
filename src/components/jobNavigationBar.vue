<template fixed="true">
    <var-app-bar title="职位详情" fixed="true" >
        <template #left>
            <var-button
            color="transparent"
            text-color="#fff"
            round
            text
            @click="gohome()"
        >
            <var-icon name="chevron-left" :size="24" />
        </var-button>
    </template>

    <template #right>
        <var-menu>
            <var-button
            color="transparent"
            text-color="#fff"
            round
            text
        >
            <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
                <var-cell ripple>收藏</var-cell>
                <var-cell ripple>举报</var-cell>
                <var-cell ripple>分享</var-cell>
        </template>
        </var-menu>
        </template>
    </var-app-bar>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function gohome(){
    router.push({name:'home'})
}
</script>
