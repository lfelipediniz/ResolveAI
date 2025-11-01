# Floating Bubble - Botão Flutuante Global

Este app possui um **botão flutuante** que aparece sobre **todos os aplicativos**, mesmo quando você sai do app VoxAccess.

## Como funciona

### Android

1. **Primeira execução**: O app pedirá permissão para "sobrepor outros aplicativos"
2. **Conceda a permissão**: Vá em Configurações → Aplicativos → VoxAccess → Exibir sobre outros apps → Permitir
3. **Reabra o app**: O botão flutuante aparecerá
4. **Use em qualquer lugar**: O botão flutuante ficará visível mesmo fora do app

### Funcionalidades

- ✅ **Botão sempre visível**: Aparece sobre qualquer app
- ✅ **Arrastável**: Você pode mover o botão pela tela
- ✅ **Clicável**: Toque no botão para abrir o app VoxAccess
- ✅ **Design moderno**: Botão circular azul com ícone de chat

## Tecnologias

- React Native
- Serviço Android nativo (FloatingBubbleService)
- WindowManager para overlay system
- SYSTEM_ALERT_WINDOW permission

## Permissões necessárias

```xml
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
```

## Como desativar

Se quiser desativar o botão flutuante, você pode:
1. Ir em Configurações do Android → Aplicativos → VoxAccess → Forçar parada
2. Ou revogar a permissão "Exibir sobre outros apps"
