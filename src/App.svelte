<script>
    import BottomBar from "./components/BottomBarComponent/BottomBar.svelte";
    import Draggable from "./components/DraggableComponent/Draggable.svelte";
    import IconList from "./components/IconListComponent/IconList.svelte";
	import { 
		zindex_about,
		zindex_projects,
		display_about,
		display_projects,
		source_about,
		left_about,
		left_projects,
		source_projects } from './stores/stores.js';
	import SvelteMarkdown from 'svelte-markdown'

	function onClick_about() {
		zindex_about.update((n)=>1000);
		zindex_projects.update((n)=>0);
		console.log('here')
	}
	function onClick2() {
		zindex_about.update((n)=>0);
		zindex_projects.update((n)=>1000);
	}
	function onClose_about() {
		display_about.update((n)=>false);
	}
	function onClose2() {
		display_projects.update((n)=>false);
	}
</script>

<BottomBar/>
<IconList/>

{#if $display_about}
<Draggable on:toggle={onClick_about} 
	on:close={onClose_about}  
	zindex={$zindex_about} 
	left={$left_about}
	nameOfWindow={"about"}>
	<SvelteMarkdown  source={source_about} />
</Draggable>
{/if}

{#if $display_projects}
<Draggable on:toggle={onClick2} 
	on:close={onClose2} 
	zindex={$zindex_projects} 
	left={$left_projects}
	nameOfWindow={"projects"} >
	<SvelteMarkdown  source={source_projects} />
</Draggable>
{/if}
