[← Back to Main Portfolio](../README.md)

# 🏗 Forklift and Torque Converter Lab

This project investigates the efficiency and drive systems of both **internal combustion engine (ICE)** forklifts and **electric motor-driven forklifts** through hands-on lab experiments. The goal was to measure power flow, identify losses, and analyze the differences between ICE and electric drive systems.

---

## 🔍 Project Motivation

We looked at an electric drivetrain as well as an ICE drivetrain to explore how forklifts are powered and how energy is transferred through mechanical systems. With over 75% of forklifts now electric, understanding the trade-offs between ICE and electric drive systems is essential for designing efficient, modern industrial vehicles.

---

## 🔧 Internal Combustion Forklift Studio

### 🔢 Measurements Taken using Chassis Dynamometer:
- Wheel RPM, static torque, output power
- PAU force
- Fuel mass over time (load cell)

### 🧮 Efficiency Analysis:
Gross efficiency was calculated using:
- **Output Power:** Derived from torque and wheel RPM  
- **Input Power:** Derived from fuel flow rate × lower heating value

### ⚙️ Sources of Loss:
- Engine heat loss and friction
- Transmission loss via torque converter
- Exhaust losses

---

## ⚡️ Electric Motor & Torque Converter Setup

### 🔢 Measurements:
- Motor input power (V, A, W)
- Output shaft torque and RPM
- Torque brake response and power output

### 🧠 Key Takeaways:
- Efficiency ranged from **10% to 45%**, averaging **26.5%**
- Most efficient state occurred at **20.6 W input**, ~45% efficiency
- Losses stemmed from the motor, torque converter, brake, and mechanical inefficiencies

---

## 📈 Motor Characterization

By plotting **torque vs current** and performing linear regression:
- **Motor constant (k):** 0.7094 Nm/A
- **No-load current:** ~0.707 A
- **No-load torque:** ~0.045 Nm

---

## 🔋 Electric Forklift vs. ICE Forklift

### 🔄 Drive System Comparison:

| Feature                  | ICE Forklift                     | Electric Forklift                           |
|--------------------------|----------------------------------|----------------------------------------------|
| Power Source             | Gasoline / Diesel                | Battery-powered electric motors              |
| Transmission             | Torque converter, multi-speed    | Direct drive, planetary gear reduction       |
| Torque Delivery          | Delayed, needs revs              | Instant torque from 0 RPM                    |
| Maintenance              | High (many moving parts)         | Low (simpler system)                         |
| Efficiency               | ~8%                              | 26.5% average (up to 45%)                    |
| Environment Suitability  | Better for outdoor, long hours   | Best for indoor, low-emission environments   |

---

## 🧪 Conclusion

### ✅ Use Electric Forklifts when:
- Operating **indoors**
- **Exhaust and noise** are a concern
- You want **lower long-term operating costs**

### ✅ Use ICE Forklifts when:
- Operating **outdoors**
- You need **long runtime** with fast refueling
- You're on a **tight budget** or dealing with **extreme temperatures**

---

## 📌 Final Thoughts

This lab emphasized the **importance of drivetrain architecture** in vehicle design. While ICE forklifts remain valuable in high-demand scenarios, electric forklifts offer clear benefits in efficiency, simplicity, and sustainability.

[← Back to Main Portfolio](../README.md)
