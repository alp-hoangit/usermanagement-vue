<template>
  <h1>Child Life Cycle</h1>
</template>

<script>
export default {
  mounted() {
    this.hello = setInterval(() => {
      console.log("Hello VueJS!");
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.hello);
    console.log("Before Unmount");
  },
  unmounted() {
    console.log("Unmount");
  },
};
</script>

<style>
</style>