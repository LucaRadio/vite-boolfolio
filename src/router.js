import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/home.vue';
import ProjectCard from './pages/projects/ProjectCard.vue'
import SingleProject from './pages/projects/SingleProject.vue'

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
                name: "singleProject",
                component: SingleProject
            }
        ]

    }
);
export { router };

