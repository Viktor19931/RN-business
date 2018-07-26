import { Navigation } from 'react-native-navigation';
import profile from "../../assets/icons8-user-30.png";
import assignment from "../../assets/icons8-course-assign-30.png";
import ranking from "../../assets/icons8-leaderboard-30.png";

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "App.DashboardScreen",
                label: "Profile",
                title: "UR Business - Dashboard",
                icon: profile,
            },
            {
                screen: "App.AssignmentsScreen",
                label: "Assignments",
                title: "UR Business - Assignments",
                icon: assignment,
            },
            {
                screen: "App.RankingScreen",
                label: "Ranking",
                title: "UR Business - Rankings",
                icon: ranking
            },

        ],
        appStyle: {
            tabBarSelectedButtonColor: "orange"
        },
        animationType: 'slide-down'
    });
};

export default startTabs;
