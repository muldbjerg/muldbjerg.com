---
title: How you save your websites forever
created: 2019-02-19T10:26:29.395Z
slug: how-you-save-your-websites-forever
featureImage: assets/blog/2021/httrack-the_saved_website.webp
tags:
  - Website
excerpt: |
  
---

As a digital type, that spreads design, code and content across the internet. It is hard work to save a web project, after it’s ended.

I’m for one don’t enjoy keeping old website CMS’ up-to-date and secure, when they are no longer being used.

Last year I built a website for the YMCA-Scouts general assembly, and the next assembly in 2020 needs a new website and new content. The challenge I face is saving the information from the website, to be able to go back a see what happened and was discussed the last time.  

The website is built with WordPress, so first I looked for WordPress plugins to make it into static HTML pages. I tried [Simply Static](https://da.wordpress.org/plugins/simply-static/) and [WP2Static](https://da.wordpress.org/plugins/static-html-output-plugin/). No luck.

Either the links didn’t work. The styling wasn’t included, and one translated to a wrong character set. So, the Danish letter from the side wasn’t right. It spit this out:

![A website where the styling is missing](/assets/blog/2021/error_when_saving_website.webp)


## HTTrack – just what I needed
I started correcting the wrong characters – page for page. But there needed to be a better method. The combined guys of the internet said HTTrack, but it didn’t seem worth the trouble.

But it still better than correcting the characters of æ, ø and å on 40+ pages. And it was easy – and worked perfectly. It’s even available for all platforms.

![Laptop on a table with a website open](/assets/blog/2021/httrack-the_saved_website.webp)

## Finally, here is the guide for HTTrack
**1. Open your terminal**

**2. Download HTTrack with brew**

``brew install httrack``

**3. Now you can use HTTrack– then enter:**

``httrack "https://[INSERT DOMAIN]" -O "[INSERT DESTINATION]" "+[INSERT FOLDER NAME]*" -v``

So the command I entered was:

``httrack "https://landsmoede.dk/" -O "/Downloads/landsmoede.dk" "+landsmoede.dk/*" -v``

Remember to change it to your need. And be aware if it’s http or https.

When it finished downloading everything is available as simple HTML pages.

I put the save website at [2018.landsmoede.dk](http://2018.landsmoede.dk/), so the old version was saved. And the domain was ready to a new website.

HTTrack can be used great, if you’re like me and changing portfolios all the time, it can help save old versions in your archives. 
