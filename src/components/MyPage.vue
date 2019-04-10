<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>computed</h1>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <h1>v-model and watch</h1>
        <div id="watch-example">
          <p>Ask a yes/no question:
            <input v-model="question">
          </p>
          <p>{{ answer }}</p>
        </div>
        <h1>v-if and v-else</h1>
        <div v-if="Math.random() > 0.5">
          Now you see me
        </div>
        <div v-else>
          Now you don't
        </div>
        <h1>Display filter or sort result</h1>
        <div>{{ numbers }}</div>
        <font v-for="(n,index) in evenNumbers" :key="index">{{ n }} </font>
        <h1> use v-for and v-if simultaneously </h1>
        <!-- 以下三種方法 比較 -->
        {{ todos }}
        <!-- 會有五個 li  -->
        <!-- <li v-for="(item,index) in todos" :key="index">
          <span v-if="item.isComplete">{{ item.todo }}</span>
        </li> -->
        <!-- 官方不推薦同時使用 v-for and v-if -->
        <!-- <li v-for="(item,index) in todos"  v-if="item.isComplete" :key="index">
          <span>{{ item.todo }}</span>
        </li> -->
        <!-- computed 輸出陣列後再輸出 -->
        <li v-for="(item,index) in completedTodos" :key="index">
          <span>{{ item.todo }}</span>
        </li>
        <h1>v-on example</h1>
        <button @click.exact="counter += 1">monse click +1</button>
        <button @keyup.enter="counter += 1">keyboard enter +1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <MyProps title="Why Vue is so fun"></MyProps>
    </div>
</template>

<script>
import MyProps from './MyPageProps.vue'
export default {
  name: 'HelloWorld',
  // 一個組件的 data 選項必須是 function
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Hello',
      question: '',
      answer: 'I can not answer question',
      numbers: [1, 2, 3, 4, 5],
      todos: [
        {todo: '1', isComplete: true},
        {todo: '2', isComplete: false},
        {todo: '3', isComplete: true},
        {todo: '4', isComplete: true},
        {todo: '5', isComplete: false}
      ],
      counter: 0
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
    completedTodos: function () {
      return this.todos.filter(function (todo) {
        return todo.isComplete === true
      })
    }
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to type question...'
    }
  },
  components: {
    MyProps
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
