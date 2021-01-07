import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Account: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Account Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      Account Page
      </IonContent>
    </IonPage>
  );
};

export default Account;
