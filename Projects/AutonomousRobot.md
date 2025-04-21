# 🤖 Autonomous Robot – Cube Craze Competition

**Embedded Systems | Arduino Uno | Autonomous Navigation | Sensors + Actuation**

This project was part of a competitive embedded systems challenge at Cornell University. Our team, **Free Bird**, designed, built, and programmed a fully autonomous Arduino-powered robot to navigate a game board, identify color zones, collect wooden blocks, and return to its origin.

---

## ⚙️ Overview

The robot was constructed on a lightweight chassis with two driven wheels and a front-mounted collection scoop made from a repurposed license plate. An Arduino Uno processed sensor inputs and controlled motion through dual H-bridge motor drivers.

Key behaviors:
- Identify starting zone via color sensing
- Navigate diagonally to the block region
- Detect board boundaries using QTI sensors
- Collect blocks with a physical scoop
- Return to the starting zone autonomously

>![Figure 1: Top view of the robot showing Arduino, breadboard, and aluminum scoop](<img src="../Projects/Images/RobotTopView.png" alt="Figure 1: Top view of the robot" width="400"/>
)



---

## 🔌 Electrical System

The electrical system integrated multiple sensors and two motors:

- **Sensors**
  - TCS3200 Color Sensor (detects start zone color)
  - Two QTI Edge Detectors (detect board boundaries)
- **Actuation**
  - Two DC motors driven via L9110 H-Bridge ICs
- **Power**
  - 9V battery for the Arduino
  - 6V battery pack for motors

> ![Figure 2: Full schematic circuit diagram](./robot-circuit-diagram.png)

---

## 🧠 Software Logic & Strategy

Our robot was programmed using custom Arduino C code that implemented the following logic:

1. **Initialization**
   - Detect starting color (yellow or blue)
   - Set that color as "home zone"

2. **Navigation Sequence**
   - Move diagonally toward the block region
   - Use QTI sensors to detect boundary lines (black)
   - Upon detecting the secondary zone, turn and approach cubes

3. **Block Collection**
   - Push into the cube pile with the scoop
   - Reverse and return along original path

4. **Return to Home Zone**
   - Use the same sensor logic to recognize the home color and stop

The robot used condition-based logic to update movement decisions in real-time. A sample of the high-level logic flow is shown below:

> ![Figure 3: Flowchart showing robot navigation and block collection logic](./robot-flowchart.png)

---

## 🏁 Competition Results

- **Wins:** 2 matches successfully completed
- **Challenges:**
  - In round 1, the robot failed to detect the board edge in time and fell off the platform.
  - The scoop caught on a tripod during a fall, disrupting performance.
  - In round 2, a ground wire to the color sensor came loose, which went unnoticed until round 3.
- **Fixes & Adjustments:**
  - Recalibrated the robot's starting orientation to better align with the field.
  - Repaired sensor wiring and improved response to edge detection events.
- **Insights:**
  - Robots with larger wheels had a noticeable speed and agility advantage.
  - Our robot was resilient to interruptions, but recovery from being bumped remained a weakness.

---

## 💡 Reflections & Takeaways

- We learned how to **prioritize milestone goals** before tackling complex behaviors.
- The importance of **robust sensor mounting and wiring** was clear—minor issues caused major failures.
- **Testing under realistic conditions** (with distractions and bumps) would have improved reliability.
- **Advice to future teams:**
  - Start simple and get the base logic working reliably.
  - Don't overbuild before your robot can drive straight and respond to inputs correctly.
  - Use `Serial.print` generously for debugging — it’s your best friend when logic isn’t working.

---

## 📂 Files in this Folder

- `robot-top-view.png` — Full image of robot with labeled components  
- `robot-circuit-diagram.png` — Annotated schematic of motor and sensor circuit  
- `robot-flowchart.png` — Visual layout of control logic  
- `autonomous-robot-code.ino` — Fully commented Arduino source code  
- `README.md` — Project write-up and documentation

---

## 📸 Bonus Shots

> ![Figure 4: Side view showing the aluminum scoop mechanism](./robot-side-scoop.png)  
> ![Figure 5: Bottom view with QTI sensors mounted](./robot-bottom-sensors.png)  
> ![Figure 6: Back view showing wiring and Arduino](./robot-back-view.png)

---

Thanks for checking out my Autonomous Robot build!



