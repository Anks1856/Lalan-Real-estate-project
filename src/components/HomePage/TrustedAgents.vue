<template>
   <section id="agents" class="agents bg-white">
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
                <div class="row">
                    <!-- agent #1 -->
                    <div v-for="agent in agents" :key="agent.name" class="col-xs-12 col-sm-4 col-md-4">
                        <div class="agent">
                            <div class="agent--img">
                                <router-link :to=" 'agent/' + agent.agencyId"> <img :src="agent.agentPhoto" alt="agent" /></router-link>
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
                               <router-link :to=" 'agent/' + agent.agencyId"> <h5 class="agent--title"> {{agent.agentName}} </h5></router-link>
                                <h6 class="agent--position"> {{agent.agentType}} </h6>
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
                                <img src="assets/images/agents/grid/2.png" alt="agent" />
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
                                <img src="assets/images/agents/grid/3.png" alt="agent" />
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
            </div>
        </section>
</template>

<script>
export default {
    data() {
        return {
            agents : [ //get from Api which high rated
                {
                    agencyId : 154525,
                    agentName : "Steve Martin",
                    agentPhoto : ["/assets/images/agents/grid/1.png"],
                    agentType : "Buying Agent"
                },
                {
                    agencyId : 154525,
                    agentName : "Steve Martin",
                    agentPhoto : ["/assets/images/agents/grid/1.png"],
                    agentType : "Buying Agent"
                },
                {
                    agencyId : 154525,
                    agentName : "Steve Martin",
                    agentPhoto : ["/assets/images/agents/grid/1.png"],
                    agentType : "Buying Agent"
                }
            ]
        }
    }

}
</script>

<style>

</style>