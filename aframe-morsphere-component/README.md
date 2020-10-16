## aframe-morsphere-component

[![Version](http://img.shields.io/npm/v/aframe-morsphere-component.svg?style=flat-square)](https://npmjs.org/package/aframe-morsphere-component)
[![License](http://img.shields.io/npm/l/aframe-morsphere-component.svg?style=flat-square)](https://npmjs.org/package/aframe-morsphere-component)

A sphere that morphs into a cube

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-morsphere-component@1.0.0/dist/aframe-morsphere-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity morsphere="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-morsphere-component
```

Then require and use.

```js
require('aframe');
require('aframe-morsphere-component');
```
