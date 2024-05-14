<template fixed="true">
    <var-app-bar title="修改我的简历" fixed="true">
        <template #left>
            <var-button color="transparent" text-color="#fff" round text @click="goSelectResume()">
                <var-icon name="chevron-left" :size="24" />
            </var-button>
        </template>

        <template #right>
            <var-button color="transparent" text-color="#fff" round text @click="revise(resumeName, name, gender, grade, academy, classNumber, studentId, wechat, phone, healthCertificate, curriculumVitae, workExperience, honorCertificate, resumeId)">修改</var-button>
        </template>
    </var-app-bar>
</template>

<script>
import { Snackbar } from '@varlet/ui'
import user from '../api/user'
export default {
    name:'afterSelectResume',
    emits: ['revise'],
    props:['resumeName', 'name', 'gender', 'grade', 'academy', 'classNumber',
            'studentId', 'wechat', 'phone', 'healthCertificate', 'curriculumVitae',
            'workExperience', 'honorCertificate', 'resumeId'],
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
        async revise(resumeName, name, gender, grade, academy, classNumber, studentId, wechat, phone, healthCertificate, curriculumVitae, workExperience, honorCertificate, resumeId) {
            await user.reviseResume( resumeName, name, gender, grade, academy, classNumber, studentId, wechat, phone, healthCertificate, curriculumVitae, workExperience, honorCertificate, resumeId);
            Snackbar.success('修改成功');
        }
    }
}
</script>