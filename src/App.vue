<template>
  <div id="wrapper" class="wrapper clearfix">

     <Navbar />
        <router-view ></router-view>
      <Footer />  
  </div>
</template>

  
<script>
// import HomePage from './pages/HomePage.vue'
//import Home from './pages/Home.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
      Navbar ,
      Footer
  }
}
</script>


<style>

</style>
