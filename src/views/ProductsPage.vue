<template>
	<HeaderView />
     <div class="w-80 sm:w-1/2 m-10 mx-auto">
          <KeyframeView />
          <DeepBeyondView class="border-t-4 mt-10"/>
          <MovieView class="border-t-4 mt-10"/>
     </div>
	<FooterView />
</template>

<script>
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
     import KeyframeView from '@/components/KeyframeView.vue'
     import DeepBeyondView from '@/components/DeepBeyondView.vue'
     import MovieView from '@/components/MovieView.vue'

	export default {
		name: 'ProductsPage',
		components: {
			HeaderView,
               KeyframeView,
               DeepBeyondView,
               MovieView,
			FooterView
		},
		mounted() {
               setTimeout(() => {
                    let tweetScript = document.createElement('script');
                    tweetScript.setAttribute('type', 'text/javascript');
                    tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
                    tweetScript.setAttribute('async', 'true');
                    document.head.appendChild(tweetScript);
               }, 100)
          }
		// ref: https://abillyz.com/watanabe/studies/314
		// ref: https://www.nanatsu.jp/?p=458
	}
</script>