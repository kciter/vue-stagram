<template>
  <div>
    <template v-if="!isLoading">
      <feed v-for="feed in feeds" :key="feed.id"
        :image-url="feed.images.standard_resolution.url"
        :full-name="feed.caption.from.full_name"
        :username="feed.caption.from.username"
        :contents="feed.caption.text">
      </feed>
    </template>
    <template v-else>
      <md-progress class="md-accent" md-indeterminate></md-progress>
    </template>
  </div>
</template>

<script>
  import jsonp from 'jsonp'
  import Feed from './Feed'

  export default {
    name: 'MyFeed',
    data () {
      return {
        isLoading: true,
        feeds: []
      }
    },
    mounted () {
      const token = localStorage.getItem('token')
      this.isLoading = true
      jsonp(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`, null, (_, response) => {
          this.isLoading = false
          this.feeds = response.data
      })
    },
    components: {
      Feed
    }
  }
</script>










