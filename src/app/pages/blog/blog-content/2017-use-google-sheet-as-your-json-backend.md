---
title: Use Google Sheet as your JSON-backend
created: 2017-12-28T10:26:29.395Z
slug: use-google-sheet-as-your-json-backend
featureImage: assets/blog/2021/test-program-with-google-sheets.webp
tags:
  - frontend
excerpt: Google Sheets can be the world's most simple CMS. It can get you started. 
---

I want to build more in 2018 – and I doesn’t mind if it’s quick and dirty. For that I sometimes need a simple way to throw in content. So, I spend the evening learning to use Google Sheets for managing content and getting it out with javascript.

Some things are just easier to edit in a spreadsheet. And there are even people who feel at home in spreadsheets 😉 This is the test data I used:

![Screenshot of Google Sheets with the program of an event](/assets/blog/2021/test-program-with-google-sheets.webp)

<br/>

I really prefer to get data as JSON. It is the easiest to handle and change on the fly. I’m using [gsx2json.com](http://gsx2json.com/). It translates the spreadsheet into JSON for me.

If you want to fellow along, here are the 3 quick steps.

<br/>

## 1. Publish To Web
Press “Files” → “Publish To Web”. It gives you a popup, where you press “Publish”. Afterwards you can close the popup.

<br/>

## 2. Find the id
You need the id of the file – it is in the browser navigation bar. The structure is like this:

``https://docs.google.com/spreadsheets/d/**THE_ID_IS_HERE**/edit``

<br/>

## 3. Get your data
Now you can write this code. Notice I’m using a jQuery get function here:

``function getSheetData(){ var url = "http://gsx2json.com/api?id=INSERT_ID_HERE"; $.get(url, function( data ) { console.log(data); }); }``

It gives you JSON like this:

![Screenshot of the JSON output in the developer console](/assets/blog/2021/screenshot-json-output.webp)

<br/>

And there you go. Now you can use Google Sheets to update and manage your data.

I used it for an event program, with a lots of data points. It was really handy for managing it.
