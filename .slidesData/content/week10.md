---
title: "Week 10"
layout: "bundle"
outputs: ["Reveal"]
date: 2021-08-04T20:34:53+10:00
---

{{< slide class="center" >}}

## Week 10

---

{{< slide class="center" >}}

## Good Faith Policy

haha security go brr 

---

## Final Exam

{{% section %}}

* Date: 19th August

* Time: 1pm - 4pm (3 hours)

* Weight: 40%

* Hurdle: 50% to pass

> More: [openlearning.com/.../exam](https://www.openlearning.com/unswcourses/courses/webapp-security/exam/)

<!-- 20 + 17 = 37 flags lol -->

---

* Everything is assessable
* Some easy, some medium(er), some hard(er)
* Practicals + Written
* Submit a SHORT writeup
  * e.g. "Cookie tampering to gain admin access. Change JWT admin=1"
* Try not to cheat™
* Take breaks
* You got this!

{{% /section %}}

---

### <s>My</s>Our Experience

<div style="display: flex; flex-direction: row; align-items: center; text-align: center">

<div style="flex: 1">
    <subtitle style="font-size: 0.6em; color: #ccc">Did you like COMP6[84]3?</subtitle>
    <img height="300" style="background: none; margin: none; border: 0; box-shadow: none" src="../yes but in red_greytext.png">
</div>

<div>
    <ul>
        <li>What <u>did</u> you like?  </li>
        <li>What <u>didn't</u> you like?</li>
        <li>What can be improved?</li>
    </ul>
    <div style="font-size: 0.5em">Lectures, challenges, my tutorials, content<span style="font-size: 0.5em">, me?</span></div>
</div>

<div style="border: 0; margin: 0; padding: 0;">
    <img height="180px" style="background: none; margin: none; border: 0; box-shadow: none" src="https://media1.giphy.com/media/yxVRICzg06MyG73Kb6/giphy.gif?cid=ecf05e47q9f12bhcvry1swpk620pzj2bo0djajm5hlh03tyc&rid=giphy.gif&ct=g">
</div>

</div>

> https://myexperience.unsw.edu.au


<div timer=600></div>

<script>
window.addEventListener('load', function () {
  for (let timerElem of document.querySelectorAll('[timer]')) timerElem.style.fontFamily = 'monospace'

  function checkTimerOnCurrentPage () {
    let slideElem = document.querySelector('section.present')

    for (let timerElem of slideElem.querySelectorAll('[timer]')) {
      let seconds = Math.trunc(timerElem.getAttribute('timer'))
      if (isNaN(seconds)) {
        console.warn(timerElem, 'has a `timer` attribute with an invalid value')
        continue
      }

      if (timerElem._timerInterval) {
        clearInterval(timerElem._timerInterval)
        delete timerElem._timerInterval
      }

      setTimeout(
        (origIntervalId => () => {
          if (timerElem._timerInterval == origIntervalId)
            clearInterval(origIntervalId)
        })(
          (() => {
            let remaining = new Date(seconds * 1000)
            return timerElem._timerInterval = setInterval(() => {
              timerElem.innerText = remaining.toISOString().substr(11, 8)
              remaining.setSeconds(remaining.getSeconds() - 1)
            }, 1000)
          })()
        ),
        (seconds + 2) * 1000
      )
    }
  }
  Reveal.addEventListener('slidechanged', checkTimerOnCurrentPage)
  checkTimerOnCurrentPage()
})

</script>

---

## More on DevSecOps

{{% section %}}

> Last week: How do I deploy and run my applications, whilst being secure?

* Load Balancing?
* SSL?
* Zero Trust?
* Docker?

---

> Securing CI/CD from bad things

* Tokens, Keys, Secrets, Envs
    * Who has access?
    * Exfiltration?
* Malicious Code
* Service Accounts
* Service Machines
* SAST / DAST
* Limits

{{% /section %}}

---

### Git: Is it really gone?

{{% section %}}

```bash
$> ls
# -rwxrwxr-x 1 andrew andrew  12K Jul 12 15:50 server.py
# -rw------- 1 andrew andrew 1.8K Jul 24 18:28 my_secret.key

$> git status
# On branch dev
# nothing to commit, working tree clean

echo my_secret.key >> .gitignore
git add .gitignore
git commit -m "Ignore confidential data"
git push
```

ima ignore the secret key file, this is safe... right?
<!-- Previously committed files are still tracked -->

---

```bash
$> git status
# On branch dev
# nothing to commit, working tree clean

git rm my_secret.key     # <<< Alright we should be good

$> ls
# -rwxrwxr-x 1 andrew andrew  12K Jul 12 15:50 server.py

git commit -m "Remove confidential data"
git push
```

Oh.. okay I'll just delete the file then?
<!-- Git maintains a history! -->

---

```bash
git rm --cached my_secret.key      # Remove the key from git
echo my_secret.key >> .gitignore   ## Git ignore it
git add .gitignore                 ### Commit .gitignore
# rm -rf / --no-preserve-root      #### <<< wait not this one

git commit --amend -m "Removed confidential data"
           # ^ Okay so this edits the previous commit

git push -f       # <<< FORCE PUSH TO PRODUCTION LET'S GOOOO
```

SURELY now???  
I've modified the commit which I accidentally committed the secret key file. It's now even gitignored!

<!-- reflogs -->

{{% /section %}}

---

### Keeping your Git + codebase secure

* .gitignore 
* Git Hooks
* [BFG](https://rtyley.github.io/bfg-repo-cleaner/)
* Keep the `.git` folder safe!
* .env[.sample]
* <s>Employ [nocode](https://github.com/kelseyhightower/nocode)</s>

---

{{< slide class="center" >}}

That's all!

Thanks for having me

😊