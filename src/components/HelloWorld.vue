<template>
  <div class="hello">
    <button @click="init">初始化</button>
    <button @click="showMessage">发消息</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      index: 0,
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.$notifyMessage();
    // }, 1000);
  },
  methods: {
    init() {
      let options = {
        position: "right-top",
        offsetX: 5,
        offsetY: 20,
        zIndex: -12,
        order: "desc",
      };
      this.$notifyInit(options);
    },
    showMessage() {
      this.$notifyMessage({ title: this.index++, content: "123" });
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
