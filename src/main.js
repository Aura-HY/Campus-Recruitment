import { createApp } from 'vue'
import './style.css'
import Varlet from '@varlet/ui'
import App from './App.vue'
import '@varlet/ui/es/style'
import './assets/iconfont/iconfont.css'
createApp(App).use(Varlet).mount('#app')
import { Themes } from '@varlet/ui'

const viewportTheme = Themes.toViewport(Themes.md3Dark)
