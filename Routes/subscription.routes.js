import {Router} from "express";

const subscriptionRouter = Router();


subscriptionRouter.get('/',(req,res) => {
  res.send({title: 'get all subscriptions'});
});

subscriptionRouter.get('/:id',(req,res) => {
  res.send({title: 'get subscription details'});
});

subscriptionRouter.post('/',(req,res) => {
  res.send({title: 'Create subscriptions'});
});

subscriptionRouter.put('/:id',(req,res) => {
  res.send({title: 'Update subscriptions'});
});

subscriptionRouter.delete('/',(req,res) => {
  res.send({title: 'get all subscriptions'});
});

subscriptionRouter.delete('/user/:id',(req,res) => {
  res.send({title: 'get all User subscriptions'});
});

subscriptionRouter.put('/:id/cancel',(req,res) => {
  res.send({title: 'Cancel subscriptions'});
});

subscriptionRouter.put('/upcoming-renewals',(req,res) => {
  res.send({title: 'get  upcoming renewals'});
});


export default subscriptionRouter;


