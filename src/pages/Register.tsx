import { IonButtons, 
         IonContent, 
         IonHeader, 
         IonMenuButton, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonInput, 
         IonItem, 
         IonLabel, 
         IonList,
         IonButton  } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

  const [ fullname, setFullname ] = useState<string>('');
  const [ username, setUsername ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ cpassword, setcPassword ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');

  function registerUser() {
    console.log(fullname, email, username, password, cpassword);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Register Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonList>
                <IonItem>
                <IonLabel position="floating">Firstname and Lastname</IonLabel>
                <IonInput onIonChange={(e:any) => setFullname(e.target.value)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput onIonChange={(e:any) => setEmail(e.target.value)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput onIonChange={(e:any) => setUsername(e.target.value)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput type="password" onIonChange={(e:any) => setcPassword(e.target.value)}></IonInput>
              </IonItem>
              <IonButton expand="block" onClick={registerUser} >Summit</IonButton>
              <Link to="/login">Login</Link>
            </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Register;
