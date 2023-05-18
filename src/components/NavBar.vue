<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="/data" icon="notes-o" @click="link('/data')">我的账单</van-tabbar-item>
    <van-tabbar-item name="/add" icon="plus" @click="link('/add')">记一笔</van-tabbar-item>
    <van-tabbar-item name="/count" icon="bar-chart-o" @click="link('/count')">收支分析</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  setup() {
    const router = useRouter()
    const active = ref('/data')

    const link = (path) => {
      router.push({ path })
    }

    onMounted(() => {
      active.value = router.currentRoute.value.path
    })

    router.afterEach(() => {
      active.value = router.currentRoute.value.path
    })

    return {
      active,
      link
    }
  }
}
</script>

<style lang="less">
@import url('../assets/css/theme.less');
.van-tabbar-item--active {
  color: @primary!important;
} 
</style>
