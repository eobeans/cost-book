<template>
  <div></div>
</template>
<script>
</script>
  
<style lang='less' scoped>
@import url('../assets/css/theme.less');
.data {
    min-height: 100%;
    background-color: #f5f5f5;
    .total {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    margin-bottom: 10px;
    .time {
        position: relative;
        width: 96px;
        padding: 6px;
        background-color: #f5f5f5;
        color: @color-text-base;
        border-radius: 4px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        span:nth-of-type(1)::after {
            content: '';
        position: absolute;
        top: 9px;
        bottom: 8px;
        right: 28px;
        width: 1px;
        background-color: rgba(0, 0, 0, .5);
        }
        .van-icon-notes-o {
        font-size: 16px;
        color: @color-text-caption;
        }
    }
    .title {
        color: @primary;
        margin-bottom: 8px;
        font-size: 12px;
        font-weight: 500;
    }
    .expense {
        font-size: 24px;
        color: @primary;
        font-weight: 600;
        margin-bottom: 16px;
    }
    .income {
        color: @color-text-caption;
        font-weight: 500;
    }
    }
    .structure {
    padding: 0 16px;
    background-color: #fff;
    margin-bottom: 10px;
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        .title {
        font-size: 18px;
        color: @color-text-base;
        }
        .tab {
        span {
            display: inline-block;
            width: 40px;
            height: 24px;
            background-color: #f5f5f5;
            text-align: center;
            line-height: 24px;
            margin-left: 10px;
            border-radius: 4px;
        }
        .expense {
            &.active {
            background-color: rgba(57, 190, 119, 0.2);
            color: @primary;
            }
        }
        .income {
            &.active {
            background-color: rgba(236, 190, 37, 0.2);
            color: @text-warning;
            }
        }
        }
    }
    .content {
        .item {
        display: flex;
        height: 50px;
        align-items: center;
        .left {
            flex: 4;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 10px;
            .type {
            display: flex;
            align-items: center;
            span:nth-of-type(1) {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                margin-right: 10px;
                color: #fff;
            }
            .expense {
                background-color: @primary;
            }
            .income {
                background-color: @text-warning;
            }
            }
        }
        .right {
            flex: 8;
            display: flex;
            align-items: center;
            .percent {
            width: 160px
            }
            .momey {
            width: 100px;
            }
        }
        }
    }
    }
    .proportion {
    background-color: #fff;
    padding: 12px;
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        .title {
        font-size: 18px;
        color: @color-text-base;
        }
        .tab {
        span {
            display: inline-block;
            width: 40px;
            height: 24px;
            background-color: #f5f5f5;
            text-align: center;
            line-height: 24px;
            margin-left: 10px;
            border-radius: 4px;
        }
        .expense {
            &.active {
            background-color: rgba(57, 190, 119, 0.2);
            color: @primary;
            }
        }
        .income {
            &.active {
            background-color: rgba(236, 190, 37, 0.2);
            color: @text-warning;
            }
        }
        }
    }
    #proportion {
        width: 100%;
        height: 400px;
    }
    }
}
</style>