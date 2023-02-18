<script>
export default {
    name:"SingleProject",
    props:{
        singleProject:{
            type:Object
        }
    },
    data(){
        return{
            baseUrl:'http://127.0.0.1:8000'
        }
    },
    mounted(){
        // axios.get(`${this.baseUrl}/api/projects/${this.$route.params.id}`)
        //     .then(resp=>{
        //         this.singleProject=resp.data
        //         this.singleProject.technologies.forEach((item) => {
        //             if(!this.technologiesToPrint.includes(item.name)){
        //                 this.technologiesToPrint.push(item.name);
        //             }
        //         });
        //     })
    }
}
</script>
<template>
    
        <div class="col p-2">
            <div class="card h-100 text-white bg-dark mb-3">
                <div class="card-header text-info">Project n.{{ singleProject?.id}}</div>
                <img v-if="singleProject.img_cover" class="card-img-top" :src=" `${baseUrl}/storage/${singleProject.img_cover}`" alt="Card image cap">
                <div class="card-body">

                  <h5 class="card-title text-primary">{{singleProject.name}}</h5>
                  <p class="card-text">{{ singleProject.description }}</p>
                  <div class="mb-3">

                      <a class="btn btn-danger" target="_blank" :href=" singleProject.github_link " v-if=" singleProject.github_link"><span class="text-white fw-bold">Link to repository</span></a>
                  </div>
                  <router-link :to="{name: 'singleProjectDetails' , params:{id:singleProject.id}}" class="btn btn-warning">See details</router-link>
                  
                </div>
            
        </div>
    </div>
</template>