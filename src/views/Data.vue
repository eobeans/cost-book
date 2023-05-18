<template>
  <div class="data-container">
    <div class="kanban">
      <div class="header">
        我的账单
      </div>
      <van-row justify="start">
        <van-col span="14">
          <div class="left-container">
            <div class="time-container" @click="timeToggle">
              <div class="year">2023年</div>
              <div class="month">
                05月
                <van-icon name="arrow-down" style="font-size: 12px;" />
              </div>
            </div>
            <div class="divider"></div>
            <div class="count">
              <div class="title">结余</div>
              <div class="number">1234.00</div>
            </div>
          </div>
        </van-col>
        <van-col span="10">
          <div class="in-out">
            <div>收入：1231</div>
            <div>支出：21111</div>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="detail">
      <div>
        <van-list>
          <div v-for="item in list" :key="item.id">
            <div>{{item.money}}</div>
          </div>
        </van-list>
      </div>
    </div>
    
    <van-date-picker
      v-if="timeAct"
      v-model="currentDate"
      title="选择日期"
      :min-date="minDate"
      :max-date="maxDate"
      :columns-type="['year', 'month']"
    />
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Data',
  setup() {
    const state = reactive({
      timeAct: false,
      list: [
        {
          id: '123',
          type: '1', // 餐饮
          inout: '0', // 支出
          date: '2023-05-15',
          money: 123.12 // 费用
        },
        {
          id: '1223',
          type: '1', // 餐饮
          inout: '0', // 支出
          date: '2023-05-15',
          money: 123.12 // 费用
        },
        {
          id: '122a3',
          type: '1', // 餐饮
          inout: '0', // 支出
          date: '2023-05-15',
          money: 123.12 // 费用
        },
        {
          id: '12aa2a3',
          type: '1', // 餐饮
          inout: '0', // 支出
          date: '2023-05-15',
          money: 123.12 // 费用
        },
      ]
    })

    const timeToggle = () => {
      state.timeAct = !state.timeAct
    }

    return {
      ...toRefs(state),
      timeToggle,
    }
  }
}
</script>
  
<style lang='less' scoped>
@import url('../assets/css/theme.less');
.data-container {
  display: block;
  width: 100%;
  min-height: 100%;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;

  .kanban {
    background-color: aqua;
    height: 130px;
  }
  .header {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
  .left-container {
    display: block;
    position: relative;
    width: 100%;
    height: 76px;

    .time-container {
      margin: 0 6px 0 12px;
      height: 76px;
      width: auto;
      float: left;
    }
    .year {
      text-align: left;
      font-size: 22px;
      height: 30px;
      line-height: 30px;
    }
    .month {
      text-align: left;
      font-size: 32px;
    }

    .count {
      float: left;
    }
    .title {
      height: 30px;
      font-size: 16px;
      line-height: 30px;
      text-align: left;
    }
    .number {
      text-align: left;
      font-size: 32px;
    }
  }

  .in-out {
    display: block;
    font-size: 26px;
  }

  .divider {
    display: block;
    float: left;
    margin: 4px 8px 4px 8px;
    height: 65px;
    border: 0.5px grey solid;
    content: '';
  }

  .detail {
    height: auto;
    width: 96%;
    background-color: aquamarine;
    margin: -20px 2% 0 2%;
  }

}
</style>