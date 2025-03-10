import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home/Home.vue";
import About from "../Pages/About/About.vue";
import Projects from "../Pages/Projects/Project.vue";
//import Services from '../Pages/Solutions&Services/SolutionPage.vue';
import Contact from "../Pages/Contact/Contact.vue";
// import GetInTouch from "../views/GetInTouch.vue";
import YomiProfile from "../Pages/profileSection/YaprofilePage.vue";

import TayoProfile from "../Pages/profileSection/TayoProfilePage.vue";

import YemiProfile from "../Pages/profileSection/YemiProfilePage.vue";

import MICHAEL_J_SCHMIDT from "../Pages/profileSection/MichaelProfilePage.vue";
// Define Routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Project",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },


  {
    path: "/profile/1", // This matches the ID in your teamMembers array
    name: "YomiProfile",
    component: YomiProfile,
  },

  
  {
    path: "/profile/2", // This matches the ID in your teamMembers array
    name: "Tayo Oyolola",
    component: TayoProfile,
  },

  
  {
    path: "/profile/3", // This matches the ID in your teamMembers array
    name: "Yemi Keri",
    component: YemiProfile,
  },

  {
    path: "/profile/4", // This matches the ID in your teamMembers array
    name: "MICHAEL J SCHMIDT",
    component: MICHAEL_J_SCHMIDT,
  },
  // {
  //   path: "/Services",
  //   name: "Services",
  //   component: Services,
  // },
];

// Create Router Instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
