<template>
  <User :user="user" />
</template>
<script>
import { useRouter,useRoute } from 'vue-router'
import { useStore } from "vuex";
import User from "../components/userInfo.vue";
export default {
  components: {
    User,
  },
  setup(){
    const route=useRoute()
    const store = useStore()  
    store.commit('isAdmin',{id:route.params.id})
  }
};
</script>

<style></style>
