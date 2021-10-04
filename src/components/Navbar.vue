<template>
         <header id="navbar-spy" class="header header-1 header-transparent header-fixed">
            <nav id="primary-menu" class="navbar navbar-fixed-top">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				</button>
                        <router-link to="/" class="logo" >
					<img class="logo-light" src="assets/images/logo/logo-light.png" alt="Land Logo">
					<img class="logo-dark" src="assets/images/logo/logo-dark.png" alt="Land Logo">
                        </router-link>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse pull-right" id="navbar-collapse-1">
                        <ul class="nav navbar-nav nav-pos-center navbar-left">
                            <!-- Home Menu -->
                            <li  class="active">
                                <!-- <a href="#" data-toggle="dropdown" class="dropdown-toggle menu-item">home</a>
                                <ul class="dropdown-menu">
                                    <li><a href="index-2.html">home search</a></li>
                                    <li><a href="home-map.html">home map</a></li>
                                    <li><a href="home-property.html">home property</a></li>
                                    <li><a href="home-splash.html">home splash</a></li>
                                </ul> -->
                                <router-link to="/" style="font-size:1.2rem">Home</router-link>
                            </li>
                            <li class="active">
                                <router-link to="/properties" style="font-size:1.2rem">Properties</router-link>
                            </li>
                            <li class="active">
                                <router-link to="/Agents" style="font-size:1.2rem">Agents</router-link>
                            </li>
                            <li class="active">
                                <router-link to="/Agencies" style="font-size:1.2rem">Agencies</router-link>
                            </li>
                            
                            <li class="active">
                                <router-link to="/About" style="font-size:1.2rem">About</router-link>
                            </li>
                            <li class="active">
                                <router-link to="/Contact" style="font-size:1.2rem">Contact</router-link>
                            </li>
                            <!-- <li class="active">
                                <router-link to="/Agencies" style="font-size:1.5rem">My Profile</router-link>
                            </li> -->
                            <!-- <li class="active">
                                <router-link to="/Agent/anks" style="font-size:1.5rem">Single Agent</router-link>
                            </li> -->
                            <!-- <li class="active">
                                <router-link to="/Agency/anks" style="font-size:1.5rem">Single Agency</router-link>
                            </li> -->
                            <!-- li end -->

                            <!-- Pages Menu -->
                            <!-- <li class="has-dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle menu-item">Pages</a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">agents</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="agents.html">All Agents</a>
                                            </li>
                                            <li>
                                                <a href="agent-profile.html">agent profile</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">agencies</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="agency-list.html">all agencies</a>
                                            </li>
                                            <li>
                                                <a href="agency-profile.html">agency profile</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">blog</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="blog.html">blog Grid</a>
                                            </li>
                                            <li>
                                                <a href="blog-sidebar-right.html">blog Grid Right </a>
                                            </li>
                                            <li>
                                                <a href="blog-sidebar-left.html">blog Grid Left </a>
                                            </li>
                                            <li>
                                                <a href="blog-single.html">blog single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="page-about.html">page about</a></li>
                                    <li><a href="page-contact.html">page contact</a></li>
                                    <li><a href="page-faq.html">page FAQ</a></li>
                                    <li><a href="page-404.html">page 404</a></li>
                                </ul>
                            </li> -->
                            <!-- li end -->

                            <!-- Profile Menu-->
                            <li class="has-dropdown">
                                <a href="#" style="font-size:1.2rem" data-toggle="dropdown" class="dropdown-toggle menu-item">My Profile</a>
                                <ul class="dropdown-menu">
                                    <li><router-link to="/UserProfile">user profile</router-link></li>
                                    <li><router-link to="/SocialProfile">social profile</router-link></li>
                                    <li><router-link to="/FavouriteProperties">favourite properties</router-link></li>
                                    <li><router-link to="/MyProperties">my properties</router-link></li>
                                    <li><router-link to="/AddProperty">add property</router-link></li>
                                </ul>
                            </li>
                            <!-- li end -->

                            <!-- Properties Menu-->
                          <!--   <li class="has-dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle menu-item">Properties</a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">Properties grid</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="properties-grid.html">properties grid</a>
                                            </li>
                                            <li>
                                                <a href="properties-grid-split.html">properties grid split</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">properties list</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="properties-list.html">properties list</a>
                                            </li>
                                            <li>
                                                <a href="properties-list-split.html">properties list split</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">properties single</a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="property-single-gallery.html">single gallery</a>
                                            </li>
                                            <li>
                                                <a href="property-single-slider.html">single slider</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> -->
                            <!-- li end -->

                            <!-- <li><a href="page-contact.html">contact</a></li> -->
                        </ul>
                        <!-- Module Signup  -->
                        <div class="module module-login pull-left">
                            <a class="btn-popup" data-toggle="modal" data-target="#signupModule">Login</a>
                            <div class="modal register-login-modal fade" tabindex="-1" role="dialog" id="signupModule">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="row">

                                                <!-- Nav tabs -->
                                                <ul class="nav nav-tabs">
                                                    <li class="active"><a href="#login" data-toggle="tab">login</a>
                                                    </li>
                                                    <li><a href="#signup" data-toggle="tab">signup</a>
                                                    </li>
                                                </ul>
                                                <!-- Tab panes -->
                                                <div class="tab-content">
                                                    <div class="tab-pane fade in active" id="login">
                                                        <div class="signup-form-container text-center">
                                                            <form class="mb-0">
                                                                <a href="#" class="btn btn--facebook btn--block"><i class="fa fa-facebook-square"></i>Login with Facebook</a>
                                                                <div class="or-text">
                                                                    <span>or</span>
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="email" class="form-control" name="login-email" id="login-email" placeholder="Email Address">
                                                                </div>
                                                                <!-- .form-group end -->
                                                                <div class="form-group">
                                                                    <input type="password" class="form-control" name="login-password" id="login-password" placeholder="Password">
                                                                </div>
                                                                <!-- .form-group end -->
                                                                <div class="input-checkbox">
                                                                    <label class="label-checkbox">
                                                                    <span>Remember Me</span>
                                                                    <input type="checkbox">
                                                                    <span class="check-indicator"></span>
                                                                </label>
                                                                </div>
                                                                <input type="submit" class="btn btn--primary btn--block" value="Sign In">
                                                                <a href="#" class="forget-password">Forget your password?</a>
                                                            </form>
                                                            <!-- form  end -->
                                                        </div>
                                                        <!-- .signup-form end -->
                                                    </div>
                                                    <div class="tab-pane" id="signup">
                                                        <form class="mb-0" @submit.prevent="handleRegister">
                                                            <a href="#" class="btn btn--facebook btn--block"><i class="fa fa-facebook-square"></i>Register with Facebook</a>
                                                            <div class="or-text">
                                                                <span>or</span>
                                                            </div>
                                                            {{UserDetails}}
                                                            <div class="form-group">
                                                                <select class="form-control" name="register-as" id="register-as" 
                                                                           v-model="UserDetails.RegisterAs" >
                                                                            <option value="">Register As</option>
                                                                            <option >User</option>
                                                                            <option >Agent</option>
                                                                            <option >Agency</option>
                                                                </select>
                                                            </div>
                                                            <!-- .form-group end -->
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" name="full-name" id="full-name" 
                                                                placeholder="full name" v-model="UserDetails.FirstName">
                                                            </div>
                                                            <div class="form-group">
                                                                <input type="email" class="form-control" name="register-email" id="register-email" 
                                                                placeholder="Email Address" v-model="UserDetails.Email">
                                                            </div>
                                                            <!-- .form-group end -->
                                                            <div class="form-group">
                                                                <input type="password" class="form-control" name="register-password" id="register-password" 
                                                                placeholder="Password" v-model="UserDetails.Password">
                                                            </div>
                                                            <!-- .form-group end -->
                                                            <div class="input-checkbox">
                                                                <label class="label-checkbox">
                                                                <span>I agree with all <a href="#">Terms & Conditions</a></span>
                                                                <input type="checkbox">
                                                                <span class="check-indicator"></span>
                                                            </label>
                                                            </div>
                                                            <input type="submit" class="btn btn--primary btn--block" value="Register">
                                                        </form>
                                                        <!-- form  end -->
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.modal-content -->
                                    </div>
                                    <!-- /.modal-dialog -->
                                </div>
                                <!-- /.modal -->
                            </div>
                        </div>
                        <!-- Module Consultation  -->
                        <div class="module module-property pull-left">
                            <!-- <a href="add-property.html" > add property</a> -->
                            <router-link to="/AddProperty" class="btn"><i class="fa fa-plus"></i>add property</router-link>
                        </div>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container-fluid -->
            </nav>

        </header>
</template>

<script>

export default {
    data() {
        return {
            UserDetails : {
                RegisterAs : '',
                FirstName : '',
                Email : '',
                Password : '',
            }
        }
    },
    methods :{
        handleRegister(){
            console.log(this.UserDetails);
        }
    }
}
</script>
    
<style>
/* .bmyGb{
    background-color: black ;
} */


</style>