# string-manager
An npm module to manipulate string.

## Instalation
```
npm install string-manager
```

## How to Use 
sample :
```
import {objToQuery} from 'string-manager'

let obj = {
    is_active: false,
    count: 2,
    page: 1
}
console.log('?'+objToQuery(obj))
```
result :
```
?is_active=false&count=2&page=1
```
## Documentations
[Read more here](https://github.com/idmore/npm-string-manager/blob/master/docs/modules.md) 

## Contribution

### In Progress 
https://trello.com/b/CmJX7AGz/npm-string-manager-https-www-npmjs-com-package-string-manager

### Found bugs and request
Don't be shy to report it via this link https://github.com/idmore/npm-string-manager/issues .

### Developers
For our github repository https://idmore/npm-string-manager.git, let's work together.

#### Commands 
- **Build**
 ```
 yarn run build
 ```
 Build directory destination 
 ```
 ./dist
 ```

- **Unit Testing**
 We are using mocha to as unit testing
 ```
 yarn run test
 ```