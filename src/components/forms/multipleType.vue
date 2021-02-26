<template>
  <div>
    <b-card class="card" header-tag="header">
      <template #header>
        <span style="float:right"></span>
        font awesome delete icon
      </template>
      <b-card-text>
        <b-form inline>
          <b-form-input
            class="input"
            v-model="text"
            autofocus
            placeholder="Topic"
          ></b-form-input>
          <b-form-select
            v-model="selected"
            :options="options"
            class="input"
          ></b-form-select>
          <br />
          <b-form-input
            class="input"
            v-model="text"
            placeholder="Question"
            style="width:100%;margin-top:1vh"
          >
            ></b-form-input
          >
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
          <b-dropdown split text="Add" class="m-2 p-0 " variant="primary">
            <b-dropdown-item>
              <b-form-checkbox id="checkbox-1" checked="true" name="checkbox-1">
                Add to Databank
              </b-form-checkbox>
            </b-dropdown-item>
            <b-dropdown-item>
              <b-form-checkbox id="checkbox-2" checked="true" name="checkbox-2">
                Add Publicly
              </b-form-checkbox></b-dropdown-item
            >
          </b-dropdown>
        </b-form>
      </b-card-text>
    </b-card>
    <!-- <b-card class="card" sub-title="Short Questions">
      <span style="color:grey" class="ml-3">Question</span>
      <br />
      <span class="ml-5">
        This is where we can show the question that we have typed. does this
        look elegant enough?Good Question We can work on this a little more.
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
        This is where we can show the question that we have typed. does this
        look elegant enough?Good Question We can work on this a little more.
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
    </b-card> -->
  </div>
</template>
<script>
// import Media from "@dongido/vue-viaudio";
export default {
  name: "multipleTypeQuestions",
  components: {
    // Media,
  },
  data() {
    return {
      selected: "null",
      source: "https://www.youtube.com",
      options: [
        { value: null, text: "Difficulty", disabled: true },
        { value: "1", text: "Difficulty Level 1" },
        { value: "2", text: "Difficulty Level 2" },
        { value: "3", text: "Difficulty Level 3" },
        { value: "4", text: "Difficulty Level 4" },
        { value: "5", text: "Difficulty Level 5" },
      ],
    };
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
.input {
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0px;
  width: fit-content;
  margin-right: 2vh;
}
.input:focus {
  border: none;
  outline: none;
}
.switch {
  margin-top: 2vh;
  margin-right: 2vh;
}
</style>
