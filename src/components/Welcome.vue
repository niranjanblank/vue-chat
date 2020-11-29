<template>
  <v-container>
        <v-card
        class="mx-auto my-16 pa-16"
        max-width="550" elevation="2"
        outlined
        >
            <v-card-title class="green--text text-sm-h1 text-h3 align-center justify-center">Welcome</v-card-title>
            <v-card-text>
              <v-form ref='form' @submit.prevent="enterChat" lazy-validation>
                <v-text-field v-model="name" label="Enter Your Name" required :rules="inputRules"></v-text-field>
                <div class=" button-container">
                <v-btn class="success mt-5" @click="enterChat">
                  Enter Chat
                </v-btn>
                </div>

              </v-form>
            </v-card-text>
          </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Welcome',

    data(){
      return{
          name: "",
          inputRules:[op=>op.length>=3||'Minimum Name Required is 3 ']
      }
    },
    methods:
    {
      enterChat(){
          if(this.$refs.form.validate()){
              console.log(`Entered Chat:${this.name}`)
            this.$router.push({name:'Chat',params: {name: this.name}})
      
        }
      }
    }
  }
</script>
<style scoped>
.button-container{
  display:flex;
  justify-content: center;
 
}
</style>
