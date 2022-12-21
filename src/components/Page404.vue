<template>
  <v-banner class="justify-center align-center">
    <h1 class="">404 - Page Not Found</h1>
    <p>This page no longer exists or was moved to another location.</p>
    <router-link
        class="text-decoration-none justify-center"
        to="/">
      <v-btn color="success" dark large>
        <v-icon icon="mdi-home" color="white">
        </v-icon>
        Home
      </v-btn>
    </router-link>
  </v-banner>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>

</style>