<template>
  <form action="" class="box">
    <b-field label="Nome de usuário">
      <b-input
        v-model="email"
        icon="user"
        placeholder="Digite seu nome de usuário"
        required
      />
    </b-field>

    <b-field label="Senha de acesso">
      <b-input
        type="password"
        v-model="password"
        icon="lock"
        placeholder="Digite sua senha de acesso"
        required
      />
    </b-field>

    <div class="field">
      <b-checkbox v-model="remember">
        Continuar logado?
      </b-checkbox>
    </div>

    <b-field>
      <button class="button is-success" @click.prevent="login">
        Entrar
      </button>
    </b-field>

    <hr class="has-background-grey-lighter" />
    <p>
      Utilize os dados de acesso padrão para acessar a demo:<br />
      <strong>E-mail:</strong> <code>email@exemplo.com.br</code><br />
      <strong>Senha:</strong> <code>senhadeacesso</code>
    </p>
  </form>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      remember: true
    };
  },

  methods: {
    login() {
      this.$auth.login({
        data: { email: this.email, password: this.password },
        rememberMe: this.remember,
        redirect: { name: "home" },
        fetchUser: false,
        error(err) {
          this.$buefy.toast.open({
            queue: false,
            duration: 15000,
            type: "is-danger",
            position: "is-bottom-right",
            message: err.response.data.message
          });
        }
      });
    }
  }
};
</script>
