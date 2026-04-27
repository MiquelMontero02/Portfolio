<script setup lang="ts">
import type { Experience } from '@/types/cv';

defineProps<{
  data: Experience[];
}>();

const safeFormatDate = (date: string | undefined): string => {
  if (!date) return '-';
  if (date === 'Present') return 'Present';
  const parts = date.split('-');
  const year = parts[0];
  const month = parts[1];
  if (!year || !month) return date;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[parseInt(month) - 1]} ${year}`;
};
</script>

<template>
  <section class="experience-section">
    <h2 class="section-title">
      <span class="bracket">[</span>
      Experience
      <span class="bracket">]</span>
    </h2>
    <div class="timeline">
      <div v-for="exp in data" :key="exp.id" class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="header">
            <h3 class="position">{{ exp.position }}</h3>
            <span class="company">{{ exp.company }}</span>
          </div>
          <div class="dates">
            <span class="date">{{ safeFormatDate(exp.startDate) }}</span>
            <span class="separator">→</span>
            <span class="date" :class="{ present: exp.endDate === 'Present' }">{{ safeFormatDate(exp.endDate) }}</span>
          </div>
          <p class="description">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
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

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #00ffff, #ff00ff, #00ffff);
  box-shadow: 0 0 10px #00ffff;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: #00ffff;
  border: 2px solid #00ffff;
  box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
  transform: rotate(45deg);
}

.timeline-content {
  background: rgba(26, 26, 46, 0.8);
  border: 2px solid #00ffff;
  padding: 1rem;
  position: relative;
  transition: all 0.15s;
}

.timeline-content:hover {
  border-color: #ff00ff;
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.3);
}

.header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.position {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.6rem;
  color: #00ffff;
  text-shadow: 0 0 5px #00ffff;
  margin: 0;
}

.company {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  color: #ff00ff;
  text-shadow: 0 0 5px #ff00ff;
}

.dates {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.date {
  font-family: 'VT323', monospace;
  font-size: 1rem;
  color: #39ff14;
  text-shadow: 0 0 5px #39ff14;
}

.date.present {
  color: #ffff00;
  text-shadow: 0 0 5px #ffff00;
  animation: blink 1s steps(2, start) infinite;
}

.separator {
  color: #e0e0e0;
}

.description {
  font-family: 'VT323', monospace;
  font-size: 1rem;
  color: #e0e0e0;
  margin: 0;
  line-height: 1.4;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>