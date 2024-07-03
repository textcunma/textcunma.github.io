<template>
	<div>
		<div class="text-center m-5">
			<img alt="logo" src="../assets/icon.gif" class="m-auto w-80 rounded-3xl" loading=”lazy”>	
			<p class="text-2xl font-momo">Taiki Nakamura</p>
			<p class="text-lg font-momo text-slate-500">Data Scientist</p>
		</div>

		<div class="w-60 mx-auto my-10 flex flex-col gap-4">
			<button class="sns-btn" type="button" onclick="location.href='https://github.com/textcunma/'">
				<img src="../assets/github.svg" alt="GitHub icon" class="w-10" loading=”lazy”>
				<span class="mx-auto">GitHub</span>
			</button>

			<button class="sns-btn" type="button" onclick="location.href='https://zenn.dev/textcunma'">
				<img src="../assets/zenn.svg" alt="Zenn icon" class="w-10" loading=”lazy”>
				<span class="mx-auto">Zenn</span>
			</button>

			<button class="sns-btn" type="button" onclick="location.href='https://twitter.com/text_cunma'">
				<img src="../assets/X.svg" alt="Twittericon" class="w-10" loading=”lazy”>
				<span class="mx-auto">X(技術用)</span>
			</button>

			<button class="sns-btn" type="button" onclick="location.href='https://twitter.com/text_cunma2'">
				<img src="../assets/X.svg" alt="Twittericon" class="w-10" loading=”lazy”>
				<span class="mx-auto">X(芸術用)</span>
			</button>
		</div>
		
		<div>
			<p class="headline">About me</p>
				データサイエンティスト<br>
				画像処理, AIが特に好きですが、最近はネットワーク系も触りつつあります。
		</div>
	</div>
</template>
