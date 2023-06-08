import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import './style.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faGear, faHouse, faUser, faPeopleGroup, faCalendarWeek, faRightFromBracket, faComments, faFaceSmileBeam, faNewspaper, faGraduationCap, faFolderOpen, faCheck, faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


library.add(faGear, faHouse, faUser, faPeopleGroup, faCalendarWeek, faRightFromBracket, faComments, faFaceSmileBeam, faNewspaper, faGraduationCap, faFolderOpen, faCheck, faPlus, faChevronLeft)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
