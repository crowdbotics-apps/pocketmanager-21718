import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile150322Navigator from '../features/UserProfile150322/navigator';
import Maps150283Navigator from '../features/Maps150283/navigator';
import Add-Item150282Navigator from '../features/Add-Item150282/navigator';
import Maps150278Navigator from '../features/Maps150278/navigator';
import UserProfile150274Navigator from '../features/UserProfile150274/navigator';
import UserProfile150221Navigator from '../features/UserProfile150221/navigator';
import Tutorial150220Navigator from '../features/Tutorial150220/navigator';
import NotificationList150192Navigator from '../features/NotificationList150192/navigator';
import Settings150191Navigator from '../features/Settings150191/navigator';
import Settings150183Navigator from '../features/Settings150183/navigator';
import UserProfile150181Navigator from '../features/UserProfile150181/navigator';
import UserProfile150145Navigator from '../features/UserProfile150145/navigator';
import Tutorial150144Navigator from '../features/Tutorial150144/navigator';
import NotificationList150116Navigator from '../features/NotificationList150116/navigator';
import Settings150115Navigator from '../features/Settings150115/navigator';
import Settings150107Navigator from '../features/Settings150107/navigator';
import UserProfile150105Navigator from '../features/UserProfile150105/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile150322: { screen: UserProfile150322Navigator },
Maps150283: { screen: Maps150283Navigator },
Add-Item150282: { screen: Add-Item150282Navigator },
Maps150278: { screen: Maps150278Navigator },
UserProfile150274: { screen: UserProfile150274Navigator },
UserProfile150221: { screen: UserProfile150221Navigator },
Tutorial150220: { screen: Tutorial150220Navigator },
NotificationList150192: { screen: NotificationList150192Navigator },
Settings150191: { screen: Settings150191Navigator },
Settings150183: { screen: Settings150183Navigator },
UserProfile150181: { screen: UserProfile150181Navigator },
UserProfile150145: { screen: UserProfile150145Navigator },
Tutorial150144: { screen: Tutorial150144Navigator },
NotificationList150116: { screen: NotificationList150116Navigator },
Settings150115: { screen: Settings150115Navigator },
Settings150107: { screen: Settings150107Navigator },
UserProfile150105: { screen: UserProfile150105Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
