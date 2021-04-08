<template>
  <div class="hello">
    <button @click="showMessage">发消息</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  mounted() {
    this.$notifyInit();
    // setInterval(() => {
    //   this.$notifyMessage();
    // }, 1000);
  },
  methods: {
    showMessage() {
      this.$notifyMessage();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
