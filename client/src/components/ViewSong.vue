<template>
  <v-layout columns>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <panel title="Songs">
          <v-btn
          slot="action"
          :to="{name: 'songs-create'}"
          fab
          class="cyan accent-1"
          light
          small
          absolute
          right
          middle
          >
            <v-icon>
              add
            </v-icon>
          </v-btn>
          <div
            v-for="song in songs"
            class="song"
            :key="song.id">
            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                  {{ song.title }}
                </div>
                <div class="song-artist">
                  {{ song.artist }}
                </div>
                <div class="song-album">
                  {{ song.album }}
                </div>
                <v-btn
                dark
                class="cyan"
                :to="{
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                }">
                </v-btn>
              </v-flex>

              <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl" />
              </v-flex>
            </v-layout>
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
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title {
    font-size: 30px;
  }
  .song-artist {
    font-size: 24px;
  }
  .song-album {
    font-size: 20px;
  }
  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
