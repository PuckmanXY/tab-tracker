<template>
  <v-toolbar dark fixed class="cyan">
    <v-toolbar-title class="mr-4">
      TabTracker
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn
          to="songs"
          flat
          dark>
          Browse
        </v-btn>
      </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
      v-if="!$store.state.isUserLoggedIn"
      to="login"
      flat
      dark>
        Login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        to="register"
        flat
        dark>
        Sign Up
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        @click="logout"
        to="/"
        flat
        dark>
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style scoped>
</style>
