<template lang="html">
  <div class="left-sidenav">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Homework 2</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
        <md-list>
          <md-list-item>
            <router-link :to="{ name: 'Posts.index' }"><md-icon>move_to_inbox</md-icon> <span>Post</span></router-link>
          </md-list-item>
          <md-list-item>
            <router-link :to="{ name: 'Posts.new' }"><md-icon>move_to_inbox</md-icon> <span>Create Post</span></router-link>
          </md-list-item>
          <md-list-item>
            <a @click="logOut"> <md-icon>move_to_inbox</md-icon> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log out</span></a>
          </md-list-item>
        </md-list>
      </md-toolbar>
    </md-sidenav>
  </div>
</template>

<script>
import usersApi from '@/api/users.js'

export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    logOut () {
      console.log('==== Logout ====')
      usersApi.logout(function () {
      })
    }
  }
}
</script>

<style lang="css">
</style>
