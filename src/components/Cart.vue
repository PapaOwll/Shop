<template>
  <v-card
      elevation="10"
      shaped
      outlined
      class="pa-5 mb-5">
      <v-card-title>Shopping Cart</v-card-title>
      <v-divider class="pa-5 mb-5"></v-divider>
    <v-container class="d-flex">
      <v-img
          :src="this.$store.state.items[0].img"
          style="width:70px ; height: 70px">
      </v-img>
        <div class="d-flex flex-column pa-3">
          <v-card-subtitle>Product</v-card-subtitle>
            <v-card-text>{{ title }}</v-card-text>
        </div>
        <div class="d-flex flex-column pa-3">
          <v-card-subtitle>Price</v-card-subtitle>
          <v-card-text>{{ items[id-1].price }}</v-card-text>
        </div>
        <div class="d-flex flex-column pa-3">
          <v-card-subtitle>Quantity</v-card-subtitle>
          <v-card-text>{{ this.$store.state.crat}}</v-card-text>
        </div>
    </v-container>
  </v-card>

</template>

<script>
export default {
  name: "shopCart",
  data(){
    return{
      title : this.$route.params.title,
      id : this.$route.params.id,
      items  : this.$store.state.items,
    }
  }
}
</script>

<style scoped>

</style>