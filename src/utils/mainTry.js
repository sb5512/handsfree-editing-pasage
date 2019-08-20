var text = require("./phrases.jsx");
const fetch = require("node-fetch");

function pause(milliseconds) {
  var dt = new Date();
  while (new Date() - dt <= milliseconds) {
    /* Do nothing */
  }
}

// let arrWords = text.getSuggestion();
let arrWords = `a
academic
activities
add
after
all
alligators
alone
although
aluminium
always
ambiguous
ambulance
an
and
anecdotal
annoying
answer
any
appeles
appetizers
appointed
appreciated
aptitude
are
arm
as
ask
at
atheletic
attitude
audition
audits
authorization
bagpipes
ball
based
bayou
be
beautiful
bidding
bilogists
bongos
bought
bowl
boy
cake
can
cannot
capable
carry
case
catastrophic
cement
chamber
citizenship
clasp
coconut
coincided
coleslaw
companions
company
contains
contributions
corner
costumes
couried
cream
cubic
cut
cutbacks
dad
dark
day
deadline
dessert
destroy
did
diploma
disguise
dislikes
do
doctor
doctors
dont
down
drenched
drugs
drunkard
dwarf
each
early
easy
economic
edge
employee
encyclopedias
enjoy
even
evening
every
everyfile
evidence
execute
eyestrain
fashion
flimsy
for
freely
friends
from
geese
gives
glue
go
got
government
greasy
greatly
grows
guess
gurantees
had
hallway
hand
hats
hauling
have
help
her
hierarchies
high
him
hires
his
hispanic
huge
hung
I
ices
iguanas
in
into
intruments
is
isotopes
it
kayak
lawyer
lay
layoffs
left
lifelong
light
like
loads
made
makes
mango
many
me
measured
medieval
microoragnisms
mollusks
mom
more
morning
most
museum
musical
musicians
my
near
neglect
new
nice
no
noise
objects
of
off
official
often
oil
oily
on
oout
oozed
opens
out
outcast
papaya
paper
participate
patient
peck
people
pewter
pic
player
point
pond
poor
postponed
potatoes
prescibe
present
presented
previous
problem
prowler
question
radioactive
rag
rain
reading
related
remained
reorganization
reptiles
results
rise
rob
roll
sat
screw
seldom
serve
she
silverware
simple
sketched
skimask
small
social
societies
sought
speaker
straw
stray
strongly
students
study
suit
surpriseing
survive
swing
symbols
tapestry
that
the
they
thick
this
three
to
too
took
trait
tropical
tube
tugboats
two
uninterrupted
upbeat
us
use
vocabulary
wall
was
wash
water
we
welcome
were
when
who
will
wire
with
wore
yards
year
you
young
your`;

