<template>
  <h1> {{msg}} </h1>
  <div class="hello">
    <button @click="$emit('increment-c', 2)"> Increment </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeUnmount(){

  },
  unmounted(){
  },
  props: {
    msg: String,
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
