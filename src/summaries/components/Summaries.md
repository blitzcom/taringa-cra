Initial Loading

```js
const Summaries = require('./Summaries').Summaries;
<Summaries status="fetching" />
```

Listing Summaries

```js
const Summaries = require('./Summaries').Summaries;
const shout = require('./data').StoryShout;
<Summaries stories={[shout]} />
```

Infinite loading

```js
const Summaries = require('./Summaries').Summaries;
const shout = require('./data').StoryShout;
<Summaries status="fetching" stories={[shout]} />
```

With error

```js

const Summaries = require('./Summaries').Summaries;
const shout = require('./data').StoryShout;
<Summaries
  status="failure"
  stories={[shout]}
  error="Network Error"
/>
```

With error and no stories

```js

const Summaries = require('./Summaries').Summaries;
<Summaries
  status="failure"
  error="Network Error"
/>
```
