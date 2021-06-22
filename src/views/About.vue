<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
    axios
      .get("/json/test.json")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>


