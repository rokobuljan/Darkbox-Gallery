# Darkbox jQuery Gallery

Simple, minimal, **responsive** jQuery Pop-up Gallery!

---
## Info:

Open your thumbnails into a responsive popup gallery!  
**Demo** : * fiddle demo coming soon *

#### Getting started

jQuery library, `darkbox.js` and `darkbox.css` must be included in your project.

```html
<link href="darkbox.css" rel="stylesheet" type="text/css">
```

```html
<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script src="darkbox.js"></script>
```

## Use exaple / samples:

### Thumbnail calling darkbox
```html
<img src="http://placehold.it/50x50/f0f"
     data-darkbox="http://placehold.it/800x600/f0f"
     data-darkbox-description="<b>Title</b><br>Lorem ipsum dolor sit amet">
```
Tips: insert any text or HTML into `data-darkbox-description` to add a slide description.

### Link as darkbox

Any element can call **darkbox** all it needs is a `data-darkbox` with a valid image URL

```html
<a data-darkbox="http://placehold.it/100x101/ff0">View image</a>
```

### Groups

If you want to want to **group** a set of images use `data-darkbox-group="groupName"` like:

```html
<img
     src="http://placehold.it/50x50/0bf"      
     data-darkbox="http://placehold.it/800x600/0bf"
     data-darkbox-group="two"
     data-darkbox-description="<b>Title</b><br>Lorem ipsum dolor sit amet">
<img
     src="http://placehold.it/50x50/f0b"
     data-darkbox="http://placehold.it/800x600/f0b"
     data-darkbox-group="two"
     data-darkbox-description="<b>Image 2</b><br>Description text...">
```

Tips: Multiple thumbnails without a `data-darkbox-group` will open each separately.  
Darkbox as *Group* features PREV / NEXT buttons and a *Stat Counter*.

### Link calling group (without thumbnails)

If you don't need visible thumbnails but you want a link to call a *Group*:
```html
<span data-darkbox-group="group2" data-darkbox="http://placehold.it/800x600/f00"></span>
<span data-darkbox-group="group2" data-darkbox="http://placehold.it/600x800/00f"></span>
<a data-darkbox-group="group2">Open group2</a>
```
    
