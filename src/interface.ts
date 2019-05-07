export type AlertType = "success" | "info" | "warning" | "error";

export interface AlertProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 是否显示
     */
    visible?: boolean;
    /**
     * 默认是否显示
     */
    defaultVisible?: boolean;
    /**
     * 提示说明
     */
    children?: React.ReactNode;
    /**
     * 提示文本
     */
    message: React.ReactNode;
    /**
     * 警告提示的样式
     */
    type?: "success" | "info" | "warning" | "error";
    /**
     * 是否可以关闭
     */
    closable?: boolean;
    /**
     * 自定义关闭按钮
     */
    closeText?: React.ReactNode;
    /**
     * 横幅模式
     */
    banner?: boolean;
    /**
     * 是否显示图标
     */
    showIcon?: boolean;
    /**
     * 关闭事件
     */
    onClose?: (visible: boolean) => void;
}
