<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
            v-model="newUser.name"
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            placeholder="Age"
            v-model="newUser.age"
          />
        </div>
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input
            type="text"
            class="form-control"
            id="avatar"
            placeholder="avatar"
            v-model="newUser.avatar"
          />
        </div>
        <div class="form-group">
          <label for="">Programming Language : </label>
          <div class="form-row-flex">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="newUser.programmingLanguage"
                  value="JAVASCRIPT" />
                JavaScript <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="newUser.programmingLanguage"
                  value="JAVA"
                  type="checkbox"
                  class="form-check-input" />
                Java <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="newUser.programmingLanguage"
                  value="PHP"
                  type="checkbox"
                  class="form-check-input" />
                PHP <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="newUser.programmingLanguage"
                  value="PYTHON"
                  type="checkbox"
                  class="form-check-input" />
                Python <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="newUser.programmingLanguage"
                  value="C#"
                  type="checkbox"
                  class="form-check-input" />
                C# <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="newUser.programmingLanguage"
                  value="C/C++"
                  type="checkbox"
                  class="form-check-input" />
                C/C++ <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Nam"
                  v-model="newUser.gender" />
                Nam <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Nữ"
                  v-model="newUser.gender" />
                Nữ <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Khác"
                  v-model="newUser.gender" />
                Khác <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Type User : </label>
          <div class="col-sm-9">
            <select class="form-control" v-model="newUser.type">
              <option value="ADMIN">Admin</option>
              <option value="CLIENT">Client</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            rows="4"
            v-model="newUser.description"
          ></textarea>
        </div>
        <button
          @click.prevent="handleSubmit(newUser)"
          type="submit"
          class="btn btn-gradient-primary mr-2"
        >
          Submit
        </button>
        <button class="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  data() {
    return {
      newUser: {
        id: "",
        name: "",
        avatar: "",
        age: "",
        description: "",
        programmingLanguage: [],
        gender: "Nam",
        type: "CLIENT",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (this.userInfo) {
        this.handleUpdateUser(this.newUser);
      } else {
        this.handleAddUser(this.newUser);
      }
    },
    ...mapActions({
      handleAddUser: "addUserAction",
      handleUpdateUser: "updateUserAction",
    }),
  },
  created() {
    // chuyển đổi props thành data
    if (this.userInfo) {
      this.newUser = { ...this.userInfo };
    }
  },
};
</script>

<style>
.form-row-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
