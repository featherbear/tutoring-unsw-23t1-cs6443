---
title: "Week 9"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-07-29T00:15:02+10:00
---

{{< slide class="center" >}}

## Week 9

---

{{< slide class="center" >}}

## Good Faith Policy

be nice.  
👉👈 🥺

---

## Report 1 Feedback

- Qualitative feedback sent
- Executive summary
- Business impact // "so what?"
- Contextual impacts and remediations
- Order the vulnerabilities by severity

---

{{< slide class="center" >}}

## Topic Walthroughts

Challenge walkthroughs, cool things?

> Bonus marks!!!

---

## Today's TL;DR

> DevOps = Dev Oooops

- 💦 The exit of Waterfall SDLC approaches
- 🐜 CVEs
  - Common Vulnerability Enumerations
- 🔍 SAST vs DAST
  - Static/Dynamic Application Security Testing
- 🐳 Containerisation and Virtualisation 💻

---

### More on Dev Ops

{{% section %}}

- Why make (your own) applications?
  - 📈 stonks 
  - 🔒 <span class="fuzz" style='font-family: monospace'>fuzz</span>
  - 🩹 Improvements, fixes, ...
  - 💪 weird flex but ok


<script>
;(function()    {
    const elem = document.querySelector('.fuzz');
    let letters = [...elem.innerText]
    for (let i = 0; i < letters.length; i++) {
        ;(function genWithClosure(i) {
            ;(function fn() {
                letters[i] = String.fromCharCode(33 + Math.trunc(Math.random() * 90))
                elem.innerText = letters.join("")
                setTimeout(fn, Math.random() * 5 * 100)
            })();
        })(i);
        
    }
    })();
    
</script>

---

- What makes a website good?
  - UI - looks nice
  - UX - _is_ nice
  - [SEO](https://therickroll.com)
  - [Page Speed](https://developers.google.com/speed/pagespeed/insights)

---

- What makes a webapp good (dev ops)?
  - the stuff before, plus even more
  - s e k u r i t y
  - Availability
  - Reliability
  - Scalability

{{% /section %}}

---

##### tech for the ambitious one

> How do I make a secure, but good app? - an example.

nginx, let's encrypt, certbot, docker, caddy

> trust issues? Good. Have zero trust.

---

## SecOps

* SDN VPNs vs Browsing VPNs
* VPNs and anonymity. Do they work?
* VPNs and bandwidth. Bottlenecks?
* P2P SDNs? ZeroTier, Nebula, Tailscale, Hamachi?
  
---

{{< slide class="center" >}}

😊
