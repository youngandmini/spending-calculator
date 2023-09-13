import React from 'react';
import { MdSend } from "react-icons/md";
import "./SpendingItemForm.css";

export default function SpendingItemForm({handleSubmit,
                                             itemName,
                                             setItemName,
                                             price,
                                             setPrice,
                                             editForm}){

    //지출 항목 수정
    const handleItemName = (e) => {
        setItemName(e.target.value);
        // console.log(itemName);
    };
    //가격 수정
    const handlePrice = (e) => {
        // setPrice(e.target.value);
        setPrice(e.target.value);
        // console.log(price);
    };

    return (
        <form onSubmit={handleSubmit} className="spendingForm">
            <div className="spendingInput">
                <div className="spendingItemInputContainer">
                    <label htmlFor="spendingItemForm">지출 항목</label>
                    <input
                        type="text"
                        className="form-control"
                        id="spendingItemForm"
                        placeholder="예) 숙소"
                        value={itemName}
                        onChange={handleItemName}
                    />
                </div>
                <div className="spendingPriceInputContainer">
                    <label htmlFor="spendingPriceForm">비용</label>
                    <input
                        type="text"
                        className="form-control"
                        id="spendingPriceForm"
                        value={price}
                        onChange={handlePrice}
                    />
                </div>
            </div>
            <button type="submit" className="submitButton">
                {editForm ? "수정하기 " : "추가하기 "}
                <MdSend className="btn-icon" />
            </button>
        </form>
    );
};