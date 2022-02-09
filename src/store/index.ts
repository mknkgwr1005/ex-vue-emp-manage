import { Employee } from "@/types/employee";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    /** @param 従業員の合計人数 */
    totalEmployeeCount: 0,
    /** @param Employeeクラスのデータ */
    employees: new Array<Employee>(),
  }, // end state
  actions: {
    /** @paran 従業員情報のＡＰＩからの取得 */
    async getEmployeeList(context) {
      /**  @remarks APIの呼び出し*/
      const response = await axios.get(
        "http://153.127.48.168:8080/ex-emp-api/employee.employees"
      );
      /** @remarks 受信したJSONファイルの表示：console.dirと文字列化するstringfy*/
      console.dir("response:" + JSON.stringify(response));
      /**@remarks 受信したJSOＮのdataにあるデータをpayload変数に格のする*/
      const payload = response.data;
      /**  @remarks mutationの呼び出し*/
      context.commit("showEmployeeList", payload);
    },
  }, // end actions
  mutations: {
    /**@param actionsで受け取った従業員情報を、stateに渡す */
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
    /**@param 従業員数を返す */
    getEmployeeCount(state): number {
      return state.totalEmployeeCount;
    },
    /**@param 従業員一覧を返す */
    getEmployees(state): Array<Employee> {
      return state.employees;
    },
    /**@param ＩＤから従業員を検索して返す */
    getEmployeeByID(state): number {
      return Number(state.employees[0]);
    },
  }, // end getters
  modules: {}, // end modules
});
