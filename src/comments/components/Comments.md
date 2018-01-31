Comments idle

```js
const Comments = require('./Comments').Comments;

<Comments />
```

Comments empty

```js
const Comments = require('./Comments').Comments;

<Comments
  totalCount={0}
  status="success"
  story="1"
  storyStatus="success"
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
  story="1"
  storyStatus="success"
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
  story="1"
  storyStatus="success"
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
  story="1"
  storyStatus="success"
/>
```
