import { createApp } from 'vue';
import VueSelect from "vue-select";
import App from './App.vue';
import router from "./router";
import './style.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faBriefcase,
    faCakeCandles,
    faCalendarWeek,
    faCheck,
    faChevronLeft,
    faComments,
    faEye,
    faFaceSmileBeam,
    faFolderOpen,
    faGear,
    faGraduationCap,
    faHouse,
    faNewspaper,
    faPeopleGroup,
    faPhone,
    faPlus,
    faRightFromBracket,
    faStar,
    faUser,
    faBold,
    faCode,
    faItalic,
    faUnderline
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faGear,
    faHouse,
    faUser,
    faPeopleGroup,
    faCalendarWeek,
    faRightFromBracket,
    faComments,
    faFaceSmileBeam,
    faNewspaper,
    faGraduationCap,
    faFolderOpen,
    faCheck,
    faPlus,
    faChevronLeft,
    faEye,
    faPhone,
    faBriefcase,
    faStar,
    faCakeCandles,
    faBold,
    faCode,
    faItalic,
    faUnderline
);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('v-select', VueSelect)
    .use(router)
    .mount('#app')
