Initial Loading

```js
const Summaries = require('./Summaries').Summaries;
<Summaries
  status="fetching"
  placeholderCount={2}
/>
```

Listing Summaries

```js
const { MemoryRouter } = require('react-router-dom')
const Summaries = require('./Summaries').Summaries;
const shout = require('./data').SummaryShout;
<MemoryRouter>
  <Summaries summaries={[shout]} />
</MemoryRouter>
```

Infinite loading

```js
const { MemoryRouter } = require('react-router-dom')
const Summaries = require('./Summaries').Summaries;
const shout = require('./data').SummaryShout;
<MemoryRouter>
  <Summaries status="fetching" summaries={[shout]} />
</MemoryRouter>
```

With error

```js
const { MemoryRouter } = require('react-router-dom')
const Summaries = require('./Summaries').Summaries;
const shout = require('./data').SummaryShout;
<MemoryRouter>
  <Summaries
    status="failure"
    summaries={[shout]}
    error="Network Error"
  />
</MemoryRouter>
```

With error and no summaries

```js

const Summaries = require('./Summaries').Summaries;
<Summaries
  status="failure"
  error="Network Error"
/>
```
