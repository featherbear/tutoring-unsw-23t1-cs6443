---
title: "Week 5 - Client Side"
layout: "bundle"
outputs: ["Reveal"]
date: 2023-03-28T02:57:21+10:00
---

{{< slide class="center" >}}

## Week 7

---

Sites

Cross Site Scripting

COMP6080 Crashcourse (HTML + JavaScript)
Hehe but javascript framework
Except javascript ehh



* DOM
* document.write
* document.querySelector
* document.querySelectorALL
* document.getElementsByTagName
* document.getElementByID
https://i.stack.imgur.com/wfL82.png
https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

<script>
onload
onerror
<scri<script>pt>blah?</scri</script>pt>
<script >
< script>

XSS

Payloads
https://github.com/payloadbox/xss-payload-list
https://book.hacktricks.xyz/pentesting-web/xss-cross-site-scripting
https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html

Breaking the DOM
Breaking scripts
Script gadgets...
https://owasp.org/www-pdf-archive/OWASP_BeNeLux-Day_2017_Bypassing_XSS_mitigations_via_script_gadgets_Sebastian_Lekies.pdf
https://www.blackhat.com/docs/us-17/thursday/us-17-Lekies-Dont-Trust-The-DOM-Bypassing-XSS-Mitigations-Via-Script-Gadgets.pdf

DOM XSS
Reflected XSS
* Where?
  * Search
  * Cookies
* Link shortener!

Stored XSS
--> Twitter


CORS

DOM XSS
iframe sandbox


https://github.com/featherbear/UNSW-CompClub2019Summer-CTF/commit/778c26087f0f6baa7b286037b4fe162aefd4ad67
https://github.com/featherbear/UNSW-CompClub2019Summer-CTF/commit/7b6e5875f31fc1c12da9fbd9e149e833130fd4e2
