| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-alert.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-alert.svg?style=flat-square)

[![xy-alert](https://nodei.co/npm/xy-alert.png)](https://npmjs.org/package/xy-alert)

# xy-alert

警告提示组件

## 安装

```bash
# yarn
yarn add xy-alert classnames utils-hooks @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Alert from "xy-alert";
ReactDOM.render(
    <Alert message="登录失败" type="error" showIcon={true}>
        账号或密码错误。
    </Alert>,
    container
);
```

## API

| 属性           | 说明                                                                 | 类型                       | 默认值 |
| -------------- | -------------------------------------------------------------------- | -------------------------- | ------ |
| visible        | 是否显示                                                             | boolean                    | true   |
| defaultVisible | 默认是否显示                                                         | boolean                    | -      |
| 提示文本       | message                                                              | React.ReactNode            | -      |
| children       | 提示说明                                                             | React.ReactNode            | -      |
| closable       | 是否可以关闭                                                         | boolean                    | false  |
| closeText      | 自定义关闭按钮                                                       | React.ReactNode            | -      |
| showIcon       | 是否显示图标                                                         | boolean                    | false  |
| banner         | 横幅模式                                                             | boolean                    | false  |
| type           | 警告提示的样式，可选值为 `success` `info` `warning` `error` 或者不设 | string                     | info   |
| onClose        | 关闭事件                                                             | (visible: boolean) => void | -      |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-alert is released under the MIT license.
