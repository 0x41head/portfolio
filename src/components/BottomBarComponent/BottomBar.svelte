<script>
    let visible = false;
    import { fly } from 'svelte/transition';
    import { zindex_about,zindex2,display_about,display2 } from '../../stores/stores.js';

    function click_application_launcher_about() {
        zindex_about.update((n)=>1000);
		zindex2.update((n)=>0);
        display_about.update((n)=>true);
        visible=!visible;
  }
  function clickbo2() {
        zindex_about.update((n)=>0);
		zindex2.update((n)=>1000);
        display2.update((n)=>true);
        visible=!visible;
  }
  
</script>
<style>
    .bottomBar{
        position:absolute;
        height:40px;
        bottom:0px;
        left:0px;
        width: 100%;
        background-color: #96B6C5;
        z-index: 1000;
        border-top:2px solid;
        border-color: #102C57;
    }
    .applicationLauncher{
        position:absolute;
        height:50%;
        min-height:400px;
        bottom:0px;
        left:0px;
        width: 30%;
        min-width:250px ;
        background-color: #EEE0C9;
        z-index: 1000;
        border:2px solid;
        border-color: #102C57;
    }
    
    img{
        height:20px;
        margin-right: 10px;
    }

    .applicationLauncherImgClass{
        width: 100%;
        height: 100%;
    }

    .applicationBtnClass {
        cursor: pointer;
        background-color: transparent;
        border: none;
        border-color: transparent;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px;
        width: 100%;
    }

    .applicationLauncherBtnClass{
        margin: 0%;
        height: 100%;
        background-color: transparent;
        bottom: none;
        border-right:2px solid;
        border-color: #102C57;
        border-top:0px;
    }

    .applicationBtnClass:hover {
        background-color: #96B6C5;
    }
    .top-style-div{
        background-color: #96B6C5;
        height: 25px;
        border-bottom:2px solid;
        border-color: #102C57;
    }

</style>
{#if visible}
<div 
    in:fly={{ y: 200, duration: 500 }}
    out:fly={{ y: 200, duration: 500 }}
    class="applicationLauncher" 
>
<div class="top-style-div" ></div>
<button class="applicationBtnClass" on:click={click_application_launcher_about}>
    <img src='./about.svg'/>
    about
</button>
<button class="applicationBtnClass" on:click={clickbo2}>
    <img src='./project.svg'/>
    projects
</button>
</div>
{/if}
<div class="bottomBar">
    <button on:click={()=>{visible=!visible}} class="applicationLauncherBtnClass" >
        <img src='./icon.svg' class="applicationLauncherImgClass">
    </button>
</div>


