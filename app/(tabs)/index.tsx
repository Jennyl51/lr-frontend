import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet } from 'react-native';

const logo = require('assets/images/lr.svg');

const Index: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  
  // Animation values
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;
  const fadeOutAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Scale in and fade in animation
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Floating animation (loop)
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Fade out and navigate after 2 seconds
    const timer = setTimeout(() => {
      Animated.timing(fadeOutAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false);
        router.replace('/(tabs)');
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <Animated.View style={[styles.splashScreen, { opacity: fadeOutAnim }]}>
        <LinearGradient
          colors={['#2d1b69', '#0a1628']}
          style={styles.gradient}
        >
          <Animated.View
            style={[
              styles.logoContainer,
              {
                transform: [
                  { scale: scaleAnim },
                  { translateY: floatAnim }
                ],
                opacity: opacityAnim,
              },
            ]}
          >
            <Image 
              source={logo}
              style={styles.splashLogo}
              resizeMode="contain"
            />
          </Animated.View>
        </LinearGradient>
      </Animated.View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    width: 120,
    height: 120,
    tintColor: '#00ffff',
  },
});

export default Index;