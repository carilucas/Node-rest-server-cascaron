const express = require('express');
const cors = require('cors');


class Server {

   constructor(){
      this.app = express();
      this.port = process.env.PORT;
      this.userRoutePath = '/api/user';

      //Middlewares
      this.middlewares();

      this.router();

   }

   middlewares(){
      //CORS
      this.app.use( cors() );
      
      //JSON
      this.app.use( express.json() );
      
      //Directorio público
      this.app.use( express.static( 'public' ));
   }

   router(){
      this.app.use( this.userRoutePath , require('../routes/userRouter') );
   }

   listen(){
      this.app.listen( this.port, ()=>{
         console.log(`Servidor corriendo en puerto ${ this.port }`);
      })
   }


}


module.exports = Server;