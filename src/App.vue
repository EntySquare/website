<template>
  <v-app>
    <v-app-bar app color="primary">
      <section class="max-display-width d-flex align-center">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </div>

        <v-spacer></v-spacer>

        <v-menu
          bottom
          open-on-hover
          transition="scale-transition"
          :offset-y="true"
        >
          <template v-slot:activator="{ on, attrs }">
            <div color="transparent" elevation="0" v-bind="attrs" v-on="on">
              Dropdown
            </div>
          </template>

          <v-list rounded>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2">Latest Release</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </section>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>

    <v-footer class="black" height="200px">
      <section class="max-display-width d-flex align-center white--text">
        footer
      </section>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data () {
    return {
      items: [
        {
          title: '11',
        },
        {
          title: '22',
        },
      ],
    }
  },
}
</script>
