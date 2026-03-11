<template> 

<div class="rule-container">
  <div class="rule rule-1"></div>
  <hr>
  <div class="rule rule-2"></div>
  <hr>
  <div class="rule rule-3"></div>
  <hr>
</div>
</template>

<style scoped> 
.rule-container {
  margin: 1rem auto;
}

hr {
    display: none;
}

div.rule {
    height: 5px;
}

.rule-1, .rule-3 {
  background: #A6A6A6;
    height: 5px;
}

.rule-2 {
  background: #EEEEE6;
  height: 5px;
}
</style>
