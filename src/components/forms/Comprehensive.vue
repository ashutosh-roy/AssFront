<template>
    <div>
    <b-card class="card" header="header">
         <template #header>
        <div>
          Comprehensive
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
        <b-form  inline @submit.prevent>
          <div style="width:100%">
        <b-form-input 
          class="input"
          v-model="text"
          autofocus
          placeholder="Topic">
          </b-form-input>
        

      <b-form-select
      v-model="selected"
      :options="options"
      class="input"
      ></b-form-select>
      <br>

      <b-form-input 
      class="input"
      v-model="text2"
      placeholder="Comprehension"
      style="width:80%;margin-top:1vh">
      </b-form-input>
          <b-button variant="outline" class="btnn" type="submit">  <i class="fas fa-images"></i></b-button>
      <br>
      
    
<div class="base">
 
  <div >
       <b-input-group>
    <b-input-group-prepend is-text>
      <input type="radio" disabled>
    </b-input-group-prepend>
 
       
<div v-for="j in addQues" :key="j" class="question-3">
    <b-form-input 
     v-on:keyup.enter="addQuestion" 
    
     
      class="question-2"
      v-model="j.addQues"
      placeholder="Question"
      style="width:80%;margin-top:1vh;">
      </b-form-input>

     <b-button variant="outline" >
          <i class="fas fa-images"></i>
                 </b-button>
                  <b-button variant="outline" @click="deleteOptions(index)">
          <i class="fas fa-trash"></i>
                 </b-button>
    
</div>
           </b-input-group>
            
           
<div v-for="i in answerlist" :key="i"  >
  <b-input-group>
    <b-input-group-prepend is-text>
      <input type="radio" disabled>
    </b-input-group-prepend>

          <b-button variant="outline" class="btnn" type="submit">
            <i class="fas fa-trash"></i
          ></b-button>

          <b-form-input
            class="input"
            v-model="text2"
            placeholder="Comprehension"
            style="width:80%;margin-top:1vh"
          >
          </b-form-input>
          <b-button variant="outline" class="btnn" type="submit">
            <i class="fas fa-images"></i
          ></b-button>
          <br />
          <br />
          <br />
          <div class="base">
            <div v-for="(ball, bat) in answerlist" :key="bat">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <input type="radio" disabled />
                </b-input-group-prepend>

                <div class="question-3">
                  <b-form-input
                    v-on:keyup.enter="addQuestions"
                    class="question-2"
                    v-model="ball.bat"
                    placeholder="Question"
                    style="width:80%;margin-top:1vh;"
                  >
                  </b-form-input>

        <b-button variant="outline" >
          <i class="fas fa-check 7x"></i>
                 </b-button>
                  <b-button variant="outline" @click="deleteOptions(answerlist -= 1)">
          <i class="fas fa-trash"></i>
                 </b-button>
     </b-input-group>

              <div v-for="(item, index) in answerlist" :key="index">
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <input type="radio" disabled />
                  </b-input-group-prepend>

                  <div>
                    <b-form-input
                      v-on:keyup.enter="addOptions"
                      autofocus
                      class="input-type"
                      v-model="item.index"
                      placeholder="Answer"
                    >
                    </b-form-input>
                  </div>

                  <b-button variant="outline">
                    <i class="fas fa-check 7x"></i>
                  </b-button>
                  <b-button
                    variant="outline"
                    @click="deleteOptions(item.index)"
                  >
                    <i class="fas fa-trash"></i>
                  </b-button>
                </b-input-group>
              </div>
            </div>
            <br />
            <b-button
              variant="outline"
              class="btts"
              style="float:left"
              v-on:click.enter="addOptions"
              >Add Option</b-button
            >
            <b-button
              variant="outline"
              class="btts-1"
              style="float:left"
              @click="addOptions"
              >/ Others</b-button
            >
          </div>

 <b-form-select
      v-model="selected1"
      :options="options1"
     style="width:100%;"
    @change="addQuestion"
      ></b-form-select>

          <b-input-group style="padding-left:70%">
            <b-form-checkbox
              v-model="checked"
              class="switch"
              name="check-button"
              switch
            >
              Auto Correction |
            </b-form-checkbox>

  <b-row align-h="end">
      <b-form-checkbox 
      v-model="checked" 
      class="switch"
      name='check-button'
      switch
      >
      Auto Correction |
      </b-form-checkbox>
    
      <b-form-checkbox  
      v-model="checked"
      class="switch"
      name='check-button'
      switch 
    
      >
      Required
      </b-form-checkbox>
      <b-dropdown split variant="primary"  text="Add" class="m-2 mt-2 p-0 add-btn" >
        <b-dropdown-item>
          <b-form-checkbox 
          id="checkbox-1"
          v-model="status" 
          name='checkbox-1'
          >
          Add to date bank 
          </b-form-checkbox>
        </b-dropdown-item>
        <b-dropdown-item>
          <b-form-checkbox
           id="checkbox-1" 
           v-model="status" 
           name='checkbox-1'
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
    name:"Comprehensive",
    components:{},
     data(){
    return {
      selected: "null",

      options: [
        { value: null, text: "Difficulty", disabled: true },
        { value: "1", text: "Difficulty 1" },
        { value: "2", text: "Difficulty 2" },
        { value: "3", text: "Difficulty 3" },
        { value: "4", text: "Difficulty 4" },
        { value: "5", text: "Difficulty 5" }
      ],
      selected1: "null",
      options1: [
        { value: null, text: "Select Question Type", disabled: true },
        { text: "Long Question", value: "1" },
        { text: "Short Question", value: "2" },
        { text: "Multiple Choice Question", value: "3" },
        { text: "Audio Question", value: "4" },
        { text: "Image Question", value: "5" },
        { text: "Question", value: "6" }
      ],
      answerlist:1,
      addQues:0
      
      }
  },
methods:{
  addOptions(){
    this.answerlist += 1; 
  },
  addQuestion(){
    this.addQues += 1;
  },
  deleteOptions(option){
    this.answerlist.splice(option,1)
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

.input{
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0px;
  outline: none;
  width: fit-content;
  margin-right: 2vh;
  outline: 0px;
  background-color: transparent;
}
.input::after {
  border: none;
  outline: none;
  outline-width: 0px;
}
.switch {
  margin-top: 2vh;
  margin-right: 2vh;
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.custom-select:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.base {
  width: 100%;
}
.sss {
  border-top: none;
  border-right: none;
  border-left: none;
}
.btnn {
  border: none;
}
.btts {
  border: none;
}

.btts-1 {
  color: blue;
  border: none;
}

.bottom-button {
  right: 0;
}
.add-btn {
  color: green;
}

.tsf {
  margin-left: 15px;
}

.input-group-text {
  border: none;
  background-color: transparent;
}

.input-type {
  border-top: none;
  border-right: none;
  border-left: none;
  width: 20%;
}

.question-2 {
  border-top: none;

  border-right: none;
  border-left: none;
  float: left;
}
.question-3 {
  width: 70%;
}

.select-2 {
  border-top: none;
  border-right: none;
  border-left: none;
}

.imag-1 {
  margin-right: 90px;
}
</style>
