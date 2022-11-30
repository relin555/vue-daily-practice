<template>
  <form class="form" @submit.prevent="formGet">
    <my-input :class="{'input-disactive': firstNameDisactive}" placeholder="first name" v-model.trim="formData.firstName"/>
    <my-input :class="{'input-disactive': lastNameDisactive}" placeholder="last name" v-model.trim="formData.lastName"/>
    <my-input  :class="{'input-disactive': emailDisactive}" placeholder="email" v-model.trim="formData.email"/>
    <my-input :class="{'input-disactive': websiteDisactive}" placeholder="website" v-model.trim="formData.website"/>
    <my-button class="btn-active" :disabled="isDisabled" :class="{'btn-disabled': isDisabled}">create user</my-button>
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
        lastName: null,
        firstName: null,
        email: null,
        website: null
      },
      isDisabled: true,
      firstNameDisactive: false,
      lastNameDisactive: false,
      websiteDisactive: false,
      emailDisactive: false
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
        lastName: null,
        firstName: null,
        email: null,
        website: null
      }
    }
  },
  watch: {
    formData: {
      handler ( newValue, oldValue )
      {
        if ( (newValue.lastName !== '' && newValue.lastName !== null) && (newValue.firstName !== '' && newValue.firstName !== null) && (newValue.email !== '' && newValue.email !== null) && (newValue.website !== '' && newValue.website !== null))
        {
          this.isDisabled = false
         
        } else
        {
          this.isDisabled = true
        }
        if ( newValue.firstName === '' )
        {
          this.firstNameDisactive = true
        } else
        {
          this.firstNameDisactive = false
        }
        if ( newValue.lastName === '' )
        {
          this.lastNameDisactive = true
        } else
        {
          this.lastNameDisactive = false
        }
        if ( newValue.email === '' )
        {
          this.emailDisactive = true
        } else
        {
          this.emailDisactive = false
        }
        if ( newValue.website === '' )
        {
          this.websiteDisactive = true
        } else
        {
          this.websiteDisactive = false
        }
      },
      deep: true
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
  .btn-active {
    background: greenyellow;
  }
  .btn-disabled  {
    background: red;
    color: black;
    cursor: not-allowed;
  }
  .input-disactive {
    border: 1px solid red;
  }
</style>