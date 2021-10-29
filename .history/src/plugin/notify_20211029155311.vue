<template>
  <transition name="slide-fade">
    <div
      class="notifyItem"
      v-if="notifyFlag"
    >
      <div :class="[
          'notify',
          position.split('-')[0] === 'right'
            ? 'notifyRightShow'
            : 'notifyLeftShow',
        ]">
        <span
          :class="['iconfont','iconStyle', typeClass, type]"
          aria-hidden="true"
          v-if="type !== ''"
        ></span>
        <i
          class="iconfont icon-close-bold closeIcon"
          aria-hidden="true"
          @click="close"
          v-if="showCloseIcon"
        ></i>
        <div class="notifyBody">
          <div class="title">
            <span>{{ message.title }}</span>
          </div>
          <div class="content">
            <span v-if="useHtml === false">{{ message.content }}</span>
            <div
              v-else
              v-html="message.content"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'vue-notify',
  created() {
    // this.$notifyInit();
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.notify();
    // });
    if (this.type === 'normal') {
      this.typeClass = 'icon-info-circle-fill';
    } else if (this.type === 'success') {
      this.typeClass = 'icon-check-circle-fill';
    } else if (this.type === 'warning') {
      this.typeClass = 'icon-warning-circle-fill';
    } else if (this.type === 'error') {
      this.typeClass = 'icon-close-circle-fill';
    }
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
      if (document.getElementsByClassName('notifyItem').length > 0) {
        if (
          window.top.innerHeight - 90 >=
          document
            .getElementsByClassName('notify-wrap-content')[0]
            .getBoundingClientRect().height
        ) {
          document.getElementsByClassName(
            'notify-wrap'
          )[0].style = `position: fixed; right: 0px; top: 90px; transition-duration: .5s;z-index:2000;overflow:auto;overflow-x:hidden;`;
        } else {
          document.getElementsByClassName(
            'notify-wrap'
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
      let className = '';
      if (priority == '立即处理') {
        className = 'immediate';
      } else if (priority == '紧急') {
        className = 'urgency';
      } else if (priority == '高') {
        className = 'high';
      } else if (priority == '一般') {
        className = 'medium';
      } else if (priority == '低') {
        className = 'low';
      }
      return className;
    },
    close() {
      this.elHeight = this.$el.scrollHeight + 'px';
      if (typeof this.timer === 'number') {
        window.clearTimeout(this.timer);
      }
      this.notifyFlag = false;
      if (this.closeFunc != '') this.closeFunc();
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.notifyLeftShow {
  animation: leftShow cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.4s;
}
.notifyRightShow {
  animation: rightShow cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.4s;
}
@keyframes rightShow {
  0% {
    right: -350px;
  }
  100% {
    right: 0px;
  }
}
@keyframes leftShow {
  0% {
    left: -350px;
  }
  100% {
    left: 0px;
  }
}
.notifyItem {
  margin: 10px;
  width: 350px;
  display: flex;
  justify-content: right;
  /* position: absolute */
  .notify {
    position: relative;
    padding: 15px;
    border-radius: 4px;
    background-color: #fff;
    color: #fff;
    box-shadow: 2px 3px 6px 1px rgba(204, 204, 204, 0.8);
    width: 320px;
    display: flex;
    .iconStyle {
      margin-right: 15px;
      font-size: 25px;
    }
    .closeIcon {
      position: absolute;
      right: 15px;
      font-size: 14px;
      line-height: 25px;
      &::before {
        cursor: pointer;
        color: rgb(104, 103, 103);
      }
      &:hover {
        &::before {
          color: rgb(139, 139, 139);
        }
      }
    }
    .notifyBody {
      .title {
        height: 25px;
        color: #000;
        display: flex;
        align-items: center;
        span {
          font-size: 16px;
          font-weight: 600;
        }
      }
      .content {
        color: #606266;
        span {
          font-size: 14px;
        }
      }
    }

    .normal {
      color: rgb(141, 138, 138);
    }
    .success {
      color: rgb(52, 209, 99);
    }
    .warning {
      color: rgb(245, 211, 16);
    }
    .error {
      color: rgb(221, 42, 42);
    }
  }
}
</style>
<style lang="scss">
/* //此设置存在浏览器兼容性问题，只在chrome浏览器中 起作用 */
.notify-wrap::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(230, 235, 245, 0.3);
  border-radius: 4px;
  background-color: transparent;
  z-index: 2111;
}
.notify-wrap::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: transparent;
  z-index: 2111;
}
.notify-wrap::-webkit-scrollbar-thumb {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 6px rgba(230, 235, 245, 0.3);
  background-color: rgba(24, 144, 255, 0.2);
  z-index: 2111;
}
</style>