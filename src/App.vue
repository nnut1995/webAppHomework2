<template>
  <div id="app">
    <header v-if="$store.getters.loggedIn">
      <iccs340-left-sidenav></iccs340-left-sidenav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Iccs340LeftSidenav: require('./LeftSidenav')
  }
}
</script>

<style>
</style>
