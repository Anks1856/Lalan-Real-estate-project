<template>
   <!-- <div id="wrapper" class="wrapper clearfix"> -->
<fragment>
<!-- Page Title #1
============================================ -->
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
                            <h1>Agent Profile</h1>
                        </div>
                        <ol class="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li class="active">Agent Profile</li>
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


<!-- agent-profile 
============================================= -->
<section id="agent-profile" class="agent-profile bg-white">
    <div class="container">
        {{user}}
        <div class="row">
            <div class="col-xs-12 col-sm-5 col-md-5">
                <div class="agent--profile-img">
                    <img :src="user.userProfilePic" alt="agent" />
                </div>
            </div>
            <!-- .col-md-5 end -->
            <div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                <div class="agent--profile-content">
                    <div class="agent--info">
                        <h5 class="agent--title"> {{user.personalDetails.firstName}} {{user.personalDetails.lastName}} </h5>
                        <p class="agent--position">Buying Agent</p>
                    </div>
                    <!-- .agent-info end -->
                    <div class="agent--profile-details">
                        <p> {{user.personalDetails.aboutSummary}} </p>
                    </div>
                    <!-- .agent-profile-details end -->
                    <div class="agent--profile-contact">
                        <ul class="list-unstyled mb-20 clearfix">
                            <li><span>Phone:</span> {{user.personalDetails.phone}} </li>
                            <li><span>Email:</span> {{user.personalDetails.email}}
                            <!-- <a href="https://demo.zytheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="592a2c2929362b2d193c21383429353c773a3634">[email&#160;protected]</a> -->
                            </li>
                            <li><span>Mobile:</span> {{user.personalDetails.mobile}} </li>
                            <li><span>Website:</span>{{user.personalDetails.website}}</li>
                            <li><span>Fax:</span>{{user.personalDetails.fax}}</li>
                        </ul>
                    </div>
                    <!-- .agent-profile-contact end -->
                    <div class="agent--social-links">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-pinterest-p"></i></a>
                    </div>
                    <!-- .agent-social-links end -->
                </div>
            </div>
            <!-- .col-md-5 end -->
        </div>
        <!-- .row end -->
    </div>
    <!-- .container -->
</section>
<!-- #agent-profile  end  -->


<!-- properties-carousel
============================================= -->
<PropertyCrousel title="My Properties" :properties="properties" />


<!-- #properties-carousel  end  -->

<!-- Contact #2
============================================= -->
    <contact-us />
<!-- #contact2  end -->

<!-- cta #1
============================================= -->
<call-to-action />
<!-- #cta1 end -->


<!-- Footer #1
============================================= -->

<script type="application/javascript" defer src="/assets/js/functions.js"></script>
</fragment>
<!-- </div> -->
</template>

<script>
import CallToAction from '../components/CallToAction.vue';
import ContactUs from '../components/ContactUs.vue';
import PropertyCrousel from '../components/PropertyCrousel.vue';

export default {
    components : {
        PropertyCrousel ,
        ContactUs,
        CallToAction ,        
    },
    data() {
        return {
            user : {
                userProfilePic : "/assets/images/agents/single/1.jpg" ,  //image object or name
                isAgent : true ,
                agentId : 125125,
                personalDetails : {
                    firstName : "Steve",
                    lastName : "Martin",
                    // fullname , agent type are derived property
                    email : "steve.martin@gmail.com",
                    phone : '(950) 491-570-180',
                    mobile : '(+20) 220-145-6330',
                    website : 'modernhouse.com',
                    fax : '(+44) 161-430-1620',
                    aboutSummary : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                },
                myProperties : [12003] , // if isAgent = true

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
            // prop,
        }
    },
    //need to find agent wich name is in URL 
 mounted(){
        window.scrollTo(0,0)
    }

}

</script>

<style>

</style>