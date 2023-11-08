---
title: Are your images ready for the web?
pubDate: 2023-20-13T20:36:29.395Z
# slug: are-your-images-ready-for-the-web
heroImage: /blog/2023/compress-images-png-to-webp-fast-download.webp
tags:
  - Frontend
  - Images
  - Optimize
description: Optimize images for the web effortlessly with this one-step script, reducing file sizes and enhancing loading times. No more time-consuming manual compression.
---

Images are heavy bits of a website. So every images should be compress before they are used on a website.

An example is taking the same image from 5.1 MB to 230 KB, without losing to much detail. That's great for loading time, hosting storage and even climate impact.

This post ends with my new script for easily optimizing images for the web. So hang on.

## Formates

I often use PNG's - e.g. if there are text on the image, PNG is the right way to go. Or there are transparent area - PNG support it. JPG doesn't. But now I convert all PNG's and JPG to WEBP - a newer formate by Google - with <a href="https://caniuse.com/?search=webp" target="_blank" rel="noopener noreferrer">good browser support</a>.

It can be transparent. And the best thing - it's small.

For all vector graphics - go with SVG. Great size-wise. And then it's always crisp. <a href="https://www.freecodecamp.org/news/use-svg-images-in-css-html" target="_blank" rel="noopener noreferrer">How to use SVG is a long story though.</a>

## My too-many-clicks old approach

This was my way to optimize PNG's and JPG's for web.

And it involved a lot of dragging, clicking, uploading, downloading....

1. I uploaded my image to be optimized with <a href="https://tinypng.com" target="_blank" rel="noopener noreferrer">TinyPNG</a>. Great tool by the way.

2. Downloaded the optimized image. Now smaller, but still PNG/JPG.

3. Uploaded the same optimized image to convertio to convert to WEBP formate.

4. Download the image again - now in WEBP.

5. (Uploaded the WEBP image to TinyPNG to take a little more of the file size.)

That's okay when it's just sometimes - and I got what I wanted. Small images ready for web. Fast download and all that.

But already with 3 images the process becomes so long. I did this for a long time, small images are important - but so is my time...

## So I made a script

Automating it should be possible. I have created a few bash scripts - so I figured it was a way to make it a one step process instead.

And here you go, here is my script. It could be improved. But with this <a href="https://www.simplykyra.com/how-to-run-a-bash-script-from-anywhere-on-your-apple-computer/" target="_blank" rel="noopener noreferrer">tutorial on running bash script from anywhere on your mac</a>, it was fast to get done.

Here is the script - optimize-img.sh:

<br/>

```
#!/bin/bash
# A script to make images ready for the web

# USE:
# optimize-img.sh [---PATH-TO-IMAGE---]

# Dependencies:
# - JQ | Install: brew install jq
# - wget | Install: brew install wget
# - webp | Install: brew install webp


# Saves variables
IMAGE_PATH=$1
ORG_FILE_NAME="${IMAGE_PATH%.*}"
PNG_TEMP=optim.png

# 1: First optimize PNG
optimizedPNG=$(curl -s -H 'Accept: application/json' \
    https://api.tinify.com/shrink \
    --user api:[--INSERT API KEY HERE--] \
    --data-binary @$IMAGE_PATH \
    | jq '.output.url' -r )

# 2: Download optimized PNG
wget "$optimizedPNG" -O $PNG_TEMP

# 3: Convert to WEBP
cwebp -q 80 $PNG_TEMP -o $ORG_FILE_NAME'.webp'

# 4: Removes temp files
rm $PNG_TEMP
```

I only changed one thing in the script, compared to the manual process. While making the script, I found that the 2. compression of the WEBP lowered the quality too much. So instead it's all handled in the conversion.

## To use it our self

You can copy the script - add in a <a href="https://tinypng.com/developers" target="_blank" rel="noopener noreferrer">TinyPNG api key</a> - <a href="https://www.simplykyra.com/how-to-run-a-bash-script-from-anywhere-on-your-apple-computer/" target="_blank" rel="noopener noreferrer">follow the guide</a> - and then type this in a terminal:

`optimtize-img.sh [--PATH TO IMAGE--]`

And boom - your images are ready, small and fast to download!
