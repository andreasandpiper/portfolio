---
layout: post
title:  "DDD"
date:   2019-02-23
categories: [ruby]
excerpt_separator: <!--more-->
---

Often times software design is described as layers of a cake. These different layers are common in Object Oriented Programming, where not only is there MVC, but service objects, form objects and more. The cake needs to be sliced vertically as well. These vertical layers/sub systems are often called Bounded Contexts.
The bounded context is a central pattern in Domain Driven Design. This is a solution for dealing with large models and teams. The idea is to have smaller models and clear data ownership. Think about which attributes change together in response to certain actions, and who changes those attributes. If something is bound within certain conditions, it might be its own context.

The pitfall developers fall into is adding one more attribute, one more column because we don't see how it fits into the whole system at that time.

Application design should not be coupled directly to UI, though common in CRUD apps. It may be that the user might change different aspects on certain occasions, like a password, profile photo, address, etc. These CAN have their own submit buttons, or auto-save.

When deciding how to modularize a class, ask the following questions:
> Why are they in the same db table and ActiveRecord model?
>Is it because they are updated on the same page?

Naming. For example, encrypted_password is not very similar to last_login_date, or avatar_image_url
Coupling in updates; which attribute are often updated together business wise.
Transitional consistency - which attributes need to be updated together in the same transaction. What happens if there is an error and only one command finishes, are there any consequences? Those classes with attributes that cooperate together and need to be updated together to abide by business rules are called Aggregates

When you extract attributes into smaller classes, you've created a bounded context!

**Dependency directions**

Sometimes there is a class that can read from other things, but the problem with this is that the class is reliant on the other classes, and limited in what in what it can do. For instance, it can not remove without deleting the other record. 
Another solution is for data to be published from one bounded context and consumed by another bounded context, resulting in its own storage. Usually this is used when the context needs less data than what was published.
Since the Active Record API is so wide, it is easy to expose data from other pats without an interface, such as using associations. This makes it difficult to know which parts of the app are reading the data.
So how do you expose data from one part to another via an interface?
Create an interface connecting the two parts (contexts).

**Value Objects**

describe, quantify, or measure an entity, such as Product or Order. Value objects have no identity, are are compared by the values they encapsulate, are are immutable. They are meant to pass information around, instead of passing solely attributes. 

**Entities**

a domain object with a unique identity, usually mutable, can have a lifecycle, and attributes/value objects describing it. 

**Aggregates**

a graph of domain objects you could load from the database, often seen as a cluster of objects. So if we change them, they should fully work or fail and rollback. Aggregates are used to protect business logic/requirements. The idea is to have small clusters of objects that do not easily cross each other.
