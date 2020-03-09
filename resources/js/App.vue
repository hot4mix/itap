<template>
	<div class="flex flex-col min-h-full">
		<header class="bg-gray-800 text-white">
			<div class="container mx-auto p-4 flex items-center justify-between">
				<router-link class="" to="/">
					<img class="block h-20 w-auto" src="../images/itap-logo.png" alt="ITAP Logo">
				</router-link>
				<div class="relative block md:hidden">
					<burger>
						<router-link class="" to="/">الرئيسيه</router-link>
						<router-link class="" to="/interior-products">دهانات داخليه</router-link>
						<router-link class="" to="/exterior-products">دهانات خارجيه</router-link>
						<router-link class="" to="/inspiration">الألوان و الألهام</router-link>
						<router-link class="" to="/about-us">عن الشركة</router-link>
					</burger>
				</div>
				<div class="hidden md:block">
					<router-link class="ml-2 border-b-2 border-white pb-2 hover:border-brand" to="/">الرئيسيه</router-link>
					<router-link class="mx-2 border-b-2 border-white pb-2 hover:border-brand" to="/interior-products">دهانات داخليه</router-link>
					<router-link class="mx-2 border-b-2 border-white pb-2 hover:border-brand" to="/exterior-products">دهانات خارجيه</router-link>
					<router-link class="mx-2 border-b-2 border-white pb-2 hover:border-brand" to="/inspiration">الألوان و الألهام</router-link>
					<router-link class="mr-2 border-b-2 border-white pb-2 hover:border-brand" to="/about-us">عن الشركة</router-link>
				</div>
			</div>
		</header>

		<router-view :key="$route.fullPath"/>

		<footer class="mt-auto bg-brand text-white">
			<div class="container mx-auto px-4 py-1">
				© {{ new Date().getFullYear() }}
				المصرية الايطاليه للدهانات.
				<a href="https://ezzegypt.com">تطوير عزمصر.</a>
			</div>
		</footer>
	</div>
</template>

<script>
	import { Slide as Burger } from 'vue-burger-menu';
	import { Hooper, Slide as HooperSlide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
	export default {
		name: "App",
		components: { Burger },
	}
</script>

<style>
	.bm-burger-button {
		position: static;
		width: 30px;
		height: 30px;
		left: auto;
		top: auto;
		cursor: pointer;
	}
	.bm-burger-bars {
		background-color: #CCC;
	}
	.cross-style {
		right: unset;
		left: 2px;
	}
	.hooper {
		height: 350px;
		color: white;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
	}
	.hooper svg {
		fill: currentColor;
	}
</style>