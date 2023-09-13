import './App.css';
import SpendingItemForm from "./components/SpendingItemForm";
import Lists from "./components/Lists";
import {useState} from "react";
import { v4 as uuid } from 'uuid';
import Alert from "./components/Alert";

function App() {

    const [spendingItems, setSpendingItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [editForm, setEditForm] = useState(false);
    const [editItemId, setEditItemId] = useState("");
    const [changed, setChanged] = useState("");


    // //하나의 changedTimer만 운용될 수 있도록 함. -> 실패. 비동기라 서로 꼬이는 것 같다...
    // const [currentChangedTimer, setCurrentChangedTimer] = useState(null)
    // // 3초의 타이머를 설정하는 함수 - 기존의 타이머를 멈추고 다시 사용한다.
    // const setChangedTimer = () => {
    //     if (currentChangedTimer !== null) {
    //         setChanged("");
    //         console.log(currentChangedTimer);
    //         clearTimeout(currentChangedTimer);
    //     }
    //     const timerId = setTimeout(() => {
    //         setChanged("");
    //         setCurrentChangedTimer(null);
    //     }, 3000);
    //     setCurrentChangedTimer(timerId);
    // };


    // 타이머를 설정하는 함수 - 기존의 타이머를 멈추고 다시 사용한다.
    const setChangedTimer = () => {
        setTimeout(() => {
            setChanged("");
        }, 2000);
    };

    //Submit 버튼을 눌렀을 때
    const handleSubmit = (e) => {
        e.preventDefault();

        const itemPrice = parseInt(price);
        if (itemName !== "" && !isNaN(parseInt(itemPrice)) && itemPrice > 0) {
            //수정모드라면
            if (editForm) {
                // alert(editItemId);
                let editItem = spendingItems.find(data => data.id === editItemId);
                editItem.itemName = itemName;
                editItem.price = itemPrice;
                setEditForm(false);

                setChanged("edit");
                setChangedTimer();
            }
            //입력모드라면
            else {
                const newUuid = uuid();
                const spendingItem = {id: newUuid, itemName: itemName, price: itemPrice};
                setSpendingItems((prev) => [...prev, spendingItem]);
                setChanged("create");
                setChangedTimer();
            }
            setItemName("");
            setPrice("");
        } else {
            alert("잘못된 입력폼입니다.");
        }

        // console.log(spendingItems);
    };

    //초기화버튼을 눌렀을 때
    const handleDeleteAll = (e) => {
        if (window.confirm("정말 초기화 하시겠습니까?")) {
            setSpendingItems([]);
            setChanged("deleteAll");
            setChangedTimer();
        }
    };

    //출력할 html
    return (
        <div className="App">
            <Alert
                changed={changed}
            />

            <div className="contentContainer">

                <h1>예산 계산기</h1>
                <SpendingItemForm
                    handleSubmit={handleSubmit}
                    itemName={itemName}
                    setItemName={setItemName}
                    price={price}
                    setPrice={setPrice}
                    editForm={editForm}
                />
                <Lists
                    spendingItems={spendingItems}
                    setSpendingItems={setSpendingItems}
                    handleDeleteAll={handleDeleteAll}

                    setItemName={setItemName}
                    setPrice={setPrice}
                    setEditForm={setEditForm}
                    setEditItemId={setEditItemId}

                    setChanged={setChanged}
                    setChangedTimer={setChangedTimer}
                />

                <div className="totalContainer">
                    <h1>총 지출:&nbsp;
                        <span>
                            {spendingItems.reduce((accumulator, currentValue) => {
                                return (accumulator += currentValue.price);
                            }, 0)}</span>
                        원
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default App;
