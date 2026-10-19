var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/api/apiSupplier.ts
function provider() {
  if (!api) {
    throw new Error(`Trying to access api provider before setting it`);
  }
  return api;
}
function setProvider(provider2) {
  api = provider2;
}
var api;
var init_apiSupplier = __esm({
  "src/api/apiSupplier.ts"() {
  }
});

// src/api/supplierTypings.ts
function _classCallCheck2(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
  }
}
function _createClass2(e, r, t) {
  return r && _defineProperties2(e.prototype, r), t && _defineProperties2(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive2(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var KoLItem, KoLFamiliar, KoLSlot, KoLSkill;
var init_supplierTypings = __esm({
  "src/api/supplierTypings.ts"() {
    init_apiSupplier();
    KoLItem = /* @__PURE__ */ (function() {
      function KoLItem2() {
        _classCallCheck2(this, KoLItem2);
      }
      return _createClass2(KoLItem2, null, [{ key: "get", value: function get(key) {
        return provider().getItem(key);
      } }, { key: "none", get: function get() {
        return provider().noItem();
      } }, { key: "all", value: function all() {
        return provider().allItems();
      } }]);
    })();
    KoLFamiliar = /* @__PURE__ */ (function() {
      function KoLFamiliar2() {
        _classCallCheck2(this, KoLFamiliar2);
      }
      return _createClass2(KoLFamiliar2, null, [{ key: "all", value: function all() {
        return provider().allFamiliars();
      } }]);
    })();
    KoLSlot = /* @__PURE__ */ (function() {
      function KoLSlot2() {
        _classCallCheck2(this, KoLSlot2);
      }
      return _createClass2(KoLSlot2, null, [{ key: "none", get: function get() {
        return provider().noSlot();
      } }]);
    })();
    KoLSkill = /* @__PURE__ */ (function() {
      function KoLSkill2() {
        _classCallCheck2(this, KoLSkill2);
      }
      return _createClass2(KoLSkill2, null, [{ key: "all", value: function all() {
        return provider().allSkills();
      } }, { key: "none", get: function get() {
        return provider().noSkill();
      } }, { key: "get", value: function get(key) {
        return provider().getSkill(key);
      } }]);
    })();
  }
});

// src/models/typings.ts
function _classCallCheck3(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties3(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey3(o.key), o);
  }
}
function _createClass3(e, r, t) {
  return r && _defineProperties3(e.prototype, r), t && _defineProperties3(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive3(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var ItemStatus, ItemType, PriceType, ValItem, ItemPrice;
var init_typings = __esm({
  "src/models/typings.ts"() {
    ItemStatus = /* @__PURE__ */ (function(ItemStatus2) {
      ItemStatus2[ItemStatus2["BOUND"] = 0] = "BOUND";
      ItemStatus2[ItemStatus2["NO_TRADE"] = 1] = "NO_TRADE";
      ItemStatus2[ItemStatus2["FAMILIAR"] = 2] = "FAMILIAR";
      ItemStatus2[ItemStatus2["IN_USE"] = 3] = "IN_USE";
      ItemStatus2[ItemStatus2["SHOP_WORTH"] = 4] = "SHOP_WORTH";
      return ItemStatus2;
    })({});
    ItemType = /* @__PURE__ */ (function(ItemType2) {
      ItemType2[ItemType2["UNTRADEABLE_ITEM"] = 0] = "UNTRADEABLE_ITEM";
      ItemType2[ItemType2["BOOK"] = 1] = "BOOK";
      ItemType2[ItemType2["PROPERTY"] = 2] = "PROPERTY";
      ItemType2[ItemType2["EUDORA"] = 3] = "EUDORA";
      ItemType2[ItemType2["GARDEN"] = 4] = "GARDEN";
      ItemType2[ItemType2["VISIT_URL_CHECK"] = 5] = "VISIT_URL_CHECK";
      ItemType2[ItemType2["SKILL"] = 6] = "SKILL";
      ItemType2[ItemType2["CURRENCY"] = 7] = "CURRENCY";
      ItemType2[ItemType2["CAMPGROUND"] = 8] = "CAMPGROUND";
      ItemType2[ItemType2["SCRIPT"] = 9] = "SCRIPT";
      return ItemType2;
    })({});
    PriceType = /* @__PURE__ */ (function(PriceType2) {
      PriceType2[PriceType2["NEW_PRICES"] = 0] = "NEW_PRICES";
      PriceType2[PriceType2["HISTORICAL"] = 1] = "HISTORICAL";
      PriceType2[PriceType2["MALL"] = 2] = "MALL";
      PriceType2[PriceType2["MALL_SALES"] = 3] = "MALL_SALES";
      PriceType2[PriceType2["AUTOSELL"] = 4] = "AUTOSELL";
      return PriceType2;
    })({});
    ValItem = /* @__PURE__ */ (function() {
      function ValItem2(actualItem) {
        var item = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : actualItem;
        var name = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : item.name;
        var pluralName = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : item.plural;
        var bound = arguments.length > 4 ? arguments[4] : void 0;
        var snapshotSource = arguments.length > 5 ? arguments[5] : void 0;
        _classCallCheck3(this, ValItem2);
        _defineProperty(this, "worthMultiplier", 1);
        this.actualItem = actualItem;
        this.name = name;
        this.pluralName = pluralName;
        this.tradeableItem = item;
        this.bound = bound;
        this.snapshotSource = snapshotSource;
        if (this.bound == null && !item.tradeable) {
          this.bound = ItemStatus.NO_TRADE;
        }
      }
      return _createClass3(ValItem2, [{ key: "withCategory", value: function withCategory(category) {
        this.category = category;
        return this;
      } }, { key: "getBound", value: function getBound() {
        if (this.bound == ItemStatus.BOUND) {
          return "Bound";
        }
        if (this.bound == ItemStatus.FAMILIAR) {
          return "Familiar";
        }
        if (this.bound == ItemStatus.IN_USE) {
          return "In Use";
        }
        if (this.bound == ItemStatus.NO_TRADE) {
          return "Untradeable";
        }
        return null;
      } }, { key: "isBound", value: function isBound() {
        return this.bound == ItemStatus.BOUND || this.bound == ItemStatus.FAMILIAR;
      } }, { key: "isTradeable", value: function isTradeable() {
        return this.bound == null || this.bound == ItemStatus.IN_USE || this.bound == ItemStatus.SHOP_WORTH;
      } }]);
    })();
    ItemPrice = /* @__PURE__ */ _createClass3(
      function ItemPrice2(item, price, accuracy, daysOutdated) {
        var volume = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
        var price2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : -1;
        _classCallCheck3(this, ItemPrice2);
        this.item = item;
        this.price = price;
        this.accuracy = accuracy;
        this.daysOutdated = daysOutdated;
        this.volume = volume;
        this.price2 = price2;
      }
    );
  }
});

// src/utils/colors.ts
function _slicedToArray2(r, e) {
  return _arrayWithHoles2(r) || _iterableToArrayLimit2(r, e) || _unsupportedIterableToArray2(r, e) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles2(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray2(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray2(r);
}
function _arrayLikeToArray2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function loadAccountvalColors(name) {
  if (name == "default") {
    name = provider().isDarkMode() ? "dark" : "light";
  }
  if (!map.has(name)) {
    return false;
  }
  AccountValColors = map.get(name);
  return true;
}
function getAccountvalColors() {
  return ["default"].concat(_toConsumableArray(map.keys()));
}
function showAccountvalColors(name) {
  if (!map.has(name)) {
    provider().print("Can't find any colors by that name", "red");
    return;
  }
  var colors = map.get(name);
  for (var _i = 0, _Object$entries = Object.entries(colors); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray2(_Object$entries[_i], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
    provider().printHtml(`<font color='${v}'>${k}</font>`);
  }
}
function initAccountValColors() {
  var def = provider().isDarkMode() ? "dark" : "default";
  loadAccountvalColors(
    provider().retrieveCache("accountvalColorScheme", "small_persist") ? provider().retrieveCache("accountvalColorScheme", "small_persist") : def
  );
}
var AccountValColors, map;
var init_colors = __esm({
  "src/utils/colors.ts"() {
    init_apiSupplier();
    map = /* @__PURE__ */ new Map();
    map.set("light", {
      attentionGrabbingWarning: "red",
      failedToParseSettings: "purple",
      minorNote: "gray",
      helpfulStateInfo: "blue",
      mallExtinctColor1: "#4f5893",
      mallExtinctColor2: "#934f4f",
      shopPricedOk: "#196f3d",
      shopPricesOverpriced: "#db2525",
      noteUntradeable: "red"
    });
    map.set("dark", {
      attentionGrabbingWarning: "red",
      failedToParseSettings: "purple",
      minorNote: "gray",
      helpfulStateInfo: "#3ccabb",
      mallExtinctColor1: "#6b7ade",
      mallExtinctColor2: "#d76d6d",
      shopPricedOk: "#269f59",
      shopPricesOverpriced: "#dd4040",
      noteUntradeable: "red"
    });
  }
});

// src/resolvers/coinmaster.ts
function _createForOfIteratorHelper2(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray3(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray3(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray3(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray3(r, a) : void 0;
  }
}
function _arrayLikeToArray3(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck4(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties4(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey4(o.key), o);
  }
}
function _createClass4(e, r, t) {
  return r && _defineProperties4(e.prototype, r), t && _defineProperties4(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty2(e, r, t) {
  return (r = _toPropertyKey4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive4(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var CoinmasterResolver;
var init_coinmaster = __esm({
  "src/resolvers/coinmaster.ts"() {
    init_apiSupplier();
    init_supplierTypings();
    CoinmasterResolver = /* @__PURE__ */ (function() {
      function CoinmasterResolver2(prices) {
        _classCallCheck4(this, CoinmasterResolver2);
        _defineProperty2(this, "items", []);
        this.prices = prices;
      }
      return _createClass4(CoinmasterResolver2, [{ key: "load", value: function load() {
        var _iterator = _createForOfIteratorHelper2(
          KoLItem.all()
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            if (!item.tradeable || item.gift || item.quest || item.seller == null) {
              continue;
            }
            var token = item.seller.item;
            if (token == KoLItem.none) {
              continue;
            }
            var price = provider().sellPrice(item.seller, item);
            if (price <= 0) {
              continue;
            }
            this.items.push({
              item,
              coinmaster: item.seller,
              currencyCost: price,
              currency: token
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.prices.bulkLoad(this.items.map((i) => i.item));
      } }, { key: "getHighestCoinmaster", value: function getHighestCoinmaster(currency) {
        var highest = null;
        var _iterator22 = _createForOfIteratorHelper2(
          this.items
        ), _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
            var item = _step22.value;
            if (item.currency != currency) {
              continue;
            }
            if (item.price == null) {
              var itemPrice = this.prices.itemPrice(item.item);
              if (itemPrice == null) {
                return null;
              }
              item.price = itemPrice.price;
              item.priceEach = item.price / item.currencyCost;
            }
            if (highest != null && highest.priceEach > item.priceEach) {
              continue;
            }
            highest = item;
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        return highest;
      } }]);
    })();
  }
});

// data/accountval_binds.txt
var accountval_binds_default;
var init_accountval_binds = __esm({
  "data/accountval_binds.txt"() {
    accountval_binds_default = "# Original data taken from https://github.com/soolar/accountval.ash\n# Item Containers! Start with i\ni	packet of mayfly bait	mayfly bait necklace\ni	Clan VIP Lounge invitation	Clan VIP Lounge key\ni	Make-Your-Own-Vampire-Fangs kit	plastic vampire fangs\ni	Folder Holder	over-the-shoulder Folder Holder\ni	can of Rain-Doh	empty Rain-Doh can\ni	Discontent&trade; Winter Garden Catalog	packet of winter seeds\ni	Ed the Undying exhibit crate	The Crown of Ed the Undying\ni	Pack of Every Card	Deck of Every Card\ni	DIY protonic accelerator kit	protonic accelerator pack\ni	Dear Past Self Package	Time-Spinner\ni	Granny Tood's Thanksgarden Catalog	packet of thanksgarden seeds\ni	suspicious package	Kremlin's Greatest Briefcase\ni	LI-11 Motor Pool voucher	Asdon Martin keyfob (on ring)\ni	Grumpy Bumpkin's Pumpkin Seed Catalog	packet of pumpkin seeds\ni	Mint Salton Pepper's Peppermint Seed Catalog	Peppermint Pip Packet\ni	Pete & Jackie's Dragon Tooth Emporium Catalog	packet of dragon's teeth\ni	Pocket Meteor Guide	Pocket Meteor Guide (well-thumbed)\ni	corked genie bottle	genie bottle\ni	pantogram	portable pantogram\ni	locked mumming trunk	mumming trunk\ni	January's Garbage Tote (unopened)	January's Garbage Tote\ni	Pok&eacute;fam Guide to Capturing All of Them	packet of tall grass seeds\ni	SongBoom&trade; BoomBox Box	SongBoom&trade; BoomBox\ni	Bastille Battalion control rig crate	Bastille Battalion control rig\ni	latte lovers club card	latte lovers member's mug\ni	Kramco Industries packing carton	Kramco Sausage-o-Matic&trade;\ni	mint condition Lil' Doctor&trade; bag	Lil' Doctor&trade; bag\ni	vampyric cloake pattern	vampyric cloake\ni	Fourth of May Cosplay Saber kit	Fourth of May Cosplay Saber\ni	rune-strewn spoon cocoon	hewn moon-rune spoon\ni	Beach Comb Box	Beach Comb\ni	Unopened Eight Days a Week Pill Keeper	Eight Days a Week Pill Keeper\ni	unopened diabolic pizza cube box	diabolic pizza cube\ni	unopened Bird-a-Day calendar	Bird-a-Day calendar\ni	mint-in-box Powerful Glove	Powerful Glove\ni	Better Shrooms and Gardens catalog	packet of mushroom spores\ni	Guzzlr application	Guzzlr tablet\ni	bag of Iunion stones	Iunion Crown\ni	packaged SpinMaster&trade; lathe	SpinMaster&trade; lathe\ni	Bagged Cargo Cultist Shorts	Cargo Cultist Shorts\ni	Comprehensive Cartographic Compendium	Comprehensive Cartographic Compendium (well-read)\ni	packaged knock-off retro superhero cape	unwrapped knock-off retro superhero cape\ni	packaged miniature crystal ball	miniature crystal ball\ni	emotion chip	spinal-fluid-covered emotion chip\ni	power seed	potted power plant\ni	packaged backup camera	backup camera\ni	packaged familiar scrapbook	familiar scrapbook\ni	packaged industrial fire extinguisher	industrial fire extinguisher\ni	Packaged Daylight Shavings Helmet	Daylight Shavings Helmet\ni	Packaged cold medicine cabinet	Cold medicine cabinet\ni	box o' ghosts	gregarious ghostling\ni	Gordon Beer's Beer Garden Catalog	Packet of beer seeds\ni	Mint condition magnifying glass	cursed magnifying glass\ni	Antique pair of blue jeans	Ellsbury's journal (used)\ni	warehouse key	mime army insignia (cryonics)\ni	warehouse key	mime army insignia (morale)\ni	warehouse key	mime army insignia (psychological warfare)\ni	warehouse key	mime army insignia (pyrotechnics)\ni	warehouse key	mime army insignia (sanitation)\ni	warehouse key	mime army insignia (espionage)\ni	warehouse key	mime army insignia (infantry)\ni	warehouse key	mime army insignia (intelligence)\ni	warehouse key	mime army infiltration glove\ni	warehouse key	mime army challenge coin\ni	warehouse key	mime army shotglass\ni	warehouse key	miming corduroys\ni	warehouse key	miming beret\ni	warehouse key	miming gloves\ni	warehouse key	miming boots\ni	warehouse key	miming shirt\ni	combat lover's locket lockbox	combat lover's locket\ni	undamaged Unbreakable Umbrella	Unbreakable umbrella\ni	packaged June cleaver	June cleaver\ni	designer sweatpants (new old stock)	Designer sweatpants\ni	unopened tiny stillsuit	tiny stillsuit\ni	packaged Jurassic Parka	Jurassic Parka\ni	packaged model train set	model train set\ni	ChibiBuddy\u2122 (off)	ChibiBuddy\u2122 (on)\ni	Rock Garden Guide	packet of rock seeds\ni	S.I.T. Course Voucher	S.I.T. Course Completion Certificate\ni	Closed-circuit phone system	Closed-circuit pay phone\ni	Cursed monkey glove	cursed monkey's paw\ni	shrink-wrapped Cincho de Mayo	Cincho de Mayo\ni	shrink-wrapped 2002 Mr. Store Catalog	2002 Mr. Store Catalog\ni	boxed august scepter	august scepter\ni	book of facts	book of facts (dog-eared)\ni	crated wardrobe-o-matic	wardrobe-o-matic\ni	wrapped candy cane sword cane	candy cane sword cane\ni	in-the-box spring shoes	spring shoes\ni	packaged Everfull Dart Holster	Everfull Dart Holster\ni	Boxed Apriling band helmet	Apriling band helmet\ni	boxed Mayam Calendar	Mayam Calendar\ni	packaged Roman Candelabra	Roman Candelabra\ni	untorn tearaway pants package	tearaway pants\ni	Boxed Sept-Ember Censer	Sept-Ember Censer\ni	boxed bat wings	bat wings\ni	Sealed TakerSpace letter of Marque	TakerSpace letter of Marque\ni	McHugeLarge deluxe ski set	McHugeLarge duffel bag\ni	CyberRealm keycode	server room key\ni	eldritch tincture	eldritch tincture (depleted)\ni	new-in-box toy Cupid bow	toy Cupid bow\ni	assemble-it-yourself Leprecondo	Leprecondo\ni	Packaged April Shower Thoughts Calendar	April Shower Thoughts shield\ni	Unpeeled Peridot of Peril	Peridot of Peril\ni	packaged prismatic beret	prismatic beret\ni	M\xF6bius ring box	M\xF6bius ring\ni	packaged Monodent of the Sea	Monodent of the Sea\ni	Lab-grown blood cubic zirconia	blood cubic zirconia\ni	shrunken head in a duffel bag	shrunken head\ni	seal-clubbing club loot box	legendary seal-clubbing club\ni	discreetly-wrapped Eternity Codpiece	The Eternity Codpiece\ni	boxed Heartstone	Heartstone\ni	Boxed Archaeologist's Spade	Archaeologist's Spade\ni	wrapped Baseball Diamond	Baseball Diamond\ni	Pasta wand loot box	legendary pasta wand\ni	shrink-wrapped Cup of 13s	Cup of 13s\ni	Allied Radio Backpack Pack	Allied Radio Backpack\ni	Packaged Portable Laughing Stock	Portable Laughing Stock\ni	black rosebud	black garden rose\n\n\n\n\n# Bookshelf stuff! Start with b\nb	Tome of Snowcone Summoning	Summon Snowcones\nb	Scratch 'n' Sniff Sticker Tome	Summon Stickers\nb	Tome of Sugar Shummoning	Summon Sugar Sheets\nb	Tome of Clip Art	Summon Clip Art\nb	Tome of Rad Libs	Summon Rad Libs\nb	The Smith's Tome	Summon Smithsness\nb	McPhee's Grimoire of Hilarious Object Summoning	Summon Hilarious Objects\nb	Sp'n-Zor's Grimoire of &quot;Tasteful&quot; Gifts	Summon Tasteful Items\nb	Sorcerers of the Shore Grimoire	Summon Alice's Army Cards\nb	Thinknerd's Grimoire of Geeky Gifts	Summon Geeky Gifts\nb	Libram of Candy Heart Summoning	Summon Candy Heart\nb	Libram of Divine Favors	Summon Party Favor\nb	Libram of Love Songs	Summon Love Song\nb	Libram of BRICKOs	Summon BRICKOs\nb	Gygaxian Libram	Summon Dice\nb	Libram of Resolutions	Summon Resolutions\nb	Libram of Pulled Taffy	Summon Taffy\nb	The Confiscator's Grimoire	Summon Confiscated Things\n\n\n\n# Property based detection! Start with p\np	airplane charter: Spring Break Beach	sleazeAirportAlways&!_sleazeAirportToday\np	airplane charter: Conspiracy Island	spookyAirportAlways&!_spookyAirportToday\np	airplane charter: Dinseylandfill	stenchAirportAlways&!_stenchAirportToday\np	airplane charter: That 70s Volcano	hotAirportAlways&!_hotAirportToday\np	airplane charter: The Glaciest	coldAirportAlways&!_coldAirportToday\np	Chateau Mantegna room key	chateauAvailable\np	bottle of lovebug pheromones	lovebugsUnlocked\np	shrine to the Barrel god	barrelShrineUnlocked\np	X-32-F snowman crate	snojoAvailable\np	LT&T telegraph office deed	telegraphOfficeAvailable\np	detective school application	hasDetectiveSchool\np	Build-a-City Gingerbread kit	gingerbreadCityAvailable&!_gingerbreadCityToday\np	heart-shaped crate	loveTunnelAvailable&!_loveTunnelUsed\np	Spacegate access badge	spacegateAlways&!_spacegateToday\np	FantasyRealm membership packet	frAlways&!_frToday\np	Horsery contract	horseryAvailable\np	Neverending Party invitation envelope	neverendingPartyAlways&!_neverendingPartyToday\np	voter registration form	voteAlways&!_voteToday\np	Boxing Day care package	daycareOpen&!_daycareToday\np	PirateRealm membership packet	prAlways&!_prToday\np	Distant Woods Getaway Brochure	getawayCampsiteUnlocked\np	Undrilled cosmic bowling ball	hasCosmicBowlingBall\np	MayDay\u2122 contract	hasMaydayContract\np	boxed autumn-aton	hasAutumnaton\np	deed to Oliver's Place	ownsSpeakeasy\np	Interesting Coin Inheritance Letter	hasInterestingCoin\np	Order of the Green Thumb Order Form	ownsFloristFriar\n\n\n\n# Eudoras! Start with e\ne	My Own Pen Pal kit	Pen Pal\ne	GameInformPowerDailyPro subscription card	GameInformPowerDailyPro Magazine\ne	Xi Receiver Unit	Xi Receiver Unit\ne	New-You Club Membership Form	New-You Club\ne	Our Daily Candles\u2122 order form	Our Daily Candles\ne	Black and White Apron Enrollment Form	Black & White Apron\n\n\n\n# visit_url contains... Start with v\n\n\n\n# eval(function) => boolean! Starts with s for script\n\n\n\n# campground items! Starts with c\nc	Haunted Doghouse\nc	Witchess Set\nc	Source terminal\nc	potted tea tree\nc	A Guide to Burning Leaves\n\n\n\n# Gardens\ng	packet of pumpkin seeds	pumpkin	\ng	Peppermint Pip Packet	peppermint\ng	packet of dragon's teeth	skeleton\ng	Packet of beer seeds	beer\ng	packet of winter seeds	winter\ng	packet of thanksgarden seeds	thanksgarden\ng	packet of tall grass seeds	grass\ng	packet of mushroom spores	mushroom\ng	packet of rock seeds	rock\ng	black garden rose	black_rose\n\n\n# Items that are dependent on the value of another as they're no-trade\n# Item | Check Against | X of our item = 1 of that item\nt	ChibiBuddy\u2122 (on)	ChibiBuddy\u2122 (off)	1\nt	distilled resin	inflammable leaf	50\nt	Rethinking Candy	Knucklebone	2750\n\n\n# Items that are a coinmaster currency, and is dynamically priced because there's no solid metric\n# The price is resolved at runtime\nt	fat loot token\nt	Cop dollar\nt	Driplet\nt	Chroner\nt	Freddy Kruegerand\nt	Guzzlrbuck\nt	Beach Buck\nt	Volcoino\nt	FunFunds\u2122\nt	Coinspiracy\nt	Wal-Mart gift certificate\nt	Rubee\u2122\nt	buffalo dime\nt	Spacegate Research\n\n# Items that are best valued at a hardcoded value, although you may not get that value...\nh	meat paste	10\nh	meat stack	100\nh	nest egg	150\nh	Dungeon dragon chest	500\nh	Meat globe	700\nh	dense meat stack	1000\nh	Loose Meats	2300\nh	chest of the Bonerdagon	3000\nh	Duct tape wallet	3050\nh	Stock Certificate	5000\nh	Envelope full of Meat	30000\nh	Discount Telescope Warehouse gift certificate	100000";
  }
});

// src/utils/utils.ts
function _classCallCheck5(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties5(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey5(o.key), o);
  }
}
function _createClass5(e, r, t) {
  return r && _defineProperties5(e.prototype, r), t && _defineProperties5(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive5(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var AccountValUtils;
var init_utils = __esm({
  "src/utils/utils.ts"() {
    AccountValUtils = /* @__PURE__ */ (function() {
      function AccountValUtils2() {
        _classCallCheck5(this, AccountValUtils2);
      }
      return _createClass5(AccountValUtils2, null, [{ key: "getNumber", value: function getNumber(number) {
        var trimAt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
        var str = number.toString().split(".");
        if (str.length > 1 && str[1].length > trimAt) {
          str[1] = str[1].substring(0, trimAt);
        }
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
      } }, { key: "getNumberOrClamp", value: function getNumberOrClamp(number, min, max, minStr, maxStr) {
        if (number > max) {
          return maxStr;
        }
        if (number < min) {
          return minStr;
        }
        return this.getNumber(number);
      } }, { key: "toBoolean", value: function toBoolean(string) {
        return ["true", "yes", "1"].includes(string.toLowerCase());
      } }, { key: "toFloat", value: function toFloat(string) {
        return parseFloat(string.replaceAll(",", ""));
      } }, { key: "toInt", value: function toInt(string) {
        return parseInt(string.replaceAll(",", ""));
      } }]);
    })();
  }
});

// src/resolvers/items.ts
function _slicedToArray3(r, e) {
  return _arrayWithHoles3(r) || _iterableToArrayLimit3(r, e) || _unsupportedIterableToArray4(r, e) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit3(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles3(r) {
  if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper3(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray4(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray4(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray4(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray4(r, a) : void 0;
  }
}
function _arrayLikeToArray4(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _defineProperty3(e, r, t) {
  return (r = _toPropertyKey6(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _defineProperties6(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey6(o.key), o);
  }
}
function _createClass6(e, r, t) {
  return r && _defineProperties6(e.prototype, r), t && _defineProperties6(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey6(t) {
  var i = _toPrimitive6(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive6(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
function _classCallCheck6(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
var AccValStuff, ItemResolver2;
var init_items = __esm({
  "src/resolvers/items.ts"() {
    init_apiSupplier();
    init_supplierTypings();
    init_typings();
    init_colors();
    init_coinmaster();
    init_accountval_binds();
    init_utils();
    AccValStuff = /* @__PURE__ */ _createClass6(function AccValStuff2() {
      _classCallCheck6(this, AccValStuff2);
    });
    ItemResolver2 = /* @__PURE__ */ (function() {
      function ItemResolver(prices) {
        _classCallCheck6(this, ItemResolver);
        _defineProperty3(this, "visitCache", /* @__PURE__ */ new Map());
        _defineProperty3(this, "accountValCache", /* @__PURE__ */ new Map());
        _defineProperty3(this, "accountValVisitCachePropName", "_accountValVisitCache");
        this.prices = prices;
        this.accValStuff = this.loadAccountValStuff();
      }
      return _createClass6(ItemResolver, [{ key: "loadCache", value: function loadCache() {
        var prop = provider().retrieveCache(this.accountValVisitCachePropName, "transient").split(",");
        var _iterator = _createForOfIteratorHelper3(
          prop
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var p = _step.value;
            if (!p.includes(":")) {
              continue;
            }
            var spl = p.split(":");
            this.accountValCache.set(
              KoLItem.get(AccountValUtils.toInt(spl[0])),
              spl[1].startsWith("t")
            );
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } }, { key: "saveCache", value: function saveCache() {
        var values = [];
        this.accountValCache.forEach(
          (val2, key) => values.push(`${key.id}:${val2 ? "t" : "f"}`)
        );
        values.sort((v1, v2) => v1.localeCompare(v2));
        var val = values.join(",");
        if (provider().retrieveCache(
          this.accountValVisitCachePropName,
          "transient"
        ) == val) {
          return;
        }
        provider().storeCache(
          this.accountValVisitCachePropName,
          values.join(","),
          "transient"
        );
      } }, { key: "getUrledItems", value: function getUrledItems() {
        var items = [];
        var origSize = this.accountValCache.size;
        var _iterator2 = _createForOfIteratorHelper3(
          this.accValStuff
        ), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var s = _step2.value;
            if (s.itemType == ItemType.BOOK) {
              if (provider().haveSkill(s.skill)) {
                items.push([s.actualItem, ItemStatus.BOUND]);
              }
            } else if (s.itemType == ItemType.EUDORA) {
              if (this.visitCheck(
                s.actualItem,
                "account.php?tab=correspondence",
                s.correspondence
              )) {
                items.push([s.actualItem, ItemStatus.BOUND]);
              }
            } else if (s.itemType == ItemType.PROPERTY) {
              if (this.testProperty(s.userSetting)) {
                items.push([s.actualItem, ItemStatus.BOUND]);
              }
            } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
              if (this.visitCheck(s.actualItem, s.visitUrlLink, s.visitUrlIncludes)) {
                items.push([s.actualItem, ItemStatus.BOUND]);
              }
            } else if (s.itemType == ItemType.GARDEN) {
              if (provider().myGardenType() == s.garden) {
                items.push([s.actualItem, ItemStatus.IN_USE]);
              }
            } else if (s.itemType == ItemType.SKILL) {
              if (provider().getPermedSkills()[s.skill.name]) {
                items.push([s.actualItem, ItemStatus.BOUND]);
              }
            } else if (s.itemType == ItemType.CAMPGROUND) {
              if (provider().getCampground().has(s.actualItem)) {
                items.push([s.actualItem, ItemStatus.BOUND]);
              }
            } else if (s.itemType == ItemType.SCRIPT) {
              if (eval(s.script)) {
                items.push([s.actualItem, ItemStatus.BOUND]);
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (origSize != this.accountValCache.size) {
          this.saveCache();
        }
        return items;
      } }, { key: "testProperty", value: function testProperty(property) {
        var result = true;
        var _iterator3 = _createForOfIteratorHelper3(
          property.split("&")
        ), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var prop = _step3.value;
            var isTrue = AccountValUtils.toBoolean(
              provider().retrieveCache(prop.replace("!", ""), "small_persist")
            );
            var isNotNegated = !prop.includes("!");
            result = result && isTrue == isNotNegated;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return result;
      } }, { key: "addItem", value: function addItem(ownedItems, actualItem, item, name, plural, bound) {
        var count = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1;
        var worthMultiplier = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 1;
        var v = new ValItem(actualItem, item, name, plural, bound);
        v.worthMultiplier = worthMultiplier;
        ownedItems.set(v, (ownedItems.get(v) | 0) + count);
      } }, { key: "resolveBoundToTradeables", value: function resolveBoundToTradeables(copy, ownedItems, resolve) {
        var coinmaster;
        var _iterator4 = _createForOfIteratorHelper3(
          this.accValStuff
        ), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var s2 = _step4.value;
            if (!resolve.includes(s2.itemType)) {
              continue;
            }
            try {
              if (s2.itemType == ItemType.CURRENCY && s2.untradeableItem == null) {
                if (coinmaster == null) {
                  coinmaster = new CoinmasterResolver(this.prices);
                  coinmaster.load();
                }
                var _item = coinmaster.getHighestCoinmaster(s2.actualItem);
                if (_item == null) {
                  continue;
                }
                s2.currencyAmount = _item.currencyCost;
                s2.untradeableItem = _item.currency;
                s2.actualItem = _item.item;
              }
              var item = s2.untradeableItem;
              var pair = copy[item.name];
              if (pair == null) {
                continue;
              }
              var v = pair[0];
              this.addItem(
                ownedItems,
                item,
                s2.actualItem,
                item.name,
                item.plural,
                v.bound == null || v.bound == ItemStatus.NO_TRADE || v.bound == ItemStatus.IN_USE ? s2.itemType == ItemType.UNTRADEABLE_ITEM ? ItemStatus.BOUND : ItemStatus.NO_TRADE : v.bound,
                pair[1],
                s2.currencyAmount ?? 1
              );
            } catch (e) {
              provider().print(
                `You probably need to update mafia! Got an error! ${e}`,
                AccountValColors.attentionGrabbingWarning
              );
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } }, { key: "resolveFamiliars", value: function resolveFamiliars(familiars, ownedItems) {
        var _iterator5 = _createForOfIteratorHelper3(
          familiars
        ), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var fam = _step5.value;
            if (!fam.hatchling.tradeable) {
              continue;
            }
            this.addItem(
              ownedItems,
              fam.hatchling,
              fam.hatchling,
              fam.toString(),
              fam.toString(),
              ItemStatus.FAMILIAR
            );
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      } }, { key: "resolveFamiliarItems", value: function resolveFamiliarItems() {
        var famEquipped = /* @__PURE__ */ new Map();
        var _iterator6 = _createForOfIteratorHelper3(
          KoLFamiliar.all()
        ), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var fam = _step6.value;
            if (!provider().haveFamiliar(fam) || provider().myFamiliar() == fam) {
              continue;
            }
            var item = provider().familiarEquippedEquipment(fam);
            if (item == null || item == KoLItem.none) {
              continue;
            }
            famEquipped.set(item, (famEquipped.get(item) | 0) + 1);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        return famEquipped;
      } }, { key: "visitCheck", value: function visitCheck(item, url, find) {
        if (this.accountValCache.has(item)) {
          return this.accountValCache.get(item);
        }
        var page = this.visitCache.get(url);
        if (page == null) {
          page = provider().visitUrl(url);
          this.visitCache.set(url, page);
        }
        var result = page.includes(find);
        this.accountValCache.set(item, result);
        return result;
      } }, { key: "loadAccountValStuff", value: function loadAccountValStuff() {
        var buffer = accountval_binds_default;
        var values = [];
        var _iterator7 = _createForOfIteratorHelper3(
          buffer.split(/(\n|\r)+/)
        ), _step7;
        try {
          loop: for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            var line = _step7.value;
            if (line.startsWith("#") || line.length == 0) {
              continue;
            }
            var spl = line.split("	");
            if (spl.length < 2) {
              continue;
            }
            var _v = new AccValStuff();
            try {
              _v.actualItem = KoLItem.get(spl[1]);
            } catch (e) {
              provider().print(
                `Error! Update mafia? ${e}`,
                AccountValColors.attentionGrabbingWarning
              );
              continue;
            }
            switch (spl[0]) {
              case "i":
                _v.itemType = ItemType.UNTRADEABLE_ITEM;
                _v.untradeableItem = KoLItem.get(spl[2]);
                break;
              case "b":
                _v.itemType = ItemType.BOOK;
                _v.skill = KoLSkill.get(spl[2]);
                break;
              case "p":
                _v.itemType = ItemType.PROPERTY;
                _v.userSetting = spl[2];
                break;
              case "e":
                _v.itemType = ItemType.EUDORA;
                _v.correspondence = spl[2];
                break;
              case "v":
                _v.itemType = ItemType.VISIT_URL_CHECK;
                _v.visitUrlLink = spl[2];
                _v.visitUrlIncludes = spl[3];
                break;
              case "g":
                _v.itemType = ItemType.GARDEN;
                _v.garden = spl[2];
                break;
              case "t":
                _v.itemType = ItemType.CURRENCY;
                if (spl.length > 2) {
                  _v.untradeableItem = KoLItem.get(spl[2]);
                  _v.currencyAmount = parseInt(spl[3]);
                }
                break;
              case "c":
                _v.itemType = ItemType.CAMPGROUND;
                break;
              case "s":
                _v.itemType = ItemType.SCRIPT;
                _v.script = spl[2];
                break;
              case "h":
                this.prices.addSpecialCase(_v.actualItem, parseInt(spl[2]));
                continue loop;
                break;
              default:
                provider().print(
                  `Found line '${line}' which I can't handle!`,
                  AccountValColors.attentionGrabbingWarning
                );
                continue;
            }
            values.push(_v);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        this.loadSkills(values);
        loop: for (var _i = 0, _values = values; _i < _values.length; _i++) {
          var v = _values[_i];
          if (v.actualItem.tradeable || v.itemType == ItemType.CURRENCY && v.untradeableItem == null) {
            continue;
          }
          var _iterator8 = _createForOfIteratorHelper3(
            values
          ), _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
              var v1 = _step8.value;
              if (v1.itemType != ItemType.UNTRADEABLE_ITEM && v1.itemType != ItemType.CURRENCY) {
                continue;
              }
              if (v1.untradeableItem != v.actualItem) {
                continue;
              }
              continue loop;
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          provider().print(
            `Missing a tradeable item for ${v.actualItem}`,
            AccountValColors.attentionGrabbingWarning
          );
        }
        this.loadCache();
        return values;
      } }, { key: "loadSkills", value: function loadSkills(values) {
        var itemsSkills = new Map(
          KoLItem.all().map((i2) => [i2, provider().associatedSkill(i2)]).filter(
            (_ref) => {
              var _ref2 = _slicedToArray3(_ref, 2), i2 = _ref2[0], skill2 = _ref2[1];
              return !i2.reusable && !i2.quest && !i2.gift && skill2 != KoLSkill.none;
            }
          )
        );
        var alreadyNoted = values.map((v2) => v2.actualItem);
        var _iterator9 = _createForOfIteratorHelper3(
          itemsSkills
        ), _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
            var _step9$value = _slicedToArray3(_step9.value, 2), i = _step9$value[0], skill = _step9$value[1];
            if (!i.tradeable || alreadyNoted.includes(i)) {
              continue;
            }
            var v = new AccValStuff();
            v.itemType = ItemType.SKILL;
            v.actualItem = i;
            v.skill = skill;
            values.push(v);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      } }]);
    })();
  }
});

// src/resolvers/pages.ts
function _createForOfIteratorHelper4(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray5(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _toConsumableArray2(r) {
  return _arrayWithoutHoles2(r) || _iterableToArray2(r) || _unsupportedIterableToArray5(r) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray5(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray5(r, a) : void 0;
  }
}
function _iterableToArray2(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles2(r) {
  if (Array.isArray(r)) return _arrayLikeToArray5(r);
}
function _arrayLikeToArray5(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _defineProperties7(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey7(o.key), o);
  }
}
function _createClass7(e, r, t) {
  return r && _defineProperties7(e.prototype, r), t && _defineProperties7(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey7(t) {
  var i = _toPrimitive7(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive7(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
function _classCallCheck7(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
var StoreItem, PageResolver;
var init_pages = __esm({
  "src/resolvers/pages.ts"() {
    init_apiSupplier();
    init_supplierTypings();
    init_colors();
    init_utils();
    StoreItem = /* @__PURE__ */ _createClass7(function StoreItem2() {
      _classCallCheck7(this, StoreItem2);
    });
    PageResolver = /* @__PURE__ */ (function() {
      function PageResolver2() {
        _classCallCheck7(this, PageResolver2);
      }
      return _createClass7(PageResolver2, [{ key: "getSnapshot", value: function getSnapshot(username) {
        var items2 = new Map(
          KoLItem.all().map((i) => {
            var name2 = i.name;
            while (name2.match(/<\/?i>/)) {
              name2 = name2.replace(/<\/?i>/, "");
            }
            return [provider().entityDecode(name2).toLowerCase(), i];
          })
        );
        var skills = new Map(
          KoLSkill.all().map(
            (s2) => [
              provider().entityDecode(s2.name).toLowerCase(),
              s2
            ]
          )
        );
        var fams = new Map(
          KoLFamiliar.all().map((f) => [f.toString().toLowerCase(), f])
        );
        var ignore = _toConsumableArray2(fams.values()).map(
          (f) => f.hatchling.toString().toLowerCase()
        );
        ignore.push.apply(
          ignore,
          _toConsumableArray2(
            Object.values(provider().allNormalOutfits()).map(
              (s2) => s2.toLowerCase()
            )
          )
        );
        ignore.push("miming regalia");
        var page = provider().visitUrl(
          "https://api.aventuristo.net/av-snapshot?u=" + username
        );
        if (!page.includes("<p>Snapshot for <b>")) {
          return [];
        }
        page = page.substring(0, page.indexOf(`id='a7'>Discoveries</h1>`));
        var tdRegex = /<td(.*?)<\/td>/m;
        var linkRegex = /class='(perm|hcperm|fam_run_90|fam_have|fam_run_100)'.*?<a href="[^"]+" rel="noreferrer">(?:.*?>)?([^>]*?)<\/a>/;
        var match;
        var has = [];
        while ((match = page.match(tdRegex)) != null) {
          page = page.substring(page.indexOf(match[0]) + match[0].length);
          var link = match[1].match(linkRegex);
          if (link == null) {
            continue;
          }
          var name = provider().entityDecode(link[2]).toLowerCase();
          if (ignore.includes(name)) {
            continue;
          }
          var type = link[1];
          var isFam = !type.includes("perm");
          if (isFam) {
            if (fams.has(name)) {
              has.push(fams.get(name));
            } else {
              provider().print(
                "Unable to resolve the familiar '" + name + "' from av-snapshot",
                AccountValColors.attentionGrabbingWarning
              );
            }
            continue;
          }
          if (name.match(/: level \d+$/)) {
            name = name.substring(0, name.lastIndexOf(":"));
          } else if (name.match(/ \(\d+\/\d+\)$/)) {
            name = name.substring(0, name.lastIndexOf(" "));
          } else if (name.match(/ \d+\/\d+$/)) {
            continue;
          }
          if (skills.has(name)) {
            has.push(skills.get(name));
            continue;
          }
          if (items2.has(name)) {
            has.push(items2.get(name));
            continue;
          }
          var count = 1;
          if (name.match(/ x\d+$/)) {
            count = AccountValUtils.toInt(
              name.substring(name.lastIndexOf("x") + 1)
            );
            name = name.substring(0, name.lastIndexOf(" "));
          }
          if (!items2.has(name)) {
            provider().print(
              "Unable to resolve the item '" + name + "' from av-snapshot",
              AccountValColors.attentionGrabbingWarning
            );
            continue;
          }
          has.push([items2.get(name), count]);
        }
        return has;
      } }, { key: "getFamiliars", value: function getFamiliars(userId) {
        var page = provider().visitUrl("showfamiliars.php?who=" + userId);
        var regex = /onClick='fam\((\d+)\)'/;
        var match;
        var familiars = [];
        while ((match = page.match(regex)) != null) {
          page = page.replace(match[0], "");
          familiars.push(provider().toFamiliar(AccountValUtils.toInt(match[1])));
        }
        return familiars;
      } }, { key: "getStore", value: function getStore(userId) {
        var items2 = [];
        var page = provider().visitUrl("mallstore.php?whichstore=" + userId);
        var _iterator = _createForOfIteratorHelper4(
          page.split("<tr>")
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var s2 = _step.value;
            var match = s2.match(
              /selecteditem=(\d+).+?<b>.+?<\/b> \(([\d,]+)\) +(?:\(Limit ([\d,]+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/
            );
            if (match == null) {
              continue;
            }
            var item = new StoreItem();
            item.item = KoLItem.get(AccountValUtils.toInt(match[1]));
            item.amount = AccountValUtils.toInt(match[2]);
            item.limit = match[3] == null ? 0 : AccountValUtils.toInt(match[3]);
            item.price = AccountValUtils.toInt(match[4]);
            items2.push(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return items2;
      } }, { key: "getDisplaycase", value: function getDisplaycase(userId) {
        var map2 = /* @__PURE__ */ new Map();
        var descs = new Map(
          KoLItem.all().map((i) => [i.descid, i])
        );
        var page = provider().visitUrl("displaycollection.php?who=" + userId);
        var lastShelf;
        var itemRegex = /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/;
        var shelfRegex = /<font color=white>([^<]+)<\/font>/;
        var _iterator22 = _createForOfIteratorHelper4(
          page.split("<tr>")
        ), _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
            var s2 = _step22.value;
            var shelfMatch = s2.match(shelfRegex);
            if (shelfMatch != null) {
              lastShelf = provider().entityDecode(shelfMatch[1]);
            }
            var match = s2.match(itemRegex);
            if (match == null) {
              continue;
            }
            var item = descs.get(match[1]);
            if (item == null) {
              provider().print(
                "Unknown item description: " + match[1] + ", update mafia?",
                AccountValColors.attentionGrabbingWarning
              );
              continue;
            }
            map2.set(
              { item, shelf: lastShelf },
              match[3] == null ? 1 : AccountValUtils.toInt(match[3])
            );
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        return map2;
      } }]);
    })();
  }
});

// src/utils/timings.ts
function _createForOfIteratorHelper5(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray6(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _toConsumableArray3(r) {
  return _arrayWithoutHoles3(r) || _iterableToArray3(r) || _unsupportedIterableToArray6(r) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray3(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles3(r) {
  if (Array.isArray(r)) return _arrayLikeToArray6(r);
}
function _slicedToArray4(r, e) {
  return _arrayWithHoles4(r) || _iterableToArrayLimit4(r, e) || _unsupportedIterableToArray6(r, e) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray6(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray6(r, a) : void 0;
  }
}
function _arrayLikeToArray6(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit4(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles4(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck8(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties8(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey8(o.key), o);
  }
}
function _createClass8(e, r, t) {
  return r && _defineProperties8(e.prototype, r), t && _defineProperties8(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty4(e, r, t) {
  return (r = _toPropertyKey8(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey8(t) {
  var i = _toPrimitive8(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive8(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var AccValTiming;
var init_timings = __esm({
  "src/utils/timings.ts"() {
    init_apiSupplier();
    init_utils();
    AccValTiming = /* @__PURE__ */ (function() {
      function AccValTiming2(name) {
        var isSteps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        _classCallCheck8(this, AccValTiming2);
        _defineProperty4(this, "started", Date.now());
        _defineProperty4(this, "depth", 0);
        _defineProperty4(this, "totalTimeTaken", null);
        this.name = name;
        if (isSteps) {
          this.totalTimeTaken = 0;
          this.start();
        }
      }
      return _createClass8(AccValTiming2, [{ key: "start", value: function start() {
        if (this.totalTimeTaken == null) {
          throw new Error(
            `${this.getName()} was not configured as a total time timings`
          );
        }
        if (this.stepStarted != null) {
          throw new Error(`${this.getName()} was not stopped properly`);
        }
        this.stepStarted = Date.now();
      } }, { key: "getName", value: function getName() {
        return this.name;
      } }, { key: "stop", value: function stop() {
        var print = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (this.stopped != null && this.stepStarted == null) {
          throw new Error(`The timing for ${this.getName()} was already stopped`);
        }
        this.stopped = Date.now();
        if (print) {
          AccValTiming2.printHtml(
            `<font color='blue'>${this.getName()}<font color='green'> time taken: </font>${this.getTimeStr()}</font>`
          );
        }
        if (this.totalTimeTaken != null) {
          this.totalTimeTaken += Date.now() - this.stepStarted;
          this.stepStarted = null;
        }
        return this;
      } }, { key: "getTime", value: function getTime() {
        return this.totalTimeTaken ?? (this.stopped ?? Date.now()) - this.started;
      } }, { key: "getTimeStr", value: function getTimeStr() {
        return `${AccountValUtils.getNumber(this.getTime())}ms${this.stopped == null ? " (never stopped)" : ""}${this.stepStarted != null ? " (step never stopped)" : ""}`;
      } }], [{ key: "printHtml", value: function printHtml(line) {
        provider().printHtml(line);
      } }, { key: "start", value: function start(name) {
        var withSteps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (!this.enabled) {
          return null;
        }
        var started = Date.now();
        var existing = this.trackingMap.get(name);
        if (existing != null && (existing.totalTimeTaken == null || existing.stepStarted != null)) {
          throw new Error(`The timing for ${name} was already started`);
        }
        if (existing == null) {
          existing = new AccValTiming2(name, withSteps);
          this.trackingMap.set(name, existing);
          this.tracking.push(["STARTED", existing]);
          existing.depth = this.tracking.filter(
            (_ref) => {
              var _ref2 = _slicedToArray4(_ref, 2), state = _ref2[0], t = _ref2[1];
              return t.stopped == null && state == "STARTED";
            }
          ).length - 1;
        } else {
          existing.start();
        }
        this.timingsSlowdown += Date.now() - started;
        return existing;
      } }, { key: "stop", value: function stop(name) {
        var print = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (!this.enabled) {
          return null;
        }
        var started = Date.now();
        var existing = this.trackingMap.get(name);
        if (existing == null) {
          throw new Error(`There was no time tracking created for ${name}`);
        }
        var lastStopIndex = -1;
        for (var i = this.tracking.length - 1; i >= 0; i--) {
          if (this.tracking[i][0] === "STOPPED" && this.tracking[i][1] === existing) {
            lastStopIndex = i;
            break;
          }
        }
        if (lastStopIndex !== -1) {
          this.tracking.splice(lastStopIndex, 1);
        }
        this.tracking.push(["STOPPED", existing]);
        existing.stop(print);
        this.timingsSlowdown += Date.now() - started;
        return existing;
      } }, { key: "printTracked", value: function printTracked(method) {
        if (!this.enabled) {
          return;
        }
        var sortedTimes = _toConsumableArray3(
          this.tracking
        );
        this.tracking.forEach((_ref3) => {
          var _ref4 = _slicedToArray4(_ref3, 2), state2 = _ref4[0], t = _ref4[1];
          if (t.stopped == null) {
            sortedTimes.push(["STOPPED", t]);
          }
        });
        var _iterator = _createForOfIteratorHelper5(
          sortedTimes
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _slicedToArray4(_step.value, 2), state = _step$value[0], timing = _step$value[1];
            var depthStr = `<font color='gray'>${">&nbsp;".repeat(timing.depth)}</font>`;
            if (method == "PRINT_JUST_ONCE") {
              if (state != "STARTED") {
                continue;
              }
              this.printHtml(
                `${depthStr}<font color='blue'>${timing.getName()} <font color='green'>time taken:</font> ${timing.getTimeStr()}</font>`
              );
            } else if (method == "PRINT_START_AND_END") {
              if (state == "STARTED") {
                this.printHtml(
                  `${depthStr}<font color='blue'>${timing.getName()}</font> <font color='green'>started</font>`
                );
              } else {
                this.printHtml(
                  `${depthStr}<font color='blue'>${timing.getName()}<font color='green'> stopped, time taken: </font>${timing.getTimeStr()}</font>`
                );
              }
            } else if (method == "PRINT_JUST_END") {
              if (state == "STARTED") {
                continue;
              }
              this.printHtml(
                `${depthStr}<font color='blue'>${timing.getName()}<font color='green'> time taken: </font>${timing.getTimeStr()}</font>`
              );
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.printHtml(
          `<font color='green'>The usage of timings took an extra: </font><font color='blue'>${AccountValUtils.getNumber(this.timingsSlowdown)}ms</font>`
        );
      } }]);
    })();
    _defineProperty4(AccValTiming, "tracking", []);
    _defineProperty4(AccValTiming, "trackingMap", /* @__PURE__ */ new Map());
    _defineProperty4(AccValTiming, "timingsSlowdown", 0);
    _defineProperty4(AccValTiming, "enabled", false);
  }
});

// src/pricing/variants/kolmafia.ts
function _classCallCheck9(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties9(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey9(o.key), o);
  }
}
function _createClass9(e, r, t) {
  return r && _defineProperties9(e.prototype, r), t && _defineProperties9(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty5(e, r, t) {
  return (r = _toPropertyKey9(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey9(t) {
  var i = _toPrimitive9(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive9(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var MallPricing, HistoricalPricing;
var init_kolmafia = __esm({
  "src/pricing/variants/kolmafia.ts"() {
    init_apiSupplier();
    init_typings();
    MallPricing = /* @__PURE__ */ (function() {
      function MallPricing2() {
        _classCallCheck9(this, MallPricing2);
        _defineProperty5(this, "sessionKey", "accountval_loadedAllMallItems");
        _defineProperty5(this, "ignoreKey", "_accountval_force_mallprices");
        _defineProperty5(this, "loadedAllMallItems", "not_loaded");
        this.loadLastState();
        if (this.loadedAllMallItems == "not_loaded") {
          this.loadMallPrices();
        }
      }
      return _createClass9(MallPricing2, [{ key: "loadLastState", value: function loadLastState() {
        var prop = provider().retrieveCache(this.sessionKey, "transient");
        if (!prop) {
          return;
        }
        this.loadedAllMallItems = prop;
      } }, { key: "resetStateMaybe", value: function resetStateMaybe() {
        if (provider().retrieveCache(this.ignoreKey, "small_persist") != "true") {
          return;
        }
        if (this.loadedAllMallItems == "not_loaded") {
          this.loadedAllMallItems = "unsure";
        }
      } }, { key: "loadMallPrices", value: function loadMallPrices() {
        if (this.loadedAllMallItems == "loaded") {
          throw new Error(`Mall prices failed to load, check that loathers/mall-check (mallcheck.js) is installed and working, set '${this.ignoreKey}=true' to ignore this error`);
        } else if (this.loadedAllMallItems == "unsure") {
          provider().print(
            `Mall prices didn't resolve properly, please make sure that mallcheck.js from loathers/mall-check is installed, now falling back to manually searching.`,
            "red"
          );
        }
        this.loadedAllMallItems = provider().resolveAllMallPrices(
          this.loadedAllMallItems
        );
        provider().storeCache(
          this.sessionKey,
          this.loadedAllMallItems,
          "transient"
        );
      } }, { key: "isViable", value: function isViable() {
        return true;
      } }, { key: "resolve", value: function resolve(item) {
        var prevAge = provider().historicalAge(item);
        var price = provider().mallPrice(item);
        if (provider().historicalAge(item) < prevAge && // If the new malled price is not valid, then it was an item that can't be found in mall, which explains why the cached mall prices didn't work
        price >= 100 && price < 999999999999) {
          this.resetStateMaybe();
          this.loadMallPrices();
        }
        return new ItemPrice(
          item,
          price,
          PriceType.MALL,
          provider().historicalAge(item)
        );
      } }]);
    })();
    HistoricalPricing = /* @__PURE__ */ (function() {
      function HistoricalPricing2() {
        _classCallCheck9(this, HistoricalPricing2);
      }
      return _createClass9(HistoricalPricing2, [{ key: "isViable", value: function isViable() {
        return true;
      } }, { key: "resolve", value: function resolve(item) {
        return new ItemPrice(
          item,
          provider().historicalPrice(item),
          PriceType.HISTORICAL,
          provider().historicalAge(item)
        );
      } }]);
    })();
  }
});

// src/pricing/variants/flatfile.ts
function _createForOfIteratorHelper6(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray7(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray7(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray7(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray7(r, a) : void 0;
  }
}
function _arrayLikeToArray7(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck10(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties10(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey10(o.key), o);
  }
}
function _createClass10(e, r, t) {
  return r && _defineProperties10(e.prototype, r), t && _defineProperties10(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey10(t) {
  var i = _toPrimitive10(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive10(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var FlatfilePrices;
var init_flatfile = __esm({
  "src/pricing/variants/flatfile.ts"() {
    init_typings();
    FlatfilePrices = /* @__PURE__ */ (function() {
      function FlatfilePrices2(settings) {
        _classCallCheck10(this, FlatfilePrices2);
        this.settings = settings;
      }
      return _createClass10(FlatfilePrices2, [{ key: "resolve", value: function resolve(item) {
        var price = this.prices[item.id];
        if (price == null) {
          return null;
        }
        return new ItemPrice(
          item,
          price.price,
          PriceType.NEW_PRICES,
          Math.round((Date.now() / 1e3 - price.updated) / (60 * 60 * 24)),
          price.volume
        );
      } }, { key: "loadLastState", value: function loadLastState() {
        var buffer = this.loadDataFile();
        if (buffer.length <= 10) {
          return;
        }
        this.prices = [];
        var _iterator = _createForOfIteratorHelper6(
          buffer.split(/[\n\r]+/)
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var spl = _step.value;
            if (spl.startsWith("#")) {
              continue;
            }
            var spl2 = spl.split("	");
            if (spl2.length == 2 && spl2[0] == "Last Updated:") {
              this.lastUpdated = parseInt(spl2[1]);
              continue;
            }
            if (spl2.length < 3) {
              continue;
            }
            var result = this.loadDataItem(spl2);
            if (result == null) {
              continue;
            }
            this.prices[result[0]] = result[1];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } }]);
    })();
  }
});

// src/pricing/variants/irratprices.ts
function _slicedToArray5(r, e) {
  return _arrayWithHoles5(r) || _iterableToArrayLimit5(r, e) || _unsupportedIterableToArray8(r, e) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray8(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray8(r, a) : void 0;
  }
}
function _arrayLikeToArray8(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit5(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles5(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck11(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties11(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey11(o.key), o);
  }
}
function _createClass11(e, r, t) {
  return r && _defineProperties11(e.prototype, r), t && _defineProperties11(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _defineProperty6(e, r, t) {
  return (r = _toPropertyKey11(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey11(t) {
  var i = _toPrimitive11(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive11(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var IrratPrices;
var init_irratprices = __esm({
  "src/pricing/variants/irratprices.ts"() {
    init_apiSupplier();
    init_flatfile();
    IrratPrices = /* @__PURE__ */ (function(_FlatfilePrices) {
      function IrratPrices2() {
        var _this;
        _classCallCheck11(this, IrratPrices2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper(this, IrratPrices2, [].concat(args));
        _defineProperty6(
          _this,
          "ofThePast",
          false
        );
        return _this;
      }
      _inherits(IrratPrices2, _FlatfilePrices);
      return _createClass11(IrratPrices2, [{ key: "doWarning", value: function doWarning() {
        if (this.prices == null || this.ofThePast || this.lastUpdated == null) {
          return false;
        }
        var aWeekIsThisManyMillis = 7 * 24 * 60 * 60 * 1e3;
        if (this.lastUpdated + aWeekIsThisManyMillis < Date.now()) {
          return false;
        }
        return true;
      } }, { key: "isViable", value: function isViable() {
        if (this.prices == null) {
          return false;
        }
        if (this.ofThePast) {
          return true;
        }
        if (this.lastUpdated == null) {
          return false;
        }
        var irratDedAtWeek = 3;
        var aWeekIsThisManyMillis = 7 * 24 * 60 * 60 * 1e3;
        if (this.lastUpdated + irratDedAtWeek * aWeekIsThisManyMillis < Date.now()) {
          return false;
        }
        return true;
      } }, { key: "loadDataFile", value: function loadDataFile() {
        var toFetch = this.settings.dateToFetch;
        if (toFetch == null) {
          return provider().retrieveCache(
            "irrats_item_prices.txt",
            "large_persist"
          );
        }
        var finalDateString;
        var minDate = new Date(2023, 7, 23);
        minDate.setHours(0, 0, 0, 0);
        var absoluteDateRegex = /^\d{1,2}[-/]\d{1,2}[-/]\d{4}$/;
        if (absoluteDateRegex.test(toFetch)) {
          var _toFetch$split$map = toFetch.split(/[-/]/).map(Number), _toFetch$split$map2 = _slicedToArray5(_toFetch$split$map, 3), day = _toFetch$split$map2[0], month = _toFetch$split$map2[1], year = _toFetch$split$map2[2];
          var parsedDate = new Date(year, month - 1, day);
          parsedDate.setHours(0, 0, 0, 0);
          if (parsedDate.getFullYear() !== year || parsedDate.getMonth() !== month - 1 || parsedDate.getDate() !== day) {
            throw new Error(
              `Invalid date provided: ${toFetch} resolved to ${parsedDate.getDate()}-${parsedDate.getMonth() + 1}-${parsedDate.getFullYear()}.`
            );
          }
          if (parsedDate < minDate) {
            throw new Error(`Date ${toFetch} cannot be older than 23-08-2023.`);
          }
          finalDateString = toFetch;
        } else {
          var dMatch = toFetch.match(/(\d+)d(?:ays?)?/);
          var mMatch = toFetch.match(/(\d+)m(?:onths?)?/);
          var yMatch = toFetch.match(/(\d+)y(?:ears?)?/);
          var days = dMatch ? parseInt(dMatch[1], 10) : 0;
          var months = mMatch ? parseInt(mMatch[1], 10) : 0;
          var years = yMatch ? parseInt(yMatch[1], 10) : 0;
          var consumedLength = ((dMatch === null || dMatch === void 0 ? void 0 : dMatch[0].length) ?? 0) + ((mMatch === null || mMatch === void 0 ? void 0 : mMatch[0].length) ?? 0) + ((yMatch === null || yMatch === void 0 ? void 0 : yMatch[0].length) ?? 0);
          if (consumedLength !== toFetch.length || consumedLength === 0) {
            throw new Error(
              `Invalid date format for 'dateToFetch': "${toFetch}". Please use 'DD-MM-YYYY' or a relative format like '1d2m3y'.`
            );
          }
          var targetDate = /* @__PURE__ */ new Date();
          targetDate.setDate(targetDate.getDate() - days);
          targetDate.setMonth(targetDate.getMonth() - months);
          targetDate.setFullYear(targetDate.getFullYear() - years);
          if (targetDate < minDate) {
            targetDate = minDate;
          }
          var finalDay = String(targetDate.getDate()).padStart(2, "0");
          var finalMonth = String(targetDate.getMonth() + 1).padStart(2, "0");
          var finalYear = targetDate.getFullYear();
          finalDateString = `${finalDay}-${finalMonth}-${finalYear}`;
        }
        var responseText = provider().visitUrl(
          `https://kolprices.lib.co.nz/file/${finalDateString}`
        );
        if (!responseText.startsWith("Last Updated:")) {
          if (responseText.length > 200) {
            throw new Error("Received an unexpected response from the server.");
          } else {
            throw new Error(responseText);
          }
        }
        provider().print(
          `Now resolving prices with date: ${finalDateString}`,
          "blue"
        );
        this.ofThePast = true;
        return responseText;
      } }, { key: "loadDataItem", value: function loadDataItem(spl2) {
        var itemId = parseInt(spl2[0]);
        var age = parseInt(spl2[1]);
        var price = parseInt(spl2[2]);
        var volume = spl2[3] ? parseInt(spl2[3]) : -1;
        var lastSoldAt = spl2[4] ? parseInt(spl2[4]) : -1;
        return [
          itemId,
          { price, updated: age, volume, lastSoldAt }
        ];
      } }]);
    })(FlatfilePrices);
  }
});

// src/pricing/variants/pricegun.ts
function _toConsumableArray4(r) {
  return _arrayWithoutHoles4(r) || _iterableToArray4(r) || _unsupportedIterableToArray9(r) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray4(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles4(r) {
  if (Array.isArray(r)) return _arrayLikeToArray9(r);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _createForOfIteratorHelper7(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray9(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray9(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray9(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray9(r, a) : void 0;
  }
}
function _arrayLikeToArray9(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck12(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties12(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey12(o.key), o);
  }
}
function _createClass12(e, r, t) {
  return r && _defineProperties12(e.prototype, r), t && _defineProperties12(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty7(e, r, t) {
  return (r = _toPropertyKey12(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey12(t) {
  var i = _toPrimitive12(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive12(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var PricegunResolver;
var init_pricegun = __esm({
  "src/pricing/variants/pricegun.ts"() {
    init_apiSupplier();
    init_typings();
    init_supplierTypings();
    PricegunResolver = /* @__PURE__ */ (function() {
      function PricegunResolver2(settings) {
        _classCallCheck12(this, PricegunResolver2);
        _defineProperty7(this, "items", /* @__PURE__ */ new Map());
        this.settings = settings;
      }
      return _createClass12(PricegunResolver2, [{ key: "loadLastState", value: function loadLastState() {
        this.items.clear();
        var buffer = provider().retrieveCache(
          "pricegun_prices.txt",
          "large_persist"
        );
        if (!buffer) {
          return;
        }
        var cutoff = Math.floor(Date.now() / 1e3) - 24 * 60 * 60;
        try {
          var _iterator = _createForOfIteratorHelper7(
            JSON.parse(buffer)
          ), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _item$value;
              var item = _step.value;
              var value = typeof item.value === "number" ? item.value : parseFloat(((_item$value = item.value) === null || _item$value === void 0 ? void 0 : _item$value.__decimal__) ?? "0");
              if (item.retrieved >= cutoff) {
                this.items.set(item.itemId, _objectSpread(_objectSpread({}, item), {}, { value }));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } catch (_unused) {
        }
      } }, { key: "stop", value: function stop() {
        var cutoff = Math.floor(Date.now() / 1e3) - 23 * 60 * 60;
        provider().storeCache(
          "pricegun_prices.txt",
          JSON.stringify(
            _toConsumableArray4(this.items.values()).filter((i) => i.retrieved > cutoff)
          ),
          "large_persist"
        );
      } }, { key: "parseValue", value: function parseValue(item) {
        var _item$value2;
        return typeof item.value === "number" ? item.value : parseFloat(((_item$value2 = item.value) === null || _item$value2 === void 0 ? void 0 : _item$value2.__decimal__) ?? "0");
      } }, { key: "loadItemFromApi", value: function loadItemFromApi(item) {
        this.items.set(item.itemId, {
          itemId: item.itemId,
          value: this.parseValue(item),
          volume: item.volume,
          dateTime: item.dateTime ?? 0,
          retrieved: Math.floor(Date.now() / 1e3)
        });
      } }, { key: "bulkResolve", value: function bulkResolve(items2) {
        var missing = items2.filter((i) => !this.items.has(i.id));
        if (missing.length) {
          this.fetch(missing);
        }
        var now = Math.floor(Date.now() / 1e3);
        return items2.map((i) => {
          var price = this.items.get(i.id);
          if (!price || price.volume < 0) {
            return null;
          }
          return new ItemPrice(
            i,
            Math.round(price.value),
            PriceType.NEW_PRICES,
            now - price.dateTime,
            price.volume
          );
        });
      } }, { key: "fetch", value: function fetch(items2) {
        var MAX_AMOUNT = this.settings.pricegunBatchSize;
        var now = Math.floor(Date.now() / 1e3);
        for (var start = 0; start < items2.length; start += MAX_AMOUNT) {
          var batch = items2.slice(
            start,
            Math.min(start + MAX_AMOUNT, items2.length)
          );
          provider().print(
            `Pricegun progress: ${start + batch.length} / ${items2.length}`
          );
          var ignoredItem = batch.length + 3 < MAX_AMOUNT && !batch.some((b) => b.id === 1);
          if (ignoredItem) {
            batch.push(KoLItem.get(1));
          }
          try {
            var url = `https://pricegun.loathers.net/api/${batch.map((i2) => i2.id).join(",")}`;
            var response = JSON.parse(provider().visitUrl(url));
            var parsed = batch.length === 1 ? [response] : response;
            var _iterator22 = _createForOfIteratorHelper7(
              parsed
            ), _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                var item = _step22.value;
                if (ignoredItem && item.itemId === 1) {
                  continue;
                }
                this.loadItemFromApi(item);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
            var _iterator3 = _createForOfIteratorHelper7(
              batch
            ), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var i = _step3.value;
                var id = i.id;
                if (ignoredItem && id === 1 || this.items.has(id)) {
                  continue;
                }
                this.items.set(id, {
                  itemId: id,
                  value: 0,
                  volume: -1,
                  dateTime: 0,
                  retrieved: now
                });
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } catch (_unused2) {
            var _iterator4 = _createForOfIteratorHelper7(
              batch
            ), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                var _i = _step4.value;
                var _id = _i.id;
                this.items.set(_id, {
                  itemId: _id,
                  value: 0,
                  volume: -1,
                  dateTime: 0,
                  retrieved: now
                });
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
      } }, { key: "resolve", value: function resolve(item) {
        return this.bulkResolve([item])[1];
      } }, { key: "isViable", value: function isViable() {
        return true;
      } }]);
    })();
  }
});

// src/pricing/priceResolver.ts
function _createForOfIteratorHelper8(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray10(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray10(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray10(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray10(r, a) : void 0;
  }
}
function _arrayLikeToArray10(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck13(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties13(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey13(o.key), o);
  }
}
function _createClass13(e, r, t) {
  return r && _defineProperties13(e.prototype, r), t && _defineProperties13(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty8(e, r, t) {
  return (r = _toPropertyKey13(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey13(t) {
  var i = _toPrimitive13(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive13(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var PriceResolver;
var init_priceResolver = __esm({
  "src/pricing/priceResolver.ts"() {
    init_apiSupplier();
    init_timings();
    init_typings();
    init_kolmafia();
    init_irratprices();
    init_pricegun();
    init_supplierTypings();
    PriceResolver = /* @__PURE__ */ (function() {
      function PriceResolver2(settings) {
        _classCallCheck13(this, PriceResolver2);
        _defineProperty8(this, "specialCase", /* @__PURE__ */ new Map());
        _defineProperty8(this, "resolvers", []);
        this.settings = settings;
        var specialResolver;
        if (settings.pricegun) {
          specialResolver = new PricegunResolver(settings);
        } else if (settings.mallPrice) {
          specialResolver = new MallPricing();
        } else {
          specialResolver = new IrratPrices(settings);
        }
        if (specialResolver && specialResolver.loadLastState) {
          specialResolver.loadLastState();
        }
        this.resolvers.push(specialResolver);
        this.resolvers.push(new HistoricalPricing());
        this.fillSpecialCase();
      }
      return _createClass13(PriceResolver2, [{ key: "addSpecialCase", value: function addSpecialCase(item, meat) {
        this.specialCase.set(item, meat);
      } }, { key: "fillSpecialCase", value: function fillSpecialCase() {
        this.specialCase.set(KoLItem.get("Meat Paste"), 10);
        this.specialCase.set(KoLItem.get("Meat Stack"), 100);
        this.specialCase.set(KoLItem.get("Dense meat stack"), 1e3);
      } }, { key: "doWarning", value: function doWarning() {
        if (this.resolvers[0] instanceof IrratPrices) {
          return this.resolvers[0].doWarning();
        }
        return false;
      } }, { key: "stop", value: function stop() {
        this.resolvers.forEach((r) => r.stop && r.stop());
      } }, { key: "bulkLoad", value: function bulkLoad(items2) {
        if (!this.resolvers[0].bulkResolve) {
          return;
        }
        var toCheck = new Set(items2);
        var checked = /* @__PURE__ */ new Set();
        var _iterator = _createForOfIteratorHelper8(
          toCheck
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            if (checked.has(item)) {
              continue;
            }
            var folds = provider().getFoldables(item, "fold");
            if (!folds.length) {
              continue;
            }
            var _iterator22 = _createForOfIteratorHelper8(
              folds
            ), _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                var i = _step22.value;
                checked.add(i);
                toCheck.add(i);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.resolvers[0].bulkResolve(Array.from(toCheck));
      } }, { key: "itemPrice", value: function itemPrice(item) {
        var ignoreFold = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var forcePricing = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        var doSuperFast = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        var doEstimates = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
        var timingsKey = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "";
        if (this.settings.pricegun) {
          ignoreFold = true;
        }
        if (!ignoreFold) {
          AccValTiming.start(`${timingsKey}Check Foldable`, true);
          try {
            var foldables = provider().getFoldables(item, "fold");
            if (foldables.length) {
              AccValTiming.start(`${timingsKey}Deeper Foldable Check`, true);
              try {
                var foldPrices = foldables.map(
                  (f2) => this.itemPrice(f2, true, forcePricing, doSuperFast, doEstimates)
                ).filter((p) => p != null);
                foldPrices.sort(
                  (f1, f2) => f1.item.tradeable != f2.item.tradeable ? f1.item.tradeable ? -1 : 1 : f1.price - f2.price
                );
                var compare = foldPrices.find((f2) => f2.item == item);
                var _iterator3 = _createForOfIteratorHelper8(
                  foldPrices
                ), _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    var f = _step3.value;
                    if (f.daysOutdated > compare.daysOutdated * 3) {
                      continue;
                    }
                    return f;
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                return foldPrices[0];
              } finally {
                AccValTiming.stop(`${timingsKey}Deeper Foldable Check`);
              }
            }
          } finally {
            AccValTiming.stop(`${timingsKey}Check Foldable`);
          }
        }
        AccValTiming.start(`${timingsKey}Check Pricing Misc`, true);
        try {
          if (this.specialCase.has(item)) {
            return new ItemPrice(
              item,
              this.specialCase.get(item),
              PriceType.MALL,
              0
            );
          }
          if (!item.tradeable) {
            return new ItemPrice(
              item,
              provider().autosellPrice(item),
              PriceType.AUTOSELL,
              0
            );
          }
        } finally {
          AccValTiming.stop(`${timingsKey}Check Pricing Misc`);
        }
        AccValTiming.start(`${timingsKey}Final Pricing Check`, true);
        try {
          var _iterator4 = _createForOfIteratorHelper8(
            this.resolvers
          ), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              var resolver = _step4.value;
              var price = resolver.resolve(item);
              if (price == null && this.settings.dateToFetch == null) {
                continue;
              }
              return price;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        } finally {
          AccValTiming.stop(`${timingsKey}Final Pricing Check`);
        }
        throw new Error(`Failed to resolve price for ${item}`);
      } }]);
    })();
  }
});

// src/core/logic.ts
function _slicedToArray6(r, e) {
  return _arrayWithHoles6(r) || _iterableToArrayLimit6(r, e) || _unsupportedIterableToArray11(r, e) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit6(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles6(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray5(r) {
  return _arrayWithoutHoles5(r) || _iterableToArray5(r) || _unsupportedIterableToArray11(r) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray5(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles5(r) {
  if (Array.isArray(r)) return _arrayLikeToArray11(r);
}
function _createForOfIteratorHelper9(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray11(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray11(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray11(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray11(r, a) : void 0;
  }
}
function _arrayLikeToArray11(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck14(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties14(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey14(o.key), o);
  }
}
function _createClass14(e, r, t) {
  return r && _defineProperties14(e.prototype, r), t && _defineProperties14(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty9(e, r, t) {
  return (r = _toPropertyKey14(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey14(t) {
  var i = _toPrimitive14(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive14(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var AccountValLogic;
var init_logic = __esm({
  "src/core/logic.ts"() {
    init_apiSupplier();
    init_supplierTypings();
    init_items();
    init_pages();
    init_priceResolver();
    init_colors();
    init_timings();
    init_typings();
    init_utils();
    AccountValLogic = /* @__PURE__ */ (function() {
      function AccountValLogic2(settings) {
        _classCallCheck14(this, AccountValLogic2);
        _defineProperty9(this, "ownedItems", /* @__PURE__ */ new Map());
        _defineProperty9(this, "prices", []);
        _defineProperty9(this, "categoryOrder", []);
        this.settings = settings;
        this.priceResolver = new PriceResolver(this.settings);
        this.resolver = new ItemResolver2(this.priceResolver);
      }
      return _createClass14(AccountValLogic2, [{ key: "addItem", value: function addItem(item) {
        var count = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
      } }, { key: "loadItems", value: function loadItems() {
        AccValTiming.start("Load JS Filter");
        this.loadJsFilter();
        AccValTiming.stop("Load JS Filter");
        if (this.settings.playerId > 0) {
          AccValTiming.start("Load Page Items");
          this.loadPageItems();
          AccValTiming.stop("Load Page Items");
          return;
        }
        this.loadSelfItems();
      } }, { key: "loadJsFilter", value: function loadJsFilter() {
        if (this.settings.javascriptFilter == "") {
          return;
        }
        provider().print(
          "JS Filter has been set to: " + this.settings.javascriptFilter,
          AccountValColors.minorNote
        );
        try {
          this.jsFilter = provider().evalJsFilter(this.settings.javascriptFilter);
        } catch (e) {
          provider().print(
            "Invalid jsfilter provided! Error as follows:",
            AccountValColors.attentionGrabbingWarning
          );
          provider().print("");
          throw e;
        }
      } }, { key: "loadPageItems", value: function loadPageItems() {
        var pager = new PageResolver();
        if (this.settings.fetchShop) {
          var items2 = pager.getStore(this.settings.playerId);
          items2.forEach((i) => {
            var item2 = new ValItem(i.item);
            if (this.settings.shopWorth) {
              item2.bound = ItemStatus.SHOP_WORTH;
              item2.shopWorth = i.price;
            }
            this.addItem(item2, i.amount);
          });
        }
        if (this.settings.fetchDisplaycase) {
          var _items = pager.getDisplaycase(this.settings.playerId);
          _items.forEach((v, k) => {
            if (!this.categoryOrder.includes(k.shelf)) {
              this.categoryOrder.push(k.shelf);
            }
            this.addItem(new ValItem(k.item).withCategory(k.shelf), v);
          });
        }
        var resolvedFamiliars = false;
        if (this.settings.fetchFamiliars != false) {
          var familiars = pager.getFamiliars(this.settings.playerId);
          resolvedFamiliars = familiars.length > 0;
          this.resolver.resolveFamiliars(familiars, this.ownedItems);
        }
        if (this.settings.fetchSnapshot == true) {
          var snapshot = pager.getSnapshot(
            provider().getPlayerName(this.settings.playerId)
          );
          var _familiars = [];
          var skills = [];
          var _items2 = /* @__PURE__ */ new Map();
          var _iterator = _createForOfIteratorHelper9(
            snapshot
          ), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _item = _step.value;
              if ("hatchling" in _item) {
                _familiars.push(_item);
              } else if ("name" in _item && !("tradeable" in _item)) {
                skills.push(_item);
              } else if ("tradeable" in _item) {
                _items2.set(_item, 1);
              } else {
                _items2.set(
                  _item[0],
                  _item[1]
                );
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (!resolvedFamiliars && this.settings.fetchFamiliars) {
            this.resolver.resolveFamiliars(_familiars, this.ownedItems);
          }
          if (this.settings.doBound && this.settings.fetchingNonItems) {
            var _iterator22 = _createForOfIteratorHelper9(
              this.resolver.accValStuff.filter(
                (s2) => s2.itemType == ItemType.SKILL && skills.includes(s2.skill)
              )
            ), _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                var item = _step22.value;
                this.addItem(
                  new ValItem(
                    item.actualItem,
                    item.actualItem,
                    item.actualItem.name,
                    item.actualItem.plural,
                    ItemStatus.BOUND
                  )
                );
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
          var owned = new Map(
            _toConsumableArray5(this.ownedItems).map((_ref) => {
              var _ref2 = _slicedToArray6(_ref, 2), k = _ref2[0], v = _ref2[1];
              return [k.tradeableItem, [k, v]];
            })
          );
          _items2.forEach((v, k) => {
            var boundItem = this.resolver.accValStuff.find(
              (i) => i.actualItem == k
            );
            if (boundItem == null) {
              v -= owned.has(k) ? owned.get(k)[1] : 0;
              if (v <= 0) {
                return;
              }
              this.addItem(new ValItem(k), v);
              return;
            } else if (owned.has(k) && owned.get(k)[0].isBound()) {
              return;
            } else if (boundItem.untradeableItem != null && owned.has(boundItem.untradeableItem)) {
              return;
            }
            var actualItem = k;
            var name = k.name;
            var plural = k.plural;
            if (boundItem.itemType == ItemType.UNTRADEABLE_ITEM) {
              var untradeable = boundItem.untradeableItem;
              v -= owned.has(k) ? owned.get(k)[1] : 0;
              if (v <= 0) {
                return;
              }
              actualItem = untradeable;
              name = untradeable.name;
              plural = untradeable.plural;
            }
            this.addItem(
              new ValItem(
                actualItem,
                k,
                name,
                plural,
                ItemStatus.BOUND,
                "av-snapshot"
              ),
              v
            );
          });
        }
        this.resolveNoTrades();
      } }, { key: "loadSelfItems", value: function loadSelfItems() {
        AccValTiming.start("Resolve Familiar Items");
        var famItems = this.resolver.resolveFamiliarItems();
        AccValTiming.stop("Resolve Familiar Items");
        AccValTiming.start("Resolve Session");
        var sessionItems = provider().mySessionItems();
        AccValTiming.stop("Resolve Session");
        var mega = /* @__PURE__ */ new Map();
        var megaExtra = /* @__PURE__ */ new Map();
        var add = (stuff) => {
          var _iterator3 = _createForOfIteratorHelper9(
            stuff
          ), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var _step3$value = _slicedToArray6(_step3.value, 2), item2 = _step3$value[0], amount2 = _step3$value[1];
              mega.set(item2, (mega.get(item2) ?? 0) + amount2);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        };
        if (this.settings.fetchInventory) {
          AccValTiming.start("Resolve and Add Inventory");
          add(provider().getInventory());
          AccValTiming.stop("Resolve and Add Inventory");
        }
        if (this.settings.fetchCloset) {
          AccValTiming.start("Resolve and Add Closet");
          add(provider().getCloset());
          AccValTiming.stop("Resolve and Add Closet");
        }
        if (this.settings.fetchStorage) {
          AccValTiming.start("Resolve and Add Storage");
          add(provider().getStorage());
          AccValTiming.stop("Resolve and Add Storage");
        }
        if (this.settings.fetchClan) {
          AccValTiming.start("Resolve and Add Clan Stash");
          add(provider().getStash());
          AccValTiming.stop("Resolve and Add Clan Stash");
        }
        if (this.settings.fetchDisplaycase) {
          if (this.settings.doCategories) {
            AccValTiming.start("Resolve and Add Display Case with Shelves");
            var pager = new PageResolver();
            var items2 = pager.getDisplaycase(
              AccountValUtils.toInt(provider().myId())
            );
            items2.forEach((v, k) => {
              if (!this.categoryOrder.includes(k.shelf)) {
                this.categoryOrder.push(k.shelf);
              }
              megaExtra.set(k.item, { shelf: k.shelf, count: v });
            });
            AccValTiming.stop("Resolve and Add Display Case with Shelves");
          } else {
            AccValTiming.start("Resolve and Add Display Case");
            add(provider().getDisplay());
            AccValTiming.stop("Resolve and Add Display Case");
          }
        }
        AccValTiming.start("Resolve Shop");
        var shop = this.settings.fetchShop ? provider().getShop() : null;
        AccValTiming.stop("Resolve Shop");
        if (this.settings.fetchShop && !this.settings.shopWorth) {
          AccValTiming.start("Add Shop");
          add(shop);
          AccValTiming.stop("Add Shop");
        }
        AccValTiming.start("Process All Items");
        var _iterator4 = _createForOfIteratorHelper9(
          KoLItem.all()
        ), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var _item2 = _step4.value;
            var amount = mega.get(_item2) ?? 0;
            if (this.settings.fetchSession) {
              amount += sessionItems.get(_item2) ?? 0;
            }
            if (this.settings.fetchInventory) {
              amount += provider().equippedAmount(_item2) + (famItems.get(_item2) ?? 0);
            }
            var category = void 0;
            if (megaExtra.has(_item2)) {
              amount += megaExtra.get(_item2).count;
              category = megaExtra.get(_item2).shelf;
            }
            if (this.settings.shopWorth && (shop.get(_item2) ?? 0) > 0) {
              var _i = new ValItem(_item2).withCategory(category);
              _i.bound = ItemStatus.SHOP_WORTH;
              _i.shopWorth = provider().shopPrice(_item2);
              this.ownedItems.set(_i, shop.get(_item2));
              continue;
            }
            if (amount == 0) {
              continue;
            }
            this.ownedItems.set(new ValItem(_item2).withCategory(category), amount);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        AccValTiming.stop("Process All Items");
        if (this.settings.fetchFamiliars != false) {
          AccValTiming.start("Resolve Familiars");
          this.resolver.resolveFamiliars(
            KoLFamiliar.all().filter((f) => provider().haveFamiliar(f)),
            this.ownedItems
          );
          AccValTiming.stop("Resolve Familiars");
        }
        if (this.settings.fetchingEverywhereish && this.settings.fetchingNonItems) {
          AccValTiming.start("Resolve Workshed");
          if (this.settings.doBound || this.settings.doTradeables) {
            var i = provider().getWorkshed();
            if (i != null && i != KoLItem.none && (i.tradeable ? this.settings.doTradeables : this.settings.doBound)) {
              this.addItem(new ValItem(i, i, i.name, i.plural, ItemStatus.IN_USE));
            }
          }
          AccValTiming.stop("Resolve Workshed");
        }
        if (this.settings.doBound && this.settings.fetchingNonItems) {
          AccValTiming.start("Resolve Urled Items");
          var _iterator5 = _createForOfIteratorHelper9(
            this.resolver.getUrledItems()
          ), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var _step5$value = _slicedToArray6(_step5.value, 2), item = _step5$value[0], status = _step5$value[1];
              if (item.tradeable && (status == ItemStatus.FAMILIAR || status != ItemStatus.BOUND) ? !this.settings.doTradeables : !this.settings.doBound) {
                continue;
              }
              this.addItem(new ValItem(item, item, item.name, item.plural, status));
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          AccValTiming.stop("Resolve Urled Items");
        }
        AccValTiming.start("Resolve No-Trades");
        this.resolveNoTrades();
        AccValTiming.stop("Resolve No-Trades");
      } }, { key: "resolveNoTrades", value: function resolveNoTrades() {
        var copy = {};
        this.ownedItems.forEach((v, k) => {
          copy[k.tradeableItem.name] = [k, v];
        });
        if (this.settings.doBound || this.settings.doNonTradeables) {
          this.resolver.resolveBoundToTradeables(
            copy,
            this.ownedItems,
            [
              this.settings.doBound ? ItemType.UNTRADEABLE_ITEM : null,
              this.settings.doNonTradeables ? ItemType.CURRENCY : null
            ]
          );
        }
        var skipJsFilter = this.settings.doesJSFilterUsePriceOrSales();
        var _iterator6 = _createForOfIteratorHelper9(
          this.ownedItems.keys()
        ), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var item = _step6.value;
            if (!skipJsFilter && this.jsFilter != null && !this.jsFilter(item.tradeableItem, this.ownedItems.get(item))) {
              this.ownedItems.delete(item);
              continue;
            }
            if (!item.isBound() && (!item.tradeableItem.tradeable || item.tradeableItem.gift) && provider().autosellPrice(item.tradeableItem) == 0) {
              this.ownedItems.delete(item);
              continue;
            }
            if (this.ownedItems.get(item) < this.settings.minimumAmount) {
              this.ownedItems.delete(item);
              continue;
            }
            if (!this.settings.doBound && item.isBound() && item.bound != ItemStatus.FAMILIAR) {
              this.ownedItems.delete(item);
              continue;
            }
            if (item.bound == ItemStatus.FAMILIAR && (this.settings.fetchFamiliars == false || this.settings.fetchFamiliars == null && !this.settings.doBound)) {
              this.ownedItems.delete(item);
              continue;
            }
            if (!this.settings.doTradeables && item.tradeableItem.tradeable && item.isTradeable()) {
              this.ownedItems.delete(item);
              continue;
            }
            if (!this.settings.doNonTradeables && !item.tradeableItem.tradeable && !item.isBound()) {
              this.ownedItems.delete(item);
              continue;
            }
            if (item.isBound() && this.ownedItems.get(item) > 1) {
              this.ownedItems.set(item, 1);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      } }, { key: "doPricing", value: function doPricing() {
        var lastPrinted = 0;
        var settings = this.settings;
        var prices = this.prices;
        var ownedItems = this.ownedItems;
        var addPrice = function addPrice2(item2, price2) {
          if (settings.minimumMeat > 0 && price2.price * item2.worthMultiplier < settings.minimumMeat) {
            ownedItems.delete(item2);
            return;
          }
          if (settings.sales > 0 && price2.volume < settings.sales) {
            ownedItems.delete(item2);
            return;
          }
          if (!settings.isShown(item2, price2.price)) {
            ownedItems.delete(item2);
            return;
          }
          if (settings.presets.some(
            (p) => !p.negated && p.preset.name().includes("autosell")
          )) {
            price2.price = provider().autosellPrice(item2.actualItem);
          }
          prices.push([item2, price2]);
        };
        AccValTiming.start("Add Logic Prices");
        var toCheck = [];
        this.priceResolver.bulkLoad(
          _toConsumableArray5(this.ownedItems.keys()).map((i2) => i2.tradeableItem)
        );
        var _iterator7 = _createForOfIteratorHelper9(
          this.ownedItems.keys()
        ), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            var item = _step7.value;
            AccValTiming.start("Price Item", true);
            var _price = this.priceResolver.itemPrice(
              item.tradeableItem,
              false,
              this.settings.doSuperFast ? PriceType.HISTORICAL : this.settings.useLastSold ? PriceType.MALL_SALES : null,
              this.settings.doSuperFast,
              true,
              "Logic Item Prices - "
            );
            AccValTiming.stop("Price Item");
            if (_price == null) {
              continue;
            } else if (_price.price > 0 || _price.accuracy == PriceType.NEW_PRICES) {
              AccValTiming.start("Add Item Price", true);
              addPrice(item, _price);
              AccValTiming.stop("Add Item Price");
            } else {
              toCheck.push([item, _price]);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        AccValTiming.stop("Add Logic Prices");
        var checked = -1;
        if (toCheck.length > 200) {
          provider().print(
            "Think this will take too long? Use the parameter 'fast', it's less accurate!",
            AccountValColors.helpfulStateInfo
          );
        }
        if (toCheck.length > 0) {
          AccValTiming.start("Check Remaining Logic Item Prices");
          var _iterator8 = _createForOfIteratorHelper9(
            toCheck
          ), _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
              var check = _step8.value;
              var i = check[0];
              if (++checked % 20 == 0 && lastPrinted + 1e3 < Date.now()) {
                lastPrinted = Date.now();
                provider().print(
                  "Checking value of " + i.name + " (" + checked + " / " + toCheck.length + ")",
                  AccountValColors.helpfulStateInfo
                );
              }
              var price = this.priceResolver.itemPrice(
                i.tradeableItem,
                false,
                check[1].accuracy,
                void 0,
                void 0,
                "Remaining Logic Item Prices - "
              );
              if (price == null) {
                continue;
              }
              addPrice(i, price);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          AccValTiming.stop("Check Remaining Logic Item Prices");
        }
        AccValTiming.start("Sort Price List");
        this.doSort();
        AccValTiming.stop("Sort Price List");
      } }, { key: "doSort", value: function doSort() {
        if (!this.settings.sortBy.fallback) {
          var _iterator9 = _createForOfIteratorHelper9(
            this.prices
          ), _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
              var _step9$value = _slicedToArray6(_step9.value, 2), v = _step9$value[0], p = _step9$value[1];
              this.settings.sortBy.assignValue(
                v,
                p,
                this.ownedItems,
                this.settings.maxNaturalPrice
              );
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
        var sorter = (v1, v2) => this.settings.sortBy.fallback ? this.settings.sortBy.fallback(v1[0], v2[0]) : v1[0].sortValue - v2[0].sortValue;
        if (this.settings.doCategories && this.categoryOrder != null) {
          this.prices.sort((v1, v2) => {
            var c1 = v1[0].category ?? "";
            var c2 = v2[0].category ?? "";
            if (c1 == c2) {
              return sorter(v1, v2);
            }
            var i1 = this.categoryOrder.indexOf(c1);
            var i2 = this.categoryOrder.indexOf(c2);
            if (i1 == i2) {
              return sorter(v1, v2);
            }
            return i1 - i2;
          });
        } else {
          this.prices.sort(sorter);
        }
        if (this.settings.reverseSort) {
          this.prices.reverse();
        }
      } }]);
    })();
  }
});

// src/settings/presets.ts
function getPresets() {
  if (presets != null) {
    return presets;
  }
  presets = [];
  presets.push({
    name() {
      return ["consumables", "consumable", "diet", "consume", "consumeable"];
    },
    isProcessed: function isProcessed(item, worth) {
      return ["food", "booze", "spleen item"].includes(
        provider().itemType(item)
      );
    },
    desc: function desc() {
      return "Show only consumables";
    }
  });
  var _loop = function _loop2() {
    var type = _arr[_i];
    presets.push({
      name() {
        return [type];
      },
      isProcessed: function isProcessed(item) {
        return provider().itemType(item).replace(" item", "") == type;
      },
      desc: function desc() {
        return `Show only ${type}`;
      }
    });
  };
  for (var _i = 0, _arr = ["food", "booze", "spleen"]; _i < _arr.length; _i++) {
    _loop();
  }
  presets.push({
    name() {
      return ["beverage"];
    },
    isProcessed: function isProcessed(item, worth) {
      return item.notes.includes("BEVERAGE");
    },
    desc: function desc() {
      return "Show only beverage";
    }
  });
  presets.push({
    name() {
      return ["hungry"];
    },
    isProcessed: function isProcessed(item, worth) {
      if (provider().myFullness() + item.fullness >= provider().fullnessLimit() || item.levelreq < provider().myLevel()) {
        return false;
      }
      return provider().itemType(item) == "food";
    },
    desc: function desc() {
      return "Show only food you can fit in stomach";
    }
  });
  presets.push({
    name() {
      return ["thirsty"];
    },
    isProcessed: function isProcessed(item, worth) {
      if (provider().myInebriety() + item.inebriety >= provider().inebrietyLimit() || item.levelreq < provider().myLevel()) {
        return false;
      }
      return provider().itemType(item) == "booze";
    },
    desc: function desc() {
      return "Show only booze you can fit in liver";
    }
  });
  presets.push({
    name() {
      return ["munchy"];
    },
    isProcessed: function isProcessed(item, worth) {
      if (provider().mySpleenUse() + item.spleen >= provider().spleenLimit() || item.levelreq < provider().myLevel()) {
        return false;
      }
      return provider().itemType(item) == "spleen item";
    },
    desc: function desc() {
      return "Show only spleen items you can fit in spleen";
    }
  });
  presets.push({
    name() {
      return ["equip", "equips", "equipment", "gear"];
    },
    isProcessed: function isProcessed(item) {
      return provider().toSlot(item) != KoLSlot.none;
    },
    desc: function desc() {
      return "Show only items that can be equipped";
    }
  });
  presets.push({
    name() {
      return ["pvpable", "pvp", "stealable"];
    },
    isShown(item, worth) {
      return item.isTradeable() && item.actualItem.discardable;
    },
    desc: function desc() {
      return "Show only items that can be stolen";
    }
  });
  presets.push({
    name() {
      return ["hatchling", "hatchlings", "larva"];
    },
    isProcessed: function isProcessed(item, worth) {
      return provider().itemType(item) == "familiar larva";
    },
    desc: function desc() {
      return "Show only items that can turn into familiars";
    }
  });
  presets.push({
    name() {
      return ["autosell", "junk"];
    },
    isShown(item, worth) {
      if (item.isBound() || !item.actualItem.discardable) {
        return false;
      }
      return provider().autosellPrice(item.actualItem) * 2 >= worth;
    },
    desc: function desc() {
      return "Show only items that sell at mall min";
    }
  });
  var autoselluseItems = [
    "Bag of park garbage",
    "ancient vinyl coin purse",
    "Black pension check",
    "Briefcase",
    "Collection of tiny spooky objects",
    "CSA discount card",
    "Duct tape wallet",
    "Fat Wallet",
    "Gathered Meat-Clip",
    "LOLmec statuette",
    "Orcish meat locker",
    "Old coin purse",
    "Old leather wallet",
    "Penultimate Fantasy chest",
    "Roll of meat",
    "Shiny stones",
    "SMOOCH bottlecap",
    "Solid gold jewel",
    "Stolen meatpouch",
    "Warm Subject gift certificate",
    "Envelope full of Meat",
    "chest of the Bonerdagon",
    "cursed piece of thirteen",
    "Discount Telescope Warehouse gift certificate",
    "dungeon dragon chest",
    "fat stacks of cash",
    "flytrap pellet",
    "Gratitude chocolate (Meat-filled)",
    "handful of tips",
    "kobold treasure hoard",
    "loose Meats",
    "meat globe",
    "Mr. Big's Wallet",
    "pixel coin",
    "pixellated moneybag",
    "smut orc keepsake box",
    "Stock Certificate"
  ].map((s2) => KoLItem.get(s2));
  presets.push({
    name: function name() {
      return ["autouse"];
    },
    isProcessed: function isProcessed(item) {
      return autoselluseItems.includes(item);
    },
    desc: function desc() {
      return "Show only (some) usable items that could make you some meat";
    }
  });
  presets.forEach((preset) => {
    if (preset.isProcessed == null && preset.isShown == null) {
      throw new Error(
        `The preset ${preset.name()[0]} must have one of isProcessed or isShown defined!`
      );
    }
    if (preset.isProcessed != null && preset.isShown != null) {
      throw new Error(
        `The preset ${preset.name()[0]} can only have one of isProcessed and isShown defined!`
      );
    }
  });
  return presets;
}
var presets;
var init_presets = __esm({
  "src/settings/presets.ts"() {
    init_apiSupplier();
    init_supplierTypings();
    presets = null;
  }
});

// src/settings/grimoireArgs.ts
function _toConsumableArray6(r) {
  return _arrayWithoutHoles6(r) || _iterableToArray6(r) || _unsupportedIterableToArray12(r) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray6(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles6(r) {
  if (Array.isArray(r)) return _arrayLikeToArray12(r);
}
function _createForOfIteratorHelper10(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray12(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray12(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray12(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray12(r, a) : void 0;
  }
}
function _arrayLikeToArray12(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty10(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty10(e, r, t) {
  return (r = _toPropertyKey15(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _classCallCheck15(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties15(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey15(o.key), o);
  }
}
function _createClass15(e, r, t) {
  return r && _defineProperties15(e.prototype, r), t && _defineProperties15(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey15(t) {
  var i = _toPrimitive15(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive15(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
function parseAndValidate(arg, source, value) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value);
  } catch (_unused) {
    parsed_value = void 0;
  }
  if (parsed_value === void 0) {
    throw new Error(`${source} expected ${arg.valueHelpName} but could not parse ${value}`);
  }
  if (parsed_value instanceof ParseError) {
    throw new Error(`${source} ${parsed_value.message}`);
  }
  return parsed_value;
}
function _loadDefaultValues(spec) {
  var result = {};
  for (var _k in spec) {
    var argSpec = spec[_k];
    if ("args" in argSpec) {
      result[_k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec) {
        result[_k] = argSpec.default;
      } else {
        result[_k] = void 0;
      }
    }
  }
  return result;
}
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var _k2 in spec) {
    var argSpec = spec[_k2];
    if ("args" in argSpec) {
      groups.push([argSpec, _k2]);
    } else {
      var _value = setTo(argSpec, _k2);
      if (_value === void 0) {
        continue;
      }
      result[_k2] = _value;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(
      group_and_key[0].args,
      result[group_and_key[1]],
      setTo
    );
  }
}
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var _k3 in spec) {
    var argSpec = spec[_k3];
    if ("args" in argSpec) {
      groups.push([argSpec, _k3]);
    } else {
      process(argSpec, _k3);
    }
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 || onGroup(group_and_key[0], group_and_key[1]);
    _traverse(group_and_key[0].args, process, onGroup);
  }
}
var Args, ParseError, specSymbol, scriptSymbol, scriptHelpSymbol, optionsSymbol, WrappedArgMetadata, CommandParser;
var init_grimoireArgs = __esm({
  "src/settings/grimoireArgs.ts"() {
    init_apiSupplier();
    Args = /* @__PURE__ */ (function() {
      function Args2() {
        _classCallCheck15(this, Args2);
      }
      return _createClass15(Args2, null, [{
        key: "custom",
        value: function custom(spec, parser, valueHelpName) {
          var _spec$options, _spec$options2;
          var raw_options = (_spec$options = spec.options) === null || _spec$options === void 0 ? void 0 : _spec$options.map((option) => option[0]);
          if ("default" in spec && raw_options) {
            if (!raw_options.includes(spec.default)) {
              throw new Error(`Invalid default value ${spec.default}`);
            }
          }
          return _objectSpread2(_objectSpread2(
            {},
            spec
          ), {}, {
            valueHelpName,
            parser: (function(_parser) {
              function parser2(_x) {
                return _parser.apply(this, arguments);
              }
              parser2.toString = function() {
                return _parser.toString();
              };
              return parser2;
            })((value) => {
              var parsed_value = parser(value);
              if (parsed_value === void 0 || parsed_value instanceof ParseError) {
                return parsed_value;
              }
              if (raw_options) {
                if (!raw_options.includes(parsed_value)) {
                  return new ParseError(
                    `received ${value} which was not in the allowed options`
                  );
                }
              }
              return parsed_value;
            }),
            options: (_spec$options2 = spec.options) === null || _spec$options2 === void 0 ? void 0 : _spec$options2.map((a) => [`${a[0]}`, a[1]])
          });
        }
        /**
         * Create an array argument for a given type.
         * @param spec Specification for this argument.
         * @param argFromSpec A function to create a non-array version of this arg.
         * @returns An argument.
         */
      }, {
        key: "arrayFromArg",
        value: function arrayFromArg(spec, argFromSpec) {
          var _spec$options3, _spec$options4;
          var spec_without_default = _objectSpread2({}, spec);
          if ("default" in spec_without_default) {
            delete spec_without_default["default"];
          }
          var arg = argFromSpec.call(this, spec_without_default);
          var raw_options = (_spec$options3 = spec.options) === null || _spec$options3 === void 0 ? void 0 : _spec$options3.map((option) => option[0]);
          if ("default" in spec && raw_options) {
            var _iterator = _createForOfIteratorHelper10(
              spec.default
            ), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var default_entry = _step.value;
                if (!raw_options.includes(default_entry)) {
                  throw new Error(`Invalid default value ${spec.default}`);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          var separator = spec.separator ?? ",";
          var arrayParser = (value) => {
            var values = value.split(separator);
            if (!spec.noTrim) {
              values = values.map((v) => v.trim());
            }
            var result = values.map((v) => arg.parser(v));
            var error = result.find((v) => v instanceof ParseError);
            if (error) {
              return error;
            }
            var failure_index = result.indexOf(void 0);
            if (failure_index !== -1) {
              return new ParseError(
                `components expected ${arg.valueHelpName} but could not parse ${values[failure_index]}`
              );
            }
            return result;
          };
          return _objectSpread2(_objectSpread2(
            {},
            spec
          ), {}, {
            valueHelpName: `${arg.valueHelpName}${separator} ${arg.valueHelpName}${separator} ...`,
            parser: arrayParser,
            options: (_spec$options4 = spec.options) === null || _spec$options4 === void 0 ? void 0 : _spec$options4.map((a) => [`${a[0]}`, a[1]])
          });
        }
        /**
         * Create a string argument.
         * @param spec Specification for this argument. See {@link ArgSpec} for details.
         */
      }, {
        key: "string",
        value: function string(spec) {
          return this.custom(spec, (value) => value, "TEXT");
        }
        /**
         * Create a string[] argument.
         * @param spec Specification for this argument. See {@link ArraySpec} for details.
         */
      }, {
        key: "strings",
        value: function strings(spec) {
          return this.arrayFromArg(spec, this.string);
        }
        /**
         * Create a number argument.
         * @param spec Specification for this argument. See {@link ArgSpec} for details.
         */
      }, {
        key: "number",
        value: function number(spec) {
          return this.custom(
            spec,
            (value) => isNaN(Number(value)) ? void 0 : Number(value),
            "NUMBER"
          );
        }
        /**
         * Create a number[] argument.
         * @param spec Specification for this argument. See {@link ArraySpec} for details.
         */
      }, {
        key: "numbers",
        value: function numbers(spec) {
          return this.arrayFromArg(spec, this.number);
        }
        /**
         * Create a boolean argument.
         * @param spec Specification for this argument. See {@link ArgSpec} for details.
         */
      }, {
        key: "boolean",
        value: function boolean(spec) {
          return this.custom(
            spec,
            (value) => {
              if (value.toLowerCase() === "true") {
                return true;
              }
              if (value.toLowerCase() === "false") {
                return false;
              }
              return void 0;
            },
            "BOOLEAN"
          );
        }
        /**
         * Create a boolean[] argument.
         * @param spec Specification for this argument. See {@link ArraySpec} for details.
         */
      }, {
        key: "booleans",
        value: function booleans(spec) {
          return this.arrayFromArg(spec, this.boolean);
        }
        /**
         * Create a flag.
         * @param spec Specification for this argument. See {@link ArgSpec} for details.
         */
      }, {
        key: "flag",
        value: function flag(spec) {
          return this.custom(
            spec,
            (value) => {
              if (value.toLowerCase() === "true") {
                return true;
              }
              if (value.toLowerCase() === "false") {
                return false;
              }
              return void 0;
            },
            "FLAG"
          );
        }
        /**
         * Create a group of arguments that will be printed separately in the help.
         *
         * Note that keys in the group must still be globally distinct.
         *
         * @param groupName The display name for the group in help.
         * @param args A JS object specifying the script arguments. Its values should
         *    be {@link Arg} objects (created by Args.string, Args.number, or others)
         *    or groups of arguments (created by Args.group).
         */
      }, {
        key: "group",
        value: function group(groupName, args, hidden) {
          return {
            name: groupName,
            args,
            hidden
          };
        }
        /**
         * Create a set of input arguments for a script.
         * @param scriptName Prefix for property names; often the name of the script.
         * @param scriptHelp Brief description of this script, for the help message.
         * @param args A JS object specifying the script arguments. Its values should
         *    be {@link Arg} objects (created by Args.string, Args.number, or others)
         *    or groups of arguments (created by Args.group).
         * @param options Config options for the args and arg parser.
         * @returns An object which can hold parsed argument values. The keys of this
         *    object are identical to the keys in 'args'.
         */
      }, {
        key: "create",
        value: function create(scriptName, scriptHelp, args, options) {
          _traverse(args, (keySpec, key) => {
            if (key === "help" || keySpec.key === "help") {
              throw new Error(`help is a reserved argument name`);
            }
          });
          var argsWithHelp = _objectSpread2(_objectSpread2(
            {},
            args
          ), {}, {
            help: this.flag({ help: "Show this message and exit.", setting: "" })
          });
          var res = _objectSpread2(_objectSpread2(
            {},
            _loadDefaultValues(argsWithHelp)
          ), {}, {
            [specSymbol]: argsWithHelp,
            [scriptSymbol]: scriptName,
            [scriptHelpSymbol]: scriptHelp,
            [optionsSymbol]: options ?? {}
          });
          if (options !== null && options !== void 0 && options.positionalArgs) {
            var keys = [];
            var metadata = Args2.getMetadata(res);
            metadata.traverse((keySpec, key) => {
              keys.push(keySpec.key ?? key);
            });
            var _iterator22 = _createForOfIteratorHelper10(
              options.positionalArgs
            ), _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                var arg = _step22.value;
                if (!keys.includes(arg)) {
                  throw new Error(`Unknown key for positional arg: ${arg}`);
                }
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
          return res;
        }
        /**
         * Parse the command line input into the provided script arguments.
         * @param args An object to hold the parsed argument values, from Args.create(*).
         * @param command The command line input.
         * @param includeSettings If true, parse values from settings as well.
         */
      }, {
        key: "fill",
        value: function fill(args, command) {
          var includeSettings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
          var metadata = Args2.getMetadata(args);
          var keys = /* @__PURE__ */ new Map();
          var flags = /* @__PURE__ */ new Map();
          var aliased = /* @__PURE__ */ new Map();
          metadata.traverse((keySpec, key) => {
            var name = keySpec.key ?? key;
            var namesToMap = [name].concat(_toConsumableArray6(keySpec.aliases ?? []));
            var _iterator3 = _createForOfIteratorHelper10(
              namesToMap
            ), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var _metadata$options;
                var n = _step3.value;
                var lower = (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 && _metadata$options.caseSensitive ? n : n.toLowerCase();
                if (flags.has(lower) || keys.has(lower)) {
                  throw new Error(`Duplicate arg key '${n}' ${n !== name ? `(alias for '${name}') ` : ""}is ${aliased.has(lower) ? `already aliased to '${aliased.get(lower)}'` : "not allowed"}`);
                }
                if (n !== name) {
                  aliased.set(lower, name);
                }
                if (keySpec.valueHelpName === "FLAG" || keySpec.valueHelpName === "BOOLEAN") {
                  flags.set(lower, name);
                } else {
                  keys.set(lower, name);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
          if (includeSettings) {
            metadata.traverseAndMaybeSet(args, (keySpec, key) => {
              var setting = keySpec.setting ?? `${metadata.scriptName}_${keySpec.key ?? key}`;
              if (setting === "") {
                return void 0;
              }
              var value_str = provider().retrieveCache(setting, "small_persist");
              if (value_str === "") {
                return void 0;
              }
              return parseAndValidate(keySpec, `Setting ${setting}`, value_str);
            });
          }
          if (command === void 0 || command === "") {
            return;
          }
          var parsed = new CommandParser(
            command,
            keys,
            flags,
            metadata.options.positionalArgs ?? [],
            metadata.options.caseSensitive ?? false
          ).parse();
          metadata.traverseAndMaybeSet(args, (keySpec, key) => {
            var argKey = keySpec.key ?? key;
            var value_str = parsed.get(argKey);
            if (value_str === void 0) {
              return void 0;
            }
            return parseAndValidate(keySpec, `Argument ${argKey}`, value_str);
          });
        }
        /**
         * Parse command line input into a new set of script arguments.
         * @param scriptName Prefix to use in property names; typically the name of the script.
         * @param scriptHelp Brief description of this script, for the help message.
         * @param spec An object specifying the script arguments.
         * @param command The command line input.
         * @param options Config options for the args and arg parser.
         */
      }, {
        key: "parse",
        value: function parse(scriptName, scriptHelp, spec, command, options) {
          var args = this.create(scriptName, scriptHelp, spec, options);
          this.fill(args, command);
          return args;
        }
        /**
         * Print a description of the script arguments to the CLI.
         *
         * First, all top-level argument descriptions are printed in the order they
         * were defined. Afterwards, descriptions for groups of arguments are printed
         * in the order they were defined.
         *
         * @param args An object of parsed arguments, from Args.create(*).
         * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
         */
      }, { key: "showHelp", value: function showHelp(args, maxOptionsToDisplay) {
        var metadata = Args2.getMetadata(args);
        provider().printHtml(`${metadata.scriptHelp}`);
        provider().printHtml("");
        provider().printHtml(
          `<b>${metadata.options.defaultGroupName ?? "Options"}:</b>`
        );
        metadata.traverse(
          (arg, key) => {
            if (arg.hidden) {
              return;
            }
            this.showArgHelp(metadata, arg, key, maxOptionsToDisplay);
          },
          (group, key) => {
            if (group.hidden) {
              return;
            }
            this.showGroupHelp(metadata, group, key);
          }
        );
      } }, { key: "showGroupHelp", value: function showGroupHelp(metadata, group, key) {
        provider().printHtml("");
        provider().printHtml(`<b>${group.name}:</b>`);
      } }, {
        key: "showArgHelp",
        value: function showArgHelp(metadata, arg, key, maxOptionsToDisplay) {
          var nameText = `<font color='${provider().isDarkMode() ? "yellow" : "blue"}'>${arg.key ?? key}</font>`;
          var valueText = arg.valueHelpName === "FLAG" ? "" : `<font color='purple'>${arg.valueHelpName}</font>`;
          var helpText = arg.help ?? "";
          var defaultText = "default" in arg ? `<font color='#888888'>[default: ${arg.default}]</font>` : "";
          var settingText = arg.setting === "" ? "" : `<font color='#888888'>[setting: ${arg.setting ?? `${metadata.scriptName}_${arg.key ?? key}`}]</font>`;
          var aliasesText = arg.aliases && arg.aliases.length > 0 ? `<font color='#888888'>[aliases: ${arg.aliases.join(", ")}]</font>` : "";
          provider().printHtml(
            `&nbsp;&nbsp;${[nameText, valueText, "-", helpText, defaultText, settingText, aliasesText].filter(Boolean).join(" ")}`
          );
          var valueOptions = arg.options ?? [];
          if (valueOptions.length < (maxOptionsToDisplay ?? Number.MAX_VALUE)) {
            var _iterator4 = _createForOfIteratorHelper10(
              valueOptions
            ), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                var option = _step4.value;
                if (option.length === 1 || option[1] === void 0) {
                  provider().printHtml(
                    `&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>${nameText}</font> ${option[0]}`
                  );
                } else {
                  provider().printHtml(
                    `&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>${nameText}</font> ${option[0]} - ${option[1]}`
                  );
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
        /**
         * Load the metadata information for a set of arguments. Only for advanced usage.
         *
         * @param args A JS object specifying the script arguments. Its values should
         *    be {@link Arg} objects (created by Args.string, Args.number, or others)
         *    or groups of arguments (created by Args.group).
         * @returns A class containing metadata information.
         */
      }, { key: "getMetadata", value: function getMetadata(args) {
        return new WrappedArgMetadata(args);
      } }]);
    })();
    ParseError = /* @__PURE__ */ _createClass15(
      function ParseError2(message) {
        _classCallCheck15(this, ParseError2);
        this.message = message;
      }
    );
    specSymbol = /* @__PURE__ */ Symbol("spec");
    scriptSymbol = /* @__PURE__ */ Symbol("script");
    scriptHelpSymbol = /* @__PURE__ */ Symbol("scriptHelp");
    optionsSymbol = /* @__PURE__ */ Symbol("options");
    WrappedArgMetadata = /* @__PURE__ */ (function() {
      function WrappedArgMetadata2(args) {
        _classCallCheck15(this, WrappedArgMetadata2);
        this.spec = args[specSymbol];
        this.scriptName = args[scriptSymbol];
        this.scriptHelp = args[scriptHelpSymbol];
        this.options = args[optionsSymbol];
      }
      return _createClass15(WrappedArgMetadata2, [{
        key: "loadDefaultValues",
        value: function loadDefaultValues() {
          return _loadDefaultValues(this.spec);
        }
        /**
         * Traverse the spec and possibly generate a value for each argument.
         *
         * @param result The object to hold the resulting argument values, typically
         *    the result of loadDefaultValues().
         * @param setTo A function to generate an argument value from each arg spec.
         *    If this function returns undefined, then the argument value is unchanged.
         */
      }, {
        key: "traverseAndMaybeSet",
        value: function traverseAndMaybeSet(result, setTo) {
          return _traverseAndMaybeSet(this.spec, result, setTo);
        }
        /**
         * Traverse the spec and call a method for each argument.
         *
         * @param process A function to call at each arg spec.
         */
      }, { key: "traverse", value: function traverse(process, onGroup) {
        return _traverse(this.spec, process, onGroup);
      } }]);
    })();
    CommandParser = /* @__PURE__ */ (function() {
      function CommandParser2(command, keys, flags, positionalArgs, caseSensitive) {
        _classCallCheck15(this, CommandParser2);
        this.command = command;
        this.index = 0;
        this.keys = keys;
        this.flags = flags;
        this.positionalArgs = positionalArgs;
        this.positionalArgsParsed = 0;
        this.caseSensitive = caseSensitive;
      }
      return _createClass15(CommandParser2, [{
        key: "parse",
        value: function parse() {
          this.index = 0;
          var result = /* @__PURE__ */ new Map();
          while (!this.finished()) {
            var parsing_negative_flag = false;
            var flag_char = "";
            if (this.peek() === "!" || this.peek() === "-") {
              parsing_negative_flag = true;
              flag_char = this.peek();
              this.consume([flag_char]);
            }
            var startIndex = this.index;
            var _key = this.parseKey();
            var lowerKey = this.caseSensitive ? _key : _key.toLowerCase();
            var resolvedKey = this.flags.get(lowerKey) ?? this.keys.get(lowerKey) ?? lowerKey;
            if (result.has(resolvedKey)) {
              throw new Error(`Duplicate key ${_key} (first set to ${result.get(resolvedKey) ?? ""})`);
            }
            if (this.flags.has(lowerKey)) {
              if (this.peek() === "=") {
                this.consume(["="]);
                var _value2 = this.parseValue();
                if (["'", '"'].includes(this.prev() ?? "")) {
                  this.prevUnquotedKey = void 0;
                } else {
                  this.prevUnquotedKey = resolvedKey;
                }
                if (!this.finished()) {
                  this.consume([" "]);
                }
                result.set(
                  resolvedKey,
                  parsing_negative_flag ? flag_char + _value2 : _value2
                );
              } else {
                result.set(resolvedKey, parsing_negative_flag ? "false" : "true");
                if (!this.finished()) {
                  this.consume([" "]);
                }
                this.prevUnquotedKey = void 0;
              }
            } else if (this.keys.has(lowerKey)) {
              this.consume(["=", " "]);
              var _value3 = this.parseValue();
              if (["'", '"'].includes(this.prev() ?? "")) {
                this.prevUnquotedKey = void 0;
              } else {
                this.prevUnquotedKey = resolvedKey;
              }
              if (!this.finished()) {
                this.consume([" "]);
              }
              result.set(
                resolvedKey,
                parsing_negative_flag ? flag_char + _value3 : _value3
              );
            } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
              var positionalKey = this.positionalArgs[this.positionalArgsParsed];
              this.positionalArgsParsed++;
              this.index = startIndex;
              var _value4 = this.parseValue();
              if (["'", '"'].includes(this.prev() ?? "")) {
                this.prevUnquotedKey = void 0;
              } else {
                this.prevUnquotedKey = _key;
              }
              if (!this.finished()) {
                this.consume([" "]);
              }
              if (result.has(positionalKey)) {
                throw new Error(
                  `Cannot assign ${_value4} to ${positionalKey} (positionally) since ${positionalKey} was already set to ${result.get(positionalKey) ?? ""}`
                );
              }
              result.set(
                positionalKey,
                parsing_negative_flag ? flag_char + _value4 : _value4
              );
            } else {
              if (this.prevUnquotedKey && this.peek() !== "=") {
                throw new Error(`Unknown argument: ${_key} (if this should have been parsed as part of ${this.prevUnquotedKey}, you should surround the entire value in quotes)`);
              } else {
                throw new Error(`Unknown argument: ${_key}`);
              }
            }
          }
          return result;
        }
        /**
         * @returns True if the entire command has been parsed.
         */
      }, {
        key: "finished",
        value: function finished() {
          return this.index >= this.command.length;
        }
        /**
         * @returns The next character to parse, if it exists.
         */
      }, {
        key: "peek",
        value: function peek() {
          if (this.index >= this.command.length) {
            return void 0;
          }
          return this.command.charAt(this.index);
        }
        /**
         * @returns The character just parsed, if it exists.
         */
      }, {
        key: "prev",
        value: function prev() {
          if (this.index <= 0) {
            return void 0;
          }
          if (this.index >= this.command.length + 1) {
            return void 0;
          }
          return this.command.charAt(this.index - 1);
        }
        /**
         * Advance the internal marker over the next expected character.
         * Throws an error on unexpected characters.
         *
         * @param allowed Characters that are expected.
         */
      }, {
        key: "consume",
        value: function consume(allowed) {
          if (this.finished()) {
            throw new Error(`Expected ${allowed}`);
          }
          if (allowed.includes(this.peek() ?? "")) {
            this.index += 1;
          }
        }
        /**
         * Find the next occurance of one of the provided characters, or the end of
         * the string if the characters never appear again.
         *
         * @param searchValue The characters to locate.
         */
      }, {
        key: "findNext",
        value: function findNext(searchValue) {
          var result = this.command.length;
          var _iterator5 = _createForOfIteratorHelper10(
            searchValue
          ), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var _value5 = _step5.value;
              var index = this.command.indexOf(_value5, this.index);
              if (index !== -1 && index < result) {
                result = index;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          return result;
        }
        /**
         * Starting from the internal marker, parse a single key.
         * This also advances the internal marker.
         *
         * @returns The next key.
         */
      }, {
        key: "parseKey",
        value: function parseKey() {
          var keyEnd = this.findNext(["=", " "]);
          var key = this.command.substring(this.index, keyEnd);
          this.index = keyEnd;
          return key;
        }
        /**
         * Starting from the internal marker, parse a single value.
         * This also advances the internal marker.
         *
         * Values are a single word or enclosed in matching quotes, i.e. one of:
         *    "[^"]*"
         *    '[^']*"
         *    [^'"][^ ]*
         *
         * Quotes only define a quoted value if it appears at the start.
         * A closing quote is valid only when followed by space or nothing.
         * Backslashes in a quote, escapes the next character
         *
         * @returns The next value.
         */
      }, { key: "parseValue", value: function parseValue() {
        var ch = this.peek();
        if (ch === '"' || ch === "'") {
          return this.parseQuotedValue(ch);
        }
        var first = this.index;
        this.index = this.findNext([" "]);
        return this.command.substring(first, this.index);
      } }, { key: "parseQuotedValue", value: function parseQuotedValue(quote) {
        this.index++;
        var out = "";
        while (!this.finished()) {
          var ch = this.peek();
          if (ch === "\\") {
            this.index++;
            if (this.finished()) {
              out += "\\";
              break;
            }
            out += this.peek();
            this.index++;
            continue;
          } else if (ch === quote) {
            var next = this.command.charAt(this.index + 1);
            if (next === "" || next === " ") {
              this.index++;
              return out;
            }
          }
          out += ch;
          this.index++;
        }
        throw new Error(`No closing ${quote} found for ${quote}${out}`);
      } }]);
    })();
  }
});

// src/settings/settings.ts
function _slicedToArray7(r, e) {
  return _arrayWithHoles7(r) || _iterableToArrayLimit7(r, e) || _unsupportedIterableToArray13(r, e) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit7(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles7(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck16(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties16(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey16(o.key), o);
  }
}
function _createClass16(e, r, t) {
  return r && _defineProperties16(e.prototype, r), t && _defineProperties16(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toConsumableArray7(r) {
  return _arrayWithoutHoles7(r) || _iterableToArray7(r) || _unsupportedIterableToArray13(r) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray7(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles7(r) {
  if (Array.isArray(r)) return _arrayLikeToArray13(r);
}
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty11(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty11(e, r, t) {
  return (r = _toPropertyKey16(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey16(t) {
  var i = _toPrimitive16(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive16(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
function _createForOfIteratorHelper11(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray13(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray13(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray13(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray13(r, a) : void 0;
  }
}
function _arrayLikeToArray13(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function numberParser(arg) {
  var _match$;
  var cleaned = arg;
  while (cleaned.includes(",") || cleaned.includes("_")) {
    cleaned = cleaned.replace(/[,_]/g, "");
  }
  var match = cleaned.match(/^((?:\d+)|(?:\d*\.\d+))([mkbt]?)$/i);
  if (match == null) {
    return new ParseError("Invalid number format");
  }
  var num = parseFloat(match[1]);
  var mod = (_match$ = match[2]) === null || _match$ === void 0 ? void 0 : _match$.toLowerCase();
  if (mod == "t") {
    num *= 1e12;
  } else if (mod == "b") {
    num *= 1e9;
  } else if (mod == "m") {
    num *= 1e6;
  } else if (mod == "k") {
    num *= 1e3;
  }
  return num;
}
function playerParser(arg) {
  var v = arg;
  if (!v.match(/^[0-9]+$/)) {
    v = provider().getPlayerId(v);
    if (!v.match(/^[0-9]+$/)) {
      return new ParseError(`Failed to convert ${arg} into a player ID`);
    }
  }
  return parseInt(v);
}
function sortByParser(arg) {
  var neg = /^[-!]/.test(arg);
  var v = arg.toLowerCase().replace("_", "").substring(neg ? 1 : 0);
  var _iterator = _createForOfIteratorHelper11(
    sortBys
  ), _step;
  try {
    var _loop = function _loop2() {
      var sort = _step.value;
      if (sort.name.toLowerCase().replace("_", "") != v && !sort.aliases.some((a) => a.toLowerCase().replace("_", "") == v)) {
        return 0;
      }
      if (neg) {
        return { v: _objectSpread3(_objectSpread3(
          {},
          sort
        ), {}, {
          assignValue: sort.assignValue ? (item, price, owned, maxPrice) => {
            sort.assignValue(item, price, owned, maxPrice);
            item.sortValue = -item.sortValue;
          } : void 0,
          fallback: sort.fallback ? (item1, item2) => {
            return -sort.fallback(item1, item2);
          } : void 0
        }) };
      }
      return { v: sort };
    }, _ret;
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      _ret = _loop();
      if (_ret === 0) continue;
      if (_ret) return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return new ParseError(`Unknown sort option: ${arg}`);
}
function colorSchemeParser(arg) {
  var v = arg.toLowerCase();
  if (!getAccountvalColors().includes(v)) {
    return new ParseError(`Unknown color scheme: ${arg}`);
  }
  return v;
}
function logTypeParser(arg) {
  var v = arg.toLowerCase();
  if (v !== "plain" && v !== "fancy") {
    return new ParseError(`Unknown log type: ${arg}`);
  }
  return v;
}
var sortBys, defaultMaxNaturalPrice, staticAccountValSpec, AccountValSettings;
var init_settings = __esm({
  "src/settings/settings.ts"() {
    init_colors();
    init_presets();
    init_grimoireArgs();
    init_apiSupplier();
    init_supplierTypings();
    init_timings();
    sortBys = [
      {
        name: "TOTAL_PRICE",
        aliases: ["TOTAL_MEAT"],
        assignValue(item, price, owned, maxPrice) {
          item.sortValue = price.price <= 0 ? maxPrice : 1 / item.worthMultiplier * price.price * owned.get(item);
        }
      },
      {
        name: "PRICE",
        aliases: ["MEAT"],
        assignValue(item, price, owned, maxPrice) {
          item.sortValue = price.price <= 0 ? maxPrice : 1 / item.worthMultiplier * price.price;
        }
      },
      {
        name: "QUANTITY",
        aliases: ["COUNT", "AMOUNT"],
        assignValue(item, price, owned, maxPrice) {
          item.sortValue = owned.get(item);
        }
      },
      {
        name: "NAME",
        aliases: [],
        assignValue: void 0,
        fallback: (v1, v2) => v1.name.localeCompare(v2.name)
      },
      {
        name: "ITEM_ID",
        aliases: ["ID"],
        assignValue(item, price, owned, maxPrice) {
          item.sortValue = item.tradeableItem.id;
        }
      },
      {
        name: "SALES_VOLUME",
        aliases: ["SALES", "SOLD"],
        assignValue(item, price, owned, maxPrice) {
          item.sortValue = price.volume;
        }
      }
    ];
    defaultMaxNaturalPrice = ((/* @__PURE__ */ new Date()).getFullYear() - 2021) * 2e9;
    staticAccountValSpec = {
      fetchCloset: Args.boolean({
        key: "closet",
        aliases: ["clos"],
        help: "Should it fetch from the closet"
      }),
      fetchStorage: Args.boolean({
        key: "storage",
        aliases: ["stor", "hagnk", "hagnks"],
        help: "Should it fetch from storage"
      }),
      fetchShop: Args.boolean({
        key: "store",
        aliases: ["mall", "shop"],
        help: "Should it fetch from the shop"
      }),
      fetchInventory: Args.boolean({
        key: "inventory",
        aliases: ["inv"],
        help: "Should it fetch from your inventory"
      }),
      fetchDisplaycase: Args.boolean({
        key: "displaycase",
        aliases: ["display", "dc"],
        help: "Should it fetch from the displaycase"
      }),
      fetchClan: Args.boolean({
        key: "clan",
        aliases: ["stash"],
        help: "Should it check clan's stash? False by default"
      }),
      fetchSession: Args.boolean({
        key: "session",
        help: "Should it fetch using your current session of items acquired? False by default"
      }),
      doTradeables: Args.boolean({
        key: "tradeable",
        aliases: ["tradeables", "trade", "tradable"],
        help: "Should it do tradeables"
      }),
      doNonTradeables: Args.boolean({
        key: "notrade",
        aliases: [
          "nontrade",
          "notradeable",
          "notradable",
          "nontradeable",
          "notradeables",
          "nontradeables",
          "untrade",
          "untradeable",
          "untradeables"
        ],
        help: "Should it do non-tradeables"
      }),
      fetchFamiliars: Args.boolean({
        key: "familiar",
        aliases: ["familiars", "fam", "fams"],
        help: "Should it do familiars. Bound being true also means this is true if not set"
      }),
      fetchSnapshot: Args.boolean({
        key: "snapshot",
        help: "Should it attempt to use av-snapshot?"
      }),
      doBound: Args.boolean({
        key: "bound",
        aliases: ["bind", "bounded", "binds", "binded"],
        help: "Should it do items that are bound to your account"
      }),
      minimumMeat: Args.custom(
        {
          key: "meat",
          aliases: ["minmeat", "minimummeat", "min-meat", "minprice", "price"],
          help: "Each item total worth, at least this amount.",
          default: 0
        },
        numberParser,
        "NUMBER"
      ),
      minimumAmount: Args.custom(
        {
          key: "amount",
          aliases: ["count", "minimumamount", "minamount"],
          help: "At least this many items",
          default: 1
        },
        numberParser,
        "NUMBER"
      ),
      displayLimit: Args.number({
        key: "limit",
        aliases: ["displaylimit", "maxdisplay", "lines"],
        help: "Limit results to display this amount",
        default: 100
      }),
      playerId: Args.custom(
        {
          key: "player",
          aliases: [
            "playerid",
            "playername",
            "user",
            "who",
            "target",
            "name",
            "username"
          ],
          help: `Target another player's DC, shop, av-snapshot (if exists). Can do player="John Smith" for spaces`,
          default: 0
        },
        playerParser,
        "PLAYER_ID"
      ),
      doSuperFast: Args.boolean({
        key: "fast",
        aliases: ["superfast", "speed", "quick", "rough"],
        help: "Try resolve everything with historical price",
        default: false
      }),
      maxAge: Args.number({
        key: "age",
        aliases: ["maxage", "days"],
        help: "The max days a price is allowed to be outdated",
        default: 999999
      }),
      sortBy: Args.custom(
        {
          key: "sort",
          aliases: ["sortby", "sorted"],
          help: `What we should sort the results by, prefix with ! or - to reverse sort. Supports: ${sortBys.map((s2) => `${s2.name} (${s2.aliases.join(", ")})`).join(", ").toUpperCase()}`,
          default: sortByParser("TOTAL_PRICE")
        },
        sortByParser,
        "SORT_BY"
      ),
      reverseSort: Args.boolean({
        key: "reverse",
        aliases: ["desc", "descending"],
        help: "Reverse the sort order",
        default: false
      }),
      shopWorth: Args.boolean({
        key: "worth",
        aliases: ["shopworth", "pricing", "prices"],
        help: "Seperates items in shop from the other items, and shows how under/overpriced they are. This can be inaccurate"
      }),
      javascriptFilter: Args.string({
        key: "jsfilter",
        aliases: ["javascriptfilter", "javascript", "js"],
        help: [
          `Filters if an item can be shown, provides an item & amount and expects a boolean.`,
          `"quotes" must be escaped if the next character is a space.`,
          `Example: jsfilter="(item, amount, worth, sales) => itemType(item) == "booze\\" && item.name.includes("beer")`
        ].join(" "),
        default: ""
      }),
      sales: Args.number({
        key: "sales",
        aliases: ["sold"],
        help: "Hides items that have less than this amount of sales",
        default: 0
      }),
      useLastSold: Args.boolean({
        key: "useLastSold",
        aliases: ["lastSold", "soldprice"],
        help: "Resolve prices by their last sold",
        default: false
      }),
      brief: Args.boolean({
        key: "brief",
        help: "Prints out a single line as the final result, the total meat.",
        default: false
      }),
      colorScheme: Args.custom(
        {
          key: "color",
          aliases: ["colors", "colorscheme", "scheme"],
          help: "What color schemes to use, set `accountvalColorScheme` pref to change the default. Supports: " + getAccountvalColors().join(", "),
          default: "default",
          options: ["default"].concat(_toConsumableArray7(getAccountvalColors())).map((s2) => [s2])
        },
        colorSchemeParser,
        "COLOR_SCHEME"
      ),
      maxNaturalPrice: Args.custom(
        {
          key: "max",
          aliases: ["mallmax"],
          help: "The max natural price an item will reach before it's capped and called mall extinct. Default increases by 2b every year.",
          default: defaultMaxNaturalPrice,
          setting: "accountval_maxNaturalPrice"
        },
        numberParser,
        "NUMBER"
      ),
      doCategories: Args.boolean({
        key: "category",
        aliases: ["categories", "shelf", "shelves"],
        help: "Used only for Display Cases at this point, seperates the items into categories"
      }),
      showSingleItemWorth: Args.boolean({
        key: "each",
        help: "Displays the individual price of each item instead of the total, works best with `sort=meat`"
      }),
      dateToFetch: Args.string({
        key: "date",
        aliases: ["fetchdate", "historical", "time", "when", "at"],
        help: [
          `View everything with the prices of the past, either provide a '1d2m3y' which will automatically be converted and capped,`,
          `or a specified date 'DD-MM-YYYY' which cannot be older than 22-08-2023.`,
          `This obviously won't work for items that didn't exist then, and will make a backend call to 'kolprices.lib.co.nz/files/:date'`
        ].join(" ")
      }),
      logOutputAs: Args.custom(
        {
          key: "text",
          aliases: ["logtype", "formatting"],
          help: [
            `If accountval should log everything with "fancy" text, which means html, or "plain" which means the output is also logged to your session log,`,
            `but will have no hover text or colors.`,
            `Try looking into kolmafia 'mirror' if you want the output as html. Example usage: "text=plain". Change the default by using "set accountval_text=plain"`
          ].join(" "),
          default: "fancy",
          setting: "accountval_text",
          options: [["plain"], ["fancy"]]
        },
        logTypeParser,
        "TEXT_TYPE"
      ),
      logOutputTo: Args.string({
        key: "output",
        help: [
          `Send the output of accountval to a file instead of printing into cli, eg 'output=accountval.html' would send it into the 'data/accountval.html'.`,
          `If the file ends with .html, it will entity encode all non-html lines.`
        ].join(" "),
        default: ""
      }),
      pricegun: Args.boolean({
        key: "pricegun",
        help: "Resolve prices using pricegun. This will be slower.",
        default: false
      }),
      mallPrice: Args.boolean({
        key: "mallPrice",
        help: [
          `Has accountval calculate prices from mallprice, it will load (and cache) ${Math.ceil(KoLItem.all().filter((i) => i.tradeable).length / 30)} pages of items if needed.`,
          `Beware that although this is cached, you should avoid using this setting if you're going to be running accountval a dozen times, restarting after each or something,`,
          `as that many mall searches can't be differnated from mall abuse by TPTB`
        ].join(" "),
        default: false
      }),
      showPresetFilters: Args.boolean({
        key: "presets",
        help: "Show the preset filters",
        setting: ""
      }),
      pricegunBatchSize: Args.number({
        hidden: true,
        default: 500,
        help: "Max amount of items to send per pricegun request"
      }),
      settings: Args.boolean({ hidden: true, default: false }),
      timings: Args.boolean({ hidden: true, default: false })
    };
    AccountValSettings = /* @__PURE__ */ (function() {
      function AccountValSettings2() {
        _classCallCheck16(this, AccountValSettings2);
        _defineProperty11(this, "fetchingEverywhereish", true);
        _defineProperty11(
          this,
          "fetchingNonItems",
          true
        );
        _defineProperty11(
          this,
          "presets",
          []
        );
        _defineProperty11(
          this,
          "expensivePricesAt",
          4e7
        );
        _defineProperty11(
          this,
          "cheapTotalsLessThan",
          2e7
        );
        _defineProperty11(
          this,
          "cheapPricesLessThan",
          2e6
        );
      }
      return _createClass16(AccountValSettings2, [{ key: "doSettings", value: function doSettings(command) {
        var errors = [];
        var presetSpec = {};
        var _iterator22 = _createForOfIteratorHelper11(
          getPresets()
        ), _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
            var preset = _step22.value;
            var names = preset.name();
            presetSpec[`preset_${names[0]}`] = Args.boolean({
              key: names[0],
              aliases: names.slice(1),
              help: preset.desc(),
              setting: `accountval_preset_${names[0]}`,
              hidden: true
            });
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        var fullSpec = _objectSpread3(_objectSpread3(
          {},
          staticAccountValSpec
        ), {}, {
          presetFilters: Args.group("Preset Filters", presetSpec, true)
        });
        var scriptHelp = [
          `<font color=${AccountValColors.helpfulStateInfo}>AccountVal is a script to check what your account is worth, and find the good stuff fast.</font>`,
          `<font color=${AccountValColors.helpfulStateInfo}>You can provide these as a parameter to accountval to do other stuff than the base script.</font>`,
          `<font color='${(AccountValColors === null || AccountValColors === void 0 ? void 0 : AccountValColors.helpfulStateInfo) ?? "blue"}'>Use ! or - to negate a boolean, or use '='. Eg:</font><font color='gray'> -bound !bound bound=false</font>`,
          `<font color='${(AccountValColors === null || AccountValColors === void 0 ? void 0 : AccountValColors.minorNote) ?? "gray"}'>Disclaimer: The prices shown are not absolute, and can over/understate what it really is worth.</font>`
        ];
        try {
          Object.assign(
            this,
            Args.parse("accountval", scriptHelp.join("\n"), fullSpec, command)
          );
        } catch (e) {
          errors.push(e.message || e.toString());
          return errors;
        }
        AccValTiming.enabled = this.timings;
        loadAccountvalColors(this.colorScheme);
        var _iterator3 = _createForOfIteratorHelper11(getPresets()), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _presetFilters;
            var _preset = _step3.value;
            var _names = _preset.name();
            var presetVal = (_presetFilters = this.presetFilters) === null || _presetFilters === void 0 ? void 0 : _presetFilters[`preset_${_names[0]}`];
            if (presetVal !== void 0) {
              this.presets.push({ preset: _preset, negated: !presetVal });
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.resolveFetchSources();
        if (this.settings) {
          for (var _i = 0, _Object$keys = Object.keys(this); _i < _Object$keys.length; _i++) {
            var setting = _Object$keys[_i];
            provider().print(`${setting} = ${this[setting]}`);
          }
        }
        return errors;
      } }, { key: "resolveFetchSources", value: function resolveFetchSources() {
        var fetchSources = [
          "fetchCloset",
          "fetchStorage",
          "fetchShop",
          "fetchInventory",
          "fetchDisplaycase",
          "fetchClan",
          "fetchSession",
          "fetchFamiliars",
          "fetchSnapshot"
        ];
        var wasSet = Object.entries(this).filter((_ref) => {
          var _ref2 = _slicedToArray7(_ref, 2), k = _ref2[0], v = _ref2[1];
          return v !== void 0;
        }).map((_ref3) => {
          var _ref4 = _slicedToArray7(_ref3, 1), k = _ref4[0];
          return k;
        });
        this.fetchingEverywhereish = !this.fetchSession && !this.fetchClan && fetchSources.find((v) => wasSet.includes(v) && this[v]) == null;
        this.fetchClan = this.fetchClan ?? false;
        this.fetchSession = this.fetchSession ?? false;
        if (!wasSet.includes("doTradeables")) {
          this.doTradeables = this.doBound ? false : wasSet.includes("doNonTradeables") ? !this.doNonTradeables : true;
        }
        if (!wasSet.includes("doNonTradeables")) {
          this.doNonTradeables = this.doBound ? false : wasSet.includes("doTradeables") ? !this.doTradeables : true;
        }
        if (!wasSet.includes("doBound")) {
          this.doBound = (this.doTradeables || this.fetchingEverywhereish) && this.doNonTradeables;
        }
        if (wasSet.includes("fetchFamiliars") && this.presets.find((p) => p.preset.name().includes("hatchling"))) {
          this.fetchFamiliars = false;
        } else if (!wasSet.includes("fetchFamiliars") && this.fetchingEverywhereish) {
          this.fetchFamiliars = this.doBound;
        }
        for (var _i2 = 0, _fetchSources = fetchSources; _i2 < _fetchSources.length; _i2++) {
          var fetchSource = _fetchSources[_i2];
          if (this[fetchSource] !== void 0) {
            continue;
          }
          this[fetchSource] = this.fetchingEverywhereish;
        }
        this.fetchingNonItems = this.fetchingEverywhereish;
      } }, { key: "doesJSFilterUsePriceOrSales", value: function doesJSFilterUsePriceOrSales() {
        return this.javascriptFilter != null && this.javascriptFilter.split("=>")[0].split(",").length >= 3;
      } }, { key: "isShown", value: function isShown(item, worth) {
        return this.presets.every(
          (pre) => (pre.preset.isShown != null ? pre.preset.isShown(item, worth) : pre.preset.isProcessed(item.actualItem, worth)) != pre.negated
        );
      } }, { key: "getMaxPriceAge", value: function getMaxPriceAge(price, amount) {
        return Math.min(this.maxAge, this.internalMaxPriceAge(price, amount));
      } }, { key: "internalMaxPriceAge", value: function internalMaxPriceAge(price, amount) {
        if (price > this.expensivePricesAt) {
          return 30;
        }
        var total = price * amount;
        if (total > this.cheapTotalsLessThan) {
          return amount > 10 ? 90 : 180;
        }
        if (price > this.cheapPricesLessThan) {
          return Math.max(90, 180 - amount * 5);
        }
        if (price > 1e3) {
          return 365;
        }
        return 900;
      } }]);
    })();
    _defineProperty11(AccountValSettings, "defaultMaxNaturalPrice", defaultMaxNaturalPrice);
  }
});

// src/ui/output.ts
function _classCallCheck17(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties17(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey17(o.key), o);
  }
}
function _createClass17(e, r, t) {
  return r && _defineProperties17(e.prototype, r), t && _defineProperties17(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey17(t) {
  var i = _toPrimitive17(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive17(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var ReportOutput;
var init_output = __esm({
  "src/ui/output.ts"() {
    init_apiSupplier();
    ReportOutput = /* @__PURE__ */ (function() {
      function ReportOutput2(settings) {
        _classCallCheck17(this, ReportOutput2);
        this.settings = settings;
      }
      return _createClass17(ReportOutput2, [{ key: "printLine", value: function printLine(line, textType, color) {
        if (this.settings.logOutputAs == "plain" && textType == "html") {
          line = line.replace(/<[^>]*>/g, "");
          textType = "plain";
        }
        if (this.settings.logOutputTo) {
          if (this.output == null) {
            if (line != null) {
              line = line.trim();
            }
            if (line == null || line == "") {
              return;
            }
            this.output = [];
          }
          if (textType == "plain" && this.settings.logOutputTo.endsWith(".html")) {
            line = provider().entityEncode(line);
          }
          this.output.push(line);
        } else if (textType == "html") {
          provider().printHtml(line);
        } else if (color != null) {
          provider().print(line, color);
        } else {
          provider().print(line);
        }
      } }, { key: "escapeHTML", value: function escapeHTML(str) {
        return provider().entityDecode(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      } }, { key: "stop", value: function stop() {
        if (this.output == null || this.output.length == 0) {
          return;
        }
        provider().storeCache(
          this.settings.logOutputTo,
          this.output.join("\n"),
          "large_persist"
        );
        provider().print(
          `accounval results printed to 'data/${this.settings.logOutputTo}'`
        );
      } }]);
    })();
  }
});

// src/ui/valuation.ts
function _slicedToArray8(r, e) {
  return _arrayWithHoles8(r) || _iterableToArrayLimit8(r, e) || _unsupportedIterableToArray14(r, e) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit8(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles8(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray8(r) {
  return _arrayWithoutHoles8(r) || _iterableToArray8(r) || _unsupportedIterableToArray14(r) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray8(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles8(r) {
  if (Array.isArray(r)) return _arrayLikeToArray14(r);
}
function _createForOfIteratorHelper12(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray14(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray14(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray14(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray14(r, a) : void 0;
  }
}
function _arrayLikeToArray14(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck18(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties18(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey18(o.key), o);
  }
}
function _createClass18(e, r, t) {
  return r && _defineProperties18(e.prototype, r), t && _defineProperties18(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty12(e, r, t) {
  return (r = _toPropertyKey18(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey18(t) {
  var i = _toPrimitive18(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive18(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var ValuationReport;
var init_valuation = __esm({
  "src/ui/valuation.ts"() {
    init_apiSupplier();
    init_settings();
    init_utils();
    init_colors();
    init_typings();
    init_supplierTypings();
    ValuationReport = /* @__PURE__ */ (function() {
      function ValuationReport2(logic, settings, out) {
        _classCallCheck18(this, ValuationReport2);
        _defineProperty12(this, "netvalue", 0);
        _defineProperty12(this, "lines", []);
        _defineProperty12(this, "mallExtinct", []);
        _defineProperty12(this, "shopNetValue", 0);
        _defineProperty12(this, "shopPricedAt", 0);
        _defineProperty12(this, "lastCategory", null);
        _defineProperty12(this, "shelfValue", 0);
        _defineProperty12(this, "exceededMax", false);
        this.logic = logic;
        this.settings = settings;
        this.out = out;
        this.aWorth = this.logic.priceResolver.itemPrice(
          KoLItem.get("Mr. Accessory")
        ).price;
        this.pronoun = this.settings.fetchClan ? "The clan stash is" : !this.settings.playerId || this.settings.playerId == AccountValUtils.toInt(provider().myId()) ? this.settings.fetchSession ? "Your session is" : "You are" : provider().getPlayerName(this.settings.playerId) + " is";
      }
      return _createClass18(ValuationReport2, [{ key: "run", value: function run3() {
        var resolved = this.filterAndResolveItems();
        var _iterator = _createForOfIteratorHelper12(
          resolved
        ), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var res = _step.value;
            this.formatResolvedItem(res);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.onShelfName(null, 0);
        this.printLinesAndExtinct(resolved.length);
        this.printSummary();
      } }, { key: "filterAndResolveItems", value: function filterAndResolveItems() {
        var useJsFilter = this.logic.jsFilter != null && this.settings.doesJSFilterUsePriceOrSales();
        var resolved = [];
        for (var no = this.logic.prices.length - 1; no >= 0; no--) {
          var item = this.logic.prices[no][0];
          var price = this.logic.prices[no][1];
          var worthEach = Math.min(
            this.settings.maxNaturalPrice + 1,
            price.price <= 0 && item.worthMultiplier == 1 ? -1 : price.price * (1 / item.worthMultiplier)
          );
          var count = this.logic.ownedItems.get(item);
          if (isNaN(count)) {
            this.out.printLine(
              "Unable to handle the item '" + item.name + "', skipping..",
              "plain",
              AccountValColors.attentionGrabbingWarning
            );
            continue;
          }
          if (useJsFilter && !this.logic.jsFilter(item.actualItem, count, worthEach, price.volume)) {
            continue;
          }
          resolved.push({ item, price, worthEach, count });
        }
        return resolved;
      } }, { key: "onShelfName", value: function onShelfName(name, worth) {
        if (!this.settings.doCategories || name == this.lastCategory) {
          this.shelfValue += worth;
          return;
        }
        if (this.lastCategory != null) {
          this.lines.push(
            `<u><b>DC Shelf:</b> ${this.out.escapeHTML(this.lastCategory)}<font color='${AccountValColors.minorNote}'>, worth ${AccountValUtils.getNumber(this.shelfValue)} meat</font></u>`
          );
          this.lines.push("");
        }
        this.lastCategory = name;
        this.shelfValue = worth;
      } }, { key: "formatResolvedItem", value: function formatResolvedItem(_ref) {
        var item = _ref.item, price = _ref.price, worthEach = _ref.worthEach, count = _ref.count;
        this.exceededMax = this.exceededMax || this.settings.maxNaturalPrice + 1 < price.price * (1 / item.worthMultiplier);
        var totalWorth = Math.round(worthEach * count);
        this.netvalue += totalWorth;
        if (this.lines.length >= this.settings.displayLimit) {
          return;
        }
        var title = [];
        if (item.name != item.tradeableItem.name && item.worthMultiplier != 1) {
          title.push(`=== ${this.out.escapeHTML(item.name)} ===`);
          title.push("");
          title.push(
            `${this.out.escapeHTML(item.tradeableItem.name)} / ${this.out.escapeHTML(item.pluralName)} (${item.worthMultiplier}) = ${item.pluralName} are worth ${AccountValUtils.getNumber(Math.round(worthEach))} meat each.`
          );
        } else {
          title.push(`=== ${this.out.escapeHTML(item.tradeableItem.name)} ===`);
          title.push("");
        }
        var tradeableWorth = ` @ ${AccountValUtils.getNumber(price.price)} meat.`;
        if (price.price < 0) {
          tradeableWorth = " as mall extinct.";
        }
        var accName = price.accuracy == PriceType.NEW_PRICES ? "Last malled" : price.accuracy == PriceType.MALL_SALES ? "Last sold" : price.accuracy == PriceType.AUTOSELL ? "Autosell" : "Last mafia malled";
        title.push(accName + tradeableWorth);
        if (price.price2 > 0 && price.accuracy == PriceType.NEW_PRICES) {
          title.push(
            `Last sold @ ${AccountValUtils.getNumber(price.price2)} meat.`
          );
        }
        if (item.shopWorth > 0) {
          title.push(
            `${this.pronoun} selling @ ${AccountValUtils.getNumber(item.shopWorth)} meat.`
          );
        }
        if (count > 1 && this.settings.showSingleItemWorth) {
          title.push(`Worth a total of ${AccountValUtils.getNumber(totalWorth)}`);
        }
        if (price.accuracy != PriceType.AUTOSELL) {
          title.push("");
          title.push(
            `Price valid as of ${AccountValUtils.getNumber(price.daysOutdated, 1)} day${price.daysOutdated != 1 ? "s" : ""} ago.`
          );
        }
        if (price.volume >= 0) {
          title.push("");
          title.push(
            `${AccountValUtils.getNumber(price.volume)} sold in the last week.`
          );
        }
        if (item.snapshotSource != null) {
          title = [`Owns in ${item.snapshotSource}.`].concat(_toConsumableArray8(title));
        }
        var name = this.out.escapeHTML(item.name);
        if (item.bound != null) {
          var boundInfo;
          var color = AccountValColors.shopPricesOverpriced;
          if (item.bound == ItemStatus.SHOP_WORTH) {
            var overpricedPerc = item.shopWorth / worthEach;
            if (item.shopWorth < 999999e3) {
              this.shopPricedAt += item.shopWorth * count;
              this.shopNetValue += totalWorth;
            }
            if (overpricedPerc <= 1.05) {
              color = AccountValColors.shopPricedOk;
            }
            boundInfo = AccountValUtils.getNumberOrClamp(
              Math.round(overpricedPerc * 100),
              -999,
              999,
              "Very underpriced",
              "Very overpriced"
            );
            if (boundInfo.match(/\d$/)) {
              boundInfo = `Price: ${boundInfo}%`;
            }
          } else {
            boundInfo = item.getBound();
          }
          name = `${name} (<font color='${color}' title='${title.join("&#010;")}'>${this.out.escapeHTML(boundInfo)}</font>)`;
        }
        if (worthEach <= 0 || worthEach > this.settings.maxNaturalPrice) {
          if (count > 1) {
            this.mallExtinct.push([count + " @ " + name, title.join("&#010;")]);
          } else {
            this.mallExtinct.push([name, title.join("&#010;")]);
          }
          return;
        }
        this.onShelfName(item.category, totalWorth);
        var text = `${AccountValUtils.getNumber(count)} ${name}`;
        if (this.settings.showSingleItemWorth) {
          text += ` each worth ${AccountValUtils.getNumber(worthEach)}`;
        } else {
          text += ` worth a total of ${AccountValUtils.getNumber(totalWorth)}`;
        }
        this.lines.push(
          "<font title='" + this.out.escapeHTML(title.join("&#010;")) + "'>" + text + "</font>"
        );
      } }, { key: "printLinesAndExtinct", value: function printLinesAndExtinct(totalResolved) {
        if (!this.settings.brief) {
          this.lines = this.lines.reverse();
          var skipping = Math.max(0, totalResolved - this.settings.displayLimit);
          if (skipping > 0) {
            this.out.printLine("", "plain");
            this.out.printLine(
              `<font color='${AccountValColors.minorNote}'>Skipping ${AccountValUtils.getNumber(skipping)} lines and displaying the last ${AccountValUtils.getNumber(this.settings.displayLimit)} lines..</font>`,
              "html"
            );
          }
          if (this.lines.length > 0) {
            this.lines.push("");
          }
          if (this.lines[0] == "") {
            this.lines.shift();
          }
          var _iterator22 = _createForOfIteratorHelper12(
            this.lines
          ), _step22;
          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
              var line = _step22.value;
              this.out.printLine(line.replace(/\n/g, "&#010;"), "html");
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
          if (this.mallExtinct.length > 0) {
            var colors = [
              AccountValColors.mallExtinctColor1,
              AccountValColors.mallExtinctColor2
            ];
            var extinct = this.mallExtinct.map(
              (_ref2, i) => {
                var _ref3 = _slicedToArray8(_ref2, 2), name = _ref3[0], title = _ref3[1];
                return "<font color='" + colors[i % 2] + "' title='" + title + "'>" + name + "</font>";
              }
            );
            this.out.printLine(
              "There were " + extinct.length + " mall extinct items! Items: " + extinct.join(", "),
              "html"
            );
          }
        }
      } }, { key: "printSummary", value: function printSummary() {
        var mrAMeat = this.netvalue;
        this.out.printLine(
          this.pronoun + " worth " + AccountValUtils.getNumber(this.netvalue) + " meat!",
          "plain",
          AccountValColors.helpfulStateInfo
        );
        if (this.settings.fetchSession && provider().mySessionMeat() != 0) {
          mrAMeat = this.netvalue + provider().mySessionMeat();
          this.out.printLine(
            `Add meat from session, that's ${AccountValUtils.getNumber(mrAMeat)} meat!`,
            "plain",
            AccountValColors.helpfulStateInfo
          );
        }
        if (this.settings.brief) {
          return;
        }
        var mrAWorth = (0 + mrAMeat) / this.aWorth;
        this.out.printLine(
          `<font title='With Mr. Accessory worth being ${AccountValUtils.getNumber(this.aWorth)} meat'>Going by the value of a Mr. Accessory, that's $${AccountValUtils.getNumber(mrAWorth * 10)}</font>`,
          "html"
        );
        if (this.shopPricedAt > 0) {
          this.shopPricedAt /= this.shopNetValue;
          var perc = AccountValUtils.getNumberOrClamp(
            Math.round(this.shopPricedAt * 100),
            -999,
            999,
            "Very underpriced",
            "Very overpriced"
          );
          if (perc.match(/\d$/)) {
            perc += "%";
          }
          this.out.printLine(`Overall, the shop is ${perc} of mall`, "plain");
          this.out.printLine(
            "Disclaimer: Cheapest price being 100% can mean we're comparing prices against.. this shop.",
            "plain",
            AccountValColors.minorNote
          );
        }
        this.printMeat();
        if (this.exceededMax) {
          this.out.printLine(
            `<font color='${AccountValColors.minorNote}' title="The max natural price is currently set to ${AccountValUtils.getNumber(this.settings.maxNaturalPrice)}. (${this.settings.maxNaturalPrice == AccountValSettings.defaultMaxNaturalPrice ? "default" : `default is ${AccountValUtils.getNumber(AccountValSettings.defaultMaxNaturalPrice)}`})&#010;&#010;You can change this by using 'max=3b' as an arg.&#010;You can also set the property 'accountval_maxNaturalPrice' to a number (3b, 5,000,000, 3m1k, etc), this cap increases by 2b every year to account for meatflation">Some items were expensive and were marked as mall extinct. Hover for details.</font>`,
            "html"
          );
        }
        if (this.logic.priceResolver.doWarning()) {
          this.out.printLine(
            `<font color='${AccountValColors.attentionGrabbingWarning}'>Unfortunately I'm having issues resolving mall prices, the old database has gone down and my PR for the other source is on hold and waiting for approval. <u><a href='https://github.com/loathers/pricegun/pull/8'>https://github.com/loathers/pricegun/pull/8</a></u></font>`,
            "html"
          );
          this.out.printLine(
            `As such please bear with me that prices are effectively 'frozen'.`,
            "plain",
            AccountValColors.attentionGrabbingWarning
          );
        }
      } }, { key: "printMeat", value: function printMeat() {
        if (!this.settings.doTradeables) {
          return;
        }
        var meat = 0;
        var meatSources = [];
        if (this.settings.fetchInventory && provider().myMeat() != 0) {
          meat += provider().myMeat();
          meatSources.push(
            AccountValUtils.getNumber(provider().myMeat()) + " meat in inventory"
          );
        }
        if (this.settings.fetchCloset && provider().myClosetMeat() != 0) {
          meat += provider().myClosetMeat();
          meatSources.push(
            AccountValUtils.getNumber(provider().myClosetMeat()) + " meat in closet"
          );
        }
        if (this.settings.fetchStorage && provider().myStorageMeat() != 0) {
          meat += provider().myStorageMeat();
          meatSources.push(
            AccountValUtils.getNumber(provider().myStorageMeat()) + " meat in storage"
          );
        }
        if (meat > 0 && this.settings.playerId == 0) {
          this.out.printLine(
            "<font title='" + meatSources.join(", ") + "'>This doesn't include your " + AccountValUtils.getNumber(meat) + " meat!</font>",
            "html"
          );
        }
      } }]);
    })();
  }
});

// src/accountval.ts
var accountval_exports = {};
__export(accountval_exports, {
  run: () => run
});
function _slicedToArray9(r, e) {
  return _arrayWithHoles9(r) || _iterableToArrayLimit9(r, e) || _unsupportedIterableToArray15(r, e) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray15(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray15(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray15(r, a) : void 0;
  }
}
function _arrayLikeToArray15(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit9(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles9(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck19(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties19(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey19(o.key), o);
  }
}
function _createClass19(e, r, t) {
  return r && _defineProperties19(e.prototype, r), t && _defineProperties19(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey19(t) {
  var i = _toPrimitive19(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive19(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
function run(command) {
  initAccountValColors();
  var val = new AccountVal();
  if (val.load(command)) {
    AccValTiming.start("Run AccountVal");
    val.start();
    val.stop();
    AccValTiming.stop("Run AccountVal");
  }
  AccValTiming.printTracked("PRINT_JUST_ONCE");
}
var AccountVal;
var init_accountval = __esm({
  "src/accountval.ts"() {
    init_logic();
    init_settings();
    init_colors();
    init_timings();
    init_output();
    init_valuation();
    init_grimoireArgs();
    AccountVal = /* @__PURE__ */ (function() {
      function AccountVal2() {
        _classCallCheck19(this, AccountVal2);
      }
      return _createClass19(AccountVal2, [{ key: "getSettings", value: function getSettings() {
        return this.settings;
      } }, { key: "load", value: function load(command) {
        this.settings = new AccountValSettings();
        this.out = new ReportOutput(this.settings);
        if (command == "test") {
          this.runTests();
          return false;
        }
        if (command == null) {
          this.out.printLine(
            "To fine tune what we check, including to tradeables only.. Provide the parameter 'help' for more info",
            "plain",
            AccountValColors.helpfulStateInfo
          );
          command = "";
        } else if (command.toLowerCase().match(/^debugcolors=[^ ]+$/)) {
          var scheme = command.split("=")[1];
          showAccountvalColors(scheme);
          return false;
        }
        var unknown = this.settings.doSettings(command);
        if (this.settings.help) {
          Args.showHelp(this.settings, 0);
        }
        if (this.settings.showPresetFilters) {
          var meta = Args.getMetadata(this.settings);
          meta.traverse(
            (v, k) => {
              if ((v.setting ?? "").startsWith("accountval_preset_")) {
                Args.showArgHelp(meta, v, k);
              }
            },
            (g, k) => {
              if (k != "presetFilters") {
                return;
              }
              Args.showGroupHelp(meta, g, k);
            }
          );
        }
        if (this.settings.help || this.settings.showPresetFilters) {
          return;
        }
        if (unknown.length > 0) {
          unknown.forEach(
            (s2) => this.out.printLine(
              `<font color='${AccountValColors.attentionGrabbingWarning}'>${s2}</font>`,
              "html"
            )
          );
          return false;
        }
        return true;
      } }, { key: "start", value: function start() {
        AccValTiming.start("Construct Logic");
        this.logic = new AccountValLogic(this.settings);
        AccValTiming.stop("Construct Logic");
        AccValTiming.start("Load Logic Items");
        this.logic.loadItems();
        AccValTiming.stop("Load Logic Items");
        AccValTiming.start("Load Logic Prices");
        this.logic.doPricing();
        AccValTiming.stop("Load Logic Prices");
        AccValTiming.start("Start Valuation");
        var report = new ValuationReport(this.logic, this.settings, this.out);
        report.run();
        AccValTiming.stop("Start Valuation");
      } }, { key: "stop", value: function stop() {
        this.logic.priceResolver.stop();
        this.out.stop();
      } }, { key: "runTests", value: function runTests() {
        this.out.printLine("Tests Finished", "plain", "green");
      } }, { key: "runTest", value: function runTest(args, verify) {
        this.load(args);
        for (var _i = 0, _Object$entries = Object.entries(verify); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray9(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
          var setTo = this.settings[key];
          if (setTo == value) {
            continue;
          }
          this.out.printLine(
            `On '${args}', ${key} was not set to ${value} but instead ${setTo}`,
            "plain",
            "red"
          );
        }
      } }]);
    })();
  }
});

// src/kolmafia/index.ts
var index_exports = {};
__export(index_exports, {
  main: () => main
});
module.exports = __toCommonJS(index_exports);
init_apiSupplier();

// src/kolmafia/kolmafiaProvider.ts
var import_kolmafia = require("kolmafia");
var kolmafia = __toESM(require("kolmafia"));
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s2() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
var requiredRevision = 29360;
var mallSearchesDone = 0;
var KolmafiaProvider = /* @__PURE__ */ (function() {
  function KolmafiaProvider2() {
    _classCallCheck(this, KolmafiaProvider2);
  }
  return _createClass(KolmafiaProvider2, [{ key: "mallPrice", value: function mallPrice(item) {
    if (mallSearchesDone > 30) {
      (0, import_kolmafia.abort)(
        `We've done ${mallSearchesDone} actual mall searches and that is bad. Something went wrong somewhere.`
      );
    }
    var age = (0, import_kolmafia.historicalAge)(item);
    try {
      return (0, import_kolmafia.mallPrice)(item);
    } finally {
      if (age > (0, import_kolmafia.historicalAge)(item)) {
        mallSearchesDone++;
      }
    }
  } }, { key: "resolveAllMallPrices", value: function resolveAllMallPrices(previous) {
    if (previous != "not_loaded" && previous != "unsure") {
      throw new Error(`Illegal mall loaded state: ${previous}`);
    }
    if (previous == "not_loaded" && (0, import_kolmafia.gitExists)("loathers-mall-check")) {
      (0, import_kolmafia.cliExecute)("mallcheck");
      return "unsure";
    }
    (0, import_kolmafia.mallPrices)("allitems");
    return "loaded";
  } }, { key: "print", value: function print(message, color) {
    (0, import_kolmafia.print)(message, color);
  } }, { key: "printHtml", value: function printHtml(message) {
    (0, import_kolmafia.printHtml)(message);
  } }, { key: "abort", value: function abort(message) {
    (0, import_kolmafia.abort)(message);
  } }, { key: "visitUrl", value: function visitUrl(url) {
    return (0, import_kolmafia.visitUrl)(url);
  } }, { key: "checkOutdated", value: function checkOutdated() {
    if ((0, import_kolmafia.getRevision)() >= requiredRevision) {
      return;
    }
    this.printHtml(
      `<font color='red'>You need to update KoLMafia to the latest version. This script will not work properly on versions older than ${requiredRevision}.</font>`
    );
  } }, { key: "myId", value: function myId() {
    return (0, import_kolmafia.myId)();
  } }, { key: "getPlayerId", value: function getPlayerId(name) {
    return (0, import_kolmafia.getPlayerId)(name);
  } }, { key: "getPlayerName", value: function getPlayerName(id) {
    return (0, import_kolmafia.getPlayerName)(id);
  } }, { key: "myMeat", value: function myMeat() {
    return (0, import_kolmafia.myMeat)();
  } }, { key: "myClosetMeat", value: function myClosetMeat() {
    return (0, import_kolmafia.myClosetMeat)();
  } }, { key: "myStorageMeat", value: function myStorageMeat() {
    return (0, import_kolmafia.myStorageMeat)();
  } }, { key: "mySessionMeat", value: function mySessionMeat() {
    return (0, import_kolmafia.mySessionMeat)();
  } }, { key: "myFullness", value: function myFullness() {
    return (0, import_kolmafia.myFullness)();
  } }, { key: "fullnessLimit", value: function fullnessLimit() {
    return (0, import_kolmafia.fullnessLimit)();
  } }, { key: "myInebriety", value: function myInebriety() {
    return (0, import_kolmafia.myInebriety)();
  } }, { key: "inebrietyLimit", value: function inebrietyLimit() {
    return (0, import_kolmafia.inebrietyLimit)();
  } }, { key: "mySpleenUse", value: function mySpleenUse() {
    return (0, import_kolmafia.mySpleenUse)();
  } }, { key: "spleenLimit", value: function spleenLimit() {
    return (0, import_kolmafia.spleenLimit)();
  } }, { key: "myLevel", value: function myLevel() {
    return (0, import_kolmafia.myLevel)();
  } }, { key: "isDarkMode", value: function isDarkMode() {
    return (0, import_kolmafia.isDarkMode)();
  } }, { key: "toItem", value: function toItem(val) {
    if (typeof val == "string") {
      return import_kolmafia.Item.get(val);
    }
    return (0, import_kolmafia.toItem)(val);
  } }, { key: "toFamiliar", value: function toFamiliar(val) {
    if (typeof val == "string") {
      return import_kolmafia.Familiar.get(val);
    }
    return (0, import_kolmafia.toFamiliar)(val);
  } }, { key: "entityEncode", value: function entityEncode(val) {
    return (0, import_kolmafia.entityEncode)(val);
  } }, { key: "entityDecode", value: function entityDecode(val) {
    return (0, import_kolmafia.entityDecode)(val);
  } }, { key: "storeCache", value: function storeCache(key, data, dataType) {
    if (dataType == "large_persist") {
      (0, import_kolmafia.bufferToFile)(data, key);
    } else if (dataType == "small_persist") {
      (0, import_kolmafia.setProperty)(key, data);
    } else {
      import_kolmafia.sessionStorage.setItem(key, data);
    }
  } }, { key: "retrieveCache", value: function retrieveCache(key, dataType) {
    if (dataType == "large_persist") {
      return (0, import_kolmafia.fileToBuffer)(key);
    } else if (dataType == "small_persist") {
      return (0, import_kolmafia.getProperty)(key);
    }
    return import_kolmafia.sessionStorage.getItem(key) ?? "";
  } }, { key: "autosellPrice", value: function autosellPrice(item) {
    return (0, import_kolmafia.autosellPrice)(item);
  } }, { key: "shopPrice", value: function shopPrice(item) {
    return (0, import_kolmafia.shopPrice)(item);
  } }, { key: "sellPrice", value: function sellPrice(coinmaster, item) {
    return (0, import_kolmafia.sellPrice)(coinmaster, item);
  } }, { key: "historicalPrice", value: function historicalPrice(item) {
    return (0, import_kolmafia.historicalPrice)(item);
  } }, { key: "historicalAge", value: function historicalAge(item) {
    return (0, import_kolmafia.historicalAge)(item);
  } }, { key: "equippedAmount", value: function equippedAmount(item) {
    return (0, import_kolmafia.equippedAmount)(item);
  } }, { key: "familiarEquippedEquipment", value: function familiarEquippedEquipment(fam) {
    return (0, import_kolmafia.familiarEquippedEquipment)(fam);
  } }, { key: "itemsToMap", value: function itemsToMap(items2) {
    var map2 = /* @__PURE__ */ new Map();
    for (var _i = 0, _Object$entries = Object.entries(items2); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
      map2.set(import_kolmafia.Item.get(key), value);
    }
    return map2;
  } }, { key: "getInventory", value: function getInventory() {
    return this.itemsToMap((0, import_kolmafia.getInventory)());
  } }, { key: "getCloset", value: function getCloset() {
    return this.itemsToMap((0, import_kolmafia.getCloset)());
  } }, { key: "getStorage", value: function getStorage() {
    var map2 = this.itemsToMap((0, import_kolmafia.getStorage)());
    for (var _i2 = 0, _arr = [(0, import_kolmafia.getFreePulls)(), (0, import_kolmafia.getNoPulls)()]; _i2 < _arr.length; _i2++) {
      var items2 = _arr[_i2];
      var m = this.itemsToMap(items2);
      var _iterator = _createForOfIteratorHelper(
        m
      ), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray(_step.value, 2), item = _step$value[0], amount = _step$value[1];
          map2.set(item, (map2.get(item) ?? 0) + amount);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return map2;
  } }, { key: "getStash", value: function getStash() {
    return this.itemsToMap((0, import_kolmafia.getStash)());
  } }, { key: "getDisplay", value: function getDisplay() {
    return this.itemsToMap((0, import_kolmafia.getDisplay)());
  } }, { key: "getShop", value: function getShop() {
    return this.itemsToMap((0, import_kolmafia.getShop)());
  } }, { key: "mySessionItems", value: function mySessionItems() {
    return this.itemsToMap((0, import_kolmafia.mySessionItems)());
  } }, { key: "getCampground", value: function getCampground() {
    return this.itemsToMap((0, import_kolmafia.getCampground)());
  } }, { key: "myFamiliar", value: function myFamiliar() {
    return (0, import_kolmafia.myFamiliar)();
  } }, { key: "haveFamiliar", value: function haveFamiliar(fam) {
    return (0, import_kolmafia.haveFamiliar)(fam);
  } }, { key: "haveSkill", value: function haveSkill(skill) {
    return (0, import_kolmafia.haveSkill)(skill);
  } }, { key: "getPermedSkills", value: function getPermedSkills() {
    return (0, import_kolmafia.getPermedSkills)();
  } }, { key: "associatedSkill", value: function associatedSkill(item) {
    return (0, import_kolmafia.skillModifier)(item, "Skill");
  } }, { key: "myGardenType", value: function myGardenType() {
    return (0, import_kolmafia.myGardenType)();
  } }, { key: "getWorkshed", value: function getWorkshed() {
    return (0, import_kolmafia.getWorkshed)();
  } }, { key: "getFoldables", value: function getFoldables(item, type) {
    var keys = Object.keys((0, import_kolmafia.getRelated)(item, type));
    if (keys.length <= 1) {
      return [];
    }
    return keys.map((s2) => import_kolmafia.Item.get(s2));
  } }, { key: "allNormalOutfits", value: function allNormalOutfits() {
    return (0, import_kolmafia.allNormalOutfits)();
  } }, { key: "itemType", value: function itemType(item) {
    return (0, import_kolmafia.itemType)(item);
  } }, { key: "getItem", value: function getItem(name) {
    return import_kolmafia.Item.get(name);
  } }, { key: "allItems", value: function allItems() {
    return import_kolmafia.Item.all();
  } }, { key: "noItem", value: function noItem() {
    return import_kolmafia.Item.none;
  } }, { key: "allFamiliars", value: function allFamiliars() {
    return import_kolmafia.Familiar.all();
  } }, { key: "getSkill", value: function getSkill(name) {
    return import_kolmafia.Skill.get(name);
  } }, { key: "allSkills", value: function allSkills() {
    return import_kolmafia.Skill.all();
  } }, { key: "noSkill", value: function noSkill() {
    return import_kolmafia.Skill.none;
  } }, { key: "noSlot", value: function noSlot() {
    return import_kolmafia.Slot.none;
  } }, { key: "toSlot", value: function toSlot(item) {
    return (0, import_kolmafia.toSlot)(item);
  } }, { key: "evalJsFilter", value: function evalJsFilter(js) {
    return new Function("kolmafia", `with (kolmafia) { return (${js})}`)(
      kolmafia
    );
  } }]);
})();

// src/kolmafia/index.ts
setProvider(new KolmafiaProvider());
var _require = (init_accountval(), __toCommonJS(accountval_exports));
var run2 = _require.run;
function main(command) {
  run2(command);
}
