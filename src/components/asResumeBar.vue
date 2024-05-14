<template fixed="true">
    <var-app-bar title="修改我的简历" fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" round text @click="goSelectResume()">
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>

        <template #right>
            <var-button color="transparent" text-color="#fff" round text @click="revise">修改</var-button>
        </template>
    </var-app-bar>
</template>

<script>
import { Snackbar } from '@varlet/ui'

export default {
    name:'afterSelectResume',
    emits: ['revise'],
    data() {
        return {};
    },
    computed: {},
    created() {},
    mounted() {
    },
    updated() {
    },
    methods: {
        goSelectResume() {
            router.push({ name: 'selectResume' });
        },
        revise() {
            this.$emit('revise');
            Snackbar.success('修改成功');
        }
    }
}
</script>