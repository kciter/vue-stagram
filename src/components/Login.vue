<template>
  <div>
    <md-button class="md-raised md-primary"
      href="https://www.instagram.com/oauth/authorize/?client_id=97397fe5b4194a69be35cdf1bdb60be3&redirect_uri=http://localhost:8080&response_type=token&scope=public_content">
      인스타그램 로그인
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>