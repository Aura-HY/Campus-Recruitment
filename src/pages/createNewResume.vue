<template>
    <div class="top">
        <cnResumeBar v-model="useCreateNewrResumeInfo" @save="saveResume"></cnResumeBar>
    </div>

    <!-- 大简历卡片 -->
    <div class="resumeCards">
        <!-- 输入个人信息框盒子 -->
        <div class="personal-info">
            <var-input placeholder="简历名称" v-model="useCreateNewrResumeInfo.resumeName" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="姓名" v-model="useCreateNewrResumeInfo.name" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="性别" v-model="useCreateNewrResumeInfo.gender" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="年级" v-model="useCreateNewrResumeInfo.grade" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="学院" v-model="useCreateNewrResumeInfo.academy" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="班级" v-model="useCreateNewrResumeInfo.classNumber" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="学号" v-model="useCreateNewrResumeInfo.studentId" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="微信号" v-model="useCreateNewrResumeInfo.wechat" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="练习电话" v-model="useCreateNewrResumeInfo.phone" class="aput"  />
        </div>
        <div class="personal-info">
            <var-select placeholder="是否拥有健康证明" v-model="useCreateNewrResumeInfo.healthCertificate" >
                <var-option label="是" :value="1" />
                <var-option label="否" :value="0" />
            </var-select>
        </div>
        <div class="personal-info">
            <var-input placeholder="个人简历" v-model="useCreateNewrResumeInfo.curriculumVitae" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="工作经历" v-model="useCreateNewrResumeInfo.workExperience" class="aput"  />
        </div>
        <div class="personal-info">
            <var-input placeholder="荣誉证书" v-model="useCreateNewrResumeInfo.honorCertificate" class="aput"  />
        </div>
    </div>
</template>

<script>
import cnResumeBar from '../components/cnResumeBar.vue';
import { userStore } from '@/stores/userStore';
import user from '@/api/user';

export default {
    components: {
        cnResumeBar
    },
    data() {
        return {
            useCreateNewrResumeInfo: {
                resumeName: '',
                name: '',
                gender: '',
                grade: '',
                academy: '',
                classNumber: null,
                studentId: '',
                wechat: null,
                phone: '',
                healthCertificate: null,
                curriculumVitae: null,
                workExperience: null,
                honorCertificate: null,
                userId: null
            }
        };
    },
    created() {
        const userInfo = userStore();
        this.useCreateNewrResumeInfo.userId = userInfo.userId;
    },
    mounted() {},
    updated() {},
    methods: {
        async saveResume() {
            console.log(this.useCreateNewrResumeInfo);
            await user.addNewResumeInfo(this.useCreateNewrResumeInfo)
        }
    }
};
</script>

<style scoped>
.top {
    height: 10%;
    width: 100%;
}

.resumeCards {
    overflow-y: auto;
    height: 90%;
}

/* 设置个人信息盒子 */
.personal-info {
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 10px; /* 如果输入框要下移 可在前添加3px */
    /* border-bottom: 1px solid #ccc;  调试边框 */

    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    margin: 15px;
}
.aput {
    width: 100%;
}
</style>
