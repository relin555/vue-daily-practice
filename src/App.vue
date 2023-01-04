<template>
  <div>
    <header class="header" style="margin-bottom: 20px">
      <my-button @click="$router.push('/')">home page</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/user')">user page</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/cardHolder')">card holder</my-button>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
import FormComponent from './components/FormComponent.vue';
  export default {
  components: { MyButton, FormComponent },
    
  }
</script>

<style lang="scss" scoped>
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>