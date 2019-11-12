<template>
  <div class="has-background-grey-lighter">
    <the-navbar />
    <div class="container">
      <main class="section">
        <div class="card">
          <div class="card-header has-background-primary">
            <div class="card-header-title">
              <h1 class="title is-4 has-text-white">Empregados</h1>
            </div>
          </div>
          <div class="card-content">
            <employee-table />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import EmployeeTable from "@/components/EmployeeTable.vue";

export default {
  name: "Home",
  components: {
    TheNavbar,
    EmployeeTable
  }
};
</script>
