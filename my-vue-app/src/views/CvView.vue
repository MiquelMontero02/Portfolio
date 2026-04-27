<script setup lang="ts">
import { computed } from 'vue';
import PersonalInfo from '@/components/sections/cv/PersonalInfo.vue';
import ContactLinks from '@/components/sections/cv/ContactLinks.vue';
import ExperienceSection from '@/components/sections/cv/ExperienceSection.vue';
import SkillsSection from '@/components/sections/cv/SkillsSection.vue';

import personalData from '@/data/personal.json';
import socialData from '@/data/social.json';
import experienceData from '@/data/experience.json';
import skillsData from '@/data/skills.json';

import type { PersonalInfo as PersonalInfoType, SocialLinks, Experience, Skills } from '@/types/cv';

const personal = computed(() => personalData as PersonalInfoType);
const social = computed(() => socialData as SocialLinks);
const experience = computed(() => experienceData.experiences as Experience[]);
const skills = computed(() => skillsData as Skills);
</script>

<template>
  <div class="cv-view">
    <PersonalInfo :data="personal" />
    <ContactLinks :data="social" />
    <ExperienceSection :data="experience" />
    <SkillsSection :data="skills" />
  </div>
</template>

<style scoped>
.cv-view {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}
</style>