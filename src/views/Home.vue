<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="search" style="display: inline-block">
      <el-autocomplete
        id="searchbox"
        class="inline-input"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
        @select="handleSelect"
        @keyup.enter="submit"
      ></el-autocomplete>
      <div id="searchBtn" style="display: inline-block" @click="submit"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import $ from "jquery";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      restaurants: [],
      state: "",
    };
  },
  created() {
  },
  methods: {
    querySearch(queryString, cb) {
      $.ajax({
        url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
        dataType: "jsonp",
        type: "get",
        data: {
          wd: this.state,
        },
        jsonp: "cb",
        success: function (data) {
          var results = [];
          data.s.forEach(function (value) {
            results.push({ value });
          });
          cb(results);
        },
      });
    },
    handleSelect(item) {
      this.openSearchTag(item.value);
    },
    submit(){
      this.openSearchTag(this.state);
    },
    openSearchTag(keyWord) {
      window.open(`https://www.baidu.com/s?wd=${keyWord}`);
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
  text-align: left;
}

#searchBtn {
  width: 49px;
  height: 48px;
  background: royalblue;
  background-image: url(../assets/img/searchBtn.png);
  background-position: 13px 14px;
  background-repeat: no-repeat;
  border: 1px solid #353535;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: 0 none;
  float: right;
}
</style>

