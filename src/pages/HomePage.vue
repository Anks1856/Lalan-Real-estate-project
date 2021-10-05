<template>
    <fragment>
        <!-- Hero Search
============================================= -->
       <Hero />
        <!-- #property-single-slider end -->

        <!-- properties-carousel
============================================= -->
        <PropertyCrousel title="Latest Properties" description="Duis aute irure dolor in reprehed in volupted velit esse dolore" :properties="properties"/>
        <!-- #properties-carousel  end  -->

        <!-- Feature
============================================= -->
        <section id="feature" class="feature feature-1 text-center bg-white pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="heading heading-2 text-center mb-70">
                            <h2 class="heading--title">Simple Steps</h2>
                            <p class="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
                        </div>
                        <!-- .heading-title end -->
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
                <div class="row">
                    <!-- feature Panel #1 -->
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="feature-panel">
                            <div class="feature--icon">
                                <img src="assets/images/features/icons/5.png" alt="icon img">
                            </div>
                            <div class="feature--content">
                                <h3>Search For Real Estates</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eule pariate.</p>
                            </div>
                        </div>
                        <!-- .feature-panel end -->
                    </div>
                    <!-- .col-md-4 end -->
                    <!-- feature Panel #2 -->
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="feature-panel">
                            <div class="feature--icon">
                                <img src="assets/images/features/icons/6.png" alt="icon img">
                            </div>
                            <div class="feature--content">
                                <h3>Select Your Favorite</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eule pariate.</p>
                            </div>
                        </div>
                        <!-- .feature-panel end -->
                    </div>
                    <!-- .col-md-4 end -->
                    <!-- feature Panel #3 -->
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="feature-panel">
                            <div class="feature--icon">
                                <img src="assets/images/features/icons/7.png" alt="icon img">
                            </div>
                            <div class="feature--content">
                                <h3>Take Your Key</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eule pariate.</p>
                            </div>
                        </div>
                        <!-- .feature-panel end -->
                    </div>
                    <!-- .col-md-4 end -->
                </div>
                <!-- .row end -->
            </div>
            <!-- .container end -->
        </section>
        <!-- .feature end -->
        <!-- city-property
============================================= -->
        <city-wise-property />
        <!-- .city-property end -->

        <!-- agents
============================================= -->
       <trusted-agents />
        <!-- #agents end  -->

        <!-- cta #1
============================================= -->
       <call-to-action />
        <!-- #cta1 end -->

        <!-- Footer #1
============================================= -->

        <script type="application/javascript" defer src="/assets/js/functions.js"></script>
        </fragment>
</template>

<script>
import CallToAction from '../components/CallToAction.vue';
import CityWiseProperty from '../components/HomePage/CityWiseProperty.vue';
import Hero from '../components/HomePage/Hero.vue';
import TrustedAgents from '../components/HomePage/TrustedAgents.vue';
import PropertyCrousel from '../components/PropertyCrousel.vue';


export default {
    components : {
        Hero ,
        PropertyCrousel,
        CallToAction,
        CityWiseProperty,
        TrustedAgents

    },
    data() {
        return {
             properties : [ // data from props  call 
                {
                porpertyID : 15433,
                agentId : 54686,
                name : "1220 Petersham Town" ,
                price : 170000,
                isFeatured : true ,
                description : {
                    detailSummary1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat nulla pariatur.",
                    detailSummary2 : "Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.",
                    type : "house",
                    status : "Sale",
                    rooms : 6 ,
                    bedrooms : 3 ,
                    bathrooms : 4 ,
                    floors : 2 ,
                    garage: 1 ,
                    area : 1250 ,
                    size : 564
                },
                floorPlans : [
                    {
                        floorId : "floor1",
                        floorNo : "Frist Floor",
                        size : 653 ,
                        rooms : 3 , // need to validate
                        baths : 4 ,
                        detailSummary : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugia",
                        planImage : ["/assets/images/property-single/1.png"] // image object or name
                    },
                    {
                        floorId : "floor2",
                        floorNo : "Second Floor",
                        size : 653 ,
                        rooms : 3 , // need to validate
                        baths : 4 ,
                        detailSummary : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugia",
                        planImage : ["/assets/images/property-single/1.png"] // image object or name
                    }
                ],
                features : ["Center Cooling","Fire Alarm" ,"Pet Friendly","Gym" , "Pool" , "Balcony" , "Modern Kitchen" , "Storage" , "Heating"  , "Laundry" , "Elevator" , "Dish Washer"],
                location : {
                    address : "Ahmedabad , India 380009",
                    country : "India",
                    city : "Ahmedabad",
                    state : "Gujrat",
                    zipcode: 380009 ,
                    neighborhood : "CG road"
                },
                media : {
                    photos : ["/assets/images/properties/1.jpg"],
                    videoUrl : "https://www.youtube.com/watch?v=t_dxBfgG0aU&ab_channel=RafiqueMerchant"
                }
            },
            ]
        }

    }
}
</script>

<style>

</style>