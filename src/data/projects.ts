// Project data for the portfolio
import fraude1 from "@/assets/projects/fraude/01_distribution_classes.png";
import fraude2 from "@/assets/projects/fraude/02_matrices_confusion_ROC.png";
import fraude3 from "@/assets/projects/fraude/03_resume_final.png";

import churn1 from "@/assets/projects/churn/01_analyse_exploratoire.png";
import churn2 from "@/assets/projects/churn/02_matrices_confusion_ROC.png";
import churn3 from "@/assets/projects/churn/03_shap_features.png";
import churn4 from "@/assets/projects/churn/04_resume_final.png";

import hospital1 from "@/assets/projects/hospital/01_analyse_exploratoire.png";
import hospital2 from "@/assets/projects/hospital/02_matrices_confusion_ROC.png";
import hospital3 from "@/assets/projects/hospital/03_resume_final.png";

import marketing1 from "@/assets/projects/marketing/01_analyse_exploratoire.png";
import marketing2 from "@/assets/projects/marketing/02_matrices_confusion.png";
import marketing3 from "@/assets/projects/marketing/03_courbes_ROC.png";
import marketing4 from "@/assets/projects/marketing/04_shap_features.png";
import marketing5 from "@/assets/projects/marketing/05_resume_final.png";

import nlp1 from "@/assets/projects/nlp/01_wordclouds.png";
import nlp2 from "@/assets/projects/nlp/02_matrices_confusion.png";
import nlp3 from "@/assets/projects/nlp/03_courbes_ROC.png";
import nlp4 from "@/assets/projects/nlp/04_shap_features.png";
import nlp5 from "@/assets/projects/nlp/05_resume_final.png";
import nlp6 from "@/assets/projects/nlp/06_finbert_demo.png";

import simplificateursCover from "@/assets/projects/simplificateurs/cover.png";

import auditeurCover from "@/assets/projects/auditeur/cover.png";

