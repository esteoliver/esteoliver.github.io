---
layout: page
title: Cheat Sheets Bootstrap
permalink: /cheat_sheets/bootstrap
---

Bootstrap
================================================================================

[Help](https://bootstrap.build/app)

Framework for building responsive, mobile-first sites, with BootstrapCDN and a 
template starter page.

**CDN**
```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
```

**With RoR**
```
> gem install bootstrap -v 4.4.1

# Gemfile
gem 'bootstrap', '~> 4.4.1'

# application.scss
@import "bootstrap";

> yarn add bootstrap@4.3.1 jquery popper.js

# environment.js
...
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)
...

# application.js
...
require("jquery")

```

Layout
--------------------------------------------------------------------------------

| | Extra small | Small  | Medium | Large  | Extra large |
|-|-------------|--------|--------|--------|-------------|
| | <576px      | ≥576px | ≥768px	| ≥992px | ≥1200px     |
| .container | 100%	| 540px	| 720px	| 960px	| 1140px |
| .container-sm |	100% |	540px	 |720px	 |960px	 | 1140px |
| .container-md |	100% |	100% |	720px	 |960px	 | 1140px |
| .container-lg |	100% |	100% |	100% |	960px	 | 1140pxs |
| .container-xl |	100% |	100% |	100% |	100% | 	1140px |
| .container-fluid |	100% |	100% |	100% |	100% | 	100% |