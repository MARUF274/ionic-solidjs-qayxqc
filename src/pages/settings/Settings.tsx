import {
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
} from '@ionic-solidjs/core';
import ExploreContainer from '../../components/ExploreContainer';
import { RouterBackButton } from '../../components/RouterBackButton';

export function Settings() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <RouterBackButton />
                    </IonButtons>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <ExploreContainer name="Settings page" />
            </IonContent>
        </>
    );
}
