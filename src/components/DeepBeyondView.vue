<template>
     <div id="deepbeyond">
          <p class="text-4xl my-3 font-bold">Deep Beyond</p>
          <img src="@/assets/deepbeyond.png" alt="Deep Beyondアイコン" class="my-3 w-80 mx-auto" loading=”lazy”>
          <p class="text-lg font-bold my-2">概要・開発目的</p>
          <p>馬の写真から自動で馬体測定をするソフトウェア。競馬好きの友人がサラブレッドの足の長さと成績が
               関係しているという噂を検証することからスタートし、最終的には馬の健康状態測定にも使えるのではないかと
               している。
          </p>
          
          <p class="text-lg font-bold my-2">開発</p>
          <p>基本的に私個人で開発。馬のどの部分を計測すれば良いかは競馬好きの友人に協力してもらった。
               PythonとOpenCVによって開発。約1か月間で開発。Semantic Segmentationによって馬の写真から馬の部分のみを切り取り、
               簡略化した輪郭から足の位置等を特定し測定を行う。
          </p>

          <p class="text-lg font-bold my-2">工夫点</p>
          <p>複数のセグメンテーション技術を用いてどれが最も良いかを検証した。輪郭抽出、GrabCutアルゴリズム、DeepLab-v3。
               その結果、深層学習手法のDeepLab-v3が精度が高く、手間が少ないことがわかった。そのため、深層学習手法の
               Semantic Segmentationモデルを使用している。
          </p>

          <p class="text-lg font-bold my-2">苦労点</p>
          <p>簡略化した輪郭が特定の画像では正しくできず、出来る限りエラーが出ないようなハイパーパラメータを設定すること。</p>

          <p class="text-lg font-bold my-2">改善案</p>
          <p>GUIが構築や馬が歩く動画から測定が案としてある。後者は深層学習モデルの
               <a href="https://github.com/deepmind/tapnet" class="url-link">TAP-Net</a>
               が最近登場したことからこのモデルを採用することも考えられる。
          </p>

          <p class="text-lg font-bold my-2">リンク</p>
          <a href="https://github.com/textcunma/Deep-Beyond"
               class="url-link"> https://github.com/textcunma/Deep-Beyond </a>
     </div>
</template>