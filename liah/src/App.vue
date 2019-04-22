<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      permanent
    >
      <v-layout
        justify-center
        align-center
      >
        <img id="logo" src="./assets/logo.svg"></img>
      </v-layout>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile href="#/amor">
          <v-list-tile-action>
            <v-icon>favorite</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Amor</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="#/amizade">
          <v-list-tile-action>
            <v-icon>grade</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Amizade</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="#/indiretas">
          <v-list-tile-action>
            <v-icon>flash_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Indiretas</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          
        <v-list-tile href="#/refletir">
          <v-list-tile-action>
            <v-icon>question_answer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Refletir</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile href="#/motivacao">
          <v-list-tile-action>
            <v-icon>insert_emoticon</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Motivação</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="#/login">
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    

    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>Melhores Frases</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>
<style>
  #logo{
    width: 100px;
  }
</style>