<template>
  <b-card class="card" sub-title="Short Questions">
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
      This is where we can show the question that we have typed. does this look
      elegant enough?Good Question We can work on this a little more.
    </span>

    <b-card-text>
      <b-form inline>
        <b-form-checkbox
          v-model="checked"
          class="switch"
          name="check-button"
          switch
        >
          Auto Correction
        </b-form-checkbox>

        <b-form-checkbox
          v-model="checked"
          class="switch"
          name="check-button"
          switch
        >
          Required
        </b-form-checkbox>
      </b-form>
    </b-card-text>
  </b-card>
</template>
<script>
import Media from "@dongido/vue-viaudio";
export default {
  name: "ImageCard",
  components: {
    Media,
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
