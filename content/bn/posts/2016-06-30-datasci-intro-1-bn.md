---
layout: post
title: ডেটা সাইন্সে হাতে খড়ি - ১
permalink: datasci-intro-1-bn
date: 2016-06-30
author: Ratul Minhaz
categories:
- tutorial
tags:
- python
- data science
published: true
description: Introductory data analysis and visualization

---
নির্বাচনের সময়টায় সবার মাঝে সাড়া পড়ে যায় কাকে কে ভোট দিবে তা নিয়ে। আপনি হয়ত আপনার বন্ধু-বান্ধব আর পরিবারের সদস্যদের জিজ্ঞেস করেছেন মতামতের জন্য। মোটামুটি কাছের সবার কাছ থেকে মতামত নিয়ে মনে মনে একটা ধারণা তৈরী হয় আপনার: কে বেশি ভোট পেতে পারে, কেনই বা মানুষ তাকে ভোট দিতে বেশি আগ্রহী, কি কারণে হেরে যাওয়া দল কম ভোট পেলে ইত্যাদি। আপনি যদি কখনও এ কাজ বা এরকম মানুষের মতামত নিয়ে ধারণা তৈরী করার মত কিছু করে থাকেন, তাহলে বলা যায় আপনি ডেটা সাইন্স ব্যবহার করেছেন!

*এই টিউটোরিয়ালটি ডেটা সাইন্সে হাতে খড়ি সিরিজের প্রথম পর্ব। অন্যান্য পর্ব:*<br>
*1. [প্রস্তুতি]({{ site.url }}/datasci-intro-1-bn) (<-- আপনি এখন এখানে)*<br>
*2. [ডেটা সংগ্রহ]({{ site.url }}/datasci-intro-2-bn)*<br>
*3. [বিশ্লেষণ]({{ site.url }}/datasci-intro-3-bn)*<br>
*4. [ভিজুয়ালাইজেশন]({{ site.url }}/datasci-intro-4-bn)*<br>


### জিনিশটা কি?

ডেটা সাইন্স তাহলে আসলে কি? 

- তথ্য সংগ্রহ করা, 
- সেগুলো প্রোগ্রামেটিক উপায়ে বিশ্লেষণ করা, 
- বিশ্লেষণের ফল সহজবোদ্ধভাবে উপস্থাপন করা, 
- এবং ভবিষ্যতের পূর্বাভাষ দেবার চেষ্টা করা

এই ধাপগুলোর সমন্বয়ই ডেটা সাইন্স। নির্বাচনের উদাহরণটা হয়ত একটু ছোট-ই হয়ে গেল, কিন্তু বইয়ের ভাষায় এটা অবশ্যই ডেটা সাইন্স। আপনি আপনার পরিচিতির গন্ডির মধ্যে সবার মতামত সংগ্রহ করছেন, তারপর সেগুলোকে বিশ্লেষণ করছেন মনে মনে। বিশ্লেষণের সাথে সাথে একটা মানসিক গ্রাফ-ও তৈরী হয়ে যাচ্ছে, কে এগিয়ে আছে আর কে পিছিয়ে আছে তা নিয়ে। সেটা অনুসারে আবার আপনি নির্বাচনের ফলাফল কি হতে পারে তা অনুমাণ করার চেষ্টা করছেন। একজন ডেটা সাইন্টিস্টের কাজই তো এ-ই!

ডেটা সাইন্টিস্টের সংঙা হিসাবে আমার কাছে সবচেয়ে যুতসই লাগে এটা: যিনি আর দশজন সফটয়্যার নির্মাতার চেয়ে ভাল পরিসংখ্যান পারেন এবং যে কোন পরিসংখ্যানবিদের চেয়ে ভাল সফটয়্যার বানাতে পারেন, তিনি-ই ডেটা সাইন্টিস্ট!


### লক্ষ্য

