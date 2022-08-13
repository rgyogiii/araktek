import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {BrandLogo} from '../../components/Navbar/NavbarComponents'
import product from './laptop1.jpg'
const Checkout = () => {
  return (
    <>
    <Navbar/>
        <div className='container mx-auto'>
            <div className='flex justify-center mt-10'><BrandLogo/></div>
            <div className="flex justify-between bg-black py-2 laptop:w-screen">
                <span className='text-white px-5'>Order Summary</span>
                <div className=''>
                    <span className='text-white mx-7 mobile:hidden'>Quantity</span>
                    <span className='text-white mx-7 mobile:hidden'>Price</span>
                </div>
                <span className='text-white mx-5 mobile:hidden'>Total</span>
            </div>

            <div className="flex justify-evenly py-2 my-20 laptop:w-screen">
                {/* <div className='flex'>
                    <img src={product} width='150px' height='150px' alt="product"/>
                    <span className='truncate w-82'>Lenovo Legion 5 15ARH7H 82RD001APH 15.6" AMD Ryzen 7 6800H | NVIDIA GeForce RTX 3060 | 16GB DDR5-4800 | 512GB SSD [Storm Grey]</span>
                </div>
                <div className=''>
                    <span className='mx-7 mobile:hidden'>Quantity</span>
                    <span className='mx-7 mobile:hidden'>Price</span>
                </div>
                <span className='mx-5 mobile:hidden'>Total</span> */}
            </div>
            {/* BILLING DETAILS */}
            <form>
                <div className="bill-details flex justify-between mobile:flex-col laptop:flex-col">
                    <div>
                        <div className="address bg-black py-2 mobile:w-full laptop:w-full">
                            <span className='text-white mx-3'>Billing Address</span>
                        </div>

                        <div className='flex justify-between my-5 mobile:flex-col mx-1'>
                            <span className='mt-2'>First Name</span>
                            <input className='placeholder:text-gray-200 w-96 h-10 border-gray-300 mobile:w-full' placeholder='First Name' type="text" />
                        </div>
                        <div className='flex justify-between my-5 mobile:flex-col mx-1'>
                            <span className='mt-2'>Last Name</span>
                            <input className='placeholder:text-gray-200 w-96 h-10 border-gray-300 mobile:w-full' placeholder='Last Name' type="text" />
                        </div>
                        <div className='flex justify-between my-5 mobile:flex-col mx-1'>
                            <span className='mt-2'>Email</span>
                            <input className='placeholder:text-gray-200 w-96 h-10 border-gray-300 mobile:w-full' placeholder='Email' type="text" />
                        </div>
                        <div className='flex justify-between my-5 mobile:flex-col mx-1'>
                            <span className='mt-2 mobile: laptop:'>Phone Number</span>
                            <input className='placeholder:text-gray-200 w-96 h-10 border-gray-300 mobile:w-full' placeholder='Phone Number' type="text" />
                        </div>
                        <div className='flex justify-between my-5 mobile:flex-col mx-1'>
                            <span className='mt-2'>Address</span>
                            <input className='placeholder:text-gray-200 w-96 h-10 border-gray-300 mobile:w-full' placeholder='Address' type="text" />
                        </div>
                        <div className='flex justify-between my-5 mobile:flex-col mx-1'>
                            <span className='mt-2'>Province</span>
                            <input className='placeholder:text-gray-200 w-96 h-10 border-gray-300 mobile:w-full' placeholder='Province' type="text" />
                        </div>
                        <div className='flex justify-between my-5 mobile:flex-col mx-1'>
                            <span className='mt-2'>City</span>
                            <input className='placeholder:text-gray-200 w-96 h-10 border-gray-300 mobile:w-full' placeholder='City' type="text" />
                        </div>
                        <div className='flex justify-between my-5 mobile:flex-col mx-1'>
                            <span className='mt-2'>Zip Code</span>
                            <input className='placeholder:text-gray-200 w-96 h-10 border-gray-300 mobile:w-full' placeholder='Zip Code' type="text" />
                        </div>
                        
                    </div>  

                    <div>
                        <div className="delivery bg-black py-2 mobile:w-full laptop:w-full">
                            <span className='text-white mx-3 text-start'>Delivery Address</span>
                        </div>
                        
                        <div class="flex items-center mt-5 mb-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default(same as billing address)</label>
                        </div>
                        <div class="flex items-center mt-5 mb-4">
                            <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add an alternative delivery address</label>
                        </div>
                    </div>     
                </div>
                {/* Shipping details */}
                <div className="shipping my-5">
                    <div className="bg-black w-full py-2">
                        <span className='text-white mx-3'>Shipping Method</span>
                    </div>
                    <div className='bg-gray-100 my-5 py-4 flex justify-between'>
                        <div>
                            <input id="default-radio-3" type="radio" value="" name="default-radio3" class=" ml-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free Shipping</label>
                        </div>
                        <span>Express Courier(Air)</span>
                        <span className='mx-3 mobile:hidden'>Up to 4 business day(s)</span>   
                    </div>
                </div>

                {/* Payment */}
                <div className="my-5 flex justify-between mobile:flex-col-reverse laptop:flex-col-reverse">
                    <div>
                        <div className="payment bg-black py-2 my-5 mobile:w-full laptop:w-full">
                            <span className='text-white mx-3'>Payment</span>
                        </div>
                        <div className='mx-1'>
                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" border="0" alt="PayPal Logo"/>
                        </div>
                        <div className='paypal-text mobile:w-full ml-2'>
                            <span className='text-xs'>Click the button below to be directed to the Paypal website to make this payment.</span>
                        </div>
                        <div className='pay-text my-5 mobile:w-full ml-2'>
                            <span className='text-xs'>By clicking Pay and Place Order, you agree to purchase your item(s) from Arak-e as merchant of record for this transaction, on Arak-e's <span className='text-sky-500'>Terms and Conditions</span> and <span className='text-sky-500'>Privacy Policy.</span> Arak-e is a national fulfilment service provider to Araktek </span>
                        </div>  
                        <button type="button" class="focus:outline-none text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 mobile: w-full py-3.5">Pay and Place Order</button>

                    </div>

                    <div className='billing mobile:w-full laptop:w-full'>
                        <div className="bg-black py-2 mt-5 mobile:w-full">
                            <span className='text-white mx-3'>Billing Summary</span>
                        </div>
                        <div className='bg-gray-50'>
                            <div className='flex justify-between mt-5 ml-3'>
                            <input className='h-8' type="text" placeholder='Enter coupon code' />
                            <button type="button" class="focus:outline-none text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Apply</button>

                            </div>  
                            <div className="flex justify-between ml-3 py-3">
                                <span className='font-semibold'>Items total</span>
                                <span  className='font-semibold'>₱20,000.00</span>
                            </div>
                            <hr />
                            <div className="flex justify-between ml-3 py-3">
                                <span className='font-semibold'>Shipping</span>
                                <span className='font-semibold'>₱0.00</span>
                            </div>
                            <hr />
                            <div className="flex justify-between ml-3 py-5">
                                <span className='text-l font-bold'>Total For Your Order</span>
                                <span className='font-semibold'>₱20,000.00</span>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </form>
        </div>

    <Footer/>
    </>
  )
}

export default Checkout;

