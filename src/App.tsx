import React from 'react'
import {
	IonApp,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonMenuToggle,
	IonRouterOutlet,
	IonTitle,
	IonToggle,
	IonToolbar,
	setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router-dom'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

import List from './pages/List'
import Home from './pages/Home'

import { bodyOutline, newspaperOutline } from 'ionicons/icons'

setupIonicReact()

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonMenu side="start" contentId="menu">
				<IonHeader>
					<IonToolbar>
						<IonTitle>Menu</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList>
						<IonMenuToggle>
							<IonItem routerLink="/list" routerDirection='none' lines='none'>
								<IonIcon color="medium" slot="start" icon={bodyOutline} />
								<IonLabel>List</IonLabel>
							</IonItem>
							<IonItem routerLink="/menu" routerDirection='none' lines='none'>
								<IonIcon color="medium" slot="start" icon={newspaperOutline} />
								<IonLabel>Home</IonLabel>
							</IonItem>
						</IonMenuToggle>
					</IonList>
				</IonContent>
			</IonMenu>
			<IonRouterOutlet id="menu">
				<Route path="/list" component={List} exact={true} />
				<Route path="/*" component={Home} />
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
)

export default App
