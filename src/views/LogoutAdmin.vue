<template>
  <div>
    <div>ログアウト中・・・</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
@Component
export default class logoutAdmin extends Vue {
  /**
   * ページ遷移と同時に、ログイン画面に戻る.
   */
  async created(): Promise<void> {
    const response = await axios.get(
      "http://153.127.48.168:8080/ex-emp-api/logout"
    );
    console.dir(response, JSON.stringify(response));

    if (response.data.status === "success") {
      this.$router.push("/loginAdmin");
    }
  }
}
</script>

<style scoped></style>
