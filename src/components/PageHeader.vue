<template>
  <nav class="site-nav">
    <div class="container">
      <div class="site-navigation">
        <router-link to="/sgwonder/">
          <img src="/logo.png" alt="sgwonderLogo" width="130" height="40" />
        </router-link>
        <ul
          class="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right"
        >
          <li :class="{ active: isActive('/sgwonder/') }">
            <router-link to="/sgwonder/">首页</router-link>
          </li>
          <li :class="{ active: isActive('/dropdown') }" class="has-children">
            <router-link to="/sgwonder/services">我们的服务</router-link>
            <ul class="dropdown">
              <li :class="{ active: isActive('/sgwonder/Services_StudyTour') }">
                <router-link to="/sgwonder/Services_StudyTour"
                  >游学团</router-link
                >
              </li>
              <li class="has-children">
                <a>新加坡一日游</a>
                <ul class="dropdown">
                  <li><a href="#">新加坡南岛风情</a></li>
                </ul>
              </li>
              <li class="has-children">
                <a>周边游</a>
                <ul class="dropdown">
                  <li>
                    <router-link to="/sgwonder/services_batam"
                      >巴淡岛</router-link
                    >
                  </li>
                  <li><a href="#">新山</a></li>
                </ul>
              </li>
              <li><a href="#">地接</a></li>
            </ul>
          </li>
          <li :class="{ active: isActive('/sgwonder/about') }">
            <a href="/sgwonder/about">关于我们</a>
          </li>
          <li :class="{ active: isActive('/sgwonder/contact') }">
            <router-link to="/sgwonder/contact">联系我们</router-link>
          </li>
        </ul>

        <a
          href="#"
          class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
          data-toggle="collapse"
          data-target="#main-navbar"
        >
          <span></span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "PageHeader",
  setup() {
    const route = useRoute();

    const isActive = (path) => {
      return route.path === path;
    };

    return { isActive };
  },
};
</script>
