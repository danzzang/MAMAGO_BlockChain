import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const SERVER_URL = 'https://j3b103.p.ssafy.io/api'

@Module({namespaced: true})
export default class TransDetail extends VuexModule  {

  public article: any = {};
  public user: any = [];

  @Mutation
  public async save_article(temp:any) {
    this.article = temp
  }

  @Mutation
  public async save_user(temp:any){
    this.user = temp
  }

  @Mutation
  public async add_user(temp:any){
    console.log('user 추가')
    this.user.push(temp)
    location.reload()
  }

  @Action({ commit : 'save_article' })
  public async get_article_1(id: string) {
    const res = await axios.get(`${SERVER_URL}/articles/${id}`)
    return res.data
  }


  @Action
  public async apply(applyData : any){
    console.log('apply')
    console.log(applyData)
    let config = {
      headers: {
        token : Vue.cookies.get('token'),
        email : Vue.cookies.get('email'),
      }
    }
    console.log(config)
    axios.post(`${SERVER_URL}/articles/${applyData.article_id}/candidates`, applyData, config)    
    .then(async res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  @Action({commit : 'save_user'})
  public async get_candidate(candi_list: any){
    console.log(candi_list)
    const users = []
    for(let candi in candi_list){
      const res = await axios.get(`${SERVER_URL}/users/${candi_list[candi].user_id}`)
      users.push(res.data)
    }
    return users 
  }

  @Action 
  public async candi_click(clickData : any){
    let config = {
      headers : {
        token : Vue.cookies.get('token'),
        email : Vue.cookies.get('email')
      }
    }
    const res = await axios.post(`${SERVER_URL}/articles/${clickData.article_id}/candidates/${clickData.user_id}`, {}, config)
    console.log(res.data)
    location.reload()
  }
}
