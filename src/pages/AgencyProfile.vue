<template>
  <fragment>
       <section id="page-title" class="page-title bg-overlay bg-overlay-dark2">
            <div class="bg-section">
                <img src="/assets/images/page-titles/1.jpg" alt="Background" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                        <div class="title title-1 text-center">
                            <div class="title--content">
                                <div class="title--heading">
                                    <h1>Agency Profile</h1>
                                </div>
                                <ol class="breadcrumb">
                                    <li><a href="#">Home</a></li>
                                    <li class="active">Agency Profile</li>
                                </ol>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <!-- .title end -->
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
            </div>
            <!-- .container end -->
        </section>
        <!-- #page-title end -->

    {{user}}
        <!-- agency-profile 
============================================= -->
        <section id="agency-profile" class="agency-profile bg-white pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-5 col-md-5">
                        <div class="agency--profile-img">
                            <img :src="user.userProfilePic" alt="agency" />
                        </div>
                    </div>
                    <!-- .col-md-5 end -->
                    <div class="col-xs-12 col-sm-7 col-md-5 col-md-offset-1">
                        <div class="agency--profile-content">

                            <div class="agency--info">
                                <h5 class="agency--title"> {{user.agencyDetails.agencyName}} </h5>
                                <p class="agency--location"><i class="fa fa-map-marker"></i> {{user.agencyDetails.address}} </p>
                            </div>
                            <!-- .agency-info end -->
                            <div class="agency--profile-contact">
                                <ul class="list-unstyled mb-30 clearfix">
                                    <li><span>Phone:</span> {{user.personalDetails.phone}} </li>
                                    <li><span>Properties Listed:</span>15</li>
                                    <li><span>Mobile:</span>{{user.personalDetails.mobile}}</li>
                                    <li><span>agencys:</span>6</li>
                                    <li><span>Fax:</span>{{user.personalDetails.fax}}</li>
                                    <li><span>License:</span> {{user.agencyDetails.license}} </li>
                                    <li><span>Email:</span>  {{user.personalDetails.email}} </li>
                                    <li><span>Tax Number:</span> {{user.agencyDetails.license}} </li>
                                    <li><span>Languages:</span> {{user.agencyDetails.language.toString()}} </li>
                                    <li><span>Website:</span>{{user.personalDetails.website}}</li>
                                </ul>
                            </div>
                            <!-- .agency-profile-contact end -->
                            <div class="agency--social-links">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-google-plus"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- .col-md-5 end -->
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="agency--profile-details">
                            <p> {{user.personalDetails.aboutSummary}} </p>
                            <!-- <p></p> -->
                        </div>
                        <!-- .agency-profile-details end -->
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
            </div>
            <!-- .container -->
        </section>
        <!-- #agency-profile  end  -->


        <!-- properties-carousel
============================================= -->
        <PropertyCrousel :properties="properties" title="Properties List"/>

        
        <!-- #properties-carousel  end  -->


        <!-- #agents
============================================= -->
        <section id="agents" class="agents bg-white pb-0">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="heading mb-70">
                            <h2 class="heading--title">Our Agents</h2>
                        </div>
                        <!-- .heading end -->
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
                <div class="row mb-100">
                    <!-- agent #1 -->
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="agent">
                            <div class="agent--img">
                                <img src="/assets/images/agents/grid/1.png" alt="agent" />
                                <div class="agent--details">
                                    <p>Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                                    <div class="agent--social-links">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-dribbble"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <!-- .agent-img end -->
                            <div class="agent--info">
                                <h5 class="agent--title">Steve Martin</h5>
                                <h6 class="agent--position">Buying Agent</h6>
                            </div>
                            <!-- .agent-info end -->
                        </div>
                        <!-- .agent end -->
                    </div>
                    <!-- .col-md-4 end -->
                    <!-- agent #2 -->
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="agent">
                            <div class="agent--img">
                                <img src="/assets/images/agents/grid/2.png" alt="agent" />
                                <div class="agent--details">
                                    <p>Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                                    <div class="agent--social-links">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-dribbble"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <!-- .agent-img end -->
                            <div class="agent--info">
                                <h5 class="agent--title">Mark Smith</h5>
                                <h6 class="agent--position">Selling Agent</h6>
                            </div>
                            <!-- .agent-info end -->
                        </div>
                        <!-- .agent end -->
                    </div>
                    <!-- .col-md-4 end -->
                    <!-- agent #3 -->
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="agent">
                            <div class="agent--img">
                                <img src="/assets/images/agents/grid/3.png" alt="agent" />
                                <div class="agent--details">
                                    <p>Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.</p>
                                    <div class="agent--social-links">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-dribbble"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <!-- .agent-img end -->
                            <div class="agent--info">
                                <h5 class="agent--title">Ryan Printz</h5>
                                <h6 class="agent--position">Real Estate Broker</h6>
                            </div>
                            <!-- .agent-info end -->
                        </div>
                        <!-- .agent end -->
                    </div>
                    <!-- .col-md-4 end -->
                </div>
                <!-- .row end -->
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <!-- horizontal-line end  -->
                        <hr class="m-0">
                        <!-- horizontal-line end  -->
                    </div>
                </div>
            </div>
        </section>
        <!-- #agents end  -->


        <!-- Contact #2
============================================= -->
        <contact-us />
        <!-- #contact2  end -->

        <!-- cta #1
============================================= -->
        <call-to-action />

        <!-- #cta  end -->

        <script type="application/javascript" defer src="/assets/js/functions.js"></script>

  </fragment>
</template>

<script>
import CallToAction from '../components/CallToAction.vue';
import ContactUs from '../components/ContactUs.vue';
import PropertyCrousel from '../components/PropertyCrousel.vue';

export default {
    components : {
        PropertyCrousel,
        ContactUs,
        CallToAction
    },
    data() {
        return {
            user : {
                userId : 1542,
                userProfilePic : "/assets/images/agency/2.jpg" , 
                isAgent : true , //image object or name
                isAgency : true ,
                isUnderAgency : false, // if not agency then check
                personalDetails : {
                    firstName : "", // agent name ...
                    lastName : "",
                    // fullname , agent type are derived property
                    email : "steve.martin@gmail.com",
                    phone : '(950) 491-570-180',
                    mobile : '(+20) 220-145-6330',
                    website : 'modernhouse.com',
                    fax : '(+44) 161-430-1620',
                    aboutSummary : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magrem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magrem ipsum dolor sit amet, consectetur adipisicing elit, aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                },
                agencyDetails :{ // if isAgency = true then =>
                    agencyName : "Modern House" ,
                    address : "153 Sandra Cir, Westfield, NJ 07090",
                    agency : 6 ,
                    license : "RE511U0" ,
                    taxNumber : "802442" ,
                    language : ["English", "Arabic"],
                    agents : [150150 , 120120] , 
                },
                    // properties : [12003] , // agent's property  
                },
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