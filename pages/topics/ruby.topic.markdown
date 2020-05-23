---
layout: wiki_page
title: Teck Stack
subtitle: Ruby
permalink: /wiki/ruby
key: ruby
---

<div class="row">
<div class="col-8" markdown="1">

Ruby is a magical language. It seems very simple because of it's syntax, but is
very complex once you learn more about it.
- General-purpose 
- Object-Oriented
- Open-Source
- Interpreted
- Scripting language, like Python, JavaScript,...
- Metaprogramming
- Clean and Simple Syntax

Useful links: <br>
[Ruby Guides](https://www.rubyguides.com/ruby-post-index/) <br>
[Hyperpolyglot](https://hyperpolyglot.org/scripting) <br>
[Ruby Academy](https://www.rubycademy.com/) <br>
[Questions](https://rubygarage.org/blog/how-to-interview-your-ruby-on-rails-developer)
[Memoize]

</div>

<div class="col bg-light rounded py-4" markdown="1">

- [Variables](#variables)
- [Symbols](#symbols)
- [Blocks, Proc & Lambda](#blocks-proc--lambda)
    - [`yield`](#yield)
    - [`&`](#)
    - [`curry`](#curry)
- [Libraries & Objects](#libraries--objects)
  - [Class](#class)
    - [`initialize`](#initialize)
    - [Attributes](#attributes)
    - [Eigenclass](#eigenclass)
    - [`ancestors`](#ancestors)
  - [Module](#module)
  - [Methods invocation](#methods-invocation)
  - [Access Control](#access-control)
  - [`include`](#include)
  - [`extend`](#extend)
  - [`super`](#super)
  - [`freeze`](#freeze)
  - [`self`](#self)

</div>
</div>



<br>
## Variables

There are 4 types of variables used in Ruby:
- class variables start with `@@`, e.g. `@@my_var`.
- instance variables start with `@`, e.g. `@my_var`.
- global variables start with `$`, e.g. `$my_var`.
- local variables are not prefixed.

<br>
<hr>
<br>
## Symbols
- Symbols are immutable
- Symbols are not pointer to values, they are values themselves
- Strings are for data & symbols are for identity
- Symbol GC was introduced in Ruby 2.2 to clean up temporary symbols
- Multiple symbols representing a single value are identical.
- Symbols live for the duration of the session and it can be reused again but it 
can lead to increased memory usage.

```
:im_a_symbol
```

**vs Strings** <br>
Strings are used to work with data. Symbols are identifiers.
You should use symbols as names or labels for things (like methods) & use 
strings when you care more about the data (individual characters).

<br>
<hr>
<br>

## [Blocks, Proc & Lambda](https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/)

**BLOCK** <br>
Closure statement, anonymous functions that can be passed into methods.
<br><br>
**PROC** <br> 
A type of functions that can be stores in variables or used as argument
<br><br>
**LAMBDA** <br>
Special type of Proc

**Proc vs Lambda:**
- Are defined differently
- Procs return from the current method, while lambdas return from the lambda 
  itself.
- Procs don’t care about the correct number of arguments, while lambdas will 
  raise an exception.
<br><br>

```
# Block
array.each do |x|
  ...
end

array.each { |x| ... }

# Proc
my_proc = Proc.new { |x| puts x }

# Lamda
times_two = ->(x) { x * 2 }
times_two.call(10)
```
<br><br>

#### `yield`

A keyword that calls a block when you use it. **It’s how methods USE blocks!**
You could also use `block.call`
- Calling a block runs the code inside that block (like calling a method)
- Yield can pass any number of arguments to the block
- The block’s return value becomes the return value for yield

#### `&`
When a parameter is passed with `&` in front of it (indicating that is it to be 
used as a block): 
```
array.map(&:method_name)
```
Ruby will call `to_proc` on it in an attempt to make it usable as a block. 
`Symbol#to_proc` returns a **Proc** that will invoke the method of the 
corresponding name on whatever is passed to it.

#### [`curry`](https://medium.com/@cesargralmeida/currying-a-ruby-approach-b459e32d355c)

This methods allow:
- Partial function aplication is calling a function with some number of 
arguments, in order to get a function back that will take that many less 
arguments.
- Currying is taking a function that takes `n` arguments, and splitting it into 
`n` functions that take one argument.

It looks like this by hand:
```
proc { |x, y, z| x + y + z } 
proc { |x, y| proc { |z| x + y + z} }  # partial function application
proc { |x| proc { |y| proc { |z| x + y + z} } } # currying
```

Ex:
```
apply_math = lambda do |fn, a, b|
  a.send(fn, b)
end

add = apply_math.curry.(:+)
subtract = apply_math.curry.(:-)
multiply = apply_math.curry.(:*)
divide = apply_math.curry.(:/)

add.(1, 2) # => 3
```


<br>
<hr>
<br>

## Libraries & Objects
<br>

### Class
```
class X; end
X.new # create an X object
```

<br>
#### `initialize`
The initialize method is the constructor of the object-creation process.

When you call `new`, Ruby calls `initialize!`

- Using return inside this method doesn’t make sense because it is special and 
it’ll **ALWAYS** return a new object.
- Defining initialize is NOT necessary if your class doesn’t require arguments.
- You can't defined multiple initializers, but you can get the same result
defining multiple arguments or defining your arguments as hash.

<br>
#### Attributes

`attr_reader` (read-only)
`attr_writer` (write-only)
`attr_accessor` (read & write)

<br>
#### [Eigenclass](https://medium.com/rubycademy/understanding-the-eigenclass-in-less-than-5-minutes-dcb8ca223eb4)

The eigenclass is an unnamed instance of the class `Class` attached to an object 
and which instance methods are used as singleton methods of the defined object.

<br>
#### `ancestors`
Returns an Array that represents the ancestor chain. The ancestor chain is the 
representation of the class hierarchy in Ruby. In order, it contains:
- The calling class
- its included modules
- its parent class
- the included modules of its parents class
- the parent class of its parent class
- etc..

**BasicObject:**
Is the top parent of all class. It contains a bare minimum 
of methods for object creation and object comparison.

**Kernel:**
The `Kernel` module is included in the `Object` class. It contains all the 
“object manipulation” logic.

**Object:**
As the `Kernel` module contains the majority of the methods, `Object` is more 
used  as  an interface (for its name) by all its children.

When a new program starts, Ruby automatically creates the `main` object which is 
an instance of the `Object` class. main is the top-level context of any program. 

<br>

### Module
```
module Y; end
```

Modules are Ruby’s way of grouping methods, classes, and constants together to 
provide a namespace for preventing name clashes. The second purpose of modules 
is to use them as mixins. Technically, Ruby only supports single inheritance, 
but by using modules as mixins, it is possible to share code among different 
classes—a key advantage of multiple inheritance—without having to give up the 
simplicity of the single inheritance paradigm.

<br>

### Methods invocation
There are different ways of calling a method:
```
class ABC
  def xyz
    puts "xyz in ABC"
  end
end
ABC::new::xyz
ABC::new.xyz
ABC.new::xyz
ABC.new.xyz
```
The first place that Ruby looks for a method is in the object’s metaclass or 
eigenclass—the class that contains methods directly defined on the object. If 
the method cannot be found in an object’s metaclass, Ruby will then search for 
the method in the ancestors of an object’s class. 

If Ruby cannot find the method, it will internally send another method aptly 
called “method_missing?” to the object class. Ruby will repeat another search 
for this method.

<br>
### Access Control
In Ruby, methods may either be:
- **public** can be called by anyone.
- **protected** are only accessible within their defining class and its 
  subclasses
- **private** can only be accessed and viewed within their defining class. Can 
  still be executed outside the class by using the method `send`.

<br>
### `include`
Mixes in specified module methods as _instance methods_ in the target class.

<br>
### `extend`
Mixes in specified module methods as _class methods_ in the target class.

<br>
### `super`
It calls a method on the parent class with the same name as the method that 
calls `super`.
  - Without arguments: It will pass along the arguments used for the original 
    method call to the new one, including keyword arguments & a block if given.
  - With arguments: `super(arg1, arg2, ...)` to choose what arguments you want 
    to pass.
  - It can only be used inside a method.
  - It returns the result from calling the parent method.
  - It can be called multiple times.

Ex: You can use super to implement the decorator pattern, or if you call it 
inside the initialize method it can be used to initialize instance variables on 
the parent class.

<br>
### `freeze`
Sometimes it can be useful to prevent an object from being changed. This can be 
accomplished using the freeze method (`Object.freeze`).

<br>
### `self`

It’s a Ruby keyword that gives you access to the current object, and depends on 
the context. If your code is inside an instance method, `self` is an instance of 
that class. In other words, `self` is an object.

- Define class-level methods
- Use an instance method when you have a local variable of the same name
- Returning Self (builder pattern)
- Debugging
- Comparing objects (==)
- Default receiver of method calls