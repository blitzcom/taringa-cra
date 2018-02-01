Comments idle

```js
const Comments = require('./Comments').Comments;

<Comments canRender={false} />
```

Comments empty

```js
const Comments = require('./Comments').Comments;

<Comments
  totalCount={0}
  status="success"
/>
```

Comments listing

```js
const comment = require('./comment.data').comment;
const Comments = require('./Comments').Comments;

<Comments
  totalCount={1}
  status="success"
  comments={[comment]}
/>
```

Comments listing more than one

```js
const comments = require('./comment.data').comments;
const Comments = require('./Comments').Comments;

<Comments
  totalCount={2}
  status="success"
  comments={comments}
/>
```

Comments listing with loading more

```js
const comment = require('./comment.data').comment;
const Comments = require('./Comments').Comments;

<Comments
  totalCount={1}
  status="fetching"
  comments={[comment]}
/>
```

Comments listing with error

```js
const comment = require('./comment.data').comment;
const Comments = require('./Comments').Comments;

<Comments
  totalCount={1}
  status="failure"
  comments={[comment]}
/>
```
