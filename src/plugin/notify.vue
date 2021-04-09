<template>
  <transition name="slide-fade">
    <!-- <div class="notifyItem" v-if="timeFlag !== true"> -->
    <div class="notifyItem">
      <div class="notify">
        <div class="title">
          <span>{{ message.title }}</span>
          <!-- <i class="el-icon-close"></i> -->
        </div>
        <div class="content">{{ message.content }}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "vue-notify",
  created() {
    // this.$notifyInit();
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.notify();
    // });
  },
  watch: {
    // notifyFlag() {
    //   this.$nextTick(() => {
    //     this.notify();
    //   });
    // },
  },
  methods: {
    // 处理notify message长度防止挡住页面其他按钮
    notify() {
      if (document.getElementsByClassName("notifyItem").length > 0) {
        if (
          window.top.innerHeight - 90 >=
          document
            .getElementsByClassName("notify-wrap-content")[0]
            .getBoundingClientRect().height
        ) {
          document.getElementsByClassName(
            "notify-wrap"
          )[0].style = `position: fixed; right: 0px; top: 90px; transition-duration: .5s;z-index:2000;overflow:auto;overflow-x:hidden;`;
        } else {
          document.getElementsByClassName(
            "notify-wrap"
          )[0].style = `position: fixed; right: 0px; top: 90px; transition-duration: .5s;z-index:2000;height:calc(100% - 90px);overflow:auto;overflow-x:hidden;`;
        }
      }
    },
    funcColorClass(priority) {
      /* immediate立即处理：#FE605D */
      /* urgency紧急：#FDBD41 */
      /* high高：#9275EC */
      /* medium一般：#2490fc */
      /* low低 :#34C94B*/
      let className = "";
      if (priority == "立即处理") {
        className = "immediate";
      } else if (priority == "紧急") {
        className = "urgency";
      } else if (priority == "高") {
        className = "high";
      } else if (priority == "一般") {
        className = "medium";
      } else if (priority == "低") {
        className = "low";
      }
      return className;
    },
  },
};
</script>
<style lang="scss" scoped>
.notify .content {
  width: 320px;
  /* height: 30px; */
  font-size: 15px;
  p {
    margin: 0;
    line-height: 21px;
    // height: 21px;
  }
  .colorClass {
    color: #2490fc;
  }
}
</style>
<style lang="scss">
/* //此设置存在浏览器兼容性问题，只在chrome浏览器中 起作用 */
// .notify-wrap::-webkit-scrollbar-track {
//   -webkit-box-shadow: inset 0 0 6px rgba(230, 235, 245, 0.3);
//   border-radius: 4px;
//   background-color: transparent;
//   z-index: 2111;
// }
// .notify-wrap::-webkit-scrollbar {
//   width: 8px;
//   height: 8px;
//   background-color: transparent;
//   z-index: 2111;
// }
// .notify-wrap::-webkit-scrollbar-thumb {
//   border-radius: 4px;
//   -webkit-box-shadow: inset 0 0 6px rgba(230, 235, 245, 0.3);
//   background-color: rgba(24, 144, 255, 0.2);
//   z-index: 2111;
// }
</style>
<style scoped>
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.notifyItem {
  margin: 10px;
  width: 350px;
  display: flex;
  justify-content: right;
  /* position: absolute */
}
.notify {
  position: relative;
  padding: 15px;
  border-radius: 4px;
  background-color: #fff;
  color: #fff;
  box-shadow: 2px 3px 6px 1px rgba(204, 204, 204, 0.8);
  animation: show cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.4s;
}

.immediate {
  color: #fe605d;
}
.urgency {
  color: #fdbd41;
}
.high {
  color: #9275ec;
}
.medium {
  color: #2490fc;
}
.low {
  color: #34c94b;
}

.notify .title {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.notify .title span {
  font-size: 15px;
  font-weight: 600;
  color: #000;
}
i {
  /* line-height: 30px; */
  font-size: 17px;
}
.notify .content {
  width: 320px;
  /* height: 30px; */
  font-size: 14px;
  color: #000;
  /* color: #87cff8; */
}
@keyframes show {
  0% {
    right: -350px;
  }
  100% {
    right: 0px;
  }
}
</style>