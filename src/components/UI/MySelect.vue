<template>
  <div class="select">
    <select class="select" v-model="modelValue" @change="changeOptions">
    <option disabled value=""></option>
    <option 
      v-for="option in options" 
      :key="option.value" 
      :value="option.value">
        {{option.name}}
      </option>
  </select>
  </div>
</template>

<script>
  export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOptions ( event )
    {
      this.$emit('update:modelValue', event.target.value)
    }
  }
  }
</script>

<style lang="scss" scoped>
  select {
    appearance: none;
    position: absolute;
    border: none;
    width: 100%;
    outline: none!important;
    background: none;
  }
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  .select::after {
    content: '';
    border-top: 8px solid #222;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    position: absolute;
    z-index: 2;
    top: 14px;
    right: 10px;
  }
</style>