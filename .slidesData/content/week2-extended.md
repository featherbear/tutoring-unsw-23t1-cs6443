---
title: "Week 2 Extended"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-06-09T19:09:55+10:00
---

{{< slide class="center" >}}

## Week 2

---

{{< slide content="secedu.goodfaith" >}}

---

# Challenges

How are you finding the challenges?

> [Current Leaderboard](http://plsplsplssscanicomefir.st)

<!--
If you're looking at this comment, hi!
The above site is an internal DNS record to a private address.

No peeking.
-->

---

# Bonus Marks

![](../week2-shared/bookmark-joke.jpg)

There are bonus marks available for this course.

* Challenge walkthroughs (0.5 bonus marks)
  * Maximum of 2 bonus marks
* 🔥🔥🔥? maybe an extra mark 👀

---

# Need a Shell?

Free Credits

* AWS via GitHub Education
  * https://education.github.com/pack
* Google Cloud Platform
  * https://adamy.io/cs6443-gcp-credit

---

# Reports

{{% section %}}

* Group Project
* Business Report
* Common Vulnerability Scoring System (CVSS)
* Common Vulnerabilities and Exposures (CVE)
* Other vulnerability frameworks
  * NIST
  * OCTAVE
  * ...
  * or [make your own](https://www.acunetix.com/support/docs/faqs/what-vulnerability-classifications-does-acunetix-use/)

---

['Example' report](https://docs.google.com/document/d/1dVXbABRPlAic2oNHqafXKrGmOYFSha-8_4kfLE_ilbQ/edit?usp=sharing) * _cough_ * 

{{% /section %}}

---

### Authentication vs Authorisation

> `authentication`  
> `!= authorisation`

* Authentication - Who am I?
* Authorisation - What can I do?

---

## SMS 2FA (is bad)

{{% section %}}

SMS isn't a very secure system...

{{% fragment %}}(at all){{% /fragment %}}

---

* Physical phone theft
* Phone number forwarding
* Phone number porting
* SIM replacement

---

Website that use 2FA SMS are bad.  

But other 2FA methods can be inconvenient...

* Email verification
* OTP

inconvenient `~=` sorta safer...

{{% /section %}}

---

# 👀 More Recon

_Last week: DNS recon_  

DNS recon isn't the only way of reconnaissance...

---

## Website Sources
## and HTTP Responses

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--vynGLmQU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ezu4pq1a9v3o4ws57s63.png" height="300" />

You don't see everything that your browser receives!

---

## File / Directory Enumeration

{{% section %}}
⚠️ Warning ⚠️

* Directory Enumeration is an **active** recon process. Your activity can/will be tracked.
* RATE LIMIT YOUR REQUESTS

---

Write your own enumeration script!

> Demo: A basic GET/POST repeater

&nbsp;  

Word List? [github:danielmiessler/SecLists](https://github.com/danielmiessler/SecLists)

---

Some automated tools...

again. pls pls plssss rate limit

* dirb
* gobuster
* dirbuster

---

Just a note...

_"N.B. Both sub-domain enumeration and sub-directory brute-forcing are discouraged and will not assist you in these challenges. However, you may be find it useful to enumerate IDs or passwords."_

Source: Topic 2 Challenge Outline

{{% /section %}}

---

# Activity

10 minutes to create a 3-5 presentation  
\- what, why, how, etc -

**Topics**

* HTTP status codes + headers
* Secure Cookie Sessions
* JSON Web Token (aka JWT)
* One Time Password for 2FA
* A comparison of hash functions (i.e. SHA1, MD5, ...)
* Or up to you!

(This doesn't count towards bonus marks btw)

---

# Deliverables

* Week 1 challenges due Week 2 Sunday 23:59pm (THIS SUNDAY)
* Week 2 challenges due Week 3 Sunday 23:59pm
* Report
