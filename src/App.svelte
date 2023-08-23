<script>
    import BottomBar from "./components/BottomBarComponent/BottomBar.svelte";
    import Draggable from "./components/DraggableComponent/Draggable.svelte";
    import IconList from "./components/IconListComponent/IconList.svelte";
	let index;
	let index2;
	let display1;
	let display2;
	function onClick() {
		index=11000;
		index2=0;

	}
	function onClick2() {
		index=0;
		index2=1000;
	}
	function onClose() {
		display1='none'
	}
	function onClose2() {
		display2='none'
	}
</script>

<BottomBar/>
<IconList/>
<Draggable on:toggle={onClick} on:close={onClose} display={display1} zindex={index}>
	<h1>
		Drag Me
	</h1>
	gdsfd
</Draggable>

<Draggable  on:toggle={onClick2} on:close={onClose2} display={display2} zindex={index2} >
	<h3>
		Anothher draggable
	</h3>
</Draggable>

