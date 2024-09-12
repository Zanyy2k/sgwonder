<template>
  <div class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="intro-wrap">
            <h1 class="mb-5">
              <span class="d-block">期待与您一起</span>漫游
              <span class="typed-words"></span>
              <!-- <span class="d-block">Let's Enjoy Your</span> Trip In
              <span class="typed-words"></span> -->
            </h1>

            <div class="row">
              <div class="col-12">
                <form class="form">
                  <div class="row mb-2">
                    <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                      <select name="" id="" class="form-control custom-select">
                        <option value="">Destination</option>
                        <option value="">Peru</option>
                        <option value="">Japan</option>
                        <option value="">Thailand</option>
                        <option value="">Brazil</option>
                        <option value="">United States</option>
                        <option value="">Israel</option>
                        <option value="">China</option>
                        <option value="">Russia</option>
                      </select>
                    </div>
                    <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-5">
                      <input
                        type="text"
                        class="form-control"
                        name="daterange"
                      />
                    </div>
                    <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="# of People"
                      />
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                      <input
                        type="submit"
                        class="btn btn-primary btn-block"
                        value="Search"
                      />
                    </div>
                    <div class="col-lg-8">
                      <label class="control control--checkbox mt-3">
                        <span class="caption">Save this search</span>
                        <input type="checkbox" checked="checked" />
                        <div class="control__indicator"></div>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="slides">
            <img
              src="/images/marinaBay.jpg"
              alt="Image"
              class="img-fluid active"
            />
            <img src="/images/twintwr.jpg" alt="Image" class="img-fluid" />
            <img src="/images/indobali.jpg" alt="Image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeroSection",
};

$(function () {
  var slides = $(".slides"),
    images = slides.find("img");

  images.each(function (i) {
    $(this).attr("data-id", i + 1);
  });

  var typed = new Typed(".typed-words", {
    strings: ["狮城新加坡!", " 马来西亚!", "印尼!"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 4000,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    preStringTyped: (arrayPos, self) => {
      arrayPos++;
      console.log(arrayPos);
      $(".slides img").removeClass("active");
      $('.slides img[data-id="' + arrayPos + '"]').addClass("active");
    },
  });
});
</script>

<style scoped>
/* Your styles here */
</style>
