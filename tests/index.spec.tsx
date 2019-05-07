import React from "react";
import { render, fireEvent } from "react-testing-library";
import Alert from "../src";

describe("Alert", () => {
    test("render", () => {
        const wrapper = render(<Alert message="基本用法" />);
        const p = wrapper.getByText("基本用法");
        expect(p.classList.contains("xy-alert-message")).toBeTruthy();
        const alert = p.parentElement.parentElement;
        expect(alert.classList.contains("xy-alert-type-info")).toBeTruthy();
    });

    test("close", () => {
        const fn = jest.fn();
        const wrapper = render(<Alert message="基本用法" closable={true} closeText="关闭" onClose={fn} />);
        const close = wrapper.getByText("关闭");
        fireEvent.click(close);

        const alert = wrapper.container.querySelector(".xy-alert");
        expect(alert.classList.contains("xy-alert-hidden")).toBeTruthy();
        expect(fn).toBeCalled();
    });

    test("witch descrition", () => {
        const wrapper = render(<Alert message="基本用法">说明文本</Alert>);
        const desc = wrapper.getByText("说明文本");
        expect(desc.classList.contains("xy-alert-descrition")).toBeTruthy();
    });

    test("banner mode", () => {
        const wrapper = render(<Alert message="基本用法" banner={true} />);
        const alert = wrapper.container.querySelector(".xy-alert");
        expect(alert.classList.contains("xy-alert-banner")).toBeTruthy();
    });

    test("type", () => {
        const wrapper = render(<Alert message="基本用法" showIcon={true} type="success" />);
        const alert = wrapper.container.querySelector(".xy-alert");
        const icon = alert.querySelector(".xy-alert-icon > svg");
        expect(alert.classList.contains("xy-alert-type-success")).toBeTruthy();
        expect(icon.getAttribute("data-icon")).toBe("check-circle");

        wrapper.rerender(<Alert message="基本用法" showIcon={true} type="error" />);
        expect(alert.classList.contains("xy-alert-type-error")).toBeTruthy();
        expect(icon.getAttribute("data-icon")).toBe("times-circle");
    });
});
