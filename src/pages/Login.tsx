import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
            Login Page
      </IonContent>
    </IonPage>
  );
};

export default Login;
