# 🔍 OpsLens — Operational Data Inspector

![JavaScript](https://img.shields.io/badge/javascript-ES6%2B-yellow.svg)
![Runtime](https://img.shields.io/badge/node.js-runtime-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Project](https://img.shields.io/badge/status-active-success.svg)

**OpsLens** is a lightweight JavaScript toolkit designed to analyze operational data, detect measurement gaps, and compare software release versions.

It transforms fundamental algorithmic techniques into practical utilities that can support performance monitoring, data quality analysis, and software release management.

---

## 📌 Project Overview

Modern software systems generate different kinds of operational information:
- Performance results from repeated evaluations.
- Numerical measurements from monitoring systems.
- Version identifiers from software releases.

Analyzing these values efficiently is important for understanding system behavior and maintaining reliable software.

OpsLens provides three independent utilities to address these needs:

| Module | Purpose | Core Technique |
| :--- | :--- | :--- |
| **Performance Tracker** | Compare two participants across multiple evaluations | Frequency counting |
| **Gap Analyzer** | Detect the largest difference between measurements | Bucket-based analysis |
| **Version Comparator** | Compare software release versions | Sequential revision comparison |

The project focuses on simplicity, efficiency, and reusable JavaScript functions.

---

## 🌍 Real-World Scenario

Imagine a software engineering team managing a monitoring platform. 

The team needs to:
1. Compare the performance of two services across several testing rounds.
2. Analyze response-time measurements to discover unusually large gaps.
3. Determine whether one software release is newer than another.

Instead of building three separate tools, the team can use OpsLens as a small collection of reusable analytical utilities.

---

## 🧠 Core Concepts

### 1. Performance Tracking
The Performance Tracker compares two participants across repeated evaluation rounds. For each round:
- The participant with the higher score receives one win.
- Equal scores are recorded as ties.
- The final result depends on the total number of wins.

This approach uses simple frequency counting.

### 2. Maximum Gap Detection
The Gap Analyzer identifies the largest difference between consecutive values in sorted numerical data. Rather than sorting the complete dataset, it uses a bucket-based approach. 

Each bucket stores:
- Its minimum value.
- Its maximum value.

The algorithm calculates the differences between consecutive non-empty buckets to identify the maximum gap.

### 3. Software Version Comparison
The Version Comparator compares dotted version identifiers such as `2.1.0`, `2.10.0`, and `3.0.0`. It compares individual revision numbers from left to right. Missing revisions are treated as zero, and leading zeros do not affect numerical values.

---

## ⚙️ How the System Works

OpsLens consists of three independent modules:

```text
                 ┌─────────────────────┐
                 │       OpsLens       │
                 │  Data Analysis Tool │
                 └──────────┬──────────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
       Performance     Gap Analyzer    Version
         Tracker                       Comparator
             │              │              │
             ▼              ▼              ▼
       Win Counting    Bucket Analysis   Revision
                                         Comparison
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                    Analysis Results

