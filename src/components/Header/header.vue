<template>
  <div id="master">
    <div id="parentx">
      <vs-sidebar
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
      >
        <div class="header-sidebar" slot="header">
          <vs-avatar
            size="70px"
            src="https://randomuser.me/api/portraits/men/85.jpg"
          />

          <h4>
            {{ userData.name }}
          </h4>
        </div>

        <vs-sidebar-item index="1" icon="question_answer">
          Sprints
        </vs-sidebar-item>
        <vs-sidebar-item index="2" icon="gavel">
          History
        </vs-sidebar-item>
        <vs-sidebar-item index="3" icon="verified_user">
          Configurations
        </vs-sidebar-item>
        <vs-sidebar-item index="4" icon="account_box">
          Profile
        </vs-sidebar-item>
        <vs-sidebar-item index="5">
          Card
        </vs-sidebar-item>

        <div class="footer-sidebar" slot="footer">
          <a :href="logoutUrl"
            ><vs-button icon="reply" color="danger" type="flat"
              >log out</vs-button
            ></a
          >
          <a :href="accountUrl"
            ><vs-button
              icon="settings"
              color="primary"
              type="border"
            ></vs-button
          ></a>
        </div>
      </vs-sidebar>
    </div>
    <div class="centerx">
      <vs-navbar
        v-model="indexActive"
        text-color="rgba(0,0,0,.6)"
        active-text-color="rgba(0,0,0,1)"
        class="myNavbar"
      >
        <div slot="title">
          <vs-navbar-title>
            <img
              @click="active = !active"
              type="filled"
              style="margin-top: 4px;"
              src="https://cvstaticfiles.s3.ap-south-1.amazonaws.com/logo.png"
              height="35"
            />
          </vs-navbar-title>
        </div>
        <masterSearch style="margin-right: 25px;" />

        <vs-navbar-item index="0">
          <a href="#">Workbench</a>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <a href="#">Support</a>
        </vs-navbar-item>

        <vs-spacer></vs-spacer>
      </vs-navbar>
    </div>
  </div>
</template>

<script>
import masterSearch from "./masterSearch.vue";

export default {
  name: "NavBar",
  data() {
    return {
      indexActive: 0,
      active: false,
      userData: this.$keycloakvar.idTokenParsed,
      logoutUrl: this.$keycloakvar.createLogoutUrl(),
      accountUrl: this.$keycloakvar.createAccountUrl(),
      scope: this.$keycloakvar.createAccountUrl()
    };
  },
  components: {
    masterSearch
  },
  created: function() {
    //Vue.$log.info(this.$keycloakvar);
  }
};
</script>

<style lang="scss">
.input-color {
  margin-bottom: 10px;
  position: relative;
  display: block;
}

.myNavbar {
  color: rgb(255, 255, 255);
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.header-sidebar h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.header-sidebar h4 > button {
  margin-left: 10px;
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.footer-sidebar > button {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
  border-radius: 0px !important;
}
</style>
