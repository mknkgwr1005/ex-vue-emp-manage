<template>
  <div>
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
        <div class="row login-page">
          <div class="col s12 z-depth-6 card-panel">
            <div class="error">{{ errorMessage }}</div>
            <form class="login-form">
              <div class="row"></div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">mail_outline</i>
                  <input
                    class="validate"
                    id="mailAddress"
                    v-model="mailAddress"
                    type="email"
                  />
                  <label
                    for="mailAddress"
                    data-error="wrong"
                    data-success="right"
                    >メールアドレス</label
                  >
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">lock_outline</i>
                  <input id="password" type="password" v-model="password" />
                  <label for="password">パスワード</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <button
                    type="button"
                    v-on:click="loginAdmin"
                    class="btn btn-register waves-effect waves-light col s12"
                  >
                    ログイン
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6 m6 l6">
                  <p class="margin medium-small">
                    <a href="registerAdmin.html">管理者登録はこちら</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private errorMessage = "";
  private mailAddress = "";
  private password = "";

  loginAdmin(): void {
    this.$router.push("/registerAdmin");
  }
}
</script>

<style scoped></style>
