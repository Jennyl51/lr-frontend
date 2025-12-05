import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
const logo = require('../assets/images/lr.svg');


const Login: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      // Navigate to your main app screen (change this path to your actual route)
      router.replace('/(tabs)');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div style={styles.splashScreen}>
        <style>
          {`
            @keyframes scaleIn {
              0% {
                transform: scale(0.5);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            @keyframes glow {
              0% {
                filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.5));
              }
              100% {
                filter: drop-shadow(0 0 40px rgba(0, 255, 255, 0.8));
              }
            }
            @keyframes fadeOut {
              0% {
                opacity: 1;
              }
              100% {
                opacity: 0;
                visibility: hidden;
              }
            }
            .logo-container {
              animation: scaleIn 0.8s ease-out, glow 1.5s ease-in-out infinite alternate;
            }
            .splash-logo {
              animation: float 2s ease-in-out infinite;
            }
            .splash-screen {
              animation: fadeOut 0.5s ease-in-out 2s forwards;
            }
          `}
        </style>
        <div className="logo-container">
          <img 
            src={logo}
            alt="App Logo" 
            className="splash-logo"
            style={styles.splashLogo}
          />
        </div>
      </div>
    );
  }

  // After splash screen, show the main app
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.welcomeText}>Welcome to the App</h1>
      {/* Your app content goes here */}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  splashScreen: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(180deg, #2d1b69 0%, #0a1628 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  splashLogo: {
    width: '120px',
    height: 'auto',
    filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))',
  },
  appContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #2d1b69 0%, #0a1628 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  welcomeText: {
    color: '#00ffff',
    fontSize: '32px',
    fontWeight: 600,
    textAlign: 'center',
  },
};

export default Login;