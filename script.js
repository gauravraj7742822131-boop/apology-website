// ==============================
// ELEMENTS
// ==============================

const beginBtn = document.getElementById("beginBtn");
const hero = document.getElementById("hero");
const scene2 = document.getElementById("scene2");

const continueBtn = document.getElementById("continueBtn");
const scene3 = document.getElementById("scene3");

const nextBtn = document.getElementById("nextBtn");
const scene4 = document.getElementById("scene4");

const apologyBtn = document.getElementById("apologyBtn");
const scene5 = document.getElementById("scene5");

const scene5Btn = document.getElementById("scene5Btn");

const letterScene = document.getElementById("letterScene");
const openLetterBtn = document.getElementById("openLetterBtn");

const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const letterContinue = document.getElementById("letterContinue");

const ending = document.getElementById("ending");
const endingText = document.getElementById("endingText");
const endingBtn = document.getElementById("endingBtn");

const finalPage = document.getElementById("finalPage");

// ==============================
// LETTER
// ==============================

const letterMessage = `Dear Doabh Ki Rani 👸

Sabse pehle, thank you. ❤️

Agar aap yahan tak aaye ho aur ye letter padh rahe ho, toh genuinely thank you. Mujhe nahi pata tha ki aap is website ko open bhi karoge ya nahi.

Main ye letter kisi expectation ke saath nahi likh raha. Na hi isliye ki sab kuch pehle jaisa ho jaye. Bas mujhe laga ki bina apni baat kahe rehna sahi nahi hota.

Last kuch dino mein maine aapko bahut hurt kiya hai. I know that. Jo maine bola aur jo mere actions the, woh galat the. Main na aapse time nikal kar milne aaya jabki aapna bola tha  upper se uss time bhi jo baatein maine boli... woh bhi galat thi. 😔

Uss situation mein mujhe alag tarah se behave karna chahiye tha. Shayad uss waqt mujhe samajh nahi aaya, aur maine woh baat bol di. Aaj main uss cheez ki poori accountability leta hoon. Na mujhe vo batt bolni chaiya thi jo maine vo comment kiya mujhe uska liya bhut guilt h 

Aur uske liye... I'm really sorry. 🤍

Main apni galti ko justify nahi karna chahta. Jo hua, usse change nahi kar sakta.

Bas itna zaroor kehna chahta hoon ki mera intention kabhi bhi aapko hurt karne ka nahi tha. Lekin intention se zyada actions matter karte hain, aur mere actions ki wajah se aapko bura laga. Uski responsibility meri hai.

Aap mujhe maaf karo ya na karo, woh decision poori tarah aapka hai, aur main uski respect karta hoon. 🌸

Mujhe sirf itna tha ki main apni galti accept karun aur aapko bataun. Mujhe usmein koi shame nahi hai. Agar galti meri thi, toh usse maanna bhi meri responsibility hai. Because if you care u try ur best to protect the bond.

Main ye expect nahi karta ki is letter ke baad sab kuch theek ho jayega. Shayad cheezein waise kabhi na ho jaayein, aur agar aisa hota hai toh main usse bhi accept karunga.

Bas mujhe laga ki ek sincere apology aap deserve karte ho, aur woh meri taraf se hona zaroori tha. 🤍

Aur genuinely, main aapko apna bahut achha dost maanta hoon. ❤️  

Jabse aapse achhi dosti hui hai, mujhe hamesha laga ki aapse baat karke sab kuch thoda better ho jaata hai. Aap jis trust ke saath apni baatein share karte ho, main uski genuinely bahut respect karta hoon. ✨

Honestly, mujhe aapki reels, aapke phone calls aur jo ap tea share krta ho i genuinely miss them. 🥹 hoping ki aap jldi se pehla jaise dost bnn jau kyuki aapka vo nature genuinely best h jabb aap gussa bhi krta ho share bhi krta ho sabb aur genuinely care bhi krta ho .
yeh cold reaction bhut kharab h meri maa issne esi tesi krdi h 

Mujhe pata hai ki aapko pehle bhi kaafi logon ne disappoint kiya hai. Maine woh sab dekha hai, aur main kabhi nahi chahta tha ki mera naam bhi un naag naagin ki list  mein aaye.

 I just wanted to know ki aap genuinely mera bhut acha dost ho. And i respect u a lot and ur friendship. 💙

Aur haan... hoping ki aap aapni English jaldi se improve karne ke liye muujhe "haan" bol do , kyuki meri english phir bhi achi h chaiya aap accept kro ya na. 😄 Warna aapka toh kuch nahi ho sakta. 😂

Thank you, itna time nikal kar ye sab padhne ke liye. 🌸

I genuinely hope you're doing well. 😊

Take care.

Gaurav `;

