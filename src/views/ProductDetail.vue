<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carouse">
            <ol class="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div :class="`carousel-item ${i==0?'active':''}`" v-bind:key="i" v-for="(pimg, i) in productImage">
                <img :src="`/download/${productId}/${pimg.path}`" class="d-block w-100" alt="...">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
