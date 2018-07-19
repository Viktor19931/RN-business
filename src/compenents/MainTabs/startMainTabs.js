import { Navigation } from 'react-native-navigation';
import ico from "../../assets/icons8-contract-30.png";

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "App.Tab1",
                label: "Tab1",
                title: "Tab1",
                icon: ico,
            },
            {
                screen: "App.Tab2",
                label: "Tab2",
                title: "Tab2",
                icon: ico,
            },
            {
                screen: "App.Tab3",
                label: "Tab3",
                title: "Tab3",
                icon: ico
            }
        ],
        // animationType: 'slide-down'
    });
};

export default startTabs;
