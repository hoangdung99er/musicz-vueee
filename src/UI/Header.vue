<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'Home' }"
        exact-active-class="no-active"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
          <li v-if="!userLoggedIn">
            <a class="px-2 text-white" href="#" @click="showAuthModel"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'Manage' }"
                >Manage</router-link
              >
            </li>
            <li>
              <a @click.prevent="signout" class="px-2 text-white" href="#"
                >Logout</a
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["userLoggedIn"]),
  },
  watch: {
    userLoggedIn() {
      if (this.$route.meta.requiresAuth) {
        return this.$router.push({ name: "Home" });
      }
      return null;
    },
  },
  methods: {
    ...mapMutations(["showAuthModel"]),
    ...mapActions(["signout"]),
    // signout() {
    //   this.$store.dispatch("signout", {
    //     router : this.$router,
    //     route : this.$route
    //   })
    // }
  },
};
</script>

<style></style>
