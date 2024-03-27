// Vue 默认引入
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入 Varlet 主题库
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'

// 引入 Varlet 主题库的图标
import './assets/iconfont/iconfont.css'

// 使用 Postcss + Themes.toViewport 进行移动端适配
import { Themes } from '@varlet/ui'
const viewportTheme = Themes.toViewport(Themes.md3Dark, {
    // 默认值为 375
    viewportWidth: 375,
    // 默认值为 'vmin'
    viewportUnit: 'vmin',
    // 默认值为 6
    unitPrecision: 6,
})

//引入vue router
import router from './router/index';

createApp(App).use(Varlet).use(router).mount('#app')
