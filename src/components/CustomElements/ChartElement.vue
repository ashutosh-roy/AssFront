<template>
  <vs-row vs-justify="center">
    <vs-col
      type="flex"
      vs-justify="center"
      vs-align="center"
      vs-lg="12"
      vs-xs="12"
      vs-sm="12"
    >
      <vs-card>
        <div slot="header">
          <h3>
            {{title}}
          </h3>
        </div>
        <div>
           
        
           
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "ChartElement",
  props: ['title','tabledata'],
  data: () => ({
     
    
  }),
  
};
</script>
