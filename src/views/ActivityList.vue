<template>
  <div class="activity-list">
    <div class="title">活动列表</div>
    <div class="search-box">
      <div class="search-box__left">
        <div style="width: 60%;" class="label-wrap">
          活动时间：
          <input type="text" v-model="searchValue.time.start" />
          <input type="text" v-model="searchValue.time.end" />
        </div>
        <div style="width: 40%;" class="label-wrap">
          活动名称：
          <input type="text" placeholder="请输入关键字" v-model="searchValue.name" />
        </div>
        <div style="width: 60%;" class="label-wrap">
          业务场景：
          <div
            v-bind:class="[searchValue.scene == 0 ? 'btn-active' : '', 'btn']"
            @click="changeScene(0)"
          >3G升4G</div>
          <div
            v-bind:class="[searchValue.scene == 1 ? 'btn-active' : '', 'btn']"
            @click="changeScene(1)"
          >用户换机</div>
          <div
            v-bind:class="[searchValue.scene == 2 ? 'btn-active' : '', 'btn']"
            @click="changeScene(2)"
          >信用租机</div>
        </div>
        <div style="width: 40%;" class="label-wrap">
          活动状态：
          <div
            v-bind:class="[searchValue.status == 0 ? 'btn-active' : '', 'btn']"
            @click="changeStatus(0)"
          >运行中</div>
          <div
            v-bind:class="[searchValue.status == 1 ? 'btn-active' : '', 'btn']"
            @click="changeStatus(1)"
          >已结束</div>
        </div>
      </div>
      <div class="search-box__right">
        <div class="btn search-btn" @click="search">查询</div>
        <div class="btn reset-btn" @click="reset">重置</div>
      </div>
    </div>
    <!-- models tab -->
    <div class="models-tab">
      <div
        v-bind:class="[modelTabIndex == index ? 'models-tab-item-active' : '', 'models-tab-item']"
        v-for="(item, index) in modelTypes"
        v-bind:key="index"
        @click="changeModelTab(index)"
      >{{item}}</div>
    </div>
    <div>
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <th width="200px">活动编码</th>
          <th width="200px">活动名称</th>
          <th width="180px">业务场景</th>
          <th width="180px">活动状态</th>
          <th width="180px">开始日期</th>
          <th width="180px">结束日期</th>
          <th width="180px">操作</th>
        </tr>
        <tr
          v-for="(item, index) in myCreateModelList"
          v-bind:key="index"
          v-bind:class="[index % 2 == 1 ? 'tr-highlight' : '']"
        >
          <td>{{item.code}}</td>
          <td>{{item.name}}</td>
          <td>{{item.scene}}</td>
          <td>{{item.status}}</td>
          <td>{{item.startTime}}</td>
          <td>{{item.endTime}}</td>
          <td>评估展现</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityList",
  data() {
    return {
      searchValue: {
        time: {
          start: "",
          end: ""
        },
        name: "",
        scene: 0,
        status: 0
      },
      modelTypes: [
        "我创建的模型",
        "上架模型",
        "未上架模型",
        "最新模型",
        "最热模型"
      ],
      modelTabIndex: 0,
      allList: [], // 假设这是全部的列表
      myCreateModelList: [
        {
          code: 12345679,
          name: "这是活动名称",
          scene: "这是业务场景",
          status: "这是业务状态",
          startTime: "2018.7.21",
          endTime: "2018.7.22"
        },
        {
          code: 12345679,
          name: "这是活动名称",
          scene: "这是业务场景",
          status: "这是业务状态",
          startTime: "2018.7.21",
          endTime: "2018.7.22"
        },
        {
          code: 12345679,
          name: "这是活动名称",
          scene: "这是业务场景",
          status: "这是业务状态",
          startTime: "2018.7.21",
          endTime: "2018.7.22"
        },
        {
          code: 12345679,
          name: "这是活动名称",
          scene: "这是业务场景",
          status: "这是业务状态",
          startTime: "2018.7.21",
          endTime: "2018.7.22"
        },
        {
          code: 12345679,
          name: "这是活动名称",
          scene: "这是业务场景",
          status: "这是业务状态",
          startTime: "2018.7.21",
          endTime: "2018.7.22"
        }
      ]
    };
  },
  created() {
    this.searchValue.time = {
      start: this.formatDate(0),
      end: this.formatDate(0)
    };
  },
  methods: {
    formatDate(type = 0) {
      const time = new Date();
      const year = time.getFullYear();
      const month = time.getMonth() + 1;
      const date = time.getDate();
      return type == 0
        ? `${year}-${month}-${date}`
        : `${year}.${month}.${date}`;
    },
    changeScene(scene = 0) {
      if (this.searchValue.scene != scene) {
        this.searchValue.scene = scene;
      }
    },
    changeStatus(status = 0) {
      if (this.searchValue.status != status) {
        this.searchValue.status = status;
      }
    },
    changeModelTab(index) {
      if (this.modelTabIndex != index) {
        this.modelTabIndex = index;
      }
    },
    reset() {
      this.searchValue = {
        time: {
          start: this.formatDate(0),
          end: this.formatDate(0)
        },
        name: "",
        scene: 0,
        status: 0
      };
    },
    search() {
      const list = this.allList; // 假设这是所有的列表数据
      const {
        time: { start = "", end = "" },
        name = "",
        scene = 0,
        status = 0
      } = this.searchValue;
      const resList = list.map(item => {
        let {
          code: itemCode,
          name: itemName,
          scene: itemScene,
          status: itemStatus,
          startTime: itemStartTime,
          endTime: itemEndTime
        } = item;
        itemStartTime = itemStartTime.split(".").join("-");
        itemEndTime = itemEndTime.split(".").join("-");
        let filterType =
          name == itemName &&
          scene == itemScene &&
          status == itemStatus &&
          start == itemStartTime &&
          end == itemEndTime;
        if (filterType) {
          return item;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.activity-list {
  width: 98%;
  height: 100%;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.title {
  box-sizing: border-box;
  padding-left: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.search-box {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 20px;
  width: 100%;
  height: 120px;

  &__left {
    width: 75%;
    height: 100%;
  }

  &__right {
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }

  .search-btn {
    color: #fff;
    background-color: #274da3;
  }
}

.btn {
  width: 76px;
  height: 30px;
  background-color: silver;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 14px;

  &-active {
    color: #fff;
    background-color: #79a5f3;
  }
}

.label-wrap {
  margin-top: 10px;
  float: left;
  display: flex;
}

label {
  font-size: 14px;
}

input {
  box-sizing: border-box;
  margin-right: 10px;
  padding: 4px 8px;
  width: 140px;
  height: 26px;
  outline: none;
  color: silver;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.models-tab {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &-item {
    box-sizing: border-box;
    padding: 0px 8px;
    height: 30px;
    cursor: pointer;

    &-active {
      color: #274da3;
      border-bottom: 1px solid #274da3;
    }
  }
}
.tr-highlight {
  background-color: #ebebeb;
}
table {
  margin-top: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
th {
  color: #fff;
  background-color: #547cd8;
}
th,
tr,
td {
  box-sizing: border-box;
  padding: 8px;
  text-align: center;
  font-size: 14px;
}
</style>