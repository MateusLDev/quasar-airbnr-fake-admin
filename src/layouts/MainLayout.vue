<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawer = ref(false);
const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<template>
  <q-layout view="lHh Lpr lff" container style="height: 100vh">
    <q-header elevated class="drawer-layout-header">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          :icon="drawer ? 'chevron_left' : 'chevron_right'"
          @click="drawer = !drawer"
        />
        <q-toolbar-title>Airbnb admin</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          color: #fff;
          background-color: #ff385c;
        "
      >
        <q-list padding>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> Inbox </q-item-section>
          </q-item>

          <q-item v-ripple active clickable>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Star </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Send </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Drafts </q-item-section>
          </q-item>

          <q-btn color="primary" class="absolute-bottom" label="James Admin">
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <!-- <div class="column">
                  <div class="text-h6 q-mb-md">Settings</div>
                  <q-toggle v-model="mobileData" label="Use Mobile Data" />
                  <q-toggle v-model="bluetooth" label="Bluetooth" />
                </div> -->

                <!-- <q-separator vertical inset class="q-mx-lg" /> -->

                <div class="row items-center">
                  <q-avatar size="40px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                  </q-avatar>

                  <div class="column">
                    <div class="text-weight-bold">james Admin</div>
                    <div>admin@admin.com</div>
                  </div>

                  <q-btn
                    v-close-popup
                    color="primary"
                    label="Logout"
                    push
                    size="sm"
                    @click="logout"
                  />
                </div>
              </div>
            </q-menu>
          </q-btn>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">james Admin</div>
          <div>admin@admin.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scooped>
.drawer-layout {
  &-header {
    background-color: #fff;
    color: #363333;
  }
}
</style>
