<template>
  <div class="photo-set" v-if="show" @click="hidePhoto">
    
    <div class="photo-set__wrapper" @click.stop>
      <div class="photo-set__closed-wrapper">
        <div class="photo-set__closed" @click="hidePhoto">x</div>
      </div>
      <h4 class="title">
        {{ photo.title }}
      </h4>
      <img :src="photo.url" alt="ptoto.title">
    </div>
  </div>
</template>

<script>
  export default {
  props: {
      photo: {
      type: Object,
      default: require
      },
      show: {
        type: Boolean,
        default: false
      }
  },
  methods: {
    hidePhoto ()
    {
        this.$emit('update:show', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .photo-set {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    &__wrapper {
      margin: auto;
      background: white;
      border-radius: 5px;
      padding: 12px;

    }
    &__closed-wrapper {
      display: flex;
      justify-content: flex-end;
    }
    &__closed {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border: 1px solid teal;
      border-radius: 50%;
    }
  }
</style>