<template>
  <v-layout columns>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <panel title="Songs">
          <div
            v-for="song in songs"
            :key="song.id">
              {{song.title}} -
              {{song.artist}} -
              {{song.album}}
          </div>
        </panel>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>
<style scoped>

</style>
