<template>
  <input class="input" @input="updateInput" :value="modelValue" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [ String, Number ],
  },
  methods: {
    updateInput ( event )
    {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .input {
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    outline: none;
    width: 200px;
  }
</style>