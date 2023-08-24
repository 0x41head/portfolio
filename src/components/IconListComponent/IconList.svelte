<script>
    import { zindex1,zindex2,display1,display2 } from '../../stores/stores.js';
</script>

<style>

    .iconList{
        position:relative;
        margin-top:0px;
        width:200px;
        margin-left:0px;
        height: 100%;
        background-color: aquamarine;
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
<button class="btn">
    <img src='./icon.svg'/>
    about
</button>
<br/>
    <img src='./icon.svg'/>
    about
</div>


