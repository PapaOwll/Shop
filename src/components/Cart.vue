<template>
<v-main class="d-flex">
  <v-card
      elevation="10"
      shaped
      outlined
      class="pa-5 mb-5 mx-5 ">

    <v-container class="d-flex ">
      <v-img
          :src="item.img"
          style="width:70px ; height: 70px">
      </v-img>
      <div class="d-flex flex-column pa-3 ">
        <v-card-subtitle>Product</v-card-subtitle>
        <v-card-text>{{ item.name }}</v-card-text>
      </div>
      <div class="d-flex flex-column pa-3">
        <v-card-subtitle>Price</v-card-subtitle>
        <v-card-text>{{ item.price }}</v-card-text>
      </div>
      <div class="d-flex flex-column pa-3">
        <v-card-subtitle>Quantity</v-card-subtitle>
        <v-card-text>{{ carts.length }}</v-card-text>
      </div>
      <div class="d-flex flex-column pa-3">
        <v-btn
            color="error"
            icon
            @click="
        [$store.commit('decrease', item),this.isActive= !this.isActive]"
            elevation="5">
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-card>
</v-main>
</template>

<script>

export default {
  name: "shopCart",

  data() {
    return {
      id: this.$route.params.id,
      carts: this.$store.state.cart,
    }
  },
  props: {
    item: {}
  },
}
</script>

<style scoped>

</style>