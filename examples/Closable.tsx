import React from "react";
import Alert from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="alert-demo">
            <Alert type="warning" closable={true} message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text" />
            <Alert type="error" closable={true} message="登录失败">
                账号或密码错误
            </Alert>

            <Alert message="Info Text" closable={true} type="info" closeText="Close Now" />
        </div>
    );
}
