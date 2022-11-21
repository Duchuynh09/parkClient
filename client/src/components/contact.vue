<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ localPark_name }}</h5>
      <div class="card-text">
        Thời gian bắt đầu:
        <p>
          {{
              time.toLocaleDateString() + " vào lúc " + time.toLocaleTimeString()
          }}
        </p>
      </div>
      <div class="d-flex justify-content-end">
        <RouterLink v-if="this.$store.state.admin" :to="{ path: `/admin/profile/${localPark_id}` }"
          class="btn btn-primary">{{localPark_id}} Xem chi tiết ...</RouterLink>
        <RouterLink v-else :to="{ path: `/user/profile/${localPark_id}` }" class="btn btn-primary">Xem chi tiết ...
        </RouterLink>
      </div>
    </div>
  </div>



</template>
<script>
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
export default {
  props: {
    localPark_id: { type: String },
    localPark_name: { type: String },
    timeRent: { type: Date },
  },
  data() {
    return { user:this.$store.state.user_rent};
  },
  emits:['oke'],
  components: { RouterLink },
  setup(props) {
    const time = new Date()
    time.setTime(props.timeRent)
    const store = useStore()
    store.commit('userRent', { user: props.localPark_id })
    return {time};
  }
};
</script>
