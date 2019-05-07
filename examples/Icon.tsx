import React from "react";
import Alert from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="alert-demo">
            <Alert showIcon={true} type="success" message="成功图标" />
            <Alert showIcon={true} type="info" message="Info图标" />
            <Alert showIcon={true} type="warning" message="警告图标" />
            <Alert showIcon={true} type="error" message="错误图标" />

            <Alert showIcon={true} type="success" message="成功图标">
                Detailed description and advice about successful copywriting.
            </Alert>

            <Alert showIcon={true} type="info" message="Info图标">
                Additional description and information about copywriting.
            </Alert>

            <Alert showIcon={true} type="warning" message="警告图标">
                This is a warning notice about copywriting.
            </Alert>

            <Alert showIcon={true} type="error" message="错误图标">
                This is an error message about copywriting.
            </Alert>
        </div>
    );
}
