<script>
import axios from 'axios';
export default {
    name: "projectList",
    data(){
       return {
        baseUrl:"http://127.0.0.1:8000",
        projectList:[]
    }
    },
    methods:{
      fetchProjects(){
        axios.get(`${this.baseUrl}/api/projects`)
        .then((resp)=>{
            this.projectList=resp.data
        })
      }
    },
    mounted(){
        this.fetchProjects();
    }
}
</script>


<template>
    <div class="container">
        <div class="row row-cols-5 p-3">
            <div class="col p-3"  v-for="item in projectList">
                <div class="card h-100 text-white bg-warning mb-3">
                    <div class="card-header">
                        <img src="/noImg.jpg" class="img-fluid">    
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{{item.name}}</h5>
                      <p class="card-text ">{{item.description}}</p>
                      <router-link :to="{name:'singleProject', params: {id: item.id}}" class="btn btn-primary">See Details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>