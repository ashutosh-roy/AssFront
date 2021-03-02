<template>
  <div>
    <b-card class="card" header-tag="header">
      <template #header>
        <div>
          Long Answer
          <b-row align-h="end">
            <b-button
              variant="outline-secondary"
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
           <b-modal
                id="modal-3"
                centered
                hide-footer
                title="Upload a file"
                style="width:90vh"
              >
                <div class="container">
                  <div class="upload-container">
                      <div class="border-container">
                          <div class="icons fa-4x">
                              <i class="fas fa-file-image" data-fa-transform="shrink-3 down-2 left-6 rotate--45"></i>
                              <i class="fas fa-file-alt" data-fa-transform="shrink-2 up-4"></i>
                              <i class="fas fa-file-pdf" data-fa-transform="shrink-3 down-2 right-6 rotate-45"></i>
                          </div>
                          <b-row class="justify-content-md-center">
                              <input type="file" @change="previewFile" accept="image/*">
                          </b-row>
                      </div>
                  </div>
              </div>
             </b-modal>
            <div>
              <b-row align-h="center">
                <div class="image-preview" v-if="questions.fileUpload.length>0">
                    <img class="preview" :src="questions.fileUpload">
                </div>
              </b-row>
            </div>
             <b-row>
              <b-col cols="4" md="4">
               <b-form-input
                  class="input"
                  v-model="questions.topic"
                  autofocus
                  placeholder="Topic"
                ></b-form-input>
              </b-col>
              <b-col cols="4" md="3">
                <b-form-select
                  v-model="questions.difficultyLevel"
                  :options="options"
                  class="input"
                ></b-form-select>
              </b-col>
              <b-col cols="4" md="3" align-h="end">
                <b-button 
              style="float:right; margin-left:90%"
              v-b-modal.modal-3
              ><i class="fas fa-image"></i></b-button>
              </b-col>
            </b-row>
            <b-row align-h="end">
              <b-form-checkbox
                v-model="questions.autoCorrection"
                class="switch"
                name="check-button"
                switch
              >
                Auto Correction
              </b-form-checkbox>

              <b-form-checkbox
                v-model="questions.required"
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
                  @click="questions.addToDatabank = !questions.addToDatabank"
                >
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="questions.addToDatabank"
                    name="checkbox-1"
                  >
                    Add to Databank
                  </b-form-checkbox>
                </b-dropdown-item>
                <b-dropdown-item
                  @click="questions.addToPublic = !questions.addToPublic"
                >
                  <b-form-checkbox
                    id="checkbox-2"
                    v-model="questions.addToPublic"
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
  name: "LongAnswer",
  data() {
    return {
      // databank:false,
      // publicly:false,
      questions: {
        topic: "",
        difficultyLevel: null,
        question: "",
        questionType: "Long Answer Questions",
        answerKey: "",
        autoCorrection: 0,
        required: 0,
        addToPublic: false,
        addToDatabank: false,
        sizelimit: 0,
        fileUpload: "",
      },
      selected: "null",
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
  methods: {
    addquestion() {
      this.$emit("question-added", this.questions);
    },
    previewFile: function (event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.questions.fileUpload = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
        this.$bvModal.hide('modal-3');
      }
    },
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


/* FILE UPLOAD CSS */
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background: #535c68;
}

.wrapper {
  margin: auto;
  max-width: 640px;
  padding-top: 60px;
  text-align: center;
}

.container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  /*border: 0.5px solid rgba(130, 130, 130, 0.25);*/
  /*box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 
              0 0 0 1px rgba(0, 0, 0, 0.1);*/
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

h1 {
  color: #130f40;
  font-family: "Varela Round", sans-serif;
  letter-spacing: -0.5px;
  font-weight: 700;
  padding-bottom: 10px;
}

.upload-container {
  background-color: rgb(239, 239, 239);
  border-radius: 6px;
  padding: 10px;
}

.border-container {
  border: 5px dashed rgba(198, 198, 198, 0.65);
  border-radius: 6px;
  padding: 20px;
}

.border-container p {
  color: #130f40;
  font-weight: 600;
  font-size: 1.1em;
  letter-spacing: -1px;
  margin-top: 30px;
  margin-bottom: 0;
  opacity: 0.65;
}

#file-browser {
  text-decoration: none;
  color: rgb(22, 42, 255);
  border-bottom: 3px dotted rgba(22, 22, 255, 0.85);
}

#file-browser:hover {
  color: rgb(0, 0, 255);
  border-bottom: 3px dotted rgba(0, 0, 255, 0.85);
}

.icons {
  color: #95afc0;
  opacity: 0.55;
}
</style>
