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

## queryToObj
- `queryToObj(str)`, convert http query to object

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

## toSingleSpace
- `toSingleSpace(str)`, replace multiple spaces to single space
    example :
    ```
    import {toSingleSpace} from 'string-manager'
    let str = toSingleSpace(' perubahan   kaki   panas ')

    ```
    will be **'perubahan kaki panas'**

## truncate
- `truncate(str, int, str)`, smart truncate string without losing meaning, with extra suffix.
  example :
  ```
  import {truncate} from 'string-manager'
  let str = truncate('memasak mi ayam hujan-hujan seperti ini memang enak, apalagi ada tambahan segelas teh hangat, makin ok', 25, '...')
  ```
  will be **'memasak mi ayam hujan-hujan...'**

  standart js substring, will be **'memask mi ayam hujan-huj'**