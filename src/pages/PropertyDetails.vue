<template>
  <fragment>
      <section id="property-single-slider" class="property-single-slider pt-0 pb-0">
            
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <div class="slider--text">
                            <div class="property--info clearfix">
                                <div class="pull-left">
                                    <h5 class="property--title">  {{property.name}}</h5>
                                    <p class="property--location"><i class="fa fa-map-marker"></i>{{property.location.address}}</p>
                                </div>
                                <div class="pull-right">
                                    <div class="property--status mb-20">For {{property.description.status}}</div>
                                    <p class="property--price text-theme">${{property.price}} <span></span></p>
                                </div>
                            </div>
                            <!-- .property-info end -->
                            <div class="property--meta clearfix">
                                <div class="pull-left">
                                    <ul class="list-unstyled list-inline mb-0">
                                        <li>
                                            Property ID:<span class="value"> {{property.porpertyID}}  </span>
                                        </li>
                                        <li>
                                            Add to favorites:<span class="value"> <i class="fa fa-heart-o"></i></span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pull-right">
                                    <div class="property--meta-share">
                                        <span class="share--title">share</span>
                                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                        <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                        <a href="#" class="pinterest"><i class="fa fa-pinterest-p"></i></a>
                                    </div>
                                    <!-- .property-meta-share end -->
                                </div>
                            </div>
                            <!-- .property-info end -->
                        </div>
                    </div>
                </div>
                <!-- .container end -->
            </div>
            <!-- .slider-text end -->
          
            <div class="carousel slider-navs" data-slide="1" data-slide-rs="1" data-autoplay="true" data-nav="true" data-dots="false" data-space="0" data-loop="true" data-speed="800">
                <!-- Slide #1 -->
                <div class="slide--item bg-overlay bg-overlay-gradient">
                    <div class="bg-section">
                        <img src="/assets/images/slider/slide-bg/1.jpg" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
                <!-- Slide #2 -->
                <div class="slide--item bg-overlay bg-overlay-gradient">
                    <div class="bg-section">
                        <img src="/assets/images/slider/slide-bg/1.jpg" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
                <!-- Slide #3 -->
                <div class="slide--item bg-overlay bg-overlay-gradient">
                    <div class="bg-section">
                        <img src="/assets/images/slider/slide-bg/1.jpg" alt="background">
                    </div>
                </div>
                <!-- .slide-item end -->
            </div>
        </section>
        <!-- #property-single-slider end -->

        <!-- property-single
