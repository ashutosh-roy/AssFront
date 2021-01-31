<template>
  <div class="home">
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="flex-top"
        vs-align="flex-top"
        vs-sm="12"
        vs-lg="6"
        vs-xs="12"
      >
        <QuestionBuilder />
      </vs-col>

      <vs-col
        vs-type="flex"
        vs-justify="flex-top"
        vs-align="flex-top"
        vs-sm="12"
        vs-lg="6"
        vs-xs="12"
      >
        <QuestionBank />
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import QuestionBuilder from "../components/TestBuilder/QuestionBuilder.vue";
import QuestionBank from "../components/TestBuilder/QuestionBank.vue";
export default {
  name: "QuestionPaperBuilder",
  components: {
    QuestionBuilder,
    QuestionBank
  }
};
</script>
<style scoped>
.home {
  margin: 20px;
}
</style>
