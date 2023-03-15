---
title: "Week 5 - Server Side"
layout: "bundle"
outputs: ["Reveal"]
date: 2023-03-15T02:57:21+10:00
---

{{< slide class="center" >}}

## Week 5

---

##### Local File Inclusion
  
> Directory Traversal

* `http://website.com/getImage.php?file=image.png`  
* `http://website.com/getImage.php?file=/etc/passwd`

---

##### Server Side Template Injection

e.g. Jinja templating (Python + Flask)

```
{{ "hello " + "world" }} => "hello world"
```

```sql
{{ "".__class__.__mro__[1].__subclasses__() }}
                     ^ the `object` class

You now have a handle to every function. welp.
```

---

# File Upload

* Upload random files (bad)
* Upload executable files (also bad)
* Upload specific files (still bad)

---
