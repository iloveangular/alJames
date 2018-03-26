<template>
    <main>
        <section class="packages login">
            <div class="login-form" v-if="username">
                <h4>Forgotten Password</h4>
                <div class="form-groups input col-xs-12">
                    <div class="form-group">
                        <input class="height-auto pad-10 form-control form-control--first" id="email"
                               placeholder="Please enter your Email" type="email">
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12">
                    <span class="login-error" style="color:red;font-weight:bold;"></span>
                    <span class="success-login" style="color:green;font-weight:bold;"></span>
                </div>
                <div class="col-sm-6 col-sm-push-6 col-xs-12">
                    <div class="button">
                        <button class="btn btn-greenbtn-submit resetCode">Send Reset Code</button>
                    </div>
                </div>
                <div class="col-sm-6 col-sm-pull-6 col-xs-12"><a class="forget" href="/#/login">Login to site?</a></div>
                <div class="clearfix"></div>
            </div>
            <div class="if-login">If you are an author at the Agent Legal Library, <a href="/#/login">Log in here</a>
            </div>
        </section>
    </main>
</template>
<script>
  import * as config from '@/scripts/main'

    export default {
        data() {
            return {
                username: ''
            }
        },
        mounted() {
            var vm = this;
            $(".login").on("click", ".resetCode", function () {
                console.log('hello');
                $.ajax({
                    url: config.url + 'forgot-password',
                    type: 'POST',
                    data: {
                        'email': $("#email").val()
                    },
                    success: function (data) {
                        console.log(data);
                        if (data.session == true) {
                            $('.login-error').hide();
                            $(".success-login").show();
                            $('.success-login').html('We found your account! Password sent.');
                        } else {
                            $(".success-login").hide();
                            $(".login-error").show();
                            $('.login-error').html('There is an error with your email, try again');
                        }
                    }
                })
            });
            if (localStorage.getItem('token')) {
                $.ajax({
                    url: config.url + 'token',
                    type: 'POST',
                    data: {
                        'token': localStorage.getItem('token'),
                    },
                    success: function (data) {
                        if (data.session == true) {
                            location.href = '/#/';
                        } else {
                            vm.username = true;
                        }
                    }
                })
            } else {
                vm.username = true;
            }
        }

    }
</script>
