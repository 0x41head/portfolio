<script>
    import { zindex_about,zindex2,display_about,display2 } from '../../stores/stores.js';
    function click_about_logo() {
        zindex_about.update((n)=>1000);
		zindex2.update((n)=>0);
        display_about.update((n)=>true);
  }
  function clickbo2() {
        zindex_about.update((n)=>0);
		zindex2.update((n)=>1000);
        display2.update((n)=>true);
  }
</script>

<style>

    .iconList{
        position:relative;
        margin-top:0px;
        width:200px;
        margin-left:0px;
        height: 100%;
        background-color: #F1F0E8;
    }
    img{
        width:50px;
    }
    .btn {
        cursor: pointer;
        background-color: transparent;
        border-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 75px;
    }

</style>

<div class="iconList">
<button class="btn" on:click={click_about_logo}>
    <img src='./about.svg'/>
    about
</button>
<br/>
<button class="btn" on:click={clickbo2}>
    <img src='./project.svg'/>
    projects
</button>
</div>


