#!/bin/bash
# echo $PWD
# run from package.json folder if npm run "..."
convert -resize 512x512 public/icons/icon.png public/icons/icon-512.png
convert -resize 192x192 public/icons/icon.png public/icons/icon-192.png
convert -resize 180x180 public/icons/icon.png public/icons/icon-180.png
convert -resize 167x167 public/icons/icon.png public/icons/icon-167.png
convert -resize 152x152 public/icons/icon.png public/icons/icon-152.png
convert -resize 128x128 public/icons/icon.png public/icons/icon-128.png
convert -resize 16x16 public/icons/icon.png public/icons/icon-16.png
convert -resize 32x32 public/icons/icon.png public/icons/icon-32.png
convert -resize 32x32 public/icons/icon.png public/favicon.ico
convert -resize 180x180 -background white -alpha remove -alpha off public/icons/icon.png public/icons/icon-white-180.png
convert -resize 167x167 -background white -alpha remove -alpha off public/icons/icon.png public/icons/icon-white-167.png
convert -resize 144x144 -background white -alpha remove -alpha off public/icons/icon.png public/icons/icon-white-144.png
convert -resize 152x152 -background white -alpha remove -alpha off public/icons/icon.png public/icons/icon-white-152.png
# convert -resize 16x16 -background white -alpha remove -alpha off public/icons/icon.png public/icons/icon-16.png
