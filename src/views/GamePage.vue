<template>
  <div class="game">
    <div class="game__inner">
      <my-input v-model="userName" placeholder="enter the name of the character"/>
      <my-button style="margin-top: 20px" @click="addNewUser">start game</my-button>
    </div>
    <div class="new-game">

    </div>
  </div>
</template>

<script>
import MyButton from '../components/UI/MyButton.vue'
import MyInput from '../components/UI/MyInput.vue'
  export default {
  components: { MyInput, MyButton },
  data ()
  {
    return {
      userName: '',
      newGame: false
        
      }
  },
  methods: {
    addNewUser ()
    {
      this.$router.push('/newGame')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .game {
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    &__inner {
      display: flex;
      flex-direction: column;
      
    }
  }
</style>