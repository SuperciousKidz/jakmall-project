import React, {useContext, useState, useEffect} from 'react'
import { ValueContext } from '../../context/ValueContext';
import './css/Payment.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Payment = () => {

  let navigate = useNavigate()
  const {values, setValues} = useContext(ValueContext);
  const {register, handleSubmit, setValue, formState: {errors}} = useForm({
    defaultValues: {
      shipment: "",
      shipmentPrice: ""
    }
  });
  useEffect(() => {
    const tempValues = JSON.parse(window.localStorage.getItem('value'));
    setValues({
      ...tempValues
    })
    nextSteps();
    
  }, []);

  function nextSteps(data) {
    if(data) {
      const temp = {...values, ...data}
      setValues({
        ...temp
      })
      window.localStorage.setItem('value', JSON.stringify({...temp}));
    }
  }

  const goBackDelivery = () => {
    const resetValue = {
        costOfGoods: 500000,
        deliveryAddress: "",
        dropshipperName: "",
        dropshipperPhoneNumber: "",
        dropshippingFee: 0,
        email: "",
        payment: "",
        paymentBalance: 1500000,
        phoneNumber: "",
        shipment: "",
        shipmentPrice: 0
    }
    setValues({
        ...resetValue
    })
    window.localStorage.setItem('value', JSON.stringify({...resetValue}));
    navigate('/delivery')
  } 

  return (
    <div className='content-payment'>
      <button onClick={() => goBackDelivery()} className='content-payment-back'>
        ← Back to delivery
      </button>
      <form onSubmit={handleSubmit(nextSteps)} >
        <div className='content-payment-flex'>
          <div className='content-payment-flex-left'>
            <div className='content-payment-flex-left-shipment'>
              <div className='content-payment-flex-left-shipment-title'>
                Shipment
              </div>
              <div className='content-payment-flex-left-shipment-choose'>
                <button className={values.shipment === "GO-SEND" ? 'content-payment-flex-left-shipment-choose-box-now' : 'content-payment-flex-left-shipment-choose-box'} type='text' {...register("shipment", "shipmentPrice", {required: true})} onClick={() => {setValue('shipment', 'GO-SEND'); setValue('shipmentPrice', 15000);}}><p className={values.shipment === "GO-SEND" ? 'text-bold' : ''}>GO-SEND</p><p className={values.shipment === "GO-SEND" ? 'text-bold' : ''}>15,000</p></button>
                <button className={values.shipment === "JNE" ? 'content-payment-flex-left-shipment-choose-box-now' : 'content-payment-flex-left-shipment-choose-box'} type='text' {...register("shipment", "shipmentPrice", {required: true})} onClick={() => {setValue('shipment', 'JNE'); setValue('shipmentPrice', 9000);}}><p className={values.shipment === "JNE" ? 'text-bold' : ''}>JNE</p><p className={values.shipment === "JNE" ? 'text-bold' : ''} >9,000</p></button>
                <button className={values.shipment === "Personal Courier" ? 'content-payment-flex-left-shipment-choose-box-now' : 'content-payment-flex-left-shipment-choose-box'} type='text' {...register("shipment", "shipmentPrice", {required: true})} onClick={() => {setValue('shipment', 'Personal Courier'); setValue('shipmentPrice', 29000);}}><p className={values.shipment === "Personal Courier" ? 'text-bold' : ''}>Personal Courier</p><p className={values.shipment === "Personal Courier" ? 'text-bold' : ''}>29,000</p></button>
                {/* {(values.shipment) ? values.shipment : ""} */}
              </div>
            </div>
            <div className='content-payment-flex-left-payment'>
              <div className='content-payment-flex-left-payment-title'>
                Payment
              </div>
              <div className='content-payment-flex-left-payment-choose'>
                <button className={values.payment === "e-Wallet" ? 'content-payment-flex-left-payment-choose-box-now' : 'content-payment-flex-left-payment-choose-box'} type='text' {...register("payment", "paymentBalance")} onClick={() => {setValue('payment', 'e-Wallet');}}><p className={values.payment === "e-Wallet" ? 'text-bold' : ''}>e-Wallet</p>{values.payment === "e-Wallet" ? <p className={values.payment === "e-Wallet" ? 'text-bold' : ''}>{values.paymentBalance} left</p> : ""}</button>
                <button className={values.payment === "Bank Transfer" ? 'content-payment-flex-left-payment-choose-box-now' : 'content-payment-flex-left-payment-choose-box'} type='text' {...register("payment", "paymentBalance")} onClick={() => {setValue('payment', 'Bank Transfer');}}><p className={values.payment === "Bank Transfer" ? 'text-bold' : ''}>Bank Transfer</p>{values.payment === "Bank Transfer" ? <p className={values.payment === "Bank Transfer" ? 'text-bold' : ''}>{values.paymentBalance} left</p> : ""}</button>
                <button className={values.payment === "Virtual Account" ? 'content-payment-flex-left-payment-choose-box-now' : 'content-payment-flex-left-payment-choose-box'} type='text' {...register("payment", "paymentBalance")} onClick={() => {setValue('payment', 'Virtual Account');}}><p className={values.payment === "Virtual Account" ? 'text-bold' : ''}>Virtual Account</p>{values.payment === "Virtual Account" ? <p className={values.payment === "Virtual Account" ? 'text-bold' : ''}>{values.paymentBalance} left</p> : ""}</button>
              </div>
            </div>
          </div>
          <div className='content-payment-flex-right'>
            <div className='content-payment-flex-right-header'>
              <div className='content-payment-flex-right-header-title'>
                Summary
              </div>
              <div className='content-payment-flex-right-header-desc'>
                10 items purchased
              </div>
            </div>
            <div className='content-payment-flex-right-body'>
              <div className='content-payment-flex-right-body-title'>
                Delivery estimation
              </div>
              <div className='content-payment-flex-right-body-desc'>
                {
                  (values.shipment === 'GO-SEND') ? "today by " + values.shipment : values.shipment === 'JNE' ? "2 days by " + values.shipment : values.shipment === 'Personal Courier' ? "1 day by " +  values.shipment : "-" 
                }
              </div>
            </div>
            <div className='content-payment-flex-right-bottom'>
              <div className='content-payment-flex-right-bottom-cost'>
                <div className='content-payment-flex-right-bottom-cost-title'>
                  Cost of goods
                </div>
                <div className='content-payment-flex-right-bottom-cost-price'>
                  {values.costOfGoods}
                </div>
              </div>
              <div className='content-payment-flex-right-bottom-dropshipping'>
                <div className='content-payment-flex-right-bottom-dropshipping-title'>
                  Dropshopping Fee
                </div>
                <div className='content-payment-flex-right-bottom-dropshipping-price'>
                  {values.dropshippingFee}
                </div>
              </div>
              <div className='content-payment-flex-right-bottom-shipment'>
                <div className='content-payment-flex-right-bottom-shipment-title'>
                  shipment
                </div>
                <div className='content-payment-flex-right-bottom-shipment-price'>
                  {values.shipmentPrice}
                </div>
              </div>
              <div className='content-payment-flex-right-bottom-total'>
                <div className='content-payment-flex-right-bottom-total-title'>
                  Total
                </div>
                <div className='content-payment-flex-right-bottom-total-price'>
                  {values.costOfGoods + values.dropshippingFee + (values.shipmentPrice || 0)}
                </div>
              </div>
              <button disabled={values.shipment && values.payment ? false : true} onClick={() => {navigate('/finish')}} className='content-payment-flex-right-bottom-button'>
                Pay with e-wallet
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>
    
  )
}

export default Payment