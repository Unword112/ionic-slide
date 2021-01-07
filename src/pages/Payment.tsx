import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Payment: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Payment Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
            Payment Page
      </IonContent>
    </IonPage>
  );
};

export default Payment;
