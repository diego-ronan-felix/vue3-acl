<script lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../../stores/users';

export default {
  setup() {
    const useStore = useUserStore()
    const loading = ref(false)
    const email = ref('')
    const password = ref('')

    const auth = () => {
      loading.value = true
      useStore.auth(email.value, password.value)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        .finally(() => loading.value = false)
    }

    return {
      loading,
      email,
      password,
      auth
    }
  }
}
</script>
<template>
  <h1>Login</h1>
  <form method="post" @submit.prevent="auth">
    <input type="email" name="email" placeholder="E-mail" v-model="email">
    <input type="password" name="password" placeholder="Senha" v-model="password">
    <button type="submit" :class="{ disabled: loading }">
      <span v-if="loading">Enviando...</span>
      <span v-else>Login</span>
    </button>
  </form>
  <a href="/esqueci-a-senha">Esqueci a senha</a>
</template>