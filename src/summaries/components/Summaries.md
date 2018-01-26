Initial Loading

```js
const Summaries = require('./Summaries').Summaries;
<Summaries status="fetching" />
```

Listing Summaries

```js
const Summaries = require('./Summaries').Summaries;
const shout = require('./data').SummaryShout;
<Summaries summaries={[shout]} />
```

Infinite loading

```js
const Summaries = require('./Summaries').Summaries;
const shout = require('./data').SummaryShout;
<Summaries status="fetching" summaries={[shout]} />
```

With error

```js

const Summaries = require('./Summaries').Summaries;
const shout = require('./data').SummaryShout;
<Summaries
  status="failure"
  summaries={[shout]}
  error="Network Error"
/>
```

With error and no summaries

```js

const Summaries = require('./Summaries').Summaries;
<Summaries
  status="failure"
  error="Network Error"
/>
```
