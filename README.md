This is a script that is largely a rewrite of https://github.com/soolar/accountval.ash
This is an accountval networth script made for Kingdom of Loathing, and will figure your account's net worth and after running through its pricegun logic, tell you that you're worth approximately this much meat.
Of course, finding someone willing to buy your items is another question altogether...

This script uses JavaScript (Written in TypeScript) instead of ash, and offers three major performance enhancements.

1. Speed.
2. Caching, subsequent runs are now faster.
3. You can provide a parameter to show only your tradeable goods.

To install this script, use

```text
git checkout libraryaddict/accountval release
```

To run, just use

```text
accountval
```

If you want to see only the tradeable stuff, use

```text
accountval trade
```

There's a ton of parameters you can use, provide `help` as a parameter.

If you have accountval.ash installed, use

```text
accountval.js
```

## Running in the browser

Accountval can also run in the browser without requiring KoLMafia. It replaces the main pane with a commandline replica which will act the same as KoLMafia's gCLI, featuring jawdropping commands such as `trade` or `help`.

**You should be aware that this is not sane, or a good idea in general. This is the same setup someone would do for a remote code exploit, and you are executing it blindly. In this case, the code isn't going to do anything bad, but it's still very unsafe. Although it is cool to see, it's very cursed. Your data is not uploaded anywhere, it stays in the browser. The unsafe part is running code that someone gave you, because that code may be doing something you didn't expect.**

To run this without KoLMafia, paste this into KoL's chat while logged in, or save it as a chat macro. This will load the script from GitHub and execute it.

You can view the JS that will be executed here: https://raw.githubusercontent.com/libraryaddict/accountval/browser/accountval.js

```text
/goto '?'' :function(){fetch('https://raw.githubusercontent.com/libraryaddict/accountval/browser/accountval.js').then(function(r){return r.text()}).then(eval);throw{};}();z='
```

Alternatively, save this as a bookmark and click the bookmark while logged in to KoL.

```text
javascript:void fetch("https://raw.githubusercontent.com/libraryaddict/accountval/browser/accountval.js").then(r=>r.text()).then(eval)
```

Some things only KoLmafia knows about, so the browser version can't do them.

- Mall searching (`mallPrice`), `session`, `jsfilter`, and a few item presets.
- KoLmafia's historical prices. Items not in https://kolprices.lib.co.nz/ are unable to be valued.
- Your workshed item, lovebugs, and whether an IotM is permanent or a temporary day pass.
- av-snapshot isn't able to be requested.
