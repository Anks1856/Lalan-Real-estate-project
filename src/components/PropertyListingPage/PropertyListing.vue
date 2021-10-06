<template>
  <div class="col-xs-12 col-sm-12 col-md-8">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="properties-filter clearfix">
                                    <div class="select--box pull-left">
                                        <label>Sort by:</label>
                                        <i class="fa fa-angle-up"></i>
                                        <i class="fa fa-angle-down"></i>
                                        <select>
								<option selected="" value="Default">Default Sorting</option>
								<option value="Larger">Newest Items</option>
								<option value="Larger">oldest Items</option>
								<option value="Larger">Hot Items</option>
								<option value="Small">Highest Price</option>
								<option value="Medium">Lowest Price</option>
							</select>
                                    </div>
                                    <!-- .select-box -->
                                    <div class="view--type pull-right">
                                        <a id="switch-list" href="#" class="active"><i class="fa fa-th-list"></i></a>
                                        <a id="switch-grid" href="#" class=""><i class="fa fa-th-large"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="properties properties-list">
                                <!-- .col-md-12 end -->
                                <div class="col-xs-12 col-sm-12 col-md-12" v-for="property in properties" :key="property.porpertyID">
                                    <!-- .property-item #1 -->
                                   <!-- <> -->
                                     <single-property :property="property"/>
                                </div>
                                <!-- .property item end -->

                                <!-- .property-item #2 -->
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="property-item">
                                        <div class="property--img">
                                            <a href="property-single-gallery.html">
                                <img src="assets/images/properties/6.jpg" alt="property image" class="img-responsive">
								</a>
                                            <span class="property--status">For Rent</span>
                                        </div>
                                        <div class="property--content">
                                            <div class="property--info">
                                                <h5 class="property--title"><a href="property-single-gallery.html">Apartment For Rent</a></h5>
                                                <p class="property--location">1609 N Richmond St, Chicago, IL 60647</p>
                                                <p class="property--price">$900<span class="time">month</span></p>
                                            </div>
                                            <div class="property--features">
                                                <ul class="list-unstyled mb-0">
                                                    <li><span class="feature">Beds:</span><span class="feature-num">1</span></li>
                                                    <li><span class="feature">Baths:</span><span class="feature-num">1</span></li>
                                                    <li><span class="feature">Area:</span><span class="feature-num">500 sq ft</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- .property item end -->

                                <!-- .property-item #3 -->
                                <!-- <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="property-item">
                                        <div class="property--img">
                                            <a href="property-single-gallery.html">
                                <img src="assets/images/properties/5.jpg" alt="property image" class="img-responsive">
								</a>
                                            <span class="property--status">For Rent</span>
                                        </div>
                                        <div class="property--content">
                                            <div class="property--info">
                                                <h5 class="property--title"><a href="property-single-gallery.html">2750 House in Urban St.</a></h5>
                                                <p class="property--location">2750 Urban Street Dr, Anderson, IN 46011</p>
                                                <p class="property--price">$1.550<span class="time">month</span></p>
                                            </div>
                                            <div class="property--features">
                                                <ul class="list-unstyled mb-0">
                                                    <li><span class="feature">Beds:</span><span class="feature-num">2</span></li>
                                                    <li><span class="feature">Baths:</span><span class="feature-num">1</span></li>
                                                    <li><span class="feature">Area:</span><span class="feature-num">1390 sq ft</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- .property item end -->

                                <!-- .property-item #4 -->
                                <!-- <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="property-item">
                                        <div class="property--img">
                                            <a href="property-single-gallery.html">
                                <img src="assets/images/properties/12.jpg" alt="property image" class="img-responsive">
								</a>
                                            <span class="property--status">For Rent</span>
                                        </div>
                                        <div class="property--content">
                                            <div class="property--info">
                                                <h5 class="property--title"><a href="property-single-gallery.html">Modern Office For Rent</a></h5>
                                                <p class="property--location">2003 Sheffield Ave, Anderson, IN 46011</p>
                                                <p class="property--price">$530<span class="time">month</span></p>
                                            </div>
                                            <div class="property--features">
                                                <ul class="list-unstyled mb-0">
                                                    <li><span class="feature">Beds:</span><span class="feature-num">0</span></li>
                                                    <li><span class="feature">Baths:</span><span class="feature-num">1</span></li>
                                                    <li><span class="feature">Area:</span><span class="feature-num">150 sq ft</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- .property item end -->

                                <!-- .property-item #5 -->
                                <!-- <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="property-item">
                                        <div class="property--img">
                                            <a href="property-single-gallery.html">
                                <img src="assets/images/properties/3.jpg" alt="property image" class="img-responsive">
								</a>
                                            <span class="property--status">For Sale</span>
                                        </div>
                                        <div class="property--content">
                                            <div class="property--info">
                                                <h5 class="property--title"><a href="property-single-gallery.html">Apartment in Long St.</a></h5>
                                                <p class="property--location">34 Long St, Jersey City, NJ 07305</p>
                                                <p class="property--price">$70,000</p>
                                            </div> -->
                                            <!-- .property-info end -->
                                            <!-- <div class="property--features">
                                                <ul class="list-unstyled mb-0">
                                                    <li><span class="feature">Beds:</span><span class="feature-num">2</span></li>
                                                    <li><span class="feature">Baths:</span><span class="feature-num">1</span></li>
                                                    <li><span class="feature">Area:</span><span class="feature-num">200 sq ft</span></li>
                                                </ul>
                                            </div> -->
                                            <!-- .property-features end -->
                                        <!-- </div>
                                    </div>
                                </div> -->
                                <!-- .property item end -->
                            </div>
                            {{currentPropertyPage}} ||NP {{numberOfPage}}  || cPage {{currentPage}}
                            <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-50">
                                <ul class="pagination">
                                    <!-- class="active" -->
                                    <li v-for="i in 3" :key="i" :class="currentPage == i && 'active'">  <p @click="handleClick(i)">{{i}}</p> </li>
                                    <!-- <li><p> {{currentPage - 1}} </p></li> -->
                                    <!-- <li><p> {{currentPage}} </p></li> -->
                                    <!-- <li><p> {{currentPage + 1}} </p></li> -->
                                    <!-- <li><p>3</p></li> -->
                                    <li><p>...</p></li>
                                    <li v-if="currentPage > 5"><p @click="handleClick(currentPage-1)"> {{currentPage - 1}} </p></li>
                                    <li :class="currentPage > 3 && 'active' ">
                                        <p  aria-label="Next" @click="handleNext">
                                            <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <!-- .col-md-12 end -->
                        </div>
                        <!-- .row -->
  </div>
</template>

<script>
import SingleProperty from './SingleProperty.vue'
export default {
  components: { SingleProperty },
    props : {
        properties : Array ,
        datas : Array
    },
    data() {
        return {
            currentPage : 1 ,
        }
    },
    computed : {    
        currentPropertyPage () {
            return this.datas.slice((this.currentPage-1)*6,6*this.currentPage)
        },
        numberOfPage(){
            return this.properties.length / 3
        },
        
    },
    methods : {
        handleClick(i) {
            console.log('clicked' ,i);
            this.currentPage = i;
            console.log(this.currentPage);
        },
        handleNext() {
            if(this.currentPage % 3 == 0){
                console.log('Api call');
                this.$emit('getMoreData')
            }
            this.currentPage = this.currentPage + 1;
            console.log(this.currentPage);
        }
    }


}
</script>

<style>

</style>