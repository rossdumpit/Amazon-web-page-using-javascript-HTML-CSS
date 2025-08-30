import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';


//import '../data/cart-class.js';
//import '../data/backend-practice.js';


async function loadPage() {
   try {
      //throw 'error1';

       await loadProductsFetch();
      
      const value = await new Promise((resolve, reject) => {
         //throw 'eeror2';
         loadCart(() => {
            //reject('error');
            resolve('value3');
         }); 
      });

   } catch (error) {
      console.log('Unexpected error. PLease try again later.');
   }

   //console.log('load page');

   renderOrderSummary();
   renderPaymentSummary();

   //return 'value2';
}
loadPage();
//    .then((value) => {
//    console.log('next step');
//    console.log(value);
// });



/*
Promise.all([


   // new Promise((resolve) => {
   //    loadProducts(() => {
   //       resolve('value1');
   //    });
   // }),
   loadProductsFetch(),
   new Promise((resolve) => {
      loadCart(() => {
         resolve();
      }); 
   })
]).then((values) => {
   console.log(values);
   renderOrderSummary();
   renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
   //console.log('promise');
  // console.log('start promise');
   loadProducts(() => {
      //console.log('finished loading');
      resolve('value1');
   });

}).then((value) => {

   console.log(value);
   //console.log('next step');
   return new Promise((resolve) => {
      loadCart(() => {
         resolve();
      }); 
   });

}).then(() => {
   renderOrderSummary();
   renderPaymentSummary();
});

*/


/*
loadProducts(()=> {
   loadCart(() => {
      renderOrderSummary();
      renderPaymentSummary();
   });
});
*/