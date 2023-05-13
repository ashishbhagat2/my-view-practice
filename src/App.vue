<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld2 :msg="title" v-if="showChild" @increment-c="increment2"/>
  <div>
    <button class="bt1" @click="toggleChild"> ToggleChild </button>
  </div>
  <div> 
    <button @click="increment"> Count </button> 
    <h2> {{count}} </h2>
  </div>
  <div>
    <label> Enter the Count manually </label>
    <input type="text" v-model="count" />
  </div>
  <div>
    <h3 v-for="user in users" :key="user.id"> {{user.name}} </h3> 
  </div>
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  beforeCreate() {
  },
  created() {
  },


  components: {
    HelloWorld2 : HelloWorldVue
  },
  data() {
    return {
      title: "My view experiments",
      showChild: true,
      count: 0,      
    }
  },
  methods: {
    increment() {
      this.count = this.count +1;
    },
    increment2(n) {
      this.count = this.count+n;
    },
    toggleChild() {
      this.showChild = !this.showChild;
    }
  },
  watch: {
    count(val) {
      if(val>8) {
        alert ("Count has exceeded max value");
       this.count = 8;
      } 
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  display: inline-flex;
  margin: 20px;
  color: green;
}
.bt1 {
  margin-top: 20px;
}
</style>
