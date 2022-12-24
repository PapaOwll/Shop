<template>
  <v-app-bar>
    <router-link :to="{name : 'Home'}" class="mx-3">
      <v-btn icon elevation="5" class="float-right">
        <v-icon color="green" icon="mdi-home">
        </v-icon>
      </v-btn>
    </router-link>
    <v-divider vertical></v-divider>
    <router-link to="/cart" class="text-decoration-none">
    <v-btn
        class="mx-3"
        elevation="4"
        icon
        color="warning"
        >
      <v-badge
          v-if="this.$store.state.counter"
          :content="this.$store.state.counter"
          color="orange"
          text-color="white"
          offset-x="-28"
          offset-y="15"
      >
      </v-badge>
      <v-icon icon="mdi-cart"></v-icon>
    </v-btn>
    </router-link>
  </v-app-bar>

</template>

<script>
export default {
  name: "shopHeader",

}
</script>

<style scoped>

</style>