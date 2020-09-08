<template>
  <v-container grid-list-xl fluid>
    <h4>
      <i class="fa fa-calendar"></i>
      Events
    </h4>
    <v-data-table dense :items="content" :headers="headers" item-key="name" class="elevation-1" >
      <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.eventName }}</td>
          <td class="text-xs-left">{{ formatDate(props.item.eventDate) }}</td>
          <td class="text-xs-left">{{ props.item.address }}</td>
          
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search found no results.
        </v-alert>
    </v-data-table>
    <br/>
    <h4>
      Add an Event
    </h4>
    <v-form>
      <v-text-field
          v-model="newEvent.eventName"
          label="Event Name"
          required
      ></v-text-field>

      <v-text-field
          v-model="newEvent.address"
          label="Event Address"
          required
      ></v-text-field>

      <v-row justify="center">
        <v-date-picker v-model="newEvent.eventDate"></v-date-picker>

        <v-time-picker v-model="newEvent.time"></v-time-picker>
      </v-row>

       <v-btn
                color="primary"
                class=""
                @click="addEvent"
            >
                Add Event
        </v-btn>
    </v-form> 

  </v-container>
</template>

<script>
// import Calendar from "Vuetify/es5/components";
export default {
  layout: "dashboard",
  // components: [Calendar],
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    newEvent: {
      eventName: '',
      eventDate: new Date().toISOString().substr(0, 10),
      address: '',    
      time: null  
    },
    content: [
      {
        eventName: "Community Lunch",
        eventDate: new Date('2020-09-22'),
        address: "303 Windsor St, Reading, PA 19601",
      },
    ],
    headers: [
      {
        text: "Event Name",
        align: "start",
        sortable: false,
        value: "eventName",
      },
      { text: "Date", value: "eventDate" },
      { text: "Location", value: "address" },

    ],
  }),
  methods: {
    addEvent(){
      
      var date = new Date(this.newEvent.eventDate + ' ' + this.newEvent.time);
      
      console.log(date);
      
      this.content.push({eventName: this.newEvent.eventName,
      eventDate: date,
      address: this.newEvent.address});
    },
    formatDate(date){
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
    }
  }
};
</script>

<style scoped>
</style>
