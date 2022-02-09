<template>
  <div>    <header>
      <div class="container">
        <div class="header">
          <div class="header-left">
            <a href="login.html">
              <img class="logo" src="img/header_logo.png" />
            </a>
          </div>

          <div class="header-right">
            <a href="registerAdmin.html">管理者登録</a>
            <a href="employeeList.html">従業員一覧</a>
            <a href="login.html">
              <i class="fas fa-sign-in-alt"></i>ログアウト
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="top-wrapper">
      <div class="container">
        <div>従業員数:10人</div>
        <div class="row">
          <table class="striped">
            <thead>
              <tr>
                <th>名前</th>
                <th>入社日</th>
                <th>扶養人数</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
              <tr>
                <td><a href="employeeDetail.html">山田太郎</a></td>
                <td>2000/1/1</td>
                <td>3人</td>
              </tr>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "../types/employee";
@Component
export default class employeeList extends Vue {
    
    /**
     * Vuexストアのアクション経由で非同期でWebAPIから従業員一覧を取得する.
     */
    create():void{
        this.$store.dispatch("getEmployeeList");    }

    /**
     * 非同期で取得したVuexストア内の従業員数を取得し返す.
     */
    get employeeCount():number{
        return this.$store.getters("getEmployeeCount");
    }

    /**非同期で取得したVuexストア内の従業員一覧を取得し返す */
    get employees():Array<Employee>{
        return this.$store.getters("getEmployees");
    }

}
</script>

<style scoped></style>
