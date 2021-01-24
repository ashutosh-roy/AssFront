<template>
<div>
  <vs-row vs-justify="center">
    <vs-col
      vs-type="container"
      vs-justify="center"
      vs-align="center"
      vs-lg="10"
      vs-xs="12"
      vs-sm="12"
    >
    <h1 style="padding: 25px; text-align: center">Frequently Asked Questions and Answers</h1>
    </vs-col>
    <vs-col
      vs-type="container"
      vs-justify="center"
      vs-align="center"
      vs-lg="10"
      vs-xs="12"
      vs-sm="12"
    >
      <vs-collapse accordion>
        <vs-collapse-item
          class="shadow"
          v-for="item in qdata"
          :key="item.id"
          style="margin-bottom: 10px; border-left: 5px solid black; border-radius: 5px; padding-top: 5px; padding-bottom: 5px;"
        >
          <div slot="header">
            <strong>{{ item.question }}</strong>
          </div>
          - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.answer }}
        </vs-collapse-item>
      </vs-collapse>
    </vs-col>
    <vs-col
      vs-type="container"
      vs-justify="center"
      vs-align="center"
      vs-lg="10"
      vs-xs="12"
      vs-sm="12"
    >
    <h5 style="text-align: right; padding-right: 15px;"  @click="popupActive=true">Still have a question? write to us.</h5>
    </vs-col>
    
  </vs-row>
  <vs-popup classContent="popup-example"  title="Write to us!" :active.sync="popupActive">
          
          <vs-input required style="width: 100%" label-placeholder="Your Name" v-model="name"/>
          <vs-input style="width: 100%" label-placeholder="Your Email" v-model="email"/>
          <vs-input style="width: 100%" label-placeholder="Your Phone" v-model="phone"/>
          <vs-textarea style="margin-top: 15px;" label="Your Message or question" v-model="msg"/>
          <vs-button color="primary" @click="sendData" type="border">Send Message</vs-button>

 
        
          
    </vs-popup>
</div>
</template>
<script>
export default {
  name: "supportPage",
  data: () => ({
    qdata: [
      {
        id: 1,
        question: "Is the tool free ?",
        answer: "Yes it is"
      },
      {
        id: 2,
        question: "Is the tool free 2 ?",
        answer: "Yes it is"
      },
      {
        id: 3,
        question: "Is the tool free 3 ?",
        answer: "Yes it is"
      }
    ],
    select1:3,
    name:"",
    email:"",
    phone:"",
    msg:"",
      popupActive:false
  }),
  methods:{
    sendData(){
      if(this.name == "" || this.email == "" || this.phone == "" || this.msg == "" ){
this.$vs.notify({
            title:'Failed',
            text:"All Fields need to be filled",
            color:'danger',
          });
      }
      else{
this.popupActive = false;
this.$vs.notify({
            title:'Message Sent',
            text:"Thankyou "+this.name+", your message is recieved!",
            color:'success',
          });
      }

    }
  }
};
</script>
<style scoped>
.shadow {
  -moz-box-shadow: 5px 5px 5px 1px #ccc;
  -webkit-box-shadow: 5px 5px 5px 1px #ccc;
  box-shadow: 5px 5px 5px 1px #ccc;
}
</style>
