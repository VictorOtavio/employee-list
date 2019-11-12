<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2 has-text-centered has-text-cursive">
          Employee List
        </h1>

        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <b-field label="Nome de usuário">
                <b-input
                  placeholder="Digite seu nome de usuário"
                  icon="user"
                  required
                />
              </b-field>

              <b-field label="Senha de acesso">
                <b-input
                  type="password"
                  icon="lock"
                  placeholder="Digite sua senha de acesso"
                  required
                />
              </b-field>

              <b-field>
                <button class="button is-success">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageLogin"
};
</script>
