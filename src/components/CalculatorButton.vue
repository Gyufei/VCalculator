<template>
  <span class="btn-text" @click="handleClick">
    <span
    :class="{colored: isColored}">{{ btnText }}</span>
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

  computed: {
    isColored () {
      const NoColorArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'C']
      return NoColorArr.indexOf(this.btnText) === -1
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

.btn-text:active {
  background-color: #f2f2f2;
}

.colored {
  color: #f60;
}

</style>
