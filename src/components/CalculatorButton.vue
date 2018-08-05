<template>
  <span class="btn-text" @click="handleClick">
    <span>{{ btnText }}</span>
  </span>
</template>

<script>
export default {
  name: 'CalculatorButton',

  props: {
    btnText: {
      type: [String, Number],
      required: true
    }
  },

  methods: {
    handleClick () {
      this.$emit('click', this.btnText)
    }
  }
}
</script>

<style lang="css" scoped>
.btn-text {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  line-height: 37px;
  color: #333;

  cursor: pointer;
}

</style>