এই টিউটোরিয়ালে আমরা ছোট একটা প্রোজেক্ট করার মাধ্যমে ডেটা সাইন্সের ধাপগুলো: ডেটা কালেকশন, অ্যানালাইসিস এবং ভিজুয়ালাইজেশনের সাথে পরিচিত হব। আমরা GitHub এর API ব্যবহার করে কিছু ইউজারের তথ্য কালেক্ট করব। তারপর পাইথন দিয়ে অ্যানালাইসিস করে বের করব অ্যাকাউন্ট তৈরীর পর কে সবচেয়ে বেশি সক্রিয় ছিল। সবশেষে ভিজুয়ালাইজেশন করব Plot.ly নামে একটা সাইট দিয়ে। প্রোজেক্ট শেষে আপনার এমন একটা গ্রাফ তৈরী করার অভিজ্ঞতা হবে: 

<iframe width="700" height="600" frameborder="0" scrolling="no" src="https://plot.ly/~mnzr/14.embed"></iframe>

আপনি যদি আগেই পাইথন দিয়ে কিছু ছোটখাট প্রোজেক্ট করে থাকেন, তাহলে হয়ত পরের ধাপগুলো না অনুসরণ করলেও চলবে। তবে ভার্চুয়াল এনভায়ারনমেন্ট সম্বন্ধে ধারণা না থাকলে পড়ে দেখতে পারেন বাকিটুকু।


### প্রস্তুতি

কোডিং করতে নেমে পড়ার আগে আপনার কম্পিউটারে দরকারি সব সফটয়্যার ইন্সটল করা আছে কি না দেখে নিন। আপনার লাগবে-
- Python 3
- [Virtualenv and virtualenvwrapper](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
- Sublime Text 3 বা অন্য যে কোন কোডিং করার এডিটর।

পুরো প্রোজেক্টটার কোডিং করব উবুন্তু ১৬.০৪-এ, তাই পাইথন আলাদা করে ইন্সটল করার কোন ঝামেলা নেই। আপনার যদি এর আগের কোন ভার্শন থাকে তবে কোডগুলো python এর বদলে python3 দিয়ে রান করতে হতে পারে কমান্ড লাইনে। আপনি উইন্ডোজ ব্যবহার করলে চিন্তার কোন কারণ নেই, আপনি অনায়াসে পাইথন ব্যবহার করা শুরু করতে পারবেন। আপনাকে শুধু একটা ছোট্ট কাজ করতে হবে: উইন্ডোজ বাদ দিয়ে যে কোন লিনাক্সে চলে আসতে হবে।

__ভার্চুয়াল এনভায়ারনমেন্ট__<br>
আপনি যদি কখনও একাধিক পাইথন প্রোজেক্টের মধ্যে ভার্শন ডিপেন্ডেন্সির সমস্যায় পড়ে থাকেন আগে, তাহলে হয়ত বা ভার্চুয়াল এনভায়ারনমেন্ট ব্যবহার করতে হয়েছিল আপনাকে সমাধানের জন্য। Virtualenv এবং virtualenvwrapper খুবই কাজে আসে যখন হরেক রকমের মডিউলের বিভিন্ন ভার্শন দিয়ে অনেকগুলো পাইথন প্রোজেক্ট করার চেষ্টা করবেন আপনি। এগুলো ইন্সটল করা না থাকলে [এখান](http://docs.python-guide.org/en/latest/dev/virtualenvs/) থেকে জেনে নিন কিভাবে করবেন। তারপর আমাদের প্রোজেক্টের জন্য একটা ভার্চুয়াল এনভায়ারনমেন্ট তৈরী করে নিন:

{% highlight bash %}
mkvirtualenv scraping
workon scraping
{% endhighlight %}

__টেক্সট এডিটর__<br>
কোডিং করে সাবলাইম টেক্সটের চেয়ে বেশি আরাম আর কোন এডিটরে পাওয়া যায় কি না আমার জানা নেই। আপনি সরাসরি ওদের [সাইটে](https://www.sublimetext.com/3
) গিয়ে লেটেস্ট ভার্শন নামিয়ে নিন যদি ইন্সটল করা না থাকে। চাইলে পাইথন কোডিংয়ের জন্য কাজে আসবে এমন প্লাগিন-ও [ইন্সটল](https://dbader.org/blog/setting-up-sublime-text-for-python-development) করতে পারেন, কিন্তু এই প্রোজেক্টের জন্য তেমন কোন দরকার নেই।

এতটুক পর্যন্ত করা হয়ে গেলে [ডেটা সংগ্রহ (পর্ব ২)]({{ site.url }}/datasci-intro-2-bn) করার দিকে মনোযোগ দেয়া যায় এখন।