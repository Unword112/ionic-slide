import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import Slides from '../components/Slides';

type Item = {
    src: string;
    text: string;
}

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
            <Slides />
      </IonContent>
    </IonPage>
  );
};

export default Home;
