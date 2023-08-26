<script>
    import { zindex1,zindex2,display1,display2 } from '../../stores/stores.js';
    function clickboi1() {
        zindex1.update((n)=>1000);
		zindex2.update((n)=>0);
        display1.update((n)=>true);
        visible=!visible;
  }
  function clickbo2() {
        zindex1.update((n)=>0);
		zindex2.update((n)=>1000);
        display2.update((n)=>true);
        visible=!visible;
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
    }

</style>

<div class="iconList">
<button class="btn" on:click={clickboi1}>
    <img src='./icon.svg'/>
    about
</button>
<br/>
<button class="btn" on:click={clickbo2}>
    <img src='./icon.svg'/>
    about
</button>
</div>


