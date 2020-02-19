<template>
  <div>
    <div class="nav">
      <!-- logo -->
      <img class="logo" src="../assets/logo.png" />
      <!-- tab 栏目 -->
      <div class="tabs">
        <div
          v-bind:class="[{ 'tabs-item-active': currentTab === index }, 'tabs-item']"
          v-for="(item, index)  in tabs"
          v-bind:key="index"
          @click="changeTab(index)"
        >{{item}}</div>
      </div>
      <!-- 用户信息 -->
      <div
        class="user"
        @mouseover="toggerLoginoutBlock(true)"
        @mouseout="toggerLoginoutBlock(false)"
      >
        <img class="user-icon" src="../assets/nav_iconuser.png" />
        <div class="user-name">admin</div>
        <img class="arrow-icon" src="../assets/arrow.png" />
        <div class="login-out-wrap" v-if="ifLoginoutShow">退出登录</div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
const [
  WORK_BRANCH,
  TAG_MANAGER,
  MODAL_MANAGER,
  ACTIVITY_MANAGER,
  ASSESSMENT_CENTER,
  LABOR_COMPETITION,
  SYS_MANAGER
] = [0, 1, 2, 3, 4, 5, 6];

export default {
  name: "App",
  data() {
    return {
      tabs: [
        "工作台",
        "标签管理",
        "模型管理",
        "活动管理",
        "评估中心",
        "劳动竞赛",
        "系统管理"
      ],
      sourceTab: "",
      currentTab: WORK_BRANCH,
      ifLoginoutShow: false // 是否显示 ‘退出登录’
    };
  },
  methods: {
    /**
     * 切换 tab
     */
    changeTab(index = WORK_BRANCH) {
      if (index != this.currentTab) {
        this.currentTab = index;
        this.changeRoute(index);
      }
    },
    highlightTab(index) {
      if (!this.sourceTab) {
        this.sourceTab = this.currentTab;
      }
      if (index != this.currentTab) {
        this.currentTab = index;
      }
    },
    /**
     * 切换路由
     */
    changeRoute(index) {
      switch (index) {
        case WORK_BRANCH:
          this.$router.push({ path: "/workBranch" });
          break;
        case TAG_MANAGER:
          break;
        case MODAL_MANAGER:
          break;
        case ACTIVITY_MANAGER:
          this.$router.push({ path: "/activityManager/activityList" });
          break;
        case ASSESSMENT_CENTER:
          break;
        case LABOR_COMPETITION:
          break;
        case SYS_MANAGER:
          break;
        default:
          break;
      }
    },
    /**
     * 切换 ‘退出登录’
     */
    toggerLoginoutBlock(visible = false) {
      if (this.ifLoginoutShow != visible) {
        this.ifLoginoutShow = visible;
      }
    }
  }
};
</script>

<style scoped lang="scss" scoped>
.nav {
  text-align: center;
  position: relative;
  width: 100%;
  height: 46px;
  background: linear-gradient(to bottom, #2e4577, #172b5a);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 254px;
  height: 46rpx;
}

.tabs {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  color: #fff;
}
.tabs-item {
  box-sizing: border-box;
  width: 80px;
  height: 100%;
  line-height: 46px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid #547cd8;
  }

  &-active {
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid #547cd8;
  }
}

.user {
  position: relative;
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  &-icon {
    width: 16px;
    height: 16px;
  }

  &-name {
    color: #fff;
    font-size: 14px;
  }

  .arrow-icon {
    width: 10px;
    height: 6px;

    &-active {
      transform: rotate(180deg);
    }
  }
}

.login-out-wrap {
  position: absolute;
  right: 10px;
  top: 40px;
  width: 100px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
}
</style>