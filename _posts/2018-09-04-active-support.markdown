---
layout: post
title:  "Rails Active Support Quick Guide"
date:   2018-09-04
categories: [ruby]
excerpt_separator: <!--more-->
---

In my effort to learn more about Rails and all of it's magic, I dove into the docs and wrote up a concise version from Ruby Guides.
<!--more-->
This is a concise version from Ruby Guides. For more methods and in depth documentation, visit https://guides.rubyonrails.org/active_support_core_extensions.html

**#blank?, #present?**

blank values include nil, false, strings of whitespace, empty arrays/hashes

**#presence**

returns receiver or nil

name = user[:name].presence || 'No name'

**#deep_dup**

Dup is a Ruby method, but does not dup an object containing other objects.

**#try**

```
# without try
  unless @number.nil?
    @number.next
  end

# with try
  @number.try(:next)
```

**#to_param**

create a custom param for an object

```
class Article
  def to_param
    "#{id}=#{name.paramterize}"
  end
endarticle_path(@article)
=> "/articles/1-dog-show"
```

**#to_query(namespace = nil)**

constructs a query string from a hash. If given a namespace, it will be used to enclose key names and use any to_param.

```
{ name: 'bob', age: '25' }.to_query
=> "name=Bob&age=25"
```

**#with_options**

A way to group options, often used with ActiveRecord models.

**#instance_values**

returns a hash that maps instance values without the ‘@’

```
class User
  def initialize(name, age)
    @name, @age = name, age
  end
end

User.new("Andrea", 25).instance_values
=> {"name" => "Andrea", "age" => 25}
```

**#instance_variable_names**

returns an array of instance variables

```
class User
  def initialize(name, age)
    @name, @age = name, age
  end
end

User.new("Andrea", 25).instance_variable_names
=> [ "@name", "@age" ]
```

**#in**

returns whether an object is in another object, returns a boolean or an error if the argument does not respond to include?

```
5.in?([1,2,3,4,5])    # => true
"mo".in?("tomorrow")  # => true
25.in?(50..100)       # => false
1.in?(1)              # => ArgumentError
```

**delegate, delegate_missing_to**

forwards methods. If there is an association between 2 objects, this way they can forward methods instead of object.method_name

```
class Article < ApplicationRecord
  has_one :author  delegate :author_name, to: author
  delegate_missing_to :author
end
```

**#html_safe**

Marks strings as being safe to insert into HTML

```
"".html_safe? => false
s = "".html_safe
s.html_safe? # => true
```

**#squish**

Strips leading and trailing whitespace, and substitutes with a space.
```
" \n  disco\n\r \t ball \n".squish # => "disco ball"
```

**#truncate, #truncate_words**

returns a copy of its receiver based on given length

```
"A long time ago, in a galaxy far, far, away".truncate(18)
=> "A long time ago...""A long time ago, in a galaxy far, far, away".truncate_words(4)
=> "A long time ago..."
```

**#starts_with?, #ends_with?**

```
"hello".starts_with?("h") => true
"hello".ends_with?("h") => false
```

**#pluralize(count = 0), #singularize**

```
"animal".pluralize => "animals"
"animals".singularize => "animal
```

**#camelize, #underscore**

```
"full_name".camelize => "FullName"
"full_name".camelize(:lower) => "fullName""fullName".underscore => "full_name"
"User::Session".underscore => "user/session"
```

**#humanize**
```
"name".humanize                         => "Name"
"author_id".humanize                    => "Author"
"author_id".humanize(capitalize: false) => "author"
"comments_count".humanize               => "Comments count"
"_id".humanize                          => "Id"
```

**#symbolize_keys**
```
{ nil => nil, 5 => 5, "name" => "Bob }.symbolize_keys
=> { nil => nil, 5 => 5, :name => "Bob }.
```

For more methods, visit https://guides.rubyonrails.org/active_support_core_extensions.html
