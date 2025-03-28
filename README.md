# 🚀 Smarter Reconciliation and Anomaly Detection using Gen AI

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction
In today's data-driven landscape, businesses rely heavily on accurate and efficient reconciliation processes to ensure consistency across financial transactions, operational data, and system logs. Traditional reconciliation methods often involve manual intervention, rule-based approaches, and time-consuming audits, making them prone to errors, inefficiencies, and undetected anomalies.

The emergence of Generative AI (Gen AI) offers a transformative approach to reconciliation and anomaly detection. By leveraging machine learning, natural language processing, and advanced data analytics, this project aims to develop an intelligent system that can automate reconciliation, detect discrepancies, and identify patterns that traditional methods might miss.

This project focuses on:

- Automating reconciliation processes using AI-driven insights.

- Enhancing anomaly detection by analyzing vast datasets for hidden patterns.

- Reducing manual effort and errors by leveraging self-learning models.

- Improving decision-making with real-time alerts and predictive analytics.

By integrating Gen AI with modern reconciliation frameworks, businesses can achieve higher efficiency, accuracy, and operational resilience, paving the way for a smarter and more robust financial and data management ecosystem.

## 🎥 Demo

#### [UI Video Demo](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/Demo_UI_Recording.mp4)
#### [Service Video Demo](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/Demo_Service_Recording.mp4)  

🖼️ Screenshots

 [Screenshot1](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/screenshots/Screenshot1.png)
 [Screenshot2](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/screenshots/Screenshot2.png)
 [Screenshot3](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/screenshots/Screenshot3.png)
 [Screenshot4](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/screenshots/Screenshot4.png)
 [Screenshot5](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/screenshots/Screenshot5.png)
 [Screenshot6](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/screenshots/Screenshot6.png)
 [Screenshot7](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/screenshots/Screenshot7.png)
 [Screenshot8](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/screenshots/Screenshot8.png)
 [Screenshot9](https://github.com/ewfx/sradg-digital-dynamos/blob/main/artifacts/demo/screenshots/Screenshot9.png)



## 💡 Inspiration

The project was inspired by real-world challenges in financial auditing and reconciliation, where:
-	Manual processes  are time-consuming, error-prone .
-  Anomalies are Hard to Explain
-  Dealing with same pattern of error again and again
  
The Problem We Solved:
"How can we automatically detect financial anomalies and explain users in plain language—without relying on rigid solutions?"
1.	For Auditors
-	Replace manual checks with AI-powered anomaly detection.
-	Provide clear, actionable explanations (e.g., "Likely cause: Missing transaction on May 31").

2.	For IT Teams
-	Offer a scalable, self-improving system (retrains with feedback).
-	Support both cloud (GPT-4) and free local LLMs (TinyLlama).
  
3.	For Compliance
-	Maintain audit trails (CSV reports + API logs).
-	Reduce false positives with adaptive thresholds.
________________________________________
Real-World Impact
•	Faster Audits: Cut review time from hours to minutes.
•	Better Decisions: Explanations help teams prioritize high-risk issues.
•	Cost Savings: Local LLM fallback avoids GPT-4 API costs for simple cases.

## ⚙️ What It Does
The Solution that we built would automate the whole process and help reconcilers in detecting anomalies, helping them with AI generated explanation, consider the feedback from user, absorb the feedback and integrate with various tools to fix and track the anamolies.

Anomaly Detection
- Algorithm: IsolationForest from scikit-learn (unsupervised ML).
- Input: Historical and new transactional data (CSV files).
- Output: Flagged anomalies with explanation

Explanation Generation
- Primary: GPT-4 API for high-quality
- Fallback: statistical summaries if GPT-4 fails.

Continuous Learning
- User Interface : to act upon the identified anomaly
- Feedback Loop: Users confirm/correct anomalies to retrain the model.

Deployment
- REST API: Flask endpoint (/api/anomalies) to serve results.
- Outputs: CSV reports

Solution workflow:
------------------
![image](https://github.com/user-attachments/assets/75b928d1-97ce-4c98-8943-76b0e99302c1)


## 🛠️ How We Built It

1. Problem Identification
- Identified the need for automated anomaly detection with human-readable explanations for auditors.
2. Tech Stack Selection
-	Core: Python (pandas, scikit-learn) for data processing and ML.
-	AI: OpenAI GPT-4 for explanations + statistical feedback.
-	API: Flask to serve results.
3. Key Steps
-	Data Prep: Cleaned/processed CSV data (handled dates, missing values).
-	Anomaly Detection: Trained IsolationForest on historical balances.
-	Explanation Engine:
o	GPT-4: Generated natural language insights via API.
o	Statistical Fallback: when unable to connect to GPT
-	Feedback Loop: Allowed users to flag false positives/negatives to retrain the model.
-	Deployment: Exposed via Flask API (/api/anomalies) and CSV reports.

Outcome: A scalable, self-improving system that detects financial anomalies and explains them in plain language—no manual reviews needed.
In 1 Line: "Trained IsolationForest on historical data, explained anomalies via GPT-4/Statistical, and deployed as a self-learning Flask API." 🚀


## 🚧 Challenges We Faced
Below are some of the challenges we faced while developing the solution to the probelm
- Version conflicts between scikit-learn, pandas, and torch (especially for GPU support).
- OpenAI API changes (e.g., migration from openai==0.28 to >=1.0.0 breaking existing code).
- Local LLM setup complexity (TinyLlama requires specific transformers/torch versions).
- GPT-4 API costs and rate limits
- Obtaining API Key for GPT-4
- Overly technical explanations from statistical fallback.



## 🏃 How to Run

[Source Codes](https://github.com/ewfx/sradg-digital-dynamos/tree/main/code)

1. Clone the repository  
   ```sh
   git clone https://github.com/ewfx/sradg-digital-dynamos.git
   ```
2. Install dependencies  
   ```sh
   npm install , pip install -r requirements.txt (for Python)
   ```
3. Run the project  
   ```sh
   npm start  , python detectAnamoly.py
   ```

## 🏗️ Tech Stack
![image](https://github.com/user-attachments/assets/cf9c278e-115d-4c0e-a3ff-116bb19cb376)


## 👥 Team (Digital_Dynamos)
- **Teammate 1** - Radhika Sreeramoju
- **Teammate 2** - Bimesh singh
- **Teammate 3** - Raosaheb Metkari
- **Teammate 4** - Naveen Kumar
- **Teammate 5** - Avinash Bakurdi Ramegowda


