<script setup lang="ts">
import type { Skills } from '@/types/cv';

defineProps<{
  data: Skills;
}>();

const getLevelClass = (level?: string): string => {
  switch (level) {
    case 'Expert': return 'level-expert';
    case 'Advanced': return 'level-advanced';
    case 'Intermediate': return 'level-intermediate';
    case 'Basic': return 'level-basic';
    default: return '';
  }
};

const getLevelBars = (level?: string): number => {
  switch (level) {
    case 'Expert': return 4;
    case 'Advanced': return 3;
    case 'Intermediate': return 2;
    case 'Basic': return 1;
    default: return 0;
  }
};
</script>

<template>
  <section class="skills-section">
    <h2 class="section-title">
      <span class="bracket">[</span>
      Skills
      <span class="bracket">]</span>
    </h2>

    <div class="skills-grid">
      <div class="skills-category">
        <h3 class="category-title">Tech Skills</h3>
        <div class="skills-list">
          <div 
            v-for="skill in data.techSkills" 
            :key="skill.name" 
            class="skill-item"
          >
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-bar" :class="getLevelClass(skill.level)">
              <div 
                v-for="i in 4" 
                :key="i" 
                class="bar"
                :class="{ filled: i <= getLevelBars(skill.level) }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-category">
        <h3 class="category-title">Soft Skills</h3>
        <div class="soft-skills">
          <span 
            v-for="skill in data.softSkills" 
            :key="skill.name" 
            class="soft-skill-tag"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 2rem 1rem;
}

.section-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  color: #ff00ff;
  text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.bracket {
  color: #00ffff;
  text-shadow: 0 0 5px #00ffff;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skills-category {
  background: rgba(26, 26, 46, 0.8);
  border: 2px solid #00ffff;
  padding: 1.5rem;
  position: relative;
}

.skills-category::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff);
  z-index: -1;
  opacity: 0.2;
  filter: blur(10px);
}

.category-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.6rem;
  color: #00ffff;
  text-shadow: 0 0 5px #00ffff;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.skill-name {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  color: #e0e0e0;
  flex-shrink: 0;
}

.skill-bar {
  display: flex;
  gap: 4px;
}

.bar {
  width: 20px;
  height: 12px;
  background: rgba(0, 255, 255, 0.2);
  border: 1px solid #00ffff;
  transition: all 0.15s;
}

.bar.filled {
  background: #00ffff;
  box-shadow: 0 0 5px #00ffff;
}

.level-expert .bar.filled {
  background: #ff00ff;
  border-color: #ff00ff;
  box-shadow: 0 0 5px #ff00ff;
}

.level-advanced .bar.filled {
  background: #ffff00;
  border-color: #ffff00;
  box-shadow: 0 0 5px #ffff00;
}

.level-intermediate .bar.filled {
  background: #39ff14;
  border-color: #39ff14;
  box-shadow: 0 0 5px #39ff14;
}

.soft-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.soft-skill-tag {
  font-family: 'VT323', monospace;
  font-size: 1rem;
  color: #00ffff;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #00ffff;
  padding: 0.5rem 1rem;
  transition: all 0.15s;
  cursor: default;
}

.soft-skill-tag:hover {
  background: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  transform: translateY(-2px);
}
</style>