<template>
     <div id="skill">
          <p class="headline">Skill</p>
          <table class="text-sm text-left text-gray-500 my-5 table-fixed border-collapse border border-slate-400">
               <thead>
                    <tr>
                         <th class="w-1/4 sm:w-1/6 border border-slate-300 text-center">レベル</th>
                         <th class="border border-slate-300 text-center">説明</th>
                    </tr>
               </thead>
               <tbody>
                    <tr v-for="desc_skill in desc_skills" :key="desc_skill.id">
                         <td class="text-yellow-400 border border-slate-300">{{ desc_skill.star }}</td>
                         <td class="border border-slate-300 p-2">{{ desc_skill.desc }}</td>
                    </tr>
               </tbody>
          </table>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
               <div v-for="skill in skills" :key="skill.id" class="skill-display">
                    <p class="sub-headline"> {{ skill.name }}</p>
                    <p class="text-yellow-400 text-2xl"> {{ skill.star }}</p>
                    <p> {{ skill.desc }}</p>
               </div>
          </div>
     </div>
</template>

<script>
     export default {
          data() {
               return {
                    desc_skills: [
                         {
                              id: 1,
                              star: '★★★★★',
                              desc: '最新技術やシステム内部の実装について非常に詳しい'
                         },
                         {
                              id: 2,
                              star: '★★★★☆',
                              desc: 'ライブラリやフレームワーク、システム内部を実装可能'
                         },
                         {
                              id: 3,
                              star: '★★★☆☆',
                              desc: '調べながら自身で実装可能'
                         },
                         {
                              id: 4,
                              star: '★★☆☆☆',
                              desc: '詳しい人に協力してもらえれば、ある程度実装が可能'
                         },
                         {
                              id: 5,
                              star: '★☆☆☆☆',
                              desc: '独学や授業で習得程度。チュートリアルより高度な実装経験が無い'
                         }
                    ],
                    skills: [
                         {    
                              id: 1, 
                              name: 'Python', 
                              star: '★★★☆☆',
                              desc: '研究や趣味で使用。使用期間3年' 
                         },
                         {    
                              id: 2, 
                              name: 'OpenCV', 
                              star: '★★★☆☆',
                              desc: '研究や趣味で使用。使用期間4年' 
                         },
                         {    
                              id: 3, 
                              name: 'PyTorch', 
                              star: '★★★☆☆',
                              desc: '研究で使用。使用期間1年' 
                         },
                         {    
                              id: 4, 
                              name: 'C++', 
                              star: '★★☆☆☆',
                              desc: '趣味で使用。使用期間1年' 
                         },
                         {    
                              id: 5, 
                              name: 'JavaScript', 
                              star: '★★☆☆☆',
                              desc: '趣味で使用。使用期間1年' 
                         },
                         {    
                              id: 6, 
                              name: 'HTML/CSS', 
                              star: '★★☆☆☆',
                              desc: '趣味で使用。使用期間1年' 
                         },
                         {    
                              id: 7, 
                              name: 'TensorFlow', 
                              star: '★★☆☆☆',
                              desc: '研究で数回程度使用' 
                         },
                         {    
                              id: 8, 
                              name: 'OpenGL', 
                              star: '★☆☆☆☆',
                              desc: '趣味で使用。使用期間3カ月' 
                         },
                         {    
                              id: 9, 
                              name: 'Java', 
                              star: '★☆☆☆☆',
                              desc: '授業で習得程度。使用期間4カ月' 
                         },
                    ]
               }
          }
     }
</script>