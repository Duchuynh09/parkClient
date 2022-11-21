<template>
  <UserForm :user="user"/>
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import {  reactive, computed } from "vue";
import UserForm from "../components/userForm.vue";
export default {
  components: {
    UserForm,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const user = reactive(computed(()=>{
      if(!store.state.user_rent){
        return {}
      }
        return store.state.user_rent;
    }))
    if (route.params.name == "admin") {
      store.commit("login", { user_id: 0 });
      store.commit("userRent",{user: route.params})
    } else {
      store.commit("login", { user_id: route.params.id });
    }
    return {user}
  }
};
</script>

<style></style>
