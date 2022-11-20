<template>
  <div class="col-4 col-md-3 col-xl-2">
    <button @click="onLick" ref="btn" class="park btn" :class="[
      Park.rented
        ? [
            user.id == Park.user.id
              ? 'btn-outline-info'
              : 'btn-outline-danger',
          ]
        : '',
      'btn-outline-success',
    ]" 
    :disabled="isDisabled"
    >
      <div v-if="Park.rented">Đã thuê</div>
      <div v-else>Còn trống</div>
    </button>
  </div>
</template>

<script>
import { computed, ref, reactive, h } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTippy } from "vue-tippy";
import contact from "../components/contact.vue";
import { useStore } from "vuex";
export default {
  props: {
    Park: { type: Object, require: true },
    areaId:{type:String,required:true}
  },
  emits: ["onRent"],
  data() {
    return { _user: this.$store.state.user };
  },
  methods: {
    dialog() {
      if (this._user.name) {
        if (!this.$store.state.admin) {
          let t = new Date()
          this._user.time = t.getTime()
          if (confirm("Bạn có muốn đặt chổ này?")) {
            this.$emit("onRent", this._user, this.Park);
          }
        } else {
          this.$router.push({ name: "editUser", params: { name: "admin" } });
        }
      } else {
        if (confirm("Bạn cần đăng nhập ngay")) {
          this.$router.push({ name: "login" });
        }
      }
    },
    onLick() {
      if (this.Park.rented) {
        if (this.$store.state.admin) {
          this.$router.push({ name: "editUser", params: { name: "admin" } });
        } else {
          this.$router.push({ path: `/admin/profile/${this.Park.user.id}` });
        }
      } else { this.dialog() }
    },
    unRent(){
      console.log(this.$emits);
    }
  },
  setup(props, context) {
    var cnt=[];
    const store = useStore();
    const btn = ref();
    const user = reactive(store.state.user);
    // Function
    var isDisabled = computed(() => {
      if (props.Park.rented) {
        if (store.state.admin) {
          return false;
        } else {
          return user.id == props.Park.user.id ? false : true;
        }
      }
      return false;
    });
    // tippy
    if (props.Park.rented) {
      store.state.parkRent.push({areaId:props.areaId,park:props.Park})
      cnt = h(contact, {
        timeRent: `${props.Park.user.time}`,
        localPark_id: `${props.Park.user.id}`,
        localPark_name: `${props.Park.user.name}`,
      });
      useTippy(btn, {
      content: cnt,
      duration: 1,
      interactive: true,
      interactiveBorder: 2,
      placement: "top",
      zIndex: 999,
    });
    } 
    

    // return
    return { btn, store, isDisabled, user };
  },
};
</script>

<style>
.park {
  width: 70%;
  height: 120px;
  margin-bottom: 20px;
}
</style>
