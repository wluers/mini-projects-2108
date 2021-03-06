// TO BREAK A LINE AFTER A PERIOD
// find all periods: \.
// replace with: \.\n 

// TO ADD QUOTE AT START OF LINES",
// find beginning of line: ^
// replace with: "

// TO ADD QUOTE AND COMMA AT END OF LINES",
// find end of line: $
// replace with: ",

// TO REMOVE ALL EMPTY LINES
// find: ^\R
// replace with nothing

// TO REMOVE ALL LINE BREAKS 
// find: \n\s+ 
// replace with nothing

let someText = [
"The \"Red Death\" had long devastated the country.",
" No pestilence had ever been so fatal, or so hideous.",
" Blood was its Avatar and its seal—the redness and the horror of blood.",
" There were sharp pains, and sudden dizziness, and then profuse bleeding at the pores, with dissolution.",
" The scarlet stains upon the body and especially upon the face of the victim, were the pest ban which shut him out from the aid and from the sympathy of his fellow-men.",
" And the whole seizure, progress and termination of the disease, were the incidents of half an hour.",

"But the Prince Prospero was happy and dauntless and sagacious.",
" When his dominions were half depopulated, he summoned to his presence a thousand hale and light-hearted friends from among the knights and dames of his court, and with these retired to the deep seclusion of one of his castellated abbeys.",
" This was an extensive and magnificent structure, the creation of the prince's own eccentric yet august taste.",
" A strong and lofty wall girdled it in.",
" This wall had gates of iron.",
" The courtiers, having entered, brought furnaces and massy hammers and welded the bolts.",
" They resolved to leave means neither of ingress nor egress to the sudden impulses of despair or of frenzy from within.",
" The abbey was amply provisioned.",
" With such precautions the courtiers might bid defiance to contagion.",
" The external world could take care of itself.",
" In the meantime it was folly to grieve, or to think.",
" The prince had provided all the appliances of pleasure.",
" There were buffoons, there were improvisatori, there were ballet-dancers, there were musicians, there was Beauty, there was wine.",
" All these and security were within.",
" Without was the \"Red Death\".",

"It was towards the close of the fifth or sixth month of his seclusion, and while the pestilence raged most furiously abroad, that the Prince Prospero entertained his thousand friends at a masked ball of the most unusual magnificence.",


 ];
