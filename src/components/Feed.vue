<template>
  <md-card>
    <md-card-media>
      <img :src="imageUrl">
    </md-card-media>

    <md-card-header>
      <div class="md-title">{{ fullName }}</div>
      <div class="md-subhead">@{{ username }}</div>
    </md-card-header>

    <md-card-content>
      {{ contents }}
    </md-card-content>
  </md-card>
</template>

<script>
  export default {
    name: 'Feed',
    props: ['imageUrl', 'fullName', 'username', 'contents']
  }
</script>