import { NativeModules } from 'react-native';

const { FloatingBubble } = NativeModules;

interface FloatingBubbleInterface {
  checkPermission(): Promise<boolean>;
  requestPermission(): Promise<boolean>;
  startBubble(): Promise<boolean>;
  stopBubble(): Promise<boolean>;
}

export default FloatingBubble as FloatingBubbleInterface;
