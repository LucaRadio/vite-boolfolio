<script>
import axios from 'axios';

import SingleProject from './projects/SingleProject.vue';
export default {
    name: "Home",
    props: {
        project: "project"
    },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            projectsHome: []
        };
    },
    methods: {
        homePageProject() {
            axios.get(`${this.baseUrl}/api/projects`, {
                params: {
                    "last6": true
                }
            })
                .then(resp => {
                this.projectsHome = resp.data;

            });
        }
    },
    mounted() {
        this.homePageProject();
    },
    components: { SingleProject }
}
</script>


<template>
    <div class="container my-3">
        <div class="text-center button-container">

            <router-link :to="{name:'projectList'}" class="d-inline-block btn btn-success p-2">See all projects</router-link>
        </div>
        <div class="fw-bold fs-5 my-4">
            Welcome to * portfolio. Here're the lastest 6 project created by the autor of this site . Click on <span class="text-warning">"See Details"</span> for visualize full information of that project. <span class="text-danger">"Link to repository"</span> , redirect you to github repository. If you want to see all projects click on <span class="text-success">"See all projects"</span> or "Projects" on navbar :) 
        </div>
        <div class="row row-cols-3 g-3 justify-content-center">
            <SingleProject v-for="project in projectsHome"  :singleProject="project"></SingleProject>
        </div>
    </div>
</template>