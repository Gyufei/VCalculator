<template>
  <div class="main">
    {{ screenText }}
  </div>
</template>

<script>
export default {
  name: 'CalculatorScreen',

  props: {
    screenText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css" scoped>
  .main{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    height: 40px;
  }
</style>
