# HairApp

Mobile app for client management and appointment scheduling at barbershops and beauty salons. The project connects two user profiles — **client** and **hairdresser** — through a REST API, enabling registration, authentication, building a list of favorite professionals, and a complete appointment flow with confirmation.

> Demo: [presentation video on LinkedIn](https://www.linkedin.com/posts/roger-albuquerque_en-in-the-last-few-days-i-studied-a-lot-activity-7092567040489660416-wVz1/?utm_source=share&utm_medium=member_desktop)

---

## Overview

**HairApp** is a monorepo with two independent applications:

| Module     | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `backend/` | REST API in Node.js + Express, persistence in MongoDB via Mongoose |
| `mobile/`  | Mobile app in React Native with Expo, consuming the API via Axios  |

The main goal is to digitize the relationship between client and hairdresser:

- The client finds professionals, adds them to their personal list, and requests appointments;

- The hairdresser views pending requests, confirms or cancels appointments, and manages salon information (prices, days, and operating hours).

The project was developed as a functional MVP, focused on the core scheduling flow. Some screens (such as credit card registration) exist as visual prototypes and do not yet have backend integration.

---

## Features

### Authentication and account

- **Client** registration (name, email, password)
- **Hairdresser** registration (name, address, email, password, prices, operating days, and opening/closing hours)
- Unified login by username or email, returning a JWT
- Password recovery via email (temporary 1-hour token)
- Profile editing for both profiles

### Client

- Search for a hairdresser by exact name and add them to the personal list
- View cards with professional information (prices, working days, hours)
- Schedule an appointment on a weekday within the salon's operating hours
- Edit or cancel their own appointment
- Rule: **only one active appointment per client**

### Hairdresser

- View list of scheduled clients, filtered by status (`PENDING`, `CONFIRMED`)
- Confirm or cancel appointment requests
- Edit salon information (address, prices, days, and hours)

### Appointment status

| Status      | Meaning                                             |
| ----------- | --------------------------------------------------- |
| `PENDING`   | Client requested; awaiting hairdresser confirmation |
| `CONFIRMED` | Hairdresser confirmed the appointment               |
| `CANCELED`  | Appointment canceled by client or hairdresser       |

---

## Tech stack

### Backend

| Technology          | Usage                               |
| ------------------- | ----------------------------------- |
| Node.js + Express 4 | HTTP server and routing             |
| TypeScript          | Static typing                       |
| Mongoose 6          | ODM for MongoDB                     |
| bcryptjs            | Password hashing                    |
| jsonwebtoken        | Stateless authentication (JWT)      |
| nodemailer          | Email sending for password recovery |
| dotenv              | Environment variables               |
| nodemon + ts-node   | Development with hot reload         |

### Mobile

| Technology                         | Usage                         |
| ---------------------------------- | ----------------------------- |
| Expo 49 + React Native 0.70        | Mobile framework and runtime  |
| React 18                           | Components and hooks          |
| TypeScript                         | Static typing                 |
| React Navigation 6                 | Stack navigation              |
| Styled Components                  | Declarative styling           |
| Axios                              | HTTP client                   |
| Context API                        | Global application state      |
| expo-font                          | Custom fonts (Imbue, Poppins) |
| react-native-modal-datetime-picker | Time selection                |

---

## How the system works

### Client flow

```
Login/Registration → Home (hairdresser list) → Search and add professional
    → Select hairdresser → Choose day and time → PENDING appointment
    → Await confirmation → CONFIRMED status (green card)
```

### Hairdresser flow

```
Login/Registration (with salon data) → Scheduled client list
    → Filter pending/confirmed → Confirm ✓ or Cancel ✗
    → Status update via API
```

### Authentication

1. The mobile app sends credentials to `POST /login`
2. The API validates the password with bcrypt and returns a JWT
3. The token is stored in the Axios instance header `Authorization: Bearer <token>`
4. Protected routes go through the `verifyTokenJWT` middleware, which extracts `userId` from the payload
5. Mobile routing decides which stack to display based on the user type returned by `GET /me`

### Data model (MongoDB)

Three main collections in the `cabeleireiroApp` database:

- **Client** — personal data, hashed password, and array of references to favorite hairdressers
- **Hairdresser** — salon profile, prices (`hairPrice`, `beardPrice`), weekdays (`SEG`–`DOM`), and operating hours
- **SchedClient** — client ↔ hairdresser link, day, time, and appointment status

---

## Screenshots

Real images of the app in operation, organized by main flows.

### Authentication

Login screen with username/email and password fields, option to remember credentials, password recovery link, and access to registration.

<p align="center">
  <img width="220" alt="Login screen" src="./readmeImages/Login.png">
  <img width="220" alt="Account type selection modal during registration" src="./readmeImages/LoginPERGUNTA.png">
</p>

When tapping "cadastre-se", the user chooses between creating an account as **client** or **hairdresser**.

### Client flow

Client home with hairdresser search, cards with prices and hours, and visual indication of pending appointments.

<p align="center">
  <img width="220" alt="Client home with hairdresser list" src="./readmeImages/Homesemhorariomarcado.png">
  <img width="220" alt="Scheduling screen with day and time selection" src="./readmeImages/CardCabeleireirosemhorario.png">
</p>

On the scheduling screen, the client views the professional's details, selects the day of the week, and sets the desired time.

### Hairdresser flow

Hairdresser dashboard with tabs to filter **pending** and **confirmed** clients, cards with confirm or cancel actions, and cancellation confirmation modal.

<p align="center">
  <img width="220" alt="Client list with pending appointments" src="./readmeImages/Listadeclientespendentes.png">
  <img width="220" alt="Client list with confirmed appointments" src="./readmeImages/Listadeclientesconfirmados.png">
</p>

<p align="center">
  <img width="220" alt="Appointment cancellation confirmation modal" src="./readmeImages/ListadeclientesModal.png">
</p>

Pending cards display confirm (✓) and cancel (✗) buttons. After confirmation, the card changes to green state. The modal allows canceling an appointment with the option to send a message to the client.

### Prototype — payment

Credit card registration screen present in the hairdresser registration flow. This is a **visual mock** — not yet integrated with a payment gateway.

<p align="center">
  <img width="220" alt="Credit card registration screen (prototype)" src="./readmeImages/Cadastrarcartao.png">
</p>

---

## Repository structure

```
HairApp/
├── backend/
│   └── src/
│       ├── index.ts                 # Express bootstrap + MongoDB connection
│       ├── router.ts                # HTTP route mapping
│       ├── utils/
│       │   └── verifyTokenJWT.ts    # Authentication middleware
│       └── app/
│           ├── models/              # Mongoose schemas
│           │   ├── Client.ts
│           │   ├── Hairdresser.ts
│           │   └── SchedClient.ts
│           └── useCases/            # Business logic (1 file = 1 operation)
│               ├── auth/
│               ├── clients/
│               ├── hairdressers/
│               ├── SchedClients/
│               └── inutils/         # Utilities not exposed in the router
│
└── mobile/
    ├── App.tsx                      # Entry point (fonts + Context + routes)
    └── src/
        ├── context/                 # Global state (Context API)
        ├── routes/                  # Conditional navigation by profile
        ├── Screens/                 # Screens organized by feature
        │   ├── Auth/
        │   ├── Home/
        │   ├── SchedClient/
        │   ├── ClientConfig/
        │   ├── ClientListForHairdresser/
        │   └── HairdConfig/
        ├── components/              # Reusable components
        │   ├── UtilsComponents/
        │   ├── ClientComponents/
        │   └── HairdComponents/
        ├── types/                   # TypeScript types (active and empty)
        └── utils/                   # Axios, navigation types, helpers
```

---

## Architecture and patterns

### Backend — Use Cases + Router

The API follows a simplified variation of **Clean Architecture**:

- **Models** define the contract with the database (Mongoose schemas)
- **Use Cases** encapsulate the business logic of each operation
- **Router** only dispatches HTTP → use case
- **JWT Middleware** centralizes authentication verification

There are no separate controller, service, or repository layers — simplicity favors maintenance in an MVP, but concentrates responsibilities in the use cases.

### Mobile — Feature-based + Context

- Screens grouped by domain (`Screens/Auth`, `Screens/Home`, etc.)
- Shared components in `UtilsComponents`, `ClientComponents`, and `HairdComponents`
- **Context API** manages session, user data, appointment list, and global alert modal
- **Conditional routing**: after login, the app renders `ClientRoutes` or `HairdRoutes` based on the detected profile
- HTTP calls made directly in screens via centralized Axios instance (`utils/api.ts`)

---

## Prerequisites

- [Node.js](https://nodejs.org/) 16+ (LTS recommended)
- [MongoDB](https://www.mongodb.com/) running locally on default port `27017`
- [Expo CLI](https://docs.expo.dev/get-started/installation/) or `npx expo`
- Android/iOS emulator **or** [Expo Go](https://expo.dev/go) app on a physical device
- Gmail account with app password (only if testing password recovery)

---

## Installation and running

### 1. Clone the repository

```bash
git clone https://github.com/<seu-usuario>/HairApp.git
cd HairApp
```

### 2. Backend

```bash
cd backend
npm install   # or: yarn install
```

Create the `.env` file in the `backend/` folder (see [Environment variables](#environment-variables)).

Make sure MongoDB is running. The application connects automatically to:

```
mongodb://localhost:27017/cabeleireiroApp
```

Start the development server:

```bash
npm run dev
```

The server runs on port **3001**.

### 3. Mobile

```bash
cd mobile
npm install   # or: yarn install
```

Before starting, configure the API URL in `mobile/src/utils/api.ts` pointing to the IP of the machine where the backend is running (required for testing on a physical device or emulator):

```typescript
export const api = axios.create({
  baseURL: "http://<SEU_IP_LOCAL>:3001"
});
```

> **Note:** The project has environment variable support via `babel-plugin-inline-dotenv` (`URI_API` in `.env`), however the Axios instance still uses a hardcoded URL. It is recommended to migrate to `process.env.URI_API`.

Start Expo:

```bash
npm start
# or
npx expo start
```

Press `a` (Android), `i` (iOS), or scan the QR Code with Expo Go.

---

## Environment variables

### Backend (`backend/.env`)

| Variable             | Required              | Description                                 |
| -------------------- | --------------------- | ------------------------------------------- |
| `JWT_ACCESS`         | Yes                   | Secret for JWT token signing and validation |
| `SENDMAIL_AUTH_PASS` | For password recovery | Gmail app password used by Nodemailer       |

Example:

```env
JWT_ACCESS=sua_chave_secreta_aqui
SENDMAIL_AUTH_PASS=senha_de_app_gmail
```

### Mobile (`mobile/.env`)

| Variable  | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| `URI_API` | API base URL (configured in Babel, but not yet applied in `api.ts`) |

---

## REST API

### Public endpoints

| Method | Route                 | Description                             |
| ------ | --------------------- | --------------------------------------- |
| `POST` | `/login`              | Authentication (returns JWT)            |
| `POST` | `/client/create`      | Client registration                     |
| `POST` | `/hairdresser/create` | Hairdresser registration                |
| `POST` | `/verifyEmail`        | Sends recovery token via email          |
| `PUT`  | `/passwordRecovery`   | Resets password with valid token        |
| `GET`  | `/client`             | Lists all clients *(no authentication)* |

### Protected endpoints (requires `Authorization: Bearer <token>`)

| Method   | Route                                   | Description                                    |
| -------- | --------------------------------------- | ---------------------------------------------- |
| `GET`    | `/me`                                   | Logged-in user data                            |
| `PUT`    | `/client/update`                        | Updates client profile                         |
| `PUT`    | `/client/addHairdresser`                | Adds hairdresser to client list                |
| `PUT`    | `/client/removeHairdresser`             | Removes hairdresser from list                  |
| `PUT`    | `/hairdresser/updateInfo`               | Updates hairdresser profile                    |
| `GET`    | `/scheduling/me`                        | Logged-in user's appointments                  |
| `POST`   | `/scheduling`                           | Creates new appointment                        |
| `PUT`    | `/scheduling/update/:clientId/:hairdId` | Updates day, time, or status                   |
| `GET`    | `/scheduling/myClients`                 | Hairdresser's appointments (populated clients) |
| `DELETE` | `/scheduling/:schedClientId/delete`     | Hairdresser cancels appointment                |
| `DELETE` | `/scheduling/:schedHairdId/delete`      | Client cancels their appointment               |

---

## Usage examples

### Login

```http
POST /login
Content-Type: application/json

{
  "user": "joao@email.com",
  "password": "senha12345"
}
```

**Response (200):**

```json
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Create appointment

```http
POST /scheduling
Authorization: Bearer <token>
Content-Type: application/json

{
  "hairdresserId": "64a1b2c3d4e5f6789012345",
  "clientId": "64a1b2c3d4e5f6789012346",
  "day": "SEG",
  "clientHour": {
    "hour": "14",
    "minute": "30"
  }
}
```

**Response (201):** appointment object with `PENDING` status.

### Confirm appointment (hairdresser)

```http
PUT /scheduling/update/<clientId>/<hairdId>
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "CONFIRMED"
}
```

### Register hairdresser

```http
POST /hairdresser/create
Content-Type: application/json

{
  "hairdName": "Barbearia Central",
  "address": "Rua das Flores, 100",
  "email": "barbearia@email.com",
  "hairdPassword": "senha12345",
  "prices": { "hairPrice": 35, "beardPrice": 20 },
  "workDaysWeek": {
    "SEG": true, "TER": true, "QUA": true,
    "QUI": true, "SEX": true, "SAB": false, "DOM": false
  },
  "workingTime": {
    "open": { "hour": "9", "minute": "0" },
    "close": { "hour": "18", "minute": "0" }
  }
}
```

---

## License

This project is licensed under the [MIT License](LICENSE) — Copyright (c) 2023 Roger Albuquerque.
