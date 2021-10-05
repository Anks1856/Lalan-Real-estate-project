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
                                    <h1>Agents</h1>
                                </div>
                                <ol class="breadcrumb">
                                    <li><a href="#">Home</a></li>
                                    <li class="active">Agents</li>
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


        <!-- agents
============================================= -->
        <section id="agents" class="agents bg-white pt-90">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="heading heading-2 text-center mb-70">
                            <h2 class="heading--title">Trusted Agents</h2>
                            <p class="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
                        </div>
                        <!-- .heading end -->
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
                <div  class="row mb-55">
                
                    <!-- agent #1 -->
                    <div v-for="user in users" :key="user.agentId" class="col-xs-12 col-sm-4 col-md-4">
                        <div class="agent">
                            <div class="agent--img">
                              <router-link :to="'Agent/'+ user.personalDetails.firstName +'-'+user.personalDetails.lastName ">  <img :src="user.userProfilePic" alt="agent" /> </router-link>
                                <div class="agent--details">
                                    <p> {{user.personalDetails.aboutSummary}} </p>
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
                                <h5 class="agent--title"> {{user.personalDetails.firstName}} {{user.personalDetails.lastName}} </h5>
                                <h6 class="agent--position">Buying Agent</h6>
                            </div>
                            <!-- .agent-info end -->
                        </div>
                        <!-- .agent end -->
                    </div>
                    <!-- .col-md-4 end -->
                    <!-- agent #2 -->
                    <!-- <div class="col-xs-12 col-sm-4 col-md-4">
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
                            <div class="agent--info">
                                <h5 class="agent--title">Mark Smith</h5>
                                <h6 class="agent--position">Selling Agent</h6>
                            </div>
                        </div>
                    </div> -->
                    <!-- .col-md-4 end -->
                    <!-- agent #3 -->
                    <!-- <div class="col-xs-12 col-sm-4 col-md-4">
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
                            <div class="agent--info">
                                <h5 class="agent--title">Ryan Printz</h5>
                                <h6 class="agent--position">Real Estate Broker</h6>
                            </div>
                        </div>
                    </div> -->
                    <!-- .col-md-4 end -->
                </div>
                <!-- .row end -->
                <!-- need to show second row dynamic -->
                <!-- .row end -->
            </div>
            <!-- .container -->
        </section>
        <!-- #agents end  -->

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
import CallToAction from '../components/CallToAction.vue'
export default {
    components : {CallToAction},
    data() {
        return {
            users : [
                {
                userProfilePic : "/assets/images/agents/grid/1.png" , 
                isAgent : true , //image object or name
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
            {
                userProfilePic : "/assets/images/agents/grid/2.png" ,  //image object or name
                isAgent : true ,
                agentId : 150150,
                personalDetails : {
                    firstName : "John",
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
            {
                userProfilePic : "/assets/images/agents/grid/2.png" ,  //image object or name
                isAgent : true ,
                agentId : 150150,
                personalDetails : {
                    firstName : "John",
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
            {
                userProfilePic : "/assets/images/agents/grid/2.png" ,  //image object or name
                isAgent : true ,
                agentId : 150150,
                personalDetails : {
                    firstName : "John",
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
           
            ]
        }
    }
}
</script>

<style>

</style>