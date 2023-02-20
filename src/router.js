import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/home.vue';
import ContactMe from './pages/ContactMe.vue';
import ProjectCard from './pages/projects/ProjectCard.vue'
import SingleProjectDetails from './pages/projects/SingleProjectDetails.vue'

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: "/",
                name: 'home',
                component: Home
            },
            {
                path: "/projects",
                name: "projectList",
                component: ProjectCard
            },
            {
                path: "/projects/:id",
                name: "singleProjectDetails",
                component: SingleProjectDetails
            },
            {
                path: "/contact/",
                name: "contactMe",
                component: ContactMe
            }
        ]

    }
);
export { router };

