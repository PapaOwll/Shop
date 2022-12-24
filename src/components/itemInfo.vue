<template>
  <shop-header/>

  <v-main>
    <v-container>
      <v-card variant="outlined">
        <v-card-title>
          Details OF{{ title }}
        </v-card-title>
        <!----Slider---->
        <v-container class="d-flex ">
          <v-carousel show-arrows="hover" class=" pa-3">
            <v-carousel-item
                :src="storeItems[proId-1].img">
            </v-carousel-item>
            <v-carousel-item
                :src="storeItems[proId-1].img">
            </v-carousel-item>
            <v-carousel-item
                :src="storeItems[proId-1].img">
            </v-carousel-item>
            <v-carousel-item
                :src="storeItems[proId-1].img">
            </v-carousel-item>
          </v-carousel>


          <v-card variant="tonal" class="pa-5 mx-5 w-66  ">
            <!----Tabs---->
            <v-tabs centered stacked v-model="tab" bg-color="primary">
              <v-tab value="Properties">
                <v-icon class="mdi-feature-search" color="white">
                  Properties
                </v-icon>
                Properties
              </v-tab>
              <v-tab value="Descripstion">
                <v-icon class="mdi-paperclip" color="white">
                  Description
                </v-icon>
                Description
              </v-tab>
            </v-tabs>
            <!-----Properties---->
            <v-card-text>
              <v-window v-model="tab" class="w-auto overflow-y-auto">
                <v-window-item value="Properties">
                    <span class="d-block ">
                       <b> Model: </b>
                      {{ title }}
                      <br><br><br>
                       <span class="d-block" style="line-height: 3rem">
                        <b>NetWork: </b>5G <br>
                        <b>Battery: </b>3200mAph <br>
                        <b>Screen: </b>6.7" <br>
                        <b>Camera: </b>108 MegaPixel <br>
                         <strong> Price: </strong>{{ storeItems[proId - 1].price }}
                       </span>

                    </span>
                  <strong>Color: </strong>

                  <v-btn value="black" size="x-small" icon class="mx-2" color="black"></v-btn>
                  <v-btn value="red" size="x-small" icon class="mx-2" color="red"></v-btn>
                  <v-btn value="cyan" size="x-small" icon class="mx-2" color="cyan"></v-btn>
                  <v-btn value="pink" icon size="x-small" class="mx-2" color="pink"></v-btn>

                </v-window-item>
                <!-----Discriptions----->
                <v-window-item value="Descripstion">
                  <v-virtual-scroll
                      height="60"
                      item-height="30"
                  >
                     <span>
                        The Mi 10 Lite did not have an IP certification, which means that it was neither water- nor
                        dustproof. It only featured a P2i nano-coating. However, the Mi 11 Lite comes with an IP53 certification.
                        Thanks to the glass front and back, the Xiaomi smartphone feels very solid in the hand.
                          The Mi 10 Lite did not have an IP certification, which means that it was neither water- nor
                        dustproof. It only featured a P2i nano-coating. However, the Mi 11 Lite comes with an IP53 certification.
                        Thanks to the glass front and back, the Xiaomi smartphone feels very solid in the hand.
                          The Mi 10 Lite did not have an IP certification, which means that it was neither water- nor
                        dustproof. It only featured a P2i nano-coating. However, the Mi 11 Lite comes with an IP53 certification.
                        Thanks to the glass front and back, the Xiaomi smartphone feels very solid in the hand.
                          The Mi 10 Lite did not have an IP certification, which means that it was neither water- nor
                        dustproof. It only featured a P2i nano-coating. However, the Mi 11 Lite comes with an IP53 certification.
                        Thanks to the glass front and back, the Xiaomi smartphone feels very solid in the hand.
                     </span>
                  </v-virtual-scroll>
                  <v-chip-group>
                    <v-chip
                        color="pink"
                        class="ma-2"
                        label
                    >
                      <v-icon
                          color="pink"
                          text-color="white"
                          start icon="mdi-label"></v-icon>
                      SamSung
                    </v-chip>
                    <v-chip
                        color="pink"
                        class="ma-2"
                        label
                    >
                      <v-icon
                          color="pink"
                          text-color="white"
                          start icon="mdi-label"></v-icon>
                      S22
                    </v-chip>
                    <v-chip
                        color="pink"
                        class="ma-2"
                        label
                    >
                      <v-icon
                          color="pink"
                          text-color="white"
                          start icon="mdi-label"></v-icon>
                      Ultra
                    </v-chip>

                  </v-chip-group>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
          <!-----SidePicture----->
          <div>
            <v-img class="w-100" :src="storeItems[proId-1].img"></v-img>

            <item-buttons :item="storeItems[proId-1]"/>

          </div>
        </v-container>
      </v-card>
    </v-container>
  </v-main>


</template>


<script>
import shopHeader from "@/components/header.vue"
import ItemButtons from "@/components/Buttons";


export default {
  name: "itemInformation",
  components: {
    ItemButtons,
    shopHeader,

  },


  data() {
    console.log(this.item)
    return {
      tab: null,
      proId: this.$route.params.id,
      title: this.$route.params.title,
      storeItems: this.$store.state.items,
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.title = to.meta.title || this.$route.params.title;
      }
    }
  },

}
</script>

<style scoped>

</style>