import Vue from 'vue'
import Vuex from 'vuex'
import Home from './Home'
import Login from './Login'
import TranslateRegist from './TranslateRegist'
import MyPage from './MyPage'
import UserPage from './UserPage'
import TransDetail from './TransDetail'
import EditProfile from './EditProfile'
import RegistTrans from './RegistTrans'

Vue.use(Vuex);

export default new Vuex.Store({
  modules :{
    Home,
    Login,
    TranslateRegist,
    MyPage,
    UserPage,
    TransDetail,
    EditProfile,
    RegistTrans,
  }
})
