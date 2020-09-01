<template>
  <v-toolbar color="primary" fixed dark app>
    <v-toolbar-title class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
    </v-toolbar-title>

    <v-toolbar-title>Welcome to Aidly Company Admin</v-toolbar-title>
    <!-- <v-text-field
      flat
      solo-inverted
      prepend-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>-->
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
import NotificationList from "@/components/widgets/list/NotificationList";
import Util from "@/util";

export default {
  name: "app-toolbar",
  components: {
    NotificationList,
  },
  data: function () {
    return {
      items: [
        {
          icon: "account_circle",
          href: "#",
          title: "Profile",
          click: (e) => {
            console.log(e);
          },
        },
        {
          icon: "settings",
          href: "#",
          title: "Settings",
          click: (e) => {
            console.log(e);
          },
        },
        {
          icon: "fullscreen_exit",
          href: "#",
          title: "Logout",
          click: this.handleLogout,
        },
      ],
    };
  },
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
    },
    handleLogout() {
      this.$router.push("/login");
    },
  },
};
</script>
