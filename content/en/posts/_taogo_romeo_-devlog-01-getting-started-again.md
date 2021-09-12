+++
author = "Ratul Minhaz"
categories = ["Devlog"]
date = 2021-09-11T22:00:00Z
description = ""
draft = true
layout = "post"
tags = ["projects", "rants"]
title = "_taogo_romeo_ devlog 01: Getting Started Again"

+++
Honestly I don't even know how many times I have had this conversation with myself. Each time I start working on a personal project after eons the following monologue goes on in my mind:

: Umm, this code looks weird and dirty, why did I even decide to do it like this?

: Oh god, this was going in a completely wrong direction

: Damn I got some major cleaning up to do!

: Am I sure I actually want to continue this?

: Mission abort: the project structure looks completely alien now!

I haven't ever been a projects guy, even if I wanted to. I like to code, craft pieces of software and my day job as a backend developer used to allow me sate that appetite. Perhaps this is why I haven't felt the urge to make something again until I was well into my new role as a data engineer. Being a data engineer now allowed me to play around a lot different set of tools, concepts and architectures, but they aren't software projects and doesn't really represent a well encapsulated problem that can be solved within a predefined parameters. I am not complaining about my role at all but I do miss the rigorous process of making a well oiled product that users can be benefitted from and has a scope of expanding in terms of usability.

I have had this idea rolling in my head for some time now and even though it has been tossed around by different people in different context, I figured this can be a good no brainer starting point for me. The idea was implementing a tech radar, basically a full stack app with a okayish backend and nice frontend. The idea has a couple of challenges in the concept itself, but I can take inspiration from the hundreds of implementations lying around the internet. Well may be not hundreds but examples are abundant enough for me not having to put in too much thought about the general idea and focus on the nitty gritty details instead. And may be let me enjoy just coding for a change, without worrying about which feature would fit in the project next.

In summary my goals from the project would be two fold. My personal expectations:

1. I would get to play around with Go, a language I like but never got to play around much
2. I get to make a VueJS project, again a library that I used years ago and enjoyed a lot
3. Learn a bit of CI/CD in the process, I never got to do much in that department
4. Practice goddamn good git habits for a change

As for the project itself, the goals would be:

1. Make it so that anyone can spin up their own tech radar without much hassle
2. Be useful to small to mid tech companies to have a visual representation of their tech landscape without paying any subscription
3. The codebase is readable enough for anyone to jump in with contributions

For now I will not try to over think the end game and just jump in the flow. I have already started and ditched this project earlier this year. I worked on the Go based backend and after implementing the basic API endpoints I managed to demotivate myself by looking at existing solutions fo the same software problem. Not unrelated, Go always makes me think way too critically about the architecture of my codebase which leads to premature optimisation. It's possible that I could have gotten the backend done within a few weekends had it been Python or Javascript, but the lack of universal standards for Go microservices push me to overthink my way of doing things and reorganise every now and then to the detriment of the velocity I have for development. 

This time around I will start small, like really small. Heck, I will not even code in my first commit. I have always been the eager coder who writes code first then asks what the feature was. This never occurred to me as an issue before as I had worked at start up environment as product engineer, where the market was competitive , where it would be beneficial to have the husk of a feature up and running while the product team figures out the details. As a data engineer though I have learned the benefit of slowing down to ask questions rather than just write code without direction. You can produce a completely wrong dataset if you don't do enough scavenging before actually working on a pipeline, specially in a start up. 

In essence I want to do two things different this time:

* Do really small, testable chunks
* Think about one feature at a time

I have initialised a new repo and added my basic understanding of the project in a readme, which everyone suggests and I never followed. But this is a new round and I hardly want to do the same mistakes mindlessly. You know what they say about insanity, it's doing the same thing again and again, expecting different results. Good luck to me.