---
layout: post
title:  "Useful Resources"
date:   2020-03-03
categories: [rails, terminal, git]
excerpt_separator: <!--more-->
---
A collection of tips I've collected over the years
<!--more-->

bundler

bundle update <gem> --conservative

bundle _1.0.22_ install

	force ruby to use this version of bundler
gem install bundler 1.17.2 -v	install a bundler version

terminal
ps -ef 	

'process status'

finds all processes running on computer

| grep <word>	pipe to grep, finds word in associated file or command	ps -ef | grep puma
kill -9 <id>	kill process	kill -9 15140

git log --all --grep="<phrase to look for>"
	filter commits	git log --all --grep="event stream"
git branch -D `git branch --list '<word>*'`	remove branches starting with ..	git branch -D `git branch --list 'SN*'`

 tail -f path/to/log

	watch the log	tail -f log/development.log

  when yarn lock has merge conflicts
  git rebase origin/master

git checkout origin/master -- yarn.lock
yarn install

git add yarn.lock
git rebase --continue
