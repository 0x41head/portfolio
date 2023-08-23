<script>
    let visible = false;
    import { fly } from 'svelte/transition';

    function clickboi() {
    visible=!visible;
  }
  
</script>
<style>
    .bottomBar{
        position:absolute;
        height:50px;
        bottom:0px;
        left:0px;
        width: 100%;
        background-color: antiquewhite;
        z-index: 1000;
    }
    .applicationLauncher{
        position:absolute;
        height:50%;
        min-height:450px;
        bottom:0px;
        left:0px;
        width: 30%;
        min-width:250px ;
        background-color: lightseagreen;
        z-index: 1000;
       
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
        
    }

    .applicationBtnClass:hover {
        background-color: #3e8e41;
    }


</style>
{#if visible}
<div 
    in:fly={{ y: 200, duration: 500 }}
    out:fly={{ y: 200, duration: 500 }}
    class="applicationLauncher" 
>
<button class="applicationBtnClass" on:click={clickboi}>
    <img src='./icon.svg'/>
    about
</button>
<button class="applicationBtnClass" on:click={clickboi}>
    <img src='./icon.svg'/>
    about
</button>
</div>
{/if}
<div class="bottomBar">
    <button on:click={clickboi} class="applicationLauncherBtnClass" >
        <img src='./icon.svg' class="applicationLauncherImgClass">
    </button>
</div>


