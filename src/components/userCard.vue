<template>
  <div class="user-card" @click="openUser">
    <div class="user-card__wrapper">
      <h4 class="user-card__firstName">First name: {{user.fullName[1]}}</h4>
      <h4 class="user-card__lastName">Last name: {{user.fullName[0]}}</h4>
      <h4 class="user-card__email">email: {{user.email}}</h4>
      <a :href="user.website" class="user-card__websait">website: {{user.website}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user-card',
    props: {
      user: {
        type: Object,
        default: require
        }
  },
  methods: {
    openUser ()
    {
        this.$emit('userShow', this.user)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-card {
    border: 1px solid teal;
    width: 200px;
    height: 200px;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
</style>