import { createRouter, createWebHistory } from 'vue-router'
import LiveEdit from './components/LiveEdit.vue'
import LandingPage from './components/LandingPage.vue'
import SliderEdit from './components/template-edits/SliderEdit.vue'
import CardEdit from './components/template-edits/CardEdit.vue'
import NavBarEidt from './components/template-edits/NavBarEdit.vue'
import AccordionEdit from './components/template-edits/AccordionEdit.vue'
import HeaderEdit from './components/template-edits/HeaderEdit.vue'
import FooterEdit from './components/template-edits/FooterEdit.vue'
import DownloadWeb from './components/DownloadWeb.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        component: LandingPage,
    },
    {
      path: '/live',
      name: 'live',
      component: LiveEdit,
    },
    {
      path: '/edit/nav',
      component: NavBarEidt,
    },
    {
      path: '/edit/slider',
      component: SliderEdit,
    },
    {
      path: '/edit/accordion',
      component: AccordionEdit,
    },
    {
      path: '/edit/header',
      component: HeaderEdit,
    },
    {
      path: '/edit/footer',
      component: FooterEdit,
    },
    {
      path: '/edit/card',
      component: CardEdit,
    },
    {
      path: '/download',
      name: 'download',
      component: DownloadWeb,
    }
  ]
})