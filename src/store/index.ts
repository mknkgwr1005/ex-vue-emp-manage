import { Employee } from "@/types/employee";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // 従業員の合計人数
    totalEmployeeCount: 0,
    // 従業員一覧情報
    employees: new Array<Employee>(),
  }, // end state
  actions: {
    /** 従業員一覧情報をWebAPIから受け取ってmutationを呼び出す.
     * @param context - コンテキスト
     */
    async getEmployeeList(context) {
      // APIの呼び出し
      const response = await axios.get(
        "http://153.127.48.168:8080/ex-emp-api/employee/employees"
      );
      // 受信したJSONファイルの表示：console.dirと文字列化するstringfy
      console.dir("response:" + JSON.stringify(response));
      // 受信したJSOＮのdataにあるデータをpayload変数に格のする
      const payload = response.data;
      // mutationの呼び出し
      context.commit("showEmployeeList", payload);
    },
  }, // end actions
  mutations: {
    /**
     * 従業員一覧を取得してstateに返す.
     *
     * @param state - ステート
     * @param payload - 従業員情報
     */
    showEmployeeList(state, payload): void {
      state.totalEmployeeCount = payload.totalEmployeeCount;
      for (const employee of payload.employees) {
        state.employees.push(
          new Employee(
            employee.id,
            employee.name,
            employee.image,
            employee.gender,
            employee.hireDate,
            employee.mailAddress,
            employee.zipCode,
            employee.address,
            employee.telephone,
            employee.salary,
            employee.characteristics,
            employee.dependentsCount
          )
        );
      }
    },
  }, // end mutations
  getters: {
    /**
     * 従業員数を返す.
     * @param state - ステート
     * @returns  - 従業員数
     */
    getEmployeeCount(state): number {
      return state.totalEmployeeCount;
    },
    /**
     * 従業員一覧を返す.
     * @param state - ステート
     * @returns ― 従業員情報
     */
    getEmployees(state): Array<Employee> {
      return state.employees;
    },
    /**
     * IDから従業員情報を検索して返す
     * @param state ― ステート
     * @returns - 従業員情報
     */
    // ＩＤから従業員を検索して返す
    getEmployeeByID(state) {
      return (id: number) => {
        const newEmployees = state.employees.filter(
          (employees) => employees.id === id
        );
        return newEmployees[0];
      };
    },
  }, // end getters
  modules: {}, // end modules
});
