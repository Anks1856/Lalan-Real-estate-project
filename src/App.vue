<template>
  <div id="wrapper" class="wrapper clearfix">
    <Navbar />

    <section id="heroSearch" class="hero-search mtop-100 pt-0 pb-0">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="slider--content">
                            <div class="text-center">
                                <h1>Find Your Favorite Property</h1>
                            </div>
                            <form class="mb-0">
                                <div class="form-box search-properties">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-location" id="select-location">
                                        <option>Any Location</option>
                                        <option>Alabama</option>
                                        <option>Alaska</option>
                                        <option>California</option>
                                        <option>Florida</option>
                                        <option>Mississippi</option>
                                        <option>Oregon</option>
                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-type" id="select-type">
                                        <option>Any Type</option>
                                        <option>Apartment</option>
                                        <option>House</option>
                                        <option>Office</option>
                                        <option>Villa</option>
                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-status" id="select-status">
                                        <option>Any Status</option>
                                        <option>For Rent</option>
                                        <option>For Sale</option>
                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <input type="submit" value="Search" name="submit" class="btn btn--primary btn--block">
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3 option-hide">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-beds" id="select-beds">
                                        <option>Beds</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3 option-hide">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select name="select-baths" id="select-baths">
                                        <option>Baths</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-6 option-hide">
                                            <div class="filter mb-30">
                                                <p>
                                                    <label for="amount">Price Range: </label>
                                                    <input id="amount" type="text" class="amount" readonly>
                                                </p>
                                                <div class="slider-range"></div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-12 col-md-12">
                                            <a href="#" class="less--options">More options</a>
                                        </div>
                                    </div>
                                    <!-- .row end -->
                                </div>
                                <!-- .form-box end -->
                            </form>
                        </div>
                    </div>
                    <!-- .container  end -->
                </div>
                <!-- .slider-text end -->
            </div>
            <div class="carousel slider-navs" data-slide="1" data-slide-rs="1" data-autoplay="true" data-nav="true" data-dots="false" data-space="0" data-loop="true" data-speed="800">
                <!-- Slide #1 -->
                <div class="slide--item bg-overlay bg-overlay-dark3">
                    <div class="bg-section">
                        <img src="../public/assets/images/slider/slide-bg/3.jpg" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
                <!-- Slide #2 -->
                <div class="slide--item bg-overlay bg-overlay-dark3">
                    <div class="bg-section">
                        <img src="../public/assets/images/slider/slide-bg/1.jpg" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
                <!-- Slide #3 -->
                <div class="slide--item bg-overlay bg-overlay-dark3">
                    <div class="bg-section">
                        <img src="../public/assets/images/slider/slide-bg/3.jpg" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
            </div>
    </section>

    <section id="properties-carousel" class="properties-carousel pt-90 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="heading heading-2 text-center mb-70">
                        <h2 class="heading--title">Latest Properties</h2>
                        <p class="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
                    </div>
                    <!-- .heading-title end -->
                </div>
                <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="carousel carousel-dots" data-slide="3" data-slide-rs="2" data-autoplay="true" data-nav="false" data-dots="true" data-space="25" data-loop="true" data-speed="800">
                        <!-- .property-item #1 -->
                        <div class="property-item">
                            <div class="property--img">
                                <a href="#">
                        <img src="../public/assets/images/properties/3.jpg" alt="property image" class="img-responsive">
                        <span class="property--status">For Sale</span>
