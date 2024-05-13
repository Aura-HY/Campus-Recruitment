import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../pages/home.vue'),
            meta: {
                home: true
            }
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../pages/user.vue'),
            meta: {
                user: true
            }
        },
        {
            path: '/message',
            name: 'message',
            component: () => import('../pages/message.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/jobDetail/:jobId/:titleJob/:jobDescription/:requirementsL/:salary/:salary/:salaryUnit',
            name: 'jobDetail',
            component: () => import('../pages/jobDetail.vue')
            // meta: {
            //   message: true,
            // },
        },
        {
            path: '/selectResume',
            name: 'selectResume',
            component: () => import('../pages/selectResume.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/fraudPreventionGuide',
            name: 'fraudPreventionGuide',
            component: () => import('../pages/fraudPreventionGuide.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/createNewResume',
            name: 'createNewResume',
            component: () => import('../pages/createNewResume.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('../pages/Login.vue'),
            meta: {
                Login: true
            }
        },
        {
            path: '/Register',
            name: 'Register',
            component: () => import('../pages/register.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/favoritesCollections',
            name: 'favoritesCollections',
            component: () => import('../pages/favoritesCollections.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/afterSelectResume/:resumeId',
            name: 'afterSelectResume',
            component: () => import('../pages/afterSelectResume.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/message/chat/:recruitersId ',
            name: 'chat',
            component: () => import('../pages/chat.vue'),
            meta: {
                chat: true
            }
        },
        {
            path: '/message/notice',
            name: 'notice',
            component: () => import('../pages/notice.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../pages/user.vue'),
            meta: {
                user: true
            }
        },
        {
            path: '/message',
            name: 'message',
            component: () => import('../pages/message.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/jobDetail/:jobId/:titleJob/:jobDescription/:requirementsL/:salary/:salary/:salaryUnit',
            name: 'jobDetail',
            component: () => import('../pages/jobDetail.vue')
            // meta: {
            //   message: true,
            // },
        },
        {
            path: '/selectResume',
            name: 'selectResume',
            component: () => import('../pages/selectResume.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/fraudPreventionGuide',
            name: 'fraudPreventionGuide',
            component: () => import('../pages/fraudPreventionGuide.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/createNewResume',
            name: 'createNewResume',
            component: () => import('../pages/createNewResume.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('../pages/Login.vue'),
            meta: {
                Login: true
            }
        },
        {
            path: '/Register',
            name: 'Register',
            component: () => import('../pages/register.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/favoritesCollections',
            name: 'favoritesCollections',
            component: () => import('../pages/favoritesCollections.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/afterSelectResume/:resumeId',
            name: 'afterSelectResume',
            component: () => import('../pages/afterSelectResume.vue'),
            meta: {
                message: true
            }
        },
        {
            path: '/compareCode',
            name: 'compareCode',
            component: () => import('../pages/compareCode.vue'),
            meta: {
                compareCode: true
            }
        }
    ]
});

export default router;
