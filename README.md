# string-manager

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
## Available modules 
- `toCamelCase`, generate camel case style for any string 

    example :
    ```
    import {toCamelCase} from 'string-manager'

    console.log(toCamelCase('my name is yusuf'))
    ``` 
    will be : **'My Name Is Yusuf'**

- `objToQuery`, convert object to http query 

    example :

    ```
    import {objToQuery} from 'string-manager'

    let data = {
        is_active: false,
        count: 2,
        page: 1
    }
    console.log(objToQuery(data))

    ```
    will be : **'is_active=false&count=2&page=1'**

- `queryToObj`, convert http query to object

    example : 
    ```
    import {queryToObj} from 'string-manager'

    let query = is_active=false&count=2&page=1
    console.log(queryToObj(query))
    ```

    will be :
    ```
    {
        is_active: false,
        count: 2,
        page: 1
    }
    ```
- `stripTags`, remove html tags 
    example : 
    ```
    import {stripTags} from 'string-manager'
    let str = stripTags('<p>masak sepatu</p>')
    ```
    will be **'makan sepatu'**

- `toSingleSpace`, replace multiple spaces to single space
    example :
    ```
    import {toSingleSpace} from 'string-manager'
    let str = toSingleSpace(' perubahan   kaki   panas ')

    ```
    will be **'perubahan kaki panas'**

- `truncate`, smart truncate string without losing meaning, with extra suffix.
    example :
    ```
    import {truncate} from 'string-manager'
    let str = truncate('memasak mi ayam hujan-hujan seperti ini memang enak, apalagi ada tambahan segelas teh hangat, makin ok', 25, '...')
    ```
    will be **'memasak mi ayam hujan-hujan...'**

    standart js substring, will be **'memask mi ayam hujan-huj'**

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