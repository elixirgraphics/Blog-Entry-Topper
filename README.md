# blogEntryTopper
### Featured images for RapidWeaver blog entries

This small little plugin uses jQuery to add  featured images above your blog entries in RapidWeaver's built-in blog page style.

### Installation
Using the blogEntryTopper feature in your own RapidWeaver themes is pretty easy. 

1. First we want to call include our CSS for formatting the blogEntryTopper images in the head of our document:

```html
<link rel="stylesheet" href="%pathto(css/blogEntryTopper.css)%" />
```

1. You'll want to make sure you're calling jQuery. Most any version will do. Here we'll use v1.9. Include this, and the code from step 3 just before the closing body tag:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
```

1. Finally we'll call our javascript

```html
<script src="%pathto(js/blogEntryTopper.js)%"></script>
```

