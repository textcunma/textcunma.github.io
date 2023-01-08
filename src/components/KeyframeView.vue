<template>
     <div id="keyframe">
          <p class="text-4xl my-3 font-bold">Keyframe Refiner</p>
          <img src="@/assets/keyframe.jpg" alt="Keyframe Refiner表示画面" class="my-3">
          <p class="text-lg font-bold my-2">概要・開発目的</p>
          <p>手書きアニメーション制作において発生する用紙の位置ずれを自動的に修正するアプリケーション。
               原画やレイアウトをスキャンする際に位置ずれが発生してしまう。
               それを現在アニメーターが手動で修正しているため非効率。
               そこで、自動的に位置ずれを修正するアプリケーションを開発した。</p>
          
          <p class="text-lg font-bold my-2">開発</p>
          <p>2人組で開発。私は、企画・アルゴリズム構築・プロトタイプ開発・アイコンデザイン・宣伝を担当。 
               もう1人はアルゴリズム構築・UI・Webアプリケーション開発を担当。
               使用言語はJavaScript(Svelteフレームワーク)。 
               プロトタイプ段階ではPythonとJavaScriptを使用。制作期間は2021年10月から12月。
               ただし、企画から第1号目の完成までは約3週間、その後は改良を加え続けた。</p>

          <p class="text-lg font-bold my-2">工夫点</p>
          <p>アルゴリズムの改良。初期アルゴリズムでは円検出を用いていたため、
               平行移動のずれには対処できるが回転のずれに対処ができない。 
               このアルゴリズムを改良して矩形検出に改良することで平行移動・回転の両方に対して対処できるようになった。</p>

          <p class="text-lg font-bold my-2">苦労点</p>
          <p>クリエイターの方が何を求めているかということが苦労が多かった。
               各クリエイターで意見が相違しているため、まず何を優先的に対処するべきかの 見定めに困難があった。</p>

          <p class="text-lg font-bold my-2">リンク</p>
          <a href="https://github.com/keyframe-refiner/keyframe-refiner"
               class="url-link"> https://github.com/keyframe-refiner/keyframe-refiner </a>
          
          <p class="text-lg font-bold my-2">デモ動画</p>
          <div>
               <iframe src="https://www.youtube.com/embed/oSFCsQBBk6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <p class="text-lg font-bold my-2">広報ツイート</p>
          <div>
               <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【アップデート版】制作進行向け、アニメーター向けのWebアプリ作成。原画やレイアウトの位置合わせを自動で行います。<br>回転に対応、タップ穴で位置合わせする以外に、フレーム枠で位置合わせを行うモードが追加。その他も更新内容あり。<a href="https://t.co/c2Ht90O35H">https://t.co/c2Ht90O35H</a> <a href="https://t.co/Ysnm7MFRyu">pic.twitter.com/Ysnm7MFRyu</a></p>&mdash; てきすと (@text_cunma) <a href="https://twitter.com/text_cunma/status/1456909589954248710?ref_src=twsrc%5Etfw">November 6, 2021</a></blockquote>
          </div>
     </div>
</template>