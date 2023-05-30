<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { setToken } from '../utils';

const userEmail = ref('');
const userPassword = ref('');
const emailRef = ref('');
const passwordRef = ref('');
let errorMessage = ref('');
let loading = ref(false);

const router = useRouter();

const isFormFilled = () => {
  emailRef.value.validate();
  passwordRef.value.validate();

  if (emailRef.value.hasError || passwordRef.value.hasError) {
    return false;
  }
  return true;
};

const login = () => {
  if (!isFormFilled()) return;

  loading.value = true;
  setTimeout(() => {
    if (
      userEmail.value !== 'admin@admin.com' &&
      userPassword.value !== 'admin'
    ) {
      errorMessage.value = 'E-mail ou senha incorretos';
      loading.value = false;
      return;
    }
    loading.value = false;
    setToken();
    router.push({ name: 'Home' });
  }, 3000);
};
</script>

<template>
  <div class="login-wrapper">
    <div class="informations-section">
      <q-img src="../assets/airbnb-logo.jpg" width="200px" />

      <h1 class="informations-section-header">Olá, Bem vindo de volta!</h1>

      <p class="informations-section-description">
        Entre com seu e-mail e senha cadastrados na plataforma para gerenciar
        sua hospedagem!
      </p>
    </div>

    <form class="form-login-section" @submit.prevent.stop="login">
      <q-input
        ref="emailRef"
        v-model="userEmail"
        outlined
        label="E-mail"
        :rules="[(val) => val.length || 'Informe um e-mail']"
      />
      <q-input
        ref="passwordRef"
        v-model="userPassword"
        outlined
        label="Senha"
        type="password"
        :rules="[(val) => val.length || 'Informe uma senha']"
      />

      <span>{{ errorMessage }}</span>

      <q-btn
        color="primary"
        text-color="white"
        style="width: 100%"
        padding="md"
        :loading="loading"
        label="Entrar"
        type="submit"
      >
        <template #loading>
          <q-spinner-gears class="on-left" />
          Computing...
        </template>
      </q-btn>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  max-width: 35rem;
  margin: 0 auto;

  text-align: center;
}

.informations-section {
  &-header {
    font-size: 34px;
    font-weight: 600;
    color: #ff385c;

    margin: 0;
  }

  &-description {
    font-size: 18px;
    color: #646060;
    margin-bottom: 60px;
  }
}

.form-login-section {
  width: 100%;

  .q-field {
    margin-bottom: 20px;
  }

  .q-btn {
    margin-top: 20px;
  }
}
</style>
