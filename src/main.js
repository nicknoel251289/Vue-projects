import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Test from './Test.vue'
import stat from './ServerStatus.vue'

// 1. These imports return an object
// 2. The first argument passed to Vue.component is our custom HTML element
// 3. The second argument we pass to Vue.component is our object we imported
// 4. When we use our imported object, we are essentially passing the object
//    to our main/root Vue instance to be used. So Home.vue is an extension
//    of our main vue instance below. 
// 5. Because you can pass multiple components that are extended from our 
//    main/root instance, the data object needs to be contained to its own 
//    component so it doesn't interact with other data objects from other 
//    components or our main/root vue instance, which can cause tons of issues. 
//    We do that by turning the data object into a function. So home.vue will 
//    use a function. We can use the normal object in our main/root instance

Vue.component('app-server-status', Home);
Vue.component('counter', Test);
Vue.component('status', stat);

// 1. We can now use these custom HTML tags that are tied to our objects
//    in our App.vue file. App.vue is the selected file we chose to render
//    as written below.

new Vue({
  el: '#app',
  render: h => h(App)
})