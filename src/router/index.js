import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyPage from '@/components/MyPage'

Vue.use(Router)

export default new Router({
  // 預設為 hash 模式
  // hash —— 即地址欄 URL 中的 # 符號（此 hash 不是密碼學裡的散列運算）。
  // 比如這個 URL：http://www.abc.com/#/hello，hash 的值為 #/hello。
  // 它的特點在於：hash 雖然出現在 URL 中，但不會被包括在 HTTP 請求中，對後端完全沒有影響，因此改變 hash 不會重新加載頁面。
  // mode: 'history',
  // history mode 在刷新頁面時，如果服務器中沒有相應的響應或資源，就會出現404。因此，如果 URL 匹配不到任何靜態資源，則應該返回同一個 index.html 頁面，這個頁面就是你 app 依賴的頁面
  routes: [
    {
      // 使用 hash mode http://localhost:8080/#/helloworld
      // 使用 history mode http://localhost:8080/#/helloworld
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage
    }
  ]
})
