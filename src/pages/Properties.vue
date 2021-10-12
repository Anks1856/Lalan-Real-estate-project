<template>
  <fragment>
      <!-- hero component -->
      <hero />
        <!-- #map end -->
            
        <!-- properties-list
============================================= -->
{{properties}}
        <section id="properties-list">
            <div class="container">
                <div class="row">
                        <properties-statistics />
                    <!-- .col-md-4 end -->
                        <property-listing :datas="datas" :properties="properties" @getMoreData="handleMoreData"/> 
                    <!-- .col-md-8 end -->
                </div>
                <!-- .row -->
            </div>
            <!-- .container -->
        </section>
        <!-- #properties-list  end  -->

        <!-- cta #1
============================================= -->
{{searchUpdate}}
        <call-to-action />
        <!-- #cta1 end -->
        <script type="application/javascript" defer src="/assets/js/functions.js"></script>
  </fragment>
</template>

<script>
import CallToAction from '../components/CallToAction.vue'
// import FeaturedPropertyCrousel from '../components/FeaturedPropertyCrousel.vue'
import Hero from '../components/PropertyListingPage/Hero.vue';
import PropertiesStatistics from '../components/PropertyListingPage/PropertiesStatistics.vue';
import PropertyListing from '../components/PropertyListingPage/PropertyListing.vue';
import PropertyServices from '../Services/PropertyServices';

