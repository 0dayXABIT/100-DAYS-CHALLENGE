// 🥇 STEP 1: Variables banao

// ek variable → password input ke liye
// ek variable → button ke liye
// ek variable → result display ke liye

//--------------------------------------------------

// 🥈 STEP 2: Button pe event lagao

// button pe click event lagao
// “jab user click kare → function run ho”

//--------------------------------------------------

// 🥉 STEP 3: Password value lo

// input se value lo
// ek variable me store karo (password)

//--------------------------------------------------

// 🏁 STEP 4: Empty check

// agar password empty hai:
// → result me “Enter Password” dikhao
// → aur yahin function stop karo (IMPORTANT)

//--------------------------------------------------

// 🧩 STEP 5: Score variable banao

// ek variable banao:
// score = 0
// ye count karega kitni conditions pass hui

//--------------------------------------------------

// 🧠 STEP 6: Length check

// check karo:
// password ki length >= 8 hai ya nahi
// agar haan → score +1

//--------------------------------------------------

// 🧠 STEP 7: Lowercase check

// check karo:
// kya password me small letters (a-z) hain?
// agar haan → score +1

//--------------------------------------------------

// 🧠 STEP 8: Uppercase check

// check karo:
// kya password me capital letters (A-Z) hain?
// agar haan → score +1

//--------------------------------------------------

// 🧠 STEP 9: Number check

// check karo:
// kya password me numbers (0-9) hain?
// agar haan → score +1

//--------------------------------------------------

// 🧠 STEP 10: Special character check

// check karo:
// kya password me (!@#$ etc) characters hain?
// agar haan → score +1

//--------------------------------------------------

// 🧠 STEP 11: Result decide karo

// agar score 0–2:
// → result = "Weak"
// → color = red

// agar score 3–4:
// → result = "Medium"
// → color = yellow

// agar score 5:
// → result = "Strong"
// → color = green

//--------------------------------------------------

// 🧠 STEP 12: UI update

// result element me text set karo
// result ka color change karo

//--------------------------------------------------

// 🔁 FINAL FLOW:

// click → password lo → empty check →
// score calculate → result decide → show

//--------------------------------------------------

// 💯 GOLDEN LINE:
// “Score banega → usse decision hoga → phir UI update hoga”