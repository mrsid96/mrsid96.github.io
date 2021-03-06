import Vue from 'vue'
import Router from 'vue-router'
import FocusContainer from '@/components/FocusContainer.vue'
import Information from '@/components/Information.vue'
import About from '@/components/Information/About.vue'
import Skills from '@/components/Information/Skills.vue'
import Experience from '@/components/Information/Experience.vue'
import Contact from '@/components/Information/Contact.vue'
import Projects from '@/components/Information/Projects.vue'
import UnderConstruction from '@/components/Information/UnderConstruction.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: FocusContainer
        },
        {
            path: '/more',
            component: Information,
            children: [
                {
                    path: '/',
                    redirect: "about"

                }, {
                    path: 'about',
                    component: About
                }, {
                    path: 'skills',
                    component: Skills
                }, {
                    path: 'experience',
                    component: Experience
                }, {
                    path: 'contact',
                    component: Contact
                }, {
                    path: 'projects',
                    component: Projects
                }, {
                    path: '/*',
                    component: UnderConstruction
                }
            ]
        }
    ]
});
