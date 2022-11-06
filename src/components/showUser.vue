<template>
  <div class="show-user" v-if="show" @click="closedUser">
    <div class="show-user__wrapper" @click.stop>
      <h4 class="user-card__firstName">First name: {{user.fullName[1]}}</h4>
      <h4 class="user-card__lastName">Last name: {{user.fullName[0]}}</h4>
      <h4 class="user-card__email">email: {{user.email}}</h4>
      <a :href="user.website" class="user-card__websait">website: {{user.website}}</a>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'show-user',
  props: {
    user: {
      type: Object,
      default: require
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closedUser ()
    {
      this.$emit('update:show', false)
    }
  }
  }
</script>

<style lang="scss" scoped>
  .show-user {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(5, 5, 5, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    &__wrapper {
      height: 300px;
      width: 250px;
      background: white;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
  }
</style>