<template>
  <UserForm />
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import UserForm from "../components/userForm.vue";
export default {
  components: {
    UserForm,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    store.commit("isAdmin", { id: route.params.id });
  },
};
</script>

<style></style>
