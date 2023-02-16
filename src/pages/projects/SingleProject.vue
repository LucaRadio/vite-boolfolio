<script>
import axios from 'axios';
export default {
    name:"singleProject",
    data(){
        return{
            baseUrl:"http://127.0.0.1:8000",
            singleProject:{},
            technologiesToPrint:[]
        }
    },
    mounted(){
        axios.get(`${this.baseUrl}/api/projects/${this.$route.params.id}`)
            .then(resp=>{
                this.singleProject=resp.data
                this.singleProject.technologies.forEach((item) => {
                    if(!this.technologiesToPrint.includes(item.name)){
                        this.technologiesToPrint.push(item.name);
                    }
                });
            })

    }
}
</script>
<template>
    <div class="row justify-content-center p-5">
        <div class="col-6">
            <div class="card text-white bg-dark mb-3">
                <div class="card-header">Project n.{{ singleProject.id}}</div>
                <img class="card-img-top" :src=" `${baseUrl}/storage/${singleProject.img_cover}`" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{singleProject.name}}</h5>
                  <p class="card-text">{{ singleProject.description }}</p>
                  <p class="card-text" v-if=" singleProject.github_link">{{ singleProject.github_link }}</p>
                  <p class="card-text text-warning" v-if=" singleProject.type">
                    Type of Project : {{ singleProject.type.name }}</p>
                  <div class="card-text">
                    Used technologies:
                    <div class="card-text" v-if="singleProject.length">There's no Information</div>
                    <div class="card-text" v-else>
                        <ul>
                    <li class="text-danger" v-for="item in technologiesToPrint">{{ item }}</li>
                  </ul>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>
    </div>
</template>