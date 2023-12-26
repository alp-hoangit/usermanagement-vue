<template>
  <tbody>
    <user-item
      v-for="(user, index) in userListBySearchName"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState, mapActions } = createNamespacedHelpers("user");
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  computed: {
    loading() {
      return false;
    },
    ...mapState({
      userList: (state) => state.userList,
      //// Cũng có thể dùng cách này:
      // userList: 'userList',
    }),
    //// Cũng có thể dùng cách này:
    // ...mapState(["userList"]),
    ...mapGetters({
      userListFilterMale: "userListByMale",
      userListBySearchName: "userListBySearchName",
    }),
  },
  methods: {
    ...mapActions({
      getAllUser: "getAllUserAction",
    }),
  },
  created() {
    this.getAllUser();
  },
};
</script>

<style></style>
