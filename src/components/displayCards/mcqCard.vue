<template>
    <div>
    <b-card class="card" >
      
      <b-card-text>
            <b-card-title  style="float:left">Multiple Choice Question(MCQ)</b-card-title>
            <br>
            <br>
             <b-card-text style="float:left;margin-left:30px">Question</b-card-text>
             <br>
        
        <div>
            <b-row align-h="start">
                <b-card-text >
          This is where we can show the question that we have typed. does this look elegant enough? Good Question.
          We can work on this a little more  
          </b-card-text>
            </b-row>
        </div>
          
            


      
      <br>
      <br>
           
    <b-card-text style="float:left;margin-left:30px">Options</b-card-text>
<br>
<br>

 <b-form-group >
     
      <!-- <b-form-radio-group
        id="radio-slots"
        v-model="selected1"
        :options="options1"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      > -->
      <div class="options">
        <b-row>
           
            <b-col style="text-align:left;" cols="6">
                 <b-form-radio disabled>
                {{options1[0].text}}
                 </b-form-radio>
            </b-col>
           
            <b-col style="text-align:left;" cols="6">
                     <b-form-radio disabled>
                {{options1[1].text}}
              </b-form-radio>
            </b-col>
        </b-row>
        <b-row>
            <b-col style="text-align:left;" cols="6">
                 <b-form-radio disabled>
                {{options1[2].text}}
                 </b-form-radio>
            </b-col>
            <b-col style="text-align:left;" cols="6">
                 <b-form-radio disabled>
                {{options1[3].text}}
                 </b-form-radio>
            </b-col>
            
        </b-row>
        <!-- Radios in the default slot will appear after any option generated radios -->
     </div>
      <!-- </b-form-radio-group> -->
    </b-form-group>



  <div>
            <b-row align-h="end">
              <b-form-checkbox
                v-model="entry.autoCorrection"
                class="switch"
                name="check-button"
                switch
              >
                Auto Correction
              </b-form-checkbox>

              <b-form-checkbox
                v-model="entry.required"
                class="switch"
                name="check-button"
                switch
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
export default {
    name:"Comprehensions",
     data(){
    return {
      selected:"null",
      options:[
        {value:null, text:"Difficulty", disabled:true},
        {value:"1", text:"Difficulty 1"},
        {value:"2", text:"Difficulty 2"},
        {value:"3", text:"Difficulty 3"},
        {value:"4", text:"Difficulty 4"}, 
        {value:"5", text:"Difficulty 5"},
      ],
      selected1:"1",
      options1:[
        { text: 'This is option 1', value: '1' },
        { text: 'This is option which has a lot of text', value: '2' },
        { text: 'This is option 2 with a lot of text', value: '3' },
        { text: 'This option 4', value: '4' }
      ]
      }
  }
}
</script>
<style scoped>
.card{
  border-radius: 12px;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
}
.input{
  border-top: none;
  border-right:none;
  border-left: none;
  border-radius: 0px;
  outline: none;
  width: fit-content;
  margin-right: 2vh;
  outline: 0px;
  background-color: transparent;
  
}
.input::after{
  border: none;
  outline: none;
  outline-width: 0px;
}
.switch{
  margin-top: 2vh;
  margin-right: 2vh;
  
}
.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.custom-select:focus{
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}



.base{
  width: 100%;
}
.sss{
  border-top: none;
  border-right:none;
  border-left: none;

}
.btnn{
border: none;
}
.btts{
  border: none;
  color: blue;
}

.bottom-button{
  right: 0;
}
.add-btn{
  color:green;
}

.options{
    margin-left: 20px;
}

</style>