<script>
import axios from 'axios';
import SingleProject from '../../pages/projects/SingleProject.vue';

export default {
  components: { SingleProject },
  props:{
    project:'project'
  },
    name: "projectList",
    data(){
       return {
        baseUrl:"http://127.0.0.1:8000",
        link:null,
        projectList:[],
        currentPage:1,
        nextPage:2,
        prevPage:null,
        totalPage:null,
    }
    },
    methods:{
      fetchProjects(link){

        axios.get(link)
        .then((resp)=>{
          this.totalPage= resp.data.last_page
            this.projectList=resp.data.data;
            this.currentPage=resp.data.current_page
            this.nextPage= resp.data.next_page_url
            this.prevPage=resp.data.prev_page_url
        })
      },
      fetchScopedPage(index){
        this.link = this.link + "?page=" + index;
        this.fetchProjects(this.link);
        this.link = `${this.baseUrl}/api/projects`
      },
      prev(){
        this.fetchProjects(this.prevPage);
        
      },
      next(){
        this.fetchProjects(this.nextPage);
      }
    },
    created(){
      this.link = `${this.baseUrl}/api/projects`;
    },
    mounted(){
        this.fetchProjects(this.link);
    }
}
</script>


<template>
    <div class="container">
        <nav aria-label="Page navigation example">
          <ul class="pagination mt-5 mb-0 d-flex justify-content-center">
            <li class="page-item">
              <button :disabled="!prevPage" class="page-link" @click="prev" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li class="page-item" v-for="index in totalPage" @click="fetchScopedPage(index)" ><button :class="(currentPage === index) ? 'bg-primary text-white' : ''"  class="page-link" >  {{ index }}</button></li>
          
            <li class="page-item">
              <button :disabled="!nextPage" class="page-link" @click="next" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
        <div class="row row-cols-4 justify-content-center p-5">
          
          <SingleProject v-if="projectList.length" :singleProject="project" v-for="project in projectList"></SingleProject>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination mt-0 mb-5 d-flex justify-content-center">
            <li class="page-item">
              <button :disabled="!prevPage" class="page-link" @click="prev" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li class="page-item" v-for="index in totalPage" @click="fetchScopedPage(index)" ><button :class="(currentPage === index) ? 'bg-primary text-white' : ''"  class="page-link" >  {{ index }}</button></li>
          
            <li class="page-item">
              <button :disabled="!nextPage" class="page-link" @click="next" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
</template>

