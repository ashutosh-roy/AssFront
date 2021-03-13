<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <b-card
            v-bind:header="topicname"
            header-tag="header"
            footer="Card Footer"
            footer-tag="footer"
            title="Title"
            style="max-width: 15rem"
            class="mb-2"
            @click="$router.push('test')"
          >
            <b-card-text>
              <b-row>
                <b-col align-h="end">
                  {{ topicname }}
                </b-col>
                <b-col align-h="end">
                  <b-button variant="outline" style="border: none"
                    ><i class="fas fa-ellipsis-v"></i>
                  </b-button>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicCard",
  props: {
    topicname: String
  }
  // methods: {
  //     del() {
  //     this.$emit("delete-topic", this.topicname);
  //     },
  // },
};
</script>
