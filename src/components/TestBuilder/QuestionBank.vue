<template>
  <vs-row>
    <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      vs-sm="12"
      vs-lg="12"
      vs-xs="12"
    >
      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <vs-card>
            <div slot="header">
              <h3>
                Simplify Question Bank
              </h3>
            </div>
            <div style="padding-bottom: 20px;">
              <vs-card v-for="question in questions" :key="question.id">
                <div slot="header">
                  <h3>Question {{ question.id }}</h3>
                </div>
                <div>
                  <div v-html="question.value"></div>
                  <vs-list v-if="question.type === 'mcq'">
                    Options List
                    <vs-list-item
                      v-for="item in question.response.options"
                      :key="item"
                      :title="item"
                    ></vs-list-item>
                  </vs-list>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button
                      type="gradient"
                      color="primary"
                      icon="add"
                    ></vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end"> </vs-row>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </vs-col>
  </vs-row>
</template>
<script>
export default {
  name: "QuestionBank",
  data: function() {
    return {
      questions: [
        {
          type: "long",
          value: "<p>Write your question here !</p>",
          response: { type: "long", options: [], correct: null },
          id: 1
        },
        {
          type: "short",
          value: "<p>Write your question here !</p>",
          response: { type: "short", options: [], correct: null },
          id: 2
        },
        {
          type: "mcq",
          value: "<p>Write your question here !</p>",
          response: { type: "mcq", options: [], correct: null },
          id: 3
        },
        {
          type: "long",
          value: "Write your question here !",
          response: { type: "long", options: [], correct: null },
          id: 4
        },
        {
          type: "long",
          value: "Write your question here !",
          response: { type: "long", options: [], correct: null },
          id: 5
        },
        {
          type: "mcq",
          value: "<p>another op question</p>",
          response: {
            type: "mcq",
            options: ["op1", "op2", "op3", "op4"],
            correct: null
          },
          id: 6
        }
      ]
    };
  }
};
</script>
<style scoped></style>
