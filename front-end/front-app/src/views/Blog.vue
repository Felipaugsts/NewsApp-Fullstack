<template>
    <div> 

    <h1 v-for="user in users" :key="user"> {{user.name}} </h1> 
    <p> </p>
    
    </div>
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
          name,
          title,
          post,
          to,
          header,
          
        }
      }
      `
    }
  });
  this.users = result.data.data.users;
  
}



}
</script>>
