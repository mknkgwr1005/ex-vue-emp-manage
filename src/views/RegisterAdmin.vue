/** 管理者登録画面です. */
<template>
  <div>
    <!-- start of template -->
    <header>
      <div class="container">
        <div class="header">
          <div class="header-left">
            <a href="login.html">
              <img class="logo" src="img/header_logo.png" />
            </a>
          </div>
          <div class="header-right">
            <a href="registerAdmin.html">管理者登録</a>
          </div>
        </div>
      </div>
    </header>
    <div class="top-wrapper">
      <div class="container">
        <div class="row register-page">
          /** @param エラーメッセージの表示 */
          <div class="error">{{ errorMessage }}</div>
          /** @remarks 以下従業員情報の登録 */
          <form class="col s12" id="reg-form">
            <div class="row">
              <div class="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  class="validate"
                  v-model="lastName"
                  required
                />
                <label for="last_name">姓</label>
              </div>
              <div class="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  class="validate"
                  v-model="firstName"
                  required
                />
                <label for="first_name">名</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="email"
                  type="email"
                  class="validate"
                  v-model="mailAddress"
                  required
                />
                <label for="email">メールアドレス</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="password"
                  type="password"
                  class="validate"
                  minlength="8"
                  v-model="password"
                  required
                />
                <label for="password">パスワード</label>
              </div>
            </div>
            /** @remarks 従業員情報入力の終了*/
            <div class="row">
              <div class="input-field col s6">
                <button
                  class="btn btn-large btn-register waves-effect waves-light"
                  @click="registerAdmin"
                  type="button"
                >
                  登録
                  <i class="material-icons right">done</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="footer">
          <div class="footer-center">©️ xxx Inc.</div>
        </div>
      </div>
    </footer>
    <!-- end of template -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
@Component
export default class registerAdmin extends Vue {
  private lastName = "";
  private firstName = "";
  private mailAddress = "";
  private password = "";
  private errorMessage = "";

  async registerAdmin(): Promise<void> {
    const response = await axios.get(
      "http://153.127.48.168:8080/ex-emp-api/insert"
    );
    console.dir(JSON.stringify(response));
    if (response.data.status === "success") {
      this.$router.push("/loginAdmin");
    } else {
      this.errorMessage = response.data.message;
    }
  }
}
</script>

<style scoped></style>
