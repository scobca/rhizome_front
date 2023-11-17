//creating app
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

//import Vue3Marquee and Vue3Autocounter
import Vue3Marquee from 'vue3-marquee';
import Vue3Autocounter from 'vue3-autocounter';

//import Ant
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

//import gsap
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";


createApp(App).use(store).use(router).use(AOS).use(Vue3Marquee).use(Vue3Autocounter).use(Antd).use(gsap).component('vue3-autocounter', Vue3Autocounter).mount('#app')
gsap.registerPlugin(TextPlugin)
