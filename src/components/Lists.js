import React from 'react';
import {MdDelete} from "react-icons/md";
import List from "./List";
import "./Lists.css"


export default function Lists({spendingItems,
                                  setSpendingItems,
                                  handleDeleteAll,
                                  setItemName,
                                  setPrice,
                                  setEditForm,
                                  setEditItemId,
                                  setChanged,
                                  setChangedTimer}) {

    //리스트의 삭제 버튼을 눌렀을 때,
    const handleClickDeleteButton = (id) => {
        let newSpendingItems = spendingItems.filter((data) => data.id !== id);
        setSpendingItems(newSpendingItems);
        setChanged("delete");
        setChangedTimer();
    };

    return (
        <div className="itemListContainer">
            <div className="itemLists">
                {spendingItems.map(spendingItem => {
                    return (
                        <List
                            key={spendingItem.id}
                            spendingItem={spendingItem}
                            handleClickDeleteButton={handleClickDeleteButton}
                            setItemName={setItemName}
                            setPrice={setPrice}
                            setEditForm={setEditForm}
                            setEditItemId={setEditItemId}
                        />
                    );
                })}
            </div>

            <button onClick={handleDeleteAll} className="deleteAllButton">
                초기화&nbsp;
                <MdDelete className="btn-icon"/>
            </button>
        </div>
    );
};