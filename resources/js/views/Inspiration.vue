<template>
	<div class="container mx-auto px-4">
		<h1 class="my-8 text-3xl border-r-2 border-brand pr-2 text-brand">
			افكار فريدة لأظهار الشخصية في منزلك.
		</h1>

		<div class="flex items-center mb-8 pb-8 border-b" v-for="design in designs">
			<div class="w-1/4 px-4">
				<h3 class="text-xl text-brand mb-4">{{ design.name }}</h3>
				<span class="block mb-2">الالوان المقترحه</span>
				<div class="flex">
					<div v-for="color in design.colors" class="w-8 h-8" :style="`background-color: ${color}`"></div>
				</div>
			</div>
			<div class="w-3/4"><img :src="design.url" :alt="design.name"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Inspiration",
		data() {
			return {
				designs: [
					{name: 'غرفة نوم', url: 'images/bed-room.jpg', colors: ['#84aeb7', '#907865', '#e5dfd2']},
					{name: 'غرفة معيشه', url: 'images/living-room.jpg', colors: ['#85663b', '#887b6c', '#e7dfc5']},
					{name: 'مطبخ', url: 'images/kitchen.jpg', colors: ['#eceae3', '#ba3b3d', '#a4a7a6']},
					{name: 'غرفة نوم 2', url: 'images/bed-room-2.jpg', colors: ['#ed9080', '#c04641', '#a2e0d9']},
					{name: 'مكتب', url: 'images/office.jpg', colors: ['#cfb58e', '#f1e4cd', '#cbede5']},
				]
			}
		}
	}
</script>