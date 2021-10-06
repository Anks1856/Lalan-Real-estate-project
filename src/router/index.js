import VueRouter from 'vue-router';

import Home from '../pages/HomePage.vue';
import Agents from '../pages/Agents.vue';
import AgentProfile from '../pages/AgentProfile.vue';
import Agencies from '../pages/Agencies.vue';
import AgencyProfile from '../pages/AgencyProfile.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import UserProfile from '../pages/UserProfile.vue';
import SocialProfile from '../pages/SocialProfile.vue';
import AddProperty from '../pages/AddProperty.vue';
import MyProperties from '../pages/MyProperties.vue';
import FavouriteProperties from '../pages/FavouriteProperties.vue';
import Properties from '../pages/Properties.vue';
import PropertyDetails from '../pages/PropertyDetails.vue';

const router = new VueRouter({
    mode :'history',
    routes : [
        {name : 'Home' , path:'/' , meta:{title : 'welcome to lalan Real estate'} , component :Home },
        {name : 'Agents' , path:'/Agents' , meta:{title : 'Lalan Real estate Agents'} , component :Agents },
        {name : 'AgentProfile' , path:'/Agent/:AgentId' , meta:{title : 'Agent - '} , component : AgentProfile },
        {name : 'Agencies' , path:'/Agencies' , meta:{title : 'Agencies - '} , component : Agencies },
        {name : 'Properties' , path:'/Properties' , meta:{title : 'Properties'} , component : Properties },
        {name : 'PropertyDetails' , path:'/Property/:propertyId' , meta:{title : 'Property'} , component : PropertyDetails },
        {name : 'AgentProfile' , path:'/Agency/:AgencyId' , meta:{title : 'Agency - '} , component : AgencyProfile },
        {name : 'About' , path:'/About' , meta:{title : 'About Lalan'} , component : About },
        {name : 'Contact' , path:'/Contact' , meta:{title : 'Contact Lalan'} , component : Contact },
        {name : 'UserProfile' , path:'/UserProfile' , meta:{title : 'User Profile'} , component : UserProfile },
        {name : 'SocialProfile' , path:'/SocialProfile' , meta:{title : 'Social Profile'} , component : SocialProfile },
        {name : 'MyProperties' , path:'/MyProperties' , meta:{title : 'My Properties'} , component : MyProperties },
        {name : 'FavouriteProperties' , path:'/FavouriteProperties' , meta:{title : 'Favourite Properties'} , component : FavouriteProperties },
        {name : 'AddProperty' , path:'/AddProperty' , meta:{title : 'Add Property'} , component : AddProperty },
        
    ]
})

//acticity which after route is heppend 
// router.afterEach((to, from) => {
//     // console.log('After Each (Global)', from)
//     document.title = to.meta.title || "Lalan Real Estate Project"
// })



export default router;