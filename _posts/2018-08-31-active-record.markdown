---
layout: post
title:  "Rails Active Record"
date:   2018-08-31
categories: [rails, active record]
excerpt_separator: <!--more-->
---

After several months of working with Ruby on Rails, I want to gain a deeper understanding of Active Record in efforts to optimize performance and understand more of the good ol’ Rails magic. I drew information from many resources, which I will include as links at the bottom. This is a general overview of common concepts of Active Record.
<!--more-->

```
**Active Record Classes**

ActiveRecord::FinderRelations
Returns model instance, and run queries immediatelyraises error if not found
#find
returns nil if not found
#find_by
#first
#last
#exists?

**ActiveRecord::QueryMethods**
Returns relation, only runs query when calledreturns an array
#where
#group
#distinct
#includes
#joins
#select
```

***Aggregations***

Useful when performing mathematical operations, such as #count or #max.

```
Post.joins(:tags).group("tags.name").count
  # => {"tag1" => 4, "tag2" => 2, "tag3" => 5}
```

***Scopes***

Chains of ActiveRecord methods that are used with a relation. Scopes return relations, so you can chain them.

```
class User < ActiveRecord::Base
  scope :millennials, -> { where('age < 35') }
end
```

***Retrieve large batches***

Works for models and relations, and can chain methods
```
#find_eachUser.find_each(batch_size: 5000) do |user|
  NewsMailer.weekly(user).deliver_now
end
options: batch_size, start, finish, error_on_ignore#find_in_batches
```

Conditions can be used with ActiveRelations
```
Client.where("orders_count = ?", params[:orders])
```
***Joins (lazy loading)***

Lazy loading: queries are not fired until called upon

```
> user = User.where('age > 18')
> user.all #queries fired

# Returns all Users that have a blog post

users_with_posts = User.joins(:post)
users_with_posts.all

# Returns all User objects with posts in which have comments

User.joins(:post, :comment)

# join nested associations

User.joins(post: :something)
```
***Includes (eager loading, minimal queries possible)***

ActiveRecored lets you specify 1+ associations beforehand. It eagerly loads the table so there are not extra queries
```
User.includes(:posts, :followers)
```
***N + 1 problem***

We want to avoid unnecessary queries through associations.

#includes uses eager loading

An example of eager loading is #pluck. It pulls up a bunch of records and stores in memory, grabs the column and returns an array.

***Joins vs Includes***

Use joins when you don’t want to access data from the associated table

Use includes when you want to access data from the associated table


**More Resources**
[api.rubyonrails.org](api.rubyonrails.org)
[guides.rubyonrails.org](guides.rubyonrails.org)
(rubyinrails.com)[rubyinrails.com]
