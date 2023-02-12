---
title: "Week 3"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-06-11T19:13:51+10:00
---

{{< slide class="center" >}}

## Week 3

---

{{< slide content="secedu.goodfaith" >}}

---

### About marks

* Apart from Topic 1 challenges (Recon), all challenges are awardable. 
* Challenges in the criteria outline the credit mark
* Full marks = do all the challenges

---

{{< slide class="center" >}}

## SUHHHHHHH
## LOOOOOOOO
## SHOOOONZZ

&nbsp;  

Challenge walkthroughs, cool things?  
HAAS, Recon, ...

> Bonus marks!!!

---

## [ALPACA](https://alpaca-attack.com/)

{{% section %}}

![](https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2021/06/aa-1200.png?resize=780,408)

**A**pplication **L**ayer **P**rotocol (**A**...) **C**onfusion (**A**...)

---

<img src="https://alpaca-attack.com/media/img/android-chrome-512x512.png" height="200px">

* Confusion Attack
  * MITM capability allows access to other secured services that share SSL/TLS certificates.

---

![](../week3-shared/alpaca-pokemon.jpg)

* Lots of requirements for the vulnerability to work

---

* Mitigations
  * SNI - Server Name Indication
  * ALPN - Application-Layer Protocol Negotiation
  * Unique SSL/TLS certificates - Let's Encrypt

&nbsp;  

> [alpaca-attack.com](https://alpaca-attack.com)

{{% /section %}}

---

{{< slide class="center" >}}

> [Current Leaderboard](http://plsplsplssscanicomefir.st)

---

# Upcoming

* Mid-semester Exam - Week 5
  * Locations: In-person, also available remotely
  * Practice

* Report 1 - Wednesday 11:59pm - Week 7

---

{{< slide class="center" >}}

## More recon

> [robots.txt](https://www.google.com/robots.txt)

> [sitemap.xml](https://www.google.com/sitemap.xml)

---

### <s>recon</s> Social Engineering

![](https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(9)(140).jpg)

Thanks for your birth date <3

---

#### CSP

> Content Security Policy

Images, scripts, styles, etc can only be fetched from certain locations.

* i.e. Only HTTPS sites
* i.e. Only certain websites

_More on this in later weeks..._

---

## MITM

{{% section %}}

> Man In The Middle

---

#### Attack: HTTPS Downgrade

* HTTPS = more difficult to intercept
* HTTP = easily interceptable

MITM: "Actually, let's use HTTP instead"

---

#### Defense: HSTS

> HTTP Strict Transport Security

* A list of HTTPS-only sites
* [HSTS Preload List](https://hstspreload.org/)
  * Hardcoded into major web-browsers

{{% /section %}}

---

### Authentication vs Authorisation

> `authentication`  
> `!= authorisation`

---

## Cookies Bad

Don't use cookies to store important stuff.  
What if we have to?

{{% section %}}

---

## Cookie Protection

* HTTP Only - Not accessible through JS
* Secure - Only for HTTPS
* <s>base64 encoding</s> no.

{{% /section %}}

---

# Access Control

* DAC - Discretionary
* ABAC - Attribute-Based (Meta)
* RBAC - Role-Based (Groups)
* MAC - Mandatory (Levels)

---

# SSO and FID

* SSO - Single Sign On
  * Access to multiple services with the same session
  * Note: Terms are often used incorrectly
    * <s>Same credentials for multiple services</s>

* FID - Federated Identity
  * External authentication validation

---

## OAuth

![](https://developer.atlassian.com/cloud/connect/images/connect-oauth-impersonation-flow.png)

---

## misc

Anything else you want me to rant about?

<span style="font-size: 0.3em">Note to self: scripting</span>

---

# Deliverables

* This topic's challenges due **THIS** Sunday 23:59pm
* Report - Week 7
