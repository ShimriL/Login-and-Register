<template>
    <div class="d-flex justify-center align-center">
      <v-card
        class="mx-auto"
        max-width="344"
        title="User Registration"
      >
        <v-container>
          
          <v-text-field
            v-model="first"
            color="primary"
            label="First name"
            variant="underlined"
          ></v-text-field>
    
          <v-text-field
            v-model="last"
            color="primary"
            label="Last name"
            variant="underlined"
          ></v-text-field>
    
          <v-text-field
            v-model="email"
            color="primary"
            label="Email"
            variant="underlined"
          ></v-text-field>
    
          <v-text-field
            v-model="password"
            color="primary"
            label="Password"
            placeholder="Enter your password"
            variant="underlined"
          ></v-text-field>
    
          <v-checkbox
            v-model="terms"
            color="secondary"
            label="I agree to site terms and conditions"
          ></v-checkbox>
        </v-container>
    
        <v-divider></v-divider>
    
        <v-card-actions>
          <v-spacer></v-spacer>
    
          <v-btn color="success">
            Complete Registration
    
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      first: null,
      last: null,
      email: null,
      password: null,
      terms: false,
    }),
  }
  </script>
  <style>.d-flex {
    display: flex; /* Use flexbox */
  }
  
  .justify-center {
    justify-content: center; /* Center horizontally */
  }
  
  .align-center {
    align-items: center; /* Center vertically */
  }</style>
