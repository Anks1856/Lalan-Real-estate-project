<template>
  <section id="map" class="hero-map pt-0 pb-0">
            <div class="container-fluid pr-0 pl-0">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div id="googleMap"></div>
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
            </div>
            <!-- .container end -->
            <div class="search-properties">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            {{searchObject}}
                            <form class="mb-0" @submit.prevent="handleSubmit">
                                <div class="form-box">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select v-model="searchObject.location" name="select-location" id="select-location">
                                            <option value="">Any Location</option>
                                            <option>Ahmedabad</option>
                                            <option>Surat</option>
                                            <option>Gandhinagar</option>
                                            <option>Vadodara</option>
                                        </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select v-model="searchObject.type" name="select-type" id="select-type">
                                            <option value="">Any Type</option>
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
                                                    <select v-model="searchObject.status" name="select-status" id="select-status">
                                                        <option value="">Any Status</option>
                                                        <option>For Rent</option>
                                                        <option>For Sale</option>
                                                        </select>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3">
                                            <input type="submit" value="Search" name="submit" class="btn btn--primary btn--block mb-30">
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-6 col-md-3 option-hide">
                                            <div class="form-group">
                                                <div class="select--box">
                                                    <i class="fa fa-angle-down"></i>
                                                    <select v-model="searchObject.beds" name="select-beds" id="select-beds">
                                                    <option value="">Beds</option>
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
                                                    <select v-model="searchObject.baths" name="select-baths" id="select-baths">
                                            <option value="">Baths</option>
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
                                                    <input v-model="searchObject.priceRange" id="amount" type="text" class="amount" >
                                                </p>
                                                <div class="slider-range"></div>
                                            </div>
                                        </div>
                                        <!-- .col-md-3 end -->
                                        <div class="col-xs-12 col-sm-12 col-md-12">
                                            <a href="#" class="less--options">Less options</a>
                                        </div>
                                    </div>
                                    <!-- .row end -->
                                </div>
                                <!-- .form-box end -->
                            </form>
                        </div>
                        <!-- .col-md-12 end -->
                    </div>
                    <!-- .row end -->
                </div>
                <!-- .container end -->
            </div>
            <script type="Application/javascript" defer src="https://maps.google.com/maps/api/js"></script>
            <script type="Application/javascript" defer src="/assets/js/plugins/jquery.gmap.min.js"></script>
            <script type="Application/javascript" defer src="/assets/js/map-addresses.js"></script>
            <script type="Application/javascript" defer src="/assets/js/map-custom.js"></script>
        </section>
</template>

<script>
export default {
    data(){
        return {
            searchObj : {
                location : "",
                type : "",
                status : "",
                beds : '',
                baths : '',
                priceRange : '',
            },
        }

    },
    created(){
        this.searchObject = Object.keys({...this.$route.query}).length != 0 ? {...this.searchObj,...this.$route.query} : {...this.searchObj}
    },
    methods : {
        handleSubmit(){
            console.log('submited');
            this.$router.replace({path:'/properties' , query : {...this.searchObject}})
        }
    }

    
}
</script>

<style>

</style>