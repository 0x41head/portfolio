<script>
    import BottomBar from "./components/BottomBarComponent/BottomBar.svelte";
    import Draggable from "./components/DraggableComponent/Draggable.svelte";
    import IconList from "./components/IconListComponent/IconList.svelte";
	import { zindex1,zindex2,display1,display2 } from './stores/stores.js';

	function onClick() {
		zindex1.update((n)=>1000);
		zindex2.update((n)=>0);
		console.log('here')
	}
	function onClick2() {
		zindex1.update((n)=>0);
		zindex2.update((n)=>1000);
	}
	function onClose() {
		display1.update((n)=>false);
	}
	function onClose2() {
		display2.update((n)=>false);
	}
</script>

<BottomBar/>
<IconList/>

{#if $display1}
<Draggable on:toggle={onClick} on:close={onClose}  zindex={$zindex1}>
	<h1>
		Drag Me
	</h1>
	gdsfd
</Draggable>
{/if}

{#if $display2}
<Draggable on:toggle={onClick2} on:close={onClose2} zindex={$zindex2} >
	<h3>
		Anothher draggable
	</h3>
</Draggable>
{/if}
