
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar, 
         IonCard, 
         IonCardHeader, 
         IonCardSubtitle, 
         IonCardTitle, 
         IonCardContent, 
         IonItem, 
         IonIcon, 
         IonLabel, 
         IonButton,
         IonImg } from '@ionic/react';
import React from 'react';

interface Products {
  title: string,
  price: number,
  stock: number,
  image: string,
  description: string
}

const products : Products[] = [
  {
    title: 'book1',
    price: 9.99,
    stock: 100,
    image: './icon-book1.png',
    description: 'description book1'
  },
  {
    title: 'book2',
    price: 9.99,
    stock: 100,
    image: './book1.png',
    description: 'description book2'
  },
  {
    title: 'book3',
    price: 9.99,
    stock: 100,
    image: './6dNrkF4C_400x400.jpg',
    description: 'description book3'
  }
]

const Products: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
        <IonTitle>CardExamples</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      { products.map((product, index) => (
      <IonCard>
        <IonImg src={product.image}/>
        <IonCardHeader>
          <IonCardSubtitle>{product.title}</IonCardSubtitle>
          <IonCardTitle>{product.price} us</IonCardTitle>
          <IonCardTitle>{product.stock}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {product.description}
    </IonCardContent>
      </IonCard>
))}
      <IonCard>
        <IonItem>
          <IonIcon icon={pin} slot="start" />
          <IonLabel>ion-item in a card, icon left, button right</IonLabel>
          <IonButton fill="outline" slot="end">View</IonButton>
        </IonItem>

        <IonCardContent>
          This is content, without any paragraph or header tags,
          within an ion-cardContent element.
    </IonCardContent>
      </IonCard>

      <IonCard>
        <IonItem href="#" className="ion-activated">
          <IonIcon icon={wifi} slot="start" />
          <IonLabel>Card Link Item 1 activated</IonLabel>
        </IonItem>

        <IonItem href="#">
          <IonIcon icon={wine} slot="start" />
          <IonLabel>Card Link Item 2</IonLabel>
        </IonItem>

        <IonItem className="ion-activated">
          <IonIcon icon={warning} slot="start" />
          <IonLabel>Card Button Item 1 activated</IonLabel>
        </IonItem>

        <IonItem>
          <IonIcon icon={walk} slot="start" />
          <IonLabel>Card Button Item 2</IonLabel>
        </IonItem>
      </IonCard>
    </IonContent>
  </IonPage>
  );
};

export default Products;
