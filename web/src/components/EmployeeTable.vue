<template>
  <b-table :data="employees" :columns="columns" striped hoverable>
    <template slot="empty">
      <div class="has-text-centered">
        <b-icon
          icon="exclamation-triangle"
          size="is-large"
          class="has-text-warning"
        />
        <p>Nada encontrado</p>
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "EmployeeTable",

  data() {
    return {
      columns: [
        {
          field: "id",
          label: "ID",
          width: "80",
          numeric: true
        },
        {
          field: "name",
          label: "Nome"
        },
        {
          field: "gender",
          label: "Sexo"
        },
        {
          field: "age",
          label: "Idade",
          numeric: true
        },
        {
          field: "role",
          label: "Cargo"
        },
        {
          field: "salary",
          label: "Salário",
          numeric: true
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("loadEmployees");
  },
  computed: {
    employees() {
      return this.$store.getters.allEmployees;
    }
  }
};
</script>
