---
layout: post
title:  "Postgres, Rails, and ANY"
date:   2018-12-03
categories: [rails, postgres, ruby]
excerpt_separator: <!--more-->
---

We needed to develop a new feature which allowed users to enable certain events to receive emails for. Before, each event sent emails to everyone in the account. However, some users did not need notifications for each event, so we needed to develop the ability to select which types of events to receive emails.
<!--more-->
We needed to develop a new feature which allowed users to enable certain events to receive emails for. Before, each event sent emails to everyone in the account. However, some users did not need notifications for each event, so we needed to develop the ability to select which types of events to receive emails.

I spent some time researching and brainstorming how to tackle this. I knew we wanted to store the option types in an array, so I was on the hunt for which data type to use. I have used jsonb before, but was feeling this might be too heavy for storing a simple array. Adding new columns for each event was something I wanted to avoid, in case we need to add more types of email events. I decided to settle on json (at first).

```
add_column :email_contacts, :event_types, :string, array: true, default: ['creation', 'sign', 'update']
```
The next challenge was to find the most efficient way to determine if a record had a certain item in the array. I came across ANY.
```
scope :creation_event, -> { where("'creation' = ANY(event_types)") }
```
This scope returns all the records which includes creation in the array of event_types. With the addition of :pluck, I was able to quick get an array of all the email addresses!
