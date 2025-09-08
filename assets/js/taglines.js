const taglines = [
	"jane schoenbrun turned me trans",
	"jesus wept",
	"still cis tho",
	"gay",
	"many people think a trans woman's deepest desire is to live in her true gender, but actually it is to always stand in good lighting. (detransition, baby)",
	"i know it's scary. that's part of it. (i saw the tv glow)",
	"autistic af",
	"imagine being cis het lmfao",
	"you need to calm down",
	"deadname me again, i dare you",
	"autogyne- what now?",
	"deny me and be doomed (hedwig and the angry inch)",
	"to love me is to suffer me (ethel cain)",
	"i shit, fart, pee pee (kendrick lamar)",
	"traaaaaaaaaaaaaaaaaaaaaaaaans",
	"it's pronounced blåhaj",
	"men, the most absurd of god's creations (batman & robin)",
	"i'll see you in hell",
	"hey you cassanova",
	"🩵🩷🤍🩷🩵",
	"can't these things grow any faster?",
	"open my calendar, call that the trans agenda",
	"wasn't very good at being a boy, so i'm trying this girl thing out",
	"think a rubber band could be a cheap alternative to an orchiectomy?",
	"well, it made me laugh",
	"nothing's hotter than a neurodivergent t-girl",
	"disappointing my parents since the 90's",
	"this blog kinda sucks tbh",
	"still thinking about hailee steinfeld's spit in sinners",
	"as if!",
	"these transes are OUT OF CONTROL!!!",
	"yes, i chose this life because it seemed so easy and glamorous",
	"doing hot girl shit (crying, screaming, throwing up)",
	"yeah ok i guess everyone was right about me being a faggot",
	"do these pants make my gock look fat?",
	"damn, chipped a nail",
	"is it normal to dream about being a lesbian? asking for a friend",
	"chill, it's not that serious",
	"you're just another picture to burn 🔥",
	"walk like a bitch, talk like a faggot",
	"hail satan",
	"trans rights",
	"i'm here and i'm queer",
	"reapplying lipstick...",
	"interlligent design? this shit is dumb as hell",
	"holy booba batman",
	"i'm gonna kill you, if you don't beat me to it (phoebe bridgers)",
	"i paint the ceiling black so i don't notice when my eyes are open (sloppy jane)",
	"i'm sorry you've been in so much pain for so long (detransition, baby)"
];
// draw random string from taglines array and put into r
let i = Math.floor(Math.random() * taglines.length);
let r = taglines[i].toString();
console.log(r);

// typed.js
window.onload = function () { //this gets typed.js working, but displays document.write command
var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
});
}