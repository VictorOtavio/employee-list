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
          <router-link :to="{ name: 'login' }" class="button is-info">
            <strong>Logout</strong>
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "TheNavbar"
};
</script>
