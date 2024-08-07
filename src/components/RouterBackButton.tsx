import { IonButton, IonIcon, useRouter } from '@ionic-solidjs/core';
import { iconArrowBack } from '@ionic-solidjs/ionicons';

export function RouterBackButton() {
    const router = useRouter();

    const pop = () => {
        router?.back();
    };

    return (
        <IonButton type="button" onClick={pop}>
            <IonIcon slot="icon-only" name={iconArrowBack} />
        </IonButton>
    );
}
