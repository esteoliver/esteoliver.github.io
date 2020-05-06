---
layout: page
title: PHP Cheat Sheets
permalink: /cheat_sheets/php/
---

<!-- PHP
================================================================================

[Help](https://hyperpolyglot.org/scripting)
[More Help](https://www.w3schools.com/php/php_superglobals_request.asp)

To make it work:

Store your php file on `/var/www/html/yourdirectory/filename.php`

http://localhost/yourdirectory/filename.php

- [PHP](#php)
  - [Commands](#commands)
  - [Basics](#basics)
      - [Variables](#variables)
      - [Constants](#constants)
      - [Null](#null)
      - [Comments](#comments)
  - [Arithmetic & Logic](#arithmetic--logic)
      - [Values](#values)
      - [Operators](#operators)
      - [Math](#math)
        - [Float truncation](#float-truncation)
  - [Data Types](#data-types)
    - [Strings](#strings)
      - [Operations](#operations)
    - [Regex](#regex)
    - [Arrays](#arrays)
      - [Operations](#operations-1)
      - [Iteration](#iteration)
    - [Hash](#hash)
      - [Operations](#operations-2)
      - [Iteration](#iteration-1)
  - [Functions](#functions)
    - [Variable number of arguments](#variable-number-of-arguments)
    - [Array as arguments](#array-as-arguments)
    - [Anonymous functions](#anonymous-functions)
  - [Execution Control](#execution-control)
    - [If](#if)
    - [Switch](#switch)
    - [While](#while)
    - [For](#for)
    - [Conditional Expresion](#conditional-expresion)
  - [Objects](#objects)
    - [Class](#class)
    - [Module](#module)
    - [Reflection](#reflection)
  - [Exception](#exception)
    - [Raise](#raise)
    - [Try/Catch/Ensure](#trycatchensure)
  - [Libraries and Namespaces](#libraries-and-namespaces)
    - [Import](#import)
  - [Network](#network)
    - [URL](#url)
  - [Web](#web)
        - [Super Globals](#super-globals)
    - [GET](#get)
    - [POST](#post)
    - [Cookies](#cookies)
    - [Session](#session)

Commands
--------------------------------------------------------------------------------

```
> php -f foo.php                // interpreter
> php -a                        // open interactive PHP console

> pear list                     // list packages
> pear install Math_BigInteger  // install package

> php -S localhost:8000	        // start a web server

> php -l foo.php                // check syntax
```

Basics
--------------------------------------------------------------------------------

For PHP to work use the open/close tags
```
<?php 
  ...
  php code here; 
  php code here;
  ...
?>
```

You can config PHP to use other tags: `<? ?>`, `<?= ?>`, `<% %>`

#### Variables

Variables do not need to be declared and there is no syntax for declaring a 
local variable. If a variable with no previous reference is accessed, its value
is NULL.

```
$x = 1;
list($y, $z) = [2, 3]; // parallel assignment y = 2, z = 3
```
A variable is global if it is used at the top level (i.e. outside any function 
definition) or if it is declared inside a function with the global keyword. A 
function must use the global keyword to access the global variable.

```
$g = 1;

function incr_global() {
  global $g;
  ++$g;
}
```


#### Constants
```
define("PI", 3.14);
const PI = 3.14;
```
#### Null
```
NULL
```

#### Comments
```
// One line comment
/* Multiple line
   comment */

```

Arithmetic & Logic
--------------------------------------------------------------------------------
#### Values
```
TRUE FALSE // case insensitive
FALSE NULL 0 0.0 "" "0" [] // falsehoods
```

#### Operators
```
$a && $b
$a || $b
!$a

// lower precedence:
$a and $b
$a or $b
$a xor $b

$a == $b
$a != $b
$a <> $b
$a > $b
$a < $b
$a >= $b
$a <= $b

// no conversion
$a === $b
$a !== $b
```
Most of the relational operators will convert a string to a number if the other
operand is a number. Thus 0 == "0" is true. The operators === and !== do not 
perform this conversion, so 0 === "0" is false.

#### Math

```
$a + $b        // sum 
$a - $b        // minus
$a * $b        // product
$a / $b        // division
(int)($a / $b) // integer division
$a % $b        // mod
pow($a, $b)
sqrt($a)
abs($x)

min(1, 2, 3)
max(1, 2, 3)
$a = [1, 2, 3]
min($a)
max($a)
```

##### Float truncation
```
(int)$x
round($x)
ceil($x)
floor($x)
```


Data Types
--------------------------------------------------------------------------------
```
gettype($a)      // The PHP manual says that the strings returned by gettype 
                 // are subject to change and advises using the following 
                 // predicates instead:

NULL
boolean
integer
double
string
array
object
resource
unknown type

is_null
is_bool
is_numeric
is_int
is_float
is_string
is_array
is_object
is_resource
```

### Strings
```
'this is a string'

$variable = 'interpolation'; 
"this is a string with $variable"   // This is a string with interpolation
"this is a string with ${variable}"

"1 + 1 ${1 + 1}" // This cannot be done
```
#### Operations

```
$a . $b                             // concatenation
str_repeat($a, 80);                 // replicate
mb_strtoupper("lorem")              // to upercase
mb_strtolower("LOREM")              // to lowercase
ucfirst(strtolower("lorem"))        // capitalize
ucwords(strtolower("lorem ipsum"))
trim(" lorem ")                     // trim
ltrim(" lorem")
rtrim("lorem ")
implode(" ", ["a","b","c"])         // join
explode(" ", "do re  mi")           // split
mb_strlen("lorem")                  // length
```

### Regex
```
'/lorem|ipsum/'
```

### Arrays
```
$a = [1, 2, 3, 4];
$a = range(1, 10);
$b =& $a           // address copy
$c = $a            // deep copy
```

#### Operations
```
$a[0]
$a[0] = "lorem";
count($a)
!$a                                 // empty?
array_slice($a, $from, $count)
array_slice($a, $from)

array_push($a, 9);                  // push-pop
$a[] = 9;
array_pop($a);

$a = [6, 7, 8];                     // shift-unshift
array_unshift($a, 5);
array_shift($a);

array_merge($a, $b)                 // concatenate
array_reverse($a)                   // reverse
sort($a)                            // sort, change $a value
array_unique($a)                    // uniq
in_array(7, $a)                     // include?
array_intersect($a, $b)
```

#### Iteration
```
foreach ($a as $i) { echo "$i\n"; }
foreach ($a as $i => $e) { echo "$s at index $i\n"; }  // with index

array_map(function ($x) {                              // map
    return $x * $x;
  }, [1, 2, 3])

array_filter([1, 2, 3],                                // filter
  function ($x) {
    return $x>1;
  })

array_reduce([1, 2, 3],                                // reduce
  function($x,$y) {
    return $x + $y;
  }, 0)

$a = array_map(NULL,                                   // zip
  [1, 2, 3],
  ["a", "b", "c"]);
```

### Hash

Arrays and hash (or dictionaries) use the same structure
```
$d = ["t" => 1, "f" => 0]
$d["t"] = 2;
$d["t"]                   // returns 2

$d["lorem"]               // NULL
$d["lorem"] = "ipsum"     // adds key/value pair

array_keys($d)
array_values($d)
```

When you declare an array, the keys for those values are automaticaly assign,
so you can declare something like this
```
$a = [1, 2, 3, "title" => "hola"];
```

#### Operations
```
count($d)
array_key_exists("y", $d);  // exists key
unset($d["key"]);           // delete
array_merge($d1, $d2);      // merge
```

#### Iteration
```
foreach ($d as $k => $v) {
  echo "value at ${k} is ${v}";
}
```

Functions
--------------------------------------------------------------------------------
```
function function_name($args, $args_default = 1) {
  ...
  return $
  result;
}

function_name($x);

$a = "function_name"   // this works!
$a($x);
```
If a variable containing a string is used like a function then PHP will look
for a function with the name in the string and attempt to invoke it.

### Variable number of arguments
```
function first_and_last() {

  $arg_cnt = func_num_args();

  if ($arg_cnt >= 1) {
    $n = func_get_arg(0);
    echo "first: " . $n . "\n";
  }

  if ($arg_cnt >= 2) {
    $a = func_get_args();
    $n = $a[$arg_cnt-1];
    echo "last: " . $n . "\n";
  }
}
```

### Array as arguments
```
$a = [1, 2, 3];

call_user_func_array("add3", $a);
```

### Anonymous functions
```
$square = function ($x) {
  return $x * $x;
};
```

Execution Control
--------------------------------------------------------------------------------

### If
```
if ( 0 == $n ) {
  echo "no hits\n";
} elseif ( 1 == $n ) {
  echo "one hit\n";
} else {
  echo "$n hits\n";
}
```

### Switch
```
switch ($n) {
case 0:
  echo "no hits\n";
  break;
case 1:
  echo "one hit\n";
  break;
default:
  echo "$n hits\n";
}
```

### While
```
while ( $i < 100 ) { $i++; }

$i = 0;
do {
    echo $i;
} while ($i > 0);
```

### For
```
for ($i = 1; $i <= 10; $i++) {
  echo "$i\n";
}
```

### Conditional Expresion
```
$x > 0 ? $x : -$x
```

Objects
--------------------------------------------------------------------------------
### Class

Properties (i.e. instance variables) must be declared public, protected, or private. Methods can optionally be declared public, protected, or private. Methods without a visibility modifier are public.

```
class Int
{
  public $value;
  const pi = 3.14;

  function __construct($int=0)
  {
    $this->value = $int;
  }

  function plus($i) { ... }  
}

$i = new Int();       // initialize
$i2 = new Int(7);

$v = $i->value;       // get/set values
$i->value = $v + 1;

$i->plus(7)           // call functions

Int::pi               // call constants
```

### Module
```
class Counter extends Int
{
  private static $instances = 0;
  function __construct($int=0)
  {
    Counter::$instances += 1;
    parent::__construct($int);
  }
  function incr()
  {
    $this->value++;
  }
  static function getInstances()
  {
    return $instances;
  }
}

Counter::getInstances()   // invoke functions
```

### Reflection
```
get_class($o) == "Foo"        // returns FALSE if not an object:
method_exists($o, "reverse")
get_class_methods($o)
get_object_vars($o)
```

Exception
--------------------------------------------------------------------------------

### Raise
```
throw new Exception("bad arg");
```

### Try/Catch/Ensure
```
try {
  risky();
} catch (Exception $e) {
  echo "risky failed: ",
    $e->getMessage(), "\n";
}
finally {
  release_resource();
}
```

Libraries and Namespaces
--------------------------------------------------------------------------------
```
require_once("foo.php");            // load library
include_once("foo.php");            // not fatal if error


$libpath = ini_get("include_path"); // libraries path 
ini_set("include_path",
  $libpath . ":/some/path");
```

```
namespace Foo;
namespace Foo\Bar;
```

### Import
Only class names can be imported



Network
--------------------------------------------------------------------------------
```
$host = gethostname();
$ip = gethostbyname($host);
$host2 = gethostbyaddr($ip);

$url = 'http://www.google.com'; // http GET
$s = file_get_contents($url);
```

### URL

Parse URL
```
$url = "http://google.com:80/foo?q=3#bar";
$up = parse_url($url);

$protocol = $up["scheme"];
$hostname = $up["host"];
$port = $up["port"];
$path = $up["path"];
$query_str = $up["query"];
$fragment = $up["fragment"];

# $params is associative array; if keys
# are reused, later values overwrite
# earlier values
parse_str($query_str, $params);
```

Web
--------------------------------------------------------------------------------
##### Super Globals
Superglobals were introduced in PHP 4.1.0, and are built-in variables that are 
always available in all scopes.
```
$GLOBALS
$_SERVER
$_REQUEST
$_POST
$_GET
$_FILES
$_ENV
$_COOKIE
$_SESSION
```
### GET
`$_GET`

```
# index.php
<!DOCTYPE html>
<html lang="en">
<body>
  ...
  <a href="index.php?search=term">Lets go!</a>

  <h3><?php echo $_GET['search']; ?></h3>
  ...
</body>
</html>
```

### POST
`$_POST`

```
# form_procesor.php
<?php
  echo print_r($_POST);   // Array ( [name] => submitted )
?>

# index.php
<!DOCTYPE html>
<html lang="en">
<body>
  ...
  <form action="form_procesor.php" method="post">
    <input type="text" name="name">
    <input type="submit" name="model" value="Submit">
  </form>

</body>
</html>
```

### Cookies
`$_COOKIE`

A cookie is a bit of data stored by the browser and sent to the server with 
every request.

```
setcookie($name, $value, $expiration);
```

### Session
`$_SESSION`

A session is a collection of data stored on the server and associated with a 
given user (usually via a cookie containing an id code)

```
session_start(); // this function must be the very first thing in your document
                 // before any HTML tags
session_unset();
session_destroy();
``` -->