============================================= -->
        <section id="property-single" class="property-single">
              {{property}}
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-8">
                        <div class="property-single-desc inner-box">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="heading">
                                        <h2 class="heading--title">Description</h2>
                                    </div>
                                </div>
                                <!-- feature-panel #1 -->
                                <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-panel">
                                        <div class="feature--img">
                                            <img src="/assets/images/property-single/features/1.png" alt="icon">
                                        </div>
                                        <div class="feature--content">
                                            <h5>Area:</h5>
                                            <p> {{property.description.area}} sq ft</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- feature-panel end -->
                                <!-- feature-panel #2 -->
                                <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-panel">
                                        <div class="feature--img">
                                            <img src="/assets/images/property-single/features/2.png" alt="icon">
                                        </div>
                                        <div class="feature--content">
                                            <h5>Beds:</h5>
                                            <p> {{property.description.bedrooms}} Bedrooms</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- feature-panel end -->
                                <!-- feature-panel #3 -->
                                <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-panel">
                                        <div class="feature--img">
                                            <img src="/assets/images/property-single/features/3.png" alt="icon">
                                        </div>
                                        <div class="feature--content">
                                            <h5>Baths:</h5>
                                            <p> {{property.description.bathrooms}} Bathrooms</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- feature-panel end -->
                                <!-- feature-panel #4 -->
                                <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-panel">
                                        <div class="feature--img">
                                            <img src="/assets/images/property-single/features/4.png" alt="icon">
                                        </div>
                                        <div class="feature--content">
                                            <h5>Rooms:</h5>
                                            <p> {{property.description.rooms}} Rooms</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- feature-panel end -->
                                <!-- feature-panel #5 -->
                                <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-panel">
                                        <div class="feature--img">
                                            <img src="/assets/images/property-single/features/5.png" alt="icon">
                                        </div>
                                        <div class="feature--content">
                                            <h5>Floors:</h5>
                                            <p> {{property.description.floors}} Floors</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- feature-panel end -->
                                <!-- feature-panel #6 -->
                                <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-panel">
                                        <div class="feature--img">
                                            <img src="/assets/images/property-single/features/6.png" alt="icon">
                                        </div>
                                        <div class="feature--content">
                                            <h5>Garage:</h5>
                                            <p> {{property.description.garage}} Garages</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- feature-panel end -->
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="property--details">
                                        <p> {{property.description.detailSummary1}} </p>
                                        <p> {{property.description.detailSummary2}} </p>
                                    </div>
                                    <!-- .property-details end -->
                                </div>
                                <!-- .col-md-12 end -->
                            </div>
                            <!-- .row end -->
                        </div>
                        <!-- .property-single-desc end -->


                        <div class="property-single-features inner-box">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="heading">
                                        <h2 class="heading--title">Features</h2>
                                    </div>
                                </div>
                                <!-- feature-item #1 -->
                                <div v-for="feature in property.features" :key="feature" class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p> {{feature}} </p>
                                    </div>
                                </div>
                                <!-- feature-item end -->
                                <!-- feature-item #2 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Balcony</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #3 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Pet Friendly</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #4 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Fire Alarm</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #5 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Modern Kitchen</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #6 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Storage</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #7 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Heating</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #8 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Pool</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #9 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Laundry</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #10 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Gym</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #11 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Elevator</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                                <!-- feature-item #12 -->
                                <!-- <div class="col-xs-6 col-sm-4 col-md-4">
                                    <div class="feature-item">
                                        <p>Dish Washer</p>
                                    </div>
                                </div> -->
                                <!-- feature-item end -->
                            </div>
                            <!-- .row end -->
                        </div>
                        <!-- .property-single-features end -->

                        <div class="property-single-location inner-box">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="heading">
                                        <h2 class="heading--title">Location</h2>
                                    </div>
                                </div>
                                <!-- .col-md-12 end -->
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <ul class="list-unstyled mb-20">
                                        <li><span>Address:</span> {{property.location.address}} </li>
                                        <li><span>City:</span> {{property.location.city}} </li>
                                        <li><span>Country:</span> {{property.location.country}} </li>
                                        <li><span>State:</span> {{property.location.state}} </li>
                                        <li><span>Zip/Postal code:</span>  
                                        {{property.location.zipcode}} </li>
                                    </ul>
                                </div>
                                <!-- .col-md-12 end -->
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div id="googleMap" style="width:100%;height:380px;"></div>
                                </div>
                                <!-- .col-md-12 end -->
                            </div>
                            <!-- .row end -->
                        </div>
                        <!-- .property-single-location end -->

                        <div class="property-single-design inner-box">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="heading">
                                        <h2 class="heading--title">Floor Plans</h2>
                                    </div>
                                </div>
                                <!-- .col-md-12 end -->
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="accordion accordion-1" id="accordion01">
                                        <!-- Panel 01 -->
                                        <div v-for="plan in property.floorPlans" :key="plan.floorNo" class="panel">
                                            <div class="panel--heading clearfix">
                                                <div class="pull-left">
                                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion01"
                                                     :href=" '#' + plan.floorId"> {{plan.floorNo}} </a>
                                                </div>
                                                <div class="pull-right">
                                                    <ul class="list-unstyled list-inline mb-0">
                                                        <li><span>Size:</span> {{plan.size}} sq ft</li>
                                                        <li><span>Rooms:</span> {{plan.rooms}} </li>
                                                        <li><span>Baths:</span> {{plan.baths}} </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div :id="plan.floorId" class="panel--body panel-collapse collapse in">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat.</p>
                                                <img :src="plan.planImage" alt="img" class="img-responsive">
                                            </div>
                                        </div>
                                        <!-- .panel end -->
                                        <!-- Panel 02 -->
                                        <!-- <div class="panel">
                                            <div class="panel--heading clearfix">
                                                <div class="pull-left">
                                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion01" 
                                                    href="#collapse01-2">Second Floor</a>
                                                </div>
                                                <div class="pull-right">
                                                    <ul class="list-unstyled list-inline mb-0">
                                                        <li><span>Size:</span>635 sq ft</li>
                                                        <li><span>Rooms:</span>3</li>
                                                        <li><span>Baths:</span>1</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="collapse01-2" class="panel--body panel-collapse collapse">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore eu fugiat.</p>
                                                <img src="assets/images/property-single/1.png" alt="img" class="img-responsive">
                                            </div>
                                        </div> -->
                                        <!-- .panel end -->
                                    </div>
                                    <!-- End .Accordion-->
                                </div>
                                <!-- .col-md-12 end -->
                            </div>
                            <!-- .row end -->
                        </div>
                        <!-- .property-single-design end -->

                        <div class="property-single-video inner-box">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="heading">
                                        <h2 class="heading--title">Video</h2>
                                    </div>
                                </div>
                                <!-- .col-md-12 end -->
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="video--content text-center">
                                        <div class="bg-section">
                                            <img src="/assets/images/video/1.jpg" alt="Background" />
                                        </div>
                                        <div class="video--button">
                                            <div class="video-overlay">
                                                <div class="pos-vertical-center">
                                                    <a class="popup-video" :href="property.media.videoUrl">
                                            <i class="fa fa-youtube-play"></i>  
                                        </a>
                                                </div>
                                            </div>
                                            <!-- .video-player end -->
                                        </div>
                                    </div>
                                    <!-- .video-content end -->
                                </div>
                                <!-- .col-md-12 end -->
                            </div>
                            <!-- .row end -->
                        </div>
                        <!-- .property-single-video end -->

                        <div class="property-single-reviews inner-box">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="heading">
                                        <h2 class="heading--title"> {{reviews.length}} Reviews</h2>
                                    </div>
                                </div>
                                <!-- .col-md-12 end -->
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <ul class="property-review">
                                       
                                        <li v-for="review in reviews" :key="review.userName" class="review-comment">
                                            <div class="avatar"> {{review.userAvatar}} </div>
                                            <div class="comment">
                                                <h6> {{review.userName}} </h6>
                                                <div class="date"> {{review.dateOfcreation}} </div>
                                                <div class="property-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-o"></i>
                                                </div>
                                                <p> {{review.message}} </p>
                                            </div>
                                        </li>
                                        <!-- comment end -->
                                        <!-- <li class="review-comment">
                                            <div class="avatar">S</div>
                                            <div class="comment">
                                                <h6>Steve Martin</h6>
                                                <div class="date">Jan 16, 2018</div>
                                                <div class="property-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                            </div>
                                        </li> -->
                                        <!-- comment end -->
                                        <!-- <li class="review-comment">
                                            <div class="avatar">N</div>
                                            <div class="comment">
                                                <h6>Nicole Smith</h6>
                                                <div class="date">Nov 25, 2017</div>
                                                <div class="property-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-o"></i>
                                                    <i class="fa fa-star-o"></i>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                            </div>
                                        </li> -->
                                        <!-- comment end -->
                                    </ul>
                                    <!-- .comments-list end -->
                                </div>
                                <!-- .col-md-12 end -->
                            </div>
                            <!-- .row end -->
                        </div>
                        <!-- .property-single-reviews end -->

                        <div class="property-single-leave-review inner-box">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="heading">
                                        <h2 class="heading--title">Leave a Review</h2>
                                    </div>
                                </div>
                                <!-- .col-md-12 end -->
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <form id="post-comment" class="mb-0">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-4 col-md-4">
                                                <div class="form-group">
                                                    <label for="review-name">Your Name*</label>
                                                    <input type="text" class="form-control" name="review-name" id="review-name" required>
                                                </div>
                                            </div>
                                            <!-- .col-md-4 end -->
                                            <div class="col-xs-12 col-sm-4 col-md-4">
                                                <div class="form-group">
                                                    <label for="review-email">Your Email*</label>
                                                    <input type="email" class="form-control" name="review-email" id="review-email" required>
                                                </div>
                                            </div>
                                            <!-- .col-md-4 end -->
                                            <!-- .col-md-4 end -->
                                            <div class="col-xs-12 col-sm-4 col-md-4">
                                                <div class="form-group">
                                                    <label>Rating*</label>
                                                    <div class="property-rating">
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- .col-md-4 end -->

                                            <div class="col-xs-12 col-sm-12 col-md-12">
                                                <div class="form-group">
                                                    <label for="review-comment">Review*</label>
                                                    <textarea class="form-control" id="review-comment" rows="2" required></textarea>
                                                </div>
                                            </div>
                                            <!-- .col-md-12 -->
                                            <div class="col-xs-12 col-sm-12 col-md-12">
                                                <button type="submit" class="btn btn--primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- .col-md-12 end -->
                            </div>
                            <!-- .row end -->
                        </div>
                        <!-- .property-single-leave-review end -->
                    </div>
                    <!-- .col-md-8 -->
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <!-- widget property agent
=============================-->
                        <div class="widget widget-property-agent">
                            <div class="widget--title">
                                <h5>About Agent</h5>
                            </div>
                            <div class="widget--content">
                                <a href="#">
                                    <div class="agent--img">
                                        <img src="/assets/images/agents/grid/7.jpg" alt="agent" class="img-responsive">
                                    </div>
                                    <div class="agent--info">
                                        <h5 class="agent--title">Matt Peters</h5>
                                    </div>
                                </a>
                                <!-- .agent-profile-details end -->
                                <div class="agent--contact">
                                    <ul class="list-unstyled">
                                        <li><i class="fa fa-phone"></i>(950) 491-570-180</li>
                                        <li><i class="fa fa-envelope-o"></i><a href="https://demo.zytheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dba8aeababb4a9af9bbea3bab6abb7bef5b8b4b6">[email&#160;protected]</a></li>
                                        <li><i class="fa fa-link"></i>modernhouse.com</li>
                                    </ul>
                                </div>
                                <!-- .agent-contact end -->
                                <div class="agent--social-links">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-google-plus"></i></a>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                </div>
                                <!-- .agent-social-links -->
                            </div>
                        </div>
                        <!-- . widget property agent end -->

                        <!-- widget request
=============================-->
                        <div class="widget widget-request">
                            <div class="widget--title">
                                <h5>Request a Showing</h5>
                            </div>
                            <div class="widget--content">
                                <form class="mb-0">
                                    <div class="form-group">
                                        <label for="contact-name">Your Name*</label>
                                        <input type="text" class="form-control" name="contact-name" id="contact-name" required>
                                    </div>
                                    <!-- .form-group end -->
                                    <div class="form-group">
                                        <label for="contact-email">Email Address*</label>
                                        <input type="email" class="form-control" name="contact-email" id="contact-email" required>
                                    </div>
                                    <!-- .form-group end -->
                                    <div class="form-group">
                                        <label for="contact-phone">Phone Number</label>
                                        <input type="text" class="form-control" name="contact-phone" id="contact-phone" placeholder="(optional)">
                                    </div>
                                    <!-- .form-group end -->
                                    <div class="form-group">
                                        <label for="message">Message*</label>
                                        <textarea class="form-control" name="contact-message" id="message" rows="2" placeholder="(optional)"></textarea>
                                    </div>
                                    <!-- .form-group end -->
                                    <input type="submit" value="Send Request" name="submit" class="btn btn--primary btn--block">
                                </form>
                            </div>
                        </div>
                        <!-- . widget request end -->

                        <!-- widget featured property
=============================-->
                       <FeaturedPropertyCrousel />
                        <!-- . widget featured property end -->

                        <!-- widget mortgage calculator
=============================-->
                        <div class="widget widget-mortgage-calculator">
                            <div class="widget--title">
                                <h5>Mortage Calculator</h5>
                            </div>
                            <div class="widget--content">
                                <form class="mb-0">
                                    <div class="form-group">
                                        <label for="sale-price">Sale Price</label>
                                        <input type="text" class="form-control" name="sale-price" id="sale-price" placeholder="$">
                                    </div>
                                    <!-- .form-group end -->
                                    <div class="form-group">
                                        <label for="down-payment">Down Payment</label>
                                        <input type="text" class="form-control" name="down-payment" id="down-payment" placeholder="$">
                                    </div>
                                    <!-- .form-group end -->
                                    <div class="form-group">
                                        <label for="term">Term</label>
                                        <input type="text" class="form-control" name="term" id="term" placeholder="years">
                                    </div>
                                    <!-- .form-group end -->
                                    <div class="form-group">
                                        <label for="interest-rate">Interest Rate</label>
                                        <input type="text" class="form-control" name="interest-rate" id="interest-rate" placeholder="%">
                                    </div>
                                    <!-- .form-group end -->
                                    <input type="submit" value="Calculate" name="submit" class="btn btn--primary btn--block">
                                </form>
                            </div>
                        </div>
                        <!-- . widget mortgage calculator end -->
                    </div>
                    <!-- .col-md-4 -->
                </div>
                <!-- .row -->
            </div>
            <!-- .container -->
        </section>
        <!-- #property-single end -->


        <!-- properties-carousel
============================================= -->
        <PropertyCrousel :properties="properties" title="Similar Properties"/>

        <!-- #properties-carousel  end  -->

        <!-- cta #1
============================================= -->
        <call-to-action />
        <!-- #cta1 end -->
        <script type="application/javascript" defer src="/assets/js/functions.js"></script>
  </fragment>
</template>

<script>
import CallToAction from '../components/CallToAction.vue';
import FeaturedPropertyCrousel from '../components/FeaturedPropertyCrousel.vue';
import PropertyCrousel from '../components/PropertyCrousel.vue';

export default {
    components:{
        PropertyCrousel,
        FeaturedPropertyCrousel,
        CallToAction
    },
 data() {
     return {
         property : {
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
                    rooms : 6,
                    bedrooms : 3 ,
                    bathrooms : 4,
                    floors : 2,
                    garage: 1,
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
         reviews : [
             {
                porpertyID : 15433 ,
                userAvatar : "R",
                userName : "Steve Martin",
                dateOfcreation : new Date().toLocaleString(),
                message : "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud",
                rating : 4.5,
             } , 
             {
                porpertyID : 15433 ,
                userAvatar : "J",
                userName : "John Martin",
                dateOfcreation : new Date().toLocaleString(),
                message : "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud",
                rating : 4.5,
             }  
         ] ,
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