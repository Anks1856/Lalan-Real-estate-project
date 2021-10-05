<template>
   <div class="widget widget-featured-property">
                            <div class="widget--title">
                                <h5>Featured Properties</h5>
                            </div>
                            <div class="widget--content">
                                <div class="carousel carousel-dots" data-slide="1" data-slide-rs="1" data-autoplay="true" data-nav="false" data-dots="true" data-space="25" data-loop="true" data-speed="800">
                                    <!-- .property-item #1 -->
                                    <div v-for="property in properties" :key="property" class="property-item">
                                        <div class="property--img">
                                          <router-link :to=" '/property/'+ property.porpertyID">  <img :src="property.media.photos" alt="property image" class="img-responsive"> </router-link>
                                            <span class="property--status">For {{property.description.status}} </span>
                                        </div>
                                        <div class="property--content">
                                            <div class="property--info">
                                               <router-link :to=" '/property/'+ property.porpertyID"> <h5 class="property--title"> {{property.name}} </h5> </router-link>

                                                <p class="property--location"> {{property.location.address}} </p>
                                                <p class="property--price">$ {{property.price}} <span class="time">month</span></p>
                                            </div>
                                            <!-- .property-info end -->
                                        </div>
                                    </div>
                                    <!-- .property item end -->
                                    <!-- .property-item #2 -->
                                    <div class="property-item">
                                        <div class="property--img">
                                            <img src="/assets/images/properties/2.jpg" alt="property image" class="img-responsive">
                                            <span class="property--status">For Rent</span>
                                        </div>
                                        <div class="property--content">
                                            <div class="property--info">
                                                <h5 class="property--title"><a href="#">Villa in Oglesby Ave</a></h5>
                                                <p class="property--location">1035 Oglesby Ave, Chicago, IL 60617</p>
                                                <p class="property--price">$130,000<span class="time">month</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- .property item end -->
                                    <!-- .property-item #3 -->
                                    <!-- <div class="property-item">
                                        <div class="property--img">
                                            <img src="/assets/images/properties/3.jpg" alt="property image" class="img-responsive">
                                            <span class="property--status">For Sale</span>
                                        </div>
                                        <div class="property--content">
                                            <div class="property--info">
                                                <h5 class="property--title"><a href="#">Apartment in Long St.</a></h5>
                                                <p class="property--location">34 Long St, Jersey City, NJ 07305</p>
                                                <p class="property--price">$70,000</p>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- .property item end -->
                                </div>
                                <!-- .carousel end -->
                            </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
             properties : [  
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
