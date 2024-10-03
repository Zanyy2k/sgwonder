<template>
  <div class="site-footer">
    <div class="inner first">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="widget">
              <!-- <h3 class="heading font-weight-bold">About SG WONDER</h3> -->
              <h3 class="heading font-weight-bold">关于 SG WONDER</h3>
              <!-- <p>
                Established in 2024, is a company officially registered with the
                Singapore Tourism Board.
              </p> -->
              <p>成立于2024年, 我们是一家正式注册于新加坡旅游局的公司。</p>
            </div>
            <div class="widget">
              <ul class="list-unstyled social">
                <li>
                  <a href="#"><span class="icon-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-linkedin"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-dribbble"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-pinterest"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-apple"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-google"></span></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-2 pl-lg-5">
            <div class="widget">
              <h3 class="heading font-weight-bold">公司</h3>
              <ul class="links list-unstyled">
                <li><a href="#">讯息</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">联系我们</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-2">
            <div class="widget">
              <h3 class="heading font-weight-bold">Products</h3>
              <ul class="links list-unstyled">
                <li><a href="#">酒店</a></li>
                <li><a href="#">游艇</a></li>
                <li><a href="#">一日游</a></li>
                <li><a href="#">私人定制</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="widget">
              <h3 class="heading font-weight-bold">Contact</h3>
              <ul class="list-unstyled quick-info links">
                <li class="email"><a href="#">sgwonder@hotmail.com</a></li>
                <li class="phone"><a href="#">+65 93896799</a></li>
                <li class="address">
                  <a href="#"
                    >109 Bukit Purmei Road, Bukit Purmei Ville, Singapore
                    090109</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="inner dark">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-8 mb-3 mb-md-0 mx-auto">
            <p>
              新加坡文化和旅游国际有限公司(202429962R) &copy;
              {{ currentYear }} . 版权所有
            </p>
            <p>
              Copyright &copy; {{ currentYear }} SG WONDER PTE. LTD.
              (202429962R). All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="overlayer"></div>
  <div class="loader">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style></style>
