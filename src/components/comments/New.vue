<template>
  <div class="new-post">
    <md-list>
      <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Add Comment</label>
            <md-input v-model="comment.content" placeholder=""></md-input>
          </md-input-container>
        </div>
      </md-list-item>
      <md-list-item>
        <span style="flex: 1"></span>
        <md-button class="md-raised md-primary" @click.native="createComment">Send Request</md-button>
        <span style="flex: 1"></span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import CommentsApi from '../../api/comments.js'
import router from '../../router'

export default {
  name: 'new-comment',
  data () {
    return {
      comment: {
        content: ''
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    createComment () {
      var postId = this.post.id
      var content = this.comment.content
      this.comment.content = ''
      CommentsApi.createComment(postId, content,
        function (_comment) {
          console.log(_comment)
          router.push({ name: 'Posts.show', params: { post_id: postId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<style scoped>
.md-list-item {
  padding-left: 40px;
}
</style>
