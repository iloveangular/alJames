<template>
    <main>
        <section class="packages login">
            <div class="login-form" v-if="username">
                <h4>Customer Log In</h4>
                <div class="form-groups input col-xs-12">
                    <div class="form-group">
                        <input class="height-auto pad-10 form-control form-control--first" id="email" placeholder="Email" type="email">
                    </div>
                    <div class="form-group">
                        <input class="height-auto pad-10 form-control form-control--last" id="password" placeholder="Password"  type="password">
                        <input type="hidden" id="uuid">
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12">
                    <span class="login-error" style="color:red;font-weight:bold;"></span>
                    <span class="success-login" style="color:green;font-weight:bold;"></span>
                </div>
                <div class="col-sm-6 col-sm-push-6 col-xs-12">
                    <div class="button">
                        <button class="btn btn-greenbtn-submit loginButton">Log-in</button>
                    </div>
                </div>
                <div class="col-sm-6 col-sm-pull-6 col-xs-12"><a class="forget">Forget your password?</a></div>
                <div class="clearfix"></div>
            </div>
            <div class="if-login">If you are an author at the Agent Legal Library, <a href="/#/login">Log in here</a>
            </div>
        </section>
    </main>
</template>
<script>

    export default {
        data() {
            return {
                username: ''
            }
        },
        mounted() {
            var vm = this;
            function generateUUID() {
                var d = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            };
            $("#uuid").val(generateUUID());
            $(".login").on("click",".loginButton", function(){
                console.log('hello');
                $.ajax({
                    url: 'https://milosrest.herokuapp.com/api/login',
                    type: 'POST',
                    data: {
                        'email': $("#email").val(),
                        'password': $("#password").val(),
                        'token': $('#uuid').val(),
                    },
                    success: function (data) {
                        console.log(data);
                        if(data.session == true) {
                            $('.login-error').hide();
                            $('.success-login').html('Success login! We will redirect you shorlty..');
                            localStorage.setItem('token', data.token);
                            document.location.href = "/#/";
                        } else {
                            $('.login-error').html('There is an error with your login, try again');
                        }
                    }
                })
            });
            if (localStorage.getItem('token')) {
                $.ajax({
                    url: 'https://milosrest.herokuapp.com/api/token',
                    type: 'POST',
                    data: {
                        'token': localStorage.getItem('token'),
                    },
                    success: function(data) {
                        if(data.session == true) {
                            document.location.href = "/#/";
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
