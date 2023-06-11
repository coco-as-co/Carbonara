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
    faBold,
    faBriefcase,
    faBullhorn,
    faCakeCandles,
    faCalendarWeek,
    faCheck,
    faChevronLeft,
    faCode,
    faComments,
    faEye,
    faFaceSmileBeam,
    faFolderOpen,
    faGear,
    faGraduationCap,
    faHouse,
    faItalic,
    faNewspaper,
    faPeopleGroup,
    faPhone,
    faPlus,
    faRightFromBracket,
    faStar,
    faUnderline,
    faUser
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faBold,
    faBriefcase,
    faBullhorn,
    faCakeCandles,
    faCalendarWeek,
    faCheck,
    faChevronLeft,
    faCode,
    faComments,
    faEye,
    faFaceSmileBeam,
    faFolderOpen,
    faGear,
    faGraduationCap,
    faHouse,
    faItalic,
    faNewspaper,
    faPeopleGroup,
    faPhone,
    faPlus,
    faRightFromBracket,
    faStar,
    faUnderline,
    faUser
);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('v-select', VueSelect)
    .use(router)
    .mount('#app')
