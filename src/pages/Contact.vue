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
                                    <h1>Contact</h1>
                                </div>
                                <ol class="breadcrumb">
                                    <li><a href="#">Home</a></li>
                                    <li class="active">Contact</li>
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

        <!-- Contact #1
============================================= -->
        <section id="contact" class="contact contact-1">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-3">
                        <div class="heading heading-2 mb-55">
                            <h2 class="heading--title">Get In Touch</h2>
                        </div>
                        <div class="contact-panel">
                            <h3>Address</h3>
                            <p>86 Petersham town, Wardll street Australia PA 6550.</p>
                        </div>
                        <!-- .contact-panel -->
                        <div class="contact-panel">
                            <h3>Phone:</h3>
                            <p>(04) 491 570 110</p>
                            <p>+61 525 240 310</p>
                        </div>
                        <!-- .contact-panel -->
                        <div class="contact-panel">
                            <h3>Email:</h3>
                            <p><a href="https://demo.zytheme.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f0939f9e84919384b09c919e94de939f9d">[email&#160;protected]</a></p>
                        </div>
                        <!-- .contact-panel -->
                    </div>
                    <!-- .col-md-3 end -->

                    <div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-1 bg-white p-30 bg-white">
                        <div id="googleMap" style="width:100%;height:370px;"></div>
                    </div>
                    <!-- .col-md-8 end -->
                </div>
                <!-- .row end -->
            </div>
        </section>
        <!-- #contact  end -->

        <!-- Contact #2
============================================= -->
        <contact-us></contact-us>
        <!-- #contact2  end -->

        <!-- cta #1
============================================= -->
       <call-to-action />


    <script type="application/javascript" defer src="/assets/js/functions.js"></script>
  </fragment>
</template>

<script>
import CallToAction from '../components/CallToAction.vue';
import ContactUs from '../components/ContactUs.vue';
export default {
    components :{
        ContactUs,
        CallToAction
    }
}
</script>

<style>

</style>