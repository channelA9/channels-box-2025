<script setup lang="ts">
import FeatureItem from "../../components/homepage/FeatureItem.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiTranslate, RiGithubFill, RiLinkedinFill } from "oh-vue-icons/icons/ri";
import { IoCubeSharp } from "oh-vue-icons/icons/io";
import { onMounted } from "vue";
import { useLanguage } from "../../lib/useLanguage";
import { useBlogData } from "../../lib/useBlogData";
import Profile from "../../components/Profile.vue";

addIcons(RiTranslate, RiGithubFill, RiLinkedinFill, IoCubeSharp);

const { language, t, initLanguage } = useLanguage();

onMounted(() => {
  initLanguage();
});
</script>

<template>
  <div>
    <h1 class="font-display text-6xl lg:text-7xl font-bold text-black">{{ t.resume.title }}</h1>
    <p class="text-lg">{{ t.resume.subtitle }}</p>
  </div>
  <div class="relative flex flex-col md:flex-row md:gap-24 bg-white w-full">
    <div class="my-16 grow">
      <div class="flex flex-col gap-8">
        <div id="education">
          <h1 class="text-2xl mb-2 font-display font-bold">education</h1>
          <ol class="flex flex-col gap-4 list-disc list-inside">
            <li class="gap-0 flex flex-col">
              <h2 class="font-medium">
                California State University, San Bernardino<span class="float-right font-normal"
                  >San Bernardino, CA</span
                >
              </h2>
              <p class="text-xs text-neutral-600">
                Computer Science (B.S. expected December 2026), GPA: 3.85<span class="float-right"
                  >Aug 2024 - Present</span
                >
              </p>
            </li>
            <li class="gap-0 flex flex-col">
              <h2 class="font-medium">
                International Christian University <span class="float-right font-normal">Tokyo, Japan</span>
              </h2>
              <p class="text-xs text-neutral-600">
                One-year exchange program, GPA: 4.0 <span class="float-right">Sep 2023 - June 2024</span>
              </p>
            </li>
            <li class="gap-0 flex flex-col">
              <h2 class="font-medium">
                University of California, Merced <span class="float-right font-normal">Merced, CA</span>
              </h2>
              <p class="text-xs text-neutral-600">
                Computer Science and Engineering, GPA: 3.69<span class="float-right">Aug 2022 - May 2023 </span>
              </p>
            </li>
          </ol>
        </div>
        <div id="work">
          <h1 class="text-2xl mb-2 font-display font-bold">work</h1>
          <ol class="flex flex-col gap-4 list-disc list-inside">
            <li class="gap-0 flex flex-col">
              <h2 class="font-medium">
                Undergraduate Research Assistant
                <span class="float-right font-normal">San Bernardino, CA</span>
              </h2>
              <p class="text-xs text-neutral-600">
                California State University, San Bernardino
                <span class="float-right">February 2025 - Present</span>
              </p>
              <ul class="list-disc text-sm pl-4 mt-4">
                <li>
                  Contributed to the design and implementation of a RAG-based chatbot to improve access to university
                  administrative resources using vector embeddings.
                </li>

                <li>
                  Conducted exploratory literature reviews, analyzing 40+ academic papers regarding Al applications in
                  education and infrastructure planning to identify research directions.
                </li>
              </ul>
            </li>
            <li class="gap-0 flex flex-col">
              <h2 class="font-medium">
                Undergraduate Research Assistant
                <span class="float-right font-normal">Tokyo, Japan</span>
              </h2>
              <p class="text-xs text-neutral-600">
                International Christian University
                <span class="float-right">May 2024 - June 2024</span>
              </p>
              <ul class="list-disc text-sm pl-4 mt-4">
                <li>
                  Developed technical documentation covering Al models and their capabilities for psychology researchers
                  studying human-Al interactions under Dr. Adam Smith.
                </li>

                <li>
                  Analyzed comparative performance of leading LLM models to support presentations given at conferences
                  such as the Asian Association of Social Psychology (AASP).
                </li>

                <li>
                  Created accessible explanations of complex Al concepts (e.g. neural networks, transformers) enabling
                  interdisciplinary research on human-Al trust dynamics.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div id="projects">
          <h1 class="text-2xl mb-2 font-display font-bold">projects</h1>
          <ol class="flex flex-col gap-4 list-disc list-inside">
            <li class="gap-0 flex flex-col">
              <h2 class="font-medium">
                <a href="https://github.com/channelA9/mogi" class="underline"
                  >Mogi - Agent-Based Simulation Framework</a
                >
                <span class="float-right font-normal">Jan 2025</span>
              </h2>
              <p class="text-xs text-neutral-600 mt-2">
                Designed and implemented a TypeScript framework for simulating Al agent interactions, enabling the rapid
                prototyping of multi-agent Al systems that can evaluate the ability of LLMs to exercise judgement and
                adhere to assigned personas in a constructed environment.
              </p>
            </li>
            <li class="gap-0 flex flex-col">
              <h2 class="font-medium">
                <a href="https://github.com/channelA9/jibash" class="underline">jiBash - Language Learning Web App</a>
                <span class="float-right font-normal">Dec 2024</span>
              </h2>
              <p class="text-xs text-neutral-600 mt-2">
                Developed an Al-driven web application enabling users to have realistic conversational scenarios in
                different languages to assist with language acquisition. Uses current leading LLMs such as GPT-4o,
                Deepseek R1, and Gemini 2.5. Applied human-centered design principles to create a personalized, engaging
                learning experience aimed at reducing educational inequalities in language learning.
              </p>
            </li>
            <li class="gap-0 flex flex-col">
              <h2 class="font-medium">
                <a href="https://github.com/channelA9/reimus-incident-handler" class="underline"
                  >Reimu's Incident Handler - Experimental Web Game</a
                >
                <span class="float-right font-normal">Nov 2024</span>
              </h2>
              <p class="text-xs text-neutral-600 mt-2">
                Built a Vue.js-based prototype featuring a chat interface and agent-based interactions to explore the
                dynamics of user engagement with Al agents within a fictional game environment.
              </p>
            </li>
          </ol>
        </div>
        <div id="extracurricular" class="flex flex-col">
          <h1 class="text-xl mb-2 font-display font-bold">extracurricular</h1>
          <ul class="">
            <li class="mb-2">
              <h2 class="font-medium">Computer Science and Engineering Club</h2>

              <p class="text-xs text-neutral-600">
                Leading student project development exploring generative Al use cases in web applications, with a focus
                on user-centered design principles. (Aug 2024-Present)
              </p>
            </li>
            <li class="mb-2">
              <h2 class="font-medium">Culture and Diversity in Japan (CDJ)</h2>

              <p class="text-xs text-neutral-600">
                Facilitated cross-cultural workshops, fostering dialogue and understanding among students from diverse
                backgrounds. (Dec 2023 - June 2024)
              </p>
            </li>
            <li>
              <h2 class="font-medium">Association for Computing Machinery (ACM)</h2>

              <p class="text-xs text-neutral-600">
                Participated in game development workshops, gaining experience in designing interactive systems and
                considering user engagement.
              </p>
            </li>
          </ul>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div id="skills" class="flex flex-col">
            <h1 class="text-xl mb-2 font-display font-bold">skills</h1>
            <ul class="">
              <li class="mb-2">
                <h2 class="font-medium">Web Development</h2>

                <p class="text-xs text-neutral-600">
                  Javascript, TypeScript, HTML, CSS, React, Vue.js, TailwindCSS, DaisyUI
                </p>
              </li>
              <li class="mb-2">
                <h2 class="font-medium">LLMs/AI API</h2>

                <p class="text-xs text-neutral-600">Gemini, GPT, Claude, Cohere, LLaMA</p>
              </li>
              <li class="mb-2">
                <h2 class="font-medium">Data Science</h2>

                <p class="text-xs text-neutral-600">R, Python, SQL, Jupyter</p>
              </li>
              <li class="mb-2">
                <h2 class="font-medium">Machine Learning</h2>

                <p class="text-xs text-neutral-600">Scikit-learn</p>
              </li>
              <li class="mb-2">
                <h2 class="font-medium">Game Development</h2>
                <p class="text-xs text-neutral-600">Godot Engine (GDScript), Roblox Studio (Lua)</p>
              </li>
              <li class="mb-2">
                <h2 class="font-medium">Cloud Infrastructure</h2>
                <p class="text-xs text-neutral-600">Firebase, Supabase, AWS, Google Cloud, Cloudflare</p>
              </li>
            </ul>
          </div>
          <div id="coursework" class="flex flex-col">
            <h1 class="text-xl mb-2 font-display font-bold">coursework</h1>
            <ul class="">
              <li class="mb-2">
                <h2 class="font-medium">Programming</h2>
                <ul class="text-xs text-neutral-600">
                  <li>Data Structures and Algorithms</li>
                  <li>Machine Learning</li>
                  <li>Web Development</li>
                  <li>Database Systems</li>
                  <li>Digital Logic</li>
                  <li>Networks</li>
                </ul>
              </li>
              <li class="mb-2">
                <h2 class="font-medium">Math</h2>
                <ul class="text-xs text-neutral-600">
                  <li>Linear Algebra & Differential Equations</li>
                  <li>Statistics</li>
                  <li>Discrete Math</li>
                  <li>Calculus 1-3</li>
                </ul>
              </li>
              <li class="mb-2">
                <h2 class="font-medium">Other</h2>
                <ul class="text-xs text-neutral-600">
                  <li>Intercultural Communication</li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="awards" class="flex flex-col">
            <h1 class="text-xl mb-2 font-display font-bold">awards</h1>
            <ul class="">
              <li class="mb-2">
                <h2 class="font-medium">Dean's Honor List</h2>
                <ul class="text-xs text-neutral-600">
                  <li>CSUSB: Fall 2024</li>
                  <li>ICU: Spring 2024, Winter 2024, Fall 2023</li>
                  <li>UCM: Spring 2023</li>
                </ul>
              </li>
              <li class="mb-2">
                <h2 class="font-medium">Scholarships</h2>
                <ul class="text-xs text-neutral-600">
                  <li>UCEAP Global Scholarship</li>
                  <li>UCEAP Year-long Duttenhaver Scholarship</li>
                  <li>Genelia Phillips Study Abroad Scholarship</li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="languages" class="flex flex-col">
            <h1 class="text-xl mb-2 font-display font-bold">languages</h1>
            <ul class="">
              <li class="mb-2">
                <h2 class="font-medium">English</h2>

                <p class="text-xs text-neutral-600">Native proficiency, fluent in reading, writing, and speaking.</p>
              </li>
              <li class="mb-2">
                <h2 class="font-medium">Japanese</h2>

                <p class="text-xs text-neutral-600">
                  Intermediate; proficient in reading, writing, and speaking at a JLPT N3 level.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="my-8 grid gap-4 grow-0 min-w-36">
      <Profile />
    </div>
  </div>
</template>
