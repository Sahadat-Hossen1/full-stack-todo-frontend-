# Full Stack Todo Frontend

A modern, full-featured Todo application built with React and Vite. This project includes comprehensive user authentication (Google Sign-in and email/password), admin dashboard, todo management with sorting capabilities, and automatic user metadata tracking. Features a responsive design with Tailwind CSS and robust state management using React Context API.

##🌐 Live Demo

🔗 https://full-stack-todo-frontend-gamma.vercel.app/

📸 Screenshot
![alt text](<src/assets/Screenshot (152).png>)![alt text](<src/assets/Screenshot (153).png>)![alt text](<src/assets/Screenshot (154).png>)![alt text](<src/assets/Screenshot (155).png>)![alt text](<src/assets/Screenshot (156).png>)![alt text](<src/assets/Screenshot (157).png>)![alt text](<src/assets/Screenshot (158).png>)![alt text](<src/assets/Screenshot (159).png>)![alt text](<src/assets/Screenshot (160).png>)
## 🌟 Features

- **User Authentication**: Google Sign-in and email/password authentication with Firebase
- **Todo Management**: Create, read, update, and delete todos
- **Todo Status**: Mark todos as complete/incomplete with toggle functionality
- **Todo Sorting**: Sort todos by various criteria for better organization
- **User Profiles**: Personalized user profile pages with status updates
- **Admin Dashboard**: Administrative panel for user management and oversight
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Real-time Updates**: Context API for state management
- **Protected Routes**: Private routes for authenticated users and admins
- **User Metadata Tracking**: Automatic tracking of login times, sign-in times, and user activity
- **Component Organization**: Well-structured components with separate button components

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.1
- **Styling**: Tailwind CSS 4.2.2
- **Routing**: React Router DOM 7.14.0
- **Authentication**: Firebase 12.12.0
- **State Management**: React Context API
- **Icons**: Lucide React 1.8.0
- **Code Quality**: ESLint 9.39.4
- **Development Server**: JSON Server (db.json)
- **Process Management**: Concurrently 9.2.1
- **Environment**: Node.js v16+ with npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- Git

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sahadat-Hossen1/full-stack-todo-frontend-.git
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a `.env` file in the root directory
   - Add your Firebase configuration variables to the `.env` file
   - Update `src/firebase/firebaseConfig/FirebaseConfig.js` to use environment variables
   - Get your credentials from [Firebase Console](https://console.firebase.google.com)

### Running the Project

**Development Mode** (Runs both JSON Server and Vite Dev Server):
```bash
npm start
```

**Development Server Only** (Vite):
```bash
npm run dev
```

**JSON Server Only** (For backend data):
```bash
npm run json-server
```

**Build for Production**:
```bash
npm run build
```

**Preview Production Build**:
```bash
npm run preview
```

**Run Build & Preview Together**:
```bash
npm run both
```

**Lint Code**:
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── assets/                 # Static assets
├── components/            
│   ├── admin/            # Admin-specific components
│   │   ├── SideBar.jsx
│   │   └── SingleUser.jsx
│   ├── GoogleSignin/      # Google authentication
│   │   └── GoogleSignIn.jsx
│   ├── share/            # Shared components
│   │   ├── footer/
│   │   │   └── Footer.jsx
│   │   └── header/
│   │       └── Navbar.jsx
│   └── todo/             # Todo management components
│       ├── AddTodo.jsx
│       ├── AllTodo.jsx
│       └── todoButton/
│           ├── Delete.jsx
│           ├── Edit.jsx
│           └── TogoleIsComplete.jsx
├── context/              # Context API setup
│   ├── admin/           # Admin context
│   ├── auth/            # Authentication context
│   └── todo/            # Todo context
├── firebase/            # Firebase configuration
│   └── firebaseConfig/
│       └── FirebaseConfig.js
├── layout/              # Layout components
│   ├── AdminLayout.jsx
│   └── Main.jsx
├── pages/               # Page components
│   ├── Admin_All_User.jsx
│   ├── Admin_dasboard.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Registration.jsx
│   └── UserProfile.jsx
├── routes/              # Route configuration
│   ├── privateRout/
│   │   ├── AdminPrivateRout.jsx
│   │   └── PrivateRout.jsx
│   └── user/
│       └── router.jsx
├── services/            # API services
│   └── PostUser.js
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🔐 Authentication

The project uses Firebase for authentication:
- **Google Sign-in** for easy user registration and login
- **Protected Routes** for authenticated and admin-only pages
- **Context-based State Management** for user session management

### Setting up Firebase:
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Google Sign-in authentication method
3. Copy your Firebase configuration
4. Create a `.env` file in the root directory with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Update `src/firebase/firebaseConfig/FirebaseConfig.js` to use these environment variables

## 📝 Context API Usage

The application uses custom hooks for state management:

- **useAuth()** - Authentication context for user login/logout
- **useTodo()** - Todo management context
- **useAdmin()** - Admin-specific functionality

## 🎨 Styling

- **Tailwind CSS** is used for responsive and utility-first styling
- **Lucide React** icons for UI elements
- **Custom CSS** in `App.css` and `index.css` for additional styling

## 🔄 JSON Server

For development, JSON Server is configured to run on **port 3000**:
- Database file: `db.json`
- Used for mock backend data during development
- Automatically starts with `npm start`

## 🆕 Recent Updates

### Version 3 Features
- **Enhanced User Metadata**: Automatic tracking and updating of user login times and sign-in timestamps
- **Todo Sorting**: Added sorting functionality for better todo organization
- **Component Refactoring**: Separated todo action buttons into individual components for better maintainability
- **User Profile Enhancements**: Improved user profile UI with status updates
- **Authentication Improvements**: Better handling of existing user metadata during email/password login
- **Environment Configuration**: Firebase configuration moved to `.env` file for better security

### Authentication Features
- **Dual Authentication**: Support for both Google Sign-in and email/password authentication
- **Session Tracking**: Automatic updates of last login and sign-in times for existing users
- **User Metadata Management**: Comprehensive tracking of user activity and session data

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Create a new branch (`git checkout -b feature/YourFeature`)
2. Commit your changes (`git commit -m 'Add some feature'`)
3. Push to the branch (`git push origin feature/YourFeature`)
4. Open a Pull Request

## 📄 License

This project is part of a full-stack todo application. Please refer to the main repository for licensing information.

## 📞 Support

For issues and questions, please create an issue in the [GitHub repository](https://github.com/Sahadat-Hossen1/full-stack-todo-frontend-).

## 🎯 Future Enhancements

- [x] User metadata tracking (login times, sign-in timestamps)
- [x] Todo sorting functionality
- [x] Component organization (separate button components)
- [x] Enhanced user profile UI
- [x] Environment-based Firebase configuration
- [ ] Add TypeScript support
- [ ] Implement unit tests
- [ ] Add dark mode support
- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Todo categories and tags
- [ ] Export/Import todos
- [ ] Advanced user analytics
- [ ] Todo sharing functionality

---

Made with ❤️ by Sahadat Hossen
