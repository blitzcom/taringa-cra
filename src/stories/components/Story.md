Shout

```js
const shout = require('./data').StoryShout;
shout.summary.images.amount = 0;
<Story {...shout}/>
```

Shout with image thumbnail

```js
const shout = require('./data').StoryShout;
shout.summary.images.amount = 1;
<Story {...shout}/>
```

Shout with image thumbnail and preview

```js
const shout = require('./data').StoryShout;
shout.summary.images.amount = 1;
<Story {...shout} previewIsOpen/>
```