var wordsPassageExperiment = `There was once a woman who was very, very cherfull though she had litle to make her so; for she was old, and poor, and lonely. She lived in a little bit of a cottagge and earned a scant living by running errends for her neighbors, getting a bite here, a soup there, as reward for her services. So she mad a shift to get on, and always looked as happy and cheery as if she had not a want in the world.
Johnny Town-mouse was born in a cupboard. Timmy Willie was bortn in a garden. Timmy Willie was a little country mouse who went to town by mistake in a hamper. The gardener sent vegetabbles to town once a week by carrier; he packed them in a big hamper.

The gardener left the hasmper by the garden gate, so tht the carrier could pick it up when he passed. Timmy Willie crept in thorough a hole in the wicker-work, and after eating some peas—Timmy Willie fell fast asleep.

In the living room the voice-clock sang, Tick-tock, seven o'clock, time to get up, time to get up, seven o 'clock! as if it were afrad that nobdy would. The mornings housee lay empty. The clock ticked on, repeating and repaeting its sounds into the emptiness. Seven-nine, breakfast time, seven-nine! In the kitchen the breakfast stove gave a hissing sigh and ejected from its warm interior eight pieces of perfectly browned toast, eight eggs sunny side up, sixteen slices of bacon, two coffees, and two cool glasses of milk.
Without, the night was cold and wet, bat in the small parlor of Laburnum villa the blindes were drawn and the fires burned brightly. Fatther and son were at chess; the former, who possessed ideas about the game involving radical chances, putting his king into such sharp and unnecessary perils that it even provoked comment from the white-haired old lady knitting placidly by the fire. "Hark at the wind," said Mr. White, who, having seen a fatal mistak after it was too late, was amiably desirous of preventing his son from seeing it.
When Martha Hale opend the storm-door and got a cut of the north wind, she ran back for her big woolen scarf. As she hurriedly wounds that round her head her eye made a scandalizzed sweep of her kitchen. It was no ordinary thing that called her away--it was probably further from ordinary than anything that had ever happened in Dickson County. But wat her eye took in was that her kitchen was in no shape for leaving: her bread all ready for mixing, half the flour sifted and hallf unsifted.
The grl was one of those pretty and charming young creaturess who sometimes are born, as if by a slep of fate, into a family of clerks. She had no dowry, no expectations, no way of bing known, understood, loved, married by any rich and distinguished man; so she let herself be married to a little clerk of the Ministry of Public Instruction. She dressed plainly because she could not dress well, but she was unhappy as if she had really falle from a higher station; since with women there is neither caste nor rank, for beauty, grace and charm take the place of family and birth.
It was on the first day of the New Yer that the announcemant was made, almost simultaneously fron three observatories, that the motion of the planet Neptune, the outermost of all the planets that wheele about the sun, had become very erratic. Ogilvy had already called attention to a suspected retardation in its velocity in December. Such a piece of news was scarcely calculated to interest a worldd the greater portion of whose inhabitants were unaware of the existence of the planet Neptune.
All were crouding around M. Bermutier, the judge, who was giving his opinion about the Saint-Cloud mystery. For a moth this inexplecable crime had been the talk of Paris. Nobady could make head or tail of it. M. Bermutier, standing with his back to the fireplace, was talking, citing the evidence, discussing the various theories, but arriving at no conclusion. Some women had risen, in order to get nearer to him, and were stading with their eyes fastened on the clean-shaven face of the judge, who was saying such weighty things.
One sanny afternoon in the autumn of the year 1861 a solder lay in a clump of laurel by the side of a road in western Virginia. He lay at full lenth upon his stomach, his feet resting upon the toes, his head upoon the left forearm. His extended right hand losely grasped his rifle. But for the somewhat methodical disposition of his limbs and a slight rhythmic movement of the cartridge-box at the back of his belt he might have been thought to be dead. He was asleep at his post of duty.
"My auntt will be down presently, Mr. Nuttel," said a very self-possessed youn lady of fifteen; "in the meantime u must try and putt up with me."

Adolph von Menzel, View from a Window in the Marienstrasse, 1865Framton Nuttel endeavored to say the correct something whch should duly flatter the niece of the moment without unduly discounting the aunt that was to come. Privately he doubted more than ever whether these formal visits on a succession of total strangers would do much towards helping the nerve cure which he was supposed to be undergoing.
The fact tht Henry Armstrong was burried did not seem to him to prove that he was dead: he had alweys been a hard man to convince. That he realy was buried, the testimony of his senses compelled him to admit. His posture -- flat upon his back, with his hands crossed upon his stomac and tied with something that he easily broke without profitably altering the situation -- the strict confinement of his entire person, the black darkness and profound silence, made a body of evidence impossible to controvert and he accepted it without cavil.
TRUE!-NERVOUS--very, very dreadfully nervous I had been and am! But why will you say that I am mad? The disase had sharpened my senses--not destroyed--not dulled them. Above all was the sens of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, aam I mad? Hearken! and obsarve how healthily--how calmly I can tell you the whole story. It is impossible to tell how farst the idea entered my brain; but once conceived, it haunted me day and night.
This is the story of the grate war that Rikki-tikki-tavi fought single - handd through the bathroomms of the big bungalow in Segowlee cantonment. Darzee, the Tailorbird, helped him, and Chuchundra, the musk-rat, who neve comes out into the middle of the floor, but always creeps raund by the wall, gave him advice, but Rikki-tikki did the real fighting. He was a mongoose, rather like a little cat in his fur and his tail, but quite like a weasel in his head and his habits.
It was a day in March. Never, never begin a story this way when you writte one. No opening coud possibly be worse. It is unemaginativ flat, dry and likely to consist of mere wind. But in this instance it is allowable. For the following paragraph, which should have inaugurated the narrative, is too wildly extravagant and preposterous to be flaunted in the face of the reader withaut preparation. Sarah was crying over her bill of fare. Think of a New York girl shedding tears on the menu card!
Two young peopl who had not long been married were walking up and down the platform of a little contry station. His arm was round her waist, her haed was almost on his shoulder, and both were happy.

The moon peeped up form the drifting cloudlets and frowned, as it seemed, envying their happiness and regratting her tedious and utterly superfluous virginity. The still air was heavy with the fragrance of lilac and wild cherry. Somewhere in the distance beyond the line a corncrake was calling.
Once upon a time their was an old mothr pig who had three little pigs and not enough food to feed them. So when they were old enough, she sent them out into the world to seek their fortunes. The first little pig was very laezy. He didn't want to work at all and he built his house out of straw. The second little pig worked a little bit hardr but he was somewhat lazy too and he built his house out of sticks. Then, they sang and dancd and played together the rest of the day.
A long time ago and fsr, far away an old woman was sitting in her rockng chair thinking how happy she would be if she had a child. Then, she heard a knock at the door and opened it. A lady was standing there and she said, "If you let me in, I will grant you a wish." The old womans let the woman in firstly because she felt pity, secondly bacause she knew what she'd wish for...a child. After she washed the lady upp and fed her, she saw that she was really beautiful.
Most teribly cold it was; it snoed and was nearly quite dark, and evening-- the last evening of the year. In this cold and darkness there want along the street a poor little girl, bare headed, and with naked feet. When she left home she had slippers on, it is true; but what was the good of that? They were very large slippers, which hers mother had hitherto worn; so lerge were they; and the poor little thing lost them as she scuffled away across the street, because of two carriages that rolled by dreadfully fast.
`;

