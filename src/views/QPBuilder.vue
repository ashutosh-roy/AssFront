<template>
<div>
  <b-card class="card" >
  <b-container fluid >
    <b-row>
      <b-col style="height: 10vh; width: 40px;">
        <b-container
          fluid
   
      >
          <div class="col-12 col-sm-6 col-md-8">
            <div
              v-for="sec in sections"
              :key="sec"
              style="border-right: 1px solid black; margin: 1vh; width: 12vw;float:left;"
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
<div class="button-1">
             <button class="button-2" type="button" @click="addSection">
            <i class="fas fa-plus fa-3x"></i>
            
          </button>
          </div>
    </b-row>
    
  </b-container>
       
  </b-card>
  <b-card class="card-2">
    <div >
      <button  class="button-3" type="button">
            <i class="fas fa-plus fa-10x"></i>
            
          </button>
    </div>
  </b-card>
  </div>
</template>

<script>
export default {
  name: "QPBuilder",
  data() {
    return {
      DBWidth: "6",
      QPWidth: "6",
      sectionLength: "100%",
      sections: [{ name: "Section 1" }]
    };
  },
  computed: {
    cssVars() {
      return {
        "--seclen": this.sectionLength + "vh"
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
    addSection: function() {
      this.sections.push({ name: "Section " + (this.sections.length + 1) });
      if ((this.sections.length + 1) * 25 > 170) {
        this.sectionLength = (this.sections.length + 1) * 25;
      }
    }
  }
};
</script>

<style>
.card{
  border-radius: 12px;
  box-shadow: 2px 2px 2px #c5c2c2;
  margin: 2vh;


  }
.card-2{
  height: 75vh;
  display: grid;
  align-items: center;
  padding: 150px;
  background: transparent;
  
}

.button-1{
text-align: right;
position: static;
margin-right: 10px;
padding: 0px 20px;

}
.row-s{
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
}
.button-2{
  border: none;
  color: gray;
  font-size: 200;
  height: 70px;
  width: 90px;
  background: transparent;
  padding: 0px;
  border-left: 1px solid gray;
}

.button-3{
  border: none;
  color: gray;
  background: transparent;

  font-size: 14px;

}
</style>
