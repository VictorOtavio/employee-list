<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'home' }"
        class="has-text-cursive"
      >
        Employee List
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <button class="button is-info" @click.prevent="logout">
            <strong>Logout</strong>
          </button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "TheNavbar",

  methods: {
    logout() {
      this.$buefy.dialog.confirm({
        type: "is-warning",
        message: "Tem certeza que deseja sair?",
        onConfirm: () => this.$auth.logout()
      });
    }
  }
};
</script>
