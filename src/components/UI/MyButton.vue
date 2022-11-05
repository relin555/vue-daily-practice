<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'my-button'
  }
</script>

<style lang="scss" scoped>
  .button {
    border: 1px solid grey;
    padding: 10px 15px;
    border-radius: 5px;
    outline: none;
    background: inherit;
    cursor: pointer;
  }
</style>