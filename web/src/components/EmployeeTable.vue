<template>
  <b-table :data="employees" :loading="isLoading" striped hoverable>
    <template slot-scope="props">
      <b-table-column field="id" label="ID" width="80" numeric>
        {{ props.row.id }}
      </b-table-column>
      <b-table-column field="name" label="Nome">
        {{ props.row.name }}
        <b-icon :icon="props.row.gender === 'm' ? 'mars' : 'venus'" />
      </b-table-column>
      <b-table-column field="age" label="Idade" numeric>
        {{ props.row.age }} anos
      </b-table-column>
      <b-table-column field="role" label="Cargo">
        {{ props.row.role }}
      </b-table-column>
      <b-table-column field="salary" label="Salário" numeric>
        {{ formatMoney(props.row.salary) }}
      </b-table-column>
    </template>

    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <b-icon
            icon="exclamation-triangle"
            size="is-large"
            class="has-text-warning"
          />
          <p>Nada encontrado</p>
        </div>
      </section>
    </template>
  </b-table>
</template>

<script>
import formatMoney from "@/utils/formatMoney";

export default {
  name: "EmployeeTable",

  data() {
    return {
      isLoading: false
    };
  },

  mounted() {
    this.isLoading = true;
    this.$store.dispatch("loadEmployees");
    this.isLoading = false;
  },

  computed: {
    employees() {
      return this.$store.getters.allEmployees;
    }
  },

  methods: {
    formatMoney: float => "R$ " + formatMoney(float, 2, ",", ".")
  }
};
</script>
