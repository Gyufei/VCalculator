<template>
  <div class="main">
    <div class="screen-top">
      {{ screenTopText }}
    </div>
    <div class="screen-bottom">
      {{ screenBottomText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorScreen',

  props: {
    screenTopText: {
      type: String,
      default: ''
    },
    screenBottomText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css" scoped>
  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 55px;
  }

  .screen-top {
    font-size: 13px;
    line-height: 25px;
  }

  .screen-bottom {
    font-size: 26px;
    line-height: 30px;
    white-space: nowrap;
  }
</style>
