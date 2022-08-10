<template>
  <div>
    <tab-bar>
      <tab-bar-itme path="/home">
        <img slot="tab-iocn" src="~assets/images/tabbar/home_light.png" alt="">
        <img slot="tab-iocn-active" src="~assets/images/tabbar/home_fill_light.png" alt="">
        <div slot="tab-text">首页</div>
      </tab-bar-itme>
      <tab-bar-itme path="/profile">
        <img slot="tab-iocn" src="~assets/images/tabbar/my.png" alt="">
        <img slot="tab-iocn-active" src="~assets/images/tabbar/my_fill.png" alt="">
        <div slot="tab-text">我的</div>
      </tab-bar-itme>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/Tabbar.vue';
import TabBarItme from 'components/common/tabbar/tabbaritme.vue';
export default {
  name: "BloypageTabbarmian",

  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItme
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
