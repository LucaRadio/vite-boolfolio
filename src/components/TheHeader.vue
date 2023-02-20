<script>

export default {

}
</script>

<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="">
                <div class="logo_laravel display-4">
                    LOGO
                </div>
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'projectList' }" class="nav-link">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'contactMe' }" class="nav-link">Contact Me </router-link>
                    </li>
                </ul>


            </div>
        </div>
    </nav>
</template>