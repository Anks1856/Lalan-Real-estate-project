<template>
  <div class="col-xs-12 col-sm-12 col-md-4">
                        <!-- widget property type
=============================-->
                        <div class="widget widget-property">
                            <div class="widget--title">
                                <h5>Property Type</h5>
                            </div>
                            <div class="widget--content">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <router-link :to="{path:'/properties' , query:{type : 'Apartments'}}"><p> Apartments <span>(13)</span></p></router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{path:'/properties' , query:{type : 'Houses'}}"><p> Houses <span>(8)</span></p></router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{path:'/properties' , query:{type : 'Offices'}}"><p> Offices <span>(3)</span></p></router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{path:'/properties' , query:{type : 'Villas'}}"><p> Villas <span>(4)</span></p></router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{path:'/properties' , query:{type : 'Land'}}"><p> Land <span>(2)</span></p></router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- . widget property type end -->

                        <!-- widget property status
=============================-->
                        <div class="widget widget-property">
                            <div class="widget--title">
                                <h5>Property Status</h5>
                            </div>
                            <div class="widget--content">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                       <router-link :to="{path:'/properties' , query:{status : 'For Rent'}}"> <p> For Rent <span>(25)</span></p></router-link>
                                    </li>
                                    <li>
                                       <router-link :to="{path:'/properties' , query:{status : 'For Sale'}}"> <p> For Sale <span>(32)</span></p></router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- . widget property status end -->


                        <!-- widget property city
=============================-->
                        <div class="widget widget-property">
                            <div class="widget--title">
                                <h5>Property By City</h5>
                            </div>
                            <div class="widget--content">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <router-link :to="{path:'/properties' , query:{location : 'London'}}"><p> London <span>(5)</span></p></router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{path:'/properties' , query:{location : 'Sydney'}}"><p> Sydney <span>(10)</span></p></router-link>
                                    </li>   
                                    <li>
                                        <router-link :to="{path:'/properties' , query:{location : 'New Your'}}"><p> New York <span>(4)</span></p></router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{path:'/properties' , query:{location : 'Paris'}}"><p> Paris <span>(7)</span></p></router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- . widget property city end -->


                        <!-- widget featured property
=============================-->
                    {{search}}
                        <featured-property-crousel />

                        <!-- . widget featured property end -->

                    </div>
</template>

<script>
import FeaturedPropertyCrousel from '../FeaturedPropertyCrousel.vue'
export default {
  components: { FeaturedPropertyCrousel },
  data(){
      return {
          //All property or search api call and take only statistics which requireds

      }
  },
  computed : {
      search(){
          return  this.$route.query   
          }
  }

}
</script>

<style>

</style>