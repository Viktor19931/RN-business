import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/Auth/Login';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPassword';
import RegisterScreen from './src/screens/Auth/Register';
import QrScreen from './src/screens/QR-Scanner/QrScanner';
import Tab1 from './src/screens/Tab1/Tab1';
import Tab2 from './src/screens/Tab2/Tab2';
import Tab3 from './src/screens/Tab3/Tab3';

Navigation.registerComponent( "App.LoginScreen", () => LoginScreen );
Navigation.registerComponent( "App.RegisterScreen", () => RegisterScreen );
Navigation.registerComponent( "App.ForgotPasswordScreen", () => ForgotPasswordScreen );
Navigation.registerComponent( "App.RegisterScreen", () => RegisterScreen );
Navigation.registerComponent( "App.Tab1", () => QrScreen);
Navigation.registerComponent( "App.Tab2", () => Tab2 );
Navigation.registerComponent( "App.Tab3", () => Tab3 );

Navigation.startSingleScreenApp({
    screen: {
        screen: "App.LoginScreen",
        title: "Login"
    }
});
