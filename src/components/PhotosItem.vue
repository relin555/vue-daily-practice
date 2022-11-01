<template>
  <div class="photo" @click="openPhoto">
    <div class="photo__title-wrapper">
      <h4 class="photo__title">
      {{ photo.title }}
    </h4>
    </div>
    <img :src='photo.url' :alt="photo.title">
  </div>
</template>

<script>
  export default {
    props: {
      photo: {
        type: Object,
        default: require
      }
  },
  methods: {
    openPhoto ()
    {
      this.$emit('photo', this.photo)
    }    
  }
  }
</script>

<style lang="scss" scoped>
  .photo {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-right: 20px;
    border: 1px solid black;
    margin-bottom: 20px;
    padding: 10px;
    &__title-wrapper {
      height: 80px;
      margin-bottom: 20px;
    }
  }
  img {
    object-fit: none;
  }
</style>