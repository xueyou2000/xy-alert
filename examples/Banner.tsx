import React from "react";
import Alert from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="alert-demo">
            <div className="browser-mockup">
                <br />
                <Alert showIcon={true} message="Warning text" type="warning" banner={true} />
                <br />
                <Alert showIcon={true} message="Error text" type="error" banner={true} />
                <br />
            </div>
        </div>
    );
}
