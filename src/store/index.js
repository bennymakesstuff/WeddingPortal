import Vue from "vue";
import Vuex from "vuex";
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    login_user (state, userData) {

      if(userData.username.toLowerCase()=="ben"){
        var user = {fname:"Benjamin",sname:"Broad",is_admin:true};
        state.user = user;
        localStorage.setItem('user',JSON.stringify(state.user));
        localStorage.setItem('token','12a5d4aef95efawf5fa65afw651af');
        router.push({name:'ben'});
      }
      else if(userData.username.toLowerCase()=="jack"){
        var user = {fname:"Jack",sname:"Broad",is_admin:true};
        state.user = user;
        localStorage.setItem('user',JSON.stringify(state.user));
        localStorage.setItem('token','12a5d4aef95efawf5fa65afw651af');
        router.push({name:'jack'});
      }
      else if(userData.username.toLowerCase()=="trav"){
        var user = {fname:"Travis",sname:"Broad",is_admin:true};
        state.user = user;
        localStorage.setItem('user',JSON.stringify(state.user));
        localStorage.setItem('token','12a5d4aef95efawf5fa65afw651af');
        router.push({name:'trav'});
      }
      else{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }

    },
    logout_user (state) {
      state.user = null;
      router.push({name:'login'});
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  },
  actions: {
    login (context, userData) {
      context.commit('login_user',userData);
    },
    logout (context) {
      context.commit('logout_user');
    }
  },
  modules: {}
});