</a>
                            </div>
                            <div class="property--content">
                                <div class="property--info">
                                    <h5 class="property--title"><a href="#">Apartment in Long St.</a></h5>
                                    <p class="property--location">34 Long St, Jersey City, NJ 07305</p>
                                    <p class="property--price">$70,000</p>
                                </div>
                                <!-- .property-info end -->
                                <div class="property--features">
                                    <ul class="list-unstyled mb-0">
                                        <li><span class="feature">Beds:</span><span class="feature-num">2</span></li>
                                        <li><span class="feature">Baths:</span><span class="feature-num">1</span></li>
                                        <li><span class="feature">Area:</span><span class="feature-num">200 sq ft</span></li>
                                    </ul>
                                </div>
                                <!-- .property-features end -->
                            </div>
                        </div>
                        <!-- .property item end -->

                        <!-- .property-item #2 -->
                        <div class="property-item">
                            <div class="property--img">
                                <a href="#">
                        <img src="../public/assets/images/properties/11.jpg" alt="property image" class="img-responsive">
                        <span class="property--status">For Sale</span>
                        </a>
                            </div>
                            <div class="property--content">
                                <div class="property--info">
                                    <h5 class="property--title">Villa in Chicago IL</h5>
                                    <p class="property--location">1445 N State Pkwy, Chicago, IL 60610</p>
                                    <p class="property--price">$235,000</p>
                                </div>
                                <!-- .property-info end -->
                                <div class="property--features">
                                    <ul class="list-unstyled mb-0">
                                        <li><span class="feature">Beds:</span><span class="feature-num">3</span></li>
                                        <li><span class="feature">Baths:</span><span class="feature-num">2</span></li>
                                        <li><span class="feature">Area:</span><span class="feature-num">1120 sq ft</span></li>
                                    </ul>
                                </div>
                                <!-- .property-features end -->
                            </div>
                        </div>
                        <!-- .property item end -->

                        <!-- .property-item #3 -->
                        <div class="property-item">
                            <div class="property--img">
                                <a href="#">
                        <img src="../public/assets/images/properties/5.jpg" alt="property image" class="img-responsive">
                        <span class="property--status">For Rent</span>
                        </a>
                            </div>
                            <div class="property--content">
                                <div class="property--info">
                                    <h5 class="property--title">2750 House in Urban St.</h5>
                                    <p class="property--location">2750 Urban Street Dr, Anderson, IN 46011</p>
                                    <p class="property--price">$1,550<span class="time">month</span></p>
                                </div>
                                <!-- .property-info end -->
                                <div class="property--features">
                                    <ul class="list-unstyled mb-0">
                                        <li><span class="feature">Beds:</span><span class="feature-num">2</span></li>
                                        <li><span class="feature">Baths:</span><span class="feature-num">2</span></li>
                                        <li><span class="feature">Area:</span><span class="feature-num">1390 sq ft</span></li>
                                    </ul>
                                </div>
                                <!-- .property-features end -->
                            </div>
                        </div>
                        <!-- .property item end -->

                        <!-- .property-item #4 -->
                        <div class="property-item">
                            <div class="property--img">
                                <a href="#">
                        <img src="../public/assets/images/properties/4.jpg" alt="property image" class="img-responsive">
                        <span class="property--status">For Sale</span>
                        </a>
                            </div>
                            <div class="property--content">
                                <div class="property--info">
                                    <h5 class="property--title"><a href="#">House in Kent Street</a></h5>
                                    <p class="property--location">127 Kent Street, Sydney, NSW 2000</p>
                                    <p class="property--price">$130,000</p>
                                </div>
                                <!-- .property-info end -->
                                <div class="property--features">
                                    <ul class="list-unstyled mb-0">
                                        <li><span class="feature">Beds:</span><span class="feature-num">2</span></li>
                                        <li><span class="feature">Baths:</span><span class="feature-num">2</span></li>
                                        <li><span class="feature">Area:</span><span class="feature-num">587 sq ft</span></li>
                                    </ul>
                                </div>
                                <!-- .property-features end -->
                            </div>
                        </div>
                        <!-- .property item end -->

                        <!-- .property-item #5 -->
                        <div class="property-item">
                            <div class="property--img">
                                <a href="#">
                        <img src="../public/assets/images/properties/2.jpg" alt="property image" class="img-responsive">
                        <span class="property--status">For Rent</span></a>
                            </div>
                            <div class="property--content">
                                <div class="property--info">
                                    <h5 class="property--title"><a href="#">Villa in Oglesby Ave</a></h5>
                                    <p class="property--location">1035 Oglesby Ave, Chicago, IL 60617</p>
                                    <p class="property--price">$130,000<span class="time">month</span></p>
                                </div>
                                <!-- .property-info end -->
                                <div class="property--features">
                                    <ul class="list-unstyled mb-0">
                                        <li><span class="feature">Beds:</span><span class="feature-num">4</span></li>
                                        <li><span class="feature">Baths:</span><span class="feature-num">3</span></li>
                                        <li><span class="feature">Area:</span><span class="feature-num">800 sq ft</span></li>
                                    </ul>
                                </div>
                                <!-- .property-features end -->
                            </div>
                        </div>
                        <!-- .property item end -->

                        <!-- .property-item #6 -->
                        <div class="property-item">
                            <div class="property--img">
                                <a href="#">
                        <img src="assets/images/properties/3.jpg" alt="property image" class="img-responsive">
                        <span class="property--status">For Sale</span>
</a>
                            </div>
                            <div class="property--content">
                                <div class="property--info">
                                    <h5 class="property--title"><a href="#">Apartment in Long St.</a></h5>
                                    <p class="property--location">34 Long St, Jersey City, NJ 07305</p>
                                    <p class="property--price">$70,000</p>
                                </div>
                                <!-- .property-info end -->
                                <div class="property--features">
                                    <ul class="list-unstyled mb-0">
                                        <li><span class="feature">Beds:</span><span class="feature-num">2</span></li>
                                        <li><span class="feature">Baths:</span><span class="feature-num">1</span></li>
                                        <li><span class="feature">Area:</span><span class="feature-num">200 sq ft</span></li>
                                    </ul>
                                </div>
                                <!-- .property-features end -->
                            </div>
                        </div>
                        <!-- .property item end -->

                    </div>
                    <!-- .carousel end -->
                </div>
                <!-- .col-md-12 -->
            </div>
            <!-- .row -->
        </div>
        <!-- .container -->
    </section>

  </div>
</template>

  
<script>
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>


<style>

</style>
