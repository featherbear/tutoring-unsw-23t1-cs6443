---
title: "Week 8 Extended"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-07-22T04:16:17+10:00
---

{{< slide class="center" >}}

## Week 8

---

{{< slide content="secedu.goodfaith" >}}

---

{{< slide class="center" >}}

## Report 1

Marks released... soon???  
Feedback released tonight, maybe..

---

## HTML

#### A Hacker's Toolkit

* HTML is cAsE INSEnSItive
* `<script>...</script>`
* `<img onerror="..." src="aaa">`
* `document.write(...)`
* Fetch API
* XMLHttpRequest
* jQuery

---

## XSS

{{% section %}}

* What - User content is rendered as HTML

* How - The server unsafely puts user content into the response body of a request. The browser interprets the payload as if it was legitimate HTML

---

#### Reflected XSS

The payload is part of user input  
_(i.e. URL bar, inside a cookie, etc)_

> Demo: Reflected XSS  

[`website.com/?q=<img onerror="alert('pwned!')" src="http://google.com">`](http://localhost:3000/reflected?q=%3Cimg+onerror%3D%22alert%28%27pwned%21%27%29%22+src%3D%22http%3A%2F%2Fgoogle.com%22%3E)

---

#### Stored XSS

The payload is stored in some sort of database.  

Arguably more dangerous...
Anyone who opens a page that returns content from that same database may be victim to a stored XSS attack

+ Twitter Hack

> Demo: Stored XSS

---

#### DOM-based XSS

The client pieces together data which eventually becomes an exploit itself.

> i.e. `document.write(...)`

{{% /section %}}

---

#### Mitigating XSS

{{% section %}}

* Validation - Blacklisting / whitelisting of input
* Sanitisation - Remove unsafe tags and attributes
* Encode - Escape data so it's not a control character

---

### Defense

Don't use `.innerHTML` or `.outerHTML`

use `.innerText` or `.textContent`

> Demo: DOM XSS

JS Frameworks

---

> `X-XSS-Protection` header

Turn it off, it's broken 🔥 🌊🚒 

✅ `X-XSS-Protection: 0`  

* Sometimes causes client-side errors on real code
* Has its own [vulnerabilities](https://github.com/helmetjs/helmet/issues/230)

> <span style="font-size: 0.6em">"Firefox never supported X-XSS-Protection and Chrome and Edge have announced they <s>are dropping</s> have dropped support for it."</span>

{{% /section %}}

---

## CSP

{{% section %}}

Only allow scripts / images / styles / ... from ____

> it kinda OP.

* block eval(), inline scripts, iframes
* whitelist by scheme, domain, path, ...
* nonce
* checksum
* reporting
* ...
<!-- * click jacking frame-ancestors -->

---

#### Implementation

* Define CSP inside HTTP headers, or <meta> tags
* Meta tags have a lesser CSP capability
  * (in case you can override meta tags)
  * But still has its flaws...

&nbsp;

---

#### Exploits

* Exploiting trust
  * Redirected
  * Code Execution
  * Inheritance
* Invalidating restrictions
  * Corrupt the CSP header
  * Response splitting

{{% /section %}}

---

{{< slide class="center" >}}

#### Deliverables

Challenges due this Sunday!