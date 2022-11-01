<template>
  <div class="create-user" v-if="show" @click="closedShow">
    <div class="create-user__wrapper" @click.stop>

    </div>
  </div>
</template>

<script>
export default {
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
    }
  }
</style>