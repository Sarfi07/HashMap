# HashMap implementation for Javascript

Simple Hashmap class to use. Written in Javascript

## Getting Started

```
npm i @sarfi07/hashmap
```

In js file

```
import hashMap from 'path';


let newHashMap = new hashMap();
newHashMap.set('pieValue', '3.14159')

console.log(newHashMap.has('pie'));
```

Run `Node filename.js`

The `Terminal` should display `true` if done correctly.

### HashMap

`set(key, value)` : Takes two arugments, key and value (which is assigned to the key).If the key already exists, then the old value is overwritten.

`get(key)` : Takes one argument. If the given key is in the hash map then it will return `true`. if it isn't then `false`.

`length` : Returns the number of stored keys in the hash map.

`clear` : Calling this function will removes all entries in the hash map.

`keys`: Returns an array containing only the keys that are stored in the hash map.

`values` : Array of stored <i>values</i> is returned.

`entries` Returns an array that contains each `key, value` pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`

### Hash Set

Behaves the same as the `HashMap` but only containes keys with not values.

Some functions are not available in `hash set` as compared to `hash map` for obvious reasons like
`values`, `entries`
