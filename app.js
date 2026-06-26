const STORAGE_KEY = "kinetic.app.v1";

const icons = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 12 12 4l9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  user: '<svg viewBox="0 0 24 24"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M3 9v6"/><path d="M21 9v6"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>',
  utensils: '<svg viewBox="0 0 24 24"><path d="M7 2v8"/><path d="M11 2v8"/><path d="M7 6h4"/><path d="M9 10v12"/><path d="M17 2c2 2 2 5 0 7v13"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 4-4 3 3 5-7"/></svg>',
  bot: '<svg viewBox="0 0 24 24"><path d="M12 3v3"/><path d="M7 8h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z"/><path d="M8 13h.01"/><path d="M16 13h.01"/><path d="M9 17h6"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  message: '<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>',
  scan: '<svg viewBox="0 0 24 24"><path d="M4 7V5a1 1 0 0 1 1-1h2"/><path d="M17 4h2a1 1 0 0 1 1 1v2"/><path d="M20 17v2a1 1 0 0 1-1 1h-2"/><path d="M7 20H5a1 1 0 0 1-1-1v-2"/><path d="M7 8v8"/><path d="M10 8v8"/><path d="M14 8v8"/><path d="M17 8v8"/></svg>',
  trash: '<svg viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
  send: '<svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>',
  export: '<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>'
};

const exerciseLibrary = [
  {
    id: "bench",
    name: "Développé couché",
    muscles: ["Pectoraux", "Triceps"],
    equipment: ["Barre", "Banc"],
    sets: 4,
    reps: "8-10",
    rest: 120,
    load: 62.5,
    cue: "Omoplates serrées, pieds stables, descente contrôlée.",
    alternative: "Pompes inclinées",
    demo: "press"
  },
  {
    id: "db-press",
    name: "Développé haltères",
    muscles: ["Pectoraux", "Épaules"],
    equipment: ["Haltères", "Banc"],
    sets: 4,
    reps: "8-12",
    rest: 90,
    load: 24,
    cue: "Amplitude confortable, poignets alignés.",
    alternative: "Pompes au sol",
    demo: "press"
  },
  {
    id: "row",
    name: "Rowing haltère",
    muscles: ["Dos", "Biceps"],
    equipment: ["Haltères"],
    sets: 4,
    reps: "10-12",
    rest: 90,
    load: 28,
    cue: "Tire vers la hanche, buste stable.",
    alternative: "Rowing élastique",
    demo: "row"
  },
  {
    id: "goblet-squat",
    name: "Squat goblet",
    muscles: ["Quadriceps", "Fessiers"],
    equipment: ["Haltères"],
    sets: 3,
    reps: "10-12",
    rest: 90,
    load: 26,
    cue: "Tempo lent, amplitude sans douleur.",
    alternative: "Presse ou box squat",
    demo: "squat",
    limitation: "genou"
  },
  {
    id: "rdl",
    name: "Soulevé de terre roumain",
    muscles: ["Ischios", "Fessiers"],
    equipment: ["Barre", "Haltères"],
    sets: 3,
    reps: "8-10",
    rest: 120,
    load: 70,
    cue: "Hanches vers l’arrière, dos neutre.",
    alternative: "Hip hinge élastique",
    demo: "row"
  },
  {
    id: "ohp",
    name: "Développé militaire",
    muscles: ["Épaules", "Triceps"],
    equipment: ["Barre", "Haltères"],
    sets: 3,
    reps: "6-8",
    rest: 120,
    load: 38,
    cue: "Gainage fort, trajectoire proche du visage.",
    alternative: "Élévations latérales",
    demo: "press",
    limitation: "épaule"
  },
  {
    id: "lunge",
    name: "Fentes arrière",
    muscles: ["Jambes", "Fessiers"],
    equipment: ["Poids du corps", "Haltères"],
    sets: 3,
    reps: "10/côté",
    rest: 90,
    load: 16,
    cue: "Pas arrière, genou avant stable.",
    alternative: "Step-up bas",
    demo: "squat",
    limitation: "genou"
  },
  {
    id: "plank",
    name: "Planche",
    muscles: ["Gainage"],
    equipment: ["Poids du corps"],
    sets: 3,
    reps: "40-60 s",
    rest: 60,
    load: 0,
    cue: "Bassin neutre, respiration régulière.",
    alternative: "Dead bug",
    demo: "plank"
  }
];

