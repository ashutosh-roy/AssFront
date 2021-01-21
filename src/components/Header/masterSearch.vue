<template>
  <vs-input style="color: #000" icon="search" v-model="instantSearch" />
</template>
<script>
export default {
  name: "masterSearch",
  data() {
    return {
      instantSearch: ""
    };
  }
};
</script>
<style type="scss" scoped></style>
