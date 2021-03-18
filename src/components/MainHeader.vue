<template>
  <v-app-bar app color="primary" absolute>
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

      <div text rounded class="black--text">
        <router-link to="/">首页1111</router-link>
      </div>

      <v-spacer></v-spacer>

      <v-menu bottom transition="scale-transition" :offset-y="true">
        <template v-slot:activator="{ on, attrs }">
          <div color="transparent" elevation="0" v-bind="attrs" v-on="on">
            Dropdown
          </div>
        </template>

        <v-list rounded>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>
              <router-link :to="item.path">{{ item.title }}</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <v-btn text rounded class="yellow red--text">
        <router-link to="login">Login</router-link>
      </v-btn>

      <v-btn text rounded class="yellow red--text">
        <router-link to="register">Register</router-link>
      </v-btn>
    </section>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      items: [
        {
          title: 'Foo',
          path: 'foo',
        },
        {
          title: 'Bar',
          path: 'bar',
        },
      ],
    }
  },
}
</script>

<style></style>
