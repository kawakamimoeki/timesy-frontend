<script lang="ts">
	import '../css/app.css';
	import '../css/activities.css';
	import '../css/codemirror.css';
	import '../css/global.css';
	import '../css/markdown.css';
	import '../css/modal.css';
	import 'virtual:uno.css';
	import BlockLink from '$lib/BlockLink.svelte';
	import IconLink from '$lib/IconLink.svelte';
</script>

<header class="w-full shadow-sm bg-white dark:bg-dark-background dark:text-gray-200 z-0">
	<div class="flex max-w-3xl mx-auto px-4 items-center py-2 text-sm">
		<span class="dark:hidden" />
		<span class="hidden dark:block" />
		<div class="grow" />
		<div class="h-[40px] z-[100]">
			<div class="flex items-center z-[100]">
				<IconLink href="/search" icon="lucide-search" />
				<div class="mr-1 flex">
					<button
						class="block rounded-full hover:shadow-sm transition-all text-lg text-gray-600 dark:text-gray-300 cursor-pointer p-relative p-2 hover:bg-gray-50 dark:hover:bg-gray-700 mr-1 sm:block"
					>
						<div class="i-lucide-sun" />
					</button>
					<button
						class="block rounded-full hover:shadow-sm transition-all text-lg text-gray-600 dark:text-gray-300 cursor-pointer p-relative p-2 hover:bg-gray-50 dark:hover:bg-gray-700 mr-1 sm:block"
					>
						<div class="i-lucide-moon" />
					</button>
				</div>
				<BlockLink href="/users/sign_in" text="ログイン" />
				<BlockLink href="/users/sign_up" text="はじめる" />
				<button
					class="block rounded-full hover:shadow-sm transition-all text-lg text-gray-600 dark:text-gray-300 cursor-pointer p-relative p-2 hover:bg-gray-50 dark:hover:bg-gray-700 mr-1 sm:block ml-1"
				>
					<div class="i-lucide-menu" />
				</button>
			</div>
		</div>
	</div>
</header>

<main class="w-full">
	<slot />
</main>

<div id="image-modal" class="modal micromodal-zoom" aria-hidden="true">
	<div class="modal__overlay" tabindex="-1" data-micromodal-close>
		<div role="dialog" aria-modal="true" class="modal__container">
			<img
				id="image-modal-image"
				class="max-w-[900px] w-screen h-screen object-contain"
				src=""
				alt=""
				data-micromodal-close
			/>
		</div>
	</div>
</div>
