import React, {useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

//css
import './css/Delivery.css'
import { ValueContext } from '../../context/ValueContext'

const Delivery = () => {

    //link page
    let navigate = useNavigate();
    const [countTextArea, setCountTextArea] = useState(0);
    const {values, setValues} = useContext(ValueContext);
    const [isCheck, setIsCheck] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm({
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
            if(isCheck === false) {
                data.dropshipperName = "";
                data.dropshipperPhoneNumber = "";
            }
            const tempValues = {...values, ...data};
            const dropshippingFee = isCheck === true ? 5900 : 0

            setValues({
                ...tempValues, dropshippingFee
            });

            window.localStorage.setItem('value', JSON.stringify({...tempValues, dropshippingFee}));
            const items = JSON.parse(window.localStorage.getItem('value'));
            navigate('/payment');
            return items
        }
        return null
    }
    
    useEffect(() => {
        nextStep();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
    }, []);

    return (
        <div className='content-delivery'>
            <button className='content-delivery-back'>
                ← Back to cart
            </button>
            <form onSubmit={handleSubmit(nextStep)} >
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
                            <div>
                                <input autoComplete="off" {...register("email", {pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address"}})} 
                                placeholder='Email' type="text" className={errors.email ? 'content-delivery-header-left-middle-inputBar-wrong' : 'content-delivery-header-left-middle-inputBar-correct'} id="email" name="email"></input>
                            </div>
                            <input autoComplete="off" disabled={isCheck === false} {...register("dropshipperName", {required: (isCheck === true ? true : false)})} className={errors.dropshipperName ? 'content-delivery-header-left-middle-inputBar-wrong' : 'content-delivery-header-left-middle-inputBar-correct'} placeholder='Dropshipper name' type="text" id="dropshipperName" name="dropshipperName"/>
                            <div>
                                <input autoComplete="off" {...register("phoneNumber", {pattern:{value: /^[0-9+-/()]+$/, message: "invalid mobile number"}, minLength: 6, maxLength: 20})} className={errors.phoneNumber ? 'content-delivery-header-left-middle-inputBar-wrong' : 'content-delivery-header-left-middle-inputBar-correct'} placeholder='Phone number' type="tel" id="phoneNumber" name="phoneNumber"/>
                                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                            </div>
                            <input autoComplete="off" disabled={isCheck === false} {...register("dropshipperPhoneNumber", {required: (isCheck === true ? true : false), pattern:{value: /^[0-9+-/()]+$/, message: "invalid mobile number"}, minLength: 6, maxLength: 20})} placeholder='Dropshipper phone number' type="text" className={errors.dropshipperPhoneNumber ? 'content-delivery-header-left-middle-inputBar-wrong' : 'content-delivery-header-left-middle-inputBar-correct'} id="dropshipperPhoneNumber" name="dropshipperPhoneNumber" />
                            <div>
                                <textarea {...register("deliveryAddress", {required: true, maxLength: 120})} onChange={e => setCountTextArea(e.target.value.length)} placeholder='Delivery address' className={errors.deliveryAddress ? 'content-delivery-header-left-middle-inputBar-wrong' : 'content-delivery-header-left-middle-inputBar-correct'} id="deliveryAddress" name="deliveryAddress" />
                                <div className='digit'>
                                    Jumlah digit yang tersisa {120 - (countTextArea) }
                                </div>
                            </div>
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

        </div>
    )
}

export default Delivery