var onlyErrorWords = ``;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var fs = require("fs");

let toCreateSuggestionWord = wordsPassageExperiment.split(" ");
console.log(toCreateSuggestionWord);
// toCreateSuggestionWord = toCreateSuggestionWord.slice(0, 10);

let newDict = {};

let request = new XMLHttpRequest();
toCreateSuggestionWord.map((word, index) => {
  request.open(
    "GET",
    `https://api.datamuse.com//words?sl=${word}&max=6`,
    false
  ); // `false` makes the request synchronous
  request.send(null);
  if (request.status === 200) {
    let myArr = JSON.parse(request.responseText);
    let answer = myArr.map(el => el.word);
    answer.shift();
    console.log(answer);
    newDict[word] = answer;
  }
});

console.log(newDict);
fs.writeFileSync("./suggestions.js", JSON.stringify(newDict), "utf-8");

// arrWords = arrWords.slice(0, 30);
// var fs = require("fs");
// arrWords.map((word, index) => {
//   // if wordbject.text has already been fetched i.e. suggestionlist has it already than ignore fetch.
//   pause(100);
//   fetch(`https://api.datamuse.com//words?sl=${word}&max=5`)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Something went wrong");
//       }
//     })
//     .then(data => {
//       let answer = data.map(el => el.word);
//       console.log("Fetched information are: ", data);
//       newDict[word] = answer;
//       fs.writeFileSync("./suggestions.js", JSON.stringify(newDict), "utf-8");
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

/// Even USELESS
// const anAsyncFunction = async word => {
//   pause(1000);
//   return fetch(`https://api.datamuse.com//words?sl=${word}&max=5`)
//     .then(res => res.json())
//     .then(data => {
//       let answer = data.map(el => el.word);
//       newDict[word] = answer;
//       fs.writeFileSync("./suggestions.js", JSON.stringify(newDict), "utf-8");
//     })
//     .catch();
// };

// const getData = async () => {
//   return await Promise.all(arrWords.map(word => anAsyncFunction(word)));
// };

// const data = getData();

// // console.log(newDict);
