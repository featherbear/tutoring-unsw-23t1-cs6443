---
title: "Week 4"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-06-16T18:50:46+10:00
---

{{< slide class="center" >}}

## Week 4

---

{{< slide content="secedu.goodfaith" >}}

---

{{< slide class="center" >}}

## SUHHHHHHH
## LOOOOOOOO
## SHOOOONZZ

&nbsp;  

Challenge walkthroughs, cool things?  

---

{{< slide class="center" >}}

> [Current Leaderboard](http://plsplsplssscanicomefir.st)

---


## Topic 2 Review

{{% section %}}

> User Identity and Authentication  

Weeks 2 - 3

---

* Authentication
  * Validating the user is the identity they claim
* Authorisation
  * Giving the user access based on their identity

---

Don't do this.  
Information disclosure baaaad.

![](https://memeguy.com/photos/images/password-already-in-use-262036.png)

---

#### Hashing

* Hashing is not encryption
* One way function

&nbsp;  

#### Salts 🧂

Random bytes that are mixed into a passphrase to modify the hash values.

* Increases entropy
* 🌈 Mitigates rainbow table attacks

---

#### Recon

* Active & Passive Recon
* DNS Recon
* Directory Enumeration
* Protocol Headers

---

#### Preventing Spam

* Captcha
* Account Lockout
* Rate Limiting

---

C is for ______

![](https://miro.medium.com/max/1230/0*vwtmE6kZFO0rIq9o.)

---

Don't use cookies to store important stuff.  

If you have to, secure it.

* HTTP Only
* "Secure" mode
* Encrypt the cookie

{{% /section %}}

---

### SQL

{{% section %}}

* Structured Query Language
* MySQL, SQLite, PostgreSQL, Microsoft SQL, NoSQL
* Statements
  * `SELECT _ FROM _ ...`
  * `INSERT INTO _ (COLn, ...) VALUES (VALn, ...)`
  * `UPDATE _ SET _ = _ ...`
  * `DELETE FROM _ ...`
  * `... -- this is a comment`
  * ...

---

* WHERE
  * `>` - greater than
  * `<` - less than
  * `=` - equal to
  * `<>` - not equal to
  * ...
* LIKE
  * `%` - wildcard
* UNION
* ...


---

> Demo: `stock` table

* `SELECT`, `INSERT`, `UPDATE`, `DELETE`
* Fingerprinting
  * `@@Version` - Microsoft SQL
  * `Version()` - MySQL
  * `sqlite_version()` - SQLite
* Functions
* Schema / Meta

<!-- sqlite_master -->

{{% /section %}}

---

## SQL<span style="text-transform: lowercase">i</span>

{{% section %}}

> user input = dangerous

```
'";<lol/>../--#`ls`
```

* What?
  * User input contains control characters that interfere with the syntax of the SQL statement
* Why?
  * Bad programming
  * User input is 'trusted' to be valid and reasonable

---

###### How

```sql
   SELECT a FROM b WHERE a = '$userInput'
```

&nbsp;  

Using `' OR '1'='1`

```sql
                           vvvvvvvvvvvvv
SELECT a FROM b WHERE a = '' OR '1' = '1'
                           ^^^^^^^^^^^^^
```

---

> Demo: login 1, login 2

Step 0: Figure out the syntax, and fingerprint if needed

* Bypass logins
* Extract data
* Spoof a user - `USER_DOESNT_EXIST`

{{% /section %}}

---

## Mitigating SQL<span style="text-transform: lowercase">i</span>

* Disable debug logging
  * No error messages, maybe just a blank screen?
* WAF - Web Application Firewalls
  * Strip out malicious payloads™
  * ...or completely block access
* Parameterised Queries

> Demo: login 3

---

## Defeating mitigations

* Payload stripped? Embed dummies
* Blank response? Side channel attacks
    * Timing Attacks
    * Out of Band Attacks
* Error-based extraction
* Boolean-based extraction <!-- i.e. substr comparison -->
* Subqueries
  * `SELECT a,b FROM c WHERE d UNION SELECT (SELECT ...), 2`

---

### Note

* Reporting a vulnerability `!=` extracting data
* SQLi payload list
* Big database? - `COUNT()` it instead

![](../week4-shared/Snipaste_2021-06-23_22-49-24.png)

---

### Other Injections

##### Local File Inclusion

* `http://website.com/getImage.php?file=image.png`

* `http://website.com/getImage.php?file=/etc/passwd`

---

# Mid-sem Exam

* Week 5 - Tuesday 5pm - 6pm
  * Lecture afterwards
* Locations: in-person / remotely
* Practice

---

# Deliverables

* New topic, new challenges!
  * This topic's challenges due next Sunday 23:59pm
* Report - Week 7
