<template>
    <div id="asp">
    <b-card class="card">
      
      <b-card-text>
        <b-form inline @submit.prevent>
        
          
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

      <b-button variant="outline" class="btnn" type="submit">  <i class="fas fa-trash"></i></b-button>
  
      <b-form-input 
      class="input"
      v-model="text2"
      placeholder="Question"
      style="width:80%;margin-top:1vh">
      </b-form-input>
          <b-button variant="outline" class="btnn" type="submit">  <i class="fas fa-images"></i></b-button>
      <br>
      <br>
      <br>
<div class="base">
      
       

  
     
<div v-for="(item, index) in answerlist" :key="index"  >
  <b-input-group>
    <b-input-group-prepend is-text>
      <input type="radio" disabled>
    </b-input-group-prepend>
    <b-form-input   
    v-on:keyup.enter="addOptions" 
    autofocus
     class="input"
     v-model="item.index"
     placeholder="Answer"
     style="width:60%;margin-top:1vh">
    </b-form-input>


        <b-button variant="outline" >
          <i class="fas fa-check 7x"></i>
                 </b-button>
                  <b-button variant="outline" @click="deleteOptions(item.index)">
          <i class="fas fa-trash"></i>
                 </b-button>
     </b-input-group>
        </div>

<br>
 <b-button variant="outline" class="btts" style="float:left" v-on:click.enter="addOptions">Add Option</b-button>
  <b-button variant="outline" class="btts-1" style="float:left" @click="addOptions">/ Others</b-button>
    </div>
  <b-input-group style="padding-left:70%" >
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
  </b-input-group>
        </b-form>
        
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
    name:"mcq",
    components:{

    },
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
      
      answerlist:["as"]
      
      }
  },
methods:{
  addOptions(){
    this.answerlist.push("as"); 
  },
  deleteOptions(option){
    this.answerlist.splice(option,1)
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
}

.btts-1{
  color: blue;
  border: none;
}

.bottom-button{
  right: 0;
}
.add-btn{
  color:green;
}

.tsf{
  margin-left: 15px;
}

.input-group-text{
  border: none;
  background-color: transparent;
  
}


</style>