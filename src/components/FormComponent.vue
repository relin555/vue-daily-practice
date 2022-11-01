<template>
  <div class="form" @submit.prevent="formGet">
    <my-input v-model.trim="formData.data"/>
    <my-button style="margin-left: 20px">search post</my-button>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
import MyInput from '@/components/UI/MyInput.vue'
  export default {
  components: { MyInput, MyButton },
  data ()
  {
    return {
      formData: {
          data: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form {
    margin-bottom: 50px;
  }
</style>