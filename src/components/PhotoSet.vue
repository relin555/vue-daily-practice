<template>
  <div class="photo-set" v-if="show" @click="hidePhoto">
    <div class="photo-set__wrapper" @click.stop>
      <my-button 
        class="photo-set__btn photo-set__btn-next" 
        @click="nextPhoto" 
        v-if="arrayPhoto.length"> 
          next 
      </my-button>
      <my-button 
        class="photo-set__btn photo-set__btn-prew" 
        @click="prewPhoto" 
        v-if="arrayPhoto.length"> 
          prew 
      </my-button>
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
import MyButton from './UI/MyButton.vue'
  export default {
  components: { MyButton },
  props: {
    photo: {
      type: Object,
      default: require
    },
    show: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: require    
    },
    arrayPhoto: {
      type: Array,
      default: require
    }
  },
  methods: {
    hidePhoto ()
    {
        this.$emit('update:show', false)
    },
    nextPhoto ()
    {
      this.$emit('nextPhoto', this.photo)
    },
    prewPhoto ()
    {
      this.$emit('prewPhoto', this.photo)
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
      position: relative;
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
    &__btn {
      position: absolute;
      top: 50%;
    }
    &__btn-next {
      right: -20px;
    }
    &__btn-prew {
      left: -20px;
    }
  }
</style>