<template>
  <v-layout columns>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
          name="tab-tracker-form"
          autocomplete="off"
        >
          <v-text-field
            label="Email"
            v-model="email"
          >
          </v-text-field>
          <br>
          <v-text-field
            type="password"
            label="Password"
            v-model="password"
            autocomplete="new-password"
          >
          </v-text-field>
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn dark class="cyan" @click="register">Register</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
