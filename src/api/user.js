import request from '../utils/request';
const moduleUrl = '/user';
import fileRequest from '../utils/fileRequest';

const user = {
    //首页渲染
    getJobList() {
        return request(`${moduleUrl}/home/getJobList`);
    },
    //获取可选的职位类型
    getTypeList() {
        return request(`${moduleUrl}/home/getTypeList`);
    },
    //获取选择类型后的
    getTypeJob(typeId) {
        return request(`${moduleUrl}/home/getTypeJob`, typeId);
    },
    //添加收藏的职位到收藏表
    addCollect(userId, jobId) {
        return request(`${moduleUrl}/addCollect`, { userId, jobId });
    },
    //添加举报的职位到举报表
    addReport(userId,jobId,reportTime){
        return request(`${moduleUrl}/addReport`,{ userId , jobId, reportTime });
    },
    //用户注册
    addUser(userId,password,identityParam){
        return request(`${moduleUrl}/addUser`,{ userId, password, identityParam })
    },
    //获取用户密码
    getUserPassword(userId) {
        return request(`${moduleUrl}/getUserPassword`, { userId });
    },
    //获得当前登录用户的简历列表
    getResume(userId) {
        return request(`${moduleUrl}/getResume`, { userId });
    },
    addSendResume(resumeId, userId, recruitersId) {
        return request(`${moduleUrl}/addSendResume`, { resumeId, userId, recruitersId });
    },
    //上传头像
    uploadAvatar(userAvatar){
        return fileRequest(`${moduleUrl}/uploadAvatar`,userAvatar);
    },
    //获取职位详情
    getJobDetail(jobId){
        return request(`${moduleUrl}/getJobDetail`,{ jobId });
    },
    //获取通知列表
    getNotice(){
        return request(`${moduleUrl}/getNotice`);
    },
    getMessageList(recruitersId){
        return request(`${moduleUrl}/getMessageList`,{ recruitersId });
    },
    addMessage(content,jobSeekerId,recruitersId,messageTime){
        return request(`${moduleUrl}/addMessage`,{ content, jobSeekerId, recruitersId, messageTime });
    },
    getMessageMan(userId){
        return request(`${moduleUrl}/getMessageMan`,{ userId });
    },
    getUserName(userId){
        return request(`${moduleUrl}/getUserPassword`,{ userId });
    },
    //撤回消息
    deleteMessage(messageId){
        return request(`${moduleUrl}/deleteMessage`,{ messageId });
    },
    //删除简历
    deleteResume(resumeId){
        return request(`${moduleUrl}/deleteResume`,{ resumeId });
    },


















    //我的 的区域 的后端

    //获得当前登录用户的简历列表
    getUserResumes(userId) {
        return request(`${moduleUrl}/getUserResumes`, { userId });
    },

    //获取用户简历的详细信息
    getUserResumesInfo(resumeId) {
        return request(`${moduleUrl}/getUserResumesInfo`, { resumeId });
    },
    //统计用户收藏的简历份数总数
    favoritesCollectionsSum(data) {
        return request(`${moduleUrl}/favoritesCollectionsSum`, data);
    },
    //统计用户沟通过的聊天总数
    sessionSum(data) {
        return request(`${moduleUrl}/sessionSum`, data);
    },
    //统计用户已投简历总数
    resumeTrueSum(data) {
        return request(`${moduleUrl}/resumeTrueSum`, data);
    },
    //统计用户待面试总数
    interviewedSum(data) {
        return request(`${moduleUrl}/interviewedSum`, data);
    },
    //读取用户的昵称和头像
    getUserBasic(data) {
        return request(`${moduleUrl}/getUserBasic`, data);
    },
    //添加用户新简历
    addNewResumeInfo(data){
        return request(`${moduleUrl}/addNewResumeInfo`, data);
    },
    //读取用户收藏的职位
    getUserFavoritesJob(data){
        return request(`${moduleUrl}/getUserFavoritesJob`, data);
    }
};

export default user;
