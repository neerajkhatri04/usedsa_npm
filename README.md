## Usage

```python
const { ds, algo } = require("usedsa");

const arr = [4, 5, 1, 3, 7, 9, 0, 2, 8, 6];

algo.merge_sort(arr);

const newarr = algo.merge_sort(arr);
console.log(newarr);
```

## Heap

```python
const pq = new ds.priority_queue((a, b) => a > b);

pq.add(1);
pq.add(2);
pq.add(6);
pq.add(3);

console.log(pq.peek());
```
