<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 1 page" />

      <ion-item>
        <ion-checkbox class="custom" slot="start"></ion-checkbox>
        <ion-label>I'm special</ion-label>
      </ion-item>

      <ion-item>
        <ion-checkbox slot="start"></ion-checkbox>
        <ion-label>I'm not special</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<style lang="scss">
.custom {
  --checkmark-color: var(--ion-color-success-contrast);
  --checkmark-width: 4px;
  --background-checked: var(--ion-color-success);
  --border-color-checked: var(--ion-color-success);
  --border-color: var(--ion-color-success);
  --border-radius: 10px;
  --size: 28px;
  &::part(mark) {
    // this is the SVG of the checkbox icon
    d: path("M18.75 12H5.25M12 5.25V18.75V5.25Z");
  }
}
</style>

<script setup lang="ts">
import ExploreContainer from "@/components/ExploreContainer.vue";
import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>
