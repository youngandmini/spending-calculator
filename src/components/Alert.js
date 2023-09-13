import React from 'react';
import "./Alert.css";


export default function Alert({changed}) {

    if (changed === "create") {
        return (
            <div className="alertContainer">
                <div className="greenAlert">추가가 완료되었습니다.</div>
            </div>
        );
    } else if (changed === "edit") {
        return (
            <div className="alertContainer">
                <div className="greenAlert">수정이 완료되었습니다.</div>
            </div>
        );
    } else if (changed === "delete") {
        return (
            <div className="alertContainer">
                <div className="redAlert">삭제가 완료되었습니다.</div>
            </div>
        );
    } else if (changed === "deleteAll") {
        return (
            <div className="alertContainer">
                <div className="redAlert">초기화가 완료되었습니다.</div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};