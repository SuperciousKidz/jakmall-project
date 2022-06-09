import React, {useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

//css
import './css/Delivery.css'
import { ValueContext } from '../../context/ValueContext'

const Delivery = () => {

    //link page
    let navigate = useNavigate();
    const {values, setValues} = useContext(ValueContext);
    const [isCheck, setIsCheck] = useState(false);
    const {register, handleSubmit} = useForm({
        defaultValues: {
            email: "",
            dropshipperName: "",
            phoneNumber: "",
            dropshipperPhoneNumber: "",
            deliveryAddress: "",
            dropshippingFee: 0
        }
    });

    function nextStep(data) {
        if(data) {
            setValues(values => ({
                ...values,
                ...data
            }));
            // const data = window.localStorage.getItem('MY_APP_STATE');
            // if ( data !== null ) setValues(JSON.parse(data));
            window.localStorage.setItem('value', JSON.stringify(values));
            const items = JSON.parse(window.localStorage.getItem('value'));
            // navigate('/payment');
            console.log('items delivery', items);
            return items
        }
        return null
    }
    
    useEffect(() => {
        //fee
        const a = nextStep();
        console.log("delivery")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form onSubmit={handleSubmit(nextStep)} className='content-delivery'>
            <div className='content-delivery-back'>
                Back to cart {values.email} {values.dropshippingFeeToggle}
            </div>
            <div className='content-delivery-header'>
                <div className='content-delivery-header-left'>
                    <div className='content-delivery-header-left-top'>
                        <p className='content-delivery-header-left-top-title'>
                            Delivery details
                        </p>
                        <div className='content-delivery-header-left-top-checkbox'>
                            <input name="dropshippingFeeToggle" checked={isCheck} onChange={() => {setIsCheck(!isCheck)}}
                            className='content-delivery-header-left-top-checkbox-input' type="checkbox" />
                            <p className='content-delivery-header-left-top-checkbox-title'>
                                Send as dropshipper
                            </p>
                        </div>
                    </div>
                    <div className='content-delivery-header-left-middle'>
                        <input {...register("email")} placeholder='Email' type="email" className='content-delivery-header-left-middle-inputBar' id="email" name="email"/>
                        <input disabled={isCheck === false} {...register("dropshipperName")} placeholder='Dropshipper name' type="text" className='content-delivery-header-left-middle-inputBar' id="dropshipperName" name="dropshipperName"/>
                        <input {...register("phoneNumber")} placeholder='Phone number' type="text" className='content-delivery-header-left-middle-inputBar' id="phoneNumber" name="phoneNumber"/>
                        <input disabled={isCheck === false} {...register("dropshipperPhoneNumber")} placeholder='Dropshipper phone number' type="text" className='content-delivery-header-left-middle-inputBar' id="dropshipperPhoneNumber" name="dropshipperPhoneNumber" />
                        <textarea {...register("deliveryAddress")} placeholder='Delivery address' className='content-delivery-header-left-middle-inputBar' id="deliveryAddress" name="deliveryAddress" />
                    </div>
                </div>
                <div className='content-delivery-header-right'>
                    <div className='content-delivery-header-summary'>
                        <div className='content-delivery-header-summary-top'>
                            <div className='content-delivery-header-summary-top-title'>
                                Summary
                            </div>
                            <div className='content-delivery-header-summary-top-desc'>
                                10 items purchased
                            </div>
                        </div>
                        <div className='content-delivery-header-summary-bottom'>
                            <div className='content-delivery-header-summary-bottom-cost'>
                                <p>
                                    Cost of goods
                                </p>
                                <p className='content-delivery-header-summary-bottom-cost-price'>
                                    {values.costOfGoods}
                                </p>
                            </div>
                            <div className='content-delivery-header-summary-bottom-dropshipping'>
                                <p>
                                    Dropshipping Fee
                                </p>
                                <p className='content-delivery-header-summary-bottom-dropshipping-price'>
                                    {
                                        isCheck === true ? values.dropshippingFee = 5900 : values.dropshippingFee = 0
                                    }
                                </p>
                            </div>
                            <div className='content-delivery-header-summary-bottom-total'>
                                <p className='content-delivery-header-summary-bottom-total-title'>
                                    Total
                                </p>
                                <p className='content-delivery-header-summary-bottom-total-price'>
                                {values.dropshippingFee + values.costOfGoods}
                                </p>
                            </div>
                            <button className='content-delivery-header-summary-bottom-button'>
                                Continue to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Delivery