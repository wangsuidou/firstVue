<template>
  <div id="#app">
  <!-- 导航栏 -->
    <my-head></my-head>
  </div>
</template>
<script>
import myHead from './components/header'
export default {
  name: 'app',
  components: {
    myHead
  }
}
</script>