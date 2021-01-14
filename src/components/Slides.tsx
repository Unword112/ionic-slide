import React from 'react';
import { IonSlides, IonSlide, IonContent, IonImg } from '@ionic/react';

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

export const Slides: React.FC = () => (
  <IonContent>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <h1>img1</h1>
      </IonSlide>
      <IonSlide>
        <h1>img2</h1>
      </IonSlide>
      <IonSlide>
        <h1>img3</h1>
      </IonSlide>
    </IonSlides>
  </IonContent>
);

export default Slides;