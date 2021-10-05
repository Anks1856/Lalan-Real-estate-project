<template>
<fragment>
  <section id="page-title" class="page-title bg-overlay bg-overlay-dark2">
            <div class="bg-section">
                <img src="assets/images/page-titles/1.jpg" alt="Background" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                        <div class="title title-1 text-center">
                            <div class="title--content">
                                <div class="title--heading">
                                    <h1>Agency List</h1>
                                </div>
                                <ol class="breadcrumb">
                                    <li><a href="#">Home</a></li>
                                    <li class="active">Agency List</li>
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


        <!-- agency-list
============================================= -->
        <section id="agency-list" class="agency-list">
            <div class="container">
                <div class="row mb-50">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <!-- {{users}} -->
                        <!-- agency item #1 -->
                        <div v-for="user in users" :key="(user.userId).toString()" class="agency-item">
                            <div class="agency--img">
                                <router-link :to="'agency/'+ user.userId" >
                                <img :src="user.userProfilePic" alt="agency" class="img-responsive">
                                </router-link>
                            </div>
                             <!-- <div class="agency--img">
                                <a href="agency-profile.html">
                                <img src="assets/images/agency/2.png" alt="agency" class="img-responsive">
                                </a>
                            </div> -->
                            <!-- .agency-img end -->
                            <div class="agency--content">
                                <div class="clearfix mb-30">
                                    <div class="pull-left">
                                        <h5 class="agency--title"><router-link :to="'agency/'+ user.userId"> {{user.personalDetails.firstName}} </router-link></h5>
                                        <span class="agency--location"><i class="fa fa-map-marker"></i> {{user.personalDetails.address}} </span>
                                    </div>
                                    <div class="pull-right">
                                        <div class="agency--social-links">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-google-plus"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                            <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                        </div>
                                        <span class="Properties--number">15 Property</span>
                                    </div>
                                </div>
                                <div class="agency--details">
                                    <p> {{user.personalDetails.aboutSummary}} </p>
                                </div>
                                <!-- .agency-details end -->
                                <div class="agency--contact">
                                    <ul class="list-unstyled mb-0 clearfix">
                                        <li><i class="fa fa-phone"></i>{{user.personalDetails.phone}} </li>
                                        <li><i class="fa fa-envelope-o"></i>{{user.personalDetails.email}}</li>
                                        <li><i class="fa fa-laptop"></i>{{user.personalDetails.website}}</li>
                                    </ul>
                                </div>
                            </div>
                            <!-- .agency-content end -->
                        </div>
                        <!-- .agency-item end -->

                        <!-- agency item #2 -->
                        
                        <!-- .agency-item end -->

                        <!-- agency item #3 -->
                       
                        <!-- .agency-item end -->

                        <!-- agency item #4 -->
                       
                        <!-- .agency-item end -->
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 clearfix text--center">
                        <ul class="pagination">
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">...</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                            <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
                        </a>
                            </li>
                        </ul>
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
            </div>
        </section>
        <!-- #agency-list end  -->

        <!-- cta #1
============================================= -->
        <call-to-action />
        <!-- #cta1 end -->
        <script type="application/javascript" defer src="/assets/js/functions.js"></script>

</fragment>
</template>

<script>
import CallToAction from '../components/CallToAction.vue'
export default {
  components: { CallToAction },
    data() {
        return {
            users : [
                {
                userId : 1542,
                userProfilePic : "/assets/images/agency/1.png" , 
                isAgent : true , //image object or name
                // agentId : 125125,

                isAgency : true ,
                // agencyId : 124578 ,
                isUnderAgency : false, // if not agency then check
                personalDetails : {
                    firstName : "Modern House",
                    lastName : "",
                    address : "153 Sandra Cir, Westfield, NJ 07090",
                    // fullname , agent type are derived property
                    email : "steve.martin@gmail.com",
                    phone : '(950) 491-570-180',
                    mobile : '(+20) 220-145-6330',
                    website : 'modernhouse.com',
                    fax : '(+44) 161-430-1620',
                    aboutSummary : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magrem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                },
                hasAgents : [150150 , 120120] , 
                properties : [12003] , // combined properties of all agents
                },
                {
                userId : 1542,
                userProfilePic : "/assets/images/agency/1.png" , 
                isAgent : true , //image object or name
                // agentId : 125125,

                isAgency : true ,
                // agencyId : 124578 ,
                isUnderAgency : false, // if not agency then check
                personalDetails : {
                    firstName : "Modern House",
                    lastName : "",
                    address : "153 Sandra Cir, Westfield, NJ 07090",
                    // fullname , agent type are derived property
                    email : "steve.martin@gmail.com",
                    phone : '(950) 491-570-180',
                    mobile : '(+20) 220-145-6330',
                    website : 'modernhouse.com',
                    fax : '(+44) 161-430-1620',
                    aboutSummary : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                },
                hasAgents : [150150 , 120120] , 
                properties : [12003] , // combined properties of all agents
                },
                {
                userId : 1542,
                userProfilePic : "/assets/images/agency/1.png" , 
                isAgent : true , //image object or name
                // agentId : 125125,

                isAgency : true ,
                // agencyId : 124578 ,
                isUnderAgency : false, // if not agency then check
                personalDetails : {
                    firstName : "Modern House",
                    lastName : "",
                    address : "153 Sandra Cir, Westfield, NJ 07090",
                    // fullname , agent type are derived property
                    email : "steve.martin@gmail.com",
                    phone : '(950) 491-570-180',
                    mobile : '(+20) 220-145-6330',
                    website : 'modernhouse.com',
                    fax : '(+44) 161-430-1620',
                    aboutSummary : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore mrem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit"
                },
                hasAgents : [150150 , 120120] , 
                properties : [12003] , // combined properties of all agents
                },
            ]
        }
    },
    // need data which has isAgency = true 
}
</script>

<style>

</style>