<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="song.title"
          >
        </v-text-field>
        <v-text-field
            label="Artist"
            required
            :rules="[required]"
            v-model="song.artist"
          >
        </v-text-field>
        <v-text-field
            label="Genre"
            v-model="song.genre"
          >
        </v-text-field>
        <v-text-field
            label="Album"
            required
            :rules="[required]"
            v-model="song.album"
          >
        </v-text-field>
        <v-text-field
            label="Album Image URL"
            required
            :rules="[required]"
            v-model="song.albumImageUrl"
          >
        </v-text-field>
        <v-text-field
            label="Youtube ID"
            v-model="song.youtubeId"
          >
        </v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Tabs and Lyrics" class="ml-2">
        <v-text-field
          label="Tab"
          required
          :rules="[required]"
          multi-line
          v-model="song.tab"
        ></v-text-field>
        <v-text-field
          label="Lyrics"
          required
          :rules="[required]"
          multi-line
          v-model="song.lyrics"
        ></v-text-field>
      </panel>

      <v-btn
        dark
        class="cyan"
        @click="create">
        Create Song
      </v-btn>
      <v-alert
        class="ml-4"
        :value="error"
        transition="scale-transition"
        type="error"
        error>
        {{error}}
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required camp'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => {
          console.log(key)
          return !!this.song[key]
        })

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields'
        return
      }

      console.log(areAllFieldsFilledIn)

      try {
        await SongsService.post(this.song)
        this.$router.push(
          {name: 'songs'}
        )
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
