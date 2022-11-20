<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="form-group row">
        <div class="col-lg-12">
          <div class="card mb-4">
            <div class="card-body">
              <div class="form-group row">
                <label for="name" class="col-sm-3 col-form-label mb-0">Tên đầy đủ</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="name" />
                </div>
              </div>
              <hr />
              <div class="form-group row">
                <label for="Email" class="col-sm-3 col-form-label mb-0">Email</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="Email" />
                </div>
              </div>
              <hr />
              <div class="form-group row">
                <label for="Phone" class="col-sm-3 col-form-label mb-0">Phone</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="Phone" />
                </div>
              </div>
              <hr />
              <div class="form-group row">
                <label for="Địa chỉ" class="col-sm-3 col-form-label mb-0">Địa chỉ</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="Địa chỉ" />
                </div>
              </div>
              <div class="form-group row">
                <div class="form-group d-flex justify-content-end">
                  <button class="btn btn-primary mt-5 mb-0">Đặt chổ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    if (route.params.name == "admin") {
      store.commit("login", { user_id: 0 });
    } else {
      store.commit("login", { user_id: route.params.id });
    }
  },
};
</script>
