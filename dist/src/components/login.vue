<template>
    <main>
        <section class="packages login">
            <div class="login-form">
                <h4>Customer Log In</h4>
                <form class="the-login-form auth-form" method="post" action="/login" role="login" novalidate="">
                    <input name="action" value="login" type="hidden">
                    <div class="form-groups input col-xs-12">
                        <div class="form-group">
                            <input class="height-auto pad-10 form-control form-control--first" id="username" name="email" placeholder="Email" type="email">
                        </div>
                        <div class="form-group">
                            <input class="height-auto pad-10 form-control form-control--last" id="password" name="password" autocomplete="off" placeholder="Password" value="" type="password">
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-sm-6 col-sm-push-6 col-xs-12">
                        <div class="button">
                            <button class="btn btn-greenbtn-submit" type="submit">Log-in</button>
                        </div>
                    </div>
                    <div class="col-sm-6 col-sm-pull-6 col-xs-12"><a class="forget">Forget your password?</a></div>
                    <div class="clearfix"></div>
                </form>
            </div>
            <div class="if-login">If you are an author at the Agent Legal Library, <a href="/#/login">Log in here</a></div>
        </section>
    </main>
</template>