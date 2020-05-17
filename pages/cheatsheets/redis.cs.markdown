---
layout: cheatsheet_page
title: Cheat Sheet
subtitle: Redis
permalink: /cheatsheet/redis
key: redis
---

https://cheatography.com/tasjaevan/cheat-sheets/redis/
https://redis.io/commands

## Operations
```
SET key "value"
SET server:name "fido"
SET server:name "fida" EX 5

GET key
GET server:name  # returns "fido"

EXISTS key
EXISTS server:name   # 1
EXISTS server:blabla # 0

SET connections 10
INCR connections     # 11
INCR connections     # 12
DEL connections
INCR connections     # 1

INCRBY connections 100 # 101

DECR connections => 100
DECRBY connections 10 => 90

EXPIRE resource:lock 120

TTL resource:lock => 113
// after 113s
TTL resource:lock => -2

PERSIST resource:lock
```

## Data Types
```
# LIST
RPUSH friends "Alice"
RPUSH friends "Bob"    # [Alice, Bob]
RPUSH numbers 1 2 3    # return the total length of the list after the operation.

LPUSH friends "Sam"    # [Sam, Alice, Bob]
LPUSH numbers 1 2 3    # return the total length of the list after the operation.

LRANGE friends 0 -1 => 1) "Sam", 2) "Alice", 3) "Bob"
LRANGE friends 0 1 => 1) "Sam", 2) "Alice"
LRANGE friends 1 2 => 1) "Alice", 2) "Bob"

LPOP friends => "Sam"
RPOP friends => "Bob"

LLEN friends => 1
ltrim mylist 0 2   # Capped list
LPUSH mylist <some element>
LTRIM mylist 0 999

# SET
SADD superpowers "flight"
SADD superpowers "x-ray vision" "reflexes"
SADD superpowers "flight" => 0
SADD superpowers "invisibility" => 1

SREM superpowers "reflexes" => 1
SREM superpowers "making pizza" => 0

SISMEMBER superpowers "flight" => 1
SISMEMBER superpowers "reflexes" => 0

SMEMBERS superpowers => 1) "flight", 2) "x-ray vision"

SADD birdpowers "pecking"
SADD birdpowers "flight"
SUNION superpowers birdpowers => 1) "pecking", 2) "x-ray vision", 3) "flight"

SADD letters a b c d e f => 6
SPOP letters 2 => 1) "c" 2) "a" # RANDOM

SRANDMEMBER key [n] # Return a random element from a Set, without removing the element. If the Set is empty or the key does not exist, a nil object is returned.


# SORTED SET
ZADD hackers 1940 "Alan Kay"
ZADD hackers 1906 "Grace Hopper"
ZADD hackers 1953 "Richard Stallman"
ZADD hackers 1965 "Yukihiro Matsumoto"
ZADD hackers 1916 "Claude Shannon"
ZADD hackers 1969 "Linus Torvalds"
ZADD hackers 1957 "Sophie Wilson"
ZADD hackers 1912 "Alan Turing"

ZRANGE hackers 2 4 => 1) "Claude Shannon", 2) "Alan Kay", 3) "Richard Stallman"
ZSCORE zset a => 10
ZSCORE zset non_existing_element => NULL

# HASH

HSET user:1000 name "John Smith"
HSET user:1000 email "john.smith@example.com"
HSET user:1000 password "s3cret"
HMSET user:1001 name "Mary Jones" password "hidden" email "mjones@example.com"

HGETALL user:1000
HGET user:1001 name => "Mary Jones"

HSET user:1000 visits 10
HINCRBY user:1000 visits 1 => 11
HINCRBY user:1000 visits 10 => 21
HDEL user:1000 visits
HINCRBY user:1000 visits 1 => 1

## https://redis.io/commands#hash
```


