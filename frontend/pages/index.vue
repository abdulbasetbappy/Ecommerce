<script setup>
definePageMeta({
    layout: "home",
});


const categories = ref([
    { icon: "mingcute:cellphone-line", label: "Phones" },
    { icon: "mdi:desktop-classic", label: "Computers" },
    { icon: "mdi:watch", label: "SmartWatch" },
    { icon: "mdi:camera", label: "Camera" },
    { icon: "mdi:headphones", label: "HeadPhones" },
    { icon: "mdi:gamepad-variant", label: "Gaming" },
    { icon: "mdi:microphone", label: "Microphone" },
    { icon: "mdi:cellphone", label: "Clothing" },
    { icon: "mdi:desktop-classic", label: "Electronics" },
    { icon: "mdi:watch", label: "Home Appliances" },
    { icon: "mdi:camera", label: "jewelery" },
]);
const products = ref([]);

    try {
        await fetch("/api/products")
            .then((response) => response.json())
            .then((data) => {
                products.value = data;
            });

    } catch (err) {
        console.log(err)
    }


</script>

<template>
    <NuxtLayout :name="home">
        <Suspense>
            <div class="md:px-4 md:pb-6 pb-2">
                <CategorySlider class="container mx-auto" />
            </div>
        </Suspense>
        <div class="md:w-10/12 px-4 md-px-0 w-full mx-auto">
            <Suspense>
                <FeaturesItem />
            </Suspense>
            <Suspense>
                <FeaturesOffers :items="products" />
            </Suspense>
            <Suspense>
                <FeaturesCategories :items="categories" />
            </Suspense>
            <Suspense>
                <div class="flex items-center justify-between mb-8 text-left mt-16">
                    <TitleWithSub title="This Month" subtitle="Best Selling Products" />
                    <NuxtLink to="/productPage/asdfasdf">
                        <Button class="w-32"> View All </Button>
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <ProductCard class="mt-8 md:mt-10" v-for="product in products.slice(0, 8)" :key="product.id" :product="product"/>
                </div>
            </Suspense>
            <Suspense>
                <ProductOur :items="products" />
            </Suspense>
            <Suspense>
                <ResponsiveGallery />
            </Suspense>
            <Suspense>
                <Brand />
            </Suspense>
            <Suspense>
            <FlashSale
                category="Categories"
                headline="Enhance Your Music Experience"
                imageSrc="/images/jbl-speaker.png"
                imageAlt="JBL Speaker"
                buttonText="Buy Now!"
                :endTime="new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000)"
                />
            </Suspense>
        </div>

        
    </NuxtLayout>
</template>
