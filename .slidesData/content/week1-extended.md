---
title: "Week 1 Extended"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-06-02T23:57:21+10:00
---

{{< slide class="center" >}}

## Week 1

---

# Who, me?

{{% section %}}

![](../me.jpg)

---

`andrew.j.wong@unsw.edu.au`

* Teams ^
* SECedu Slack - `featherbear`

{{% /section %}}

---

### New number, who dis?


Share something interesting on your phone's photo gallery (or meme collection) that describes yourself

<img src="../icebreakers.jpg" height=350 />  

---

# Housekeeping

🍉 Food - Sure thing

🎥 Recordings - Yes, next slide

👩‍🏫 Lab Attendance - Not marked  

💡 This room... had RGB lighting... but ... :(

---

# Course Stuff

## Contact

> `cs6443@cse.unsw.edu.au`  

> Slack - seceduau.slack.com  
> `#cs6443`  
> `#cs6843-21t2-h15a`

Note: `#cs6843` unofficial

---

{{< slide content="secedu.goodfaith" >}}

---

## Assessments

* CTF Challenges
* 2x Reports
* Mid-term Exam
* Final Examination

Check the course outline for the schedule

---

## Resources

> [featherbear.cc/tutoring-unsw](https://featherbear.cc/tutoring-unsw)

---

## Today's Agenda

* Andrew's Rant
* Activities 
  * Logging into Quocca Bank
  * Installing Burp Suite
  * Recon
  * HTTP As A Service challenge

---

# Andrew's Rant

{{% section %}}

## CTF
  
* Find flags, get points
* COMP6843 Students
* Do 6443 challenges
* As well as 6843 ones

---

## This week's challenges...

> Due <u>**next Sunday**</u> (13th June 11.59pm)

---

## Vulnerability Report

* Groups of 4 / 5
* More about this in the future...
* For now, keep track of how you found flags

---

## Doing this course at uni

Like, at uni, physically, in person - i.e. here.

If you are using automated tools that have a large network footprint, please change your DNS

* Google - `8.8.8.8`
* Cloudflare - `1.1.1.1`

---

## Burp Suite

See it in action

---

## DNS

* `A`, `AAAA`, `MX`, `PTR`, `TXT`
* DoH

---

### Passive DNS Recon (OSINT)

* nslookup
* dig
* Google
* crt.sh
* DNS Dumpster
* Wayback Machine
* ...Wolfram Alpha??

---

### Active DNS Recon

* nmap
* subbrute
* sublist3r
* dnsrecon

> Warning: Control yourselves (rate limit)

Dictionary based DNS enumeration - You need a [wordlist](https://github.com/danielmiessler/SecLists)! Maybe use altdns too :shrug:

---

### Too many tools. Ceebs.

> https://github.com/OWASP/Amass

---

### DNS-unrelated OSINT

* Wappalyzer
* WhatWeb

---

## More!

* Practice: bWAPP, DVWA, WebGoat  
* Cookie Editor
* Resource page: [tutoring-unsw/resources](https://featherbear.cc/tutoring-unsw/resources)

{{% /section %}}

---

# Activities

* First form report groups!
* Logging into Quocca Bank
* Installing Burp Suite
* Recon
* HTTP As A Service challenge
