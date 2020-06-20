<template>
  <v-card color="transparent" max-height="600">
    <v-card-title>
      <v-dialog v-model="modalImage" transition="dialog-bottom-transition" max-width="1000">
        <template v-slot:activator="{ on }">
          <v-carousel
            cycle
            hide-delimiters
            show-arrows-on-hover
            height="200"
          >
            <v-carousel-item
              v-for="(img, i) in app.images"
              :key="i"
              :src="image(img)"
              style="cursor: pointer;"
              @click="openImage(img)"
              max-height="200"
            ></v-carousel-item>
          </v-carousel>
        </template>
        <v-card>
          <v-img :src="imgModal" contain></v-img>
        </v-card>
      </v-dialog>
      <v-layout my-2>
        <v-flex>
          <v-row>
            <v-col cols="10">
              <template v-for="(platform, i) in app.platforms">
                <v-btn :href="platform.link" target="_blank" icon :key="i">
                  <v-icon>{{platform.icon}}</v-icon>
                </v-btn>
              </template>
              {{app.name}}
            </v-col>
            <v-col class="text-right">
              <v-btn icon :href="app.link" target="_blank">
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <div>{{app.description}}</div>
      <div class="title mt-2">Technologies</div>
      <v-layout>
        <template v-for="(tech, i) in app.technologies">
          <v-flex xs3 :key="i">
            <div class="text-center">
              <v-btn icon :href="tech.link" target="_blank">
                <v-icon>{{tech.icon}}</v-icon>
              </v-btn>
              <div class="caption">{{tech.name}}</div>
            </div>
          </v-flex>
        </template>
      </v-layout>
      <div v-if="app.code.link">
        <div class="title mt-2">Code</div>
        <v-btn icon :href="app.code.link" target="_blank">
          <v-icon>{{app.code.icon}}</v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    app: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      modalImage: false,
      imgModal: ""
    }
  },
  methods: {
    image(name) {
      return require("../assets/" + name);
    },
    openImage(image) {
      this.modalImage = true;
      this.imgModal = this.image(image);
    },
  }
};
</script>

<style>
</style>