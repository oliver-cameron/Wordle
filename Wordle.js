var refresh = "";
var mode = "easy";
var refreshSuggest = "";
var win = false;
var keypress = false;
var time = 0;
var loc = { x: 0, y: 0 };
var hardtime;
var medtime;
cchange1();
cchange2();
cchange3();
cchange4();
cchange5();
cchange6();
function cchange2(){document.getElementById('colour2').style.background = document.getElementById('colour2').value; document.getElementById("c2").style.color = document.getElementById('colour2').value}
function cchange1(){document.getElementById('colour1').style.background = document.getElementById('colour1').value; document.getElementById("c1").style.color = document.getElementById('colour1').value}
function cchange3(){document.getElementById('colour3').style.background = document.getElementById('colour3').value; document.getElementById("c3").style.color = document.getElementById('colour3').value}
function cchange4(){document.getElementById('colour4').style.background = document.getElementById('colour4').value; document.getElementById("c4").style.color = document.getElementById('colour4').value; document.getElementById("key1").style.color = document.getElementById('colour4').value;}
function cchange5(){document.getElementById('colour5').style.background = document.getElementById('colour5').value; document.getElementById("c5").style.color = document.getElementById('colour5').value; document.getElementById("key2").style.color = document.getElementById('colour5').value;}
function cchange6(){document.getElementById('colour6').style.background = document.getElementById('colour6').value; document.getElementById("c6").style.color = document.getElementById('colour6').value; document.getElementById("key3").style.color = document.getElementById('colour6').value;}
var scheme = [
  document.getElementById("colour2").value,
  document.getElementById("colour1").value,
  document.getElementById("colour3").value,
  document.getElementById("colour4").value,
  document.getElementById("colour5").value,
  document.getElementById("colour6").value,
];
function modeEasy() {
  document.getElementById("levelEasy").style.background = scheme[1];
  document.getElementById("levelMedium").style.background = scheme[3];
  document.getElementById("levelHard").style.background = scheme[3];
  document.getElementById("level").innerText =
    "Easy? Nice way to start off, I suppose.";
  document.getElementById("levelexplin").innerText =
    "This mode will give you unlimited time and you can choose any word you like.";
  mode = "easy";
  document.getElementById("gobutton").style.display = "block";
}
function modeMedium() {
  document.getElementById("levelEasy").style.background = scheme[3];
  document.getElementById("levelMedium").style.background = scheme[1];
  document.getElementById("levelHard").style.background = scheme[3];
  document.getElementById("level").innerText =
    "Medium? Not too easy, not too hard.";
  document.getElementById("levelexplin").innerText =
    "This mode will give you a time limit of 3 miniutes to solve the Wordle and you can choose any word you like.";
  mode = "medium";
  document.getElementById("gobutton").style.display = "block";
}
function modeHard() {
  document.getElementById("levelEasy").style.background = scheme[3];
  document.getElementById("levelMedium").style.background = scheme[3];
  document.getElementById("levelHard").style.background = scheme[1];
  document.getElementById("level").innerText =
    "Hard? Up for a challenge, I presume.";
  document.getElementById("levelexplin").innerText =
    "This mode will give you 10 seconds for each guess or it will enter your last guess. You can only choose from the words in the list.";
  mode = "hard";
  document.getElementById("gobutton").style.display = "block";
}
var board = [
  [
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
  ],
  [
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
  ],
  [
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
  ],
  [
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
  ],
  [
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
  ],
  [
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
    { text: "", colour: scheme[1] },
  ],
];
var words = [
  "aback",
  "abase",
  "abate",
  "abide",
  "abode",
  "abort",
  "about",
  "abuse",
  "abuzz",
  "aches",
  "achoo",
  "acids",
  "acidy",
  "actor",
  "acute",
  "adapt",
  "added",
  "admin",
  "admit",
  "adobe",
  "adopt",
  "adorn",
  "adult",
  "affix",
  "afoot",
  "afoul",
  "after",
  "again",
  "agent",
  "aging",
  "aglow",
  "agony",
  "agree",
  "ahead",
  "ahold",
  "aided",
  "aimed",
  "aired",
  "aisle",
  "alarm",
  "alert",
  "alias",
  "alien",
  "alike",
  "allay",
  "allot",
  "alloy",
  "aloft",
  "alone",
  "aloof",
  "aloud",
  "alpha",
  "amaze",
  "amber",
  "amend",
  "amino",
  "amiss",
  "among",
  "amour",
  "amuse",
  "angel",
  "anger",
  "angle",
  "anglo",
  "angry",
  "anime",
  "ankle",
  "annul",
  "anvil",
  "apart",
  "apnea",
  "apple",
  "apply",
  "apron",
  "areas",
  "arena",
  "armed",
  "armor",
  "arose",
  "array",
  "arson",
  "artsy",
  "aside",
  "asked",
  "askew",
  "asset",
  "atoms",
  "atone",
  "audio",
  "audit",
  "aunty",
  "avail",
  "avert",
  "avoid",
  "await",
  "awake",
  "award",
  "aware",
  "awash",
  "awful",
  "awoke",
  "babel",
  "babes",
  "backs",
  "bacon",
  "baddy",
  "badge",
  "badly",
  "bagel",
  "baggy",
  "baked",
  "baker",
  "bakes",
  "baler",
  "balky",
  "balls",
  "balmy",
  "bands",
  "bandy",
  "banks",
  "bared",
  "barks",
  "barmy",
  "baron",
  "based",
  "basic",
  "basil",
  "basin",
  "batch",
  "bates",
  "baths",
  "baton",
  "batty",
  "beach",
  "beads",
  "beady",
  "beaky",
  "beams",
  "beamy",
  "beans",
  "beard",
  "bears",
  "beast",
  "bebop",
  "beech",
  "beeps",
  "beers",
  "began",
  "begin",
  "begot",
  "beige",
  "belch",
  "belle",
  "bells",
  "belly",
  "below",
  "belts",
  "bench",
  "bends",
  "bendy",
  "berth",
  "beset",
  "besot",
  "bests",
  "bibbs",
  "bible",
  "bicep",
  "bides",
  "bidet",
  "biked",
  "biker",
  "bikes",
  "bills",
  "binge",
  "bingo",
  "bipod",
  "birch",
  "birds",
  "birth",
  "bison",
  "bites",
  "black",
  "blade",
  "blame",
  "blank",
  "blaze",
  "bleak",
  "bleed",
  "bleep",
  "blend",
  "bless",
  "blest",
  "blimp",
  "blind",
  "bling",
  "blink",
  "bliss",
  "bloat",
  "block",
  "blond",
  "blood",
  "bloom",
  "blown",
  "blows",
  "blowy",
  "blues",
  "bluff",
  "blunt",
  "blurs",
  "board",
  "boast",
  "boats",
  "bogus",
  "boils",
  "bombs",
  "boned",
  "bones",
  "books",
  "boost",
  "booth",
  "booze",
  "bored",
  "borne",
  "bound",
  "bowel",
  "bowls",
  "boxed",
  "boxer",
  "boxes",
  "brace",
  "braid",
  "brail",
  "brain",
  "brake",
  "brand",
  "brass",
  "brawl",
  "bread",
  "breed",
  "bribe",
  "bring",
  "broad",
  "broke",
  "brown",
  "brush",
  "brute",
  "budge",
  "built",
  "bully",
  "bumpy",
  "bunch",
  "bunny",
  "burns",
  "burnt",
  "bushy",
  "butts",
  "buyer",
  "cabin",
  "cable",
  "cache",
  "caddy",
  "cadet",
  "caked",
  "cakes",
  "calve",
  "camel",
  "cameo",
  "camps",
  "canal",
  "candy",
  "canoe",
  "canon",
  "cards",
  "cargo",
  "carol",
  "carry",
  "carts",
  "carve",
  "cased",
  "casts",
  "catch",
  "cause",
  "caved",
  "caves",
  "cease",
  "cedar",
  "cello",
  "cells",
  "celts",
  "cents",
  "chain",
  "chair",
  "chalk",
  "champ",
  "chart",
  "chase",
  "cheap",
  "cheat",
  "check",
  "cheek",
  "cheer",
  "chefs",
  "chess",
  "chest",
  "chews",
  "chewy",
  "chick",
  "chief",
  "child",
  "chime",
  "chips",
  "chirp",
  "chive",
  "choir",
  "choke",
  "chomp",
  "chore",
  "chuck",
  "churn",
  "chute",
  "cider",
  "cigar",
  "claim",
  "clasp",
  "class",
  "clean",
  "cleat",
  "cliff",
  "climb",
  "cloak",
  "clone",
  "close",
  "cloth",
  "cloud",
  "clout",
  "clown",
  "clubs",
  "clues",
  "coast",
  "coded",
  "coils",
  "coins",
  "colds",
  "color",
  "combo",
  "comes",
  "comfy",
  "condo",
  "cones",
  "coral",
  "cords",
  "corny",
  "costs",
  "couch",
  "cough",
  "could",
  "count",
  "cover",
  "covid",
  "crabs",
  "crack",
  "craft",
  "crane",
  "crawl",
  "craze",
  "crazy",
  "cream",
  "cribs",
  "cried",
  "cries",
  "crime",
  "crisp",
  "croak",
  "crowd",
  "crown",
  "crude",
  "crumb",
  "cupid",
  "cured",
  "curly",
  "curry",
  "curve",
  "curvy",
  "cutch",
  "cuter",
  "cysts",
  "daddy",
  "daily",
  "dairy",
  "daisy",
  "dance",
  "dandy",
  "darts",
  "dated",
  "dates",
  "deals",
  "dealt",
  "death",
  "debts",
  "debut",
  "decaf",
  "decay",
  "decks",
  "decor",
  "decoy",
  "deeds",
  "deems",
  "deity",
  "delay",
  "delta",
  "delve",
  "demon",
  "denim",
  "dense",
  "depth",
  "derby",
  "desks",
  "deter",
  "detox",
  "diary",
  "diced",
  "dices",
  "diets",
  "dingy",
  "dirty",
  "discs",
  "ditch",
  "ditto",
  "ditty",
  "dives",
  "docks",
  "dodge",
  "doggy",
  "doing",
  "dolls",
  "donor",
  "doors",
  "doped",
  "doted",
  "dotty",
  "dough",
  "doves",
  "downs",
  "dowry",
  "dozer",
  "dozes",
  "draft",
  "drags",
  "drain",
  "drake",
  "drama",
  "drank",
  "drape",
  "drawl",
  "drawn",
  "draws",
  "dread",
  "dream",
  "dress",
  "dried",
  "drier",
  "drill",
  "drink",
  "drive",
  "droid",
  "drone",
  "drool",
  "drops",
  "drove",
  "drown",
  "drugs",
  "druid",
  "drums",
  "drunk",
  "dryer",
  "duals",
  "ducts",
  "dudes",
  "duets",
  "duked",
  "dukes",
  "dumps",
  "dunce",
  "dunes",
  "duped",
  "dusty",
  "duvet",
  "dwarf",
  "dweeb",
  "dwell",
  "dying",
  "eager",
  "eagle",
  "early",
  "earns",
  "earth",
  "eased",
  "easel",
  "eaten",
  "eater",
  "ebony",
  "edema",
  "edges",
  "edits",
  "eight",
  "eject",
  "elate",
  "elbow",
  "elder",
  "elect",
  "elite",
  "elope",
  "elude",
  "email",
  "embed",
  "ember",
  "emend",
  "emoji",
  "emote",
  "empty",
  "enact",
  "ended",
  "enema",
  "enemy",
  "enjoy",
  "enter",
  "entry",
  "equal",
  "equip",
  "erase",
  "erect",
  "erode",
  "error",
  "erupt",
  "essay",
  "ether",
  "ethic",
  "etude",
  "euros",
  "event",
  "every",
  "evils",
  "exact",
  "exams",
  "excel",
  "exile",
  "exist",
  "exits",
  "expel",
  "extra",
  "fable",
  "faced",
  "faces",
  "facet",
  "facts",
  "fades",
  "fails",
  "faint",
  "fairs",
  "fairy",
  "fakes",
  "falls",
  "false",
  "famed",
  "fancy",
  "fangs",
  "farce",
  "farms",
  "fatal",
  "fated",
  "fatty",
  "favor",
  "fazed",
  "fears",
  "feast",
  "fecal",
  "feeds",
  "feels",
  "feint",
  "feist",
  "fella",
  "felon",
  "fence",
  "ferry",
  "fetal",
  "fetch",
  "fever",
  "fiber",
  "field",
  "fiend",
  "fifth",
  "fifty",
  "fight",
  "files",
  "films",
  "filth",
  "final",
  "finds",
  "fined",
  "fired",
  "fires",
  "first",
  "fishy",
  "fists",
  "fitch",
  "fiver",
  "fives",
  "fixed",
  "fixer",
  "fixes",
  "fizzy",
  "flags",
  "flake",
  "flame",
  "flank",
  "flaps",
  "flare",
  "flash",
  "flask",
  "flats",
  "fleas",
  "fleet",
  "flesh",
  "flied",
  "flies",
  "fling",
  "flips",
  "flirt",
  "float",
  "flock",
  "flood",
  "floor",
  "flora",
  "flour",
  "flown",
  "fluff",
  "fluid",
  "fluke",
  "flume",
  "flush",
  "flute",
  "flyer",
  "foamy",
  "focus",
  "foggy",
  "folks",
  "fonts",
  "foods",
  "fools",
  "force",
  "forge",
  "forgo",
  "forks",
  "forth",
  "forty",
  "forum",
  "found",
  "frail",
  "frame",
  "frank",
  "fraud",
  "freak",
  "freed",
  "fresh",
  "fried",
  "fries",
  "frisk",
  "frock",
  "frogs",
  "front",
  "frost",
  "frown",
  "fruit",
  "fryer",
  "fudge",
  "fuels",
  "fully",
  "fumed",
  "fumes",
  "funds",
  "funny",
  "fused",
  "fussy",
  "fuzzy",
  "gable",
  "gaffs",
  "gains",
  "gales",
  "gamed",
  "gamer",
  "games",
  "gangs",
  "gases",
  "gasps",
  "gassy",
  "gated",
  "gaunt",
  "gears",
  "geeks",
  "geeky",
  "genes",
  "genie",
  "genre",
  "gents",
  "genus",
  "germs",
  "ghost",
  "giant",
  "giddy",
  "gifts",
  "girls",
  "girly",
  "given",
  "glade",
  "glare",
  "glass",
  "glaze",
  "glean",
  "glide",
  "gloat",
  "globe",
  "globs",
  "gloom",
  "glory",
  "gloss",
  "glove",
  "glows",
  "glued",
  "glues",
  "gnarl",
  "gnome",
  "goads",
  "goats",
  "going",
  "goods",
  "goofy",
  "goopy",
  "goose",
  "gored",
  "gouge",
  "grabs",
  "grace",
  "grade",
  "grain",
  "grand",
  "grant",
  "grape",
  "graph",
  "grasp",
  "grass",
  "gravy",
  "graze",
  "great",
  "greed",
  "green",
  "greet",
  "grief",
  "grill",
  "grind",
  "gripe",
  "grips",
  "groan",
  "groom",
  "grope",
  "gross",
  "group",
  "grove",
  "growl",
  "grown",
  "grows",
  "gruel",
  "grunt",
  "guard",
  "guess",
  "guest",
  "guide",
  "guild",
  "guilt",
  "gulps",
  "gummy",
  "gusts",
  "gutsy",
  "habit",
  "hacks",
  "hairy",
  "halls",
  "halve",
  "hands",
  "handy",
  "hangs",
  "happy",
  "hardy",
  "harsh",
  "hatch",
  "hated",
  "hater",
  "hates",
  "haunt",
  "haven",
  "havoc",
  "hazed",
  "heads",
  "heard",
  "heart",
  "heavy",
  "heist",
  "helps",
  "hence",
  "herby",
  "hides",
  "hiked",
  "hiker",
  "hikes",
  "hills",
  "hinds",
  "hinge",
  "hints",
  "hippo",
  "hippy",
  "hired",
  "hitch",
  "hoard",
  "hobby",
  "hocus",
  "holds",
  "holed",
  "holes",
  "holey",
  "homed",
  "honor",
  "hoods",
  "hoots",
  "hopes",
  "horde",
  "horse",
  "hosed",
  "hoses",
  "hosts",
  "hound",
  "hours",
  "hover",
  "howdy",
  "hubby",
  "human",
  "humid",
  "humor",
  "humph",
  "humps",
  "hurry",
  "hurts",
  "icier",
  "icing",
  "icons",
  "ideal",
  "ideas",
  "idiot",
  "idles",
  "idols",
  "igloo",
  "image",
  "inbox",
  "incur",
  "index",
  "inept",
  "inked",
  "inlet",
  "inner",
  "input",
  "inset",
  "intel",
  "intro",
  "iodin",
  "ionic",
  "irate",
  "irons",
  "irony",
  "issue",
  "items",
  "ivory",
  "jacks",
  "jaded",
  "jades",
  "jails",
  "janky",
  "jaunt",
  "jeans",
  "jeers",
  "jelly",
  "jerks",
  "jerky",
  "jests",
  "jewel",
  "jiffy",
  "jiggy",
  "jinks",
  "jived",
  "jives",
  "joins",
  "joint",
  "joked",
  "joker",
  "jokes",
  "jokey",
  "jolly",
  "jolts",
  "jowls",
  "judge",
  "juice",
  "juicy",
  "jumbo",
  "jumps",
  "jumpy",
  "junky",
  "juror",
  "juvie",
  "karat",
  "karma",
  "kayak",
  "kebab",
  "keels",
  "keeps",
  "kefir",
  "keyed",
  "kicks",
  "kiddo",
  "kiddy",
  "kings",
  "kiosk",
  "kited",
  "kites",
  "knack",
  "kneel",
  "knees",
  "knell",
  "knife",
  "knobs",
  "knock",
  "known",
  "knows",
  "knubs",
  "koala",
  "kooks",
  "kraft",
  "label",
  "labor",
  "laced",
  "laces",
  "lacks",
  "lager",
  "lairy",
  "lakes",
  "lambs",
  "lamps",
  "lands",
  "lapse",
  "large",
  "lasts",
  "later",
  "laugh",
  "lawed",
  "lawns",
  "layer",
  "leach",
  "leady",
  "leaks",
  "leaky",
  "leaps",
  "learn",
  "lease",
  "leash",
  "least",
  "leave",
  "ledge",
  "leech",
  "leeks",
  "legal",
  "leggy",
  "legit",
  "lemon",
  "lemur",
  "lends",
  "letch",
  "letup",
  "level",
  "lever",
  "lexis",
  "liars",
  "libel",
  "libra",
  "lifts",
  "light",
  "liked",
  "likes",
  "limit",
  "lined",
  "linen",
  "liner",
  "lingo",
  "lings",
  "links",
  "lions",
  "lisps",
  "lists",
  "lived",
  "liver",
  "lives",
  "loads",
  "loans",
  "loath",
  "lobby",
  "local",
  "locks",
  "lodge",
  "lofts",
  "logic",
  "login",
  "loner",
  "longs",
  "looks",
  "looms",
  "loops",
  "loose",
  "lords",
  "loser",
  "loses",
  "lossy",
  "lotto",
  "lotus",
  "lousy",
  "loved",
  "lover",
  "loves",
  "lower",
  "loyal",
  "lucid",
  "lucks",
  "lucky",
  "lumpy",
  "lunch",
  "lungs",
  "lurch",
  "lured",
  "lurks",
  "lying",
  "lymph",
  "lyric",
  "macho",
  "macro",
  "madam",
  "madly",
  "mafia",
  "magic",
  "maids",
  "mains",
  "major",
  "maker",
  "males",
  "males",
  "mango",
  "mania",
  "manic",
  "manly",
  "maple",
  "march",
  "marks",
  "marry",
  "marsh",
  "masks",
  "mason",
  "mates",
  "mauls",
  "maxim",
  "maybe",
  "mayor",
  "meals",
  "means",
  "meant",
  "meaty",
  "medal",
  "melon",
  "melts",
  "mends",
  "merch",
  "mercy",
  "merge",
  "merit",
  "merry",
  "messy",
  "metal",
  "meter",
  "metro",
  "micro",
  "midst",
  "might",
  "miles",
  "milky",
  "mimic",
  "mince",
  "minds",
  "minor",
  "mints",
  "minty",
  "mirky",
  "mites",
  "mixed",
  "mixer",
  "mocha",
  "mocks",
  "modal",
  "model",
  "modem",
  "modes",
  "mogul",
  "moist",
  "mommy",
  "month",
  "moons",
  "moose",
  "moral",
  "motel",
  "motor",
  "motto",
  "mound",
  "mount",
  "mourn",
  "mouse",
  "mouth",
  "moved",
  "mover",
  "moves",
  "movie",
  "mucky",
  "mucus",
  "muddy",
  "multi",
  "mummy",
  "music",
  "muted",
  "myths",
  "nacho",
  "nails",
  "naive",
  "naked",
  "named",
  "names",
  "nanny",
  "nasal",
  "nasty",
  "natal",
  "navel",
  "nears",
  "necks",
  "needs",
  "needy",
  "nerds",
  "nerdy",
  "nerve",
  "nervy",
  "nests",
  "never",
  "newly",
  "nicer",
  "niche",
  "niece",
  "night",
  "nines",
  "ninth",
  "noble",
  "nobly",
  "noisy",
  "nomad",
  "north",
  "noses",
  "nosey",
  "noted",
  "notes",
  "nouns",
  "nudge",
  "nuked",
  "nurse",
  "nutty",
  "nylon",
  "oasis",
  "obese",
  "obeys",
  "ocean",
  "oddly",
  "offal",
  "offer",
  "often",
  "oiled",
  "older",
  "olive",
  "omega",
  "omens",
  "onion",
  "onset",
  "opens",
  "opera",
  "opium",
  "organ",
  "ought",
  "ounce",
  "ousts",
  "outer",
  "ovary",
  "ovens",
  "overt",
  "owing",
  "owned",
  "owner",
  "oxide",
  "ozone",
  "paced",
  "pacer",
  "pacts",
  "paged",
  "pager",
  "pages",
  "pains",
  "paint",
  "pairs",
  "palms",
  "panda",
  "panel",
  "panic",
  "pants",
  "panty",
  "paper",
  "parse",
  "parts",
  "party",
  "pasta",
  "paste",
  "pasty",
  "patch",
  "paths",
  "peace",
  "peach",
  "pearl",
  "pecan",
  "pedal",
  "peels",
  "peers",
  "penny",
  "peril",
  "perky",
  "pesto",
  "pests",
  "petal",
  "photo",
  "piano",
  "piece",
  "piled",
  "pinch",
  "pitch",
  "pivot",
  "pizza",
  "place",
  "plain",
  "plane",
  "plank",
  "plans",
  "plant",
  "plate",
  "plays",
  "plugs",
  "plump",
  "plums",
  "poach",
  "poems",
  "poets",
  "poked",
  "pokes",
  "pooch",
  "pores",
  "pound",
  "power",
  "prank",
  "prays",
  "price",
  "pride",
  "print",
  "prior",
  "prism",
  "privy",
  "prize",
  "probe",
  "props",
  "proud",
  "prude",
  "puffy",
  "pulse",
  "pumps",
  "punch",
  "puppy",
  "puree",
  "purge",
  "purse",
  "putty",
  "pylon",
  "quads",
  "quake",
  "queen",
  "query",
  "quest",
  "queue",
  "quick",
  "quiet",
  "quill",
  "quilt",
  "quirk",
  "quite",
  "quits",
  "quota",
  "quote",
  "rabid",
  "raced",
  "racer",
  "races",
  "racks",
  "radar",
  "radio",
  "raged",
  "rages",
  "rails",
  "rains",
  "rainy",
  "raked",
  "rally",
  "ramen",
  "ramps",
  "ranch",
  "range",
  "rapid",
  "raspy",
  "rated",
  "rates",
  "ratio",
  "raved",
  "raven",
  "razer",
  "razor",
  "react",
  "ready",
  "realm",
  "reams",
  "rebel",
  "rebid",
  "rebuy",
  "recap",
  "recon",
  "rehab",
  "reign",
  "reins",
  "relay",
  "relic",
  "remit",
  "remix",
  "renal",
  "renew",
  "repay",
  "reply",
  "reset",
  "resin",
  "retro",
  "retry",
  "reuse",
  "rhino",
  "rhyme",
  "rides",
  "ridge",
  "rifle",
  "rifts",
  "right",
  "rigid",
  "rings",
  "rinse",
  "riots",
  "ripen",
  "rises",
  "risks",
  "risky",
  "rites",
  "river",
  "roads",
  "roars",
  "roast",
  "robot",
  "rocks",
  "rocky",
  "rodeo",
  "rogue",
  "roles",
  "rolls",
  "roots",
  "roped",
  "ropes",
  "roses",
  "rough",
  "round",
  "rouse",
  "route",
  "rover",
  "royal",
  "ruble",
  "rugby",
  "ruins",
  "ruled",
  "ruler",
  "rules",
  "rumor",
  "runny",
  "rural",
  "rusty",
  "saber",
  "sacks",
  "sadly",
  "safer",
  "saint",
  "salad",
  "sales",
  "salon",
  "salsa",
  "salts",
  "salty",
  "sandy",
  "satin",
  "sauce",
  "saucy",
  "sauna",
  "saved",
  "saver",
  "saves",
  "savor",
  "scald",
  "scale",
  "scalp",
  "scams",
  "scare",
  "scarf",
  "scary",
  "scene",
  "scent",
  "scoff",
  "scone",
  "scope",
  "score",
  "scorn",
  "scour",
  "scram",
  "scrub",
  "scuba",
  "scuff",
  "seats",
  "sects",
  "seeds",
  "seeks",
  "seems",
  "seize",
  "sends",
  "sense",
  "serve",
  "setup",
  "seven",
  "sever",
  "sewer",
  "shack",
  "shade",
  "shaft",
  "shake",
  "shall",
  "shame",
  "shape",
  "shark",
  "shelf",
  "shell",
  "shift",
  "shine",
  "shiny",
  "ships",
  "shirt",
  "shock",
  "shoot",
  "shore",
  "shots",
  "shout",
  "shred",
  "shrug",
  "sided",
  "silky",
  "silly",
  "since",
  "sings",
  "sinks",
  "sinus",
  "sited",
  "sites",
  "sixth",
  "sixty",
  "sized",
  "sizes",
  "skate",
  "skies",
  "skill",
  "slack",
  "slang",
  "slave",
  "sleep",
  "sleet",
  "slept",
  "slick",
  "slide",
  "slime",
  "sling",
  "slope",
  "slosh",
  "sloth",
  "slung",
  "slurp",
  "slush",
  "small",
  "smart",
  "smash",
  "smear",
  "smell",
  "smelt",
  "smile",
  "smoke",
  "smoky",
  "snack",
  "snail",
  "snake",
  "snare",
  "snoop",
  "snore",
  "snuff",
  "sober",
  "socks",
  "softy",
  "solve",
  "sound",
  "space",
  "spade",
  "spare",
  "spark",
  "speak",
  "spear",
  "speed",
  "speel",
  "spicy",
  "spied",
  "spies",
  "spiky",
  "spill",
  "spine",
  "spite",
  "split",
  "spoil",
  "spoke",
  "spoof",
  "spoon",
  "sport",
  "spots",
  "spout",
  "squad",
  "squid",
  "stack",
  "staff",
  "stage",
  "stair",
  "stalk",
  "stamp",
  "stare",
  "stars",
  "start",
  "stash",
  "state",
  "steak",
  "steal",
  "steam",
  "steel",
  "steep",
  "steps",
  "stich",
  "stick",
  "stiff",
  "sting",
  "stink",
  "stint",
  "stock",
  "stoke",
  "stomp",
  "stone",
  "stood",
  "stool",
  "stoop",
  "store",
  "storm",
  "story",
  "stove",
  "straw",
  "stray",
  "stubs",
  "stuck",
  "stuff",
  "stunt",
  "style",
  "sugar",
  "suite",
  "sunny",
  "super",
  "sushi",
  "sweat",
  "sweet",
  "swell",
  "swept",
  "swift",
  "swing",
  "swipe",
  "swish",
  "sword",
  "sworn",
  "syrup",
  "table",
  "taboo",
  "taken",
  "taker",
  "takes",
  "tales",
  "talon",
  "tango",
  "tardy",
  "taste",
  "tasty",
  "taxed",
  "taxes",
  "teach",
  "tease",
  "teeth",
  "tenet",
  "tenth",
  "thank",
  "theft",
  "their",
  "theme",
  "there",
  "these",
  "thick",
  "thief",
  "thigh",
  "thing",
  "think",
  "thorn",
  "those",
  "three",
  "threw",
  "throw",
  "thugs",
  "thumb",
  "tibia",
  "tiger",
  "tight",
  "timer",
  "tinge",
  "tipsy",
  "tired",
  "tires",
  "titan",
  "titer",
  "title",
  "toast",
  "token",
  "tonic",
  "tooth",
  "topic",
  "torch",
  "torso",
  "total",
  "touch",
  "tough",
  "towel",
  "tower",
  "toxic",
  "trace",
  "tract",
  "trade",
  "train",
  "trait",
  "tramp",
  "trash",
  "tread",
  "trend",
  "trial",
  "trick",
  "tried",
  "truce",
  "truck",
  "truly",
  "trunk",
  "truth",
  "tulip",
  "tummy",
  "tuned",
  "tuner",
  "turbo",
  "tweak",
  "tweed",
  "twice",
  "twirl",
  "twist",
  "typed",
  "ulcer",
  "ultra",
  "uncle",
  "under",
  "undue",
  "unfit",
  "unify",
  "union",
  "unite",
  "unity",
  "untie",
  "until",
  "unzip",
  "upend",
  "upper",
  "upset",
  "urban",
  "urine",
  "usage",
  "using",
  "usurp",
  "vague",
  "valet",
  "valid",
  "value",
  "valve",
  "vapor",
  "vault",
  "vegan",
  "venom",
  "venue",
  "verge",
  "verve",
  "video",
  "villa",
  "vinyl",
  "viola",
  "viper",
  "viral",
  "visit",
  "vital",
  "vivid",
  "vocal",
  "voice",
  "vomit",
  "vouch",
  "wacky",
  "waded",
  "wager",
  "wages",
  "wagon",
  "waist",
  "walks",
  "walls",
  "wants",
  "warns",
  "warty",
  "washy",
  "waste",
  "watch",
  "water",
  "waved",
  "wavey",
  "waxed",
  "weary",
  "weeks",
  "weigh",
  "weird",
  "wench",
  "whack",
  "whale",
  "wheat",
  "wheel",
  "where",
  "which",
  "while",
  "whisk",
  "white",
  "whole",
  "whoof",
  "whose",
  "widen",
  "wider",
  "widow",
  "width",
  "wield",
  "wimpy",
  "wince",
  "winch",
  "windy",
  "wined",
  "wiped",
  "wiper",
  "wipes",
  "wispy",
  "witch",
  "witty",
  "wives",
  "woken",
  "woman",
  "women",
  "wonky",
  "woozy",
  "wordy",
  "world",
  "worst",
  "would",
  "wound",
  "wreak",
  "wreck",
  "wring",
  "wrist",
  "write",
  "wrong",
  "wrote",
  "xebec",
  "xeric",
  "xenia",
  "xenon",
  "xians",
  "yacht",
  "yahoo",
  "yappy",
  "yarns",
  "yearn",
  "years",
  "yeast",
  "yield",
  "yikes",
  "young",
  "yours",
  "yucky",
  "yummy",
  "yuppy",
  "yurts",
  "zebra",
  "zeros",
  "zesty",
  "zilch",
  "zingy",
  "zippy",
  "zones",
  "zonks",
  "zooms",
  "chill",
  "woods",
  "saxon"
]
  .toSorted()
  .filter(function mrLenny(x) {
    return (x.length = 5);
  });
