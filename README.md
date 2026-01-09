# navmeshcppjs

path finding library for [LeagueEmulatorJS](https://github.com/Karmel0x/LeagueEmulatorJS) with nodejs bindings  
atm just for testing purposes..  


navmesh source:  
[github.com/ilyanikolaevsky/navmesh](https://github.com/ilyanikolaevsky/navmesh)

# Todo
- NavMesh::ConeOfVision - may be usefull too
- class to instance pathfinding
- possibility to pass polygons from js

# Usage
```
const Navmeshcppjs = require('../navmeshcppjs');

Navmeshcppjs.initialize(); // atm static polygons for SR

let startPoint = {x: 60, y: 80};
let endPoint = {x: 240, y: 260};
let path = Navmeshcppjs.getPath(startPoint, endPoint);
// [{x, y}, ...]
```

# Build
```
npm install -g node-gyp
npm install

cd bindings
node-gyp configure
node-gyp build
```
