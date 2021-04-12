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
        order: "desc",
      };
      this.$notifyInit(options);
    },
    showMessage() {
      // console.log(this.index % 2 != 0);
      // if (this.index % 2 != 0) {
      let notifyInstance = this.$notifyMessage({
        title: "this.index++",
        content: "测试阿斯顿发生",
        time: 0,
        showCloseIcon: true,
        type: "error",
        // time: 30000,
      });
      // notifyInstance.close();
      // } else {
      //   this.$notifyMessage({ title: this.index++, content: "123", time: 3000 });
      // }
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
