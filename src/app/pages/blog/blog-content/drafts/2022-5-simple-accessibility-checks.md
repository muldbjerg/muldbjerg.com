---
title: 5 simple accessible check for your digital product
created: 2020-05-22T10:26:29.395Z
slug: 5-simple-accessible-check-for-your-digital-product
tags:
  - Meta
  - Website
excerpt: 
draft: true
---

How accessible is your digital product? I have had a hard time thinking about accessibility, because when working on library product accessibility is so important. That it can feel overwhelming. 

You never know who is standing in front of the screen. And I would like the products to be helpful for all kind of people. 

Accessibility don’t have to be specials modes. The goal should be to make accessable products that benefits all users. Simply because they’re easier to use. Some call this approach Universal Design.

But there to start? I’ve made this list with 5 easy checks to get started. 

## 1. Is there enough color contrast?
Not everyone is a 25 year old with perfect vision. Sadly. So please use good contrast color.

A helping hand is a contrast checker like WebAIM’s contrast checker. Here you can check the different colors you use. For Figma use Stark to go through your interface. 

Remember, that it’s not only text contrast that’s important. It’s every element. Things like input boxes, card views and buttons. 

While at it, check the link color. It should stand out from the rest of the text. WebAIM’s contrast checker also helps there.

## 2. Is the buttons big enough to hit?
Fitt’s Law says that larger buttons easier to hit. Shocking, i know. 

Things that are made for clicking/tabbing - make them BIG. 

A good minimum is 44x44px. But the size of a pixel can differ for different screens. So it’s a good idea to test it on actual devices. 

## 3. Does all images have Alt-tags?
A image don’t say 1000 words. By itself. 

Write ALT-tags for every image and graphic. The ALT-tag are especially for screenreaders, so you should communicate the meaning of the image. 

Explain both the context and the content of the image. I found this easy-to-follow structure from Alex Chen: Object - Action - Context

image.png
Photo: Brooke Cagle on Unsplash

For this image, the Alt-tag could be: 
Woman sitting with her laptop in a living room sofa.

Oh, and BONUS. Google loves ALT-tags, because the image is easier to understand for their search bots. And what Google likes are easier to find for other people. 


## 4. Does it work only using a keyboard?
Can you access every part of your product only using a keyboard? Go ahead and try it. Just stop using the mouse or the touchscreen for a little while. I wait here.

Pressing TAB, the focus shifts to next link or input box. 

You can navigate using the TAB-key. Was it easy? Was it going all over the place? 

You might need to change the order using tabindex directly on the HTML elements. So it’s becomes more smooth to navigate.


## 5. Is your HTML structured?