function typeLetter(text, element, speed){

    let index = 0;

    element.innerHTML = "";

    letterContinue.style.display = "none";

    function type(){

        if(index < text.length){

            element.innerHTML += text.charAt(index);

            index++;

            setTimeout(type, speed);

        }else{

            letterContinue.style.display = "inline-block";

        }

    }

    type();

}

const thoughts = [

"⭐ Thank you apka time ka liya .",

"⭐ I'm really sorry .",

"⭐ Take Care ."

];

let currentThought = 0;

function showThoughts(){

    endingText.innerHTML="";

    endingBtn.style.display="none";

    typeThought();

}

function typeThought(){

    if(currentThought < thoughts.length){

        endingText.innerHTML=thoughts[currentThought];

        currentThought++;

        setTimeout(typeThought,2500);

    }else{

        endingBtn.style.display="inline-block";

    }

}

endingBtn.addEventListener("click",()=>{

    ending.style.display="none";

    finalPage.style.display="block";

});

letterContinue.addEventListener("click", () => {

    letter.style.display = "none";

    ending.style.display = "block";

    currentThought = 0;

    showThoughts();

});

// ==============================
// SCENE 1 → 2
// ==============================

beginBtn.addEventListener("click", () => {

    hero.classList.add("fade-out");

    setTimeout(() => {

        hero.style.display = "none";
        scene2.style.display = "block";

        scene2.classList.remove("fade-out");

    },800);

});

// ==============================
// SCENE 2 → 3
// ==============================

continueBtn.addEventListener("click", () => {

    scene2.classList.add("fade-out");

    setTimeout(() => {

        scene2.style.display = "none";
        scene3.style.display = "block";

        scene3.classList.remove("fade-out");

    },800);

});

// ==============================
// SCENE 3 → 4
// ==============================

nextBtn.addEventListener("click", () => {

    scene3.classList.add("fade-out");

    setTimeout(() => {

        scene3.style.display = "none";
        scene4.style.display = "block";

        scene4.classList.remove("fade-out");

    },800);

});

// ==============================
// SCENE 4 → 5
// ==============================

apologyBtn.addEventListener("click", () => {

    scene4.classList.add("fade-out");

    setTimeout(() => {

        scene4.style.display = "none";
        scene5.style.display = "block";

        scene5.classList.remove("fade-out");

    },800);

});

// ==============================
// SCENE 5 → LETTER SCENE
// ==============================

scene5Btn.addEventListener("click", () => {

    scene5.classList.add("fade-out");

    setTimeout(() => {

        scene5.style.display = "none";
        letterScene.style.display = "block";

        letterScene.classList.remove("fade-out");

    },800);

});

// ==============================
// LETTER SCENE → LETTER
// ==============================

openLetterBtn.addEventListener("click", () => {

    letterScene.classList.add("fade-out");

    setTimeout(() => {

        letterScene.style.display = "none";
        letter.style.display = "flex";

        // 30 = slower typing
       typeLetter(letterMessage, letterText, 30);

    }, 800);

});

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});