export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  headline: string;
  context: string;
  approach: string;
  results: string;
  impact: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  images: { src: string; caption: string }[];
  cover: string;
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "detection-fraude-bancaire",
    number: "01",
    category: "Finance · Classification",
    title: "Détection de Fraude Bancaire",
    tagline: "Machine Learning sur données déséquilibrées",
    headline: "Identifier 0,17 % de transactions frauduleuses parmi 284 807 opérations bancaires.",
    context:
      "Le dataset Credit Card Fraud Detection (MLG-ULB) contient 284 807 transactions réelles de cartes de crédit européennes dont seulement 492 sont frauduleuses, soit 0,173 % du total. Ce déséquilibre extrême est le vrai défi : un modèle naïf qui prédit \u00ab normal \u00bb à chaque fois afficherait 99,8 % d'accuracy sans jamais détecter une fraude.",
    approach:
      "Application de la technique SMOTE (Synthetic Minority Oversampling Technique) pour générer des exemples synthétiques de fraudes et équilibrer les classes d'entraînement. Comparaison rigoureuse de trois algorithmes : Random Forest, XGBoost et Régression Logistique, évalués sur ROC-AUC, précision et rappel.",
    results:
      "XGBoost s'impose avec un ROC-AUC de 0,9792 — il distingue correctement une fraude d'une transaction légitime dans 97,9 % des cas. L'analyse SHAP identifie les variables les plus déterminantes et rend le modèle explicable, exigence fondamentale dans le secteur bancaire réglementé.",
    impact:
      "Un modèle production-ready capable de réduire massivement les pertes financières tout en respectant les contraintes d'explicabilité réglementaire.",
    metrics: [
      { label: "ROC-AUC", value: "0.9792" },
      { label: "Transactions analysées", value: "284 807" },
      { label: "Fraudes (déséquilibre)", value: "0.17 %" },
    ],
    stack: ["Python", "Scikit-learn", "XGBoost", "SMOTE", "SHAP"],
    repoUrl: "https://github.com/Barbaranimath/fraude-bancaire",
    cover: fraude3,
    images: [
      { src: fraude1, caption: "Distribution des classes — déséquilibre extrême" },
      { src: fraude2, caption: "Matrices de confusion et courbes ROC des trois modèles" },
      { src: fraude3, caption: "Résumé final des performances comparées" },
    ],
  },
  {
    slug: "nlp-actualites-financieres",
    number: "02",
    category: "NLP · Finance",
    title: "Analyse de Sentiment Financier",
    tagline: "NLP appliqué aux actualités financières",
    headline: "Classifier le sentiment des titres financiers — du modèle classique au Transformer.",
    context:
      "Dataset Financial PhraseBank : 4 846 titres financiers annotés par des experts. Applications directes en trading algorithmique, veille concurrentielle et gestion de risque. Le NLP appliqué à la finance reste une compétence rare et très recherchée.",
    approach:
      "Pipeline complet : nettoyage (ponctuation, stopwords, tokenisation), vectorisation TF-IDF avec bigrammes sur 5 000 features, puis comparaison de Régression Logistique, Random Forest et Naive Bayes. Intégration de FinBERT, Transformer pré-entraîné sur corpus financiers — état de l'art du domaine.",
    results:
      "Régression Logistique : 73,40 % d'accuracy. Random Forest : 73,61 %. Naive Bayes : 70,93 %. FinBERT apporte une compréhension contextuelle supérieure des nuances financières. Des wordclouds par sentiment permettent de visualiser les termes associés à chaque polarité.",
    impact:
      "Maîtrise d'un pipeline NLP complet, du préprocessing classique à l'intégration de Transformers spécialisés — un savoir-faire directement transposable à la veille financière et aux signaux de marché.",
    metrics: [
      { label: "Accuracy (RF)", value: "73.61 %" },
      { label: "Titres annotés", value: "4 846" },
      { label: "Modèles comparés", value: "4 (+ FinBERT)" },
    ],
    stack: ["Python", "TF-IDF", "Scikit-learn", "FinBERT", "HuggingFace"],
    repoUrl: "https://github.com/Barbaranimath/nlp-sentiment-financier",
    cover: nlp5,
    images: [
      { src: nlp1, caption: "Wordclouds par polarité de sentiment" },
      { src: nlp2, caption: "Matrices de confusion" },
      { src: nlp3, caption: "Courbes ROC" },
      { src: nlp4, caption: "Top features par classe" },
      { src: nlp5, caption: "Résumé final des performances" },
      { src: nlp6, caption: "FinBERT en temps réel — analyse de sentiment sur titres financiers (94–97% de confiance)" },
    ],
  },
  {
    slug: "auditeur-qualite-donnees",
    number: "03",
    category: "Gouvernance · Qualité des données",
    title: "Auditeur de Qualité des Données",
    tagline: "Audit automatique de fichiers et détection des renseignements personnels (Loi 25)",
    headline:
      "Noter la qualité d'un fichier en quelques secondes et repérer les renseignements personnels à protéger.",
    context:
      "Dans une organisation, les fichiers clients circulent avec des doublons, des champs vides, des formats incohérents et des renseignements personnels que personne n'a recensés. Au Québec, la Loi 25 impose de savoir où se trouvent ces renseignements et de les protéger. L'objectif : un outil web qu'un analyste ou un responsable de la conformité peut utiliser sans rien installer.",
    approach:
      "Spécification écrite et approuvée avant le code, puis développement en 5 phases. L'outil lit les CSV et Excel (UTF-8 ou latin-1, séparateur virgule ou point-virgule), détecte le type de chaque colonne, puis mesure 5 dimensions : complétude, unicité (sur une colonne clé détectée automatiquement), validité (courriel, téléphone, code postal canadien, date réelle), cohérence des formats et fraîcheur. Les renseignements personnels sont repérés par le nom des colonnes et le format des valeurs, puis masqués à l'écran.",
    results:
      "Validé sur 5 000 clients entièrement fictifs avec des erreurs injectées volontairement : l'outil retrouve 100 % des anomalies au chiffre près (150 doublons, 400 courriels manquants, 250 téléphones invalides, 1 500 dates au mauvais format) et 8 colonnes de renseignements personnels sur 8, sans faux positif. Le code est couvert par 151 tests automatisés.",
    impact:
      "Un audit qui prenait des heures dans Excel devient un rapport en quelques secondes, avec une liste de corrections classées par nombre d'enregistrements touchés et une recommandation pour chaque colonne sensible — un appui concret aux démarches de gouvernance et de conformité Loi 25.",
    metrics: [
      { label: "Anomalies retrouvées", value: "100 %" },
      { label: "Colonnes sensibles détectées", value: "8 / 8" },
      { label: "Tests automatisés", value: "151" },
    ],
    stack: ["Python", "Pandas", "Streamlit", "Pytest", "Loi 25"],
    repoUrl: "https://github.com/Barbaranimath/auditeur-qualite-donnees",
    liveUrl: "https://auditeur-qualite-donnees-bs.streamlit.app",
    cover: auditeurCover,
    images: [
      {
        src: auditeurCover,
        caption: "Résultats sur les données de démo : score global, 5 dimensions et points à corriger",
      },
    ],
  },
  {
    slug: "churn-assurance",
    number: "04",
    category: "Assurance · Rétention",
    title: "Prédiction du Churn Client",
    tagline: "Anticiper les résiliations dans le secteur des assurances",
    headline: "Identifier en avance les clients à risque pour cibler les campagnes de rétention.",
    context:
      "Le dataset IBM Telco Customer Churn comprend 7 043 clients et 20 variables décrivant profil, contrat et comportement d'achat. L'enjeu business est concret : permettre aux équipes marketing de déclencher des actions de rétention avant qu'il ne soit trop tard.",
    approach:
      "Nettoyage des données, encodage des variables catégorielles, application de SMOTE, puis entraînement comparatif de trois modèles. Évaluation sur ROC-AUC et rappel — métrique clé car manquer un client qui churn coûte plus cher qu'un faux positif.",
    results:
      "La Régression Logistique surpasse ses concurrents avec un ROC-AUC de 0,8389 et un rappel de 78,88 % sur la classe \u00ab churné \u00bb — près de 8 clients sur 10 qui allaient résilier sont correctement identifiés.",
    impact:
      "L'analyse SHAP révèle que le type de contrat (mensuel vs annuel), l'ancienneté et les charges mensuelles sont les trois prédicteurs majeurs. Une compagnie peut désormais cibler ses clients en contrat mensuel, avec moins de 12 mois d'ancienneté et des charges élevées pour maximiser le ROI de ses campagnes.",
    metrics: [
      { label: "ROC-AUC", value: "0.8389" },
      { label: "Rappel classe churn", value: "78.88 %" },
      { label: "Clients analysés", value: "7 043" },
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "SMOTE", "SHAP"],
    repoUrl: "https://github.com/Barbaranimath/churn-assurance",
    cover: churn4,
    images: [
      { src: churn1, caption: "Analyse exploratoire du comportement client" },
      { src: churn2, caption: "Matrices de confusion et courbes ROC" },
      { src: churn3, caption: "SHAP — variables les plus prédictives du churn" },
      { src: churn4, caption: "Résumé final des performances" },
    ],
  },
  {
    slug: "campagnes-marketing",
    number: "05",
    category: "Marketing · ROI & Ciblage",
    title: "Prédiction de Réponse aux Campagnes",
    tagline: "Optimisation du ROI marketing par feature engineering",
    headline: "Transformer une campagne de masse en ciblage précis et rentable.",
    context:
      "Dataset Marketing Campaign (Rodolfo Saldanha) : 2 240 clients avec historique complet d'achats, profil démographique et réponse aux 5 campagnes précédentes. L'objectif est d'identifier les clients les plus susceptibles de convertir.",
    approach:
      "Feature engineering avancé : création de TotalSpent, TotalPurchases, TotalCampaignsAccepted et Age (calculé depuis l'année de naissance). Application de SMOTE, normalisation, puis comparaison des trois modèles.",
    results:
      "XGBoost se démarque avec un ROC-AUC exceptionnel de 0,9000, surpassant la Régression Logistique (0,8817) et le Random Forest (0,8753). L'analyse SHAP isole les trois prédicteurs les plus puissants : récence de la dernière interaction, ancienneté client et historique d'acceptation de campagnes.",
    impact:
      "Illustration parfaite de la façon dont la data science transforme une campagne marketing de masse en un ciblage chirurgical, avec un impact direct mesurable sur le ROI.",
    metrics: [
      { label: "ROC-AUC", value: "0.9000" },
      { label: "Clients analysés", value: "2 240" },
      { label: "Features synthétiques", value: "4 créées" },
    ],
    stack: ["Python", "XGBoost", "SHAP", "Feature Engineering"],
    repoUrl: "https://github.com/Barbaranimath/dashboard-marketing",
    cover: marketing5,
    images: [
      { src: marketing1, caption: "Analyse exploratoire et corrélations" },
      { src: marketing2, caption: "Matrices de confusion" },
      { src: marketing3, caption: "Courbes ROC comparées" },
      { src: marketing4, caption: "SHAP — top prédicteurs de réponse" },
      { src: marketing5, caption: "Résumé final" },
    ],
  },
  {
    slug: "readmissions-hospitalieres",
    number: "06",
    category: "Santé · Modélisation clinique",
    title: "Prédiction des Réadmissions Hospitalières",
    tagline: "Insuffisance cardiaque & survie post-hospitalisation",
    headline: "Prédire le risque de décès d'un patient cardiaque à partir de son dossier médical.",
    context:
      "Dataset Heart Failure Clinical Records publié dans BMC Medical Informatics : 299 patients réels, 12 variables cliniques (âge, fraction d'éjection cardiaque, créatinine sérique, pression artérielle…). Taux de mortalité de 32,11 %, données relativement équilibrées.",
    approach:
      "Application de SMOTE pour optimiser la performance, puis comparaison de Random Forest, XGBoost et Régression Logistique. Validation par cross-validation et analyse SHAP pour garantir l'interprétabilité clinique.",
    results:
      "Random Forest s'impose comme meilleur modèle avec un ROC-AUC de 0,8954, devant XGBoost (0,8549) et la Régression Logistique (0,8652). L'analyse SHAP confirme les conclusions médicales connues : temps de suivi, créatinine sérique et fraction d'éjection sont les indicateurs les plus déterminants.",
    impact:
      "Démonstration d'une capacité à travailler sur des données médicales sensibles avec rigueur, en produisant des prédictions cliniquement interprétables — un prérequis pour toute application en milieu hospitalier.",
    metrics: [
      { label: "ROC-AUC", value: "0.8954" },
      { label: "Patients étudiés", value: "299" },
      { label: "Mortalité observée", value: "32.11 %" },
    ],
    stack: ["Python", "Scikit-learn", "Random Forest", "SHAP"],
    repoUrl: "https://github.com/Barbaranimath/readmissions-hopital",
    cover: hospital3,
    images: [
      { src: hospital1, caption: "Analyse exploratoire des variables cliniques" },
      { src: hospital2, caption: "Matrices de confusion et courbes ROC" },
      { src: hospital3, caption: "Résumé final des performances" },
    ],
  },
  {
    slug: "simplificateurs-financiers",
    number: "07",
    category: "Web · IA conversationnelle",
    title: "Les Simplificateurs Financiers",
    tagline: "Site web pour conseillers financiers avec assistant IA",
    headline:
      "Rendre la finance et l'assurance accessibles à tous, avec un assistant virtuel disponible 24/7.",
    context:
      "Site internet conçu pour une équipe de conseillers financiers basés au Québec. L'objectif : rendre le monde des finances et des assurances simple et accessible. Le site présente clairement les services essentiels — assurance vie, épargne études, préparation de la retraite — tout en offrant des outils pratiques comme des calculateurs et un système de prise de rendez-vous en ligne.",
    approach:
      "Architecture mobile-first pour une navigation fluide sur smartphone. Intégration d'un assistant virtuel IA répondant instantanément aux questions des visiteurs, les guidant dans leurs recherches et offrant une aide personnalisée. Mise en place de calculateurs financiers, d'un module de prise de rendez-vous et d'un blogue de vulgarisation.",
    results:
      "Une plateforme professionnelle en ligne qui sert de vitrine et d'outil d'acquisition pour le cabinet. L'assistant IA est accessible en permanence et permet de qualifier les prospects avant tout contact humain.",
    impact:
      "Réduction de la friction pour les visiteurs cherchant des informations financières, accessibilité 24/7 grâce à l'IA, et une expérience pensée d'abord pour le mobile — là où se trouve aujourd'hui l'audience.",
    metrics: [
      { label: "Disponibilité IA", value: "24/7" },
      { label: "Mobile-first", value: "100 %" },
      { label: "Services couverts", value: "10+" },
    ],
    stack: ["Web", "Assistant IA", "Mobile-first", "UX/UI"],
    cover: simplificateursCover,
    liveUrl: "https://simplificateurs-financiers.ca/",
    images: [
      { src: simplificateursCover, caption: "Page d'accueil — Les Simplificateurs Financiers" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
