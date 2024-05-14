<template>
    <div class="top">
        <asResumeBar></asResumeBar>
    </div>

    <!-- 大简历卡片 -->
    <div class="resumeCards">
            <!-- 输入个人信息框盒子 -->
                <div class="personal-info">
                    <var-input placeholder="简历名称" v-model="resumeName" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="姓名" v-model="name" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="性别" v-model="gender" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="年级" v-model="grade" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="学院" v-model="academy" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="班级" v-model="classNumber" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="学号" v-model="studentId" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="微信号" v-model="wechat" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="练习电话" v-model="phone" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-select placeholder="是否拥有健康证明" v-model="healthCertificate" >
                        <var-option label="是" :value="1" />
                        <var-option label="否" :value="0" />
                    </var-select>
                </div>
                <div class="personal-info">
                    <var-input placeholder="个人简历" v-model="curriculumVitae" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="工作经历" v-model="workExperience" class="aput"/>
                </div>
                <div class="personal-info">
                    <var-input placeholder="荣誉证书" v-model="honorCertificate" class="aput"/>
                </div>
            </div>
</template>

<script>
import asResumeBar from '../components/asResumeBar.vue';
import user from '../api/user';


export default {
    components: {
        asResumeBar
    },
    data() {
        return {
            resumeName:'',
            name:'',
            gender:'',
            grade:'',
            academy:'',
            classNumber:'',
            studentId:'',
            wechat:'',
            phone:'',
            healthCertificate:'',
            curriculumVitae:'',
            workExperience:'',
            honorCertificate:''
        };
    },
    created() {
        this.getUserResumesInfo(this.$route.params.resumeId);
    },
    mounted() {},
    updated() {},
    watch: {
    resumeName(newValue) {
        this.reviseResume('resumeName', newValue);
    },
    name(newValue) {
        this.reviseResume('name', newValue);
    },
    gender(newValue) {
        this.reviseResume('gender', newValue);
    },
    grade(newValue) {
        this.reviseResume('grade', newValue);
    },
    academy(newValue) {
        this.reviseResume('academy', newValue);
    },
    classNumber(newValue) {
        this.reviseResume('classNumber', newValue);
    },
    studentId(newValue) {
        this.reviseResume('studentId', newValue);
    },
    wechat(newValue) {
        this.reviseResume('wechat', newValue);
    },
    phone(newValue) {
        this.reviseResume('phone', newValue);
    },
    healthCertificate(newValue) {
        this.reviseResume('healthCertificate', newValue);
    },
    curriculumVitae(newValue) {
        this.reviseResume('curriculumVitae', newValue);
    },
    workExperience(newValue) {
        this.reviseResume('workExperience', newValue);
    },
    honorCertificate(newValue) {
        this.reviseResume('honorCertificate', newValue);
    }
},
    methods: {
        handleResumeClick(resumeId){
            this.getUserResumesInfo(resumeId);
        },
        async getUserResumesInfo(resumeId) {
            const userResumesInfo = await user.getUserResumesInfo(resumeId);
            //this.userResumesInfo = Object.keys(userResumesInfo[0]).map(key => ({ [key]: userResumesInfo[0][key] }));
            this.resumeName = userResumesInfo[0].resumeName;
            this.name = userResumesInfo[0].name;
            this.gender = userResumesInfo[0].gender;
            this.grade = userResumesInfo[0].grade;
            this.academy = userResumesInfo[0].academy;
            this.classNumber = userResumesInfo[0].classNumber;
            this.studentId = userResumesInfo[0].studentId;
            this.wechat = userResumesInfo[0].wechat;
            this.phone = userResumesInfo[0].phone;
            this.healthCertificate = userResumesInfo[0].healthCertificate;
            this.curriculumVitae = userResumesInfo[0].curriculumVitae;
            this.workExperience = userResumesInfo[0].workExperience;
            this.honorCertificate = userResumesInfo[0].honorCertificate;
        },
        async reviseResume(resumeName, name, gender, grade, academy, classNumber, studentId, wechat, phone, healthCertificate, curriculumVitae, workExperience, honorCertificate, resumeId){
            await user.reviseResume( resumeName, name, gender, grade, academy, classNumber, studentId, wechat, phone, healthCertificate, curriculumVitae, workExperience, honorCertificate, resumeId);
        }
    }
}
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
    padding:  10px; /* 如果输入框要下移 可在前添加3px */
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