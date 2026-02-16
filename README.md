This is a script that is largely a rewrite of https://github.com/soolar/accountval.ash
This is an accountval networth script made for Kingdom of Loathing, and will figure your account's net worth and after running through its pricegun logic, tell you that you're worth approximately this much meat.
Of course, finding someone willing to buy your items is another question altogether...

This script uses JavaScript (Written in TypeScript) instead of ash, and offers three major performance enhancements.

1. Speed.
2. Caching, subsequent runs are now faster.
3. You can provide a parameter to show only your tradeable goods.

To install this script, use

```text
git checkout libraryaddict/AccountVal release
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
