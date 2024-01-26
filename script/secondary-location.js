new Vue({
  el: "#app",
  data() {
    return {
      response: null,
			loc: null,
    };
  },
	watch: {
    // This should do a substring of the result returned by CloudFlare
    response: function (){
this.loc = this.response.substring(this.response.search('loc=')+4, this.response.search('tls='));
setCookie("location.secondarycountrycode", this.loc, 30);
    }
  },
	computed: {
    tsFormatted () {
			return new Date(this.ts * 1000)
		}
  },
  mounted() {
    // Get the user's states from the cloudflare service
    axios
    .get("https://www.cloudflare.com/cdn-cgi/trace")
      .then(response=> (this.response = response.data))
  }
});
