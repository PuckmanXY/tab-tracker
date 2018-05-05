<template>
  <v-toolbar dark fixed class="cyan">
    <v-toolbar-title class="mr-4">
      TabTracker
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->
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
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
