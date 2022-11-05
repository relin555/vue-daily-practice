<template>
  <form class="form" @submit.prevent="formGet">
    <my-input placeholder="first name" v-model.trim="formData.firstName"/>
    <my-input placeholder="last name" v-model.trim="formData.lastName"/>
    <my-input placeholder="email" v-model.trim="formData.email"/>
    <my-input placeholder="website" v-model.trim="formData.website"/>
    <my-button>create user</my-button>
  </form>
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
        lastName: '',
        firstName: '',
        email: '',
        website: ''
        }
      }
  },
  methods: {
    formGet ()
    { 
      this.formData.id = Date.now()
      this.formData.name = this.formData.firstName + ' ' + this.formData.lastName
      this.formData.fullName = [this.formData.lastName,this.formData.firstName]
      this.$emit( 'newUser', this.formData )
      this.formData = {
        lastName: '',
        firstName: '',
        email: '',
        website: ''
      }
    }
  }
  }
</script>

<style lang="scss" scoped>
  .form {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
  }
  input {
    margin-bottom: 10px;
  }
</style>