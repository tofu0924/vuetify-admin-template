<template>
  <v-app>
    <v-system-bar
      color="primary"
      dark
      height="100px"
      app
    >
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
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-system-bar>
    <v-navigation-drawer
      color="secondary"
      app
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-checkbox
            v-model="item.val"
            value
          ></v-checkbox>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-btn
            :color="item.color"
          ></v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main
      
      >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', color: '#ff00ff', val: true},
          { title: 'Photos', icon: 'mdi-image', color: '#12ff12', val: true },
          { title: 'About', icon: 'mdi-help-box', color: '#feff0f', val: false },
        ],
        right: null,
  }),
};
</script>
