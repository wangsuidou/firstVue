<template>
  <div id="app">
    <my-head></my-head>
    <my-nav></my-nav>
      <transition>
    <router-view></router-view>
      </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHead from './components/header'
import myNav from './components/nav'
import myFooter from './components/footer'

export default {
  name: 'app',
  components: {
    myHead,
    myNav,
    myFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
