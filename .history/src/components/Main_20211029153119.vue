<template>
  <div class="hello">
    <button @click="init">初始化</button>
    <button @click="showMessage">发消息</button>
    <button @click="showHTMLMessage">发html消息</button>
  </div>
</template>

<script>
export default {
  name: "HelloNotify",
  props: {
    msg: String,
  },
  data() {
    return {
      index: 0,
    };
  },
  mounted() {
    this.init();
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
    showHTMLMessage() {
      let notifyInstance = this.$notifyMessage({
        title: "Html test",
        content:
          "<strong>Html Message</strong><button>123</button>",
        time: 0,
        showCloseIcon: true,
        type: "error",
        // onClose: this.closeFunc,
        // time: 30000,
        useHtml: true,
      });
      this.$notifyMessage({
        title: "Html test",
        content:
          "<strong>Html Message</strong><button>123</button>",
        time: 0,
        showCloseIcon: true,
        type: "normal",
        // onClose: this.closeFunc,
        // time: 30000,
        useHtml: true,
      });
      this.$notifyMessage({
        title: "Html test",
        content:
          "<strong>Html Message</strong><button>123</button>",
        time: 0,
        showCloseIcon: true,
        type: "success",
        // onClose: this.closeFunc,
        // time: 30000,
        useHtml: true,
      });
      this.$notifyMessage({
        title: "Html test",
        content:
          "<strong>Html Message</strong><button>123</button>",
        time: 0,
        showCloseIcon: true,
        type: "warning",
        // onClose: this.closeFunc,
        // time: 30000,
        useHtml: true,
      });
      this.$notifyMessage({
        title: "Html test",
        content:
          "<strong>Html Message</strong><button>123</button>",
        time: 0,
        showCloseIcon: true,
        type: "",
        // onClose: this.closeFunc,
        // time: 30000,
        useHtml: true,
      });
    },
    clickFunc() {
      console.log("click");
    },
    showMessage() {
      let notifyInstance = this.$notifyMessage({
        title: "testTitle",
        content: "测试阿斯顿发生",
        time: 0,
        showCloseIcon: true,
        type: "error",
        // onClose: this.closeFunc,
        // time: 30000,
      });
    },
    closeFunc() {
      console.log("close");
      this.$notifyMessage({
        title: "关闭notify",
        content: "刚刚关闭了notify",
        time: 0,
        showCloseIcon: true,
        type: "normal",
        // time: 30000,
      });
    },
  },
};
</script>

<style scoped>
</style>
