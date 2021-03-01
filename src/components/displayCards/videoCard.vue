<template>
  <div>
    <b-card
      class="card"
      sub-title="Video Questions"
      v-for="entry in data"
      :key="entry.question"
    >
      <span style="color:grey" class="ml-3">Question</span>
      <br />
      <Media
        :kind="'video'"
        :isMuted="false"
        :src="['https://www.w3schools.com/html/mov_bbb.mp4']"
        :poster="
          'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        "
        :autoplay="true"
        :controls="true"
        :loop="true"
        :ref="'video_player'"
        width="70%"
        class="ml-5"
      ></Media>
      <br />
      <span class="ml-5">
        {{ entry.question }}
      </span>

      <b-card-text>
        <div>
          <b-row align-h="end">
            <b-form-checkbox
              v-model="entry.autoCorrection"
              class="switch"
              name="check-button"
              switch
              disabled
            >
              Auto Correction
            </b-form-checkbox>

            <b-form-checkbox
              v-model="entry.required"
              class="switch"
              name="check-button"
              switch
              disabled
            >
              Required
            </b-form-checkbox>
          </b-row>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
import Media from "@dongido/vue-viaudio";
export default {
  name: "VideoCard",
  components: {
    Media,
  },
  props: {
    data: Array,
  },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
  text-align: left;
}
</style>
