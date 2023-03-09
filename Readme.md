# Form.io Tailwind CSS Templates

This repository will change the rendering of forms in formio.js so that it uses html and classes compatible with the [TailwindCSS](https://tailwindcss.com) framework. 

## Usage

```javascript
import tailwindcss from '@formio/tailwindcss';
import { Formio } from 'formiojs';

Formio.use(tailwindcss);
```
## Script


```javascript
Formio.Templates.framework = "tailwindcss"
```
If icon is not show

```javascript
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script>
  Formio.icons = "fontawesome"
</script>
```
