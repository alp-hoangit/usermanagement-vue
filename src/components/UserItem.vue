<template>
  <tr>
    <td>
      <img :src="user.avatar" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>{{ user.age }}</td>
    <td>
      <label
        v-for="(lang, index) in user.programmingLanguage"
        :key="index"
        class="badge badge-gradient-primary mr-2"
        >{{ lang }}</label
      >
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button
        @click="handleRemoveUser(user.id)"
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
        @click="handleOpenModalEdit"
        type="button"
        class="btn btn-gradient-info btn-icon-text"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>
  <teleport to="#app">
    <app-modal :isOpen="isModalEdit" :handelCloseModal="handleCloseModalEdit">
      <form-user :userInfo="user"></form-user>
    </app-modal>
  </teleport>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");
import FormUser from "./FormUser.vue";
export default {
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      handleRemoveUser: "removeUserAction",
    }),
    handleCloseModalEdit() {
      this.isModalEdit = false;
    },
    handleOpenModalEdit() {
      this.isModalEdit = true;
    },
  },
  data() {
    return {
      isModalEdit: false,
    };
  },
  components: {
    FormUser,
  },
};
</script>

<style></style>
