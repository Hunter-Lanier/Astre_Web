<template>
    <div class="flex flex-col">
        <navbar-component class="z-50" />
        <hero-component id="hero" class="section" />
        <about-component id="about" class="section" />
        <feature-component id="features" class="section" />
        <roadmap-component id="roadmap" class="section" />
        <team-component id="team" class="section" />
        <contact-component id="contact" class="section" />
    </div>
</template>

<script>
import NavbarComponent from '../components/navbar-component.vue'
import HeroComponent from '../components/hero-component.vue'
import FeatureComponent from '../components/feature-component.vue';
import AboutComponent from '../components/about-component.vue';
import TeamComponent from '../components/team-component.vue';
import ContactComponent from '../components/contact-component.vue';
import RoadmapComponent from '../components/roadmap-component.vue';
export default {
    name: "App",
    components: {
        NavbarComponent,
        HeroComponent,
        FeatureComponent,
        AboutComponent,
        TeamComponent,
        ContactComponent,
        RoadmapComponent
    }
};
</script>

<style>
html {
    scroll-behavior: smooth;
    scroll-padding-top: 76px;
}

.section {
    scroll-margin-top: 76px;
}
</style>