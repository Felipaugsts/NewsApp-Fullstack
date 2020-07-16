<template>
<v-app class="text-center">  
<div>
<h1 class="font-weight-light"> App news</h1>
</div>
<v-layout wrap class="justify-center pa-1"> 
<v-flex md6 lg4 sm8 xs12 class="pa-5" v-for="user in users" :key="user"> 
<v-card
    class="mx-auto"
    :href="user.src"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{user.title}}</div>
        <v-list-item-title class="headline mb-3">{{user.header}}</v-list-item-title>
        <v-list-item-subtitle>{{user.post}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="150"
        color="grey"
        class="rounded"
      > 

      <img
        :src="user.img"
        alt="John"
      >

    </v-list-item-avatar>
      
    </v-list-item>

    <v-card-actions>
      <v-btn :href="user.src" small outlined text>Continue Lendo</v-btn>
    </v-card-actions>
  </v-card>
</v-flex>
</v-layout>


</v-app>
</template>
<script>
import axios from 'axios'
export default {

data() { 
  return { 
    users: [],

  }
},
async mounted() {
  const result = await axios({ 
    method: "POST",
    url: "http://localhost:4000/",
    data: {
      query: `
      {
        users { 
          id, 
          type, 
          title,
          post,
          src,
          header,
          img
          
        
        }
      }
      `
    }
  });
  this.users = result.data.data.users;
  
}



}
</script>>
