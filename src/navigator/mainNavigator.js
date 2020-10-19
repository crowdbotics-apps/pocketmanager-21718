import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings150191Navigator from '../features/Settings150191/navigator';
import Settings150183Navigator from '../features/Settings150183/navigator';
import UserProfile150181Navigator from '../features/UserProfile150181/navigator';
import UserProfile150145Navigator from '../features/UserProfile150145/navigator';
import Tutorial150144Navigator from '../features/Tutorial150144/navigator';
import NotificationList150116Navigator from '../features/NotificationList150116/navigator';
import Settings150115Navigator from '../features/Settings150115/navigator';
import Settings150107Navigator from '../features/Settings150107/navigator';
import UserProfile150105Navigator from '../features/UserProfile150105/navigator';
import BlankScreen0150054Navigator from '../features/BlankScreen0150054/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings150191: { screen: Settings150191Navigator },
Settings150183: { screen: Settings150183Navigator },
UserProfile150181: { screen: UserProfile150181Navigator },
UserProfile150145: { screen: UserProfile150145Navigator },
Tutorial150144: { screen: Tutorial150144Navigator },
NotificationList150116: { screen: NotificationList150116Navigator },
Settings150115: { screen: Settings150115Navigator },
Settings150107: { screen: Settings150107Navigator },
UserProfile150105: { screen: UserProfile150105Navigator },
BlankScreen0150054: { screen: BlankScreen0150054Navigator },

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
