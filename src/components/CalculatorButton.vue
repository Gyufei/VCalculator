<template>
  <button @click="handleClick">
    <span>{{ btnText }}</span>
  </button>
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

<style>

</style>
