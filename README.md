# Project Setup Guide

## Getting Started with React

This guide will walk you through setting up your React project step-by-step.

### Prerequisites

- Ensure you have Node.js installed on your local machine. You can download it from [Node.js](https://nodejs.org/).

### Step 1: Install Dependencies

Open your terminal and navigate to the project directory. Install the necessary Node packages by running:

```bash
npm install
```

### Step 2: Create a .env File for API Configuration

Open the project with your favorite IDE and create a .env file in the root directory. This file should contain the following content:

VITE_API_URL="http://127.0.0.1:8000/api/"

	•	This URL is obtained by running the php artisan serve command in the Laravel backend, plus adding the final /api/

### Step 3: Run the Development Server

To start the development server, run the following command in your terminal:

```bash
npm run dev
```
### Important
	•	Make sure your Laravel backend is running to ensure the API requests from your React application work correctly.
	•	If you encounter any issues, check the console for error messages and ensure all configurations are set up correctly.
