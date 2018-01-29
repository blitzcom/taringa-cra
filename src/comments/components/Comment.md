Basic Comment

```js
const comment = require('./comment.data.js').comment;
<Comment {...comment} />
```

Comment with reply

```js
const comment = require('./comment.data.js').commentWithReply;
<Comment {...comment} />
```

Comment with replies

```js
const comment = require('./comment.data.js').commentWithReplies;
<Comment {...comment} />
```

Comment with visible replies

```js
const comment = require('./comment.data.js').commentWithReplies;
<Comment {...comment} showReplies />
```
