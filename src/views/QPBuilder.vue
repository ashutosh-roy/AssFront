<template>
  <b-container fluid>
    <b-row style="width:100vw;">
      <b-col lg="12" style="height: 14vh; width: 40px; overflow-x: auto;">
        <b-container
          fluid
          :style="cssVars"
          style="height: 10vh; margin-top: 0.5vw; border: 1px solid black; border-radius: 10px; overflow-x: auto; width: var(--seclen);"
        >
          <div>
            <div
              v-for="sec in sections"
              :key="sec"
              style="border-right: 1px solid black; height: 8vh; margin: 1vh; width: 12vw;  float:left;"
            >
              <div style="font-size: 2vh;">{{ sec.name }}</div>
              <div>15 Questions</div>
              <div
                style="  white-space: nowrap;   width: 11vw; overflow: hidden; text-overflow: ellipsis; "
              >
                MCQ, Long, Short, Comprehension
              </div>
            </div>
          </div>
        </b-container>
      </b-col>
      <b-col
        :lg="QPBuilder"
        style="background: #00ff00; height: 86vh;"
        @click="toogleDataBank"
        >Question Paper Panel</b-col
      >
      <b-col :lg="DBWidth" v-if="DBWidth == '6'" style="background: #0000ff;"
      @click="addSection"
        >Data Bank Panel</b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "QPBuilder",
  data() {
    return {
      DBWidth: "6",
      QPWidth: "6",
      sectionLength: "100vw",
      sections: [
        { name: "Section 1" }
      ]
    };
  },
  computed: {
    cssVars() {
      return {
        "--seclen": this.sectionLength+"vh",
        
      };
    }
  },

  methods: {
    toogleDataBank: function() {
      if (this.DBWidth == "6") {
        this.DBWidth = "0";
        this.QPWidth = "12";
      } else {
        this.DBWidth = "6";
        this.QPWidth = "6";
      }
    },
    addSection: function(){
        this.sections.push({name:"Section "+(this.sections.length+1)})
        if ((((this.sections.length+1)*25)) > 170 ){
          this.sectionLength = (((this.sections.length+1)*25));
        }
        

    }
  }
};
</script>

<style>

</style>
