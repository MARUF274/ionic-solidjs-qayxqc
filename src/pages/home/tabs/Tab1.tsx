import {
    IonAlert,
    IonButton,
    IonContent,
    IonHeader,
    IonText,
    IonTitle,
    IonToolbar,
} from '@ionic-solidjs/core';
import { createEffect, createSignal } from 'solid-js';
import { ToolbarButtons } from '../../../components/ToolbarButtons';
import './Tab1.css';

export function Tab1(props: { foo: string }) {
    const [open, setOpen] = createSignal(false);
    const [text, setText] = createSignal('Button not used yet');

    createEffect(() => {
        console.log('open', open());
    });

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                    <ToolbarButtons />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 2</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonButton
                    onClick={() => {
                        setOpen(true);
                        setText('Button has been used');
                    }}
                    style="--background: green;"
                    on:ionBlur={() => console.log('blur')}
                >
                    Show Alert
                </IonButton>

                <p>
                    <IonText innerText={text()} />
                </p>

                <IonAlert
                    isOpen={open()}
                    header={'Header'}
                    subHeader="Subheader"
                    on:ionAlertDidDismiss={() => setOpen(false)}
                />
            </IonContent>
        </>
    );
}
