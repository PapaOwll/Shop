<template>
  <v-card  elevation="10" rounded outlined class="pa-5 d-flex flex-column justify-center align-center">
    <h1 class="pa-5">404 - Page Not Found</h1>
    <p class="pa-5">This page no longer exists or was moved to another location.</p>
    <router-link
        class="text-decoration-none justify-center"
        to="/">
      <v-btn color="success" dark large>
        <v-icon icon="mdi-home" color="white">
        </v-icon>
        Home
      </v-btn>
    </router-link>
  </v-card>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>

</style>