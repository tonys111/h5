<template>
    <div class="home">
        <div aspectratio w-188-246 class="box">
            <div aspectratio-content>content</div>
        </div>
        <div>
            <p>123uidoea</p>
        </div>
    </div>
    
</template>

<style lang="postcss">
.box{
    width: 120px;
}
[aspectratio] {
  position: relative;
}
[aspectratio]::before {
  content: '';
  display: block;
  width: 1px;
  margin-left: -1px;
  height: 0;
}
[aspectratio-content] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
[w-188-246] {
  aspect-ratio: '1:2';
}
p{
    height: 100px;
}
</style>

