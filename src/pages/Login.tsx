import { IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar, 
         IonInput, 
         IonItem, 
         IonLabel, 
         IonList, 
         IonItemDivider,
         IonMenuButton,
         IonButtons,
         IonButton  } from '@ionic/react';
import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';

const Login: React.FC = () => {

  const [ username, setUsername ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  async function login() {
    const res = await loginUser(username, password);
    console.log(res);
  }

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
            <IonList>
              <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput onIonChange={(e:any) => setUsername(e.target.value)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
              </IonItem>
              <IonButton expand="block">Summit</IonButton>
              Didn't have Account?<Link to="./register">get a new one</Link>
            </IonList>
      </IonContent>
    </IonPage>
  );
};


export default Login;
