<template>
  <div class="panel-con">
    <header>简易计算器</header>

    <main>
      <div class="screen">
        <calculator-screen :screenText="screenText"></calculator-screen>
      </div>

      <div class="button-group">
        <div class="btn-row" v-for="(rowBtn, index) of btnArr" :key="`${index}-${rowBtn[index]}`">
          <span class="btn" v-for="btn of rowBtn" :key="btn">
            <calculator-button
            :btnText="btn"
            @click="handleClick"></calculator-button>
          </span>
        </div>
      </div>
    </main>
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
      btnArr: [
        ['(', ')', '%', 'C'],
        ['7', '8', '9', '÷'],
        ['4', '5', '6', 'x'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
      ],
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

<style lang="css" scoped>
.panel-con {
  width: 538px;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 50px;

  font-size: 22px;
  font-weight: bold;
}

main {
  box-shadow: 0 0 3px 0 rgba(0,0,0,.3);
  margin: 0 10px;
  padding: 0  15px 15px;
}

.btn-row {
  display: flex;
  justify-content: space-around;
  border-collapse: collapse;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;

  border-right: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb;
}

.btn:last-child {
  border-right: none;
}

</style>
