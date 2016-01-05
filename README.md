## Activity Streams 2.0 Dust Context Helper

Returns a function that creates a Dust Context Helper wrapper for a
`as.models.Object` instance (requires the `activitystrea.ms` module)

```javascript`
const as2dust = require('as2-dust');

var obj = as.object().name('test').get();
var wrp = as2dust(obj);
```
