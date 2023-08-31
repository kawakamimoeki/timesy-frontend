<script lang="ts">
	export let href: string;
	export let text: string;
</script>

<a
	{href}
	class="py-1 px-2 hover:bg-gray-50 rounded-lg dark:hover:bg-gray-700 transition-all dark:text-gray-200 flex items-center space-x-1 font-bold text-gray-700 hover:shadow-sm"
>
	{text}
</a>
