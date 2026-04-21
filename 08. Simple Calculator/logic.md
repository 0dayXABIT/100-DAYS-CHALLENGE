# 🧮 Simple Calculator – JS Steps (Rewrite Guide)

---

## 🥇 STEP 1: Display ko select karo

// ek variable banao
// display ko id se select karo
// ye wahi jagah hai jahan result dikhega

---

## 🥈 STEP 2: Buttons ko select karo

// ek variable banao
// sab buttons ko ek class se select karo
// ye list (collection) milegi

---

## 🥉 STEP 3: Expression variable banao

// ek empty string banao
// ye user ke clicks store karega
// example: "2+3*5"

---

## 🧠 STEP 4: Loop lagao

// for loop use karo
// har button pe jaana hai
// buttons.length use hoga

---

## 🧠 STEP 5: Click event lagao

// har button pe click event add karo
// jab button click ho → function chale

---

## 🧠 STEP 6: Value lo

// function ke andar:
// value = this.innerText
// ye batayega konsa button click hua

---

## 🧩 STEP 7: Conditions lagao

//--------------------------------------------------

### 👉 CASE 1: Clear button

// agar value "C" hai:
// expression ko empty karo
// display ko "0" dikhao

//-------------------------------------------------- 

### 👉 CASE 2: Equal button

// agar value "=" hai:

// try block me:
// expression ko calculate karo

// result display me dikhao

// expression = result (future ke liye)

// catch block:
// agar error aaye:
// display = "Error"
// expression reset

//--------------------------------------------------

### 👉 CASE 3: Normal buttons

// agar number ya operator hai:

// expression me add karo:
// expression = expression + value

// display update karo

//--------------------------------------------------

## 🧠 STEP 8: Display update

// har action ke baad:
// display.value = expression ya result

---

## 🔁 FINAL FLOW:

// button click
// → value lo
// → check karo (C / = / normal)
// → expression update
// → display update