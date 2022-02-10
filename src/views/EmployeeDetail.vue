<template>
  <div>
    <div class="top-wrapper">
      <div class="container">
        <div class="row">
          <form action="employeeList.html">
            <fieldset>
              <legend>従業員情報</legend>
              <table>
                <tr>
                  <th nowrap>従業員名</th>
                  <td>
                    <span>{{ currentEmployee.name }}</span>
                  </td>
                </tr>
                <tr>
                  <th nowrap>写真</th>
                  <td><img v-bind:src="currentEmployeeImage" /></td>
                </tr>
                <tr>
                  <th nowrap>性別</th>
                  <td>
                    <span>{{ currentEmployee.gender }}</span>
                  </td>
                </tr>
                <tr>
                  <th nowrap>入社日</th>
                  <td>
                    <span>{{ currentEmployee.hireDate }}</span>
                  </td>
                </tr>
                <tr>
                  <th nowrap>メールアドレス</th>
                  <td>
                    <span>{{ currentEmployee.mailAddress }}</span>
                  </td>
                </tr>
                <tr>
                  <th nowrap>郵便番号</th>
                  <td>
                    <span>{{ currentEmployee.zipCode }}</span>
                  </td>
                </tr>
                <tr>
                  <th nowrap>住所</th>
                  <td>
                    <span>{{ currentEmployee.address }}</span>
                  </td>
                </tr>
                <tr>
                  <th nowrap>電話番号</th>
                  <td>
                    <span>{{ currentEmployee.telephone }}</span>
                  </td>
                </tr>
                <tr>
                  <th nowrap>給料</th>
                  <td>
                    <span>{{ currentEmployee.salary }}</span>
                  </td>
                </tr>
                <tr>
                  <th nowrap>特性</th>
                  <td>
                    <span>{{ currentEmployee.characteristics }}</span>
                  </td>
                </tr>
                <tr>
                  <th nowrap>扶養人数</th>
                  <td>
                    <div class="input-field col s12">
                      <div class="error">{{ errorMessage }}</div>
                      <input
                        id="dependentsCount"
                        type="text"
                        class="validate"
                        value="3"
                        required
                      />

                      <label for="dependentsCount2">扶養人数</label>
                    </div>
                  </td>
                </tr>
              </table>

              <button class="btn btn-register waves-effect waves-light">
                更新
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "@/types/employee";
import axios from "axios";
@Component
export default class EmployeeDetail extends Vue {
  // 絞り込んだ従業員情報
  private currentEmployee = new Employee(
    0,
    "",
    "",
    "",
    new Date(),
    "",
    "",
    "",
    "",
    0,
    "",
    0
  );
  //   エラーメッセージ
  private errorMessage = "";
  //   従業員画像
  private currentEmployeeImage = "";
  //   従業員扶養人数
  private currentDependentsCount = 0;

  created(): void {
    //   送られてきたリクエストパラメータIDをnumberに変換して取得する
    const employeeId = Number(this.$route.params.id);
    // 送られてきたリクエストパラメータIDを引数として、従業員を検索して表示する
    this.currentEmployee = this.$store.getters.getEmployeeByID(employeeId);
    // 従業員情報から、画像ファイル名を取得する
    this.currentEmployeeImage =
      "http://153.127.48.168:8080/ex-emp-api/img/" + this.currentEmployee.image;
    console.log(this.currentEmployeeImage);

    // 従業員情報から、扶養人数を取得して代入する
    this.currentDependentsCount = this.currentEmployee.dependentsCount;
  }
}
</script>

<style scoped></style>