const defaultState = {
  settings: {
    theme: "dark",
    language: "fr"
  },
  profile: {
    age: 29,
    sex: "Homme",
    height: 178,
    weight: 78,
    level: "Intermédiaire",
    goal: "Recomposition corporelle",
    activity: "Modérée",
    sessions: 3,
    equipment: ["Haltères", "Barre", "Banc"],
    limitations: "Genou gauche sensible sur les squats lourds",
    foodPreferences: "Sans restriction, priorité repas simples"
  },
  plan: null,
  workouts: [
    { id: "w1", date: todayOffset(-5), exerciseId: "bench", name: "Développé couché", sets: 4, reps: 8, load: 60, volume: 1920, rpe: 7 },
    { id: "w2", date: todayOffset(-3), exerciseId: "row", name: "Rowing haltère", sets: 4, reps: 10, load: 26, volume: 1040, rpe: 7 },
    { id: "w3", date: todayOffset(-1), exerciseId: "goblet-squat", name: "Squat goblet", sets: 3, reps: 12, load: 24, volume: 864, rpe: 6 }
  ],
  foods: [
    { id: "f1", date: todayISO(), name: "Skyr + flocons d’avoine", meal: "Petit déjeuner", calories: 480, protein: 38, carbs: 58, fat: 9 },
    { id: "f2", date: todayISO(), name: "Poulet, riz, légumes", meal: "Déjeuner", calories: 760, protein: 52, carbs: 82, fat: 18 },
    { id: "f3", date: todayISO(), name: "Banane + whey", meal: "Collation", calories: 310, protein: 28, carbs: 38, fat: 4 }
  ],
  measures: [
    { date: todayOffset(-28), weight: 78.8, waist: 86, bench: 77.5 },
    { date: todayOffset(-21), weight: 78.4, waist: 85.5, bench: 80 },
    { date: todayOffset(-14), weight: 77.9, waist: 85, bench: 80 },
    { date: todayOffset(-7), weight: 77.6, waist: 84.4, bench: 82.5 },
    { date: todayISO(), weight: 77.4, waist: 84, bench: 82.5 }
  ],
  chat: [
    { role: "assistant", text: "Ton plan est prêt. Je surveille surtout la progression, la récupération et les signaux de douleur." },
    { role: "user", text: "Je veux progresser sans aggraver mon genou." },
    { role: "assistant", text: "Garde les exercices bas du corps en amplitude confortable et augmente d’abord les répétitions avant la charge." }
  ],
  completedExercises: []
};

let state = loadState();
let installPrompt = null;

if (!state.plan) {
  state.plan = buildPlan(state.profile);
  saveState();
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  injectIcons();
  bindEvents();
  renderAll();
  registerServiceWorker();
  updateSyncStatus();
});

function bindEvents() {
  document.addEventListener("click", (event) => {
    const navTarget = event.target.closest("[data-view-target]");
    if (navTarget) {
      setView(navTarget.dataset.viewTarget);
      return;
    }

    const chip = event.target.closest("[data-equipment-chip]");
    if (chip) {
      chip.setAttribute("aria-pressed", chip.getAttribute("aria-pressed") !== "true");
      return;
    }

    const complete = event.target.closest("[data-complete-exercise]");
    if (complete) {
      completeExercise(complete.dataset.completeExercise);
      return;
    }

    const removeFood = event.target.closest("[data-remove-food]");
    if (removeFood) {
      state.foods = state.foods.filter((food) => food.id !== removeFood.dataset.removeFood);
      persistAndRender("Aliment supprimé");
      return;
    }

    const quickPrompt = event.target.closest("[data-quick-prompt]");
    if (quickPrompt) {
      addChat(quickPrompt.dataset.quickPrompt, true);
      addChat(coachReply(quickPrompt.dataset.quickPrompt), false);
      renderCoach();
      setView("coach");
      return;
    }
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    state.settings.theme = state.settings.theme === "light" ? "dark" : "light";
    applyTheme();
    saveState();
    injectIcons();
    showToast(state.settings.theme === "light" ? "Mode clair activé" : "Mode sombre activé");
  });

  document.getElementById("installBtn").addEventListener("click", async () => {
    if (!installPrompt) {
      showToast("Installation disponible depuis le menu du navigateur");
      return;
    }
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    showToast("Kinetic peut être installé sur cet appareil");
  });

  window.addEventListener("online", updateSyncStatus);
  window.addEventListener("offline", updateSyncStatus);
}

function setView(id) {
  const target = document.getElementById(id);
  if (!target) return;

  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === id));
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTarget === id);
  });

  document.getElementById("screenHeading").textContent = target.dataset.title || "Kinetic";
  document.getElementById("screenSubtitle").textContent = target.dataset.subtitle || "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAll() {
  renderDashboard();
  renderProfile();
  renderTraining();
  renderNutrition();
  renderProgress();
  renderCoach();
  renderWeekProgress();
  injectIcons();
}

