import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Manually define setImmediate if missing
if (typeof global.setImmediate === 'undefined') {
  global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
}

AppRegistry.registerComponent(appName, () => App);
