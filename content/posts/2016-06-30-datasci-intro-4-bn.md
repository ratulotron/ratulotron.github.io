---
layout: post
title: ডেটা সাইন্সে হাতে খড়ি - ৪
permalink: datasci-intro-4-bn
date: 2016-06-30T00:00:00.000+00:00
author: Ratul Minhaz
summary: Introductory data analysis and visualization
categories:
- tutorial
tags:
- python
- data science
published: true
updated: 2021-03-09 3:08 PM
description: ''

---
কোন কিছু হ্রাস-বৃদ্ধির হার বোঝার জন্য সবচেয়ে সহজ উপায় হল গ্রাফ আঁকা। স্কুলে-জীবনে লাভ-ক্ষতি বোঝার জন্য আমরা যে গ্রাফ এঁকেছি, সেই একই গ্রাফ দিয়ে নির্বাচনে কার অগ্রগতি বেশি-কম তা বোঝা যায় সহজে। ডেটা সাইন্সের ভাষায় এভাবে গ্রাফের মাধ্যমে তথ্যকে চিত্ররুপে দেখানোকে বলা হয় ভিজুয়ালাইজেশন। পাইথনের কিছু চমৎকার লাইব্রেরী আছে ভিজুয়ালাইজেশনের জন্য, আমরা ব্যবহার করব [Plotly](https://plot.ly/).


*এই টিউটোরিয়ালটি ডেটা সাইন্সে হাতে খড়ি সিরিজের তৃতীয় পর্ব। অন্যান্য পর্ব:*<br>
*1. [প্রস্তুতি]({{ site.url }}/datasci-intro-1-bn)*<br>
*2. [ডেটা সংগ্রহ]({{ site.url }}/datasci-intro-2-bn)*<br>
*3. [বিশ্লেষণ]({{ site.url }}/datasci-intro-3-bn)*<br>
*4. [ভিজুয়ালাইজেশন]({{ site.url }}/datasci-intro-4-bn) (<-- আপনি এখন এখানে)*<br>


### গ্রাফ বানানো

__X আর Y এক্সিসের মান__<br>
আমাদের গ্রাফে X axis এ বসার কথা মোট রেপোজিটরির সংখ্যার, আর Y axis এ অ্যাকাউন্টের বয়স। Plotly এর জন্য এই দুই axis এর মানগুলো দুটি লিস্টে রাখতে হবে। একই সাথে গ্রাফে ইউজারদের প্রতিটি বিন্দুর জন্য নাম-ও দিতে হবে, আমরা বিন্দুর নামের জন্য ইউজারদের প্রোফাইলের নাম ব্যবহার করব।  `users` লুপের আগে এজন্য তিনটি লিস্ট করুন: 

{% highlight python %}
repositories = []
ages = []
names = []
{% endhighlight %}

এবং `users` লুপের ভেতর শেষের দিকে এগুলো যোগ করুন যাতে প্রতি ইউজারের জন্য অ্যাকাউন্টের বয়স, রেপোজিটরির সংখ্যা এবং নাম লিস্টগুলোয় জমা হয়:

{% highlight python %}
ages.append(age)
repositories.append(page_info["public_repos"])
names.append(page_info["name"])
{% endhighlight %}


__Plotly দিয়ে প্লটিং করা__<br>
গ্রাফ বানানোর জন্য যেসব তথ্য দরকার ছিল আমাদের সব এখন আমাদের হাতে আছে। এবার আসল গ্রাফটা বানানোর পালা। আমরা Plotly নামে একটা লাইব্রেরী দিয়ে গ্রাফ বানাব, কারণ এটা দিয়ে বানানো গ্রাফ সহজেই ব্রাউজারে দেখা যায়। শুধু তাই না, ইচ্ছা করলে Plotly এর সাইটে-ও আপনার গ্রাফ সেভ করে রাখতে এবং অন্যদের সাথে শেয়ার করতে পারেন।  `pip install plotly` কমান্ড দিয়ে ইন্সটল করে নিন মডিউলটি। এই মডিউলটি কিভাবে ব্যবহার করা যায় তা জানতে [ডকুমেন্টেশন](https://plot.ly/python/) পড়ুন।

Plotly দিয়ে তৈরী গ্রাফে দুইটা কম্পোনেন্ট থাকে: layout এবং figure. Layout এ বলে দেয়া থাকে গ্রাফটার বিভিন্ন প্রোপার্টিজ যেমন গ্রাফের নাম, X ও Y axis এর রং ও নাম ইত্যাদি। অন্যদিকে আমাদের গ্রাফটা হবে এক ধরণের scatter graph। তাই এই সব উপাদান ইম্পোর্ট করতে হবে আগে:

{% highlight python %}
import plotly
from plotly.graph_objs import Scatter, Layout, Figure
{% endhighlight %}

গ্রাফে যত ধরণের অবজেক্ট আছে, বার চার্ট, লাইন, কিংবা পাই চার্ট সবই data নামে একটা লিস্টে রাখতে হবে `users` ফর লুপের পর যোগ করুন:

{% highlight python %}
data = [Scatter(
    x = repositories,
    y = ages,
    mode = 'markers+text',
    text = names,
    textposition = 'top'
    )
]
{% endhighlight %}

এ প্রোজেক্টে শুধু একটি Scatter অবজেক্ট আছে, যার x axis বরাবর repositories list এর মানগুলো, y axis বরাবর ages list এর মানগুলো থাকবে এবং প্রতিটি বিন্দুর নাম হবে names list এর নামগুলো।
 
এবার গ্রাফের টাইটেল এবং অক্ষগুলোর নাম-ও দেয়া যায়। একই সাথে গ্রাফের লেআউট-টা একটু কাস্টোমাইজ করা যাক। এই কোড দেখে ভয় পাবার কিছু নেই, আসমান থেকে তুলে আনি নি এগুলো। সবই ডকুমেন্টেশনে খুঁজে পাবেন।

{% highlight python %}
layout = Layout(
    title = 'Number of repositories on Github versus account age',
    xaxis = dict(
        title = 'Number of repositories',
        titlefont = dict(
            family = 'Courier New, monospace',
            size = 18,
            color = 'grey'
            ),
        linecolor = 'green',
        ),
    yaxis = dict(
        title = 'Age of account (in years)',
        titlefont = dict(
            family = 'Courier New, monospace',
            size = 18,
            color = 'grey'
            ),
        linecolor = 'green',
        ),
    )
{% endhighlight %}

এখন শুধু বাকি প্লট তৈরী করা। Plotly তে লেআউট এবং ডেটা এক করে ফিগার তৈরী করা হয়, যা থেকে প্লট বানানো হয়। Plotly এর আরেকটা বড় সুবিধা হল প্লট বানানোর সাথে সাথেই HTML ফরমেটে গ্রাফ পাওয়া যায়, যা যে কারও সাথে শেয়ার করতে পারবেন আপনি। আমি এই ফাইলটার নাম দিয়েছি repository-vs-year.html

{% highlight python %}
figure = Figure(data=data, layout=layout)
plotly.offline.plot(figure, filename='repository-vs-year.html')
{% endhighlight %}

এখন স্ক্রিপ্টটা রান করলে কমান্ড লাইনে ইউজারদের বিভিন্ন তথ্য দেখা যাবে, সবশেষে ব্রাউজারে নিজ থেকেই একটা ট্যাব খুলে গ্রাফটা দেখাবে। আপনি যদি সবগুলো ধাপ ঠিক ঠাক অনুসরণ করে থাকেন আপনার গ্রাফটা এমন হবে:

<iframe width="700" height="600" frameborder="0" scrolling="no" src="https://plot.ly/~mnzr/14.embed"></iframe>



ব্যাস, আপনি এখন একজন ডেটা সাইন্টিস্ট হয়ে গেলেন! পরবর্তিতে আশা করি নিজ থেকে যে কোন প্রয়োজনীয়তায় গ্রাফ তৈরী করতে পারবেন। সবসময় মনে রাখবেন একটা কথা: Google এবং ডকুমেন্টেশন আপনার সবচেয়ে বড় বন্ধু। সব কিছুর জন্য আপনার প্রয়োজনীয়তা অনুসারে টিউটোরিয়াল নাও পাওয়া যেতে পারে, তখন এই দুটি-ই আপনাকে ডেটা সাইন্সের বিভিন্ন কাজ করতে সাহায্য করবে।