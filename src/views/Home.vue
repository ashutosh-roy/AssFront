<template>
  <div>
    <b-row align-h="center">
      <b-button style="float:right; margin-left:90%" v-b-modal.modal-1
        ><i class="fas fa-plus"></i
      ></b-button>
    </b-row>
    <b-modal
      id="modal-1"
      centered
      title="Choose Question Type"
      style="width:90vh"
    >
      <b-button class="buttonchoice" variant="outline-secondary">MCQ</b-button>
      <b-button class="buttonchoice" variant="outline-secondary"
        >Long Answer</b-button
      >
      <b-button class="buttonchoice" variant="outline-secondary"
        >Short Answer</b-button
      >
      <b-button class="buttonchoice" variant="outline-secondary"
        >Image</b-button
      >
      <b-button class="buttonchoice" variant="outline-secondary"
        >Video</b-button
      >
      <b-button class="buttonchoice" variant="outline-secondary"
        >Audio</b-button
      >
      <b-button class="buttonchoice" variant="outline-secondary"
        >Fill in the Blanks</b-button
      >
      <b-button class="buttonchoice" variant="outline-secondary"
        >Match the Following</b-button
      >
      <b-button class="buttonchoice" variant="outline-secondary"
        >Unseen Passage</b-button
      >
      <template #modal-footer="">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="success" @click="ok()" v-show="false">
          OK
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()" v-show="false">
          Cancel
        </b-button>
        <!-- Button with custom close trigger value -->
        <b-button
          size="sm"
          variant="outline-secondary"
          @click="hide('forget')"
          v-show="false"
        >
          Forget it
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
<style scoped>
.buttonchoice {
  height: 80px;
  width: 90px;
  border: 1px dashed;
  padding: 0px;
}
</style>
