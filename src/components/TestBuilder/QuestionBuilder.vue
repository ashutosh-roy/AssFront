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
              <vs-row vs-justify="flex-start">
                <vs-col
                  vs-lg="6"
                  vs-xs="6"
                  vs-sm="6"
                  type="flex"
                  vs-justify="left"
                  vs-align="left"
                  ><h3>
                    Tests
                  </h3></vs-col
                >
                <vs-col
                  vs-lg="6"
                  vs-xs="6"
                  vs-sm="6"
                  type="flex"
                  vs-justify="flex-end"
                  vs-align="flex-end"
                >
                  <vs-button
                    style="float: right;"
                    type="gradient"
                    color="primary"
                    icon="add"
                    size="small"
                    @click="addSection"
                    >Section</vs-button
                  >
                </vs-col>
              </vs-row>
            </div>
            <div
              v-for="section in sections"
              :key="section.id"
              style="padding-bottom: 20px;"
            >
              <vs-row vs-justify="center">
                <vs-col
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="11"
                >
                  <vs-card>
                    <div slot="header">
                      <vs-row vs-justify="flex-start">
                        <vs-col
                          vs-lg="6"
                          vs-xs="6"
                          vs-sm="6"
                          type="flex"
                          vs-justify="left"
                          vs-align="left"
                          ><h1>Section {{ section.id }}</h1></vs-col
                        >
                        <vs-col
                          vs-lg="6"
                          vs-xs="6"
                          vs-sm="6"
                          type="flex"
                          vs-justify="flex-end"
                          vs-align="flex-end"
                        >
                          <vs-button
                            style="float: right;"
                            type="gradient"
                            color="primary"
                            icon="add"
                            size="small"
                            @click="addQuestion(section.id)"
                            >Question</vs-button
                          >
                          <vs-button
                            style="float: right; margin-right: 5px;"
                            radius
                            type="gradient"
                            color="danger"
                            icon="remove"
                            size="small"
                            @click="removeSection(section.id)"
                          ></vs-button>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div>
                      <vs-row vs-justify="flex-center" style="">
                        <vs-col
                          vs-lg="1"
                          vs-xs="2"
                          vs-sm="2"
                          type="flex"
                          v-for="ques in section.questions"
                          :key="ques.id"
                          vs-justify="flex-center"
                          vs-align="flex-center"
                          style="border: 1px dotted black; border-radius: 10px; text-align: center; margin: 4px;"
                        >
                          <div style="margin-top:25px; margin-bottom:25px;">
                            <h3>Q{{ ques.id }}</h3>
                          </div>
                        </vs-col>
                      </vs-row>
                    </div>
                    <div slot="footer">
                      <vs-row vs-justify="flex-end"> </vs-row>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
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
  name: "QuestionBuilder",
  data: function() {
    return {
      sections: [
        {
          id: 1,
          questions: [
            {
              id: 1,
              type: "short",
              value: "what is your name ?",
              response: {
                type: "short",
                options: [],
                correct: null
              }
            }
          ]
        }
      ]
    };
  },
  methods: {
    addSection: function() {
      this.sections.push({
        id: this.sections.length + 1,
        questions: []
      });
    },
    removeSection: function(id) {
      this.sections = this.sections.filter(section => section.id != id);
    },
    addQuestion: function(SectionID) {
      var index = this.sections.findIndex(section => section.id == SectionID);
      this.sections[index].questions.push({
        id: this.sections[index].questions.length + 1,
        type: "short",
        value: "what is your name ?",
        response: {
          type: "short",
          options: [],
          correct: null
        }
      });
    }
  }
};
</script>
<style scoped></style>
