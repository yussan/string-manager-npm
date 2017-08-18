# Available modules

## toCamelCase 
- `toCamelCase(str)`, generate camel case style for any string 

    example :
    ```
    import {toCamelCase} from 'string-manager'

    console.log(toCamelCase('my name is yusuf'))
    ``` 
    will be : **'My Name Is Yusuf'**

## objToQuery
- `objToQuery(obj)`, convert object to http query 

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

## queryToObj(str)
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
## stripTags
- `stripTags(str)`, remove html tags 
    example : 
    ```
    import {stripTags} from 'string-manager'
    let str = stripTags('<p>masak sepatu</p>')
    ```
    will be **'makan sepatu'**

## trim
- `trim(str)`, trim space on first and last string
    example :
    ```
    import {trim} from 'string-manager'
    let str = trim(' perubahan kaki ')

    ```
    will be **'perubahan kaki'**

## toSingleSpace(str)
- `toSingleSpace`, replace multiple spaces to single space
    example :
    ```
    import {toSingleSpace} from 'string-manager'
    let str = toSingleSpace(' perubahan   kaki   panas ')

    ```
    will be **'perubahan kaki panas'**