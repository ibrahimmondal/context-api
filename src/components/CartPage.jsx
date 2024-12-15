// import React, { useContext, useEffect, useState } from 'react'
// import { Cart } from '../Context-API/Context';

// export default function CartPage() {
//   const handleQuantityChange = (id, newQuantity) => {
//     setCart(cart.map(item => 
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };
//   const {cart, setCart } = useContext(Cart);
//     const handleRemove = (id) => {
//       setCart(cart.filter((item) => item.id !== id));
//       };

//      const [total, setTotal] = useState(0);
//      useEffect(()=> {
//       setTotal(cart.reduce((prev, current) => prev + Number(current.price), 0))
//      }, [cart])
//   return (
//     <>   
// <section>
//   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//     <div className="mx-auto max-w-3xl">
//       <header className="text-center">
//         <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">🛒 Product In  Cart {cart.length ? cart.length : 0}</h1>
//       </header>
//       <div className="mt-8">
//         <ul className="space-y-4">
//           {
//             cart.map((item) => (
//                 <li className="flex items-center gap-4">
//             <img
//               src={item.image}
//               alt=""
//               className="size-20 rounded object-cover"
//             />

//             <div>
//               <h3 className="text-sm text-gray-900 font-semibold text-[20px]">{item.name}</h3>

//               <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
//                 <div>
//                   <dt className="inline text-[15px] font-semibold">Price: </dt>
//                   <dd className="inline text-[15px] font-semibold"> ${item.price}</dd>
//                 </div>
//               </dl>
//             </div>

//             <div className="flex flex-1 items-center justify-end gap-2">
//               <form>
//                 <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

//                 <input
//                   type="number"
//                   min="1"
//                   value="1"
//                   id="Line1Qty"
//                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
//                   className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
//                 />
//               </form>

//               <button className="text-gray-600 transition hover:text-red-600text-2xl" onClick={() => handleRemove(item.id)}>
//                 <span className="sr-only">Remove item</span>

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-4"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </li>
//             ))
//           }

          
//         </ul>

//         <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
//           <div className="w-screen max-w-lg space-y-4">
//             <dl className="space-y-0.5 text-sm text-gray-700">
//               <div className="flex justify-between">
//                 <dt>Subtotal</dt>
//                 <dd>${total}</dd>
//               </div>

//               <div className="flex justify-between">
//                 <dt>VAT</dt>
//                 <dd>${total ? "25" : total }</dd>
//               </div>

              

//               <div className="flex justify-between !text-base font-medium">
//                 <dt>Total</dt>
//                 <dd>${total ? total + 25 : total }</dd>
//               </div>
//             </dl>

//             <div className="flex justify-end">
//               <span
//                 className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="-ms-1 me-1.5 size-4"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
//                   />
//                 </svg>

//                 <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
//               </span>
//             </div>

//             <div className="flex justify-end">
//               <a
//                 href="#"
//                 className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
//               >
//                 Checkout
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </>
//   )
// }




import React, { useContext, useEffect, useState } from 'react';
import { Cart } from '../Context-API/Context';
import { darkTheme } from '../Context-API/DarkMode';

export default function CartPage() {
  const {dark, toggleMode} = useContext(darkTheme);
  const { cart, setCart } = useContext(Cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((prev, current) => prev + current.price * (current.quantity || 1), 0));
  }, [cart]);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const vatRate = 0.01;
  const vat = total * vatRate;

  return (
    <>
      <section className={dark ? "dark" : "light"}>
        <div className='dark:bg-gray-800'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl select-none dark:text-white">
                🛒 Products in Cart {cart.length || 0}
              </h1>
            </header>
            <div className="mt-8">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 select-none dark:text-white">Your cart is empty. Add some products to get started!</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li key={item.id} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt=""
                        className="h-20 w-20 rounded object-cover"
                      />
                      <div>
                        <h3 className="text-sm text-gray-900 font-semibold text-[20px] dark:text-white">{item.name}</h3>
                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline text-[15px] font-semibold dark:text-gray-300">Price: </dt>
                            <dd className="inline text-[15px] font-semibold dark:text-gray-300  ">${item.price}</dd>
                          </div>
                        </dl>
                      </div>
                      <div className="flex flex-1 items-center justify-end gap-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity || 1}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 focus:outline-none"
                        />
                        <button className="text-gray-600 hover:text-indigo-600 dark:text-gray-300" onClick={() => handleRemove(item.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between dark:text-white">
                      <dt>Subtotal</dt>
                      <dd>${total.toFixed(2)}</dd>
                    </div>
                    <div className="flex justify-between dark:text-gray-300">
                      <dt>VAT (1%)</dt>
                      <dd>${vat.toFixed(2)}</dd>
                    </div>
                    <div className="flex justify-between !text-base font-medium dark:text-gray-300">
                      <dt>Total</dt>
                      <dd>${(total + vat).toFixed(2)}</dd>
                    </div>
                  </dl>
                  <div className="flex justify-end">
                    <a href="#" className="block rounded bg-indigo-600 px-5 py-3 text-sm text-gray-100 transition hover:bg-indigo-500">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
