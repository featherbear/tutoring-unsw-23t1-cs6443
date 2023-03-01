# Broken Session Management Demo

* Don't _just_ clear your local session, invalidate it from the server
* Otherwise someone with knowledge of the session token can reuse it

--

> How else should we manage sessions?  

Don't store them in plain-text, just like passwords!  
When sessions are stored, they need to be hashed as well - otherwise a compromised database will contain (hundreds of) valid sessions!

Also, sessions should have expiries!
