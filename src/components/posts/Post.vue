<template>
  <div class="post">
    <md-list-item>
      <md-avatar>
        <md-icon>announcement</md-icon>
      </md-avatar>

      <div class="md-list-text-container">
        <span>{{ post.name }}</span>
        <p>{{ post.content }}</p>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon class="md-primary">code</md-icon>
      </md-button>

      <md-divider class="md-inset"></md-divider>
    </md-list-item>
  </div>
</template>

<script>

export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
Modify @/components/posts/Index.vue so that it use Post component.
:post is property inside iccs340-post component
'post' is an object from v-for
// change
{{ post.id }} {{ post.name }}
// to
<iccs340-post :post='post'></iccs340-post>

// add to script
components: {
  Iccs340Post: require('./Post')
},
