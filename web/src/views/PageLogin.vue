<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2 has-text-centered has-text-cursive">
          Employee List
        </h1>

        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <login-form />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "PageLogin",

  components: {
    LoginForm
  }
};
</script>
