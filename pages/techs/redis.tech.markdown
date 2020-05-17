---
layout: tech_page
title: Teck Stack
subtitle: Redis
permalink: /tech/redis
key: redis
---

<div class="row">
<div class="col-8" markdown="1">

Redis is an open source, in-memory data structure store, used as a database, 
cache and message broker.
- key-value store database.

Often Redis it is called a data structure server because it has outer key-value 
shell, but each value can contain a complex data structure, such as a string, a 
list, a hashes, or ordered data structures called sorted sets as well as 
probabilistic data structures like hyperloglog.

The essence of a key-value store is the ability to store some data, called a value, inside a key. The value can be retrieved later only if we know the specific key it was stored in. There is no direct way to search for a key by value. In some sense, it is like a very large hash/dictionary, but it is persistent.


Useful links: <br>
[Redis Official Website](https://redis.io/) <br>

</div>

<div class="col bg-light rounded py-4" markdown="1">

- [CLI](#cli)
- [Configuration](#configuration)
  - [Cluster](#cluster)
- [Operations](#operations)
  - [`INCR` / `DECR`](#incr--decr)
  - [Key expiration](#key-expiration)
- [Data Type](#data-type)
  - [List](#list)
  - [Set](#set)
  - [Sorted Set](#sorted-set)
  - [Hashes](#hashes)
  - [Stream](#stream)
- [Transactions](#transactions)
- [Memory](#memory)
- [Pipelining](#pipelining)
- [Indexes](#indexes)
- [Uses](#uses)
  - [Cache](#cache)
  - [Publish/Subscribe](#publishsubscribe)

</div>
</div>

<br>
## CLI

<br>
## Configuration

### Cluster

<br>
## Operations
All the Redis operations implemented by single commands are atomic, including the ones operating on more complex data structures. So when you use a Redis command that modifies some value, you don't have to think about concurrent access.


### `INCR` / `DECR`

There is something special about INCR. Why do we provide such an operation if we can do it ourself with a bit of code? After all it is as simple as:

x = GET count
x = x + 1
SET count x
The problem is that doing the increment in this way will only work as long as there is a single client using the key. See what happens if two clients are accessing this key at the same time:

Client A reads count as 10.
Client B reads count as 10.
Client A increments 10 and sets count to 11.
Client B increments 10 and sets count to 11.
We wanted the value to be 12, but instead it is 11! This is because incrementing the value in this way is not an atomic operation. Calling the INCR command in Redis will prevent this from happening, because it is an atomic operation.

### Key expiration
Redis can be told that a key should only exist for a certain length of time. This is accomplished with the EXPIRE and TTL commands, and by the similar PEXPIRE and PTTL commands that operate using time in milliseconds instead of seconds.

## [Data Type](https://redis.io/topics/data-types-intro)

You can immediately begin working with a key as a list, as long as it doesn't already exist as a different type.

This concept is generally true for every Redis data structure: you don't create a key first, and add things to it later, but you can just directly use the command in order to add new elements. As side effect the key will be create if it did not exist. Similarly keys that will result empty after executing some command will automatically be removed from the key space.

### List

A list is a series of ordered values. Some of the important commands for interacting with lists are RPUSH, LPUSH, LLEN, LRANGE, LPOP, and RPOP. 

### Set

A set is similar to a list, except it does not have a specific order and each element may only appear once. Both the data structures are very useful because while in a list is fast to access the elements near the top or the bottom, and the order of the elements is preserved, in a set is very fast to test for membership, that is, to immediately know if a given element was added or not. Moreover in a set a given element can exist only in a single copy.

### Sorted Set

A sorted set is similar to a regular set, but now each value has an associated score. This score is used to sort the elements in the set.

### Hashes

Hashes are maps between string fields and string values, so they are the perfect data type to represent objects

### Stream

## Transactions

## Memory

## Pipelining

## Indexes


## Uses

### Cache

### Publish/Subscribe

Blocking operations on lists
Lists have a special feature that make them suitable to implement queues, and in general as a building block for inter process communication systems: blocking operations.

Imagine you want to push items into a list with one process, and use a different process in order to actually do some kind of work with those items. This is the usual producer / consumer setup, and can be implemented in the following simple way:

To push items into the list, producers call LPUSH.
To extract / process items from the list, consumers call RPOP.
However it is possible that sometimes the list is empty and there is nothing to process, so RPOP just returns NULL. In this case a consumer is forced to wait some time and retry again with RPOP. This is called polling, and is not a good idea in this context because it has several drawbacks:

Forces Redis and clients to process useless commands (all the requests when the list is empty will get no actual work done, they'll just return NULL).
Adds a delay to the processing of items, since after a worker receives a NULL, it waits some time. To make the delay smaller, we could wait less between calls to RPOP, with the effect of amplifying problem number 1, i.e. more useless calls to Redis.
So Redis implements commands called BRPOP and BLPOP which are versions of RPOP and LPOP able to block if the list is empty: they'll return to the caller only when a new element is added to the list, or when a user-specified timeout is reached.