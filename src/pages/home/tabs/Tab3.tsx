import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
} from '@ionic-solidjs/core';
import ExploreContainer from '../../../components/ExploreContainer';
import { ToolbarButtons } from '../../../components/ToolbarButtons';
import './Tab3.css';

export function Tab3() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 3</IonTitle>
                    <ToolbarButtons />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Tab 3 page" />
            </IonContent>
        </>
    );
}
