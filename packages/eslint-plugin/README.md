# fe-eslint-plugin

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
npm install fe-eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['fe-eslint-config'],
  rules: {
    'fe-eslint-plugin/no-secret-info': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:fe-eslint-plugin/recommended',
};
```

## 支持的规则

- [`no-broad-semantic-versioning`](前端编码规范工程化 https://brookzhao.github.io/frontend-spec/plugin/no-broad-semantic-versioning.html) 不要指定宽泛的版本范围
- [`no-http-url`](前端编码规范工程化 https://brookzhao.github.io/frontend-spec/plugin/no-http-url.html) 使用 HTTPS 协议头的 URL，而不是 HTTP
- [`no-js-in-ts-project`](前端编码规范工程化 https://brookzhao.github.io/frontend-spec/plugin/no-js-in-ts-project.html) 不要在 TS 项目中使用 JS
- [`no-secret-info`](前端编码规范工程化 https://brookzhao.github.io/frontend-spec/plugin/no-secret-info.html) 不要在代码中直接设置 `password` `token` and `secret` 信息
