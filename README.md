# 🌍 Vernacular Empathetic Voice Assistant for ASHA Workers

> **A human-centric, voice-powered assistant** to simplify patient data entry, follow-ups, access to government health schemes, and micro-insurance enrollment for ASHA workers in rural and semi-urban India.

---

## 🚀 Project Overview

This repository contains the prototype and design notes for **Asha-workers** — an offline-first, vernacular voice assistant built for ASHA workers to improve last-mile healthcare delivery. The assistant uses speech-to-text and text-to-speech in local languages, voice-guided patient data entry, automated follow-up reminders, and a mock micro-insurance enrollment flow. The product is designed with empathy, low-literacy usability, and offline resilience.

---

## 🔑 Core Features (MVP)

* **Vernacular Voice Assistant**

  * Speech-to-Text & Text-to-Speech in regional languages.
  * Empathetic, human-like conversational responses.

* **Patient Data Entry**

  * Voice-guided logging of patient details (Name, Age, Vitals, Symptoms, Follow-up).
  * Live transcription preview and edit option.

* **Follow-Up Reminders**

  * Automated SMS / WhatsApp reminders for check-ups and medication.

* **Health Scheme Information**

  * Voice-based Q\&A for government schemes (Ayushman Bharat, maternal care, immunizations, etc.).

* **Micro-Insurance Enrollment (Mock Flow)**

  * Step-by-step voice-guided enrollment and simulated claim flow.

* **Offline-First Capability**

  * Local caching, on-device lightweight models, and sync-on-connect.

---

## 🎯 Why This Project Matters

* Reduces paperwork and time burden for ASHA workers.
* Improves patient adherence via timely reminders.
* Makes government scheme information accessible in local languages.
* Promotes financial inclusion with micro-insurance awareness.
* Builds trust through an empathetic vernacular interface.

---

## 🧭 Tech Stack (Suggested)

**Mobile (Frontend)**

* React Native or Flutter for cross-platform app
* Local UI components with accessible layouts (large icons, minimal text)

**Backend & Data**

* Node.js + Express (REST APIs)
* MongoDB or PostgreSQL for patient records
* Firebase / Supabase for auth and realtime sync (optional)

**Voice & ML**

* OpenAI Whisper / Google Speech-to-Text (STT) for prototyping
* gTTS / Azure TTS / iSpeech for vernacular Text-to-Speech
* Hugging Face / Indic NLP models for language handling
* On-device lightweight models (TensorFlow Lite / ONNX) for offline

**Messaging**

* Twilio / Gupshup / WhatsApp Business API for SMS/WhatsApp reminders

**Security**

* AES-256 encryption at rest
* HTTPS / TLS in transit
* Role-based access control for ASHA and admin users

**Hardware (Pilot)**

* Low-cost Android smartphones (ASHA-issued or BYOD)
* Optional Raspberry Pi gateway for offline sync at community centers

---

## 🛠️ Installation & Quick Start (Developer MVP)

> **Note:** This is a prototype README. Replace the placeholders with actual repo paths, environment variables, and build scripts when implementing.

1. **Clone the repo**

```bash
git clone https://github.com/ujjwalsingh1704/Asha-workers.git
cd Asha-workers
```

2. **Frontend (React Native)**

```bash
cd mobile
# install dependencies
npm install
# start metro bundler
npx react-native start
# run on Android
npx react-native run-android
```

3. **Backend**

```bash
cd ../backend
npm install
# set env variables in .env (DB connection, API keys)
npm run dev
```

4. **Environment Variables (example .env)**

```
PORT=4000
DB_URI=mongodb://localhost:27017/asha
JWT_SECRET=your_jwt_secret
TWILIO_SID=xxxx
TWILIO_AUTH_TOKEN=xxxx
WHATSAPP_BUSINESS_API_KEY=xxxx
SPEECH_API_KEY=xxxx
TTS_API_KEY=xxxx
```

---

## 🧭 UX / UI Guidelines

* **Home Screen:** Card-based layout with quick-access tiles: Patient Entry, Follow-ups, Schemes, Insurance.
* **Primary Interaction:** Large mic button visible on all screens, language toggle, and animated waveform + live transcription.
* **Forms:** Voice-first fields with fallback touch inputs. Allow quick edits to transcribed text before saving.
* **Accessibility:** High-contrast, large touch targets, minimal text, and iconography familiar to the target community.
* **Tone & Branding:** Warm color palette, culturally familiar motifs, gentle microcopy (empathetic prompts and confirmations).

---

## 🧩 System Architecture (Overview)

```
[Mobile App (RN/Flutter)] <---> [Backend API (Node.js/Express)] <---> [Database (Mongo/Postgres)]
       |                                  |
       |                                  --> [Govt. APIs / Scheme DB]
       |
       --> [Local On-Device ML (STT/TTS caching)]

Notifications: Backend -> Twilio / WhatsApp Business -> Patients
```

Include an offline sync mechanism: local DB (SQLite/Realm) on device → sync worker to server queue when connectivity is available.

---

## 🧪 Pilot Plan & Evaluation

1. **Pilot (1–2 districts)**

   * Recruit 10–20 ASHA workers for field testing.
   * Provide a short training workshop and support.

2. **Metrics to Track**

   * Time saved per patient record entry (baseline vs. post-deployment).
   * Follow-up adherence rate (reminders delivered vs. attended).
   * Scheme enrollment queries handled and successful enrollments.
   * ASHA satisfaction (qualitative feedback & NPS-style survey).

3. **Iteration**

   * Weekly feedback cycles during pilot, followed by releases addressing usability and language accuracy.

---

## ⚠️ Risks & Mitigations

* **Language & Dialect Variability**: Use local dataset fine-tuning and hybrid voice+touch entry.
* **Connectivity**: Offline-first architecture and sync queues.
* **Privacy**: Encryption, anonymization for telemetry, and clear consent flows.
* **Adoption**: Co-design workshops and incentives for early adopters.

---

## 🌱 Future Roadmap

* Short Term (0–6 months): Stable MVP, 1–2 district pilot, ASHA training.
* Mid Term (6–18 months): Add micro-insurance recommendation engine, expand languages, integrate with state health portals.
* Long Term (18+ months): Nationwide scaling, integration with wearables & IoT, admin analytics for public health planning.

---

## 📄 Licensing & Contribution

* **License:** MIT (or choose appropriate license)
* **Contributing:** Please open issues for feature requests, or PRs for bug fixes and improvements.

---

## 👥 Contributors

* Ujjwal Singh — Project Lead & Designer
* (Add other contributors and roles here)

---

## 📞 Contact

For collaboration, pilot inquiries, or research partnerships, open an issue or contact: `ujjwalsingh1704@gmail.com` (replace with preferred contact method).

---

## 📎 References & Inspiration

* Ayushman Bharat & National Health Mission documentation
* Indic NLP resources & Hugging Face models
* OpenAI Whisper (for prototyping STT)

---

*Made with ❤️ for ASHA workers and rural communities.*
