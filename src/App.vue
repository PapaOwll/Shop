<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>

</template>

<script>
export default {
  name: 'App',

  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || this.$route.params.title;
      }
    }
  }
}
</script>
