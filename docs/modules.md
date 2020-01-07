# Available modules

## scaleNumber

- `scaleNumber(number)`, scaling large numbers to smaller character

  example :

  ```
  import {scaleNumber} from 'string-manager'

  console.log(scaleNumber(1000000))
  ```

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

## HTML

- `stripTags(str)`, remove html tags

  example :

  ```
  import {stripTags} from 'string-manager'
  let str = stripTags('<p>masak sepatu</p>')
  ```

  will be **'makan sepatu'**

- `nl2br(str)`, convert \n to <br/> tags

  example :

  ```
  import {nl2br} from 'string-manager
  let content = nl2br('<p>hai Luth\napakah kamu siap?</p>')
  ```

  will be `'hai Luth<br/>apakah kamu siap?'`

## nl2br

- `nl2br(str)`, replace newline string into newline HTML tag
  example :
  ```
  import {stripTags} from 'string-manager'
  let str = nl2br('ayo lari \n besok pagi')
  ```
  will be **'ayo lari &lt;/br&gt; besok pagi'**

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
  const str = truncate('memasak mi ayam hujan-hujan seperti ini memang enak, apalagi ada tambahan segelas teh hangat, makin ok', 25, '...')
  ```

  will be **'memasak mi ayam hujan-hujan...'**

  standart js substring, will be **'memasak mi ayam hujan-huj'**

## toSlug

- `toSLug(str)`, slug generator, replace space to single dash and remove unsupport characters for url.

  example :

  ```
  import {toSlug} from 'string-manager'
  const slug = 'iam ready (for everything) to start'
  ```

  will be **'iam-ready-for-everything-to-start'**

## Currency

- `currencyFormat(int, str)`, set dot after three digit for currency nominal.

  example :

  ```
  import { currencyFormat } from 'string-manager
  const price = currencyFormat(245000, 'Rp')
  ```

  will be **'Rp 245.000'**

## Masking

- `toMask(str, start, end)`, mask character by asteric symbol / \*

  example :

  ```
  const res = toMask('testdrive@gmail.com', 0, 8)
  ```

  will be ****\*****@gmail.com
