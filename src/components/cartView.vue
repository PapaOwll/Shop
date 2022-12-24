<template>
  <shop-header/>

  <v-main id="main-content" class="mt-1">
    <v-card
        elevation="10"
        shaped
        outlined
        class="pa-5 mb-5 mx-5">
      <v-card-title>Shopping Cart</v-card-title>
      <v-divider class="pa-5 mb-5"></v-divider>
      <v-container class="d-flex flex-wrap justify-center">

        <div v-for="item  in carts" :key="item.id">

          <Cart :item="item">
          </Cart>

        </div>
      </v-container>
    </v-card>

  </v-main>
</template>

<script>
import Cart from '@/components/Cart'
import shopHeader from '@/components/header'

export default {
  name: "cartView",
  components: {
    Cart,
    shopHeader
  },
  data() {
    return {
      carts: this.$store.state.cart,
    }
  }
}
</script>

<style scoped>

</style>