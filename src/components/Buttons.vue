<template>
  <v-container class="d-flex justify-end">
    <v-btn
        v-if="!this.isActive"
        color="success"
        icon
        @click="
        [$store.commit('increase', item), this.isActive= !this.isActive]"
        elevation="5">
      <v-icon>
        mdi-cart
      </v-icon>
    </v-btn>

    <v-btn
        v-if="this.isActive"
        color="error"
        icon
        @click="
        [$store.commit('decrease', item),this.isActive= !this.isActive]"
        elevation="5">
      <v-icon>
        mdi-delete
      </v-icon>
    </v-btn>

  </v-container>
</template>

<script>
export default {
  name: "itemButtons",
  props: {
    item: Object
  },
  data() {

    return {
      isActive: false
    }
  }
}
</script>

<style scoped>

</style>