import React from 'react';
import {MdDelete, MdEdit} from "react-icons/md";
import "./List.css"

export default function List({spendingItem: {id, itemName, price},
                                 handleClickDeleteButton,
                                 setItemName,
                                 setPrice,
                                 setEditForm,
                                 setEditItemId}){

    //수정 버튼 눌렀을 때,
    const handleClickEditButton = () => {
        setItemName(itemName);
        setPrice(price);
        setEditForm(true);
        setEditItemId(id);
    };

    return (
        <div className="itemList">
            <div className="itemName">
                <span>{itemName}</span>
            </div>
            <div className="price">
                <span>{price}</span>
            </div>
            <div>
                <button onClick={handleClickEditButton} className="editButton">
                    <MdEdit/>
                </button>
                <button onClick={() => handleClickDeleteButton(id)} className="deleteButton">
                    <MdDelete/>
                </button>
            </div>
        </div>
    );
};