import React from "react";
import Alert from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="alert-demo">
            <Alert message="成功样式" type="success" />
            <Alert message="Info样式" type="info" />
            <Alert message="警告样式" type="warning" />
            <Alert message="错误样式" type="error" />
        </div>
    );
}
