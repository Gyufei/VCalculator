<template>
  <button @click="handleClick">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'CalculatorButton',

  props: {
    text: {
      type: String,
      required: true
    }
  },

  methods: {
    handleClick () {
      this.$emit('click', this.text)
    }
  }
}
</script>

<style>

</style>
