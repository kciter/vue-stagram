<template>
  <div>
    <template v-if="!isLoading">
      <md-card>
        <md-card-media class="profile-image">
          <md-avatar class="md-large">
            <img :src="profile.profile_picture">
          </md-avatar>
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{ profile.full_name }}</div>
          <div class="md-subhead">{{ profile.username }}</div>
        </md-card-header>

        <md-card-content>
          <div>Website: {{ profile.website }}</div>
          <div>Followed by: {{ profile.counts.followed_by }}</div>
          <div>Follows: {{ profile.counts.follows }}</div>
        </md-card-content>
      </md-card>
    </template>
    <template v-else>
      <md-progress class="md-accent" md-indeterminate></md-progress>
    </template>
  </div>
</template>

<script>
  import jsonp from 'jsonp'
  export default {
    name: 'MyInfo',
    data () {
      return {
        isLoading: true,
        profile: null
      }
    },
    mounted () {
      const token = localStorage.getItem('token')
      jsonp(`https://api.instagram.com/v1/users/self?access_token=${token}`,
          null,
          (_, response) => {
            this.isLoading = false
            this.profile = response.data
            console.log(this.profile)
          })
    }
  }
</script>

<style scoped>
  .md-card-media {
    padding-top: 16px;
    text-align: center;
  }
</style>








