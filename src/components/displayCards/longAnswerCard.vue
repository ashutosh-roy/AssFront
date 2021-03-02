<template>
  <div>
    <b-card
      class="card"
      sub-title="Long Answer Questions"
      v-for="entry in data"
      :key="entry.question"
      header-tag="header"
    >
      <template #header>
        <div>
          <b-row>
            <b-col>
              <span>
              Long Answer Questions
              </span>
            </b-col>
            <b-col>
              <b-row align-h="end">          
            <b-button
              variant="outline"
              @click="$emit('edit-entry', entry.id)"
              style="border:none"
              ><i class="fas fa-edit"></i
            ></b-button>
            <b-button            
              variant="outline"
              @click="$emit('delete-entry', entry.question)"
              style="border:none"
              ><i class="fas fa-trash"></i
            ></b-button>
            </b-row>
            </b-col>         
          </b-row>          
        </div>
      </template>
      <span style="color:grey" class="ml-3">Question</span>
      <br />
      <span class="ml-5">
        {{ entry.question }}
      </span>

      <b-card-text>
        <div>
          <b-row align-h="end">
            <b-form-checkbox
              v-model="entry.autoCorrection"
              class="switch"
              name="check-button"
              switch
              disabled
            >
              Auto Correction
            </b-form-checkbox>

            <b-form-checkbox
              v-model="entry.required"
              class="switch"
              name="check-button"
              switch
              disabled
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
  name: "LongAnswerCard",
  props: {
    data: Array
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
</style>
