import { faCheckCircle, faInfoCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import { useControll, useTranstion } from "utils-hooks";
import { AlertProps, AlertType } from "./interface";

function getIcon(type: AlertType) {
    switch (type) {
        case "success":
            return faCheckCircle;
        case "error":
            return faTimesCircle;
        default:
            return faInfoCircle;
    }
}

export function Alert(props: AlertProps) {
    const { prefixCls = "xy-alert", className, style, children, message, banner, type = "info", closable, closeText, showIcon, onClose } = props;
    const [visible, setVisible, isControll] = useControll<boolean>(props, "visible", "defaultVisible", true);
    const [ref, state] = useTranstion(visible, false);
    const opening = state.indexOf("en") !== -1;
    const classString = classNames(prefixCls, className, `${prefixCls}-type-${type}`, `${prefixCls}-state-${state}`, {
        [`${prefixCls}-witch-description`]: !!children,
        [`${prefixCls}-banner`]: banner,
        [`${prefixCls}-open`]: opening
    });

    function renderIcon() {
        if (showIcon) {
            return (
                <i className={`${prefixCls}-icon`}>
                    <FontAwesomeIcon icon={getIcon(type)} />
                </i>
            );
        } else {
            return null;
        }
    }

    function closeHandle() {
        if (!isControll) {
            setVisible(false);
        }
        if (onClose) {
            onClose(false);
        }
    }

    return (
        <div className={classString} style={style} ref={ref}>
            {renderIcon()}
            <div className={`${prefixCls}-content`}>
                <p className={`${prefixCls}-message`}>{message}</p>
                {children && <p className={`${prefixCls}-descrition`}>{children}</p>}
                {closable && (
                    <i className={`${prefixCls}-close`} onClick={closeHandle}>
                        {closeText || "✖"}
                    </i>
                )}
            </div>
        </div>
    );
}

export default React.memo(Alert);
