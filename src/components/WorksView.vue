<template>
     <div id="works">
          <p class="headline">WORKS</p>
          <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
               <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                    <img class="rounded-t-lg object-cover h-48 w-96" src="@/assets/portfolio.png" alt="ポートフォリオ画像" loading=”lazy” />
                    <div class="p-5">
                         <p class="mb-2 text-xl tracking-tight">ポートフォリオサイト</p>
                         <p class="mb-3 font-normal text-gray-700">使用技術 : <br>Vue, Vue Router, Tailwind CSS, HTML</p>
                         <p class="mb-3 font-normal text-gray-700">制作期間 : 3日</p>
                    </div>
               </div>

               <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                    <img class="rounded-t-lg object-cover h-48 w-96" src="@/assets/keyframe.jpg" alt="Keyframe Refiner画像" loading=”lazy” />
                    <div class="p-5">
                         <p class="mb-2 text-xl tracking-tight">Keyframe Refiner</p>
                         <p class="mb-3 font-normal text-gray-700">手書きアニメ制作効率支援ソフトウェア</p>
                         <router-link to="/products/#keyframe">
                              <p class="normal-btn">
                                   Read more
                                   <ArrowSVG class="fill-gray-100"/>
                              </p>
                         </router-link>
                    </div>
               </div>

               <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                    <img class="rounded-t-lg object-cover h-48 w-96" src="@/assets/deepbeyond.png" alt="Deep Beyond画像" loading=”lazy” />
                    <div class="p-5">
                         <p class="mb-2 text-xl tracking-tight">Deep Beyond</p>
                         <p class="mb-3 font-normal text-gray-700">馬体測定ソフトウェア</p>
                         <router-link to="/products/#deepbeyond">
                              <p class="normal-btn">
                                   Read more
                                   <ArrowSVG class="fill-gray-100"/>
                              </p>
                         </router-link>
                    </div>
               </div>

               <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
                    <img class="rounded-t-lg object-cover h-48 w-96" src="@/assets/movie2.png" alt="映像作品の画像" loading=”lazy” />
                    <div class="p-5">
                         <p class="mb-2 text-xl tracking-tight">映像作品</p>
                         <p class="mb-3 font-normal text-gray-700">趣味で作成した映像たち</p>
                         <router-link to="/products/#movie">
                              <p class="normal-btn">
                                   Read more
                                   <ArrowSVG class="fill-gray-100"/>
                              </p>
                         </router-link>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
     import ArrowSVG from "@/components/ArrowSVG.vue";

     export default {
          components: { ArrowSVG }
     };
</script>