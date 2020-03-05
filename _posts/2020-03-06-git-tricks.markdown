---
layout: post
title:  "Git Tricks"
date:   2020-03-03
categories: [git]
excerpt_separator: <!--more-->
---
Over the years, I have added git commands to this table. Finally pulling this from Confluence, and sharing it with you all!
<!--more-->

**Git Tricks**

Over the years, I have added git commands to this table. Finally pulling this from Confluence, and sharing it with you all!

| Git Command                           | Action/Description           |
| ------------------------------------- |:-------------:|
| git reset HEAD~                       | undo last commit |
| git diff                              | compare your unstaged changes with your previous commit. This will not work if you have not staged the changes.      |
| git rm <filename>                     | remove file from working directory and removes from being tracked      |
| git commit -am 'message for commit    | automatically stages every file that is already tracked      |
| git log                               | git log to see the most recent commits \n git log -p to see the most recent commits with diffs \n git log -p -2 see the last 2 commits with diffs      |
| git commit --amend                    | 	

Use this to add files to a commit that you forgot to stage

git commit -m 'blah'

git add dir/dir

git commit --amend


git reset HEAD <file>

unstages a staged file

[Andrea Wayte > Git Overview > image2018-6-20_17-14-33.png]
git checkout -- <filename>	unmodify a modified file by reverting back to its initial state
git tag	shows all tags, which are generally used to mark important versions, often releasesof
git checkout <tag name> -b <new branch>	creates a branch off of tag
git tag --contains <commit SHA>	shows a list of all the releases a commit is in
