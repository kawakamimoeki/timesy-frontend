<script lang="ts">
	export let icon: string;
	export let href: string;
</script>

<a
	{href}
	class="block rounded-full hover:shadow-sm transition-all text-lg text-gray-600 dark:text-gray-300 cursor-pointer p-relative p-2 hover:bg-gray-50 dark:hover:bg-gray-700 mr-1 sm:block"
>
	<div class="i-{icon}" />
</a>
