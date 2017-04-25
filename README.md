# string-manager

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
## Available modules 
- `toCamelCase`, generate camel case style for any string 

    example : **my name yusuf**, will be : **My Name Yusuf**

- `objToQuery`, convert object to http query 

    example :

    ```
    {
        is_active: false,
        count: 2,
        page: 1
    }

    ```
    will be : **is_active=false&count=2&page=1**

- `queryToObj`, convert http query to object

    example : 

    **is_active=false&count=2&page=1**

    will be :
    ```
    {
        is_active: false,
        count: 2,
        page: 1
    }
    ```

## Contribution

### Found bugs and request
Don't be shy to report it via this link https://github.com/idmore/npm-string-manager/issues .

### Developers
For our github repository https://idmore/npm-string-manager.git, let's work together.