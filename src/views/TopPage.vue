<template>
	<div>
		<HeaderView />
		<div class="w-80 sm:w-1/2 m-10 mx-auto">
			<HomeView />
			<SkillView class="mt-10"/>
			<ExperienceView class="mt-10"/>
			<WorksView class="mt-10"/>
		</div>
		<FooterView />
	</div>

</template>

<script>
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	import HomeView from '@/components/HomeView.vue'
	import SkillView from '@/components/SkillView.vue'
	import ExperienceView from '@/components/ExperienceView.vue'
	import WorksView from '@/components/WorksView.vue'

	export default {
		name: 'TopPage',
		components: {
			HeaderView,
			HomeView,
			SkillView,
			ExperienceView,
			WorksView,
			FooterView
		}
	}
</script>