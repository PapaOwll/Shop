<template>
  <v-card id="card" class="ma-5 pa-2">
    <v-img height="400px" width="400px" :src="item.img" class=" d-block mx-auto">
    </v-img>
    <v-container class="d-flex justify-space-between">
      <v-card-item>
        <strong>Model: </strong>{{ item.name }}
      </v-card-item>
      <v-card-item>
        <strong>QTY: </strong>{{ item.qty }}
      </v-card-item>
    </v-container>
    <v-container class="d-flex justify-space-between">
      <v-card-item>
        <strong>Price :</strong>{{ item.price }}
      </v-card-item>

      <router-link  :to="{name : 'itemInformation' , params:{id : item.id , title : item.name  }}" >
        <v-btn  icon color="info">
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </router-link>
    </v-container>
    <v-container class="d-flex">
      <itemButtons :item="item"/>
    </v-container>
  </v-card>
</template>

<script >
import itemButtons from "@/components/Buttons";


export default {
  name: "itemCards",
  components: {
    itemButtons,
  },
  props:
      {
        item: {},
      },
  data() {
    return {
      isActive: true
    }
  },
  methods:{

  }
}

</script>

<style scoped>
#card {
  transition: .3s ease-in;
  opacity: 90%;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  border-radius: 5px;

}

#card:hover {
  transition: .3s ease-out;
  opacity: 100%;
  box-shadow: rgb(38, 57, 77) 0 20px 30px -10px;
  border-radius: 10px;
}
</style>