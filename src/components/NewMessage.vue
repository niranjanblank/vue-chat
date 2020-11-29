<template>
     <v-form @submit.prevent="addMessage" class="mt-8">
            <v-text-field outlined rounded label="Enter Message" v-model="newMessage" 
            prepend-inner-icon="mdi-message"></v-text-field>
    </v-form>
</template>

<script>
import db from '@/firebase/init'
export default {
    name:'NewMessage',
    props:['name'],
    data(){
        return{
            newMessage: ""
        }
    },
    methods:{
        addMessage(){
            
           if(this.newMessage.length>0)
           {
                console.log(this.newMessage,this.name, Date.now(),this.newMessage.length)
                 const message = {
                name: this.name,
                message: this.newMessage,
                timestamp: Date.now()
                 }
                db.collection('messages').add(message).then(()=>{
                    
                    console.log('Added to db')
                   
                })
                 this.newMessage=""
            
           }
           

        }
    }
}
</script>