<template>
    <var-app-bar :title='title' fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" @click="goBack" round text>
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>
    </var-app-bar>

    <div class="body">
        <h1>niaho</h1>
    </div>
</template>

<script>

export default {
    data() {
        return {

            };
},
    created() {},
    mounted() {},
    updated() {},
    methods: {
        goBack() {
            this.$router.push({ name: 'Register' });
        }
        
    }
};
</script>
<style>
</style>

