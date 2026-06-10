# Invoice API

A RESTful API built with Node.js, Express, TypeScript, MongoDB, and Mongoose for managing invoices.

## Features

* Create Invoice
* Get All Invoices
* Get Invoice By ID
* Update Invoice
* Delete Invoice
* Filter Invoices By Payment Method
* Filter Invoices By Doctor
* Request Validation using Zod
* MongoDB Integration
* TypeScript Support

## Technologies Used

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* Zod
* dotenv

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Run the development server:

```bash
npm run dev
```

## API Endpoints

### Invoice Routes

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| POST   | /api/invoices     | Create Invoice    |
| GET    | /api/invoices     | Get All Invoices  |
| GET    | /api/invoices/id/:id | Get Invoice By ID |
| PUT    | /api/invoices/id/:id | Update Invoice    |
| DELETE | /api/invoices/id/:id | Delete Invoice    |

### Filters

| Method | Endpoint                         | Description         |
| ------ | -------------------------------- | ------------------- |

| GET | /api/invoices?paymentType=cash | Get Cash Invoices |
| GET | /api/invoices?paymentType=credit | Get Credit Invoices |
| GET | /api/invoices?doctorName=Ahmed | Search Invoices By Doctor Name |

## Project Structure

```text
src
├── config
├── controllers
├── models
├── routes
├── validators
├── middleware
└── index.ts
```

## Author

Abdelrhman Wageh
