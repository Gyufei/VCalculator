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
