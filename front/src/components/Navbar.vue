<template>
	<div class="header clearfix">
        <nav>
          <ul class="nav nav-pills pull-right">
            <router-link tag="li" to="/login" v-if=" ! isAuth">
              <a href="">Login</a>
            </router-link>
            <router-link tag="li" to="/register" v-if=" ! isAuth">
              <a href="">Register</a>
            </router-link>
            <router-link tag="li" to="/feed" v-if=" isAuth">
              <a href="">Feed</a>
            </router-link>
            <router-link tag="li" to="/product/create" v-if="isAuth">
              <a href="">Create</a>
            </router-link>
            <router-link tag="li" to="/logout" v-if=" isAuth">
              <a href="">Log Out</a>
            </router-link>
          </ul>
        </nav>
        <h3 class="text-muted">Gift Service</h3>
    </div>
</template>
<script>
	export default {
    data () {
      return {
        isAuth: null
      }
    },

    created () {
      this.isAuth = this.$auth.isAuthenticated()
      this.setAuthenticatedUser()
    },
    methods: {
      setAuthenticatedUser () {
        this.$http.get('api/user')
        .then(response => {
          this.$auth.setAuthenticatedUser(response.body)

          console.log(this.$auth.getAuthenticatedUser())
        })
      }
    }
  }
</script>
<style>
/* Space out content a bit */
body {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Everything but the jumbotron gets side spacing for mobile first views */
.header,
.marketing,
.footer {
  padding-right: 15px;
  padding-left: 15px;
}

/* Custom page header */
.header {
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}
/* Make the masthead heading the same height as the navigation */
.header h3 {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 40px;
}

/* Custom page footer */
.footer {
  padding-top: 19px;
  color: #777;
  border-top: 1px solid #e5e5e5;
}

/* Customize container */
@media (min-width: 768px) {
  .container {
    max-width: 730px;
  }
}
.container-narrow > hr {
  margin: 30px 0;
}

/* Main marketing message and sign up button */
.jumbotron {
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
}
.jumbotron .btn {
  padding: 14px 24px;
  font-size: 21px;
}

/* Supporting marketing content */
.marketing {
  margin: 40px 0;
}
.marketing p + h4 {
  margin-top: 28px;
}

/* Responsive: Portrait tablets and up */
@media screen and (min-width: 768px) {
  /* Remove the padding we set earlier */
  .header,
  .marketing,
  .footer {
    padding-right: 0;
    padding-left: 0;
  }
  /* Space out the masthead */
  .header {
    margin-bottom: 30px;
  }
  /* Remove the bottom border on the jumbotron for visual effect */
  .jumbotron {
    border-bottom: 0;
  }
}

</style>