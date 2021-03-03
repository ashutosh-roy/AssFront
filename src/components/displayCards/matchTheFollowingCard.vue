<template>
  <div class="questionboxcontainer">    
      <b-card class="card">
        <b-card-text>
          <b-form inline>
            <div class="firstrow">
              <h5>Match The Following</h5>
              <br />
              <h6 style="margin-left: -63%">Question</h6>
            </div>
            <div class="matchthefollowing">
              <!-- v-for="(item, key, index) in objectItems -->
              <div v-for="item in inputs" :key="item.id">
                <div class="optionrows">
                  <b-input-group>
                    <!-- <template #prepend>
                            <b-input-group-text >
                                <li></li>
                            </b-input-group-text>
                            </template> -->
                    <template #prepend>
                      <b-form-radio disabled>
                        <span class="sr-only"
                          >Radio for following text input</span
                        >
                      </b-form-radio>
                    </template>
                    <b-form-input v-model="item.sideA"></b-form-input>
                    <b-form-input v-model="item.sideB"></b-form-input>
                  </b-input-group>
                </div>
              </div>
            </div>
            <b-input-group style="padding-left:70%">
              <b-form-checkbox
                v-model="checked"
                class="switch"
                name="check-button"
                switch
                disabled
              >
                Auto Correction
              </b-form-checkbox>

              <b-form-checkbox
                v-model="checked"
                class="switch"
                name="check-button"
                switch
                disabled
              >
                Required
              </b-form-checkbox>
              <!-- <template #append> -->
            </b-input-group>
          </b-form>
        </b-card-text>
      </b-card>
    </div>
</template>
<script>
export default {
  name: "MatchTheFollowingCard",
  data() {
    return {
      inputs: [
        {
          sideA: "",
          sideB: ""
        }
      ],
      selected: "null",
      options: [
        { value: null, text: "Difficulty" },
        { value: "1", text: "Difficulty Level 1" },
        { value: "2", text: "Difficulty Level 2" },
        { value: "3", text: "Difficulty Level 3" },
        { value: "4", text: "Difficulty Level 4" },
        { value: "5", text: "Difficulty Level 5" }
      ]
      //   selectedoptions: 'first',
      //     options1: [
      //       { text: 'First radio', value: 'first' },
      //       { text: 'Second radio', value: 'second' },
      //       { text: 'Third radio', value: 'third' }
      //     ]
    };
  },
  methods: {
    addsideA() {
      this.inputs.push({
        sideA: ""
      });
      console.log(this.inputs);
    },

    addsideB() {
      this.inputs.push({
        sideB: ""
      });
      console.log(this.inputs);
    },

    remove(index) {
      this.inputs.splice(index, 1);
    }

    // remove (index) {
    //   this.inputs.splice(index, 1)
    // },
  }
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
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
  background-color: transparent;
  outline-width: 0px;
}
.switch {
  margin-top: 2vh;
  margin-right: 2vh;
}
.inputanswers {
  padding-top: 1%;
  width: 100%;
}
.matchthefollowing {
  width: 100%;
}
/* .inputgrp{
    
} */
.form-control {
  margin: 1%;
  background-color: transparent;
  outline-width: 0px;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn {
  border: none;
  padding-top: 0.5%;
  margin-top: 1%;
  margin-bottom: 0.7%;
}
.deletebutton {
  margin-left: 0.5%;
}
/* .delbutton{
    margin-left: 200%;
    
 } */
/*  
.inputfield{
    width: 100%;
    margin-left:-1%;

} */
.input-group-text {
  padding-top: 0.5%;
  margin-top: 28%;
  margin-bottom: 2%;
  border: none;
}
.input:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/* .col-10 {
    margin-left: -38%;
} */
.custom-control {
  padding-left: 3rem;
  padding-top: 1.2rem;
}
</style>
