// import StripeCheckout from "react-stripe-checkout";
// import React, { useState } from "react";

// const PaymentTab = () => {
//   const [product, setproduct] = useState({
//     name: "Welcome",
//     price: 10,
//     productBy: "Travller",
// });

// console.log(product)

// const [Status, setStatus]= useState("")

// console.log("status is ",Status)

//   const makePayment = async (token) => {
//     const body = {
//       token,
//       product,
//     };
    
//     return await fetch("http://localhost:4000/payment", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),

//     })
//       .then((response) => {
//         console.log("Responce", response);
//         const { status } = response;
//         // console.log("STATUS", status);
//         if(status == 201){
//           setStatus("Payment done")
//         }
       
//       })
//       .catch((error) => console.log(error));
//   };
//   return (
//     <div>
//       <StripeCheckout
//         stripeKey="pk_test_51Na9rvSHRNCHtxTL3OSftQ6hzFiULtjhGfXEAqcgupkTBK1HzoHQTGWdOdJYwTCexMWCZt0X3tykVy1XnXGeJQiv00m21W54Gw"
//         token={makePayment}
//         amount={product.price}
//         name="Book Tour"
//       >
//         <button className="btn" value="Payment">
//           Payment
//         </button>
//       </StripeCheckout>
//     </div>
//   );
// };

// export default PaymentTab;
