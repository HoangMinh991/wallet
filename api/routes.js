/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
module.exports = function(app) {
  let productsCtrl = require('./controllers/ProductsController');

  app.route('/apiv1/steam')
    .post(productsCtrl.post);

  app.route('/apiv1/wallet')
    .post(productsCtrl.wallet);
};