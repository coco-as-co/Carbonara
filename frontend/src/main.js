import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import './style.css';
import VueSelect from "vue-select";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faCalendarWeek, faCheck, faChevronLeft, faComments, faEye, faFaceSmileBeam, faFolderOpen, faGear, faGraduationCap, faHouse, faNewspaper, faPeopleGroup, faPlus, faRightFromBracket, faUser, faPhone, faBriefcase, faStar, faBold, faCode } from '@fortawesome/free-solid-svg-icons';

library.add(faGear, faHouse, faUser, faPeopleGroup, faCalendarWeek, faRightFromBracket, faComments, faFaceSmileBeam, faNewspaper, faGraduationCap, faFolderOpen, faCheck, faPlus, faChevronLeft, faEye, faPhone, faBriefcase, faStar, faBold, faCode)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('v-select', VueSelect)
    .use(router)
    .mount('#app')
