# 📊 Day 4 – Counter App (Logic Guide)

## 🧠 Goal:
Ek card banana hai jisme:
- ek number show ho
- buttons ho (+, -, reset)
- number change ho on click

---

## 🥇 Step 1: HTML socho (structure mindset)

- ek container / card banao
- uske andar:
  - ek heading (Counter App)
  - ek element jisme number show hoga (ye important hai)
  - 3 buttons:
    - increase (+)
    - decrease (-)
    - reset

---

## 🥈 Step 2: JS me variables banao

- ek variable banao → number store karne ke liye  
  👉 initial value = 0

- ek variable banao → number display element ke liye 

- 3 variables banao → buttons ke liye  
  (+, -, reset)

---

## 🥉 Step 3: Display ko set karo

- jo number variable hai  
👉 usko screen pe dikhana hai

👉 matlab:
- “display element me current number show karo”

---

## 🏁 Step 4: Increase button ka logic

- button pe click suno
- click hone pe:
  - number variable ko +1 karo
  - phir screen update karo

---

## 🧩 Step 5: Decrease button ka logic

- button pe click suno
- click hone pe:
  - number variable ko -1 karo
  - phir screen update karo

---

## 🔄 Step 6: Reset button ka logic

- button pe click suno
- click hone pe:
  - number ko 0 kar do
  - screen update karo

---

## 🧠 Step 7: Update function thinking

👉 Har jagah same kaam ho raha hai:
- number change
- screen update

👉 Socho:
- ek common step rakho:
  “number ko display me dikhana”

---

## ⚠️ Step 8: Edge thinking (optional)

- kya negative allow karna hai?
- kya limit lagani hai? (0 se neeche na jaye)
- kya color change karna hai?

---

## 🔁 Final Flow:

Click → number change → screen update