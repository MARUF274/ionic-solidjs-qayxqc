import {
    IonButton,
    IonButtons,
    IonIcon,
    IonRouterLink,
} from '@ionic-solidjs/core';
import { iconSettingsOutline } from '@ionic-solidjs/ionicons';

export function ToolbarButtons() {
    return (
        <IonButtons slot="primary">
            <IonRouterLink href="/settings">
                <IonButton>
                    <IonIcon slot="icon-only" name={iconSettingsOutline} />
                </IonButton>
            </IonRouterLink>
        </IonButtons>
    );
}
