<template>
  <div id="app">
    <calculator-panel/>
  </div>
</template>

<script>
import CalculatorPanel from './components/CalculatorPanel'

export default {
  name: 'App',
  components: {
    CalculatorPanel
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
