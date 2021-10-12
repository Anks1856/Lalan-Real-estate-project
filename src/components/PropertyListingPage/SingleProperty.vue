<template>
         <div  class="property-item">
                <div class="property--img">
                    <router-link :to=" '/property/'+ property._id " >
                    <img :src="property.media.photos[0]" alt="property image" class="img-responsive">
                    </router-link>
                    <span class="property--status">For {{property.description.status}}</span>
                </div>
                <div class="property--content">
                    <div class="property--info">
                        <h5 class="property--title"><a href="property-single-gallery.html">{{property.name}}</a></h5>
                        <p class="property--location">{{property.location.address}}</p>
                        <p class="property--price">${{property.price}}</p>
                    </div>
                    <!-- .property-info end -->
                    <div class="property--features">
                        <ul class="list-unstyled mb-0">
                            <li><span class="feature">Beds:</span><span class="feature-num">{{property.description.bedrooms}}</span></li>
                            <li><span class="feature">Baths:</span><span class="feature-num">{{property.description.bathrooms}}</span></li>
                            <li><span class="feature">Area:</span><span class="feature-num">{{property.description.area}} sq ft</span></li>
                        </ul>
                    </div>
                    <!-- .property-features end -->
                </div>
            </div>
</template>

<script>
export default {
    props : {
        property : Object
    }

}
</script>

<style>

</style>