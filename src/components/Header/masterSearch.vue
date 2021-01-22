<template>
  <!-- <vs-input style="color: #000" icon="search" v-model="instantSearch" /> -->
  <vs-select
    class="selectExample"
    v-model="select2"
    style="color: #000"
    placeholder="Search"
    autocomplete
  >
    <vs-select-item
      :key="index"
      :value="item.value"
      :text="item.text"
      v-for="(item, index) in options2"
    />
  </vs-select>
</template>
<script>
export default {
  name: "masterSearch",
  data() {
    return {
      instantSearch: "",
      select2: 0,
      options2: [
        { text: "Search", value: 0 },
        { text: "Option 1", value: 1 },
        { text: "Option 2", value: 2 },
        { text: "Option 3", value: 3 },
        { text: "Option 4", value: 4 },
        { text: "Option 5", value: 5 },
        { text: "Option 6", value: 6 },
        { text: "Option 7", value: 7 },
        { text: "Option 8", value: 8 },
        { text: "Option 9", value: 9 },
        { text: "Option 10", value: 10 },
        { text: "Option 11", value: 11 },
        { text: "Option 12", value: 12 }
      ]
    };
  }
};
</script>
<style type="scss" scoped></style>
