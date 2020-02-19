<template>
  <div class="work-branch">
    <div class="main">
      <!-- 我参与的 -->
      <div class="my-participation">
        <div class="main-title">我参与的</div>
        <div class="participation-content">
          <div
            v-bind:class="[index == 0 ? 'color-0' : ( index == 1 ? 'color-1' : 'color-2'), 'participation-content-item']"
            v-for="(item, index) in myParticipation"
            v-bind:key="index"
          >
            <div class="participation-content-item__title">{{item.title}}</div>
            <div class="participation-content-item__desc">{{item.content}}</div>
            <div class="participation-content-item__percent">
              <div
                class="participation-content-item__percent-bar"
                v-bind:style="{ width: item.percent}"
              >
                <span class="participation-content-item__percent-count">{{item.percent}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 统计概括 -->
      <div class="statistics">
        <div class="main-title">统计概括</div>
        <div class="statistics-chart completion-status">echart.js / canvas</div>
        <div class="statistics-chart sales-statistics">echart / canvas</div>
      </div>
    </div>
    <div class="sidebar">
      <!-- 我的消息 -->
      <div class="message">
        <img src="../assets/ring.png" />
        <div class="message-count">
          我的消息
          <div>{{messageCount}}</div>
        </div>
        <div class="more-message">更多 >></div>
      </div>
      <!-- 我的代办 -->
      <div class="todo">
        <div class="todo-title">我的待办</div>
        <div class="todo-list-box">
          <div
            class="todo-list-item"
            v-bind:class="[todoActiveIndex == index ? 'todo-list-item__active' : '', 'todo-list-item']"
            v-for="(item, index) in todoList"
            v-bind:key="index"
          >
            <div class="todo-list-item__content">{{item.content}}</div>
            <div class="todo-list-item__time">{{item.time}}</div>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-tabs">
          <div
            v-bind:class="[noticeActiveIndex == 0 ? 'notice-tabs__item-active' : '', 'notice-tabs__item']"
            @click="changeNoticeTab(0)"
          >公告</div>
          <div
            v-bind:class="[noticeActiveIndex == 1 ? 'notice-tabs__item-active' : '', 'notice-tabs__item']"
            @click="changeNoticeTab(1)"
          >动态</div>
        </div>
        <!-- 公告 -->
        <div class="notice-list-wrap" v-if="noticeActiveIndex == 0">
          <div class="notice-list-item" v-for="(item, index) in noticeList" v-bind:key="index">
            <div class="notice-list-item__content">{{item.titile}}</div>
            <div class="notice-list-item__time">{{item.time}}</div>
          </div>
        </div>
        <!-- 动态 -->
        <div class="dynamic-list-wrap" v-else>
          <div class="notice-list-item" v-for="(item, index) in dynamicList" v-bind:key="index">
            <div class="notice-list-item__content">{{item.titile}}</div>
            <div class="notice-list-item__time">{{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkBranch",
  data() {
    return {
      myParticipation: [
        {
          title: "this is the titlethis is the titlethis is the title",
          content: "this is the contentthis is the contentthis is the content",
          percent: "50%"
        },
        {
          title: "this is the title",
          content: "this is the contentthis is the contentthis is the content",
          percent: "60%"
        },
        {
          title: "this is the title",
          content: "this is the contentthis is the contentthis is the content",
          percent: "80%"
        }
      ],
      messageCount: 12,
      todoList: [
        {
          content:
            "这是我的待办这是我的待办这是我的待办这是我的待办这是我的待办",
          time: "2020-10-10 12:12:12"
        },
        {
          content:
            "这是我的待办这是我的待办这是我的待办这是我的待办这是我的待办",
          time: "2020-10-10 12:12:12"
        },
        {
          content:
            "这是我的待办这是我的待办这是我的待办这是我的待办这是我的待办",
          time: "2020-10-10 12:12:12"
        }
      ],
      todoActiveIndex: 0,
      noticeActiveIndex: 0,
      noticeList: [
        {
          titile:
            "这是一条公告这是一条公告这是一条公告这是一条公告这是一条公告",
          time: "08-11"
        },
        {
          titile:
            "这是一条公告这是一条公告这是一条公告这是一条公告这是一条公告",
          time: "08-11"
        },
        {
          titile:
            "这是一条公告这是一条公告这是一条公告这是一条公告这是一条公告",
          time: "08-11"
        },
        {
          titile:
            "这是一条公告这是一条公告这是一条公告这是一条公告这是一条公告",
          time: "08-11"
        },
        {
          titile:
            "这是一条公告这是一条公告这是一条公告这是一条公告这是一条公告",
          time: "08-11"
        }
      ],
      dynamicList: [
        {
          titile:
            "这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态",
          time: "08-11"
        },
        {
          titile:
            "这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态",
          time: "08-11"
        },
        {
          titile:
            "这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态",
          time: "08-11"
        },
        {
          titile:
            "这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态",
          time: "08-11"
        },
        {
          titile:
            "这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态这是一条动态",
          time: "08-11"
        }
      ]
    };
  },
  methods: {
    changeNoticeTab(tabIndex) {
      if (this.noticeActiveIndex != tabIndex) {
        this.noticeActiveIndex = tabIndex;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work-branch {
  display: flex;
  justify-content: space-between;
  width: 100%;
  // height: 800px;
  background-color: #f4f4f4;
}

.main {
  box-sizing: border-box;
  padding: 20px 0 0 20px;
  width: 76%;
  height: 100%;
}

.main-title {
  box-sizing: border-box;
  padding-left: 10px;
  border-left: 4px solid #547cd8;
  width: 100%;
  height: 28px;
  text-align: left;
  line-height: 28px;
  color: #547cd8;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}

.participation-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.color-0 {
  background: linear-gradient(to right, #a5a8ea, #8587dd);
}

.color-1 {
  background: linear-gradient(to right, #7cc0fd, #769efc);
}

.color-2 {
  background: linear-gradient(to right, #fbb173, #f49380);
}

.participation-content-item {
  box-sizing: border-box;
  padding: 14px 20px;
  width: 32%;
  height: 120px;
  text-align: left;
  border-radius: 4px;
  background-color: silver;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__desc {
    margin: 10px 0 16px 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  &__percent {
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  &__percent-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #fff;
    border-radius: 4px;
  }

  &__percent-count {
    position: absolute;
    top: -6px;
    right: -40px;
    font-size: 14px;
  }
}

.statistics-chart {
  width: 100%;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.sidebar {
  width: 20%;
  height: 100%;
  background-color: #f6f7f8;
}

.message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 14px;
  width: 100%;
  background-color: #fff;

  .message-count {
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-left: 10px;

    div {
      margin-left: 10px;
      box-sizing: border-box;
      padding: 2px 4px;
      border-radius: 10px;
      border: 1px solid #e53232;
      color: #e53232;
      font-size: 12px;
      text-align: center;
    }
  }

  .more-message {
    font-size: 14px;
  }
}

.todo {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;

  .todo-title {
    box-sizing: border-box;
    padding: 4px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 30px;
  }

  .todo-list-box {
    margin-top: 10px;
    width: 100%;
    height: 285px;
  }

  .todo-list-item {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 90px;
    background-color: #fff;
    margin-bottom: 5px;
    border-left: 5px solid #d9d9d9;

    &__active {
      border-left: 5px solid #f39f13;
    }

    &__content {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      font-size: 14px;
    }

    &__time {
      margin-top: 20px;
      color: silver;
      font-size: 12px;
    }
  }
}

.notice {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}

.notice-tabs {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 4px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 30px;
  cursor: pointer;

  &__item {
    box-sizing: border-box;
    width: 60px;
    height: 30px;
    text-align: center;

    &-active {
      border-bottom: 2px solid #87a3e2;
    }
  }
}

.notice-list-wrap,
.dynamic-list-wrap {
  margin-top: 10px;
  width: 100%;
  height: 100%;
}

.notice-list-item {
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  &__content {
    position: relative;
    box-sizing: border-box;
    padding-left: 20px;
    width: 70%;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &::before {
      content: " ";
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      background-color: silver;
      border-radius: 100%;
    }
  }

  &__time {
    color: silver;
  }
}
</style>
