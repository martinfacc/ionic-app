import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const List: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
		</IonPage>
	)
}

export default List
