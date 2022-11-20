<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
    <router-link v-if="user_active.name" :to="{ name: 'user', params: { id: `${user_active.id}` } }"
      class="navbar-brand text-center">Home </router-link>
    <router-link v-else :to="{ path: '/' }" class="navbar-brand text-center">Home </router-link>
    <a v-if="user_active.name" class="d-flex login">
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
          data-bs-toggle="dropdown" aria-expanded="false" v-if="user_active.id == 0" >{{ user_active.name}} <i class="fa-solid fa-circle-user"></i></a>
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
          data-bs-toggle="dropdown" aria-expanded="false" v-else >{{ user_active.name }}     <i class="fa-solid fa-circle-user"></i></a> 
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="/">logut</a></li>
        </ul>
      </div>
    </a>
    <a v-else class="d-flex login" @click="goToLogin">Đăng nhập<i class="fa-solid fa-circle-user"></i> </a>

  </nav>
</template>
<script>
export default {
  data() {
    var user_active=this.$store.state.user;
    return {user_active
    };
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
  },
  setup() {
    // const store = useStore();
    // // const user_active = reactive(store.state.user)
    // var url = 
    // return { user_active ,url}
  }
};
</script>
<style>
.login {
  cursor: pointer;
}
</style>
