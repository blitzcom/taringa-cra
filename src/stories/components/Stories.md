Initial Loading

```js
const Stories = require('./Stories').Stories;
<Stories status="fetching" />
```

Listing Stories

```js
const Stories = require('./Stories').Stories;
const shout = require('./data').StoryShout;
<Stories stories={[shout]} />
```

Infinite loading

```js
const Stories = require('./Stories').Stories;
const shout = require('./data').StoryShout;
<Stories status="fetching" stories={[shout]} />
```

With error

```js

const Stories = require('./Stories').Stories;
const shout = require('./data').StoryShout;
<Stories
  status="failure"
  stories={[shout]}
  error="Network Error"
/>
```

With error and no stories

```js

const Stories = require('./Stories').Stories;
<Stories
  status="failure"
  error="Network Error"
/>
```
