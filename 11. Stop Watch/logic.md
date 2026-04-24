# ⏱️ Stopwatch – Baby Level Logic Guide

---

## 🥇 STEP 1: Elements pakdo

// ek variable banao display ke liye
// ek variable banao start button ke liye
// ek variable banao stop button ke liye
// ek variable banao reset button ke liye

👉 matlab:
“kaun kaun se buttons aur screen use karni hai”

---

## 🥈 STEP 2: Time variables banao

// 3 variables banao:
seconds
minutes
hours

👉 sabko 0 se start karo

👉 socho:
“meri watch abhi 00:00:00 pe hai”

---

## 🥉 STEP 3: Ek function banao (timer ka engine)

👉 ek function banao
// ye function har second time badhayega

---

## 🧠 STEP 4: Seconds badhao

// seconds = seconds + 1 

👉 example:
0 → 1 → 2 → 3

---

## 🧠 STEP 5: Seconds reset logic

👉 agar seconds == 60:

```text
seconds = 0
minutes++
```

---

## 🧠 STEP 6: Minutes reset logic

👉 agar minutes == 60:

```text
minutes = 0
hours++
```

---

## 🧠 STEP 7: Format (0 add karo)

👉 agar value < 10:

```text
5 → 05
```

---

## 🧠 STEP 8: Display update karo

👉 format bana ke show karo:

```text
HH : MM : SS
```

---

## 🧠 STEP 9: Start button logic

👉 jab user Start dabaye:

```text
har 1 second baad function chalao
```

👉 use:
setInterval()

---

## 🧠 STEP 10: Stop button logic

👉 jab user Stop dabaye:

```text
time ruk jaana chahiye
```

👉 use:
clearInterval()

---

## 🧠 STEP 11: Reset button logic

👉 jab user Reset dabaye:

```text
hours = 0  
minutes = 0  
seconds = 0  
display reset karo
```

---

## 🔁 FINAL FLOW:

Start → timer chalu
→ seconds badhte rahenge
→ 60 pe minutes
→ 60 pe hours
→ Stop → ruk jao
→ Reset → sab 0

---

## 💯 SUPER SIMPLE LINE:

👉 “+1 karo → limit pe reset → display → repeat”
