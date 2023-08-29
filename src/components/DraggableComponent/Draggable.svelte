<script>
	export let left = 500;
	export let top = 20;
	export let zindex =20 ;
	export let nameOfWindow = "window" ;
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
		border: solid 1px #102C57;
		background-color:#EEE0C9;
		position: absolute;
	}
	.topbar{
		position:absolute;
		margin-top:0px;
		background-color:#ADC4CE;
        border-bottom: solid 1px #102C57;
		height:20px;
		width:100%
	}
	.buttons{		
		background-color:#ADC4CE;
        border: solid 1px#102C57;
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
		{nameOfWindow}
		<button 
            class="buttons"
            on:click={close}>
            X
        </button>
	</div>
	<div class="text"><slot></slot></div>
	
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />