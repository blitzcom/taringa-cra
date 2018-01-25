Default

```js
const Stories = require('./Stories').Stories;
const shout = require('./data').StoryShout;
<Stories stories={[shout]} />
```

Loading

```js
const Stories = require('./Stories').Stories;
<Stories status="fetching" />
```

With error

```js
const Stories = require('./Stories').Stories;
<Stories status="failure" error="Network Error" />
```
