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

      <ion-list>
        <ion-item>
          <ion-checkbox class="custom" slot="start"></ion-checkbox>
          <ion-label>I'm special</ion-label>
        </ion-item>

        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>I'm not special</ion-label>
        </ion-item>

        <ion-item-sliding>
          <ion-item-options side="start">
            <ion-item-option color="success">Archive</ion-item-option>
          </ion-item-options>

          <ion-item>
            <ion-label>
              <ion-text color="primary">
                <h2>Sliding Ipsum</h2>
              </ion-text>
              <p>Sliding Item with Options on Both Sides</p>
            </ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option>Favorite</ion-item-option>
            <ion-item-option color="danger">Delete</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item>
          <ion-label>Just some fillers to show header behaviour</ion-label>
        </ion-item>

        <ion-item v-for="(item, k) in items" :key="k">
          <ion-label>Just filler item No {{k}}</ion-label>
        </ion-item>

      </ion-list>
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
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const items = new Array(20)

</script>
