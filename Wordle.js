var loc = {x: 0, y:0};
var words = ["seems", "party", "minds", "eaten", "sells", "sends", "known", "sense", "hours", "pasts", "paths", "easts", "pause", "mined", "layer", "payed", "serve", "earth", "early", "wills", "aired", "heard", "hears", "dusts", "kills", "goers", "hotel", "seven", "dried", "ideas", "going", "drier", "dries", "dryer", "glass", "heads", "shake", "leads", "shook", "aging", "gives", "phone", "local", "photo", "shape", "picks", "above", "locks", "money", "drops", "share", "given", "wrong", "girls", "month", "sharp", "piece", "wilds", "sheet", "drove", "drive", "moons", "lands", "piles", "ships", "drink", "piled", "drank", "drunk", "shirt", "pinks", "shits", "dress", "shoes", "mores", "shoot", "longs", "shots", "dream", "drawn", "draws", "drags", "shops", "haves", "horse", "short", "gifts", "dozen", "place", "downs", "shout", "hopes", "shove", "hoped", "plans", "wiper", "doors", "shown", "shows", "wiped", "plate", "world", "mouth", "doers", "joins", "shrug", "shuts", "leafs", "moved", "plays", "moves", "sicks", "dont", "pleas", "sided", "sides", "sighs", "dont", "gated", "sight", "looks", "gates", "wives", "mover", "signs", "doing", "dirts", "knees", "movie", "learn", "gamer", "games", "gamed", "dying", "music", "since", "desks", "sings", "singe", "deeps", "point", "acted", "musts", "yells", "funny", "death", "wider", "loses", "sixes", "whose", "names", "sizes", "sized", "skins", "keyed", "skies", "pools", "slams", "darks", "named", "slept", "namer", "sleep", "leave", "dance", "slide", "hated", "young", "whole", "fucks", "whos", "slips", "whos", "slows", "front", "porch", "loved", "hates", "small", "fresh", "cries", "cried", "smell", "white", "nears", "loves", "smile", "freer", "pours", "lover", "freed", "power", "smoke", "frees", "yeses", "crowd", "cross", "jokes", "fours", "snaps", "crazy", "forms", "cover", "homed", "snows", "among", "necks", "happy", "least", "press", "force", "homes", "count", "needs", "wipes", "years", "cools", "foots", "joked", "foods", "never", "songs", "comes", "sorry", "flier", "color", "sorts", "souls", "lower", "newer", "flyer", "colds", "sound", "flown", "south", "works", "coats", "space", "nicer", "prove", "lucky", "spoke", "night", "speak", "cloud", "hurts", "yards", "pulls", "holed", "flies", "close", "climb", "spent", "spend", "words", "holes", "hangs", "clear", "lunch", "spins", "clean", "class", "liars", "floor", "holds", "spots", "alive", "noise", "flats", "chose", "flash", "nones", "child", "fixer", "fixed", "fixes", "chest", "cheek", "mains", "stage", "hands", "makes", "stair", "quick", "stood", "check", "fiver", "stand", "stars", "fives", "north", "wrote", "stare", "lying", "quiet", "noses", "quite", "start", "chair", "nosed", "radio", "lived", "rains", "notes", "state", "large", "cause", "raise", "catch", "noted", "maker", "stays", "halls", "angry", "stole", "steal", "reach", "first", "cased", "cases", "steps", "lives", "fires", "stuck", "carry", "stick", "cares", "still", "cared", "fired", "cards", "added", "stone", "reads", "halve", "stops", "write", "cant", "ready", "hairy", "store", "hairs", "cant", "storm", "numbs", "story", "could", "finer", "knife", "fines", "calms", "fined", "calls", "hurry", "while", "buyer", "finds", "nurse", "found", "which", "lifts", "admit", "final", "fills", "lasts", "keeps", "where", "buses", "bused", "study", "offed", "stuff", "fight", "woods", "burnt", "burns", "field", "human", "build", "built", "wings", "offer", "brown", "allow", "guyed", "suite", "suits", "bring", "marks", "fewer", "feels", "hills", "wines", "later", "feeds", "agree", "guess", "surer", "fears", "broke", "break", "guard", "brain", "highs", "often", "marry", "ahead", "knock", "boxes", "sweet", "boxed", "okays", "swing", "swung", "falls", "reply", "hides", "fails", "huger", "table", "takes", "taken", "laugh", "taker", "rests", "house", "talks", "bored", "women", "faded", "fades", "wheel", "facts", "wraps", "boots", "teach", "faces", "teams", "older", "books", "tears", "bones", "maybe", "woman", "faced", "areas", "boned", "opens", "tells", "rides", "grows", "thank", "their", "boats", "thens", "there", "these", "thick", "rider", "after", "board", "right", "bluer", "thins", "blues", "blued", "grown", "thing", "again", "rings", "think", "blows", "blown", "third", "would", "means", "those", "risen", "three", "rises", "blood", "eying", "heres", "throw", "block", "threw", "roses", "group", "river", "black", "tying", "times", "timed", "roads", "rocks", "order", "timer", "meant", "green", "tired", "tires", "extra", "meets", "today", "rolls", "biter", "bitey", "other", "toned", "tones", "light", "bites", "worry", "birds", "roofs", "armed", "outer", "rooms", "outed", "every", "tooth", "teeth", "round", "image", "bests", "event", "liked", "evens", "rowed", "likes", "touch", "bends", "windy", "bents", "towns", "winds", "great", "below", "track", "overs", "owned", "liker", "train", "enter", "wound", "begun", "helps", "began", "begin", "owner", "beers", "kinds", "wests", "paged", "trees", "treed", "tripe", "trips", "pages", "alone", "hello", "beats", "enjoy", "bears", "truck", "beach", "safer", "trues", "truer", "trued", "safes", "hells", "sames", "trust", "truth", "pains", "wells", "sands", "tried", "tries", "greys", "turns", "isnt", "isnt", "heavy", "twice", "saves", "uncle", "saved", "under", "kicks", "saver", "paint", "lines", "grays", "until", "weeks", "upped", "pairs", "using", "asked", "usual", "scare", "being", "ender", "metal", "views", "paled", "banks", "visit", "pales", "paler", "voice", "scene", "heats", "waits", "balls", "ended", "empty", "woken", "palms", "wakes", "waked", "walks", "lined", "knows", "pants", "worse", "paper", "walls", "worst", "wants", "eight", "heart", "along", "backs", "egged", "jumps", "warms", "grass", "might", "edges", "grabs", "seats", "avoid", "parts", "edged", "aunts", "watch", "about", "eater", "wont", "water", "wont", "waved", "waves", "goods", "waver", "golds", "wears"]
var keydown = "";
var possibleWords = [words];
var secretWord = "";
    reload();
function reload(){
  secretWord = words[getRandomInt(1, words.length+1)];
  document.getElementsByClassName("letter").innerText = "";
  for(i = 0; i< 5; i++){
    for(j = 0; j< 6; j++){
      document.getElementById(`word${i}letter${j}`).style.background = "#9cdcfe";
    }
  }
  possibleWords = [words];

}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
document.addEventListener('keydown', function (event) {
  keydown = event.key;
  if (keydown == "6"){
    reload();
  }
  if(keydown == keydown.toLowerCase()){
    
  }
});
setInterval(() => {
  //when they reached the mountain's summit, even clancy took a pull. It might well make the boldest hold their breath. The wild hop scrub grew thickly and the hidden ground was full Of wombat holes and any slip was death.
  if (keydown.toLowerCase().charCodeAt(0) >=97 && keydown.toLowerCase().charCodeAt(0) <=122){

  }
}, 50);

