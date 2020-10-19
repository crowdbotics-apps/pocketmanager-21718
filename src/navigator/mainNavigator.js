import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile150600Navigator from '../features/UserProfile150600/navigator';
import Tutorial150599Navigator from '../features/Tutorial150599/navigator';
import NotificationList150571Navigator from '../features/NotificationList150571/navigator';
import Settings150570Navigator from '../features/Settings150570/navigator';
import Settings150562Navigator from '../features/Settings150562/navigator';
import UserProfile150560Navigator from '../features/UserProfile150560/navigator';
import UserProfile150434Navigator from '../features/UserProfile150434/navigator';
import Tutorial150433Navigator from '../features/Tutorial150433/navigator';
import NotificationList150405Navigator from '../features/NotificationList150405/navigator';
import Settings150404Navigator from '../features/Settings150404/navigator';
import Settings150396Navigator from '../features/Settings150396/navigator';
import UserProfile150394Navigator from '../features/UserProfile150394/navigator';
import UserProfile150362Navigator from '../features/UserProfile150362/navigator';
import Tutorial150361Navigator from '../features/Tutorial150361/navigator';
import NotificationList150333Navigator from '../features/NotificationList150333/navigator';
import Settings150332Navigator from '../features/Settings150332/navigator';
import Settings150324Navigator from '../features/Settings150324/navigator';
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
UserProfile150600: { screen: UserProfile150600Navigator },
Tutorial150599: { screen: Tutorial150599Navigator },
NotificationList150571: { screen: NotificationList150571Navigator },
Settings150570: { screen: Settings150570Navigator },
Settings150562: { screen: Settings150562Navigator },
UserProfile150560: { screen: UserProfile150560Navigator },
UserProfile150434: { screen: UserProfile150434Navigator },
Tutorial150433: { screen: Tutorial150433Navigator },
NotificationList150405: { screen: NotificationList150405Navigator },
Settings150404: { screen: Settings150404Navigator },
Settings150396: { screen: Settings150396Navigator },
UserProfile150394: { screen: UserProfile150394Navigator },
UserProfile150362: { screen: UserProfile150362Navigator },
Tutorial150361: { screen: Tutorial150361Navigator },
NotificationList150333: { screen: NotificationList150333Navigator },
Settings150332: { screen: Settings150332Navigator },
Settings150324: { screen: Settings150324Navigator },
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
