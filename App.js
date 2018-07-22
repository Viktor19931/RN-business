import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/Auth/Login';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPassword';
import RegisterScreen from './src/screens/Auth/Register';
import DashboardScreen from './src/screens/Dashboard/Dashboard';
import AssignmentsScreen from './src/screens/Assignments/Assignments';
import SwotAnalysisScreen from './src/screens/SwotAnalysis/SwotAnalysis';
import SwotAnalysisAcceptedScreen from './src/screens/SwotAnalysis/SwotAnalysisAccepted';
import SwotAnalysisFinishScreen from './src/screens/SwotAnalysis/SwotAnalysisFinish';
import FillCodeScreen from './src/screens/SwotAnalysis/SwotAnalysisFillCode';
import RankingScreen from './src/screens/Ranking/Ranking';

Navigation.registerComponent( "App.LoginScreen", () => LoginScreen );
Navigation.registerComponent( "App.RegisterScreen", () => RegisterScreen );
Navigation.registerComponent( "App.ForgotPasswordScreen", () => ForgotPasswordScreen );
Navigation.registerComponent( "App.RegisterScreen", () => RegisterScreen );
Navigation.registerComponent( "App.DashboardScreen", () => DashboardScreen);
Navigation.registerComponent( "App.AssignmentsScreen", () => AssignmentsScreen);
Navigation.registerComponent( "App.SwotAnalysisScreen", () => SwotAnalysisScreen);
Navigation.registerComponent( "App.SwotAnalysisAcceptedScreen", () => SwotAnalysisAcceptedScreen);
Navigation.registerComponent( "App.SwotAnalysisFinishScreen", () => SwotAnalysisFinishScreen);
Navigation.registerComponent( "App.FillCodeScreen", () => FillCodeScreen);
Navigation.registerComponent( "App.RankingScreen", () => RankingScreen);
Navigation.registerComponent( "App.Tab2", () => Tab2 );
Navigation.registerComponent( "App.Tab3", () => Tab3 );

Navigation.startSingleScreenApp({
    screen: {
        screen: "App.LoginScreen",
        title: "Login"
    }
});
