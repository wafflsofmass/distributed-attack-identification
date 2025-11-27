# Datasets for Cybersecurity and More!

This document lists different datasets for botnet attacks, IoT intrusion detection, anomaly detection, general cybersecurity training data, and related informational datasets.

-------------------------------------------------------------------------------------------
## Mirai Botnet
### Tasks
- Botnet Attack Detection
### Description
Contains network protocol data for both benign and malignant network traffic. Malignant network traffic is intended to simulate the network data from a Mirai Botnet.
### Data Loaders
- url: https://huggingface.co/datasets/bornpresident/mirai_botnet
-------------------------------------------------------------------------------------------
## NADW-network-attacks-dataset
### Tasks
- Network Anomaly Detection in Cybersecurity
### Description
This project presents a comprehensive network traffic dataset used for training AI models for anomaly detection in cybersecurity. The dataset was collected using Wireshark and includes both normal network traffic and various types of simulated network attacks. These attacks cover a wide range of common cybersecurity threats, providing an ideal resource for training systems to detect and respond to real-time network anomalies. (from huggingface dataset card)
### Data Loaders
- url: https://huggingface.co/datasets/onurkya7/NADW-network-attacks-dataset
-------------------------------------------------------------------------------------------
## Cybersecurity Threat Detection
### Tasks
- General Cybersecurity Threat Detection
### Description
Problem Statement <a href="https://globaltechnosol. com/case_studies/Cybersecurity-Threat-Detection/" target="_blank">👉 Download the case studies here</a> Organizations face an increasing number of sophisticated cybersecurity threats, including malware, phishing attacks, and unauthorized access. A financial institution experienced frequent attempts to breach its network, risking sensitive data and regulatory compliance. Traditional security measures were reactive and failed to detect threats in real time. The institution sought a proactive AI-driven solution to identify and prevent cybersecurity threats effectively. Challenge Developing an advanced threat detection system required addressing several challenges: Processing and analyzing large volumes of network traffic and user activity data in real time. Identifying new and evolving threats, such as zero-day vulnerabilities, with high accuracy. Minimizing false positives to ensure security teams could focus on genuine threats. Solution Provided An AI-powered threat detection system was developed using machine learning algorithms and advanced analytics. The solution was designed to: Continuously monitor network activity and user behavior to identify suspicious patterns. Detect and neutralize cybersecurity threats in real time, including malware and phishing attempts. Provide actionable insights to security teams for faster and more effective threat response. Development Steps Data Collection Collected network traffic logs, endpoint activity, and historical threat data to train machine learning models. Preprocessing Cleaned and standardized data, ensuring compatibility across diverse sources, and filtered out noise for accurate analysis. Model Development Developed machine learning algorithms for anomaly detection, behavioral analysis, and threat classification. Trained models on labeled datasets to recognize known threats and identify emerging attack patterns. Validation Tested the system against simulated and real-world threat scenarios to evaluate detection accuracy, response times, and reliability. Deployment Integrated the threat detection system into the institution’s existing cybersecurity infrastructure, including firewalls, SIEM (Security Information and Event Management) tools, and endpoint protection Continuous Monitoring & Improvement Established a feedback loop to refine models using new threat data and adapt to evolving attack strategies. Results Enhanced Security Posture The system improved the institution’s ability to detect and prevent cybersecurity threats proactively, strengthening its overall security framework. Reduced Incidence of Cyber Attacks Real-time detection and response significantly reduced the frequency and impact of successful cyber attacks. Improved Threat Response Times Automated threat identification and prioritization enabled security teams to respond faster and more effectively to potential breaches. Minimized False Positives Advanced algorithms reduced false alarms, allowing security teams to focus on genuine threats and improve efficiency. Scalable and Adaptive Solution The system adapted to new threats and scaled effortlessly to protect growing organizational networks and data. 


### Additional Links
- https://globaltechnosol.com/case_studies/cybersecurity-threat-detection/
  
