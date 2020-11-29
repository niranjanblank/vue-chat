<template>
    <v-container>
 
        <span class="green--text mx-auto text-h2 text-sm-h1 align-center justify-center"> Chat<span class="display-1">(Logged as: {{this.name}})</span> </span>
        <v-card   
    class="overflow-y-auto scroll"
    max-height="450"
    min-height="450"
  outlined v-chat-scroll>
            <v-card-text class="pa-0 pl-3" v-for="message in messages" :key="message.id">
              <v-card class="ma-2 pa-2" >
                <v-list-item class="pa-0" >
                    <v-list-item-content class="pa-0"> 
                        <div><p class="para" ><span class="blue--text text--lighten-2 ">[ {{identifyYourName(message.name)}} ] : </span>{{message.message}}</p></div>
                        <v-list-item-subtitle class="caption">{{getDate(message.timestamp)}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-card>
            </v-card-text>

          </v-card>
          <new-message :name="name" />
    </v-container>
</template>
<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'
export default {
    name:'Chat',
    components:{
        'new-message':NewMessage
    },
    props:['name'],
    data(){
        return{
            messages:[],
           
        }
    },
    methods:{
        
      identifyYourName(checkName){
      if(this.name==checkName){
        return 'You'
      }
      else{
        return checkName
      }
    },
    getDate(timestamp){
      return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
    },
   
    },
  created(){
    db.collection('messages').orderBy('timestamp').onSnapshot(res=>{
      const changes = res.docChanges()
     
      changes.forEach(element => {
        if (element.type === 'added'){
          this.messages.push({
            ...element.doc.data(),
            id: element.doc.id
          })
        }
        
      });
      // console.log(this.messages)
      
    })
   
  }
 ,
  computed:{
    
  },
  mounted(){
    this.scrollToEnd();
  }
}
</script>
<style scoped>
.para{
    white-space: wrap;
    margin:0;
    width:100%;
    text-align: justify;
}
.chatclass{
  background:green;
}

</style>