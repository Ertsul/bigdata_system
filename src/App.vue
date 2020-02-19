<template>
  <div id="app">
    <!-- <div class="nav">
      <img class="logo" src="./assets/logo.png" />
      <div class="tabs"></div>
      <div class="user"></div>
    </div> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
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
      routes: [
        "工作台",
        "标签管理",
        "模型管理",
        "活动管理",
        "评估中心",
        "劳动竞赛",
        "系统管理"
      ]
    }
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: -8px;
}

// .nav {
//   width: 100%;
//   height: 46px;
//   background: linear-gradient(to bottom, #2e4577, #172b5a);
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   .logo {
//     width: 254px;
//     height: 100%;
//   }

//   .tabs {
//     flex-grow: 1;
//   }

//   .user {
//     width: 92px;
//     height: 100%;
//   }
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
