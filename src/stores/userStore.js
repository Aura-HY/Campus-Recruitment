import { defineStore } from 'pinia';

export const userStore = defineStore('userInfo',{
    state:() => ({
        userId: null
    })
});