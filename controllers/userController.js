const { request, response } = require('express');

const getUser = (req = request, res=response)=>{
   
   const params = req.query;

   res.json({
      params,
      msg: 'get API'
   })
}

const putUser = (req, res = response )=>{

   const {id} = req.params;

   res.json({
      id,
      msg: 'put API'
   })
}

const postUser = (req, res = response )=>{

   const { nombre, edad } = req.body;
   

   res.status(201).json({
      nombre,
      edad,
      msg: 'post API'
   })
}

const patchUser = (req, res = response )=>{
   res.status(201).json({
      msg: 'patch API'
   })
}

const deleteUser = (req, res = response )=>{
   res.json({
      msg: 'delete API'
   })
}


module.exports = {
   getUser,
   putUser,
   postUser,
   patchUser,
   deleteUser
}