<template>
  <section id="city-property" class="city-property text-center pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="heading heading-2 text-center mb-70">
                            <h2 class="heading--title">Property By City</h2>
                            <p class="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
                        </div>
                        <!-- .heading-title end -->
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
                <div class="row">
                    <!-- City #1 -->
                    <div class="col-xs-12 col-sm-8 col-md-8">
                        <div class="property-city-item">
                            <div class="property--city-img">
                                <a href="#">
                        <img :src="cities[0].famousImage" alt="city" class="img-responsive">
                        <div class="property--city-overlay">
                            <div class="property--item-content">
                                <h5 class="property--title"> {{cities[0].name}}   </h5>
                                <p class="property--numbers"> {{cities[0].totalProperties}} Properties </p>
                            </div>
                        </div>
						</a>
                            </div>
                            <!-- .property-city-img end -->
                        </div>
                        <!-- . property-city-item end -->
                    </div>
                    <!-- .col-md-8 end -->
                    <!-- City #2 -->
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="property-city-item">
                            <div class="property--city-img">
                                <a href="#">
                        <img :src="cities[1].famousImage" alt="city" class="img-responsive">
                        <div class="property--city-overlay">
                            <div class="property--item-content">
                                <h5 class="property--title"> {{cities[1].name}} </h5>
                                <p class="property--numbers"> {{cities[1].totalProperties}} Properties</p>
                            </div>
                        </div>
						</a>
                            </div>
                            <!-- .property-city-img end -->
                        </div>
                        <!-- . property-city-item end -->
                    </div>
                    <!-- .col-md-8 end -->
                </div>
                <!-- .row end -->
                <div class="row">

                    <!-- City #3 -->
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="property-city-item">
                            <div class="property--city-img">
                                <a href="#">
                        <img :src="cities[2].famousImage" alt="city" class="img-responsive">
                        <div class="property--city-overlay">
                            <div class="property--item-content">
                                <h5 class="property--title"> {{cities[2].name}} </h5>
                                <p class="property--numbers"> {{cities[2].totalProperties}} Properties</p>
                            </div>
                        </div>
						</a>
                            </div>
                            <!-- .property-city-img end -->
                        </div>
                        <!-- . property-city-item end -->
                    </div>
                    <!-- .col-md-8 end -->
                    <!-- City #4 -->
                    <div class="col-xs-12 col-sm-8 col-md-8">
                        <div class="property-city-item">
                            <div class="property--city-img">
                                <a href="#">
                        <img :src="cities[3].famousImage" alt="city" class="img-responsive">
                        <div class="property--city-overlay">
                            <div class="property--item-content">
                                <h5 class="property--title"> {{cities[3].name}} </h5>
                                <p class="property--numbers"> {{cities[3].totalProperties}} Properties</p>
                            </div>
                        </div>
						</a>
                            </div>
                            <!-- .property-city-img end -->
                        </div>
                        <!-- . property-city-item end -->
                    </div>
                    <!-- .col-md-8 end -->
                </div>
                <!-- .row end -->
            </div>
            <!-- .container end -->
        </section>
</template>

<script>
export default {
    data() {
        return {
            cities : [
                {
                    name : "New York",
                    totalProperties : 18,
                    famousImage: ["/assets/images/properties/city/1.jpg"] 
                },
                {
                    name : "Ahmedabad",
                    totalProperties : 14,
                    famousImage: ["assets/images/properties/city/2.jpg"]
                },
                {
                    name : "Manhatten",
                    totalProperties : 15 ,
                    famousImage: ["/assets/images/properties/city/3.jpg"]
                },
                {
                    name : "Los Angeles",
                    totalProperties : 10 ,
                    famousImage: ["/assets/images/properties/city/4.jpg"]
                }
            ]
        }
    }
}
</script>

<style>

</style>