-------------------------------------------------------------------------------------------
## A NEW COMPREHENSIVE REALISTIC CYBER SECURITY DATASET OF IOT AND IIOT APPLICATIONS: CENTRALIZED AND FEDERATED LEARNING
### Tasks
- [Intrusion Detection](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/intrusion-detection)
- [Network Intrusion Detection](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/network-intrusion-detection)
### Description
ABSTRACT In this project, we propose a new comprehensive realistic cyber security dataset of IoT and IIoT applications, called Edge-IIoTset, which can be used by machine learning-based intrusion detection systems in two different modes, namely, centralized and federated learning. Specifically, the proposed testbed is organized into seven layers, including, Cloud Computing Layer, Network Functions Virtualization Layer, Blockchain Network Layer, Fog Computing Layer, Software-Defined Networking Layer, Edge Computing Layer, and IoT and IIoT Perception Layer. In each layer, we propose new emerging technologies that satisfy the key requirements of IoT and IIoT applications, such as, ThingsBoard IoT platform, OPNFV platform, Hyperledger Sawtooth, Digital twin, ONOS SDN controller, Mosquitto MQTT brokers, Modbus TCP/IP,. . . etc. The IoT data are generated from various IoT devices (more than 10 types) such as Low-cost digital sensors for sensing temperature and humidity, Ultrasonic sensor, Water level detection sensor, pH Sensor Meter, Soil Moisture sensor, Heart Rate Sensor, Flame Sensor,. . . etc. ). However, we identify and analyze fourteen attacks related to IoT and IIoT connectivity protocols, which are categorized into five threats, including, DoS/DDoS attacks, Information gathering, Man in the middle attacks, Injection attacks, and Malware attacks. In addition, we extract features obtained from different sources, including alerts, system resources, logs, network traffic, and propose new 61 features with high correlations from 1176 found features. After processing and analyzing the proposed realistic cyber security dataset, we provide a primary exploratory data analysis and evaluate the performance of machine learning approaches (i. e. , traditional machine learning as well as deep learning) in both centralized and federated learning modes. Instructions: Great news. The Edge-IIoT dataset has been featured as a "Document in the top 1% of Web of Science. " This indicates that it is ranked within the top 1% of all publications indexed by the Web of Science (WoS) in terms of citations and impact.


### Additional Links
- https://ieee-dataport.org/documents/edge-iiotset-new-comprehensive-realistic-cyber-security-dataset-iot-and-iiot-applications
  
-------------------------------------------------------------------------------------------

## Segmented Intrusion Detection Dataset
### Tasks
- [Image Classification](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/image-classification)
- [Network Intrusion Detection](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/network-intrusion-detection)
### Description
This is the first image-based network intrusion detection dataset. This large-scale dataset included network traffic protocol communication-based images from 15 different observation locations of different countries in Asia. This dataset is used to identify two different types of anomalies from benign network traffic. Each image with a size of 48 × 48 contains multi-protocol communications within 128 seconds. The SIDD dataset can be to applied to a broad range of tasks such as machine learning-based network intrusion detection, non-iid federated learning, and so forth. 

