<template>
  <div class="activity-manager">
    <div class="side-bar">
      <div
        class="side-bar-item"
        v-bind:class="{'side-bar-active' : activeSideBarIndex == 0}"
        @click="changeTab(0)"
        to="/activityManager/activityList"
      >活动列表</div>
      <div
        class="side-bar-item"
        v-bind:class="{'side-bar-active' : activeSideBarIndex == 1}"
        @click="changeTab(1)"
        to="/activityManager/tagsManager"
      >标签库管理</div>
      <div
        class="side-bar-item"
        v-bind:class="{'side-bar-active' : activeSideBarIndex == 2}"
        @click="changeTab(2)"
        to="/activityManager/userGroupsManager"
      >用户群管理</div>
    </div>
    <div class="main">
      <div class="main-title">活动管理 > {{childRouteName}}</div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityManager",
  data() {
    return {
      activeSideBarIndex: 0,
      childRouteName: "活动列表"
    };
  },
  methods: {
    changeTab(index = 0) {
      if (this.activeSideBarIndex != index) {
        this.activeSideBarIndex = index;
        this.changeRoute(index);
      }
    },
    /**
     * 切换路由
     */
    changeRoute(index) {
      switch (index) {
        case 0:
          this.$router.push({ path: "/activityManager/activityList" });
          break;
        case 1:
          this.$router.push({ path: "/activityManager/tagsManager" });
          break;
        case 2:
          this.$router.push({ path: "/activityManager/userGroupsManager" });
          break;
        default:
          break;
      }
      this.childRouteName = this.$route.meta.title;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.activity-manager {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 800px;
  background-color: #f4f4f4;
  text-align: left;
}

.side-bar {
  width: 20%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  .side-bar-item {
    cursor: pointer;
    box-sizing: border-box;
    padding-left: 20px;
    margin-top: 10px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    color: #333;
  }

  &-active {
    background-color: #e5e5ef;
    color: #2b50a4;
  }
}

.main {
  width: 78%;
  height: 100%;
  text-align: left;
}

.main-title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
</style>
