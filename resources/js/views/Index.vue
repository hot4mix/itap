<template>
	<div>
		<hooper :autoPlay="true" :playSpeed="5000" :wheelControl="false" rtl>
			<hooper-slide v-for="image in images" :key="image.url">
				<div class="w-full h-full bg-cover bg-center" :style="`background-image: url(${image.url})`">
					<div class="container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
						<h1 class="text-2xl mb-4">{{ image.title }}</h1>
						<p class="tracking-wide">{{ image.message }}</p>
					</div>
				</div>
			</hooper-slide>
			<hooper-navigation slot="hooper-addons" />
			<hooper-pagination slot="hooper-addons" />
		</hooper>

		<div class="container mx-auto px-4">
			<div class="flex flex-wrap -mx-4 my-8">
				<div class="flex flex-col px-4 w-full md:w-1/3 mb-8">
					<div class="flex flex-col flex-1 p-4 shadow-full border-2">
						<h2 class="text-lg text-brand mb-2 border-r-4 pr-2 border-brand">منتجات الدهانات الداخليه</h2>
						<div class="h-32 my-4">
							<img class="w-full h-full object-cover" src="../../images/interiors.png" alt="Room paints">
						</div>
						<p class="flex-1">.اعرف اكثر عن انواع الدهانات المختلفه المناسبة للدواخل, مثل حوائط الغرف و المطبخ او الحمام</p>
						<router-link class="btn" to="/interior-products">مشاهده</router-link>
					</div>
				</div>

				<div class="flex flex-col px-4 w-full md:w-1/3 mb-8">
					<div class="flex flex-col flex-1 p-4 shadow-full border-2">
						<h2 class="text-lg text-brand mb-2 border-r-4 pr-2 border-brand">منتجات الدهانات الخارجيه</h2>
						<div class="h-32 my-4">
							<img class="w-full h-full object-cover" src="../../images/exteriors.png" alt="Exterior Paints">
						</div>
						<p class="flex-1">انواع الدهانات المقاومه للاتربة و الفطريات و الرطوبة و المعده بتقنيات تجعلها الاختيار الافضل.</p>
						<router-link class="btn" to="/exterior-products">مشاهده</router-link>
					</div>
				</div>

				<div class="flex flex-col px-4 w-full md:w-1/3 mb-8">
					<div class="flex flex-col flex-1 p-4 shadow-full border-2">
						<h2 class="text-lg text-brand mb-2 border-r-4 pr-2 border-brand">احصل علي الالهام</h2>
						<div class="h-32 my-4">
							<img class="w-full h-full object-cover" src="../../images/inspiration.png" alt="Exterior Paints">
						</div>
						<p class="flex-1">تعرف علي احدث صيحات الموضه فى الديكورات, نقدم لك بعض التصميمات المقترحه لتجد ما يناسبك بسهوله.</p>
						<router-link class="btn" to="/inspiration">مشاهده</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Hooper, Slide as HooperSlide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
	import {Slide as Burger} from "vue-burger-menu";
	export default {
		name: "Index",
		components: { Hooper, HooperSlide, HooperNavigation, HooperPagination },
		data() {
			return {
				images: [
					{
						url: 'images/hero-image.png',
						title: 'اختار الانسب لإحتيجاتك',
						message: 'يمكن أن يؤدي اللون إلى تحويلك. سنساعدك في إجراء تغييرات كبيرة أو صغيرة من البداية إلى النهاية.'
					},
					{
						url: 'images/hero-image-2.png',
						title: 'استعد للإلهام',
						message: 'اختيار الالوان المريحه المناسبة يهيئ جو مناسب من اجل الابتكار.'
					},
					{
						url: 'images/hero-image-3.png',
						title: 'الالوان تصنع',
						message: 'بأمكانك اضافه مساحات عن طريق اختيار الالوان المناسبه.'
					},
				]
			}
		}
	}
</script>