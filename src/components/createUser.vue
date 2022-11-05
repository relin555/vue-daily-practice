<template>
  <div class="create-user" v-if="show" @click="closedShow">
    <div class="create-user__wrapper" @click.stop>
      <form-component @newUser="createNewUser"/>
    </div>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue'
export default {
  components: { FormComponent },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data ()
    {
      return {
         
      }
  },
  methods: {
    closedShow ()
      {
          this.$emit('update:show', false)
    },
    createNewUser (obj)
    {
      this.$emit( 'createNewUser', obj )
    }
    }
  }
</script>

<style lang="scss" scoped>
  .create-user {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    &__wrapper {
      height: 300px;
      width: 300px;
      background: white;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
    }
  }
</style>