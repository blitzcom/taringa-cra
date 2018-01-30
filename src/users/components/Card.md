Basic Card

```js
const user = require('./user.data').user;

<div className="row">
  <div className="col-5">
    <Card {...user} />
  </div>
</div>
```

Card placeholder

```js
<div className="row">
  <div className="col-5">
    <Card status="fetching" />
  </div>
</div>
```
