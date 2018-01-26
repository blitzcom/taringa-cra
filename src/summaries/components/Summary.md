Shout

```js
const shout = require('./data').SummaryShout;
shout.summary.images.amount = 0;
<Summary {...shout}/>
```

Shout with image thumbnail

```js
const shout = require('./data').SummaryShout;
shout.summary.images.amount = 1;
<Summary {...shout}/>
```

Shout with image thumbnail and preview

```js
const shout = require('./data').SummaryShout;
shout.summary.images.amount = 1;
<Summary {...shout} previewIsOpen/>
```
