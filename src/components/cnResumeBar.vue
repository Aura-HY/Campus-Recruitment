<template fixed="true">
    <var-app-bar title="我的新简历" fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" round text @click="goSelectResume()">
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>

        <template #right>
            <var-button color="transparent" text-color="#fff" round text @click="save">保存</var-button>
        </template>
    </var-app-bar>
</template>

<script>
import { Snackbar } from '@varlet/ui'

export default {
    name:'creatNewResume',
    emits: ['save'],
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
            this.$router.push({ name: 'selectResume' });
        },
        save() {
            this.$emit('save');
            Snackbar.success('保存成功');
        }
    }
}
</script>