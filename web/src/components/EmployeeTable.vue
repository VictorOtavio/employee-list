<template>
  <b-table :data="data" :columns="columns" striped hoverable>
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
          field: "salary",
          label: "Salário",
          numeric: true
        },
        {
          field: "age",
          label: "Idade",
          numeric: true
        }
      ],
      data: [
        {
          id: 77,
          name: "jeevtamilan",
          salary: 1230.0,
          age: 23
        },
        {
          id: 81,
          name: "test2",
          salary: 1230.0,
          age: 23
        },
        {
          id: 82,
          name: "sunny kumar singh",
          salary: 3200.0,
          age: 23
        },
        {
          id: 83,
          name: "tyagi shilpi",
          salary: 10000.0,
          age: 29
        },
        {
          id: 84,
          name: "eagle3122asdas21as21asas121",
          salary: 3000.0,
          age: 23
        },
        {
          id: 85,
          name: "Erlene Hackett MD",
          salary: 6200.0,
          age: 32
        },
        {
          id: 86,
          name: "Quinn Marvin",
          salary: 5200.0,
          age: 32
        },
        {
          id: 87,
          name: "Mrs. Laura Waelchi",
          salary: 4000.0,
          age: 32
        },
        {
          id: 93,
          name: "QTNov1120191346",
          salary: 5300.0,
          age: 30
        },
        {
          id: 94,
          name: "testprasad",
          salary: 1300.0,
          age: 34
        },
        {
          id: 96,
          name: "api_test_y",
          salary: 986.0,
          age: 23
        },
        {
          id: 97,
          name: "api_test_i_a_A_v_a_b_z",
          salary: 1690.0,
          age: 23
        },
        {
          id: 98,
          name: "test",
          salary: 1690.0,
          age: 23
        },
        {
          id: 99,
          name: "TsarikovSa",
          salary: 2500.0,
          age: 23
        },
        {
          id: 101,
          name: "Alexandr",
          salary: 2200.0,
          age: 23
        },
        {
          id: 102,
          name: "testiqweg",
          salary: 1950.0,
          age: 23
        },
        {
          id: 104,
          name: "Adam",
          salary: 1750.0,
          age: 230
        },
        {
          id: 107,
          name: "tomas",
          salary: 2800.0,
          age: 0
        },
        {
          id: 109,
          name: "tomash",
          salary: 1500.0,
          age: 18
        }
      ]
    };
  }
};
</script>
