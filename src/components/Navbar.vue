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
                           
                                <router-link to="/">Home</router-link>
                            </li>
                            <li class="active">
                                <router-link to="/properties">Properties</router-link>
                            </li>
                            <li class="active">
                                <router-link to="/Agents">Agents</router-link>
                            </li>
                            <li class="active">
                                <router-link to="/Agencies">Agencies</router-link>
                            </li>
                            
                            <li class="active">
                                <router-link to="/About">About</router-link>
                            </li>
                            <li class="active">
                                <router-link to="/Contact">Contact </router-link>
                            </li>
                          
                            <!-- Profile Menu-->
                            <li v-if="isLoggedIn" class="has-dropdown">
                                <a href="#"  data-toggle="dropdown" class="dropdown-toggle menu-item">My Profile</a>
                                <ul class="dropdown-menu">
                                    <li><router-link to="/UserProfile">user profile</router-link></li>
                                    <li><router-link to="/SocialProfile">social profile</router-link></li>
                                    <li><router-link to="/FavouriteProperties">favourite properties</router-link></li>
                                    <li v-if="isAgent"><router-link to="/MyProperties">my properties</router-link></li>
                                    <li v-if="isAgent"><router-link to="/AddProperty">add property</router-link></li>
                                </ul>
                            </li>

                        </ul>
                        <!-- Module Signup  -->
                        <div class="module module-login pull-left">
                            <a class="btn-popup" v-show="!isLoggedIn" data-toggle="modal" data-target="#signupModule">Login</a>
                            <a class="btn-popup"  v-if="isLoggedIn" @click="handleLogout">logout</a>
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
                                                            <!-- {{loginDetails}} -->
                                                            <form class="mb-0" @submit.prevent="handleLogin">
                                                                <a href="#" class="btn btn--facebook btn--block"><i class="fa fa-facebook-square"></i>Login with Facebook</a>
                                                                <div class="or-text">
                                                                    <span>or</span>
                                                                </div>
                                                                    <p v-if="loginErrorMessage" style="color:red"> {{loginErrorMessage}}</p>
                                                                <div class="form-group">
                                                                    <input type="email" @focus="handleLoginError" v-model="loginDetails.email" class="form-control" name="login-email" id="login-email" placeholder="Email Address" required>
                                                                </div>
                                                                <!-- .form-group end -->
                                                                <div class="form-group">
                                                                    <input type="password" v-model="loginDetails.password" class="form-control" name="login-password" id="login-password" placeholder="Password" required>
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
                                                            <p v-if="registerErrorMessage" style="color:red"> {{registerErrorMessage}}</p>
                                                            <!-- {{UserDetails}} -->
                                                            <!-- <div class="form-group">
                                                                <select class="form-control" name="register-as" id="register-as" 
                                                                           v-model="UserDetails.RegisterAs" >
                                                                            <option value="">Register As</option>
                                                                            <option >User</option>
                                                                            <option >Agent</option>
                                                                            <option >Agency</option>
                                                                </select>
                                                            </div> -->
                                                            <!-- .form-group end -->
                                                            <div class="form-group">
                                                                <input type="text" class="form-control" name="full-name" id="full-name" 
                                                                placeholder="full name" v-model="UserDetails.fullName">
                                                            </div>
                                                            <div class="form-group">
                                                                <input type="email" @focus="handleRegisterError" class="form-control" name="register-email" id="register-email" 
                                                                placeholder="Email Address" v-model="UserDetails.email" >
                                                            </div>
                                                            <!-- .form-group end -->
                                                            <div class="form-group">
                                                                <input type="password" class="form-control" name="register-password" id="register-password" 
                                                                placeholder="Password" v-model="UserDetails.password">
                                                            </div>
                                                            <!-- .form-group end -->
                                                            <div class="input-checkbox">
                                                                <label class="label-checkbox">
                                                                <span>I agree with all <a href="#">Terms & Conditions</a></span>
                                                                <input type="checkbox" v-model="isAgree">
                                                                <span class="check-indicator"></span>
                                                            </label >
                                                            </div>
                                                            <input type="submit" :disabled="!isAgree"  class="btn btn--primary btn--block" value="Register" />
                                                        </form >
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
                        <div  class="module module-property pull-left">
                            <!-- <a href="add-property.html" > add property</a> -->
                            <!-- <router-link  to="/AddProperty" class="btn"><i class="fa fa-plus"></i>add property</router-link> -->
                            <router-link  to="#" class="btn"><i class="fa fa-plus"></i>Join as Agent</router-link>
                        </div>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container-fluid -->
            </nav>

        </header>
</template>
<script type="text/javascript" src="/js/jquery-1.11.3.js"></script>
<script>
import AuthServices from '../Services/AuthServices';

export default {
    data() {
        return {
            UserDetails : {
                fullName : "" , 
                email : "" ,
                password : "" ,
              },
              isAgree : false ,
              registerErrorMessage : "" ,
              loginErrorMessage : '' ,
              isLoggedIn : JSON.parse(localStorage.getItem('isLoggedIn')),
              isAgent : false ,
              loginDetails : {
                  email :'',
                  password : ''
              }
        }
    },
    watch: {
        isLoggedIn(val){
            this.isLoggedIn = val;
        }
    },
    computed : {
        // isLogin(){
        //     console.log(localStorage.getItem('isLogin'));
        //     return JSON.parse(localStorage.getItem('isLogin'));
        // }
    },
    methods :{
        handleRegister(){
                AuthServices.register(this.UserDetails).then(res =>{
                    $('#signupModule').modal("hide");
                    this.isLoggedIn = true
                }).catch(err => {
                    if(err.response.status == 403){
                        this.registerErrorMessage = 'Email Already registered!'
                    }
                })
            },

        handleLogin(){
                AuthServices.loing(this.loginDetails).then(res =>{
                    $('#signupModule').modal("hide");
                    localStorage.setItem('isLoggedIn' , true);
                    this.isLoggedIn = true
                    localStorage.setItem('token', res.data.jwtoken);
                }).catch(err =>{
                    console.log(err.response.status);
                    this.loginErrorMessage = "Email or password does not match!"
                })
            },
        handleLogout(){
            console.log(typeof(JSON.parse(localStorage.getItem('isLoggedIn'))));
            localStorage.setItem('isLoggedIn' , false);
            this.isLoggedIn = false;
        },
            handleRegisterError(){
                this.registerErrorMessage = '';
            },
            handleLoginError(){
                this.loginErrorMessage = ''
            }


        }
}
</script>
    
<style>
/* .bmyGb{
    background-color: black ;
} */


</style>