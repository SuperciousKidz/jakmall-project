import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { ValueContext } from '../../context/ValueContext';
import './css/Finish.css'
const Finish = () => {

    const {values, setValues} = useContext(ValueContext);
    const [order, setOrder] = useState("");
    let navigate = useNavigate()

    useEffect(() => {
      const tempValues = JSON.parse(window.localStorage.getItem('value'));
      setValues({
        ...tempValues
      })

      //generate id order
      const arr = [...Array(5)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
      const regex = /([0-1IO])/g;
      setOrder(arr.replace(regex, 'A'))
    }, []);

    const goBackHome = () => {
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
        <div className='content-finish'>
            <div className='content-finish-flex'>
                <div className='content-finish-flex-left'>
                    <div className='content-finish-flex-left-parent'>
                        <div className='content-finish-flex-left-parent-child'>
                            <div className='content-finish-flex-left-parent-child-thanks'>
                                Thank You
                            </div>
                            <div className='content-finish-flex-left-parent-child-order'>
                                Order ID: {
                                    order
                                }
                            </div>
                            <div className='content-finish-flex-left-parent-child-desc'>
                                You order will be delivered {(values.shipment === 'GO-SEND') ? "today with " + values.shipment : values.shipment === 'JNE' ? "2 days with " + values.shipment : "1 day with " + values.shipment }
                            </div>
                            <button className='content-finish-flex-left-parent-child-button' onClick={() => goBackHome()}> ← Back to homepage</button>
                        </div>
                    </div>
                </div>
                <div className='content-finish-flex-right'>
                    <div className='content-finish-flex-right-header'>
                        <div className='content-finish-flex-right-header-title'>
                        Summary
                        </div>
                        <div className='content-finish-flex-right-header-desc'>
                        10 items purchased
                        </div>
                    </div>
                    <div className='content-finish-flex-right-body'>
                        <div className='content-finish-flex-right-body-title'>
                        Delivery estimation
                        </div>
                        <div className='content-finish-flex-right-body-desc'>
                        {
                            (values.shipment === 'GO-SEND') ? "today by " + values.shipment : values.shipment === 'JNE' ? "2 days by " + values.shipment : "1 day by " + values.shipment 
                        }
                        </div>
                    </div>
                    <div className='content-finish-flex-right-body'>
                        <div className='content-finish-flex-right-body-title'>
                        Payment method
                        </div>
                        <div className='content-finish-flex-right-body-desc'>
                        {
                            (values.payment === 'e-Wallet') ? values.payment : values.payment === 'Bank Transfer' ? values.payment : values.payment 
                        }
                        </div>
                    </div>
                    <div className='content-finish-flex-right-bottom'>
                        <div className='content-finish-flex-right-bottom-cost'>
                            <div className='content-finish-flex-right-bottom-cost-title'>
                                Cost of goods
                            </div>
                            <div className='content-finish-flex-right-bottom-cost-price'>
                                {values.costOfGoods}
                            </div>
                        </div>
                        <div className='content-finish-flex-right-bottom-dropshipping'>
                            <div className='content-finish-flex-right-bottom-dropshipping-title'>
                                Dropshopping Fee
                            </div>
                            <div className='content-finish-flex-right-bottom-dropshipping-price'>
                                {values.dropshippingFee}
                            </div>
                        </div>
                        <div className='content-finish-flex-right-bottom-shipment'>
                            <div className='content-finish-flex-right-bottom-shipment-title'>
                                shipment
                            </div>
                            <div className='content-finish-flex-right-bottom-shipment-price'>
                                {values.shipmentPrice}
                            </div>
                        </div>
                        <div className='content-finish-flex-right-bottom-total'>
                            <div className='content-finish-flex-right-bottom-total-title'>
                                Total
                            </div>
                            <div className='content-finish-flex-right-bottom-total-price'>
                                {values.costOfGoods + values.dropshippingFee + (values.shipmentPrice || 0)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finish