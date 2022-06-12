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
                                <input name="dropshippingFeeToggle" checked={isCheck} onChange={
                                    () => {
                                        setIsCheck(!isCheck);
                                        if(isCheck === false) {
                                            const dropshippingFee = 5900;
                                            const items = JSON.parse(window.localStorage.getItem('value'));
                                            window.localStorage.setItem('value', JSON.stringify({...items, dropshippingFee}));
                                            setValues({
                                                ...items, dropshippingFee
                                            })
                                        }else {
                                            const dropshippingFee = 0;
                                            const items = JSON.parse(window.localStorage.getItem('value'));
                                            window.localStorage.setItem('value', JSON.stringify({...items, dropshippingFee}));
                                            setValues({
                                                ...items, dropshippingFee
                                            })
                                        }
                                    }}
                                className='content-delivery-header-left-top-checkbox-input' type="checkbox" />
                                <p className='content-delivery-header-left-top-checkbox-title'>
                                    Send as dropshipper
                                </p>
                            </div>
                        </div>
                        <div className='content-delivery-header-left-middle'>
                            <div>
                                <icon className={errors.email ? 'icon-wrong-delivery' : 'icon-correct-delivery'}>{errors.email ? '✗' : '✔'}</icon>
                                <input autoComplete="off" {...register("email", {pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address"}})} 
                                placeholder='Email' type="text" className={errors.email ? 'content-delivery-header-left-middle-inputBar-wrong' : 'content-delivery-header-left-middle-inputBar-correct'} id="email" name="email"></input>
                            </div>
                            <div>
                                <icon className={errors.dropshipperName ? 'icon-wrong-delivery' : 'icon-correct-delivery'}>{errors.dropshipperName ? '✗' : '✔'}</icon>
                                <input autoComplete="off" disabled={isCheck === false} {...register("dropshipperName", {required: (isCheck === true ? true : false)})} className={errors.dropshipperName ? 'content-delivery-header-left-middle-inputBar-wrong' : 'content-delivery-header-left-middle-inputBar-correct'} placeholder='Dropshipper name' type="text" id="dropshipperName" name="dropshipperName"/>
                            </div>
                            <div>
                                <icon className={errors.phoneNumber ? 'icon-wrong-delivery' : 'icon-correct-delivery'}>{errors.phoneNumber ? '✗' : '✔'}</icon>
                                <input autoComplete="off" {...register("phoneNumber", {pattern:{value: /^[0-9+-/()]+$/, message: "invalid mobile number"}, minLength: 6, maxLength: 20})} className={errors.phoneNumber ? 'content-delivery-header-left-middle-inputBar-wrong' : 'content-delivery-header-left-middle-inputBar-correct'} placeholder='Phone number' type="tel" id="phoneNumber" name="phoneNumber"/>
                            </div>
                            <div>
                                <icon className={errors.dropshipperPhoneNumber ? 'icon-wrong-delivery' : 'icon-correct-delivery'}>{errors.dropshipperPhoneNumber ? '✗' : '✔'}</icon>
                                <input autoComplete="off" disabled={isCheck === false} {...register("dropshipperPhoneNumber", {required: (isCheck === true ? true : false), pattern:{value: /^[0-9+-/()]+$/, message: "invalid mobile number"}, minLength: 6, maxLength: 20})} placeholder='Dropshipper phone number' type="text" className={errors.dropshipperPhoneNumber ? 'content-delivery-header-left-middle-inputBar-wrong' : 'content-delivery-header-left-middle-inputBar-correct'} id="dropshipperPhoneNumber" name="dropshipperPhoneNumber" />
                            </div>
                            <div>
                                <icon className={errors.deliveryAddress ? 'icon-wrong-delivery' : 'icon-correct-delivery'}>{errors.deliveryAddress ? '✗' : '✔'}</icon>
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
                                    <div className='content-delivery-header-summary-bottom-cost-title'>
                                        Cost of goods
                                    </div>
                                    <div className='content-delivery-header-summary-bottom-cost-price'>
                                        {(values.costOfGoods || 0).toLocaleString(undefined, { maximumFractionDigits: 5 })}
                                    </div>
                                </div>
                                <div className='content-delivery-header-summary-bottom-dropshipping'>
                                    <div className='content-delivery-header-summary-bottom-dropshipping-title'>
                                        Dropshipping Fee
                                    </div>
                                    <div className='content-delivery-header-summary-bottom-dropshipping-price'>
                                        {(values.dropshippingFee || 0).toLocaleString(undefined, { maximumFractionDigits: 5 })}
                                    </div>
                                </div>
                                <div className='content-delivery-header-summary-bottom-total'>
                                    <div className='content-delivery-header-summary-bottom-total-title'>
                                        Total
                                    </div>
                                    <div className='content-delivery-header-summary-bottom-total-price'>
                                    {((values.dropshippingFee + values.costOfGoods) || 0).toLocaleString(undefined, { maximumFractionDigits: 5 })}
                                    </div>
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