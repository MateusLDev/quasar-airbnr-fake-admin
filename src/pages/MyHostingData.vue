<script setup lang="ts">
import { ref } from 'vue';
import Api from 'src/api';
import HostingImagesCarousel from 'src/components/HostingImagesCarousel.vue';
import { HostingRules } from '../models';
import { hostingDescription } from '../utils';

const hostingRules = ref<HostingRules[]>([]);

const getHostingRoles = async () => {
  const response = await Api('get');
  hostingRules.value = response?.data.data.entities;
};

getHostingRoles();
</script>

<template>
  <div class="my-hosting-data">
    <q-layout>
      <q-page-container>
        <q-page>
          <h1 class="my-hosting-data-header">Minha hospedagem</h1>

          <q-card class="my-hosting-data-infos">
            <q-card-section>
              <HostingImagesCarousel />

              <p class="my-hosting-data-infos--name">
                Casa Codomínio Ville Cristine
              </p>
              <span class="my-hosting-data-infos--location"
                >Rio de Janeiro, Brasil</span
              >

              <div
                class="my-hosting-data-infos--description"
                v-html="hostingDescription"
              ></div>

              <div class="my-hosting-data-infos--roles">
                <p>Regras da hospedagem</p>

                <ul>
                  <li v-for="item in hostingRules" :key="item.id">
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss" scoped>
.my-hosting-data {
  &-header {
    margin: 0;
    font-size: 32px;
    font-weight: 400;
  }

  &-infos {
    &--name {
      font-size: 28px;
      margin: 20px 0 0 0;
    }

    &--location {
      font-size: 16px;
      font-weight: 500;
    }

    &--description {
      color: #2e2e2e;
      margin-top: 30px;
    }

    &--roles {
      margin-top: 30px;

      p {
        font-size: 18px;
        font-weight: 400;
      }

      ul {
        list-style: none;
        padding-left: 10px;

        li {
          padding: 10px 0;
          border-bottom: 1px solid red;
        }
      }
    }
  }
}
</style>