function renderDashboard() {
  const targets = calculateNutrition(state.profile);
  const totals = todaysFoodTotals();
  const week = weeklyWorkoutStats();
  const next = nextWorkout();
  const adherence = Math.min(100, Math.round((week.sessions / state.profile.sessions) * 100));

  document.getElementById("dashboardView").innerHTML = `
    <div class="grid">
      <div class="hero-band">
        <div>
          <h2>Kinetic adapte ton plan au fil de tes données</h2>
          <p>${escapeHtml(state.profile.sessions)} séances par semaine, objectif ${escapeHtml(state.profile.goal.toLowerCase())}, nutrition cible ${formatNumber(targets.calories)} kcal.</p>
        </div>
      </div>

      <div class="grid cols-4">
        ${metric("Séances", `${week.sessions}/${state.profile.sessions}`, `${adherence}% d’adhérence`)}
        ${metric("Volume", `${formatNumber(Math.round(week.volume / 100) / 10)} t`, "+ suivi local")}
        ${metric("Calories", formatNumber(totals.calories), `${Math.max(0, targets.calories - totals.calories)} restantes`)}
        ${metric("Récupération", recoveryScore() + " %", recoveryLabel())}
      </div>

      <div class="grid cols-2">
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>Séance recommandée</h2>
              <p>${escapeHtml(next.label)} · ${escapeHtml(next.focus)}</p>
            </div>
            <span class="tag warn">${next.duration} min</span>
          </div>
          <div class="exercise-list">
            ${next.exercises.slice(0, 2).map(exerciseCard).join("")}
          </div>
        </div>

        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>Conseil du jour</h2>
              <p>Analyse locale</p>
            </div>
            <span class="tag good">Stable</span>
          </div>
          <ul class="summary-list">
            <li><span>Charge</span><strong>${trainingAdvice().load}</strong></li>
            <li><span>Nutrition</span><strong>${trainingAdvice().nutrition}</strong></li>
            <li><span>Récupération</span><strong>${trainingAdvice().recovery}</strong></li>
            <li><span>Attention</span><strong>${escapeHtml(limitationShort())}</strong></li>
          </ul>
          <button class="btn primary block" data-view-target="coach" style="margin-top: .9rem;">
            <span data-icon="message"></span>
            Demander un conseil
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderProfile() {
  const p = state.profile;
  const targets = calculateNutrition(p);
  const allEquipment = ["Haltères", "Barre", "Banc", "Poulie", "Élastiques", "Poids du corps"];

  document.getElementById("profileView").innerHTML = `
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>Profil utilisateur</h2>
            <p>Données sauvegardées localement</p>
          </div>
          <span class="tag warn">France</span>
        </div>

        <form class="form-grid" id="profileForm">
          ${input("age", "Âge", "number", p.age)}
          ${select("sex", "Sexe", ["Homme", "Femme", "Autre"], p.sex)}
          ${input("height", "Taille", "number", p.height)}
          ${input("weight", "Poids", "number", p.weight)}
          ${select("level", "Niveau", ["Débutant", "Intermédiaire", "Avancé"], p.level)}
          ${select("goal", "Objectif", ["Prise de masse", "Perte de poids", "Sèche", "Recomposition corporelle", "Force", "Endurance", "Remise en forme"], p.goal)}
          ${select("activity", "Activité quotidienne", ["Sédentaire", "Modérée", "Active", "Très active"], p.activity)}
          ${select("sessions", "Séances par semaine", ["2", "3", "4", "5", "6"], String(p.sessions))}

          <div class="wide">
            <label>Matériel disponible</label>
            <div class="chip-row">
              ${allEquipment.map((item) => `<button type="button" class="chip" data-equipment-chip aria-pressed="${p.equipment.includes(item)}">${item}</button>`).join("")}
            </div>
          </div>

          <label class="wide">Blessures ou limitations
            <textarea name="limitations" rows="3">${escapeHtml(p.limitations)}</textarea>
          </label>

          <label class="wide">Préférences alimentaires
            <textarea name="foodPreferences" rows="3">${escapeHtml(p.foodPreferences)}</textarea>
          </label>

          <div class="wide">
            <button class="btn primary" type="submit">
              <span data-icon="refresh"></span>
              Enregistrer et régénérer
            </button>
          </div>
        </form>
      </div>

      <div class="grid">
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>Synthèse</h2>
              <p>Calculs actuels</p>
            </div>
            <span class="tag good">Actif</span>
          </div>
          <ul class="summary-list">
            <li><span>Structure</span><strong>${escapeHtml(state.plan.split)}</strong></li>
            <li><span>Calories</span><strong>${formatNumber(targets.calories)} kcal</strong></li>
            <li><span>Protéines</span><strong>${targets.protein} g</strong></li>
            <li><span>Glucides</span><strong>${targets.carbs} g</strong></li>
            <li><span>Lipides</span><strong>${targets.fat} g</strong></li>
          </ul>
        </div>

        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>Confidentialité</h2>
              <p>Version locale</p>
            </div>
          </div>
          <ul class="summary-list">
            <li><span>Comptes</span><strong>Préparé</strong></li>
            <li><span>Synchronisation</span><strong>À brancher</strong></li>
            <li><span>IA réelle</span><strong>Côté serveur</strong></li>
            <li><span>Hors ligne</span><strong>Activé</strong></li>
          </ul>
        </div>
      </div>
    </div>
  `;

  document.getElementById("profileForm").addEventListener("submit", saveProfile);
}

function renderTraining() {
  const next = nextWorkout();
  const recent = state.workouts.slice(-5).reverse();

  document.getElementById("trainingView").innerHTML = `
    <div class="grid">
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>Calendrier</h2>
            <p>${escapeHtml(state.plan.split)}</p>
          </div>
          <button class="btn ghost" id="regeneratePlanBtn">
            <span data-icon="refresh"></span>
            Régénérer
          </button>
        </div>
        <div class="day-strip">
          ${state.plan.week.map((day) => `
            <div class="day ${day.active ? "active" : ""}">
              <strong>${escapeHtml(day.label)}</strong>
              <span>${escapeHtml(day.focus)}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="grid cols-2">
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>${escapeHtml(next.focus)}</h2>
              <p>${escapeHtml(next.label)} · ${next.duration} min</p>
            </div>
            <span class="tag">${escapeHtml(state.profile.level)}</span>
          </div>
          <div class="exercise-list">
            ${next.exercises.map(exerciseCard).join("")}
          </div>
        </div>

        <div class="grid">
          <div class="panel">
            <div class="panel-head">
              <div>
                <h2>Dernières validations</h2>
                <p>Historique local</p>
              </div>
            </div>
            <div class="set-list">
              ${recent.length ? recent.map((item) => `
                <div class="set-row">
                  <div>
                    <b>${escapeHtml(item.name)}</b>
                    <span>${formatDate(item.date)} · ${item.sets} x ${item.reps} · RPE ${item.rpe}</span>
                  </div>
                  <strong>${formatNumber(item.volume)} kg</strong>
                </div>
              `).join("") : `<div class="empty">Aucune séance enregistrée</div>`}
            </div>
          </div>

          <div class="panel">
            <div class="panel-head">
              <div>
                <h2>Alternatives</h2>
                <p>Selon douleur ou matériel</p>
              </div>
            </div>
            <ul class="summary-list">
              ${next.exercises.slice(0, 4).map((exercise) => `<li><span>${escapeHtml(exercise.name)}</span><strong>${escapeHtml(exercise.alternative)}</strong></li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("regeneratePlanBtn").addEventListener("click", () => {
    state.plan = buildPlan(state.profile);
    persistAndRender("Programme régénéré");
  });
}

function renderNutrition() {
  const targets = calculateNutrition(state.profile);
  const totals = todaysFoodTotals();
  const caloriePercent = clamp(Math.round((totals.calories / targets.calories) * 100), 0, 100);
  const todaysFoods = state.foods.filter((food) => food.date === todayISO());

  document.getElementById("nutritionView").innerHTML = `
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>Objectifs du jour</h2>
            <p>${escapeHtml(state.profile.goal)}</p>
          </div>
          <button class="btn ghost" id="scanBtn">
            <span data-icon="scan"></span>
            Scanner
          </button>
        </div>

        <div class="calorie-ring" style="--progress: ${caloriePercent}%;">
          <div>
            <strong>${formatNumber(targets.calories)}</strong>
            <span>${formatNumber(totals.calories)} consommées</span>
          </div>
        </div>

        <div class="macro-grid">
          ${macro("Protéines", totals.protein, targets.protein, "g")}
          ${macro("Glucides", totals.carbs, targets.carbs, "g")}
          ${macro("Lipides", totals.fat, targets.fat, "g")}
        </div>
      </div>

      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>Journal alimentaire</h2>
            <p>Aujourd’hui</p>
          </div>
          <span class="tag good">${formatNumber(totals.calories)} kcal</span>
        </div>

        <div class="meal-list">
          ${todaysFoods.map((food) => `
            <div class="meal-row">
              <div>
                <b>${escapeHtml(food.name)}</b>
                <span>${escapeHtml(food.meal)} · ${food.protein} g prot. · ${food.carbs} g gluc.</span>
              </div>
              <button class="icon-btn" data-remove-food="${food.id}" title="Supprimer" aria-label="Supprimer ${escapeHtml(food.name)}">
                <span data-icon="trash"></span>
              </button>
            </div>
          `).join("") || `<div class="empty">Aucun aliment aujourd’hui</div>`}
        </div>

        <form class="composer" id="foodForm">
          <input name="foodName" placeholder="Ajouter un aliment">
          <button class="btn primary" type="submit">
            <span data-icon="plus"></span>
            Ajouter
          </button>
        </form>
      </div>
    </div>
  `;

  document.getElementById("foodForm").addEventListener("submit", addFood);
  document.getElementById("scanBtn").addEventListener("click", () => {
    showToast("Le scan code-barres est prêt pour la version mobile");
  });
}

function renderProgress() {
  const week = weeklyWorkoutStats();
  const lastMeasure = state.measures[state.measures.length - 1];
  const previousMeasure = state.measures[state.measures.length - 2] || lastMeasure;
  const weightDelta = Math.round((lastMeasure.weight - previousMeasure.weight) * 10) / 10;
  const badges = [
    ["Régularité", `${week.sessions} séances cette semaine`],
    ["Force", `Bench ${lastMeasure.bench} kg`],
    ["Nutrition", `${todaysFoodTotals().protein} g protéines`]
  ];

  document.getElementById("progressView").innerHTML = `
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>Courbes</h2>
            <p>Poids et force</p>
          </div>
          <button class="btn ghost" id="exportBtn">
            <span data-icon="export"></span>
            Export
          </button>
        </div>
        <div class="chart" aria-label="Courbes de progression">
          <svg viewBox="0 0 600 220" preserveAspectRatio="none">
            <path class="red-line" d="${measurePath("weight")}"/>
            <path class="green-line" d="${measurePath("bench")}"/>
          </svg>
        </div>
      </div>

      <div class="grid">
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>Mensurations</h2>
              <p>Dernière mesure</p>
            </div>
          </div>
          <div class="split-stat">
            <div class="mini-metric"><span>Poids</span><strong>${lastMeasure.weight} kg</strong></div>
            <div class="mini-metric"><span>Taille</span><strong>${lastMeasure.waist} cm</strong></div>
            <div class="mini-metric"><span>Variation</span><strong>${weightDelta > 0 ? "+" : ""}${weightDelta} kg</strong></div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>Badges</h2>
              <p>Motivation</p>
            </div>
          </div>
          <div class="badge-grid">
            ${badges.map(([title, text]) => `<div class="badge"><b>${title}</b><span>${text}</span></div>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("exportBtn").addEventListener("click", exportData);
}

function renderCoach() {
  document.getElementById("coachView").innerHTML = `
    <div class="grid cols-2">
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>Conversation</h2>
            <p>Conseils généraux, pas un avis médical</p>
          </div>
          <span class="tag good">Local</span>
        </div>
        <div class="chat" id="chatLog">
          ${state.chat.map((message) => `<div class="bubble ${message.role === "user" ? "user" : ""}">${escapeHtml(message.text)}</div>`).join("")}
        </div>
        <form class="composer" id="chatForm">
          <input name="question" placeholder="Question nutrition, exercice ou récupération">
          <button class="btn primary" type="submit">
            <span data-icon="send"></span>
            Envoyer
          </button>
        </form>
      </div>

      <div class="grid">
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>Actions rapides</h2>
              <p>Ajustements</p>
            </div>
          </div>
          <div class="chip-row">
            ${["Adapter ma séance", "Analyser une stagnation", "Corriger mes macros", "Planifier le repos"].map((prompt) => `
              <button class="chip" type="button" data-quick-prompt="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>
            `).join("")}
          </div>
        </div>

        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>Analyse</h2>
              <p>Tendance actuelle</p>
            </div>
          </div>
          <ul class="summary-list">
            <li><span>Adhérence</span><strong>${Math.min(100, Math.round((weeklyWorkoutStats().sessions / state.profile.sessions) * 100))} %</strong></li>
            <li><span>Stagnation</span><strong>${detectStagnation()}</strong></li>
            <li><span>Surentraînement</span><strong>${recoveryScore() < 55 ? "À surveiller" : "Faible"}</strong></li>
            <li><span>Prochaine action</span><strong>${trainingAdvice().load}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  `;

  const chatLog = document.getElementById("chatLog");
  chatLog.scrollTop = chatLog.scrollHeight;
  document.getElementById("chatForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const question = new FormData(event.currentTarget).get("question").trim();
    if (!question) return;
    addChat(question, true);
    addChat(coachReply(question), false);
    event.currentTarget.reset();
    renderCoach();
    saveState();
  });
}

function saveProfile(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const equipment = [...form.querySelectorAll("[data-equipment-chip]")]
    .filter((chip) => chip.getAttribute("aria-pressed") === "true")
    .map((chip) => chip.textContent.trim());

  state.profile = {
    age: Number(formData.get("age")),
    sex: formData.get("sex"),
    height: Number(formData.get("height")),
    weight: Number(formData.get("weight")),
    level: formData.get("level"),
    goal: formData.get("goal"),
    activity: formData.get("activity"),
    sessions: Number(formData.get("sessions")),
    equipment: equipment.length ? equipment : ["Poids du corps"],
    limitations: formData.get("limitations").trim(),
    foodPreferences: formData.get("foodPreferences").trim()
  };

  state.plan = buildPlan(state.profile);
  persistAndRender("Profil enregistré et programme régénéré");
  setView("dashboard");
}

function addFood(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const name = new FormData(form).get("foodName").trim();
  if (!name) {
    showToast("Ajoutez un aliment");
    return;
  }

  const estimate = estimateFood(name);
  state.foods.push({
    id: createId("food"),
    date: todayISO(),
    name,
    meal: inferMeal(),
    ...estimate
  });

  form.reset();
  persistAndRender("Aliment ajouté");
}

function completeExercise(exerciseId) {
  const exercise = exerciseLibrary.find((item) => item.id === exerciseId);
  if (!exercise) return;

  const reps = parseInt(exercise.reps, 10) || 10;
  const load = exercise.load;
  const volume = Math.round(exercise.sets * reps * Math.max(load, 1));

  state.workouts.push({
    id: createId("workout"),
    date: todayISO(),
    exerciseId: exercise.id,
    name: exercise.name,
    sets: exercise.sets,
    reps,
    load,
    volume,
    rpe: exercise.limitation && hasLimitation(exercise.limitation) ? 6 : 7
  });

  state.completedExercises.push(`${todayISO()}-${exercise.id}`);
  persistAndRender(`${exercise.name} validé`);
}

function buildPlan(profile) {
  const split = profile.sessions <= 3 ? `Full body ${profile.sessions} jours` : profile.sessions === 4 ? "Haut / bas 4 jours" : "Push / Pull / Legs";
  const dayTemplates = scheduleForSessions(profile.sessions);
  const allowed = new Set([...profile.equipment, "Poids du corps"]);
  const usableExercises = exerciseLibrary.filter((exercise) => {
    return exercise.equipment.some((item) => allowed.has(item));
  });
  const fallback = exerciseLibrary.filter((exercise) => exercise.equipment.includes("Poids du corps"));
  const pool = usableExercises.length ? usableExercises : fallback;

  const week = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((label, index) => {
    const template = dayTemplates.find((day) => day.index === index);
    if (!template) return { label, active: false, focus: "Repos", duration: 0, exercises: [] };

    const selected = selectExercises(pool, template.focus, profile);
    return {
      label,
      active: true,
      focus: template.focus,
      duration: 45 + Math.min(20, selected.length * 5),
      exercises: selected
    };
  });

  return { split, week, updatedAt: new Date().toISOString() };
}

function selectExercises(pool, focus, profile) {
  const desired = focus.includes("Bas")
    ? ["Quadriceps", "Fessiers", "Ischios", "Gainage"]
    : focus.includes("Haut")
      ? ["Pectoraux", "Dos", "Épaules", "Triceps", "Biceps"]
      : ["Pectoraux", "Dos", "Quadriceps", "Fessiers", "Gainage"];

  const selected = [];
  desired.forEach((muscle) => {
    const found = pool.find((exercise) => exercise.muscles.includes(muscle) && !selected.includes(exercise));
    if (found) selected.push(found);
  });

  pool.forEach((exercise) => {
    if (selected.length < 4 && !selected.includes(exercise)) selected.push(exercise);
  });

  return selected.slice(0, profile.level === "Débutant" ? 3 : 4).map((exercise) => ({
    ...exercise,
    caution: exercise.limitation && hasLimitation(exercise.limitation) ? "Surveillance" : ""
  }));
}

function scheduleForSessions(sessions) {
  const schedules = {
    2: [{ index: 0, focus: "Full body A" }, { index: 3, focus: "Full body B" }],
    3: [{ index: 0, focus: "Full body A" }, { index: 2, focus: "Full body B" }, { index: 4, focus: "Full body C" }],
    4: [{ index: 0, focus: "Haut du corps" }, { index: 1, focus: "Bas du corps" }, { index: 3, focus: "Haut du corps" }, { index: 5, focus: "Bas du corps" }],
    5: [{ index: 0, focus: "Push" }, { index: 1, focus: "Pull" }, { index: 2, focus: "Bas du corps" }, { index: 4, focus: "Haut du corps" }, { index: 5, focus: "Bas léger" }],
    6: [{ index: 0, focus: "Push" }, { index: 1, focus: "Pull" }, { index: 2, focus: "Jambes" }, { index: 3, focus: "Push" }, { index: 4, focus: "Pull" }, { index: 5, focus: "Jambes" }]
  };
  return schedules[sessions] || schedules[3];
}

function calculateNutrition(profile) {
  const sexAdjustment = profile.sex === "Femme" ? -161 : profile.sex === "Autre" ? -78 : 5;
  const activityFactors = {
    "Sédentaire": 1.25,
    "Modérée": 1.45,
    "Active": 1.65,
    "Très active": 1.82
  };
  const goalAdjustments = {
    "Prise de masse": 280,
    "Perte de poids": -420,
    "Sèche": -480,
    "Recomposition corporelle": -80,
    "Force": 180,
    "Endurance": 80,
    "Remise en forme": -120
  };
  const bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + sexAdjustment;
  const calories = Math.round((bmr * (activityFactors[profile.activity] || 1.45) + (goalAdjustments[profile.goal] || 0)) / 10) * 10;
  const proteinFactor = ["Prise de masse", "Sèche", "Recomposition corporelle", "Force"].includes(profile.goal) ? 2 : 1.7;
  const protein = Math.round(profile.weight * proteinFactor);
  const fat = Math.round(profile.weight * 0.9);
  const carbs = Math.max(80, Math.round((calories - protein * 4 - fat * 9) / 4));

  return { calories, protein, carbs, fat };
}

function exerciseCard(exercise) {
  const completed = state.completedExercises.includes(`${todayISO()}-${exercise.id}`);
  return `
    <article class="exercise">
      <div class="demo" aria-hidden="true">${demoSvg(exercise.demo)}</div>
      <div>
        <h3>${escapeHtml(exercise.name)}</h3>
        <p>${exercise.sets} x ${escapeHtml(exercise.reps)} · repos ${exercise.rest} s. ${escapeHtml(exercise.cue)}</p>
        <div class="exercise-meta">
          ${exercise.muscles.map((muscle) => `<span class="tag">${escapeHtml(muscle)}</span>`).join("")}
          ${exercise.caution ? `<span class="tag warn">${escapeHtml(exercise.caution)}</span>` : ""}
          <span class="tag good">${exercise.load ? `${exercise.load} kg` : "Poids du corps"}</span>
        </div>
      </div>
      <button class="btn ${completed ? "ghost" : ""}" data-complete-exercise="${exercise.id}" ${completed ? "disabled" : ""}>
        <span data-icon="${completed ? "check" : "plus"}"></span>
        ${completed ? "Validé" : "Valider"}
      </button>
    </article>
  `;
}

function demoSvg(type) {
  const svgs = {
    press: `<svg viewBox="0 0 100 90"><path class="bar" d="M18 28h64"/><path class="body-line" d="M38 48h28"/><path class="limb rep-arm" d="M42 46 31 28M58 46l11-18"/><path class="limb" d="M38 50 26 70M64 50l14 18"/></svg>`,
    row: `<svg viewBox="0 0 100 90"><path class="bar" d="M28 58h44"/><path class="body-line rep-row" d="M72 32 46 48M46 48 28 68M46 48l10 28M50 44l18 16"/><path class="limb rep-row" d="M54 48 72 58"/></svg>`,
    squat: `<svg viewBox="0 0 100 90"><path class="bar" d="M19 35h62"/><path class="body-line rep-leg" d="M50 19v34M50 53l-18 22M50 53l21 20M50 31l-22 5M50 31l21 5"/></svg>`,
    plank: `<svg viewBox="0 0 100 90"><path class="body-line" d="M22 50h56"/><path class="limb" d="M32 50 24 67M68 50l10 17M42 50l-8 20M58 50l8 20"/></svg>`
  };
  return svgs[type] || svgs.press;
}

function input(name, label, type, value) {
  return `<label>${label}<input name="${name}" type="${type}" value="${escapeHtml(String(value))}"></label>`;
}

function select(name, label, options, value) {
  return `
    <label>${label}
      <select name="${name}">
        ${options.map((option) => `<option ${String(option) === String(value) ? "selected" : ""}>${escapeHtml(String(option))}</option>`).join("")}
      </select>
    </label>
  `;
}

function metric(label, value, note) {
  return `<div class="metric-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`;
}

function macro(label, current, target, unit) {
  const percent = clamp(Math.round((current / target) * 100), 0, 100);
  return `
    <div class="macro">
      <span>${label}</span>
      <strong>${current} / ${target} ${unit}</strong>
      <div class="progress-line"><span style="--value: ${percent}%"></span></div>
    </div>
  `;
}

function todaysFoodTotals() {
  return state.foods
    .filter((food) => food.date === todayISO())
    .reduce((totals, food) => ({
      calories: totals.calories + food.calories,
      protein: totals.protein + food.protein,
      carbs: totals.carbs + food.carbs,
      fat: totals.fat + food.fat
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

function weeklyWorkoutStats() {
  const start = startOfWeek(new Date());
  const workouts = state.workouts.filter((workout) => new Date(workout.date) >= start);
  const dates = new Set(workouts.map((workout) => workout.date));
  return {
    sessions: dates.size,
    volume: workouts.reduce((sum, workout) => sum + workout.volume, 0)
  };
}

function renderWeekProgress() {
  const week = weeklyWorkoutStats();
  const percent = clamp(Math.round((week.sessions / state.profile.sessions) * 100), 0, 100);
  document.getElementById("weekProgressBar").style.setProperty("--value", `${percent}%`);
  document.getElementById("weekProgressText").textContent = `${week.sessions} / ${state.profile.sessions} séances`;
}

function nextWorkout() {
  const activeDays = state.plan.week.filter((day) => day.active);
  return activeDays[0] || { day: "Aujourd’hui", label: "Jour", focus: "Mobilité", duration: 30, exercises: [exerciseLibrary.find((item) => item.id === "plank")] };
}

function recoveryScore() {
  const week = weeklyWorkoutStats();
  const planned = state.profile.sessions;
  if (week.sessions > planned) return 58;
  if (week.sessions === planned) return 76;
  return 84;
}

function recoveryLabel() {
  const score = recoveryScore();
  if (score < 60) return "À alléger";
  if (score < 78) return "Correcte";
  return "Bonne fenêtre";
}

function trainingAdvice() {
  const stagnation = detectStagnation();
  const totals = todaysFoodTotals();
  const targets = calculateNutrition(state.profile);
  return {
    load: stagnation === "Possible" ? "Micro-charge" : "+1 rep avant charge",
    nutrition: totals.protein < targets.protein * .7 ? "+ protéines" : "Macros stables",
    recovery: recoveryScore() < 60 ? "-20 % volume" : "Repos normal"
  };
}

function detectStagnation() {
  const benchMeasures = state.measures.slice(-3).map((item) => item.bench);
  return new Set(benchMeasures).size === 1 ? "Possible" : "Non détectée";
}

function limitationShort() {
  const text = state.profile.limitations.trim();
  return text ? text.split(/[,.]/)[0] : "Aucune";
}

function hasLimitation(token) {
  return state.profile.limitations.toLowerCase().includes(token);
}

function coachReply(question) {
  const lower = question.toLowerCase();
  if (lower.includes("nutrition") || lower.includes("macro") || lower.includes("calorie")) {
    return "Garde les protéines proches de la cible, puis ajuste surtout les glucides autour des séances. Pour une recomposition, évite les baisses brutales.";
  }
  if (lower.includes("stagn") || lower.includes("force") || lower.includes("record")) {
    return "Passe deux semaines sur une fourchette de 6 à 8 reps, repose-toi 150 secondes et augmente seulement quand la vitesse reste propre.";
  }
  if (lower.includes("repos") || lower.includes("fatigue") || lower.includes("sommeil")) {
    return "Si la fatigue monte, baisse le volume de 20 % sur la prochaine séance et conserve une intensité modérée.";
  }
  if (lower.includes("genou") || lower.includes("douleur")) {
    return "Reste dans une amplitude indolore, privilégie le goblet squat contrôlé et arrête le mouvement si la douleur augmente.";
  }
  return "Je te propose un ajustement prudent : garde la séance prévue, fais deux séries de chauffe et évite l’échec sur les mouvements sensibles.";
}

function addChat(text, user) {
  state.chat.push({ role: user ? "user" : "assistant", text });
  saveState();
}

function estimateFood(name) {
  const lower = name.toLowerCase();
  if (lower.includes("poulet") || lower.includes("thon") || lower.includes("whey") || lower.includes("skyr")) {
    return { calories: 320, protein: 38, carbs: 18, fat: 8 };
  }
  if (lower.includes("riz") || lower.includes("pâte") || lower.includes("avoine") || lower.includes("banane")) {
    return { calories: 360, protein: 10, carbs: 68, fat: 5 };
  }
  if (lower.includes("saumon") || lower.includes("oeuf") || lower.includes("huile")) {
    return { calories: 420, protein: 30, carbs: 20, fat: 22 };
  }
  return { calories: 240, protein: 18, carbs: 24, fat: 8 };
}

function inferMeal() {
  const hour = new Date().getHours();
  if (hour < 11) return "Petit déjeuner";
  if (hour < 15) return "Déjeuner";
  if (hour < 19) return "Collation";
  return "Dîner";
}

function measurePath(key) {
  const values = state.measures.map((measure) => measure[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / Math.max(1, values.length - 1)) * 600;
    const y = 190 - ((value - min) / range) * 145;
    return [Math.round(x), Math.round(y)];
  });
  return points.map(([x, y], index) => `${index === 0 ? "M" : "L"}${x} ${y}`).join(" ");
}

function exportData() {
  const payload = JSON.stringify(state, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kinetic-export-${todayISO()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Export préparé");
}

function persistAndRender(message) {
  saveState();
  renderAll();
  showToast(message);
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    showToast("Sauvegarde locale indisponible");
  }
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return structuredClone(defaultState);
    return mergeState(structuredClone(defaultState), JSON.parse(stored));
  } catch (error) {
    return structuredClone(defaultState);
  }
}

function mergeState(base, stored) {
  return {
    ...base,
    ...stored,
    settings: { ...base.settings, ...stored.settings },
    profile: { ...base.profile, ...stored.profile }
  };
}

function applyTheme() {
  document.documentElement.dataset.theme = state.settings.theme;
  const themeIcon = document.querySelector("#themeToggle [data-icon]");
  if (themeIcon) themeIcon.dataset.icon = state.settings.theme === "light" ? "sun" : "moon";
}

function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach((element) => {
    const icon = icons[element.dataset.icon];
    if (icon) element.innerHTML = icon;
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!location.protocol.startsWith("http")) return;
  navigator.serviceWorker.register("sw.js").catch(() => {
    showToast("Mode hors ligne non disponible ici");
  });
}

function updateSyncStatus() {
  const syncStatus = document.getElementById("syncStatus");
  const online = navigator.onLine;
  syncStatus.textContent = online ? "Local · en ligne" : "Local · hors ligne";
  syncStatus.classList.toggle("online", online);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}

function formatNumber(number) {
  return Number(number || 0).toLocaleString("fr-FR");
}

function formatDate(date) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short" }).format(new Date(date));
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function todayOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function startOfWeek(date) {
  const copy = new Date(date);
  const day = copy.getDay() || 7;
  copy.setHours(0, 0, 0, 0);
  copy.setDate(copy.getDate() - day + 1);
  return copy;
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