### Paper
- Link: [Adaptive Intrusion Detection in the Networking of Large-Scale LANs with Segmented Federated Learning](https://paperswithcode.com/paper/adaptive-intrusion-detection-in-the)
- Introduced Date: 2020-12-16
- Number of Associated Papers: 3


### Additional Links
- https://www.kaggle.com/datasets/yuweisunut/sidd-segmented-intrusion-detection-dataset
  
-------------------------------------------------------------------------------------------

## KDD Cup 1999
### Tasks
- [Anomaly Detection](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/anomaly-detection)
### Description
This is the data set used for The Third International Knowledge Discovery and Data Mining Tools Competition, which was held in conjunction with KDD-99 The Fifth International Conference on Knowledge Discovery and Data Mining. The competition task was to build a network intrusion detector, a predictive model capable of distinguishing between ``bad'' connections, called intrusions or attacks, and ``good'' normal connections. This database contains a standard set of data to be audited, which includes a wide variety of intrusions simulated in a military network environment. 


### Data Loaders
- url: https://www.tensorflow.org/datasets/catalog/kddcup99
- repo: https://github.com/tensorflow/datasets
  
### Additional Links
- https://archive.ics.uci.edu/ml/datasets/kdd+cup+1999+data
  
-------------------------------------------------------------------------------------------

## Malware Traffic Analysis Knowledge Dataset 2019
### Tasks

### Description
Malware Traffic Analysis Knowledge Dataset 2019 (MTA-KDD'19) is an updated and refined dataset specifically tailored to train and evaluate machine learning based malware traffic analysis algorithms. To generate it, that authors started from the largest databases of network traffic captures available online, deriving a dataset with a set of widely-applicable features and then cleaning and preprocessing it to remove noise, handle missing data and keep its size as small as possible. The resulting dataset is not biased by any specific application (although specifically addressed to machine learning algorithms), and the entire process can run automatically to keep it updated. Source: [Letteri et al. ](http://ceur-ws. org/Vol-2597/paper-14. pdf)

### Paper
- Link: [A Novel Resampling Technique for Imbalanced Dataset Optimization](https://paperswithcode.com/paper/a-novel-resampling-technique-for-imbalanced)
- Introduced Date: 2020-12-30
- Number of Associated Papers: 1


### Data Loaders
- url: https://github.com/IvanLetteri/MTA-KDD-19
- repo: https://github.com/IvanLetteri/MTA-KDD-19
  
### Additional Links
- https://github.com/IvanLetteri/MTA-KDD-19
  
-------------------------------------------------------------------------------------------

## Intrusion Detection Evaluation Dataset (CIC-IDS2017)
### Tasks
- [Network Intrusion Detection](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/network-intrusion-detection)
### Description
Intrusion Detection Evaluation Dataset (CIC-IDS2017) Intrusion Detection Systems (IDSs) and Intrusion Prevention Systems (IPSs) are the most important defense tools against the sophisticated and ever-growing network attacks. Due to the lack of reliable test and validation datasets, anomaly-based intrusion detection approaches are suffering from consistent and accurate performance evolutions. Our evaluations of the existing eleven datasets since 1998 show that most are out of date and unreliable. Some of these datasets suffer from the lack of traffic diversity and volumes, some do not cover the variety of known attacks, while others anonymize packet payload data, which cannot reflect the current trends. Some are also lacking feature set and metadata. CICIDS2017 dataset contains benign and the most up-to-date common attacks, which resembles the true real-world data (PCAPs). It also includes the results of the network traffic analysis using CICFlowMeter with labeled flows based on the time stamp, source, and destination IPs, source and destination ports, protocols and attack (CSV files). Also available is the extracted features definition. Generating realistic background traffic was our top priority in building this dataset. We have used our proposed B-Profile system (Sharafaldin, et al. 2016) to profile the abstract behavior of human interactions and generates naturalistic benign background traffic. For this dataset, we built the abstract behaviour of 25 users based on the HTTP, HTTPS, FTP, SSH, and email protocols. The data capturing period started at 9 a. m. , Monday, July 3, 2017 and ended at 5 p. m. on Friday July 7, 2017, for a total of 5 days. Monday is the normal day and only includes the benign traffic. The implemented attacks include Brute Force FTP, Brute Force SSH, DoS, Heartbleed, Web Attack, Infiltration, Botnet and DDoS. They have been executed both morning and afternoon on Tuesday, Wednesday, Thursday and Friday. In our recent dataset evaluation framework (Gharib et al. , 2016), we have identified eleven criteria that are necessary for building a reliable benchmark dataset. None of the previous IDS datasets could cover all of the 11 criteria. In the following, we briefly outline these criteria: Complete Network configuration: A complete network topology includes Modem, Firewall, Switches, Routers, and presence of a variety of operating systems such as Windows, Ubuntu and Mac OS X. Complete Traffic: By having a user profiling agent and 12 different machines in Victim-Network and real attacks from the Attack-Network. Labelled Dataset: Section 4 and Table 2 show the benign and attack labels for each day. Also, the details of the attack timing will be published on the dataset document. Complete Interaction: As Figure 1 shows, we covered both within and between internal LAN by having two different networks and Internet communication as well. Complete Capture: Because we used the mirror port, such as tapping system, all traffics have been captured and recorded on the storage server. Available Protocols: Provided the presence of all common available protocols, such as HTTP, HTTPS, FTP, SSH and email protocols. Attack Diversity: Included the most common attacks based on the 2016 McAfee report, such as Web based, Brute force, DoS, DDoS, Infiltration, Heart-bleed, Bot and Scan covered in this dataset. Heterogeneity: Captured the network traffic from the main Switch and memory dump and system calls from all victim machines, during the attacks execution. Feature Set: Extracted more than 80 network flow features from the generated network traffic using CICFlowMeter and delivered the network flow dataset as a CSV file. See our PCAP analyzer and CSV generator. MetaData: Completely explained the dataset which includes the time, attacks, flows and labels in the published paper. The full research paper outlining the details of the dataset and its underlying principles: Iman Sharafaldin, Arash Habibi Lashkari, and Ali A. Ghorbani, “Toward Generating a New Intrusion Detection Dataset and Intrusion Traffic Characterization”, 4th International Conference on Information Systems Security and Privacy (ICISSP).


### Additional Links
- https://www.unb.ca/cic/datasets/ids-2017.html
  
-------------------------------------------------------------------------------------------

## Cry Wolf
### Tasks

### Description
**Cry Wolf** is a dataset for cyber security analysis tasks. It is an open-access dataset of 73 true and false Intrusion Detection System (IDS) alarms derived from real-world examples of "impossible travel" scenarios. 

### Paper
- Link: [Cry Wolf: Toward an Experimentation Platform and Dataset for Human Factors in Cyber Security Analysis](https://paperswithcode.com/paper/cry-wolf-toward-an-experimentation-platform)
- Introduced Date: 2020-02-24
- Number of Associated Papers: 1


### Additional Links
- https://uncw-hfcs.github.io/ids-simulator-analysis/
  
-------------------------------------------------------------------------------------------

## UNSQ-NB15
### Tasks
- [Intrusion Detection](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/intrusion-detection)
- [Synthetic Data Generation](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/synthetic-data-generation)
- [Network Intrusion Detection](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/network-intrusion-detection)
### Description
**UNSW-NB15** is a network intrusion dataset. It contains nine different attacks, includes DoS, worms, Backdoors, and Fuzzers. The dataset contains raw network packets. The number of records in the training set is 175,341 records and the testing set is 82,332 records from the different types, attack and normal. Source: [Evaluation of Adversarial Training on Different Types of Neural Networks in Deep Learning-based IDSs](https://arxiv. org/abs/2007. 04472) Image Source: [https://www. unsw. adfa. edu. au/unsw-canberra-cyber/cybersecurity/ADFA-NB15-Datasets/](https://www. unsw. adfa. edu. au/unsw-canberra-cyber/cybersecurity/ADFA-NB15-Datasets/) Paper: [UNSW-NB15: a comprehensive data set for network intrusion detection systems](https://doi. org/10. 1109/MilCIS. 2015. 7348942)

### Paper
- Link: [UNSW-NB15: a comprehensive data set for network intrusion detection systems (UNSW-NB15 network data set)](https://doi.org/10.1109/MilCIS.2015.7348942)
- Introduced Date: 2015-11-01
- Number of Associated Papers: 147


### Data Loaders
- url: https://www.kaggle.com/datasets/dhoogla/unswnb15
- repo: https://github.com/Kaggle/kaggle-api
  
### Additional Links
- https://www.unsw.adfa.edu.au/unsw-canberra-cyber/cybersecurity/ADFA-NB15-Datasets/
  
-------------------------------------------------------------------------------------------

## ToN_IoT
### Tasks
- [Speech Synthesis - Gujarati](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/speech-synthesis-gujarati)
### Description
The **TON_IoT** datasets are new generations of Internet of Things (IoT) and Industrial IoT (IIoT) datasets for evaluating the fidelity and efficiency of different cybersecurity applications based on Artificial Intelligence (AI). The datasets have been called ‘ToN_IoT’ as they include heterogeneous data sources collected from Telemetry datasets of IoT and IIoT sensors, Operating systems datasets of Windows 7 and 10 as well as Ubuntu 14 and 18 TLS and Network traffic datasets. The datasets were collected from a realistic and large-scale network designed at the IoT Lab of the UNSW Canberra Cyber, the School of Engineering and Information technology (SEIT), UNSW Canberra @ the Australian Defence Force Academy (ADFA). The datasets were gathered in a parallel processing to collect several normal and cyber-attack events from IoT networks. A new testbed was developed at the IoT lab to connect many virtual machine, physical systems, hacking platforms, cloud and fog platforms, IoT and IIoT sensors to mimic the complexity and scalability of industrial IoT and Industry 4. 0 networks. Different hacking techniques, such as DoS, DDoS and ransomware against, were launched against web applications, IoT gateways and computer systems across the IIoT network. 

### Paper
- Link: [Federated TON_IoT Windows Datasets for Evaluating AI-based Security Applications](https://paperswithcode.com/paper/federated-ton-iot-windows-datasets-for)
- Introduced Date: 2020-10-04
- Number of Associated Papers: 7


### Additional Links
- https://ieee-dataport.org/documents/toniot-datasets
  
-------------------------------------------------------------------------------------------
## CIC IoMT dataset 2024
### Tasks

### Description
The **CICIoMT2024 dataset** is a comprehensive dataset designed for cybersecurity research focused on the Internet of Medical Things (IoMT). Developed by the Canadian Institute for Cybersecurity, it simulates realistic IoMT network traffic, representing the diverse and evolving threats faced by connected healthcare devices. The dataset comprises network traffic data from various IoMT devices, with labeled instances for 18 distinct types of cyberattacks, alongside benign traffic data. Each cyberattack type is meticulously crafted to reflect common and advanced threats, such as Distributed Denial of Service (DDoS), ransomware, man-in-the-middle attacks, and malware injections. With a balanced mix of attacks and benign instances, CICIoMT2024 enables robust training and testing for various cybersecurity models. The CICIoMT2024 dataset’s detailed packet-level information and multi-class labels make it ideal for developing and evaluating machine learning and deep learning algorithms. Its design emphasizes real-world application, making it a valuable resource for researchers aiming to enhance IoMT security, protect patient data, and ensure the resilience of medical networks against cyber threats. 


### Additional Links
- https://www.unb.ca/cic/datasets/iomt-dataset-2024.html
  
-------------------------------------------------------------------------------------------

## CTFW
### Tasks

### Description
**CTFW** is a large annotated procedural text dataset in the cybersecurity domain (3154 documents). It is used to generate flow graphs from procedural texts. 

### Paper
- Link: [Constructing Flow Graphs from Procedural Cybersecurity Texts](https://paperswithcode.com/paper/constructing-flow-graphs-from-procedural)
- Introduced Date: 2021-05-29
- Number of Associated Papers: 1


### Additional Links
- https://github.com/kuntalkumarpal/FlowGraph
  
-------------------------------------------------------------------------------------------

## CASIE
### Tasks

### Description
Annotation corpus of cybersecurity event in news articles The corpus contains 1000 annotation and source files. Our cybersecurity focused on five event types: Databreach, Phishing, Ransom, Discover, and Patch. More details of the annotation and CASIE's system are in the papers. If you use our data, please cite one of the following papers. Taneeya Satyapanich, Francis Ferraro, and Tim Finin, "CASIE: Extracting Cybersecurity Event Information from Text", InProceedings, Proceeding of the 34th AAAI Conference on Artificial Intelligence, February 2020. Taneeya Satyapanich, Tim Finin, and Francis Ferraro, "Extracting Rich Semantic Information about Cybersecurity Events", InProceedings, Second Workshop on Big Data for CyberSecurity, held in conjunction with the IEEE Int. Conf. on Big Data, December 2019. Any problems found, please contact taneeya1@umbc. edu. 


### Additional Links
- https://github.com/Ebiquity/CASIE
  
-------------------------------------------------------------------------------------------

## AISecKG: Knowledge Graph Dataset for Cybersecurity Education
### Tasks
- [Knowledge Graphs](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/knowledge-graphs)
- [NER](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/cg)
- [Ontology Matching](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/ontology-matching)
### Description
Cybersecurity education is exceptionally challenging as it involves learning the complex attacks; tools and developing critical problem-solving skills to defend the systems. For a student or novice researcher in the cybersecurity domain, there is a need to design an adaptive learning strategy that can break complex tasks and concepts into simple representations. An AI-enabled automated cybersecurity education system can improve cognitive engagement and active learning. Knowledge graphs (KG) provide a visual representation in a graph that can reason and interpret from the underlying data, making them suitable for use in education and interactive learning. However, there are no publicly available datasets for the cybersecurity education domain to build such systems. The data is present as unstructured educational course material, Wiki pages, capture the flag (CTF) writeups, etc. Creating knowledge graphs from unstructured text is challenging without an ontology or annotated dataset. However, data annotation for cybersecurity needs domain experts. To address these gaps, we made three contributions in this paper. First, we propose an ontology for the cybersecurity education domain for students and novice learners. Second, we develop AISecKG, a triple dataset with cybersecurity-related entities and relations as defined by the ontology. This dataset can be used to construct knowledge graphs to teach cybersecurity and promote cognitive learning. It can also be used to build downstream applications like recommendation systems or self-learning question-answering systems for students. The dataset would also help identify malicious named entities and their probable impact. Third, using this dataset, we show a downstream application to extract custom-named entities from texts and educational material on cybersecurity. 


### Data Loaders
- url: https://github.com/garima0106/AISecKG-cybersecurity-dataset
- repo: https://github.com/garima0106/AISecKG-cybersecurity-dataset
  
### Additional Links
- https://github.com/garima0106/AISecKG-cybersecurity-dataset
  
-------------------------------------------------------------------------------------------

## Analytic Provenance
### Tasks

### Description
**Analytic provenance** is a data repository that can be used to study human analysis activity, thought processes, and software interaction with visual analysis tools during exploratory data analysis. It was collected during a series of user studies involving exploratory data analysis scenario with textual and cyber security data. Interactions logs, think-alouds, videos and all coded data in this study are available online for research purposes. Analysis sessions are segmented in multiple sub-task steps based on user think-alouds, video and audios captured during the studies. These analytic provenance datasets can be used for research involving tools and techniques for analyzing interaction logs and analysis history. 

### Paper
- Link: [Analytic Provenance Datasets: A Data Repository of Human Analysis Activity and Interaction Logs](https://paperswithcode.com/paper/analytic-provenance-datasets-a-data)
- Introduced Date: 2018-01-16
- Number of Associated Papers: 1


### Additional Links
- https://research.arch.tamu.edu/analytic-provenance/datasets/
  
-------------------------------------------------------------------------------------------

## OllaBench for Interdependent Cybersecurity v.0.2
### Tasks
- [Multiple-choice](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/multiple-choice)
- [Moral Scenarios](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/moral-scenarios)
- [Computer Security](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/computer-security)
### Description
Large Language Models (LLMs) have the potential to enhance Agent-Based Modeling by better representing complex interdependent cybersecurity systems, improving cybersecurity threat modeling and risk management. Evaluating LLMs in this context is crucial for legal compliance and effective application development. Existing LLM evaluation frameworks often overlook the human factor and cognitive computing capabilities essential for interdependent cybersecurity. To address this gap, I propose OllaBench, a novel evaluation framework that assesses LLMs' accuracy, wastefulness, and consistency in answering scenario-based information security compliance and non-compliance questions. 

### Paper
- Link: [Ollabench: Evaluating LLMs' Reasoning for Human-centric Interdependent Cybersecurity](https://paperswithcode.com/paper/ollabench-evaluating-llms-reasoning-for-human)
- Introduced Date: 2024-06-11
- Number of Associated Papers: 1


### Additional Links
- https://github.com/Cybonto/OllaBench
  
-------------------------------------------------------------------------------------------

## Cybench
### Tasks
- [???](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/task)
### Description
Language Model (LM) agents for cybersecurity that are capable of autonomously identifying vulnerabilities and executing exploits have potential to cause real-world impact. Policymakers, model providers, and researchers in the AI and cybersecurity communities are interested in quantifying the capabilities of such agents to help mitigate cyberrisk and investigate opportunities for penetration testing. Toward that end, we introduce Cybench, a framework for specifying cybersecurity tasks and evaluating agents on those tasks. We include 40 professional-level Capture the Flag (CTF) tasks from 4 distinct CTF competitions, chosen to be recent, meaningful, and spanning a wide range of difficulties. Each task includes its own description, starter files, and is initialized in an environment where an agent can execute commands and observe outputs. Since many tasks are beyond the capabilities of existing LM agents, we introduce subtasks for each task, which break down a task into intermediary steps for a more detailed evaluation. To evaluate agent capabilities, we construct a cybersecurity agent and evaluate 8 models: GPT-4o, OpenAI o1-preview, Claude 3 Opus, Claude 3. 5 Sonnet, Mixtral 8x22b Instruct, Gemini 1. 5 Pro, Llama 3 70B Chat, and Llama 3. 1 405B Instruct. For the top performing models (GPT-4o and Claude 3. 5 Sonnet), we further investigate performance across 4 agent scaffolds (structed bash, action-only, pseudoterminal, and web search). Without subtask guidance, agents leveraging Claude 3. 5 Sonnet, GPT-4o, OpenAI o1-preview, and Claude 3 Opus successfully solved complete tasks that took human teams up to 11 minutes to solve. In comparison, the most difficult task took human teams 24 hours and 54 minutes to solve. All code and data are publicly available at https://cybench. github. io/. 

### Paper
- Link: [Cybench: A Framework for Evaluating Cybersecurity Capabilities and Risks of Language Models](https://paperswithcode.com/paper/cybench-a-framework-for-evaluating)
- Introduced Date: 2024-08-15
- Number of Associated Papers: 5


### Additional Links
- https://cybench.github.io/
-------------------------------------------------------------------------------------------
## ARINC 429 Voltage Data
### Tasks
- [Intrusion Detection](https://web.archive.org/web/20240412153636/https://paperswithcode.com/task/intrusion-detection)
### Description
This page contains ARINC 429 message data recorded from the hardware-in-a-loop simulator. These messages were recorded using a SIGLENT SDS2204X Plus oscilloscope sampling at 20 MHz. The intent of this data is to enable cybersecurity research and development for ARINC 429 by providing detailed message data from multiple hardware sources. The dataset consists of three csv files of ARINC 429 messages along with a data dictionary markdown file. The zip file is 550MB and each csv file is approximately 1. 5GB. The csv filenames indicate which transmitter the messages were being sent from, with the EGPWS representing a “valid” transmitter while the RTX and AltaDT both represent adversarial transmitters. 

### Paper
- Link: [ARINC 429 Cyber-vulnerabilities and Voltage Data in a Hardware-in-the-Loop Simulator](https://paperswithcode.com/paper/arinc-429-cyber-vulnerabilities-and-voltage)
- Introduced Date: 2024-08-29
- Number of Associated Papers: 1


### Additional Links
- https://testscience.org/arinc/
