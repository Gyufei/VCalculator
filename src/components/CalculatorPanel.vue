<template>
  <div>
    <header>简易计算器</header>
    <div class="screen">
      <calculator-screen :screenText="screenText"></calculator-screen>
    </div>
    <div class="button-group">
      <calculator-button
      :btn-text="3"
      @click="handleClick"></calculator-button>
    </div>
  </div>
</template>

<script>
import CalculatorButton from './CalculatorButton'
import CalculatorScreen from './CalculatorScreen'

export default {
  name: 'CalculatorPanel',
  components: {
    CalculatorButton,
    CalculatorScreen
  },

  data () {
    return {
      screenText: '3+3-6'
    }
  },

  methods: {
    handleClick (val) {
      console.log(val)
    }
  }
}
</script>

<style>

</style>