var keydown = "";
var keyup = "";
var possibleWords = [words];
var secretWord = "";
var secretList = ["", "", "", "", ""];
var left = words;
secretWord = words[getRandomInt(1, words.length + 1)];
document.getElementsByClassName("letter").innerText = "";
possibleWords = [words];
secretList = secretWord.split("");
time = Date.now();
funnel();
function refresh2() {
  reload();
  left = words;
  setTimeout(() => {
    for (m = 0; m < left.length; m++) {
      refreshSuggest = refreshSuggest.concat(
        `<div style="position: relative; top:${
          5 * m
        };font-size:30px;font-family: Arial Rounded MT Bold, Helvetica, sans-serif; font-weight: bolder; text-align: center;">${
          left[m]
        }</div>\n`
      );
    }
    document.getElementById("suggestionsInner").innerHTML = refreshSuggest;
  }, 5);
}

setTimeout(() => {
  for (m = 0; m < left.length; m++) {
    refreshSuggest = refreshSuggest.concat(
      `<div style="position: relative; top:${
        5 * m
      };font-size:30px;font-family: Arial Rounded MT Bold, Helvetica, sans-serif; font-weight: bolder; text-align: center;">${
        left[m]
      }</div>\n`
    );
  }
  document.getElementById("suggestionsInner").innerHTML = refreshSuggest;
}, 5);
function reload() {
  secretWord = words[getRandomInt(1, words.length + 1)];
  document.getElementsByClassName("letter").innerText = "";
  possibleWords = [words];
  secretList = secretWord.split("");
  time = Date.now();
  document.getElementById("suggestionsInner").innerHTML = refreshSuggest;
  board = [
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
  ];
  win = false;
  loc = { x: 0, y: 0 };
  document.getElementById("winModal").style.display = "none";
  document.getElementById("loseModal").style.display = "none";
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function hardtimer() {
  time = Date.now();
  for (var l = 0; l < 5; l++) {
    board[loc.y][l].colour = check(
      board[loc.y].map(({ text }) => text.toLowerCase()),
      secretWord.split("")
    )[l];
  }
  funnel()
  loc.y++;
  loc.x = 0;
  console.log(loc.y >= 6 && win == false);
  if (loc.y >= 6 && win == false) {
    document.getElementById("loseModal").style.display = "block";
    document.getElementById("notifications").style.display = "none"
    document.getElementById("notifications").innerText = secretWord
    document.getElementById("left").innerText = `${left.length}`;
  } else {
    funnel();
    hardtime = setInterval(() => {
      for (hardy = 0; hardy < 5; hardy++) {
        board[loc.y][hardy].text = board[loc.y - 1][hardy].text;
      }
      clearInterval(hardtime);
      hardtimer();
    }, 15000);
  }
}
document.addEventListener("keyup", function (event) {
  keyup = event.key;
  if (
    ((keydown.toLowerCase().charCodeAt(0) > 96 &&
      keydown.toLowerCase().charCodeAt(0) < 123 &&
      keydown.split("").length == 1) ||
      keyup == "Enter" ||
      keyup == "Backspace") &&
    keyup == keydown
  ) {
    keypress = false;
  }
});
function check(guess, real) {
  var colreturn = ["", "", "", "", ""];
  for (var i = 0; i < 5; i++) {
    if (guess[i] == real[i]) {
      real[i] = "";
      guess[i] = "";
      colreturn[i] = scheme[3];
    }
  }
  for (var j = 0; j < 5; j++) {
    if (real.includes(guess[j]) && guess[j] != "") {
      real[real.indexOf(guess[j])] = "";
      guess[j] = "";
      colreturn[j] = scheme[4];
    }
  }
  for (var k = 0; k < 5; k++) {
    if (guess[k] != "") {
      colreturn[k] = scheme[5];
    }
  }
  return colreturn;
}
setInterval(() => {
  if (!win) {
    refresh = "";
    refresh = refresh.concat(
      `<div id='guess1' class='word' style='position: relative; width: 720px; height: 120px; background-color:${scheme[0]} ; border-radius: 15px; border: 5px solid ${scheme[0]}; left: 5px; top: 05px;'>\n<div id='word1letter1' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[0][0].colour +
        `; left:20px';><p>` +
        board[0][0].text +
        `</p></div>\n<div id='word1letter2' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[0][1].colour +
        `; left:160px;'><p>` +
        board[0][1].text +
        `</p></div>\n<div id='word1letter3' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[0][2].colour +
        `; left:300px;'><p>` +
        board[0][2].text +
        `</p></div>\n<div id='word1letter4' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[0][3].colour +
        `; left:440px;'><p>` +
        board[0][3].text +
        `</p></div>\n<div id='word1letter5' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[0][4].colour +
        `; left:580px;'><p>` +
        board[0][4].text +
        `</p></div>\n</div>\n` +
        ``
    );
    refresh = refresh.concat(
      `<div id='guess2' class='word' style='position: relative; width: 720px; height: 120px; background-color:${scheme[0]} ; border-radius: 15px; border: 5px solid ${scheme[0]}; left: 5px; top: 10px;'>\n<div id='word2letter1' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[1][0].colour +
        `; left:20px';><p>` +
        board[1][0].text +
        `</p></div>\n<div id='word2letter2' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[1][1].colour +
        `; left:160px;'><p>` +
        board[1][1].text +
        `</p></div>\n<div id='word2letter3' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[1][2].colour +
        `; left:300px;'><p>` +
        board[1][2].text +
        `</p></div>\n<div id='word2letter4' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[1][3].colour +
        `; left:440px;'><p>` +
        board[1][3].text +
        `</p></div>\n<div id='word2letter5' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[1][4].colour +
        `; left:580px;'><p>` +
        board[1][4].text +
        `</p></div>\n</div>\n` +
        ``
    );
    refresh = refresh.concat(
      `<div id='guess3' class='word' style='position: relative; width: 720px; height: 120px; background-color:${scheme[0]} ; border-radius: 15px; border: 5px solid ${scheme[0]}; left: 5px; top: 15px;'>\n<div id='word3letter1' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[2][0].colour +
        `; left:20px';><p>` +
        board[2][0].text +
        `</p></div>\n<div id='word3letter2' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[2][1].colour +
        `; left:160px;'><p>` +
        board[2][1].text +
        `</p></div>\n<div id='word3letter3' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[2][2].colour +
        `; left:300px;'><p>` +
        board[2][2].text +
        `</p></div>\n<div id='word3letter4' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[2][3].colour +
        `; left:440px;'><p>` +
        board[2][3].text +
        `</p></div>\n<div id='word3letter5' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[2][4].colour +
        `; left:580px;'><p>` +
        board[2][4].text +
        `</p></div>\n</div>\n` +
        ``
    );
    refresh = refresh.concat(
      `<div id='guess4' class='word' style='position: relative; width: 720px; height: 120px; background-color:${scheme[0]} ; border-radius: 15px; border: 5px solid ${scheme[0]}; left: 5px; top: 20px;'>\n<div id='word4letter1' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[3][0].colour +
        `; left:20px';><p>` +
        board[3][0].text +
        `</p></div>\n<div id='word4letter2' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[3][1].colour +
        `; left:160px;'><p>` +
        board[3][1].text +
        `</p></div>\n<div id='word4letter3' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[3][2].colour +
        `; left:300px;'><p>` +
        board[3][2].text +
        `</p></div>\n<div id='word4letter4' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[3][3].colour +
        `; left:440px;'><p>` +
        board[3][3].text +
        `</p></div>\n<div id='word4letter5' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[3][4].colour +
        `; left:580px;'><p>` +
        board[3][4].text +
        `</p></div>\n</div>\n` +
        ``
    );
    refresh = refresh.concat(
      `<div id='guess5' class='word' style='position: relative; width: 720px; height: 120px; background-color:${scheme[0]} ; border-radius: 15px; border: 5px solid ${scheme[0]}; left: 5px; top: 25px;'>\n<div id='word5letter1' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[4][0].colour +
        `; left:20px';><p>` +
        board[4][0].text +
        `</p></div>\n<div id='word5letter2' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[4][1].colour +
        `; left:160px;'><p>` +
        board[4][1].text +
        `</p></div>\n<div id='word5letter3' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[4][2].colour +
        `; left:300px;'><p>` +
        board[4][2].text +
        `</p></div>\n<div id='word5letter4' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[4][3].colour +
        `; left:440px;'><p>` +
        board[4][3].text +
        `</p></div>\n<div id='word5letter5' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[4][4].colour +
        `; left:580px;'><p>` +
        board[4][4].text +
        `</p></div>\n</div>\n` +
        ``
    );
    refresh = refresh.concat(
      `<div id='guess6' class='word' style='position: relative; width: 720px; height: 120px; background-color:${scheme[0]} ; border-radius: 15px; border: 5px solid ${scheme[0]}; left: 5px; top: 30px;'>\n<div id='word6letter1' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[5][0].colour +
        `; left:20px';><p>` +
        board[5][0].text +
        `</p></div>\n<div id='word6letter2' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[5][1].colour +
        `; left:160px;'><p>` +
        board[5][1].text +
        `</p></div>\n<div id='word6letter3' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[5][2].colour +
        `; left:300px;'><p>` +
        board[5][2].text +
        `</p></div>\n<div id='word6letter4' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[5][3].colour +
        `; left:440px;'><p>` +
        board[5][3].text +
        `</p></div>\n<div id='word6letter5' style='width: 120px; height: 120px; color: #000; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 60px; font-weight: bold; line-height: 10px; border-radius: 15px; text-align: center; position: absolute; background-color:` +
        board[5][4].colour +
        `; left:580px;'><p>` +
        board[5][4].text +
        `</p></div>\n</div>` +
        ``
    );
    document.getElementById("board").innerHTML = refresh;
  }
}, 1);
setInterval(() => {
  if (mode !== "hard") {
    if (mode == "easy") {
    
      document.getElementById("times").innerText = `${Math.floor(
        Math.floor((Date.now() - time) / 1000) / 60
      )
        .toString()
        .padStart(2, "0")}:${(Math.floor((Date.now() - time) / 1000) % 60)
        .toString()
        .padStart(2, "0")}`;
  } else{
    document.getElementById("times").innerText = `${Math.floor(
      Math.floor(((time+181000) - Date.now()) / 1000) / 60
    )
      .toString()
      .padStart(2, "0")}:${(Math.floor(((time+181000) - Date.now()) / 1000) % 60)
      .toString()
      .padStart(2, "0")}`;
  }
  } else if (loc.y !== 0 && loc.y !== 6) {
    document.getElementById("times").innerText = `${(
      Math.ceil((time + 15000 - Date.now()) / 1000) % 60
    ).toString()}`;
  } else {
    document.getElementById("times").innerText = "0";
  }
}, 1);
function funnel() {
  left = left.filter(function bbokay(x) {
    for (var i = 0; i < 5; ++i) {
      if (
        check(
          board[loc.y].map(({ text }) => text.toLowerCase()),
          secretWord.split("")
        )[i] !==
        check(
          board[loc.y].map(({ text }) => text.toLowerCase()),
          x.split("")
        )[i]
      )
        return false;
    }
    return true;
  });
}
function gotime(keea) {
  clearInterval(medtime)
  scheme = [
    document.getElementById("colour2").value,
    document.getElementById("colour1").value,
    document.getElementById("colour3").value,
    document.getElementById("colour4").value,
    document.getElementById("colour5").value,
    document.getElementById("colour6").value,
  ];
  if (mode == "hard") {
    document.getElementById("suggestions").style.display = "none";
    modeHard();
  }
  if(mode == "easy"){
    modeEasy();
  }
  if(mode == "medium"){
    modeMedium();
    medtime = setTimeout(() => {
      if(!win){
        document.getElementById("loseModal").style.display = "block";
        document.getElementById("notifications").style.display = "none"
        document.getElementById("notifications").innerText = secretWord
        document.getElementById("left").innerText = `${left.length}`;
      }
    }, 181000);
  }
  document.getElementById("startModal").style.background = `${scheme[2]}cc`;
  document.getElementById("levelEExplin").style.background = scheme[2];
  document.getElementById("gobutton").style.background = scheme[2];
  document.getElementById("startModal").style.display = "none";
  document.getElementById("winModal").style.background = scheme[3];
  document.getElementById("loseModal").style.background = scheme[4];
  board = [
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
    [
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
      { text: "", colour: scheme[1] },
    ],
  ];
  if (keea) {
    keypresser();
  }
  document.getElementById("startModal").style.display = "none";
  time = Date.now();
  document.getElementById("suggestionsInner").style.overflowY = "scroll";
  document.getElementById("time").style.display = "block";
  document.getElementById("board").style.background = scheme[5];
  document.getElementById("time").style.background = scheme[5];
  document.getElementById("suggestions").style.background = scheme[3];
  document.getElementById("suggestionsInner").style.background = scheme[0];
}
function keypresser() {
  document.addEventListener("keydown", function (event) {
    keydown = event.key;
    document.getElementById("notifications").style.display = "none";
    if (
      keydown.toLowerCase().charCodeAt(0) > 96 &&
      keydown.toLowerCase().charCodeAt(0) < 123 &&
      keydown.split("").length == 1 &&
      keypress == false &&
      keydown !== " "
    ) {
      if (loc.x <= 4 && board[loc.y][loc.x].text == "") {
        board[loc.y][loc.x].text = keydown.toUpperCase();
      }
      if (loc.x < 4) {
        loc.x++;
        keypress = true;
      }
    }
    if (
      keydown == "Enter" &&
      keypress == false &&
      loc.x == 4 &&
      board[loc.y][loc.x].text !== ""
    ) {
      if (mode !== "hard") {
        if (
          words.includes(
            `${board[loc.y].map(({ text }) => text.toLowerCase())[0]}${
              board[loc.y].map(({ text }) => text.toLowerCase())[1]
            }${board[loc.y].map(({ text }) => text.toLowerCase())[2]}${
              board[loc.y].map(({ text }) => text.toLowerCase())[3]
            }${board[loc.y].map(({ text }) => text.toLowerCase())[4]}`
          )
        ) {
          for (var l = 0; l < 5; l++) {
            board[loc.y][l].colour = check(
              board[loc.y].map(({ text }) => text.toLowerCase()),
              secretWord.split("")
            )[l];
          }
          funnel();
          if (
            board[loc.y]
              .map(({ colour }) => colour)
              .filter(function blah(x) {
                return x == scheme[3];
              }).length == 5
          ) {
            setTimeout(() => {
              win = true;
              document.getElementById("winModal").style.display = "block";
              document.getElementById("score").innerText = `${Math.floor(
                Math.floor((Date.now() - time) / 1000) / 60
              )}:${Math.floor((Date.now() - time) / 1000) % 60}`;
              if (loc.y > 1) {
                document.getElementById("tries").innerText = `${loc.y} tries`;
              } else {
                document.getElementById("tries").innerText = `${loc.y} try`;
              }
            }, 200);
          }
          refreshSuggest = "";
          for (m = 0; m < left.length; m++) {
            refreshSuggest = refreshSuggest.concat(
              `<div style="position: relative; top:${
                5 * m
              };font-size:30px;font-family: Arial Rounded MT Bold, Helvetica, sans-serif; font-weight: bolder; text-align: center;">${
                left[m]
              }</div>`
            );
          }if (mode == "easy") {
            
            document.getElementById("suggestionsInner").innerHTML =
              refreshSuggest;
          }
          loc.x = 0;
          loc.y++;
          setTimeout(() => {
            if (loc.y == 6 && win == false) {
              document.getElementById("loseModal").style.display = "block";
              document.getElementById("notifications").style.display = "none"
              document.getElementById("notifications").innerText = secretWord
              document.getElementById("left").innerText = `${left.length}`;
            }
          }, 500);
        } else {
          document.getElementById("notifications").innerText = "Not a word";
          document.getElementById("notifications").style.display = "block";
          document.getElementById("notifications").style.background =
            board[0][2];
          document.getElementById("notifications").style.color = "#ff4444";
        }
      } else {
        if (words.includes(
        `${board[loc.y].map(({ text }) => text.toLowerCase())[0]}${
          board[loc.y].map(({ text }) => text.toLowerCase())[1]
        }${board[loc.y].map(({ text }) => text.toLowerCase())[2]}${
          board[loc.y].map(({ text }) => text.toLowerCase())[3]
        }${board[loc.y].map(({ text }) => text.toLowerCase())[4]}`
      )) {
        
          if (loc.y == 0) {
            hardtimer();
          } else {
            clearInterval(hardtime);
            hardtimer();
          }
      } else{
        document.getElementById("notifications").innerText = "Not a word";
        document.getElementById("notifications").style.display = "block";
        document.getElementById("notifications").style.background =
          board[0][2];
        document.getElementById("notifications").style.color = "#ff4444";
      }
      }
    }
    if (keydown == "Backspace" && keypress == false) {
      board[loc.y][loc.x].text = "";
      keypress = true;
      if (loc.x > 0) {
        loc.x--;
      }
    }
    console.log(keydown);
    if (keydown == "Control") {
      refresh2();
    }
  });
}
function rego() {
  document.getElementById("startModal").style.display = "block";
  document.getElementById("loseModal").style.display = "none";
  document.getElementById("winModal").style.display = "none";
  document.getElementById("suggestions").style.display = "block";
  document.getElementById("suggestionsInner").style.overflowY = "hidden";
  document.getElementById("time").style.display = "none";
  refresh2();
}