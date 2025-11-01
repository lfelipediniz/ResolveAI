/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Alert, Platform } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useEffect } from 'react';
import FloatingBubble from './FloatingBubbleNative';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // Iniciar o botão flutuante nativo quando o app abrir
    if (Platform.OS === 'android') {
      initFloatingBubble();
    }
  }, []);

  const initFloatingBubble = async () => {
    try {
      const hasPermission = await FloatingBubble.checkPermission();
      
      if (!hasPermission) {
        Alert.alert(
          'Permissão Necessária',
          'Para o botão flutuante aparecer em qualquer tela, precisamos da permissão de sobrepor outros aplicativos.',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Permitir',
              onPress: async () => {
                await FloatingBubble.requestPermission();
                // Usuário precisa voltar ao app e tentar novamente
                Alert.alert(
                  'Atenção',
                  'Após conceder a permissão, volte ao app e reabra-o para ativar o botão flutuante.',
                );
              },
            },
          ],
        );
      } else {
        await FloatingBubble.startBubble();
      }
    } catch (error) {
      console.error('Erro ao iniciar floating bubble:', error);
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
