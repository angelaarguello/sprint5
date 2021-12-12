<template>
  <link href="/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <div>
    <div class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
      </ul>
        </nav>
        <h3 class="text-muted">Project name</h3>
      </div>
  </div>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <logins msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/Pacientes.vue'
import logins from './components/login.vue'
export default {
  name: 'App',
  components: {
    logins,
    HelloWorld
  }
}
</script>

<style>
#app {
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/headers.css';
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
