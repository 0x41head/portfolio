<script>
    import { onMount } from "svelte";

    
    import { fly } from 'svelte/transition';
    import { zindex_about,zindex2,display_about,display2 } from '../../stores/stores.js';

    let clientIP = ""; 
    let visible = false;
    onMount(async () => {
        fetch("http://www.geoplugin.net/json.gp")
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            clientIP=data.geoplugin_request;
    }).catch(error => {
        console.log(error);
        return [];
        });
    });

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

    .sideBarButtonHalf{
        height:100%;
        width: 50%;
        position:absolute;
    }

    .sideBarNonButtonHalf{
        height:100%;
        width: 50%;
        background-color: #96B6C5;
        border-left:2px solid;
        border-color: #102C57;
        text-align: center;
        align-items: center;
        position:absolute;
        right: 0;
        padding-top: 2%;
    }

    .buttonImg{
        height:20px;
        margin-right: 10px;
    }

    .applicationLauncherImgClass{
        height:100%;
        width: 100%;
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

    .nonButtonImg{
        height: 100px;
        border: 2px solid #EEE0C9;
        border-radius: 5px;
    }

</style>
{#if visible}
<div 
    in:fly={{ y: 200, duration: 500 }}
    out:fly={{ y: 200, duration: 500 }}
    class="applicationLauncher" 
>
<div class="top-style-div" ></div>
<div class="sideBarButtonHalf">
<button class="applicationBtnClass" on:click={click_application_launcher_about}>
    <img src='./about.svg' class="buttonImg"/>
    about
</button>
<button class="applicationBtnClass" on:click={clickbo2}>
    <img src='./project.svg' class="buttonImg"/>
    projects
</button>
<button class="applicationBtnClass" on:click={()=>{ 
    window.open("https://github.com/0x41head/", "_blank");
    visible=!visible}
}>
    <img src='./github.svg' class="buttonImg"/>
    github
</button>
</div>
<div class="sideBarNonButtonHalf">
    <img src='./girl.jpg' class="nonButtonImg"/><br/>
    {clientIP}
</div>
</div>
{/if}
<div class="bottomBar">
    <button on:click={()=>{visible=!visible}} class="applicationLauncherBtnClass" >
        <img src='./icon.svg' class="applicationLauncherImgClass">
    </button>
</div>


