<script>
import axios from 'axios';

export default {
    data() {
        return {
            basicUri: 'http://127.0.0.1:8000',
            formData: {
                name: '',
                email: '',
                message: ''
            },
            success: null,
            error: null
        }
    },
    methods: {
        onSubmit() {
            axios.post(this.basicUri + '/api/contactMe', this.formData)
                .then(resp => {
                    this.success = true
                    this.formData = {}
                })
                .catch(e => {

                    this.error = e.response.data;
                    this.success = false
                })
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row my-5 justify-content-center">
            <div class="col-md-8">
                <div class="card bg-light mb-3">
                    <div class="card-header">Contact Me</div>
                    <div class="card-body">
                        <div class="alert alert-danger" v-if="success === false">
                            {{ this.error.message }}
                        </div>
                        <div class="alert alert-success" v-if="success">
                            Message was sent. I'll answer ASAP.
                        </div>
                        <form @submit.prevent="onSubmit" v-if="success !== true">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="rounded-0 input-group-text" id="basic-addon1">Name</span>
                                </div>
                                <input type="text" class=" shadow-none form-control rounded-0" v-model="formData.name">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="rounded-0 input-group-text" id="basic-addon1">Email</span>
                                </div>
                                <input type="email" class=" shadow-none form-control rounded-0" v-model="formData.email">
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="h-100 rounded-0 input-group-text" id="basic-addon1">Message</span>
                                </div>
                                <textarea rows="4" type="email" class=" shadow-none form-control rounded-0"
                                    v-model="formData.message"></textarea>
                            </div>
                            <div class="input-group mb-3 justify-content-center">
                                <button class="btn btn-outline-secondary" type="reset">Cancel</button>
                                <button class="btn btn-warning" type="submit">Send</button>

                            </div>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>