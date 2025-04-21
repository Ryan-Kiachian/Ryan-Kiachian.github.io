[← Back to Main Portfolio](../README.md)

# 🌪 Wind Turbine Blade Optimization – Airfoil Design Project

**MAE 4272 | Blade Element Momentum Theory | MATLAB | 3D Printing | Wind Tunnel Testing**

This project involved designing, optimizing, fabricating, and testing a set of small-scale wind turbine blades. Using Blade Element Momentum Theory (BEMT), our team created blades tailored for a specific wind distribution and design RPM. The project merged aerodynamic theory, MATLAB-based simulation, and real-world testing to evaluate performance gains from an optimized airfoil geometry.

---

## 🧠 Project Objectives

- Improve power extraction of a wind turbine operating at a constant RPM
- Optimize chord and pitch distributions using BEMT with tip loss and wake effects
- Fabricate blades with 3D printing and test them in a controlled wind tunnel environment
- Compare theoretical performance against baseline Betz-limit geometry and experimental data

> 📌 Airfoil: **NACA 4412**  
> 📌 Wind speed modeled by **Weibull distribution**  
> 📌 Design RPM: **1463 RPM**  
> 📌 Tip speed ratio: **λ = 5.7**

---

## 🛠️ Design Process

- Selected **NACA 4412** due to its manufacturable geometry and favorable lift-to-drag (CL/CD) characteristics
- Used MATLAB to:
  - Derive chord and pitch distributions across the blade radius
  - Integrate tip-loss correction factors (Prandtl model)
  - Evaluate power curves across different wind speeds and RPMs
- Defined performance at **most probable wind velocity** using Weibull distribution (U = 4.78 m/s)

<p align="center">
  <img src="../Projects/Images/ChordLengthPitch.png" alt="Chord and Pitch Distribution" width="500"/>
</p>
<p align="center"><em>Figure 1: Chord length and pitch angle distributions for the optimized geometry</em></p>

---

## 📈 Simulation & Optimization Results

Using a custom MATLAB BEMT script, we generated theoretical performance curves comparing the optimized design to the baseline Betz-limit blade:

- 📈 Max power coefficient improved by **1.5%**
- ⚡ Power at design RPM increased by **30.2%**
- 🔋 Total energy extraction increased by **13.7%**

<p align="center">
  <img src="../Projects/Images/TheoreticalPowerAirfoil.png" alt="Power vs RPM Graph" width="500"/>
</p>
<p align="center"><em>Figure 2: Theoretical power curves comparing baseline and optimized blade designs</em></p>

---

## 🧪 Experimental Testing

- Blades were 3D printed and mounted to a DC motor equipped with a torque brake
- Wind tunnel tests were performed at:
  - Design velocity: **4.78 m/s**
  - Additional velocities: 4.53 m/s and 5.03 m/s (limited by power outage)
- Power vs RPM curve was measured by sweeping torque and calculating power output

> ⚠️ A campus-wide power outage limited our ability to collect multiple runs

---

## 🧾 Results Summary

| Metric                        | Theoretical | Experimental | Difference |
|------------------------------|-------------|--------------|------------|
| Max Power Output             | 3.52 W      | 1.89 W       | −46.4%     |
| Power @ Design RPM           | 3.52 W      | 1.72 W       | −51.2%     |
| Max Power Coefficient (Cp)   | 0.50        | 0.27         | −46.0%     |

<p align="center">
  <img src="../Projects/Images/AirfoilTestPower.png" alt="Experimental Power Curve" width="500"/>
</p>
<p align="center"><em>Figure 3: Measured power curve at design wind speed</em></p>

---

## 🧠 Reflections & Recommendations

- **Tip deflection** was visibly noticeable during high-speed rotation and likely reduced efficiency
- Testing was limited due to lab access and equipment failure (power outage)
- Future improvements:
  - Redesign blade for performance across **range of wind speeds** (not just one value)
  - Use **stiffer materials** to minimize aerodynamic shape distortion
  - Implement more robust testing methodology with redundant trials and velocity points

