<template>
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap -mx-4 my-8">
			<div class="flex flex-col px-4 w-full md:w-1/2 mb-8" v-for="product in products">
				<div class="flex-1 p-4 shadow-full border-2">
					<h2 class="text-lg text-brand mb-2 border-r-4 pr-2 border-brand">{{ product.name }}</h2>
					<p>{{ product.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Exterior",
		data() {
			return {
				products: [
					{
						name: 'بلاتينوم للاسطح الخارجيه',
						description: 'يوفر تقنية الالتصاق الشديد حماية جميلة بأقل جهد..'
					},
					{
						name: 'جدران نظيفه',
						description: 'بتقنيه مقاومة للأوساخ هي اختيارك للحصول على لمسة نهائية خارجية تبقى جميلة سنة بعد سنة.'
					},
					{
						name: 'البقاء الطويل للاسطح الخارجيه',
						description: 'توفر تقنية منع الأشعة فوق البنفسجية مقاومة استثنائية للبهتان و التغطيه للحصول على لون جميل يدوم طويلاً.'
					},
					{
						name: 'مقاومة للتشققات',
						description: 'تحافظ التقنيه المقاومة للأوساخ على المظهر الخارجي نظيفًا وجميلاً. توفر هذه الطبقة المتينة طبقة خارجية مقاومة للأوساخ والفطريات، كما توفر إمكانية تغطية فائقة، التصاق رائع ومقاومة للتشققات، والقص، والتواء، والبهتان.'
					}
				]
			}
		}
	}
</script>