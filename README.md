# React Native Authentication App with Theme Support

A modern mobile application built with React Native and Expo that demonstrates user authentication functionality with dark/light theme support. The app features a clean, intuitive interface for user registration and login processes.

## Features

- User authentication (Login/Register)
- AsyncStorage for data persistence
- Tab-based navigation
- Form validation
- Secure password handling
- Responsive design for iOS and Android

## Technologies Used

- React Native
- Expo Framework
- React Navigation
- AsyncStorage
- React Native Vector Icons
- Context API for theme management
- Expo Router for navigation

## Screenshots
[Add your app screenshots here]

## Installation

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install dependencies
```bash
cd my-app
npm install
```

3. Start the development server
```bash
npx expo start
```

## Project Structure

```
my-app/
├── app/
│   ├── (authenticated)
│   │   └── (tabs)
│   ├── loginScreens
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── ThemeContext.jsx
│   └── index.tsx
├── assets/
│   └── images/
└── android/
```

## Key Features Implementation

- **Authentication**: Implements user registration and login with form validation
- **Theme Switching**: Dynamic dark/light theme switching with persistent storage
- **Tab Navigation**: Home, News, and Settings tabs post-authentication
- **Secure Storage**: Uses AsyncStorage for secure data management
- **Form Validation**: Password matching and input validation
- **Responsive Design**: Adapts to different screen sizes and platforms

## Future Enhancements

- Add password recovery feature
- Enhance form validation
- Add user profile management
- Implement real backend integration

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

Aysel Chobanova

## Acknowledgments

- Expo Team for the excellent framework
- React Native community
- Vector Icons library contributors
