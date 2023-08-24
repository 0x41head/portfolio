<script>
	export let left = 500;
	export let top = 500;
	export let zindex =20 ;
	let moving = false;
	import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  function toggle() {
     dispatch('toggle')
  }

	function close() {
     dispatch('close')
  }
	
	function onMouseDown() {
		moving = true;
	}
	
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
		
	}
	
// 	$: console.log(moving);
</script>

<style>
	.draggable {
		user-select: none;
		cursor: move;
		border: solid 1px gray;
		background-color:orange;
		position: absolute;
	}
	.topbar{
		position:absolute;
		margin-top:0px;
		background-color:yellowgreen;
        border-bottom: solid 1px black;
		height:20px;
		width:100%
	}
	.buttons{		
		background-color:yellowgreen;
        border: solid 1px black;
		float: right;
		font-size:10px;
        height:20px;
	}
	.text{
		padding:5px;
	}
</style>

<section 
	on:mousedown={onMouseDown}  
	on:click={toggle}
	style="left: {left}px; 
	top: {top}px ;
	z-index:{zindex}; "
	class="draggable">
	<div class="topbar">
		window
		<button 
            class="buttons"
            on:click={close}>
            X
        </button>
	</div>
	<div class="text"><slot></slot></div>
	
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />