<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <login hell="nanana"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import login from '@/components/login.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    login,
  },
  
}
</script>
