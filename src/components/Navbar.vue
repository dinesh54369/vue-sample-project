<template>
  <section>
    <v-app-bar flat color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title
        >LIFE POLICY INFO
        <div class="subheading">
          <v-breadcrumbs :items="items" class="breadcrumbs_1">
            <template v-slot:divider>
              <v-icon>mdi-forward</v-icon>
            </template>
          </v-breadcrumbs>
        </div>
      </v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-row>
        <v-spacer> </v-spacer>
        <v-div
          >iBOSS
          <v-icon>mdi-account-cowboy-hat</v-icon>
        </v-div>
        <v-div> <v-icon>mdi-logout</v-icon> </v-div></v-row
      >
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-alert-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>FAR Info</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-arrow-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Policy Transfer</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Master CRM</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-database</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Master Account</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Biz Tran.Register</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-file-replace</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Report</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-upload</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Document Mgt.</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-file-replace</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Coustomer Servicing</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>eDOCU (FAR)</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cogs</v-icon>
            </v-list-item-icon>
            <v-list-item-title>AutoSynce LI</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cogs</v-icon>
            </v-list-item-icon>
            <v-list-item-title>AutoSync INV</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-upload-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Import Data</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-menu</v-icon>
            </v-list-item-icon>
            <v-list-item-title>EPC Sync</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-menu</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Product Mgt.(Admin)</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-progress-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-title>AQS life</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-progress-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Fund Selector</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-file-document-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact Mgt</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-file-document-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Event Mgt</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-file-document-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>News Mgt</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Resources Mgt</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Compliance & Audit</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-file-document-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>CommTrack</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dictionaries</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cursor-pointer</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Feedback</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Old iBOSS Document</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        color: "white",
        text: "LIFE POLICY INFO",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        color: "white",
        text: "ADD EDIT POLICY",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
    ],
  }),
};
</script>
<style>
.breadcrumbs_1 {
  padding: 0% !important;
  margin: 0% !important;
}
@media (min-width: 360px) and (max-width: 640px) {
  .subheading {
    display: none;
  }
}
</style>
