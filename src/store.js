import { createStore } from "vuex";

export const store = createStore( {
  state() {
    return {
      users: [
        {id:1, name: "Ram"},
        {id:2, name: "Shyam"}
      ]
    }
  }
})