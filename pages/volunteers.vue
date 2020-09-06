<template>
  <v-container grid-list-xl fluid>
    <h4>
      <i class="fa fa-users"></i>
      Volunteers
    </h4>

    <v-data-table dense :items="content" :headers="headers" item-key="name" class="elevation-1" >
      <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.first_name }}</td>
          <td class="text-xs-left">{{ props.item.last_name }}</td>
          <td class="text-xs-left">{{ props.item.email }}</td>
          <td class="text-xs-left">{{ props.item.zip }}</td>
          <td class="text-xs-left">{{ props.item.mission_statement }}</td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    content: [
      {
        email: "b@ca.com",
        first_name: "bryan",
        last_name: "cruz",
        mission_statement: "",
        zip: "00959",
      },
    ],
    headers: [
      {
        text: "First Name",
        align: "start",
        sortable: false,
        value: "first_name",
      },
      { text: "Last Name", value: "last_name" },
      { text: "Email", value: "email" },
      { text: "ZipCode", value: "zip" },
      { text: "Mission Statement", value: "mission_statement" },
    ],
  }),
  mounted() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start();
      var data = await this.$axios.$get("/company/companyusersmatches");
      this.content = data.users;
      console.log(this.content)
      // setTimeout(() => , 500);
      this.$nuxt.$loading.finish();
    });
  },
};
</script>

<style scoped>
</style>
