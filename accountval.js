var accountval = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
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
  var KoLItem, KoLFamiliar, KoLSlot, KoLSkill;
  var init_supplierTypings = __esm({
    "src/api/supplierTypings.ts"() {
      init_apiSupplier();
      KoLItem = class {
        static get(key) {
          return provider().getItem(key);
        }
        static get none() {
          return provider().noItem();
        }
        static all() {
          return provider().allItems();
        }
      };
      KoLFamiliar = class {
        static all() {
          return provider().allFamiliars();
        }
      };
      KoLSlot = class {
        static get none() {
          return provider().noSlot();
        }
      };
      KoLSkill = class {
        static all() {
          return provider().allSkills();
        }
        static get none() {
          return provider().noSkill();
        }
        static get(key) {
          return provider().getSkill(key);
        }
      };
    }
  });

  // src/utils/colors.ts
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
    return ["default", ...map.keys()];
  }
  function showAccountvalColors(name) {
    if (!map.has(name)) {
      provider().print("Can't find any colors by that name", "red");
      return;
    }
    const colors = map.get(name);
    for (const [k, v] of Object.entries(colors)) {
      provider().printHtml(`<font color='${v}'>${k}</font>`);
    }
  }
  function initAccountValColors() {
    const def = provider().isDarkMode() ? "dark" : "default";
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

  // src/utils/utils.ts
  var AccountValUtils;
  var init_utils = __esm({
    "src/utils/utils.ts"() {
      AccountValUtils = class {
        static getNumber(number, trimAt = 2) {
          const str = number.toString().split(".");
          if (str.length > 1 && str[1].length > trimAt) {
            str[1] = str[1].substring(0, trimAt);
          }
          str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return str.join(".");
        }
        static getNumberOrClamp(number, min, max, minStr, maxStr) {
          if (number > max) {
            return maxStr;
          }
          if (number < min) {
            return minStr;
          }
          return this.getNumber(number);
        }
        static toBoolean(string) {
          return ["true", "yes", "1"].includes(string.toLowerCase());
        }
        static toFloat(string) {
          return parseFloat(string.replaceAll(",", ""));
        }
        static toInt(string) {
          return parseInt(string.replaceAll(",", ""));
        }
      };
    }
  });

  // src/resolvers/pages.ts
  var StoreItem, PageResolver;
  var init_pages = __esm({
    "src/resolvers/pages.ts"() {
      init_apiSupplier();
      init_supplierTypings();
      init_colors();
      init_utils();
      StoreItem = class {
        item;
        amount;
        limit;
        price;
      };
      PageResolver = class {
        getSnapshot(username) {
          const items2 = new Map(
            KoLItem.all().map((i) => {
              let name = i.name;
              while (name.match(/<\/?i>/)) {
                name = name.replace(/<\/?i>/, "");
              }
              return [provider().entityDecode(name).toLowerCase(), i];
            })
          );
          const skills = new Map(
            KoLSkill.all().map((s2) => [
              provider().entityDecode(s2.name).toLowerCase(),
              s2
            ])
          );
          const fams = new Map(
            KoLFamiliar.all().map((f) => [f.toString().toLowerCase(), f])
          );
          const ignore = [...fams.values()].map(
            (f) => f.hatchling.toString().toLowerCase()
          );
          ignore.push(
            ...Object.values(provider().allNormalOutfits()).map(
              (s2) => s2.toLowerCase()
            )
          );
          ignore.push("miming regalia");
          let page = provider().visitUrl(
            "https://api.aventuristo.net/av-snapshot?u=" + username
          );
          if (!page.includes("<p>Snapshot for <b>")) {
            return [];
          }
          page = page.substring(0, page.indexOf(`id='a7'>Discoveries</h1>`));
          const tdRegex = /<td(.*?)<\/td>/m;
          const linkRegex = /class='(perm|hcperm|fam_run_90|fam_have|fam_run_100)'.*?<a href="[^"]+" rel="noreferrer">(?:.*?>)?([^>]*?)<\/a>/;
          let match;
          const has = [];
          while ((match = page.match(tdRegex)) != null) {
            page = page.substring(page.indexOf(match[0]) + match[0].length);
            const link = match[1].match(linkRegex);
            if (link == null) {
              continue;
            }
            let name = provider().entityDecode(link[2]).toLowerCase();
            if (ignore.includes(name)) {
              continue;
            }
            const type = link[1];
            const isFam = !type.includes("perm");
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
            let count = 1;
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
        }
        getFamiliars(userId) {
          let page = provider().visitUrl("showfamiliars.php?who=" + userId);
          const regex = /onClick='fam\((\d+)\)'/;
          let match;
          const familiars = [];
          while ((match = page.match(regex)) != null) {
            page = page.replace(match[0], "");
            familiars.push(provider().toFamiliar(AccountValUtils.toInt(match[1])));
          }
          return familiars;
        }
        getStore(userId) {
          const items2 = [];
          const page = provider().visitUrl("mallstore.php?whichstore=" + userId);
          for (const s2 of page.split("<tr>")) {
            const match = s2.match(
              /selecteditem=(\d+).+?<b>.+?<\/b> \(([\d,]+)\) +(?:\(Limit ([\d,]+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/
            );
            if (match == null) {
              continue;
            }
            const item = new StoreItem();
            item.item = KoLItem.get(AccountValUtils.toInt(match[1]));
            item.amount = AccountValUtils.toInt(match[2]);
            item.limit = match[3] == null ? 0 : AccountValUtils.toInt(match[3]);
            item.price = AccountValUtils.toInt(match[4]);
            items2.push(item);
          }
          return items2;
        }
        getDisplaycase(userId) {
          const map2 = /* @__PURE__ */ new Map();
          const descs = new Map(
            KoLItem.all().map((i) => [i.descid, i])
          );
          const page = provider().visitUrl("displaycollection.php?who=" + userId);
          let lastShelf;
          const itemRegex = /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/;
          const shelfRegex = /<font color=white>([^<]+)<\/font>/;
          for (const s2 of page.split("<tr>")) {
            const shelfMatch = s2.match(shelfRegex);
            if (shelfMatch != null) {
              lastShelf = provider().entityDecode(shelfMatch[1]);
            }
            const match = s2.match(itemRegex);
            if (match == null) {
              continue;
            }
            const item = descs.get(match[1]);
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
          return map2;
        }
      };
    }
  });

  // src/models/typings.ts
  var ValItem, ItemPrice;
  var init_typings = __esm({
    "src/models/typings.ts"() {
      ValItem = class {
        name;
        pluralName;
        category;
        actualItem;
        tradeableItem;
        bound;
        shopWorth;
        worthMultiplier = 1;
        snapshotSource;
        sortValue;
        constructor(actualItem, item = actualItem, name = item.name, pluralName = item.plural, bound, snapshotSource) {
          this.actualItem = actualItem;
          this.name = name;
          this.pluralName = pluralName;
          this.tradeableItem = item;
          this.bound = bound;
          this.snapshotSource = snapshotSource;
          if (this.bound == null && !item.tradeable) {
            this.bound = 1 /* NO_TRADE */;
          }
        }
        withCategory(category) {
          this.category = category;
          return this;
        }
        getBound() {
          if (this.bound == 0 /* BOUND */) {
            return "Bound";
          }
          if (this.bound == 2 /* FAMILIAR */) {
            return "Familiar";
          }
          if (this.bound == 3 /* IN_USE */) {
            return "In Use";
          }
          if (this.bound == 1 /* NO_TRADE */) {
            return "Untradeable";
          }
          return null;
        }
        isBound() {
          return this.bound == 0 /* BOUND */ || this.bound == 2 /* FAMILIAR */;
        }
        isTradeable() {
          return this.bound == null || this.bound == 3 /* IN_USE */ || this.bound == 4 /* SHOP_WORTH */;
        }
      };
      ItemPrice = class {
        item;
        price;
        price2;
        accuracy;
        daysOutdated;
        volume;
        constructor(item, price, accuracy, daysOutdated, volume = -1, price2 = -1) {
          this.item = item;
          this.price = price;
          this.accuracy = accuracy;
          this.daysOutdated = daysOutdated;
          this.volume = volume;
          this.price2 = price2;
        }
      };
    }
  });

  // src/resolvers/coinmaster.ts
  var CoinmasterResolver;
  var init_coinmaster = __esm({
    "src/resolvers/coinmaster.ts"() {
      init_apiSupplier();
      init_supplierTypings();
      CoinmasterResolver = class {
        items = [];
        prices;
        constructor(prices) {
          this.prices = prices;
        }
        load() {
          for (const item of KoLItem.all()) {
            if (!item.tradeable || item.gift || item.quest || item.seller == null) {
              continue;
            }
            const token = item.seller.item;
            if (token == KoLItem.none) {
              continue;
            }
            const price = provider().sellPrice(item.seller, item);
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
          this.prices.bulkLoad(this.items.map((i) => i.item));
        }
        getHighestCoinmaster(currency) {
          let highest = null;
          for (const item of this.items) {
            if (item.currency != currency) {
              continue;
            }
            if (item.price == null) {
              const itemPrice = this.prices.itemPrice(item.item);
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
          return highest;
        }
      };
    }
  });

  // data/accountval_binds.txt
  var accountval_binds_default;
  var init_accountval_binds = __esm({
    "data/accountval_binds.txt"() {
      accountval_binds_default = "# Original data taken from https://github.com/soolar/accountval.ash\n# Item Containers! Start with i\ni	packet of mayfly bait	mayfly bait necklace\ni	Clan VIP Lounge invitation	Clan VIP Lounge key\ni	Make-Your-Own-Vampire-Fangs kit	plastic vampire fangs\ni	Folder Holder	over-the-shoulder Folder Holder\ni	can of Rain-Doh	empty Rain-Doh can\ni	Discontent&trade; Winter Garden Catalog	packet of winter seeds\ni	Ed the Undying exhibit crate	The Crown of Ed the Undying\ni	Pack of Every Card	Deck of Every Card\ni	DIY protonic accelerator kit	protonic accelerator pack\ni	Dear Past Self Package	Time-Spinner\ni	Granny Tood's Thanksgarden Catalog	packet of thanksgarden seeds\ni	suspicious package	Kremlin's Greatest Briefcase\ni	LI-11 Motor Pool voucher	Asdon Martin keyfob (on ring)\ni	Grumpy Bumpkin's Pumpkin Seed Catalog	packet of pumpkin seeds\ni	Mint Salton Pepper's Peppermint Seed Catalog	Peppermint Pip Packet\ni	Pete & Jackie's Dragon Tooth Emporium Catalog	packet of dragon's teeth\ni	Pocket Meteor Guide	Pocket Meteor Guide (well-thumbed)\ni	corked genie bottle	genie bottle\ni	pantogram	portable pantogram\ni	locked mumming trunk	mumming trunk\ni	January's Garbage Tote (unopened)	January's Garbage Tote\ni	Pok&eacute;fam Guide to Capturing All of Them	packet of tall grass seeds\ni	SongBoom&trade; BoomBox Box	SongBoom&trade; BoomBox\ni	Bastille Battalion control rig crate	Bastille Battalion control rig\ni	latte lovers club card	latte lovers member's mug\ni	Kramco Industries packing carton	Kramco Sausage-o-Matic&trade;\ni	mint condition Lil' Doctor&trade; bag	Lil' Doctor&trade; bag\ni	vampyric cloake pattern	vampyric cloake\ni	Fourth of May Cosplay Saber kit	Fourth of May Cosplay Saber\ni	rune-strewn spoon cocoon	hewn moon-rune spoon\ni	Beach Comb Box	Beach Comb\ni	Unopened Eight Days a Week Pill Keeper	Eight Days a Week Pill Keeper\ni	unopened diabolic pizza cube box	diabolic pizza cube\ni	unopened Bird-a-Day calendar	Bird-a-Day calendar\ni	mint-in-box Powerful Glove	Powerful Glove\ni	Better Shrooms and Gardens catalog	packet of mushroom spores\ni	Guzzlr application	Guzzlr tablet\ni	bag of Iunion stones	Iunion Crown\ni	packaged SpinMaster&trade; lathe	SpinMaster&trade; lathe\ni	Bagged Cargo Cultist Shorts	Cargo Cultist Shorts\ni	Comprehensive Cartographic Compendium	Comprehensive Cartographic Compendium (well-read)\ni	packaged knock-off retro superhero cape	unwrapped knock-off retro superhero cape\ni	packaged miniature crystal ball	miniature crystal ball\ni	emotion chip	spinal-fluid-covered emotion chip\ni	power seed	potted power plant\ni	packaged backup camera	backup camera\ni	packaged familiar scrapbook	familiar scrapbook\ni	packaged industrial fire extinguisher	industrial fire extinguisher\ni	Packaged Daylight Shavings Helmet	Daylight Shavings Helmet\ni	Packaged cold medicine cabinet	Cold medicine cabinet\ni	box o' ghosts	gregarious ghostling\ni	Gordon Beer's Beer Garden Catalog	Packet of beer seeds\ni	Mint condition magnifying glass	cursed magnifying glass\ni	Antique pair of blue jeans	Ellsbury's journal (used)\ni	warehouse key	mime army insignia (cryonics)\ni	warehouse key	mime army insignia (morale)\ni	warehouse key	mime army insignia (psychological warfare)\ni	warehouse key	mime army insignia (pyrotechnics)\ni	warehouse key	mime army insignia (sanitation)\ni	warehouse key	mime army insignia (espionage)\ni	warehouse key	mime army insignia (infantry)\ni	warehouse key	mime army insignia (intelligence)\ni	warehouse key	mime army infiltration glove\ni	warehouse key	mime army challenge coin\ni	warehouse key	mime army shotglass\ni	warehouse key	miming corduroys\ni	warehouse key	miming beret\ni	warehouse key	miming gloves\ni	warehouse key	miming boots\ni	warehouse key	miming shirt\ni	combat lover's locket lockbox	combat lover's locket\ni	undamaged Unbreakable Umbrella	Unbreakable umbrella\ni	packaged June cleaver	June cleaver\ni	designer sweatpants (new old stock)	Designer sweatpants\ni	unopened tiny stillsuit	tiny stillsuit\ni	packaged Jurassic Parka	Jurassic Parka\ni	packaged model train set	model train set\ni	ChibiBuddy\u2122 (off)	ChibiBuddy\u2122 (on)\ni	Rock Garden Guide	packet of rock seeds\ni	S.I.T. Course Voucher	S.I.T. Course Completion Certificate\ni	Closed-circuit phone system	Closed-circuit pay phone\ni	Cursed monkey glove	cursed monkey's paw\ni	shrink-wrapped Cincho de Mayo	Cincho de Mayo\ni	shrink-wrapped 2002 Mr. Store Catalog	2002 Mr. Store Catalog\ni	boxed august scepter	august scepter\ni	book of facts	book of facts (dog-eared)\ni	crated wardrobe-o-matic	wardrobe-o-matic\ni	wrapped candy cane sword cane	candy cane sword cane\ni	in-the-box spring shoes	spring shoes\ni	packaged Everfull Dart Holster	Everfull Dart Holster\ni	Boxed Apriling band helmet	Apriling band helmet\ni	boxed Mayam Calendar	Mayam Calendar\ni	packaged Roman Candelabra	Roman Candelabra\ni	untorn tearaway pants package	tearaway pants\ni	Boxed Sept-Ember Censer	Sept-Ember Censer\ni	boxed bat wings	bat wings\ni	Sealed TakerSpace letter of Marque	TakerSpace letter of Marque\ni	McHugeLarge deluxe ski set	McHugeLarge duffel bag\ni	CyberRealm keycode	server room key\ni	eldritch tincture	eldritch tincture (depleted)\ni	new-in-box toy Cupid bow	toy Cupid bow\ni	assemble-it-yourself Leprecondo	Leprecondo\ni	Packaged April Shower Thoughts Calendar	April Shower Thoughts shield\ni	Unpeeled Peridot of Peril	Peridot of Peril\ni	packaged prismatic beret	prismatic beret\ni	M\xF6bius ring box	M\xF6bius ring\ni	packaged Monodent of the Sea	Monodent of the Sea\ni	Lab-grown blood cubic zirconia	blood cubic zirconia\ni	shrunken head in a duffel bag	shrunken head\ni	seal-clubbing club loot box	legendary seal-clubbing club\ni	discreetly-wrapped Eternity Codpiece	The Eternity Codpiece\ni	boxed Heartstone	Heartstone\ni	Boxed Archaeologist's Spade	Archaeologist's Spade\ni	wrapped Baseball Diamond	Baseball Diamond\ni	Pasta wand loot box	legendary pasta wand\ni	shrink-wrapped Cup of 13s	Cup of 13s\ni	Allied Radio Backpack Pack	Allied Radio Backpack\ni	Packaged Portable Laughing Stock	Portable Laughing Stock\ni	black rosebud	black garden rose\n\n\n\n\n# Bookshelf stuff! Start with b\nb	Tome of Snowcone Summoning	Summon Snowcones\nb	Scratch 'n' Sniff Sticker Tome	Summon Stickers\nb	Tome of Sugar Shummoning	Summon Sugar Sheets\nb	Tome of Clip Art	Summon Clip Art\nb	Tome of Rad Libs	Summon Rad Libs\nb	The Smith's Tome	Summon Smithsness\nb	McPhee's Grimoire of Hilarious Object Summoning	Summon Hilarious Objects\nb	Sp'n-Zor's Grimoire of &quot;Tasteful&quot; Gifts	Summon Tasteful Items\nb	Sorcerers of the Shore Grimoire	Summon Alice's Army Cards\nb	Thinknerd's Grimoire of Geeky Gifts	Summon Geeky Gifts\nb	Libram of Candy Heart Summoning	Summon Candy Heart\nb	Libram of Divine Favors	Summon Party Favor\nb	Libram of Love Songs	Summon Love Song\nb	Libram of BRICKOs	Summon BRICKOs\nb	Gygaxian Libram	Summon Dice\nb	Libram of Resolutions	Summon Resolutions\nb	Libram of Pulled Taffy	Summon Taffy\nb	The Confiscator's Grimoire	Summon Confiscated Things\n\n\n\n# Property based detection! Start with p\np	airplane charter: Spring Break Beach	sleazeAirportAlways&!_sleazeAirportToday\np	airplane charter: Conspiracy Island	spookyAirportAlways&!_spookyAirportToday\np	airplane charter: Dinseylandfill	stenchAirportAlways&!_stenchAirportToday\np	airplane charter: That 70s Volcano	hotAirportAlways&!_hotAirportToday\np	airplane charter: The Glaciest	coldAirportAlways&!_coldAirportToday\np	Chateau Mantegna room key	chateauAvailable\np	bottle of lovebug pheromones	lovebugsUnlocked\np	shrine to the Barrel god	barrelShrineUnlocked\np	X-32-F snowman crate	snojoAvailable\np	LT&T telegraph office deed	telegraphOfficeAvailable\np	detective school application	hasDetectiveSchool\np	Build-a-City Gingerbread kit	gingerbreadCityAvailable&!_gingerbreadCityToday\np	heart-shaped crate	loveTunnelAvailable&!_loveTunnelUsed\np	Spacegate access badge	spacegateAlways&!_spacegateToday\np	FantasyRealm membership packet	frAlways&!_frToday\np	Horsery contract	horseryAvailable\np	Neverending Party invitation envelope	neverendingPartyAlways&!_neverendingPartyToday\np	voter registration form	voteAlways&!_voteToday\np	Boxing Day care package	daycareOpen&!_daycareToday\np	PirateRealm membership packet	prAlways&!_prToday\np	Distant Woods Getaway Brochure	getawayCampsiteUnlocked\np	Undrilled cosmic bowling ball	hasCosmicBowlingBall\np	MayDay\u2122 contract	hasMaydayContract\np	boxed autumn-aton	hasAutumnaton\np	deed to Oliver's Place	ownsSpeakeasy\np	Interesting Coin Inheritance Letter	hasInterestingCoin\np	Order of the Green Thumb Order Form	ownsFloristFriar\n\n\n\n# Eudoras! Start with e\ne	My Own Pen Pal kit	Pen Pal\ne	GameInformPowerDailyPro subscription card	GameInformPowerDailyPro Magazine\ne	Xi Receiver Unit	Xi Receiver Unit\ne	New-You Club Membership Form	New-You Club\ne	Our Daily Candles\u2122 order form	Our Daily Candles\ne	Black and White Apron Enrollment Form	Black & White Apron\n\n\n\n# visit_url contains... Start with v\n\n\n\n# eval(function) => boolean! Starts with s for script\n\n\n\n# campground items! Starts with c\nc	Haunted Doghouse\nc	Witchess Set\nc	Source terminal\nc	potted tea tree\nc	A Guide to Burning Leaves\n\n\n\n# Gardens\ng	packet of pumpkin seeds	pumpkin	\ng	Peppermint Pip Packet	peppermint\ng	packet of dragon's teeth	skeleton\ng	Packet of beer seeds	beer\ng	packet of winter seeds	winter\ng	packet of thanksgarden seeds	thanksgarden\ng	packet of tall grass seeds	grass\ng	packet of mushroom spores	mushroom\ng	packet of rock seeds	rock\ng	black garden rose	black_rose\n\n\n# Items that are dependent on the value of another as they're no-trade\n# Item | Check Against | X of our item = 1 of that item\nt	ChibiBuddy\u2122 (on)	ChibiBuddy\u2122 (off)	1\nt	distilled resin	inflammable leaf	50\nt	Rethinking Candy	Knucklebone	2750\n\n\n# Items that are a coinmaster currency, and is dynamically priced because there's no solid metric\n# The price is resolved at runtime\nt	fat loot token\nt	Cop dollar\nt	Driplet\nt	Chroner\nt	Freddy Kruegerand\nt	Guzzlrbuck\nt	Beach Buck\nt	Volcoino\nt	FunFunds\u2122\nt	Coinspiracy\nt	Wal-Mart gift certificate\nt	Rubee\u2122\nt	buffalo dime\nt	Spacegate Research\n\n# Items that are best valued at a hardcoded value, although you may not get that value...\nh	meat paste	10\nh	meat stack	100\nh	nest egg	150\nh	Dungeon dragon chest	500\nh	Meat globe	700\nh	dense meat stack	1000\nh	Loose Meats	2300\nh	chest of the Bonerdagon	3000\nh	Duct tape wallet	3050\nh	Stock Certificate	5000\nh	Envelope full of Meat	30000\nh	Discount Telescope Warehouse gift certificate	100000";
    }
  });

  // src/resolvers/items.ts
  var AccValStuff, ItemResolver;
  var init_items = __esm({
    "src/resolvers/items.ts"() {
      init_apiSupplier();
      init_supplierTypings();
      init_typings();
      init_colors();
      init_coinmaster();
      init_accountval_binds();
      init_utils();
      AccValStuff = class {
        itemType;
        actualItem;
        skill;
        untradeableItem;
        garden;
        script;
        userSetting;
        visitUrlLink;
        visitUrlIncludes;
        correspondence;
        currencyAmount;
      };
      ItemResolver = class {
        visitCache = /* @__PURE__ */ new Map();
        accValStuff;
        accountValCache = /* @__PURE__ */ new Map();
        accountValVisitCachePropName = "_accountValVisitCache";
        prices;
        constructor(prices) {
          this.prices = prices;
          this.accValStuff = this.loadAccountValStuff();
        }
        loadCache() {
          const prop = provider().retrieveCache(this.accountValVisitCachePropName, "transient").split(",");
          for (const p of prop) {
            if (!p.includes(":")) {
              continue;
            }
            const spl = p.split(":");
            this.accountValCache.set(
              KoLItem.get(AccountValUtils.toInt(spl[0])),
              spl[1].startsWith("t")
            );
          }
        }
        saveCache() {
          const values = [];
          this.accountValCache.forEach(
            (val2, key) => values.push(`${key.id}:${val2 ? "t" : "f"}`)
          );
          values.sort((v1, v2) => v1.localeCompare(v2));
          const val = values.join(",");
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
        }
        getUrledItems() {
          const items = [];
          const origSize = this.accountValCache.size;
          for (const s of this.accValStuff) {
            if (s.itemType == 1 /* BOOK */) {
              if (provider().haveSkill(s.skill)) {
                items.push([s.actualItem, 0 /* BOUND */]);
              }
            } else if (s.itemType == 3 /* EUDORA */) {
              if (this.visitCheck(
                s.actualItem,
                "account.php?tab=correspondence",
                s.correspondence
              )) {
                items.push([s.actualItem, 0 /* BOUND */]);
              }
            } else if (s.itemType == 2 /* PROPERTY */) {
              if (this.testProperty(s.userSetting)) {
                items.push([s.actualItem, 0 /* BOUND */]);
              }
            } else if (s.itemType == 5 /* VISIT_URL_CHECK */) {
              if (this.visitCheck(s.actualItem, s.visitUrlLink, s.visitUrlIncludes)) {
                items.push([s.actualItem, 0 /* BOUND */]);
              }
            } else if (s.itemType == 4 /* GARDEN */) {
              if (provider().myGardenType() == s.garden) {
                items.push([s.actualItem, 3 /* IN_USE */]);
              }
            } else if (s.itemType == 6 /* SKILL */) {
              if (provider().getPermedSkills()[s.skill.name]) {
                items.push([s.actualItem, 0 /* BOUND */]);
              }
            } else if (s.itemType == 8 /* CAMPGROUND */) {
              if (provider().getCampground().has(s.actualItem)) {
                items.push([s.actualItem, 0 /* BOUND */]);
              }
            } else if (s.itemType == 9 /* SCRIPT */) {
              if (eval(s.script)) {
                items.push([s.actualItem, 0 /* BOUND */]);
              }
            }
          }
          if (origSize != this.accountValCache.size) {
            this.saveCache();
          }
          return items;
        }
        testProperty(property) {
          let result = true;
          for (const prop of property.split("&")) {
            const isTrue = AccountValUtils.toBoolean(
              provider().retrieveCache(prop.replace("!", ""), "small_persist")
            );
            const isNotNegated = !prop.includes("!");
            result = result && isTrue == isNotNegated;
          }
          return result;
        }
        addItem(ownedItems, actualItem, item, name, plural, bound, count = 1, worthMultiplier = 1) {
          const v = new ValItem(actualItem, item, name, plural, bound);
          v.worthMultiplier = worthMultiplier;
          ownedItems.set(v, (ownedItems.get(v) | 0) + count);
        }
        resolveBoundToTradeables(copy, ownedItems, resolve) {
          let coinmaster;
          for (const s2 of this.accValStuff) {
            if (!resolve.includes(s2.itemType)) {
              continue;
            }
            try {
              if (s2.itemType == 7 /* CURRENCY */ && s2.untradeableItem == null) {
                if (coinmaster == null) {
                  coinmaster = new CoinmasterResolver(this.prices);
                  coinmaster.load();
                }
                const item2 = coinmaster.getHighestCoinmaster(s2.actualItem);
                if (item2 == null) {
                  continue;
                }
                s2.currencyAmount = item2.currencyCost;
                s2.untradeableItem = item2.currency;
                s2.actualItem = item2.item;
              }
              const item = s2.untradeableItem;
              const pair = copy[item.name];
              if (pair == null) {
                continue;
              }
              const v = pair[0];
              this.addItem(
                ownedItems,
                item,
                s2.actualItem,
                item.name,
                item.plural,
                v.bound == null || v.bound == 1 /* NO_TRADE */ || v.bound == 3 /* IN_USE */ ? s2.itemType == 0 /* UNTRADEABLE_ITEM */ ? 0 /* BOUND */ : 1 /* NO_TRADE */ : v.bound,
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
        }
        resolveFamiliars(familiars, ownedItems) {
          for (const fam of familiars) {
            if (!fam.hatchling.tradeable) {
              continue;
            }
            this.addItem(
              ownedItems,
              fam.hatchling,
              fam.hatchling,
              fam.toString(),
              fam.toString(),
              2 /* FAMILIAR */
            );
          }
        }
        resolveFamiliarItems() {
          const famEquipped = /* @__PURE__ */ new Map();
          for (const fam of KoLFamiliar.all()) {
            if (!provider().haveFamiliar(fam) || provider().myFamiliar() == fam) {
              continue;
            }
            const item = provider().familiarEquippedEquipment(fam);
            if (item == null || item == KoLItem.none) {
              continue;
            }
            famEquipped.set(item, (famEquipped.get(item) | 0) + 1);
          }
          return famEquipped;
        }
        visitCheck(item, url, find) {
          if (this.accountValCache.has(item)) {
            return this.accountValCache.get(item);
          }
          let page = this.visitCache.get(url);
          if (page == null) {
            page = provider().visitUrl(url);
            this.visitCache.set(url, page);
          }
          const result = page.includes(find);
          this.accountValCache.set(item, result);
          return result;
        }
        loadAccountValStuff() {
          const buffer = accountval_binds_default;
          const values = [];
          loop: for (const line of buffer.split(/(\n|\r)+/)) {
            if (line.startsWith("#") || line.length == 0) {
              continue;
            }
            const spl = line.split("	");
            if (spl.length < 2) {
              continue;
            }
            const v = new AccValStuff();
            try {
              v.actualItem = KoLItem.get(spl[1]);
            } catch (e) {
              provider().print(
                `Error! Update mafia? ${e}`,
                AccountValColors.attentionGrabbingWarning
              );
              continue;
            }
            switch (spl[0]) {
              case "i":
                v.itemType = 0 /* UNTRADEABLE_ITEM */;
                v.untradeableItem = KoLItem.get(spl[2]);
                break;
              case "b":
                v.itemType = 1 /* BOOK */;
                v.skill = KoLSkill.get(spl[2]);
                break;
              case "p":
                v.itemType = 2 /* PROPERTY */;
                v.userSetting = spl[2];
                break;
              case "e":
                v.itemType = 3 /* EUDORA */;
                v.correspondence = spl[2];
                break;
              case "v":
                v.itemType = 5 /* VISIT_URL_CHECK */;
                v.visitUrlLink = spl[2];
                v.visitUrlIncludes = spl[3];
                break;
              case "g":
                v.itemType = 4 /* GARDEN */;
                v.garden = spl[2];
                break;
              case "t":
                v.itemType = 7 /* CURRENCY */;
                if (spl.length > 2) {
                  v.untradeableItem = KoLItem.get(spl[2]);
                  v.currencyAmount = parseInt(spl[3]);
                }
                break;
              case "c":
                v.itemType = 8 /* CAMPGROUND */;
                break;
              case "s":
                v.itemType = 9 /* SCRIPT */;
                v.script = spl[2];
                break;
              case "h":
                this.prices.addSpecialCase(v.actualItem, parseInt(spl[2]));
                continue loop;
                break;
              default:
                provider().print(
                  `Found line '${line}' which I can't handle!`,
                  AccountValColors.attentionGrabbingWarning
                );
                continue;
            }
            values.push(v);
          }
          this.loadSkills(values);
          loop: for (const v of values) {
            if (v.actualItem.tradeable || v.itemType == 7 /* CURRENCY */ && v.untradeableItem == null) {
              continue;
            }
            for (const v1 of values) {
              if (v1.itemType != 0 /* UNTRADEABLE_ITEM */ && v1.itemType != 7 /* CURRENCY */) {
                continue;
              }
              if (v1.untradeableItem != v.actualItem) {
                continue;
              }
              continue loop;
            }
            provider().print(
              `Missing a tradeable item for ${v.actualItem}`,
              AccountValColors.attentionGrabbingWarning
            );
          }
          this.loadCache();
          return values;
        }
        loadSkills(values) {
          const itemsSkills = new Map(
            KoLItem.all().map((i) => [i, provider().associatedSkill(i)]).filter(
              ([i, skill]) => !i.reusable && !i.quest && !i.gift && skill != KoLSkill.none
            )
          );
          const alreadyNoted = values.map((v) => v.actualItem);
          for (const [i, skill] of itemsSkills) {
            if (!i.tradeable || alreadyNoted.includes(i)) {
              continue;
            }
            const v = new AccValStuff();
            v.itemType = 6 /* SKILL */;
            v.actualItem = i;
            v.skill = skill;
            values.push(v);
          }
        }
      };
    }
  });

  // src/utils/timings.ts
  var AccValTiming;
  var init_timings = __esm({
    "src/utils/timings.ts"() {
      init_apiSupplier();
      init_utils();
      AccValTiming = class _AccValTiming {
        static tracking = [];
        static trackingMap = /* @__PURE__ */ new Map();
        static timingsSlowdown = 0;
        static enabled = false;
        name;
        started = Date.now();
        stopped;
        depth = 0;
        stepStarted;
        totalTimeTaken = null;
        constructor(name, isSteps = false) {
          this.name = name;
          if (isSteps) {
            this.totalTimeTaken = 0;
            this.start();
          }
        }
        static printHtml(line) {
          provider().printHtml(line);
        }
        start() {
          if (this.totalTimeTaken == null) {
            throw new Error(
              `${this.getName()} was not configured as a total time timings`
            );
          }
          if (this.stepStarted != null) {
            throw new Error(`${this.getName()} was not stopped properly`);
          }
          this.stepStarted = Date.now();
        }
        getName() {
          return this.name;
        }
        stop(print = false) {
          if (this.stopped != null && this.stepStarted == null) {
            throw new Error(`The timing for ${this.getName()} was already stopped`);
          }
          this.stopped = Date.now();
          if (print) {
            _AccValTiming.printHtml(
              `<font color='blue'>${this.getName()}<font color='green'> time taken: </font>${this.getTimeStr()}</font>`
            );
          }
          if (this.totalTimeTaken != null) {
            this.totalTimeTaken += Date.now() - this.stepStarted;
            this.stepStarted = null;
          }
          return this;
        }
        getTime() {
          return this.totalTimeTaken ?? (this.stopped ?? Date.now()) - this.started;
        }
        getTimeStr() {
          return `${AccountValUtils.getNumber(this.getTime())}ms${this.stopped == null ? " (never stopped)" : ""}${this.stepStarted != null ? " (step never stopped)" : ""}`;
        }
        static start(name, withSteps = false) {
          if (!this.enabled) {
            return null;
          }
          const started = Date.now();
          let existing = this.trackingMap.get(name);
          if (existing != null && (existing.totalTimeTaken == null || existing.stepStarted != null)) {
            throw new Error(`The timing for ${name} was already started`);
          }
          if (existing == null) {
            existing = new _AccValTiming(name, withSteps);
            this.trackingMap.set(name, existing);
            this.tracking.push(["STARTED", existing]);
            existing.depth = this.tracking.filter(
              ([state, t]) => t.stopped == null && state == "STARTED"
            ).length - 1;
          } else {
            existing.start();
          }
          this.timingsSlowdown += Date.now() - started;
          return existing;
        }
        static stop(name, print = false) {
          if (!this.enabled) {
            return null;
          }
          const started = Date.now();
          const existing = this.trackingMap.get(name);
          if (existing == null) {
            throw new Error(`There was no time tracking created for ${name}`);
          }
          let lastStopIndex = -1;
          for (let i = this.tracking.length - 1; i >= 0; i--) {
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
        }
        static printTracked(method) {
          if (!this.enabled) {
            return;
          }
          const sortedTimes = [
            ...this.tracking
          ];
          this.tracking.forEach(([state, t]) => {
            if (t.stopped == null) {
              sortedTimes.push(["STOPPED", t]);
            }
          });
          for (const [state, timing] of sortedTimes) {
            const depthStr = `<font color='gray'>${">&nbsp;".repeat(timing.depth)}</font>`;
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
          this.printHtml(
            `<font color='green'>The usage of timings took an extra: </font><font color='blue'>${AccountValUtils.getNumber(this.timingsSlowdown)}ms</font>`
          );
        }
      };
    }
  });

  // src/pricing/variants/kolmafia.ts
  var MallPricing, HistoricalPricing;
  var init_kolmafia = __esm({
    "src/pricing/variants/kolmafia.ts"() {
      init_apiSupplier();
      init_typings();
      MallPricing = class {
        sessionKey = "accountval_loadedAllMallItems";
        ignoreKey = "_accountval_force_mallprices";
        loadedAllMallItems = "not_loaded";
        constructor() {
          this.loadLastState();
          if (this.loadedAllMallItems == "not_loaded") {
            this.loadMallPrices();
          }
        }
        loadLastState() {
          const prop = provider().retrieveCache(this.sessionKey, "transient");
          if (!prop) {
            return;
          }
          this.loadedAllMallItems = prop;
        }
        resetStateMaybe() {
          if (provider().retrieveCache(this.ignoreKey, "small_persist") != "true") {
            return;
          }
          if (this.loadedAllMallItems == "not_loaded") {
            this.loadedAllMallItems = "unsure";
          }
        }
        loadMallPrices() {
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
        }
        isViable() {
          return true;
        }
        resolve(item) {
          const prevAge = provider().historicalAge(item);
          const price = provider().mallPrice(item);
          if (provider().historicalAge(item) < prevAge && // If the new malled price is not valid, then it was an item that can't be found in mall, which explains why the cached mall prices didn't work
          price >= 100 && price < 999999999999) {
            this.resetStateMaybe();
            this.loadMallPrices();
          }
          return new ItemPrice(
            item,
            price,
            2 /* MALL */,
            provider().historicalAge(item)
          );
        }
      };
      HistoricalPricing = class {
        isViable() {
          return true;
        }
        resolve(item) {
          return new ItemPrice(
            item,
            provider().historicalPrice(item),
            1 /* HISTORICAL */,
            provider().historicalAge(item)
          );
        }
      };
    }
  });

  // src/pricing/variants/flatfile.ts
  var FlatfilePrices;
  var init_flatfile = __esm({
    "src/pricing/variants/flatfile.ts"() {
      init_typings();
      FlatfilePrices = class {
        constructor(settings) {
          this.settings = settings;
        }
        settings;
        prices;
        lastUpdated;
        resolve(item) {
          const price = this.prices[item.id];
          if (price == null) {
            return null;
          }
          return new ItemPrice(
            item,
            price.price,
            0 /* NEW_PRICES */,
            Math.round((Date.now() / 1e3 - price.updated) / (60 * 60 * 24)),
            price.volume
          );
        }
        loadLastState() {
          const buffer = this.loadDataFile();
          if (buffer.length <= 10) {
            return;
          }
          this.prices = [];
          for (const spl of buffer.split(/[\n\r]+/)) {
            if (spl.startsWith("#")) {
              continue;
            }
            const spl2 = spl.split("	");
            if (spl2.length == 2 && spl2[0] == "Last Updated:") {
              this.lastUpdated = parseInt(spl2[1]);
              continue;
            }
            if (spl2.length < 3) {
              continue;
            }
            const result = this.loadDataItem(spl2);
            if (result == null) {
              continue;
            }
            this.prices[result[0]] = result[1];
          }
        }
      };
    }
  });

  // src/pricing/variants/irratprices.ts
  var IrratPrices;
  var init_irratprices = __esm({
    "src/pricing/variants/irratprices.ts"() {
      init_apiSupplier();
      init_flatfile();
      IrratPrices = class extends FlatfilePrices {
        ofThePast = false;
        doWarning() {
          if (this.prices == null || this.ofThePast || this.lastUpdated == null) {
            return false;
          }
          const aWeekIsThisManyMillis = 7 * 24 * 60 * 60 * 1e3;
          if (this.lastUpdated + aWeekIsThisManyMillis < Date.now()) {
            return false;
          }
          return true;
        }
        isViable() {
          if (this.prices == null) {
            return false;
          }
          if (this.ofThePast) {
            return true;
          }
          if (this.lastUpdated == null) {
            return false;
          }
          const irratDedAtWeek = 3;
          const aWeekIsThisManyMillis = 7 * 24 * 60 * 60 * 1e3;
          if (this.lastUpdated + irratDedAtWeek * aWeekIsThisManyMillis < Date.now()) {
            return false;
          }
          return true;
        }
        loadDataFile() {
          const toFetch = this.settings.dateToFetch;
          if (toFetch == null) {
            return provider().retrieveCache(
              "irrats_item_prices.txt",
              "large_persist"
            );
          }
          let finalDateString;
          const minDate = new Date(2023, 7, 23);
          minDate.setHours(0, 0, 0, 0);
          const absoluteDateRegex = /^\d{1,2}[-/]\d{1,2}[-/]\d{4}$/;
          if (absoluteDateRegex.test(toFetch)) {
            const [day, month, year] = toFetch.split(/[-/]/).map(Number);
            const parsedDate = new Date(year, month - 1, day);
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
            const dMatch = toFetch.match(/(\d+)d(?:ays?)?/);
            const mMatch = toFetch.match(/(\d+)m(?:onths?)?/);
            const yMatch = toFetch.match(/(\d+)y(?:ears?)?/);
            const days = dMatch ? parseInt(dMatch[1], 10) : 0;
            const months = mMatch ? parseInt(mMatch[1], 10) : 0;
            const years = yMatch ? parseInt(yMatch[1], 10) : 0;
            const consumedLength = (dMatch?.[0].length ?? 0) + (mMatch?.[0].length ?? 0) + (yMatch?.[0].length ?? 0);
            if (consumedLength !== toFetch.length || consumedLength === 0) {
              throw new Error(
                `Invalid date format for 'dateToFetch': "${toFetch}". Please use 'DD-MM-YYYY' or a relative format like '1d2m3y'.`
              );
            }
            let targetDate = /* @__PURE__ */ new Date();
            targetDate.setDate(targetDate.getDate() - days);
            targetDate.setMonth(targetDate.getMonth() - months);
            targetDate.setFullYear(targetDate.getFullYear() - years);
            if (targetDate < minDate) {
              targetDate = minDate;
            }
            const finalDay = String(targetDate.getDate()).padStart(2, "0");
            const finalMonth = String(targetDate.getMonth() + 1).padStart(2, "0");
            const finalYear = targetDate.getFullYear();
            finalDateString = `${finalDay}-${finalMonth}-${finalYear}`;
          }
          const responseText = provider().visitUrl(
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
        }
        loadDataItem(spl2) {
          const itemId = parseInt(spl2[0]);
          const age = parseInt(spl2[1]);
          const price = parseInt(spl2[2]);
          const volume = spl2[3] ? parseInt(spl2[3]) : -1;
          const lastSoldAt = spl2[4] ? parseInt(spl2[4]) : -1;
          return [
            itemId,
            { price, updated: age, volume, lastSoldAt }
          ];
        }
      };
    }
  });

  // src/pricing/variants/pricegun.ts
  var PricegunResolver;
  var init_pricegun = __esm({
    "src/pricing/variants/pricegun.ts"() {
      init_apiSupplier();
      init_typings();
      init_supplierTypings();
      PricegunResolver = class {
        constructor(settings) {
          this.settings = settings;
        }
        settings;
        items = /* @__PURE__ */ new Map();
        loadLastState() {
          this.items.clear();
          const buffer = provider().retrieveCache(
            "pricegun_prices.txt",
            "large_persist"
          );
          if (!buffer) {
            return;
          }
          const cutoff = Math.floor(Date.now() / 1e3) - 24 * 60 * 60;
          try {
            for (const item of JSON.parse(buffer)) {
              const value = typeof item.value === "number" ? item.value : parseFloat(item.value?.__decimal__ ?? "0");
              if (item.retrieved >= cutoff) {
                this.items.set(item.itemId, { ...item, value });
              }
            }
          } catch {
          }
        }
        stop() {
          const cutoff = Math.floor(Date.now() / 1e3) - 23 * 60 * 60;
          provider().storeCache(
            "pricegun_prices.txt",
            JSON.stringify(
              [...this.items.values()].filter((i) => i.retrieved > cutoff)
            ),
            "large_persist"
          );
        }
        parseValue(item) {
          return typeof item.value === "number" ? item.value : parseFloat(item.value?.__decimal__ ?? "0");
        }
        loadItemFromApi(item) {
          this.items.set(item.itemId, {
            itemId: item.itemId,
            value: this.parseValue(item),
            volume: item.volume,
            dateTime: item.dateTime ?? 0,
            retrieved: Math.floor(Date.now() / 1e3)
          });
        }
        bulkResolve(items2) {
          const missing = items2.filter((i) => !this.items.has(i.id));
          if (missing.length) {
            this.fetch(missing);
          }
          const now = Math.floor(Date.now() / 1e3);
          return items2.map((i) => {
            const price = this.items.get(i.id);
            if (!price || price.volume < 0) {
              return null;
            }
            return new ItemPrice(
              i,
              Math.round(price.value),
              0 /* NEW_PRICES */,
              now - price.dateTime,
              price.volume
            );
          });
        }
        fetch(items2) {
          const MAX_AMOUNT = this.settings.pricegunBatchSize;
          const now = Math.floor(Date.now() / 1e3);
          for (let start = 0; start < items2.length; start += MAX_AMOUNT) {
            const batch = items2.slice(
              start,
              Math.min(start + MAX_AMOUNT, items2.length)
            );
            provider().print(
              `Pricegun progress: ${start + batch.length} / ${items2.length}`
            );
            const ignoredItem = batch.length + 3 < MAX_AMOUNT && !batch.some((b) => b.id === 1);
            if (ignoredItem) {
              batch.push(KoLItem.get(1));
            }
            try {
              const url = `https://pricegun.loathers.net/api/${batch.map((i) => i.id).join(",")}`;
              const response = JSON.parse(provider().visitUrl(url));
              const parsed = batch.length === 1 ? [response] : response;
              for (const item of parsed) {
                if (ignoredItem && item.itemId === 1) {
                  continue;
                }
                this.loadItemFromApi(item);
              }
              for (const i of batch) {
                const id = i.id;
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
            } catch {
              for (const i of batch) {
                const id = i.id;
                this.items.set(id, {
                  itemId: id,
                  value: 0,
                  volume: -1,
                  dateTime: 0,
                  retrieved: now
                });
              }
            }
          }
        }
        resolve(item) {
          return this.bulkResolve([item])[1];
        }
        isViable() {
          return true;
        }
      };
    }
  });

  // src/pricing/priceResolver.ts
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
      PriceResolver = class {
        constructor(settings) {
          this.settings = settings;
          let specialResolver;
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
        settings;
        specialCase = /* @__PURE__ */ new Map();
        resolvers = [];
        addSpecialCase(item, meat) {
          this.specialCase.set(item, meat);
        }
        fillSpecialCase() {
          this.specialCase.set(KoLItem.get("Meat Paste"), 10);
          this.specialCase.set(KoLItem.get("Meat Stack"), 100);
          this.specialCase.set(KoLItem.get("Dense meat stack"), 1e3);
        }
        doWarning() {
          if (this.resolvers[0] instanceof IrratPrices) {
            return this.resolvers[0].doWarning();
          }
          return false;
        }
        stop() {
          this.resolvers.forEach((r) => r.stop && r.stop());
        }
        bulkLoad(items2) {
          if (!this.resolvers[0].bulkResolve) {
            return;
          }
          const toCheck = new Set(items2);
          const checked = /* @__PURE__ */ new Set();
          for (const item of toCheck) {
            if (checked.has(item)) {
              continue;
            }
            const folds = provider().getFoldables(item, "fold");
            if (!folds.length) {
              continue;
            }
            for (const i of folds) {
              checked.add(i);
              toCheck.add(i);
            }
          }
          this.resolvers[0].bulkResolve(Array.from(toCheck));
        }
        itemPrice(item, ignoreFold = false, forcePricing = null, doSuperFast = false, doEstimates = false, timingsKey = "") {
          if (this.settings.pricegun) {
            ignoreFold = true;
          }
          if (!ignoreFold) {
            AccValTiming.start(`${timingsKey}Check Foldable`, true);
            try {
              const foldables = provider().getFoldables(item, "fold");
              if (foldables.length) {
                AccValTiming.start(`${timingsKey}Deeper Foldable Check`, true);
                try {
                  const foldPrices = foldables.map(
                    (f) => this.itemPrice(f, true, forcePricing, doSuperFast, doEstimates)
                  ).filter((p) => p != null);
                  foldPrices.sort(
                    (f1, f2) => f1.item.tradeable != f2.item.tradeable ? f1.item.tradeable ? -1 : 1 : f1.price - f2.price
                  );
                  const compare = foldPrices.find((f) => f.item == item);
                  for (const f of foldPrices) {
                    if (f.daysOutdated > compare.daysOutdated * 3) {
                      continue;
                    }
                    return f;
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
                2 /* MALL */,
                0
              );
            }
            if (!item.tradeable) {
              return new ItemPrice(
                item,
                provider().autosellPrice(item),
                4 /* AUTOSELL */,
                0
              );
            }
          } finally {
            AccValTiming.stop(`${timingsKey}Check Pricing Misc`);
          }
          AccValTiming.start(`${timingsKey}Final Pricing Check`, true);
          try {
            for (const resolver of this.resolvers) {
              const price = resolver.resolve(item);
              if (price == null && this.settings.dateToFetch == null) {
                continue;
              }
              return price;
            }
          } finally {
            AccValTiming.stop(`${timingsKey}Final Pricing Check`);
          }
          throw new Error(`Failed to resolve price for ${item}`);
        }
      };
    }
  });

  // src/core/logic.ts
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
      AccountValLogic = class {
        constructor(settings) {
          this.settings = settings;
          this.priceResolver = new PriceResolver(this.settings);
          this.resolver = new ItemResolver(this.priceResolver);
        }
        settings;
        ownedItems = /* @__PURE__ */ new Map();
        resolver;
        priceResolver;
        prices = [];
        categoryOrder = [];
        jsFilter;
        addItem(item, count = 1) {
          this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
        }
        loadItems() {
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
        }
        loadJsFilter() {
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
        }
        loadPageItems() {
          const pager = new PageResolver();
          if (this.settings.fetchShop) {
            const items2 = pager.getStore(this.settings.playerId);
            items2.forEach((i) => {
              const item = new ValItem(i.item);
              if (this.settings.shopWorth) {
                item.bound = 4 /* SHOP_WORTH */;
                item.shopWorth = i.price;
              }
              this.addItem(item, i.amount);
            });
          }
          if (this.settings.fetchDisplaycase) {
            const items2 = pager.getDisplaycase(this.settings.playerId);
            items2.forEach((v, k) => {
              if (!this.categoryOrder.includes(k.shelf)) {
                this.categoryOrder.push(k.shelf);
              }
              this.addItem(new ValItem(k.item).withCategory(k.shelf), v);
            });
          }
          let resolvedFamiliars = false;
          if (this.settings.fetchFamiliars != false) {
            const familiars = pager.getFamiliars(this.settings.playerId);
            resolvedFamiliars = familiars.length > 0;
            this.resolver.resolveFamiliars(familiars, this.ownedItems);
          }
          if (this.settings.fetchSnapshot == true) {
            const snapshot = pager.getSnapshot(
              provider().getPlayerName(this.settings.playerId)
            );
            const familiars = [];
            const skills = [];
            const items2 = /* @__PURE__ */ new Map();
            for (const item of snapshot) {
              if ("hatchling" in item) {
                familiars.push(item);
              } else if ("name" in item && !("tradeable" in item)) {
                skills.push(item);
              } else if ("tradeable" in item) {
                items2.set(item, 1);
              } else {
                items2.set(
                  item[0],
                  item[1]
                );
              }
            }
            if (!resolvedFamiliars && this.settings.fetchFamiliars) {
              this.resolver.resolveFamiliars(familiars, this.ownedItems);
            }
            if (this.settings.doBound && this.settings.fetchingNonItems) {
              for (const item of this.resolver.accValStuff.filter(
                (s2) => s2.itemType == 6 /* SKILL */ && skills.includes(s2.skill)
              )) {
                this.addItem(
                  new ValItem(
                    item.actualItem,
                    item.actualItem,
                    item.actualItem.name,
                    item.actualItem.plural,
                    0 /* BOUND */
                  )
                );
              }
            }
            const owned = new Map(
              [...this.ownedItems].map(([k, v]) => [k.tradeableItem, [k, v]])
            );
            items2.forEach((v, k) => {
              const boundItem = this.resolver.accValStuff.find(
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
              let actualItem = k;
              let name = k.name;
              let plural = k.plural;
              if (boundItem.itemType == 0 /* UNTRADEABLE_ITEM */) {
                const untradeable = boundItem.untradeableItem;
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
                  0 /* BOUND */,
                  "av-snapshot"
                ),
                v
              );
            });
          }
          this.resolveNoTrades();
        }
        loadSelfItems() {
          AccValTiming.start("Resolve Familiar Items");
          const famItems = this.resolver.resolveFamiliarItems();
          AccValTiming.stop("Resolve Familiar Items");
          AccValTiming.start("Resolve Session");
          const sessionItems = provider().mySessionItems();
          AccValTiming.stop("Resolve Session");
          const mega = /* @__PURE__ */ new Map();
          const megaExtra = /* @__PURE__ */ new Map();
          const add = (stuff) => {
            for (const [item, amount] of stuff) {
              mega.set(item, (mega.get(item) ?? 0) + amount);
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
              const pager = new PageResolver();
              const items2 = pager.getDisplaycase(
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
          const shop = this.settings.fetchShop ? provider().getShop() : null;
          AccValTiming.stop("Resolve Shop");
          if (this.settings.fetchShop && !this.settings.shopWorth) {
            AccValTiming.start("Add Shop");
            add(shop);
            AccValTiming.stop("Add Shop");
          }
          AccValTiming.start("Process All Items");
          for (const item of KoLItem.all()) {
            let amount = mega.get(item) ?? 0;
            if (this.settings.fetchSession) {
              amount += sessionItems.get(item) ?? 0;
            }
            if (this.settings.fetchInventory) {
              amount += provider().equippedAmount(item) + (famItems.get(item) ?? 0);
            }
            let category;
            if (megaExtra.has(item)) {
              amount += megaExtra.get(item).count;
              category = megaExtra.get(item).shelf;
            }
            if (this.settings.shopWorth && (shop.get(item) ?? 0) > 0) {
              const i = new ValItem(item).withCategory(category);
              i.bound = 4 /* SHOP_WORTH */;
              i.shopWorth = provider().shopPrice(item);
              this.ownedItems.set(i, shop.get(item));
              continue;
            }
            if (amount == 0) {
              continue;
            }
            this.ownedItems.set(new ValItem(item).withCategory(category), amount);
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
              const i = provider().getWorkshed();
              if (i != null && i != KoLItem.none && (i.tradeable ? this.settings.doTradeables : this.settings.doBound)) {
                this.addItem(new ValItem(i, i, i.name, i.plural, 3 /* IN_USE */));
              }
            }
            AccValTiming.stop("Resolve Workshed");
          }
          if (this.settings.doBound && this.settings.fetchingNonItems) {
            AccValTiming.start("Resolve Urled Items");
            for (const [item, status] of this.resolver.getUrledItems()) {
              if (item.tradeable && (status == 2 /* FAMILIAR */ || status != 0 /* BOUND */) ? !this.settings.doTradeables : !this.settings.doBound) {
                continue;
              }
              this.addItem(new ValItem(item, item, item.name, item.plural, status));
            }
            AccValTiming.stop("Resolve Urled Items");
          }
          AccValTiming.start("Resolve No-Trades");
          this.resolveNoTrades();
          AccValTiming.stop("Resolve No-Trades");
        }
        resolveNoTrades() {
          const copy = {};
          this.ownedItems.forEach((v, k) => {
            copy[k.tradeableItem.name] = [k, v];
          });
          if (this.settings.doBound || this.settings.doNonTradeables) {
            this.resolver.resolveBoundToTradeables(copy, this.ownedItems, [
              this.settings.doBound ? 0 /* UNTRADEABLE_ITEM */ : null,
              this.settings.doNonTradeables ? 7 /* CURRENCY */ : null
            ]);
          }
          const skipJsFilter = this.settings.doesJSFilterUsePriceOrSales();
          for (const item of this.ownedItems.keys()) {
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
            if (!this.settings.doBound && item.isBound() && item.bound != 2 /* FAMILIAR */) {
              this.ownedItems.delete(item);
              continue;
            }
            if (item.bound == 2 /* FAMILIAR */ && (this.settings.fetchFamiliars == false || this.settings.fetchFamiliars == null && !this.settings.doBound)) {
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
        }
        doPricing() {
          let lastPrinted = 0;
          const settings = this.settings;
          const prices = this.prices;
          const ownedItems = this.ownedItems;
          const addPrice = function(item, price) {
            if (settings.minimumMeat > 0 && price.price * item.worthMultiplier < settings.minimumMeat) {
              ownedItems.delete(item);
              return;
            }
            if (settings.sales > 0 && price.volume < settings.sales) {
              ownedItems.delete(item);
              return;
            }
            if (!settings.isShown(item, price.price)) {
              ownedItems.delete(item);
              return;
            }
            if (settings.presets.some(
              (p) => !p.negated && p.preset.name().includes("autosell")
            )) {
              price.price = provider().autosellPrice(item.actualItem);
            }
            prices.push([item, price]);
          };
          AccValTiming.start("Add Logic Prices");
          const toCheck = [];
          this.priceResolver.bulkLoad(
            [...this.ownedItems.keys()].map((i) => i.tradeableItem)
          );
          for (const item of this.ownedItems.keys()) {
            AccValTiming.start("Price Item", true);
            const price = this.priceResolver.itemPrice(
              item.tradeableItem,
              false,
              this.settings.doSuperFast ? 1 /* HISTORICAL */ : this.settings.useLastSold ? 3 /* MALL_SALES */ : null,
              this.settings.doSuperFast,
              true,
              "Logic Item Prices - "
            );
            AccValTiming.stop("Price Item");
            if (price == null) {
              continue;
            } else if (price.price > 0 || price.accuracy == 0 /* NEW_PRICES */) {
              AccValTiming.start("Add Item Price", true);
              addPrice(item, price);
              AccValTiming.stop("Add Item Price");
            } else {
              toCheck.push([item, price]);
            }
          }
          AccValTiming.stop("Add Logic Prices");
          let checked = -1;
          if (toCheck.length > 200) {
            provider().print(
              "Think this will take too long? Use the parameter 'fast', it's less accurate!",
              AccountValColors.helpfulStateInfo
            );
          }
          if (toCheck.length > 0) {
            AccValTiming.start("Check Remaining Logic Item Prices");
            for (const check of toCheck) {
              const i = check[0];
              if (++checked % 20 == 0 && lastPrinted + 1e3 < Date.now()) {
                lastPrinted = Date.now();
                provider().print(
                  "Checking value of " + i.name + " (" + checked + " / " + toCheck.length + ")",
                  AccountValColors.helpfulStateInfo
                );
              }
              const price = this.priceResolver.itemPrice(
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
            AccValTiming.stop("Check Remaining Logic Item Prices");
          }
          AccValTiming.start("Sort Price List");
          this.doSort();
          AccValTiming.stop("Sort Price List");
        }
        doSort() {
          if (!this.settings.sortBy.fallback) {
            for (const [v, p] of this.prices) {
              this.settings.sortBy.assignValue(
                v,
                p,
                this.ownedItems,
                this.settings.maxNaturalPrice
              );
            }
          }
          const sorter = (v1, v2) => this.settings.sortBy.fallback ? this.settings.sortBy.fallback(v1[0], v2[0]) : v1[0].sortValue - v2[0].sortValue;
          if (this.settings.doCategories && this.categoryOrder != null) {
            this.prices.sort((v1, v2) => {
              const c1 = v1[0].category ?? "";
              const c2 = v2[0].category ?? "";
              if (c1 == c2) {
                return sorter(v1, v2);
              }
              const i1 = this.categoryOrder.indexOf(c1);
              const i2 = this.categoryOrder.indexOf(c2);
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
        }
      };
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
      isProcessed: function(item, worth) {
        return ["food", "booze", "spleen item"].includes(
          provider().itemType(item)
        );
      },
      desc: function() {
        return "Show only consumables";
      }
    });
    for (const type of ["food", "booze", "spleen"]) {
      presets.push({
        name() {
          return [type];
        },
        isProcessed: function(item) {
          return provider().itemType(item).replace(" item", "") == type;
        },
        desc: function() {
          return `Show only ${type}`;
        }
      });
    }
    presets.push({
      name() {
        return ["beverage"];
      },
      isProcessed: function(item, worth) {
        return item.notes.includes("BEVERAGE");
      },
      desc: function() {
        return "Show only beverage";
      }
    });
    presets.push({
      name() {
        return ["hungry"];
      },
      isProcessed: function(item, worth) {
        if (provider().myFullness() + item.fullness >= provider().fullnessLimit() || item.levelreq < provider().myLevel()) {
          return false;
        }
        return provider().itemType(item) == "food";
      },
      desc: function() {
        return "Show only food you can fit in stomach";
      }
    });
    presets.push({
      name() {
        return ["thirsty"];
      },
      isProcessed: function(item, worth) {
        if (provider().myInebriety() + item.inebriety >= provider().inebrietyLimit() || item.levelreq < provider().myLevel()) {
          return false;
        }
        return provider().itemType(item) == "booze";
      },
      desc: function() {
        return "Show only booze you can fit in liver";
      }
    });
    presets.push({
      name() {
        return ["munchy"];
      },
      isProcessed: function(item, worth) {
        if (provider().mySpleenUse() + item.spleen >= provider().spleenLimit() || item.levelreq < provider().myLevel()) {
          return false;
        }
        return provider().itemType(item) == "spleen item";
      },
      desc: function() {
        return "Show only spleen items you can fit in spleen";
      }
    });
    presets.push({
      name() {
        return ["equip", "equips", "equipment", "gear"];
      },
      isProcessed: function(item) {
        return provider().toSlot(item) != KoLSlot.none;
      },
      desc: function() {
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
      desc: function() {
        return "Show only items that can be stolen";
      }
    });
    presets.push({
      name() {
        return ["hatchling", "hatchlings", "larva"];
      },
      isProcessed: function(item, worth) {
        return provider().itemType(item) == "familiar larva";
      },
      desc: function() {
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
      desc: function() {
        return "Show only items that sell at mall min";
      }
    });
    const autoselluseItems = [
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
      name: function() {
        return ["autouse"];
      },
      isProcessed: function(item) {
        return autoselluseItems.includes(item);
      },
      desc: function() {
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
  function parseAndValidate(arg, source, value) {
    let parsed_value;
    try {
      parsed_value = arg.parser(value);
    } catch {
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
  function loadDefaultValues(spec) {
    const result = {};
    for (const k in spec) {
      const argSpec = spec[k];
      if ("args" in argSpec) {
        result[k] = loadDefaultValues(argSpec.args);
      } else {
        if ("default" in argSpec) {
          result[k] = argSpec.default;
        } else {
          result[k] = void 0;
        }
      }
    }
    return result;
  }
  function traverseAndMaybeSet(spec, result, setTo) {
    const groups = [];
    for (const k in spec) {
      const argSpec = spec[k];
      if ("args" in argSpec) {
        groups.push([argSpec, k]);
      } else {
        const value = setTo(argSpec, k);
        if (value === void 0) {
          continue;
        }
        result[k] = value;
      }
    }
    for (const group_and_key of groups) {
      traverseAndMaybeSet(
        group_and_key[0].args,
        result[group_and_key[1]],
        setTo
      );
    }
  }
  function traverse(spec, process, onGroup) {
    const groups = [];
    for (const k in spec) {
      const argSpec = spec[k];
      if ("args" in argSpec) {
        groups.push([argSpec, k]);
      } else {
        process(argSpec, k);
      }
    }
    for (const group_and_key of groups) {
      onGroup?.(group_and_key[0], group_and_key[1]);
      traverse(group_and_key[0].args, process, onGroup);
    }
  }
  var Args, ParseError, specSymbol, scriptSymbol, scriptHelpSymbol, optionsSymbol, WrappedArgMetadata, CommandParser;
  var init_grimoireArgs = __esm({
    "src/settings/grimoireArgs.ts"() {
      init_apiSupplier();
      Args = class _Args {
        static custom(spec, parser, valueHelpName) {
          const raw_options = spec.options?.map((option) => option[0]);
          if ("default" in spec && raw_options) {
            if (!raw_options.includes(spec.default)) {
              throw new Error(`Invalid default value ${spec.default}`);
            }
          }
          return {
            ...spec,
            valueHelpName,
            parser: (value) => {
              const parsed_value = parser(value);
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
            },
            options: spec.options?.map((a) => [`${a[0]}`, a[1]])
          };
        }
        static arrayFromArg(spec, argFromSpec) {
          const spec_without_default = { ...spec };
          if ("default" in spec_without_default) {
            delete spec_without_default["default"];
          }
          const arg = argFromSpec.call(this, spec_without_default);
          const raw_options = spec.options?.map((option) => option[0]);
          if ("default" in spec && raw_options) {
            for (const default_entry of spec.default) {
              if (!raw_options.includes(default_entry)) {
                throw new Error(`Invalid default value ${spec.default}`);
              }
            }
          }
          const separator = spec.separator ?? ",";
          const arrayParser = (value) => {
            let values = value.split(separator);
            if (!spec.noTrim) {
              values = values.map((v) => v.trim());
            }
            const result = values.map((v) => arg.parser(v));
            const error = result.find((v) => v instanceof ParseError);
            if (error) {
              return error;
            }
            const failure_index = result.indexOf(void 0);
            if (failure_index !== -1) {
              return new ParseError(
                `components expected ${arg.valueHelpName} but could not parse ${values[failure_index]}`
              );
            }
            return result;
          };
          return {
            ...spec,
            valueHelpName: `${arg.valueHelpName}${separator} ${arg.valueHelpName}${separator} ...`,
            parser: arrayParser,
            options: spec.options?.map((a) => [`${a[0]}`, a[1]])
          };
        }
        static string(spec) {
          return this.custom(spec, (value) => value, "TEXT");
        }
        static strings(spec) {
          return this.arrayFromArg(spec, this.string);
        }
        static number(spec) {
          return this.custom(
            spec,
            (value) => isNaN(Number(value)) ? void 0 : Number(value),
            "NUMBER"
          );
        }
        static numbers(spec) {
          return this.arrayFromArg(spec, this.number);
        }
        static boolean(spec) {
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
        static booleans(spec) {
          return this.arrayFromArg(spec, this.boolean);
        }
        static flag(spec) {
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
        static group(groupName, args, hidden) {
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
        static create(scriptName, scriptHelp, args, options) {
          traverse(args, (keySpec, key) => {
            if (key === "help" || keySpec.key === "help") {
              throw new Error(`help is a reserved argument name`);
            }
          });
          const argsWithHelp = {
            ...args,
            help: this.flag({ help: "Show this message and exit.", setting: "" })
          };
          const res = {
            ...loadDefaultValues(argsWithHelp),
            [specSymbol]: argsWithHelp,
            [scriptSymbol]: scriptName,
            [scriptHelpSymbol]: scriptHelp,
            [optionsSymbol]: options ?? {}
          };
          if (options?.positionalArgs) {
            const keys = [];
            const metadata = _Args.getMetadata(res);
            metadata.traverse((keySpec, key) => {
              keys.push(keySpec.key ?? key);
            });
            for (const arg of options.positionalArgs) {
              if (!keys.includes(arg)) {
                throw new Error(`Unknown key for positional arg: ${arg}`);
              }
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
        static fill(args, command, includeSettings = true) {
          const metadata = _Args.getMetadata(args);
          const keys = /* @__PURE__ */ new Map();
          const flags = /* @__PURE__ */ new Map();
          const aliased = /* @__PURE__ */ new Map();
          metadata.traverse((keySpec, key) => {
            const name = keySpec.key ?? key;
            const namesToMap = [name, ...keySpec.aliases ?? []];
            for (const n of namesToMap) {
              const lower = metadata.options?.caseSensitive ? n : n.toLowerCase();
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
          });
          if (includeSettings) {
            metadata.traverseAndMaybeSet(args, (keySpec, key) => {
              const setting = keySpec.setting ?? `${metadata.scriptName}_${keySpec.key ?? key}`;
              if (setting === "") {
                return void 0;
              }
              const value_str = provider().retrieveCache(setting, "small_persist");
              if (value_str === "") {
                return void 0;
              }
              return parseAndValidate(keySpec, `Setting ${setting}`, value_str);
            });
          }
          if (command === void 0 || command === "") {
            return;
          }
          const parsed = new CommandParser(
            command,
            keys,
            flags,
            metadata.options.positionalArgs ?? [],
            metadata.options.caseSensitive ?? false
          ).parse();
          metadata.traverseAndMaybeSet(args, (keySpec, key) => {
            const argKey = keySpec.key ?? key;
            const value_str = parsed.get(argKey);
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
        static parse(scriptName, scriptHelp, spec, command, options) {
          const args = this.create(scriptName, scriptHelp, spec, options);
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
        static showHelp(args, maxOptionsToDisplay) {
          const metadata = _Args.getMetadata(args);
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
        }
        static showGroupHelp(metadata, group, key) {
          provider().printHtml("");
          provider().printHtml(`<b>${group.name}:</b>`);
        }
        static showArgHelp(metadata, arg, key, maxOptionsToDisplay) {
          const nameText = `<font color='${provider().isDarkMode() ? "yellow" : "blue"}'>${arg.key ?? key}</font>`;
          const valueText = arg.valueHelpName === "FLAG" ? "" : `<font color='purple'>${arg.valueHelpName}</font>`;
          const helpText = arg.help ?? "";
          const defaultText = "default" in arg ? `<font color='#888888'>[default: ${arg.default}]</font>` : "";
          const settingText = arg.setting === "" ? "" : `<font color='#888888'>[setting: ${arg.setting ?? `${metadata.scriptName}_${arg.key ?? key}`}]</font>`;
          const aliasesText = arg.aliases && arg.aliases.length > 0 ? `<font color='#888888'>[aliases: ${arg.aliases.join(", ")}]</font>` : "";
          provider().printHtml(
            `&nbsp;&nbsp;${[nameText, valueText, "-", helpText, defaultText, settingText, aliasesText].filter(Boolean).join(" ")}`
          );
          const valueOptions = arg.options ?? [];
          if (valueOptions.length < (maxOptionsToDisplay ?? Number.MAX_VALUE)) {
            for (const option of valueOptions) {
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
        static getMetadata(args) {
          return new WrappedArgMetadata(args);
        }
      };
      ParseError = class {
        message;
        constructor(message) {
          this.message = message;
        }
      };
      specSymbol = /* @__PURE__ */ Symbol("spec");
      scriptSymbol = /* @__PURE__ */ Symbol("script");
      scriptHelpSymbol = /* @__PURE__ */ Symbol("scriptHelp");
      optionsSymbol = /* @__PURE__ */ Symbol("options");
      WrappedArgMetadata = class {
        spec;
        scriptName;
        scriptHelp;
        options;
        constructor(args) {
          this.spec = args[specSymbol];
          this.scriptName = args[scriptSymbol];
          this.scriptHelp = args[scriptHelpSymbol];
          this.options = args[optionsSymbol];
        }
        /**
         * Create a parsed args object from this spec using all default values.
         */
        loadDefaultValues() {
          return loadDefaultValues(this.spec);
        }
        /**
         * Traverse the spec and possibly generate a value for each argument.
         *
         * @param result The object to hold the resulting argument values, typically
         *    the result of loadDefaultValues().
         * @param setTo A function to generate an argument value from each arg spec.
         *    If this function returns undefined, then the argument value is unchanged.
         */
        traverseAndMaybeSet(result, setTo) {
          return traverseAndMaybeSet(this.spec, result, setTo);
        }
        /**
         * Traverse the spec and call a method for each argument.
         *
         * @param process A function to call at each arg spec.
         */
        traverse(process, onGroup) {
          return traverse(this.spec, process, onGroup);
        }
      };
      CommandParser = class {
        command;
        keys;
        flags;
        positionalArgs;
        positionalArgsParsed;
        index;
        prevUnquotedKey;
        caseSensitive;
        constructor(command, keys, flags, positionalArgs, caseSensitive) {
          this.command = command;
          this.index = 0;
          this.keys = keys;
          this.flags = flags;
          this.positionalArgs = positionalArgs;
          this.positionalArgsParsed = 0;
          this.caseSensitive = caseSensitive;
        }
        /**
         * Perform the parsing of (key, value) pairs.
         * @returns The set of extracted (key, value) pairs.
         */
        parse() {
          this.index = 0;
          const result = /* @__PURE__ */ new Map();
          while (!this.finished()) {
            let parsing_negative_flag = false;
            let flag_char = "";
            if (this.peek() === "!" || this.peek() === "-") {
              parsing_negative_flag = true;
              flag_char = this.peek();
              this.consume([flag_char]);
            }
            const startIndex = this.index;
            const key = this.parseKey();
            const lowerKey = this.caseSensitive ? key : key.toLowerCase();
            const resolvedKey = this.flags.get(lowerKey) ?? this.keys.get(lowerKey) ?? lowerKey;
            if (result.has(resolvedKey)) {
              throw new Error(`Duplicate key ${key} (first set to ${result.get(resolvedKey) ?? ""})`);
            }
            if (this.flags.has(lowerKey)) {
              if (this.peek() === "=") {
                this.consume(["="]);
                const value = this.parseValue();
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
                  parsing_negative_flag ? flag_char + value : value
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
              const value = this.parseValue();
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
                parsing_negative_flag ? flag_char + value : value
              );
            } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
              const positionalKey = this.positionalArgs[this.positionalArgsParsed];
              this.positionalArgsParsed++;
              this.index = startIndex;
              const value = this.parseValue();
              if (["'", '"'].includes(this.prev() ?? "")) {
                this.prevUnquotedKey = void 0;
              } else {
                this.prevUnquotedKey = key;
              }
              if (!this.finished()) {
                this.consume([" "]);
              }
              if (result.has(positionalKey)) {
                throw new Error(`Cannot assign ${value} to ${positionalKey} (positionally) since ${positionalKey} was already set to ${result.get(positionalKey) ?? ""}`);
              }
              result.set(
                positionalKey,
                parsing_negative_flag ? flag_char + value : value
              );
            } else {
              if (this.prevUnquotedKey && this.peek() !== "=") {
                throw new Error(`Unknown argument: ${key} (if this should have been parsed as part of ${this.prevUnquotedKey}, you should surround the entire value in quotes)`);
              } else {
                throw new Error(`Unknown argument: ${key}`);
              }
            }
          }
          return result;
        }
        /**
         * @returns True if the entire command has been parsed.
         */
        finished() {
          return this.index >= this.command.length;
        }
        /**
         * @returns The next character to parse, if it exists.
         */
        peek() {
          if (this.index >= this.command.length) {
            return void 0;
          }
          return this.command.charAt(this.index);
        }
        /**
         * @returns The character just parsed, if it exists.
         */
        prev() {
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
        consume(allowed) {
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
        findNext(searchValue) {
          let result = this.command.length;
          for (const value of searchValue) {
            const index = this.command.indexOf(value, this.index);
            if (index !== -1 && index < result) {
              result = index;
            }
          }
          return result;
        }
        /**
         * Starting from the internal marker, parse a single key.
         * This also advances the internal marker.
         *
         * @returns The next key.
         */
        parseKey() {
          const keyEnd = this.findNext(["=", " "]);
          const key = this.command.substring(this.index, keyEnd);
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
        parseValue() {
          const ch = this.peek();
          if (ch === '"' || ch === "'") {
            return this.parseQuotedValue(ch);
          }
          const first = this.index;
          this.index = this.findNext([" "]);
          return this.command.substring(first, this.index);
        }
        parseQuotedValue(quote) {
          this.index++;
          let out = "";
          while (!this.finished()) {
            const ch = this.peek();
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
              const next = this.command.charAt(this.index + 1);
              if (next === "" || next === " ") {
                this.index++;
                return out;
              }
            }
            out += ch;
            this.index++;
          }
          throw new Error(`No closing ${quote} found for ${quote}${out}`);
        }
      };
    }
  });

  // src/settings/settings.ts
  function numberParser(arg) {
    let cleaned = arg;
    while (cleaned.includes(",") || cleaned.includes("_")) {
      cleaned = cleaned.replace(/[,_]/g, "");
    }
    const match = cleaned.match(/^((?:\d+)|(?:\d*\.\d+))([mkbt]?)$/i);
    if (match == null) {
      return new ParseError("Invalid number format");
    }
    let num = parseFloat(match[1]);
    const mod = match[2]?.toLowerCase();
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
    let v = arg;
    if (!v.match(/^[0-9]+$/)) {
      v = provider().getPlayerId(v);
      if (!v.match(/^[0-9]+$/)) {
        return new ParseError(`Failed to convert ${arg} into a player ID`);
      }
    }
    return parseInt(v);
  }
  function sortByParser(arg) {
    const neg = /^[-!]/.test(arg);
    const v = arg.toLowerCase().replace("_", "").substring(neg ? 1 : 0);
    for (const sort of sortBys) {
      if (sort.name.toLowerCase().replace("_", "") != v && !sort.aliases.some((a) => a.toLowerCase().replace("_", "") == v)) {
        continue;
      }
      if (neg) {
        return {
          ...sort,
          assignValue: sort.assignValue ? (item, price, owned, maxPrice) => {
            sort.assignValue(item, price, owned, maxPrice);
            item.sortValue = -item.sortValue;
          } : void 0,
          fallback: sort.fallback ? (item1, item2) => {
            return -sort.fallback(item1, item2);
          } : void 0
        };
      }
      return sort;
    }
    return new ParseError(`Unknown sort option: ${arg}`);
  }
  function colorSchemeParser(arg) {
    const v = arg.toLowerCase();
    if (!getAccountvalColors().includes(v)) {
      return new ParseError(`Unknown color scheme: ${arg}`);
    }
    return v;
  }
  function logTypeParser(arg) {
    const v = arg.toLowerCase();
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
            options: ["default", ...getAccountvalColors()].map((s2) => [s2])
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
      AccountValSettings = class {
        static defaultMaxNaturalPrice = defaultMaxNaturalPrice;
        // These are not exposed
        fetchingEverywhereish = true;
        fetchingNonItems = true;
        presets = [];
        expensivePricesAt = 4e7;
        cheapTotalsLessThan = 2e7;
        cheapPricesLessThan = 2e6;
        maxPriceAge;
        doSettings(command) {
          const errors = [];
          const presetSpec = {};
          for (const preset of getPresets()) {
            const names = preset.name();
            presetSpec[`preset_${names[0]}`] = Args.boolean({
              key: names[0],
              aliases: names.slice(1),
              help: preset.desc(),
              setting: `accountval_preset_${names[0]}`,
              hidden: true
            });
          }
          const fullSpec = {
            ...staticAccountValSpec,
            presetFilters: Args.group("Preset Filters", presetSpec, true)
          };
          const scriptHelp = [
            `<font color=${AccountValColors.helpfulStateInfo}>AccountVal is a script to check what your account is worth, and find the good stuff fast.</font>`,
            `<font color=${AccountValColors.helpfulStateInfo}>You can provide these as a parameter to accountval to do other stuff than the base script.</font>`,
            `<font color='${AccountValColors?.helpfulStateInfo ?? "blue"}'>Use ! or - to negate a boolean, or use '='. Eg:</font><font color='gray'> -bound !bound bound=false</font>`,
            `<font color='${AccountValColors?.minorNote ?? "gray"}'>Disclaimer: The prices shown are not absolute, and can over/understate what it really is worth.</font>`
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
          for (const preset of getPresets()) {
            const names = preset.name();
            const presetVal = this.presetFilters?.[`preset_${names[0]}`];
            if (presetVal !== void 0) {
              this.presets.push({ preset, negated: !presetVal });
            }
          }
          this.resolveFetchSources();
          if (this.settings) {
            for (const setting of Object.keys(this)) {
              provider().print(`${setting} = ${this[setting]}`);
            }
          }
          return errors;
        }
        resolveFetchSources() {
          const fetchSources = [
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
          const wasSet = Object.entries(this).filter(([k, v]) => v !== void 0).map(([k]) => k);
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
          for (const fetchSource of fetchSources) {
            if (this[fetchSource] !== void 0) {
              continue;
            }
            this[fetchSource] = this.fetchingEverywhereish;
          }
          this.fetchingNonItems = this.fetchingEverywhereish;
        }
        doesJSFilterUsePriceOrSales() {
          return this.javascriptFilter != null && this.javascriptFilter.split("=>")[0].split(",").length >= 3;
        }
        isShown(item, worth) {
          return this.presets.every(
            (pre) => (pre.preset.isShown != null ? pre.preset.isShown(item, worth) : pre.preset.isProcessed(item.actualItem, worth)) != pre.negated
          );
        }
        getMaxPriceAge(price, amount) {
          return Math.min(this.maxAge, this.internalMaxPriceAge(price, amount));
        }
        internalMaxPriceAge(price, amount) {
          if (price > this.expensivePricesAt) {
            return 30;
          }
          const total = price * amount;
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
        }
      };
    }
  });

  // src/ui/output.ts
  var ReportOutput;
  var init_output = __esm({
    "src/ui/output.ts"() {
      init_apiSupplier();
      ReportOutput = class {
        output;
        settings;
        constructor(settings) {
          this.settings = settings;
        }
        printLine(line, textType, color) {
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
        }
        escapeHTML(str) {
          return provider().entityDecode(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }
        stop() {
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
        }
      };
    }
  });

  // src/ui/valuation.ts
  var ValuationReport;
  var init_valuation = __esm({
    "src/ui/valuation.ts"() {
      init_apiSupplier();
      init_settings();
      init_utils();
      init_colors();
      init_typings();
      init_supplierTypings();
      ValuationReport = class {
        netvalue = 0;
        aWorth;
        lines = [];
        mallExtinct = [];
        shopNetValue = 0;
        shopPricedAt = 0;
        lastCategory = null;
        shelfValue = 0;
        exceededMax = false;
        pronoun;
        logic;
        settings;
        out;
        constructor(logic, settings, out) {
          this.logic = logic;
          this.settings = settings;
          this.out = out;
          this.aWorth = this.logic.priceResolver.itemPrice(
            KoLItem.get("Mr. Accessory")
          ).price;
          this.pronoun = this.settings.fetchClan ? "The clan stash is" : !this.settings.playerId || this.settings.playerId == AccountValUtils.toInt(provider().myId()) ? this.settings.fetchSession ? "Your session is" : "You are" : provider().getPlayerName(this.settings.playerId) + " is";
        }
        run() {
          const resolved = this.filterAndResolveItems();
          for (const res of resolved) {
            this.formatResolvedItem(res);
          }
          this.onShelfName(null, 0);
          this.printLinesAndExtinct(resolved.length);
          this.printSummary();
        }
        filterAndResolveItems() {
          const useJsFilter = this.logic.jsFilter != null && this.settings.doesJSFilterUsePriceOrSales();
          const resolved = [];
          for (let no = this.logic.prices.length - 1; no >= 0; no--) {
            const item = this.logic.prices[no][0];
            const price = this.logic.prices[no][1];
            const worthEach = Math.min(
              this.settings.maxNaturalPrice + 1,
              price.price <= 0 && item.worthMultiplier == 1 ? -1 : price.price * (1 / item.worthMultiplier)
            );
            const count = this.logic.ownedItems.get(item);
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
        }
        onShelfName(name, worth) {
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
        }
        formatResolvedItem({ item, price, worthEach, count }) {
          this.exceededMax = this.exceededMax || this.settings.maxNaturalPrice + 1 < price.price * (1 / item.worthMultiplier);
          const totalWorth = Math.round(worthEach * count);
          this.netvalue += totalWorth;
          if (this.lines.length >= this.settings.displayLimit) {
            return;
          }
          let title = [];
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
          let tradeableWorth = ` @ ${AccountValUtils.getNumber(price.price)} meat.`;
          if (price.price < 0) {
            tradeableWorth = " as mall extinct.";
          }
          const accName = price.accuracy == 0 /* NEW_PRICES */ ? "Last malled" : price.accuracy == 3 /* MALL_SALES */ ? "Last sold" : price.accuracy == 4 /* AUTOSELL */ ? "Autosell" : "Last mafia malled";
          title.push(accName + tradeableWorth);
          if (price.price2 > 0 && price.accuracy == 0 /* NEW_PRICES */) {
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
          if (price.accuracy != 4 /* AUTOSELL */) {
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
            title = [`Owns in ${item.snapshotSource}.`, ...title];
          }
          let name = this.out.escapeHTML(item.name);
          if (item.bound != null) {
            let boundInfo;
            let color = AccountValColors.shopPricesOverpriced;
            if (item.bound == 4 /* SHOP_WORTH */) {
              const overpricedPerc = item.shopWorth / worthEach;
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
          let text = `${AccountValUtils.getNumber(count)} ${name}`;
          if (this.settings.showSingleItemWorth) {
            text += ` each worth ${AccountValUtils.getNumber(worthEach)}`;
          } else {
            text += ` worth a total of ${AccountValUtils.getNumber(totalWorth)}`;
          }
          this.lines.push(
            "<font title='" + this.out.escapeHTML(title.join("&#010;")) + "'>" + text + "</font>"
          );
        }
        printLinesAndExtinct(totalResolved) {
          if (!this.settings.brief) {
            this.lines = this.lines.reverse();
            const skipping = Math.max(0, totalResolved - this.settings.displayLimit);
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
            for (const line of this.lines) {
              this.out.printLine(line.replace(/\n/g, "&#010;"), "html");
            }
            if (this.mallExtinct.length > 0) {
              const colors = [
                AccountValColors.mallExtinctColor1,
                AccountValColors.mallExtinctColor2
              ];
              const extinct = this.mallExtinct.map(
                ([name, title], i) => "<font color='" + colors[i % 2] + "' title='" + title + "'>" + name + "</font>"
              );
              this.out.printLine(
                "There were " + extinct.length + " mall extinct items! Items: " + extinct.join(", "),
                "html"
              );
            }
          }
        }
        printSummary() {
          let mrAMeat = this.netvalue;
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
          const mrAWorth = (0 + mrAMeat) / this.aWorth;
          this.out.printLine(
            `<font title='With Mr. Accessory worth being ${AccountValUtils.getNumber(this.aWorth)} meat'>Going by the value of a Mr. Accessory, that's $${AccountValUtils.getNumber(mrAWorth * 10)}</font>`,
            "html"
          );
          if (this.shopPricedAt > 0) {
            this.shopPricedAt /= this.shopNetValue;
            let perc = AccountValUtils.getNumberOrClamp(
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
        }
        printMeat() {
          if (!this.settings.doTradeables) {
            return;
          }
          let meat = 0;
          const meatSources = [];
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
        }
      };
    }
  });

  // src/accountval.ts
  var accountval_exports = {};
  __export(accountval_exports, {
    run: () => run
  });
  function run(command) {
    initAccountValColors();
    const val = new AccountVal();
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
      AccountVal = class {
        logic;
        settings;
        out;
        getSettings() {
          return this.settings;
        }
        load(command) {
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
            const scheme = command.split("=")[1];
            showAccountvalColors(scheme);
            return false;
          }
          const unknown = this.settings.doSettings(command);
          if (this.settings.help) {
            Args.showHelp(this.settings, 0);
          }
          if (this.settings.showPresetFilters) {
            const meta = Args.getMetadata(this.settings);
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
        }
        start() {
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
          const report = new ValuationReport(this.logic, this.settings, this.out);
          report.run();
          AccValTiming.stop("Start Valuation");
        }
        stop() {
          this.logic.priceResolver.stop();
          this.out.stop();
        }
        runTests() {
          this.out.printLine("Tests Finished", "plain", "green");
        }
        runTest(args, verify) {
          this.load(args);
          for (const [key, value] of Object.entries(verify)) {
            const setTo = this.settings[key];
            if (setTo == value) {
              continue;
            }
            this.out.printLine(
              `On '${args}', ${key} was not set to ${value} but instead ${setTo}`,
              "plain",
              "red"
            );
          }
        }
      };
    }
  });

  // src/browser/index.ts
  var index_exports = {};
  __export(index_exports, {
    main: () => main
  });
  init_apiSupplier();

  // src/browser/browserProvider.ts
  init_pages();
  init_utils();

  // src/browser/gameData.ts
  var PROXY = "https://accountval.lib.co.nz";
  var MAFIA_DATA = `${PROXY}/data/`;
  var IRRAT_PRICES = `${PROXY}/prices/live`;
  var mafiaFiles = [
    "items",
    "fullness",
    "inebriety",
    "spleenhit",
    "classskills",
    "modifiers",
    "familiars",
    "foldgroups",
    "outfits",
    "coinmasters"
  ];
  var coinmasterTokens = {
    "Vending Machine": "fat loot token",
    "Drip Institute Armory": "Driplet",
    "The Neandermall": "Chroner",
    "Ni&ntilde;a Store": "Chroner",
    "The Terrified Eagle Inn": "Freddy Kruegerand",
    "Guzzlr Company Store Website": "Guzzlrbuck",
    "Buff Jimmy's Souvenir Shop": "Beach Buck",
    "The Frozen Brogurt Stand": "Beach Buck",
    "Taco Dan's Taco Stand": "Beach Buck",
    "Disco GiftCo": "Volcoino",
    "The Dinsey Company Store": "FunFunds&trade;",
    "The Armory": "Coinspiracy",
    "The Canteen": "Coinspiracy",
    "The SHAWARMA Initiative": "Coinspiracy",
    "Wal-Mart": "Wal-Mart gift certificate",
    "FantasyRealm Rubee&trade; Store": "Rubee&trade;",
    "LT&T Gift Shop": "buffalo dime",
    "Spacegate Fabrication Facility": "Spacegate Research"
  };
  var BrowserSkill = class {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
    id;
    name;
    toString() {
      return this.name;
    }
  };
  var noSkill = new BrowserSkill(-1, "none");
  var BrowserItem = class {
    id;
    name;
    plural;
    descid;
    use;
    autosell;
    tradeable;
    gift;
    quest;
    discardable;
    reusable;
    fullness = 0;
    inebriety = 0;
    spleen = 0;
    levelreq = 0;
    notes = "";
    seller;
    skill = noSkill;
    constructor(columns) {
      const [id, name, descid, , use, access, autosell, plural] = columns;
      const uses = use.split(/, ?/);
      const flags = access.split(",");
      this.id = parseInt(id);
      this.name = name;
      this.plural = plural || `${name}s`;
      this.descid = descid;
      this.use = uses[0];
      this.autosell = parseInt(autosell);
      this.tradeable = flags.includes("t");
      this.gift = flags.includes("g");
      this.quest = flags.includes("q");
      this.discardable = flags.includes("d");
      this.reusable = uses.includes("reusable");
    }
    toString() {
      return this.name;
    }
  };
  var noItem = new BrowserItem([
    "-1",
    "none",
    "",
    "",
    "none",
    "",
    "0",
    "none"
  ]);
  var BrowserCoinmaster = class {
    constructor(name, item) {
      this.name = name;
      this.item = item;
    }
    name;
    item;
    prices = /* @__PURE__ */ new Map();
    toString() {
      return this.name;
    }
  };
  var BrowserFamiliar = class {
    constructor(id, name, hatchling) {
      this.id = id;
      this.name = name;
      this.hatchling = hatchling;
    }
    id;
    name;
    hatchling;
    toString() {
      return this.name;
    }
  };
  var noFamiliar = new BrowserFamiliar(-1, "none", noItem);
  var decoder = document.createElement("textarea");
  function decodeEntities(text) {
    if (!text.includes("&")) {
      return text;
    }
    decoder.innerHTML = text;
    return decoder.value;
  }
  function rows(file) {
    return file.split(/\r?\n/).filter((line) => line.length > 0 && !line.startsWith("#")).map((line) => line.split("	"));
  }
  var GameData = class {
    constructor(files, irratPrices) {
      this.irratPrices = irratPrices;
      this.loadItems(files.items);
      this.loadConsumables(files.fullness, "fullness");
      this.loadConsumables(files.inebriety, "inebriety");
      this.loadConsumables(files.spleenhit, "spleen");
      this.loadSkills(files.classskills);
      this.loadSkillItems(files.modifiers);
      this.loadFamiliars(files.familiars);
      this.loadFolds(files.foldgroups);
      this.loadOutfits(files.outfits);
      this.loadCoinmasters(files.coinmasters);
    }
    irratPrices;
    items = [];
    itemsById = /* @__PURE__ */ new Map();
    itemsByDescid = /* @__PURE__ */ new Map();
    skills = [];
    skillsById = /* @__PURE__ */ new Map();
    familiars = [];
    familiarsById = /* @__PURE__ */ new Map();
    folds = /* @__PURE__ */ new Map();
    outfits = [];
    itemsByName = /* @__PURE__ */ new Map();
    skillsByName = /* @__PURE__ */ new Map();
    findItem(name) {
      const id = name.match(/^\[(\d+)\]/);
      if (id != null) {
        return this.itemsById.get(parseInt(id[1]));
      }
      return this.itemsByName.get(name.toLowerCase());
    }
    getItem(name) {
      const item = this.findItem(name);
      if (item == null) {
        throw new Error(`Bad item value: "${name}"`);
      }
      return item;
    }
    getSkill(name) {
      const skill = this.skillsByName.get(name.toLowerCase());
      if (skill == null) {
        throw new Error(`Bad skill value: "${name}"`);
      }
      return skill;
    }
    getFamiliar(name) {
      return this.familiars.find(
        (f) => f.name.toLowerCase() == name.toLowerCase()
      );
    }
    loadItems(file) {
      for (const columns of rows(file)) {
        if (columns.length < 7) {
          continue;
        }
        const item = new BrowserItem(columns);
        this.items.push(item);
        this.itemsById.set(item.id, item);
        this.itemsByDescid.set(item.descid, item);
        for (const name of [item.name, decodeEntities(item.name)]) {
          if (!this.itemsByName.has(name.toLowerCase())) {
            this.itemsByName.set(name.toLowerCase(), item);
          }
        }
      }
    }
    loadConsumables(file, organ) {
      for (const columns of rows(file)) {
        const item = this.findItem(columns[0]);
        if (item == null || columns.length < 3) {
          continue;
        }
        item[organ] = parseInt(columns[1]);
        item.levelreq = parseInt(columns[2]);
        item.notes = columns[8] ?? "";
      }
    }
    loadSkills(file) {
      for (const [id, name] of rows(file)) {
        if (name == null) {
          continue;
        }
        const skill = new BrowserSkill(parseInt(id), name);
        this.skills.push(skill);
        this.skillsById.set(skill.id, skill);
        this.skillsByName.set(name.toLowerCase(), skill);
        this.skillsByName.set(decodeEntities(name).toLowerCase(), skill);
      }
    }
    loadSkillItems(file) {
      for (const [type, name, modifiers] of rows(file)) {
        const skillName = modifiers?.match(/(?:^|, )Skill: "(.+?)"/)?.[1];
        if (type != "Item" || skillName == null) {
          continue;
        }
        const item = this.findItem(name);
        const skill = this.skillsByName.get(skillName.toLowerCase());
        if (item != null && skill != null) {
          item.skill = skill;
        }
      }
    }
    loadFamiliars(file) {
      for (const [id, name, , , hatchling] of rows(file)) {
        if (hatchling == null) {
          continue;
        }
        const familiar = new BrowserFamiliar(
          parseInt(id),
          name,
          this.findItem(hatchling) ?? noItem
        );
        this.familiars.push(familiar);
        this.familiarsById.set(familiar.id, familiar);
      }
    }
    loadFolds(file) {
      for (const [, ...names] of rows(file)) {
        const group = names.map((name) => this.findItem(name)).filter((item) => item != null);
        for (const item of group) {
          this.folds.set(item, group);
        }
      }
    }
    loadOutfits(file) {
      for (const [, name] of rows(file)) {
        if (name != null) {
          this.outfits.push(name);
        }
      }
    }
    loadCoinmasters(file) {
      const coinmasters = /* @__PURE__ */ new Map();
      for (const [shop, action, cost, name] of rows(file)) {
        const token = coinmasterTokens[shop];
        if (action != "buy" || token == null) {
          continue;
        }
        const item = this.findItem(name.replace(/ \(\d+\)$/, ""));
        if (item == null) {
          continue;
        }
        if (!coinmasters.has(shop)) {
          coinmasters.set(shop, new BrowserCoinmaster(shop, this.getItem(token)));
        }
        const coinmaster = coinmasters.get(shop);
        coinmaster.prices.set(item, parseInt(cost));
        item.seller ??= coinmaster;
      }
    }
  };
  async function fetchText(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to load ${url}: ${response.status} ${response.statusText}`
      );
    }
    return response.text();
  }
  async function loadGameData() {
    const [irratPrices, ...files] = await Promise.all([
      fetchText(IRRAT_PRICES),
      ...mafiaFiles.map((file) => fetchText(`${MAFIA_DATA}${file}.txt`))
    ]);
    return new GameData(
      Object.fromEntries(mafiaFiles.map((file, i) => [file, files[i]])),
      irratPrices
    );
  }

  // src/browser/browserProvider.ts
  var KEY_PREFIX = "kol-accountval-";
  var coolItemProperties = {
    sleazeAirportAlways: "airport1",
    spookyAirportAlways: "airport2",
    stenchAirportAlways: "airport3",
    hotAirportAlways: "airport4",
    coldAirportAlways: "airport5",
    gingerbreadCityAvailable: "gingerbreadcity",
    spacegateAlways: "spacegate",
    frAlways: "fantasyrealm",
    prAlways: "piraterealm",
    crAlways: "cyberrealm",
    neverendingPartyAlways: "neverendingparty",
    voteAlways: "voterregistered",
    daycareOpen: "boxingdaycare",
    hasCosmicBowlingBall: "hascosmicball",
    hasMaydayContract: "maydaykit",
    hasAutumnaton: "autumnaton",
    hasShrunkenHead: "shrunkenhead",
    hasInterestingCoin: "interesting",
    loveTunnelAvailable: "tunnelofloveiotm",
    telegraphOfficeAvailable: "ltt",
    ownsFloristFriar: "floristfriar"
  };
  var pageProperties = {
    chateauAvailable: ["place.php?whichplace=mountains", "chateau"],
    snojoAvailable: ["place.php?whichplace=mountains", "snojo"],
    getawayCampsiteUnlocked: ["place.php?whichplace=woods", "campaway"],
    horseryAvailable: ["place.php?whichplace=town_right", "Horsery"],
    hasDetectiveSchool: ["place.php?whichplace=town_wrong", "Precinct"],
    ownsSpeakeasy: ["place.php?whichplace=town_wrong", "Speakeasy"],
    barrelShrineUnlocked: ["da.php", "bgshrine.gif"]
  };
  var campgroundItems = [
    ["doghouse.gif", "Haunted Doghouse"],
    ["chesstable.gif", "Witchess Set"],
    ["campterminal.gif", "Source terminal"],
    ["teatree", "potted tea tree"],
    ["campground/leaves", "A Guide to Burning Leaves"]
  ];
  var gardenImages = [
    ["pumpkinpatch_", "pumpkin"],
    ["pepperpatch_", "peppermint"],
    ["bonegarden", "skeleton"],
    ["beergarden", "beer"],
    ["wintergarden", "winter"],
    ["thanksgarden", "thanksgarden"],
    ["grassgarden", "grass"],
    ["mushgarden.gif", "mushroom"],
    ["/rockgarden/", "rock"]
  ];
  var blackRoseGarden = /Black Rose Garden \(\d+ days?'?s? growth\)/;
  var itemTypes = {
    food: "food",
    drink: "booze",
    spleen: "spleen item",
    "food helper": "food helper",
    "drink helper": "drink helper",
    sticker: "sticker",
    card: "card",
    folder: "folder",
    bootskin: "bootskin",
    bootspur: "bootspur",
    sixgun: "sixgun",
    potion: "potion",
    avatar: "avatar potion",
    grow: "familiar larva",
    zap: "zap wand",
    familiar: "familiar equipment",
    accessory: "accessory",
    hat: "hat",
    pants: "pants",
    shirt: "shirt",
    weapon: "weapon",
    offhand: "offhand",
    container: "container",
    guardian: "pasta guardian"
  };
  var slots = {
    hat: "hat",
    weapon: "weapon",
    sixgun: "holster",
    offhand: "off-hand",
    container: "back",
    shirt: "shirt",
    pants: "pants",
    accessory: "acc1",
    familiar: "familiar",
    sticker: "sticker1",
    card: "card-sleeve",
    folder: "folder1",
    bootskin: "bootskin",
    bootspur: "bootspur"
  };
  function notAvailable(what) {
    return new Error(`${what} isn't available outside of KoLmafia`);
  }
  function isHardcorePermed(link) {
    let hardcore;
    for (let node = link.nextSibling; node != null; node = node.nextSibling) {
      const text = node.textContent;
      if (node.nodeType == Node.TEXT_NODE) {
        if (text.includes("(HP)")) {
          hardcore = true;
        } else if (text.includes("(P)")) {
          hardcore = false;
        }
        continue;
      }
      if (node.nodeName == "B") {
        if (text.includes("HP")) {
          hardcore = true;
        } else if (text.includes("P")) {
          hardcore = false;
        }
      }
      break;
    }
    return hardcore;
  }
  var BrowserProvider = class {
    constructor(data, output) {
      this.data = data;
      this.output = output;
      for (const [property, coolItem] of Object.entries(coolItemProperties)) {
        this.properties.set(
          property,
          () => (this.status().coolitems ?? "").split(",").includes(coolItem)
        );
      }
      for (const [property, [url, text]] of Object.entries(pageProperties)) {
        this.properties.set(property, () => this.visitCached(url).includes(text));
      }
    }
    data;
    output;
    ele = document.createElement("div");
    pages = /* @__PURE__ */ new Map();
    properties = /* @__PURE__ */ new Map();
    apiData;
    equipped;
    skills;
    terrarium;
    store;
    request(url) {
      const request = new XMLHttpRequest();
      request.open("GET", new URL(url, location.origin).href, false);
      request.send();
      if (request.status != 200) {
        throw new Error(`Visiting ${url} failed with status ${request.status}`);
      }
      return request.responseText;
    }
    visitCached(url) {
      if (!this.pages.has(url)) {
        this.pages.set(url, this.request(url));
      }
      return this.pages.get(url);
    }
    parse(url) {
      return new DOMParser().parseFromString(this.request(url), "text/html");
    }
    api() {
      this.apiData ??= JSON.parse(
        this.request(
          "api.php?what=status,inventory,closet,storage&for=accountval"
        )
      );
      return this.apiData;
    }
    status() {
      return this.api().status;
    }
    apiItems(what) {
      const items2 = /* @__PURE__ */ new Map();
      for (const [id, amount] of Object.entries(this.api()[what])) {
        const item = this.data.itemsById.get(parseInt(id));
        if (item != null) {
          items2.set(item, Number(amount));
        }
      }
      return items2;
    }
    charSheet() {
      if (this.skills != null) {
        return this.skills;
      }
      this.skills = { available: /* @__PURE__ */ new Set(), permed: /* @__PURE__ */ new Map() };
      for (const link of this.parse("charsheet.php").querySelectorAll(
        "a[onclick*=skill]"
      )) {
        const match = link.getAttribute("onclick").match(/\bwhichskill=(\d+)|\bskill\((\d+)\)/);
        if (match == null) {
          continue;
        }
        let id = parseInt(match[1] ?? match[2]);
        if (id == 17 && link.textContent.trim() == "Summon Hilarious Objects") {
          id = 7226;
        }
        const skill = this.data.skillsById.get(id);
        if (skill == null) {
          continue;
        }
        if (link.closest("#permskills") == null) {
          this.skills.available.add(skill);
        }
        const hardcore = isHardcorePermed(link);
        if (hardcore != null) {
          this.skills.permed.set(skill, hardcore);
        }
      }
      return this.skills;
    }
    familiars() {
      if (this.terrarium != null) {
        return this.terrarium;
      }
      this.terrarium = /* @__PURE__ */ new Map();
      for (const row of this.parse("familiar.php").querySelectorAll("tr.frow")) {
        const id = row.querySelector("input[name=newfam]")?.getAttribute("value") ?? row.querySelector("[onclick*='fam(']")?.getAttribute("onclick").match(/fam\((\d+)\)/)?.[1];
        const descid = row.querySelector("[onclick*='descitem(']")?.getAttribute("onclick").match(/descitem\((\d+)\)/)?.[1];
        const familiar = this.data.familiarsById.get(parseInt(id));
        if (familiar != null) {
          this.terrarium.set(
            familiar,
            this.data.itemsByDescid.get(descid) ?? noItem
          );
        }
      }
      return this.terrarium;
    }
    shop() {
      if (this.store != null) {
        return this.store;
      }
      this.store = /* @__PURE__ */ new Map();
      for (const row of this.parse(
        "backoffice.php?which=1"
      ).querySelectorAll("tr.deets")) {
        const price = row.querySelector("input.price");
        const item = this.data.itemsById.get(
          parseInt(price.name.match(/\d+/)[0])
        );
        if (item != null) {
          this.store.set(item, {
            amount: AccountValUtils.toInt(row.cells[2].textContent),
            price: AccountValUtils.toInt(price.value)
          });
        }
      }
      return this.store;
    }
    whois(player) {
      const status = this.status();
      const response = JSON.parse(
        this.request(
          `submitnewchat.php?j=1&pwd=${status.pwd}&playerid=${status.playerid}&graf=${encodeURIComponent(`/whois ${player}`)}`
        )
      );
      return (response.output ?? "").match(
        /showplayer\.php\?who=(\d+)['"][^>]*>(.*?)<\/a>/
      );
    }
    mallPrice() {
      throw notAvailable("Mall searching");
    }
    resolveAllMallPrices() {
      throw notAvailable("Mall searching");
    }
    storeCache(key, value, dataType) {
      const storage = dataType == "transient" ? sessionStorage : localStorage;
      storage.setItem(KEY_PREFIX + key, value);
    }
    retrieveCache(key, dataType) {
      if (dataType == "large_persist" && key == "irrats_item_prices.txt") {
        return this.data.irratPrices;
      }
      if (dataType == "small_persist" && this.properties.has(key)) {
        return String(this.properties.get(key)());
      }
      const storage = dataType == "transient" ? sessionStorage : localStorage;
      return storage.getItem(KEY_PREFIX + key) ?? "";
    }
    print(message, color) {
      message = this.entityEncode(message);
      if (color) {
        this.printHtml(`<font color='${color}'>${message}</font>`);
      } else {
        this.printHtml(message);
      }
    }
    printHtml(message) {
      const line = this.output.ownerDocument.createElement("div");
      line.innerHTML = message || "<br>";
      this.output.append(line);
    }
    abort(message) {
      throw new Error(message);
    }
    visitUrl(url) {
      try {
        return this.request(url);
      } catch (e) {
        console.warn(e);
        return "";
      }
    }
    checkOutdated() {
    }
    myId() {
      return this.status().playerid;
    }
    getPlayerId(name) {
      return this.whois(name)?.[1] ?? name;
    }
    getPlayerName(id) {
      return this.whois(String(id))?.[2].replace(/<[^>]*>/g, "") ?? String(id);
    }
    myMeat() {
      return Number(this.status().meat);
    }
    myClosetMeat() {
      return Number(this.status().closetmeat);
    }
    myStorageMeat() {
      return Number(this.status().storagemeat);
    }
    mySessionMeat() {
      throw notAvailable("Session tracking");
    }
    myFullness() {
      return Number(this.status().full);
    }
    fullnessLimit() {
      throw notAvailable("Fullness limit");
    }
    myInebriety() {
      return Number(this.status().drunk);
    }
    inebrietyLimit() {
      throw notAvailable("Inebriety limit");
    }
    mySpleenUse() {
      return Number(this.status().spleen);
    }
    spleenLimit() {
      throw notAvailable("Spleen limit");
    }
    myLevel() {
      return Number(this.status().level);
    }
    isDarkMode() {
      return false;
    }
    getInventory() {
      return this.apiItems("inventory");
    }
    getCloset() {
      return this.apiItems("closet");
    }
    getStorage() {
      return this.apiItems("storage");
    }
    getStash() {
      const items2 = /* @__PURE__ */ new Map();
      for (const option of this.parse("clan_stash.php").querySelectorAll(
        "form[name=takegoodies] option"
      )) {
        const item = this.data.itemsById.get(
          parseInt(option.getAttribute("value"))
        );
        const amount = option.textContent.match(/\(([\d,]+)\)(?: \(-[\d,]*\))?$/);
        if (item != null) {
          items2.set(item, amount ? AccountValUtils.toInt(amount[1]) : 1);
        }
      }
      return items2;
    }
    getDisplay() {
      const items2 = /* @__PURE__ */ new Map();
      new PageResolver().getDisplaycase(parseInt(this.myId())).forEach(
        (amount, { item }) => items2.set(item, (items2.get(item) ?? 0) + amount)
      );
      return items2;
    }
    getShop() {
      return new Map(
        [...this.shop()].map(([item, { amount }]) => [
          item,
          amount
        ])
      );
    }
    mySessionItems() {
      return /* @__PURE__ */ new Map();
    }
    getCampground() {
      const page = this.visitCached("campground.php");
      return new Map(
        campgroundItems.filter(([image]) => page.includes(image)).map(([, name]) => [this.data.getItem(name), 1])
      );
    }
    getFoldables(item) {
      return this.data.folds.get(item) ?? [];
    }
    toItem(val) {
      return this.data.itemsById.get(val) ?? noItem;
    }
    toFamiliar(val) {
      if (typeof val == "number") {
        return this.data.familiarsById.get(val) ?? noFamiliar;
      }
      return this.data.getFamiliar(val) ?? noFamiliar;
    }
    entityEncode(val) {
      this.ele.textContent = val;
      return this.ele.innerHTML;
    }
    entityDecode(val) {
      this.ele.innerHTML = val;
      return this.ele.textContent;
    }
    autosellPrice(item) {
      return item.autosell;
    }
    shopPrice(item) {
      return this.shop().get(item)?.price ?? 0;
    }
    sellPrice(coinmaster, item) {
      return coinmaster.prices.get(item) ?? 0;
    }
    historicalPrice() {
      return 0;
    }
    historicalAge() {
      return 0;
    }
    addEquipped(item, amount) {
      if (item != null) {
        this.equipped.set(item, (this.equipped.get(item) ?? 0) + amount);
      }
    }
    equippedAmount(item) {
      if (this.equipped == null) {
        const { equipment, stickers } = this.status();
        this.equipped = /* @__PURE__ */ new Map();
        for (const [slot, value] of Object.entries(equipment)) {
          if (slot == "fakehands") {
            this.addEquipped(this.data.getItem("fake hand"), Number(value));
          } else {
            this.addEquipped(this.data.itemsById.get(Number(value)), 1);
          }
        }
        for (const sticker of stickers ?? []) {
          this.addEquipped(this.data.itemsById.get(Number(sticker)), 1);
        }
      }
      return this.equipped.get(item) ?? 0;
    }
    familiarEquippedEquipment(fam) {
      return this.familiars().get(fam) ?? noItem;
    }
    myFamiliar() {
      return this.toFamiliar(Number(this.status().familiar));
    }
    haveFamiliar(fam) {
      return fam == this.myFamiliar() || this.familiars().has(fam);
    }
    haveSkill(skill) {
      return this.charSheet().available.has(skill);
    }
    getPermedSkills() {
      return Object.fromEntries(
        [...this.charSheet().permed].map(([skill, hardcore]) => [
          skill.name,
          hardcore
        ])
      );
    }
    associatedSkill(item) {
      return item.skill;
    }
    myGardenType() {
      const page = this.visitCached("campground.php");
      const garden = gardenImages.find(([image]) => page.includes(image));
      if (garden != null) {
        return garden[1];
      }
      return blackRoseGarden.test(page) ? "black_rose" : "none";
    }
    getWorkshed() {
      return noItem;
    }
    allNormalOutfits() {
      return this.data.outfits;
    }
    itemType(item) {
      return itemTypes[item.use] ?? "";
    }
    getItem(name) {
      if (typeof name == "string") {
        return this.data.getItem(name);
      }
      const item = this.data.itemsById.get(name);
      if (item == null) {
        throw new Error(`Bad item value: "${name}"`);
      }
      return item;
    }
    allItems() {
      return this.data.items;
    }
    noItem() {
      return noItem;
    }
    allFamiliars() {
      return this.data.familiars;
    }
    getSkill(name) {
      return this.data.getSkill(name);
    }
    allSkills() {
      return this.data.skills;
    }
    noSkill() {
      return noSkill;
    }
    noSlot() {
      return "none";
    }
    toSlot(item) {
      return slots[item.use] ?? "none";
    }
    evalJsFilter() {
      throw notAvailable("jsfilter");
    }
  };

  // src/browser/index.ts
  var gameData;
  function appendLine(output, text, color) {
    const line = output.ownerDocument.createElement("div");
    line.style.color = color;
    line.textContent = text;
    output.append(line);
    return line;
  }
  async function runCommand(output, input) {
    const view = output.ownerDocument.defaultView;
    const command = input.value.trim().replace(/^accountval(\.js)?\b\s*/i, "");
    input.value = "";
    input.disabled = true;
    appendLine(output, `> accountval ${command}`, "gray");
    const status = appendLine(output, "Running accountval...", "gray");
    output.scrollTop = output.scrollHeight;
    try {
      gameData ??= loadGameData().catch((e) => {
        gameData = void 0;
        throw e;
      });
      setProvider(new BrowserProvider(await gameData, output));
      await new Promise(
        (resolve) => view.requestAnimationFrame(() => view.setTimeout(resolve))
      );
      const { run: run2 } = (init_accountval(), __toCommonJS(accountval_exports));
      status.remove();
      run2(command == "" ? void 0 : command);
    } catch (e) {
      console.error(e);
      status.remove();
      appendLine(output, String(e), "red");
    } finally {
      input.disabled = false;
      input.focus();
      output.scrollTop = output.scrollHeight;
    }
  }
  function main() {
    const frame = window.top.mainpane ?? window;
    const doc = frame.document;
    doc.open();
    doc.write(
      `<!DOCTYPE html>
<html>
  <head><title>AccountVal</title></head>
  <body style="margin: 0; height: 100vh; display: flex; flex-direction: column; font-family: Arial, Helvetica, sans-serif; font-size: 10pt">
    <div id="output" style="flex: 1; overflow-y: auto; padding: 4px"></div>
    <form id="cli" style="margin: 0; padding: 4px; border-top: 1px solid #ccc">
      <input id="command" autocomplete="off" placeholder="accountval parameters, try 'help'" style="width: 100%; box-sizing: border-box">
    </form>
  </body>
</html>`
    );
    doc.close();
    const output = doc.getElementById("output");
    const input = doc.getElementById("command");
    doc.getElementById("cli").addEventListener("submit", (event) => {
      event.preventDefault();
      runCommand(output, input);
    });
    input.focus();
  }
  return __toCommonJS(index_exports);
})();
