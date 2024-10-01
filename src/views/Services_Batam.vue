<template>
  <ServiceBatamHeroSection />

  <div class="untree_co-section">
    <div class="container">
      <div class="col-lg-6 mx-auto text-center">
        <div class="intro-wrap">
          <h1 class="mb-0">巴淡岛</h1>
          <p class="text-dark">
            提供 一日游， 两日游，
            按你所需量身定制，包括路线规划、酒店预订、交通安排、导游服务等！
          </p>
        </div>
      </div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            data-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            行程概述
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            data-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            包含
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-toggle="pill"
            data-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            不包含
          </button>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <h2 class="section-title text-center mb-3">行程</h2>

          <div class="itinerary-day">
            <h3 class="day-title">第 1 天 （新加坡时间）</h3>
            <p>
              请于出发前 90
              分钟在港湾中心集合，并前往渡轮运营商柜台领取登船证。领取登船证的程序将依据渡轮运营商的确认安排。从新加坡到巴淡岛的渡轮行程通常需时约
              45 分钟至 1 小时。
            </p>
          </div>
          <h4 class="sub-section-title">(当地时间) 行程概述：</h4>
          <ul class="itinerary-list">
            <li>
              📌 在
              <strong>GOLD COAST BATAM</strong>
              享用简便早餐，欣赏自然美景，拍摄难忘瞬间。
            </li>
            <li>
              📌 在
              <strong>ELITE ADVENTURE & SEA SPORT</strong>
              享受水上运动，如水上摩托艇、滑翔伞等。
            </li>
            <li>
              📌 参观
              <strong>郑和清真寺</strong>，体验中国和伊斯兰文化的完美结合。
            </li>
            <li>
              📌 探索
              <strong>KOFFIE FACTORY</strong>
              的健康咖啡奥秘，亲身体验完美酿制的咖啡。
            </li>
            <li>📌 在 <strong>黄金城</strong> 购买新鲜正宗的自制千层蛋糕。</li>
            <li>
              📌 在
              <strong>黄金虾活海鲜餐厅</strong>
              享用美味的海鲜午餐，体验传统印尼风情。
            </li>
            <li>
              📌 欣赏 <strong>库达伦邦舞</strong> 表演，体验爪哇传统文化。
            </li>
            <li>📌 体验卡丁车比赛，并探索蜡染和黄金工厂奥特莱斯。</li>
            <li>
              📌 参观
              <strong>DINO'S GATE BATAM</strong>
              的恐龙复制品世界和迷你动物园。
            </li>
            <li>📌 参观巴淡岛佛教寺庙，体验宁静与文化的完美融合。</li>
            <li>📌 参观乳胶工坊，了解天然乳胶的制作过程。</li>
            <li>📌 在 <strong>巴淡购物中心</strong> 享受最后的购物乐趣。</li>
            <li>📌 可选择享受印尼传统按摩，结束一天的精彩行程。</li>
          </ul>

          <h3 class="day-title">第 2 天(当地时间)</h3>
          <ul class="itinerary-list">
            <li>
              享用 06:00 至 10:00 的悠闲早餐。早餐后，您可以自由放松和休闲。
            </li>
            <li>
              11:00 时退房,并被送往渡轮码头。接客时间将在您抵达时由导游通知。
            </li>
            <li>
              接客时间大约在 11:00 至 12:00
              之间。准确时间将在您抵达时由导游通知。
              此接送将通过与其他旅客合并乘坐或使用共享巴士服务进行。
            </li>
          </ul>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="include-day">
            <h3 class="include-title">包含</h3>
            <ul class="include-list">
              <li>新加坡至巴淡岛往返渡轮票（含所有税费）。</li>
              <li>根据行程安排，参加 1 天的巴淡岛城市及购物游。</li>
              <li>
                1 份 Gold Coast Batam
                轻早餐（注：如因游客错过渡轮或更改至第二天的行程套餐，早餐将作废）。
              </li>
              <li>1 次 Golden Prawn 餐厅海鲜午餐。</li>
              <li>持疫苗接种证明的导游，提供英语、普通话或双语服务。</li>
            </ul>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div class="exclude-day">
            <h3 class="exclude-title">不包含</h3>
            <ul class="exclude-list">
              <li>每人每天 SGD 4 导游和司机小费。</li>
              <li>
                个人保险、客房服务、自选游览项目、行李搬运费、签证费及所有个人性质的费用。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PageServicesSection />
  <PageContactBanner />
</template>

<script>
import PageServicesSection from "../components/PageServicesSection.vue";
import PageContactBanner from "../components/PageContactBanner.vue";
import ServiceDetailSection1 from "../components/ServiceDetailSection1.vue";
import ServiceDetailSection2 from "../components/ServiceDetailSection2.vue";
import ServiceBatamHeroSection from "../components/ServiceBatamHeroSection.vue";

export default {
  name: "Services",
  components: {
    ServiceBatamHeroSection,
    ServiceDetailSection1,
    ServiceDetailSection2,
    PageServicesSection,
    PageContactBanner,
  },
};
</script>
