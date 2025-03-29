<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <!-- Header -->
    <NavBar></NavBar>
    <!-- Main content -->
    <router-view></router-view>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>
