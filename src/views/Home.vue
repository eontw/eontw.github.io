<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="search" style="display: inline-block">
      <el-autocomplete
        id="searchbox"
        class="inline-input"
        v-model="state2"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
      <div id="searchBtn" style="display: inline-block">搜索</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import jsonpUtil from "@/utils/jsonpUtil";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      restaurants: [{ value: "三全鲜食（北新泾店）" }],
      state2: "",
    };
  },
  created() {
    window["keydata"] = (keys) => {
      this.keydata(keys);
    };
    // this.restaurants = this.loadAll();
  },
  methods: {
    keydata(keys) {
      this.restaurants=keys.s;
      console.log("keys", keys);
    },
    async querySearch(queryString, cb) {
      console.log("querySearch", queryString);
      await jsonpUtil.get("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",this.state2);

      // var results = this.restaurants;
      // console.log('results',results)
      cb([]);
    },
    loadAll() {
      console.log("loadAll");
      return;
    },
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="scss">
#home {
  width: 1000px;
  height: 485px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -242px;
  margin-left: -500px;
}

#search {
  width: 950px;
  height: 50px;
}
#searchbox {
  border-radius: 50px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  width: 900px;
  height: 50px;
  border: 1px solid #353535;
  border-right: 0 none;
  float: left;
  font-size: 16px;
  padding: 0;
  color: #15120e;
}

#searchBtn {
  border: 1px solid #353535;
  width: 49px;
  height: 48px;
  background: royalblue;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: 0 none;
  float: right;
}
</style>

