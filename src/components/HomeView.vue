<template>
	<div>
		<div class="text-center m-5">
			<img alt="logo" src="../assets/icon.gif" class="m-auto w-80 rounded-3xl" loading=”lazy”>	
			<p class="text-2xl font-momo">Taiki Nakamura</p>
			<p class="text-lg font-momo text-slate-500">graduate student</p>
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
				<img src="../assets/twitter.svg" alt="Twittericon" class="w-10" loading=”lazy”>
				<span class="mx-auto">Twitter(技術)</span>
			</button>

			<button class="sns-btn" type="button" onclick="location.href='https://twitter.com/text_cunma2'">
				<img src="../assets/twitter.svg" alt="Twittericon" class="w-10" loading=”lazy”>
				<span class="mx-auto">Twitter(芸術)</span>
			</button>
		</div>
		
		<div>
			<p class="headline">About me</p>
			<p>
				情報系大学院生。<br>
				現在、映像解析の研究を行っていて
				<span class="md:inline block">
					専門分野はCVとDeep Learningです。
				</span>
				<br>
				CV、3DCGが好きで趣味として技術や芸術を含む作品の制作・鑑賞を楽しんでいます。
			</p>
		</div>
	</div>
</template>
