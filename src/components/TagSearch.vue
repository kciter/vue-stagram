<template>
  <div>
    <md-input-container>
      <label>태그 검색</label>
      <md-input @keydown.native="tagName = $event.target.value"
        @keydown.native.enter="search"></md-input>
    </md-input-container>

    <feed v-for="feed in feeds" :key="feed.id"
      :image-url="feed.images.standard_resolution.url"
      :full-name="feed.caption.from.full_name"
      :username="feed.caption.from.username"
      :contents="feed.caption.text">
    </feed>
  </div>
</template>

<script>
  import jsonp from 'jsonp'
  import Feed from './Feed'
  export default {
    name: 'TagSearch',
    data () {
      return {
        tagName: '',
        feeds: []
      }
    },
    methods: {
      search () {
        if (this.tagName === '') {
          return
        }

        const token = localStorage.getItem('token')
        jsonp(`https://api.instagram.com/v1/tags/${this.tagName}/media/recent?access_token=${token}`, null, (_, response) => {
          this.feeds = response.data
        })
      }
    },
    components: {
      Feed
    }
  }
</script>











