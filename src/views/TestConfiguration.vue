<template>
  <div>
    <b-card class="cardx">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info"
              >Opening screen display</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <!--
            Test Name		
            Test Organizer		
            Test Description		
            Test Instructions		
            Real time & date display 		
            Show total Test Duration		
            Total Questions count		
            Allow candidate remarks column		

          -->
            <b-card-body>
              <b-row>
                <b-form-input
                  class="input"
                  placeholder="Test name"
                  v-model="testname"
                />
                <b-button
                  variant="outline"
                  @click="$emit('delete-form')"
                  style="border:none"
                  ><i class="fas fa-edit"></i
                ></b-button>
              </b-row>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="info"
              >Accordion 2</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info"
              >Accordion 3</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "TestCofiguration",
  data() {
    return {
      text: "hbedchsndjcnjsdn"
    };
  },
  props: {
    testname: String
  }
};
</script>
<style scoped>
.cardx {
  border-radius: 1px !important;
  margin: 2vh;
  box-shadow: 7px 10px 7px #c5c2c2;
  text-align: left;
  height: 95vh;
}
.input {
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0px;
  width: 95%;
  margin-right: 2vh;
}
</style>
