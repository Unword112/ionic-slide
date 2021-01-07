import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { archiveOutline,
         archiveSharp,
         bookmarkOutline, 
         heartOutline, 
         heartSharp, 
         mailOutline, 
         mailSharp, 
         paperPlaneOutline, 
         paperPlaneSharp, 
         trashOutline, 
         trashSharp, 
         warningOutline, 
         warningSharp,
         logInOutline,
         logInSharp,
         keyOutline,
         keySharp,
         cartOutline,
         cartSharp,
         walletOutline,
         walletSharp,
         peopleSharp,
         peopleOutline,
         logOutOutline,
         logOutSharp,
         homeOutline,
         homeSharp}  from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Login',
    url: '/pages/Login',
    iosIcon: logInOutline,
    mdIcon: logInSharp
  },
  {
    title: 'Home',
    url: '/pages/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Register',
    url: '/pages/Register',
    iosIcon: keyOutline,
    mdIcon: keySharp
  },
  {
    title: 'Cart',
    url: '/pages/Cart',
    iosIcon: cartOutline,
    mdIcon: cartSharp
  },
  {
    title: 'Payment',
    url: '/pages/Payment',
    iosIcon: walletOutline,
    mdIcon: walletSharp
  },
  {
    title: 'Account',
    url: '/pages/Account',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Logout',
    url: '',
    iosIcon: logOutOutline,
    mdIcon: logOutSharp
  }
];

const labels = ['Sony', 'Apple', 'Sumsung', 'Vivo', 'Nokia', 'Xioami'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
