<template>
  <shopHeader/>
  <v-main id="main-content" class="mt-4">
    <v-container class="d-flex flex-wrap justify-center">
      <div v-for="item  in this.$store.state.items" :key="item.id">
        <itemCards :item="item">
        </itemCards>
      </div>

    </v-container>
  </v-main>
</template>

<script>
import itemCards from "@/components/itemCards.vue";
import shopHeader from "@/components/header.vue"

export default {
  name: 'shopItem',
  components: {
    itemCards,
    shopHeader,
  }
}
</script>
