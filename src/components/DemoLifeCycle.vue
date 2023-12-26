<template>
  <div>
    <h1>DemoLifeCycle Component</h1>
    <input ref="myInput" type="text" />
    <p>{{ count }}</p>
    <button @click="handleIncrement" class="btn btn-success">Increment</button>
    <child-life-cycle v-if="count % 2 === 0"></child-life-cycle>
  </div>
</template>

<script>
import ChildLifeCycle from "./ChildLifeCycle.vue";
export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    ChildLifeCycle,
  },
  methods: {
    handleIncrement() {
      this.count++;
    },
  },
  beforeCreate() {
    console.log("Before Create", this.count);
  },
  created() {
    console.log("Created", this.count);
    this.count = 5;
  },
  beforeMount() {
    console.log("Before Mount", this.$refs.myInput);
  },
  mounted() {
    console.log("Mounted", this.$refs.myInput);
    this.$refs.myInput.focus();
  },
  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    console.log("Updated");
  },
};
</script>

<style>
</style>