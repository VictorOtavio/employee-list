import axios from "@/setup/axios";

const state = {
  employees: []
};

const mutations = {
  SET_EMPLOYEES(state, employees) {
    state.employees = employees;
  }
};

const actions = {
  async loadEmployees({ commit }) {
    const { data: employees } = await axios.get("/employees");
    commit("SET_EMPLOYEES", employees);
  }
};

const getters = {
  allEmployees: state => {
    return state.employees;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
