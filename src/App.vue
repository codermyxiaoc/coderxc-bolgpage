<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar-mian></tab-bar-mian>
  </div>
</template>

<script>
//import { userinfo } from 'network/user' 
/* import { inpreq } from 'network/article' */
import TabBarMian from 'components/content/tabbarmian/tabbarmian.vue';
export default {
  name: 'App',
  components: {
    TabBarMian,
  },
  mounted() {
   /*  const storage = window.localStorage
    if (storage.getItem('user')) {
        userinfo(storage.getItem('user')).then(res => {
        this.$store.dispatch('getuser', res.data.message)
      })
    }  */
    this.$store.dispatch('getarticle')
    this.$store.dispatch('userreq')

    /* inpreq().then(res => {
      this.$store.dispatch('getarticle',res.data.message)
    }) */
  }
}
</script>

<style>
@import url('./assets/css/normalize.css');
.nav-bar {
  background-color: #eee;
}
</style>
