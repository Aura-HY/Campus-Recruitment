<template>
    <div class="body" >
        <div class="id">
            <var-input placeholder="请输入id" v-model="value7">
            <template #prepend-icon>
                <var-icon class="prepend-icon" name="account-circle-outline" />
            </template>
            </var-input>
            <var-input placeholder="请输入密码" v-model="value7">
            <template #prepend-icon>
                <var-icon class="prepend-icon" name="lock-outline" />
            </template>
            </var-input>
        </div>
        <div class="login">
            <var-button style="width:230px;" color="linear-gradient(to right bottom, #2980E3, #D0BCFF)" block type="primary">Login</var-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style name="login">
.body{
    background-image: url(/src/assets/login.png);
}
.id{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.login{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
