Shout placeholder

```js
const { MemoryRouter } = require('react-router-dom');
<MemoryRouter>
  <Summary isPlaceholder />
</MemoryRouter>
```

Shout

```js
const { MemoryRouter } = require('react-router-dom')
const shout = require('./data').SummaryShout;
shout.summary.images.amount = 0;
<MemoryRouter>
  <Summary {...shout}/>
</MemoryRouter>
```

Shout with image thumbnail

```js
const { MemoryRouter } = require('react-router-dom')
const shout = require('./data').SummaryShout;
shout.summary.images.amount = 1;
<MemoryRouter>
  <Summary {...shout}/>
</MemoryRouter>
```

Shout with image thumbnail and preview

```js
const { MemoryRouter } = require('react-router-dom')
const shout = require('./data').SummaryShout;
shout.summary.images.amount = 1;
<MemoryRouter>
  <Summary {...shout} previewIsOpen/>
</MemoryRouter>
```
