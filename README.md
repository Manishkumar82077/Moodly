# Moodly

Moodly is a mood-tracking web application built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Firebase](https://firebase.google.com/). Users can log their mood daily and view trends in a calendar format.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [Firebase](https://firebase.google.com/) for authentication and database
- [Next.js](https://nextjs.org/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/moodly.git
   cd moodly
   ``` 
2. **Install dependencies::**

   ```bash
   npm install
   ```

3. **Set up Firebase:**

    - Go to the Firebase console.
    - Create a new project, and set up Authentication and Firestore.
    - Add your Firebase configuration to a .env.local file in the root directory:

    ```bash
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

### Running the Development Server :

- To start the development server, run:

    ```bash
    npm run dev
    ```

### Developed by Manish Kumar 