export default {
  components: { CallToAction ,Hero, PropertyListing, PropertiesStatistics},
    
    data() {
        return {
            properties : [],
            // properties : [// evry time need to pass 6 property data
            //     {
            //     porpertyID : 15433,
            //     agentId : 54686,
            //     name : "1220 Petersham Town" ,
            //     price : 70000,
            //     isFeatured : true ,
            //     description : {
            //         destails : "lorem50",
            //         type : "house",
            //         status : "Sale",
            //         bedrooms : 3 ,
            //         bathrooms : 4,
            //         floor : 2,
            //         garage: 1,
            //         area : 1250 ,
            //         size : 564
            //     },
            //     location : {
            //         address : "Ahmedabad , India 380009",
            //         country : "India",
            //         city : "Ahmedabad",
            //         state : "Gujrat",
            //         zipcode: 380009 ,
            //         neighborhood : "CG road"
            //     },
            //     media : {
            //         photos : ["/assets/images/properties/1.jpg"],
            //         videosUrl : "https://www.youtube.com/watch?v=t_dxBfgG0aU&ab_channel=RafiqueMerchant"
            //     }
            // } ,
            //     {
            //     porpertyID : 12003,
            //     agentId : 54686,
            //     name : "1220 Petersham Town" ,
            //     price : 170000,
            //     isFeatured : true ,
            //     description : {
            //         destails : "lorem50",
            //         type : "house",
            //         status : "Sale",
            //         bedrooms : 3 ,
            //         bathrooms : 4,
            //         floor : 2,
            //         garage: 1,
            //         area : 1250 ,
            //         size : 564
            //     },
            //     location : {
            //         address : "Ahmedabad , India 380009",
            //         country : "India",
            //         city : "Ahmedabad",
            //         state : "Gujrat",
            //         zipcode: 380009 ,
            //         neighborhood : "CG road"
            //     },
            //     media : {
            //         photos : ["/assets/images/properties/1.jpg"],
            //         videosUrl : "https://www.youtube.com/watch?v=t_dxBfgG0aU&ab_channel=RafiqueMerchant"
            //     }
            // } ,
            //  {
            //     porpertyID : 12003,
            //     agentId : 54686,
            //     name : "1220 Petersham Town" ,
            //     price : 170000,
            //     isFeatured : true ,
            //     description : {
            //         destails : "lorem50",
            //         type : "house",
            //         status : "Sale",
            //         bedrooms : 3 ,
            //         bathrooms : 4,
            //         floor : 2,
            //         garage: 1,
            //         area : 1250 ,
            //         size : 564
            //     },
            //     location : {
            //         address : "Ahmedabad , India 380009",
            //         country : "India",
            //         city : "Ahmedabad",
            //         state : "Gujrat",
            //         zipcode: 380009 ,
            //         neighborhood : "CG road"
            //     },
            //     media : {
            //         photos : ["/assets/images/properties/1.jpg"],
            //         videosUrl : "https://www.youtube.com/watch?v=t_dxBfgG0aU&ab_channel=RafiqueMerchant"
            //     }
            // } ,
            //  {
            //     porpertyID : 12003,
            //     agentId : 54686,
            //     name : "1220 Petersham Town" ,
            //     price : 170000,
            //     isFeatured : true ,
            //     description : {
            //         destails : "lorem50",
            //         type : "house",
            //         status : "Sale",
            //         bedrooms : 3 ,
            //         bathrooms : 4,
            //         floor : 2,
            //         garage: 1,
            //         area : 1250 ,
            //         size : 564
            //     },
            //     location : {
            //         address : "Ahmedabad , India 380009",
            //         country : "India",
            //         city : "Ahmedabad",
            //         state : "Gujrat",
            //         zipcode: 380009 ,
            //         neighborhood : "CG road"
            //     },
            //     media : {
            //         photos : ["/assets/images/properties/1.jpg"],
            //         videosUrl : "https://www.youtube.com/watch?v=t_dxBfgG0aU&ab_channel=RafiqueMerchant"
            //     }
            // } ,
            //  {
            //     porpertyID : 12003,
            //     agentId : 54686,
            //     name : "1220 Petersham Town" ,
            //     price : 170000,
            //     isFeatured : true ,
            //     description : {
            //         destails : "lorem50",
            //         type : "house",
            //         status : "Sale",
            //         bedrooms : 3 ,
            //         bathrooms : 4,
            //         floor : 2,
            //         garage: 1,
            //         area : 1250 ,
            //         size : 564
            //     },
            //     location : {
            //         address : "Ahmedabad , India 380009",
            //         country : "India",
            //         city : "Ahmedabad",
            //         state : "Gujrat",
            //         zipcode: 380009 ,
            //         neighborhood : "CG road"
            //     },
            //     media : {
            //         photos : ["/assets/images/properties/1.jpg"],
            //         videosUrl : "https://www.youtube.com/watch?v=t_dxBfgG0aU&ab_channel=RafiqueMerchant"
            //     }
            // } ,
            // {
            //     porpertyID : 12003,
            //     agentId : 54686,
            //     name : "1220 Petersham Town" ,
            //     price : 170000,
            //     isFeatured : true ,
            //     description : {
            //         destails : "lorem50",
            //         type : "house",
            //         status : "Sale",
            //         bedrooms : 3 ,
            //         bathrooms : 4,
            //         floor : 2,
            //         garage: 1,
            //         area : 1250 ,
            //         size : 564
            //     },
            //     location : {
            //         address : "Ahmedabad , India 380009",
            //         country : "India",
            //         city : "Ahmedabad",
            //         state : "Gujrat",
            //         zipcode: 380009 ,
            //         neighborhood : "CG road"
            //     },
            //     media : {
            //         photos : ["/assets/images/properties/1.jpg"],
            //         videosUrl : "https://www.youtube.com/watch?v=t_dxBfgG0aU&ab_channel=RafiqueMerchant"
            //     }
            // } 
            // ],
            datas : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        }
    },
    created(){
        this.getData();
    },
    
    computed : {
        searchUpdate() {
            if(Object.keys({...this.$route.query}).length != 0){
                console.log("Search Api call");
                this.getSearchData();
            }
            else {
                console.log("All property listing API call");
            }
        return this.$route.query
        }
    },
    methods : {
        getData() {
            PropertyServices.getAllProperty(18, 1).then(res => {
                console.log(res.data);
                this.properties = res.data;
            }).catch(err =>{
                console.log(err);
            })
        },

        getSearchData() {
            PropertyServices.getPropertyBySearch().then(res => {
                console.log('from search Api');
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
        },

        handleMoreData() {
            console.log("from perent");
           const newData = [19,20,21,22,23,24,25,26,27,28,29,30]
            this.datas.push(...newData)
        }
    },
    
    mounted(){
        window.scrollTo(0,500)
    }

}
</script>

<style>

</style>