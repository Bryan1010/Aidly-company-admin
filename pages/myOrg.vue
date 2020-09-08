<template>
    <v-container>
        <v-form>
            <v-text-field
                v-model="orgDetails.name"
                label="Organization Name"
                required
            ></v-text-field>

            <v-text-field
                v-model="orgDetails.main_email"
                label="Main Contact Email"
                required
            ></v-text-field>

            <v-text-field
                v-model="orgDetails.primary_phone"
                label="Primary Contact Phone"
                required
            ></v-text-field>

            <v-text-field
                v-model="orgDetails.ein"
                label="EIN"
                required
            ></v-text-field>

            <v-textarea
                v-model="orgDetails.mission_statement"
                label="Mission Statement"
                required
            ></v-textarea>
            <v-btn
                color="primary"
                class="mr-4"
                @click="updateCompany"
            >
                Update
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
export default {
    layout: "dashboard",
    data: () => ({
        orgDetails: {
            ein: '',
            main_email: '',
            mission_statement: '',
            name: '',
            primary_phone: '',
            id: 0
        }
    }),
    methods: {
        updateCompany: async function(e){
            this.$nuxt.$loading.start();
            var data = await this.$axios.$post("/company/update",
                this.orgDetails
            );
            this.$nuxt.$loading.finish();

        }
    },
    mounted() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start();
      var data = await this.$axios.$get("/company/update");
      this.orgDetails = data.companies;
      console.log(this.orgDetails)
      // setTimeout(() => , 500);
      this.$nuxt.$loading.finish();
    });
  },
}
</script>

<style>

</style>