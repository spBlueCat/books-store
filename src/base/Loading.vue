<template>
    <div class="box">
      <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <div class="loader-05"></div>
    </div>
</template>

<style scoped>
 /* body {
    background: #323943;
    text-align: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: sans-serif;
    color: rgba(200, 200, 200, 0.5);
  }
  body *,
  body *:before,
  body *:after {
    box-sizing: inherit;
  }*/
  .box {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid currentcolor;
    border-radius: 3px;
    font-size: 30px;
    color: rgba(255, 123, 123, 0.5);
    padding: 0;
    margin-bottom: 0;
    vertical-align: top;
    -webkit-transition: .3s color, .3s border;
    transition: .3s color, .3s border;
  }
  .box:hover {
    color: #d60b52;
    font-size: 0;
    padding: 0;
    border-width: 3px;
    line-height: 200px;
  }
  .box:hover [class*="loader-"] {
    font-size: 70px;
    line-height: 200px;
  }
  [class*="loader-"] {
    display: inline-block;
    width: 1em;
    height: 1em;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
  }
  .loader-05 {
    border: .2em solid transparent;
    border-top-color: currentcolor;
    border-radius: 50%;
    -webkit-animation: 1s loader-05 linear infinite;
    animation: 1s loader-05 linear infinite;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .loader-05:before {
    content: '';
    display: block;
    width: inherit;
    height: inherit;
    position: absolute;
    top: -.2em;
    left: -.2em;
    border: .2em solid currentcolor;
    border-radius: 50%;
    opacity: .5;
  }
  @-webkit-keyframes loader-05 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loader-05 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
