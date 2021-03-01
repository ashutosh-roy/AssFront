<template>
  <div>
    <b-card class="card" header-tag="header">
      <template #header>
        <div>
          Image
          <b-row align-h="end">
            <b-button
              variant="outline"
              @click="$emit('delete-form')"
              style="border:none"
              ><i class="fas fa-trash"></i
            ></b-button>
          </b-row>
        </div>
      </template>
      <b-card-text>
        <b-form inline>
          <div style="width:100%">
            <div>
              <div class="file-upload-form">
                Upload an image file:
                <input type="file" @change="previewImage" accept="image/*" />
              </div>
              <div class="image-preview" v-if="imagedata.fileUpload.length > 0">
                <img class="preview" :src="imagedata.fileUpload" />
              </div>
            </div>
            <b-form-input
              class="input"
              v-model="imagedata.topic"
              autofocus
              placeholder="Topic"
            ></b-form-input>
            <b-form-select
              v-model="imagedata.difficultyLevel"
              :options="options"
              class="input"
            ></b-form-select>
            <br />
            <b-form-input
              class="input"
              v-model="imagedata.question"
              placeholder="Question"
              style="width:100%;margin-top:1vh"
            >
              ></b-form-input
            >

            <b-row align-h="end">
              <b-form-checkbox
                v-model="imagedata.autoCorrection"
                class="switch"
                name="check-button"
                switch
              >
                Auto Correction
              </b-form-checkbox>

              <b-form-checkbox
                v-model="imagedata.required"
                class="switch"
                name="check-button"
                switch
              >
                Required
              </b-form-checkbox>
              <b-dropdown
                split
                text="Add"
                class="m-2 p-0 "
                variant="primary"
                @click="addquestion()"
              >
                <b-dropdown-item
                  @click="imagedata.addToDatabank = !imagedata.addToDatabank"
                >
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="imagedata.addToDatabank"
                    name="checkbox-1"
                  >
                    Add to Databank
                  </b-form-checkbox>
                </b-dropdown-item>
                <b-dropdown-item
                  @click="imagedata.addToPublic = !imagedata.addToPublic"
                >
                  <b-form-checkbox
                    id="checkbox-2"
                    v-model="imagedata.addToPublic"
                    name="checkbox-2"
                  >
                    Add Publicly
                  </b-form-checkbox></b-dropdown-item
                >
              </b-dropdown>
            </b-row>
          </div>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "ImageQuestion",
  data() {
    return {
      options: [
        { value: null, text: "Difficulty", disabled: true },
        { value: "1", text: "Difficulty Level 1" },
        { value: "2", text: "Difficulty Level 2" },
        { value: "3", text: "Difficulty Level 3" },
        { value: "4", text: "Difficulty Level 4" },
        { value: "5", text: "Difficulty Level 5" }
      ],
      imagedata: {
        topic: "",
        difficultyLevel: null,
        question: "",
        questionType: "image",
        answerKey: "",
        autoCorrection: 0,
        required: 0,
        addToPublic: false,
        addToDatabank: false,
        sizelimit: 0,
        fileUpload: ""
      }
    };
  },
  methods: {
    addquestion() {
      this.$emit("question-added", this.imagedata);
    },
    previewImage: function(event) {
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imagedata.fileUpload = e.target.result;
          // console.log(this.imagedata.fileUpload)
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
        console.log(input.files[0]);
      }
    }
  }
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
.form-control:focus,
.custom-select:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.switch {
  margin-top: 2vh;
  margin-right: 2vh;
}
.file-upload-form,
.image-preview {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 20px;
}
img.preview {
  width: 200px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
</style>
