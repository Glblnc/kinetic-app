
const STORAGE_KEY = "kinetic.app.v2";

const _t = {
  fr: {
    app:"Kinetic",tag:"Coach fitness IA",h:"Accueil",p:"Profil",t:"Entraînement",n:"Nutrition",g:"Progression",c:"Coach IA",
    tn:"Train",nn:"Nutri",gs:"Stats",tv:"Vue du jour",pp:"Programme personnalisé",ap:"Programme adaptatif",
    cn:"Calories, macros et journal",mr:"Mesures, records et régularité",gc:"Conseils généraux personnalisés",
    td:"Mode sombre activé",tl:"Mode clair activé",ia:"Installation disponible depuis le menu du navigateur",
    ir:"Kinetic peut être installé sur cet appareil",lo:"Local",ol:"en ligne",ofl:"hors ligne",
    wt:"Semaine en cours",ses:"séances",seL:"Séances",vol:"Volume",cal:"Calories",rec:"Récupération",
    rem:"restantes",adh:"d'adhérence",ltr:"suivi local",rs:"Séance recommandée",dt:"Conseil du jour",
    la:"Analyse locale",stb:"Stable",det:"Détectée",ld:"Charge",nul:"Nutrition",rl:"Récupération",att:"Attention",
    ac:"Demander un conseil",up:"Profil utilisateur",sv:"Données sauvegardées localement",fr:"France",
    age:"Âge",sx:"Sexe",hgt:"Taille",wgt:"Poids",lvl:"Niveau",gl:"Objectif",act:"Activité quotidienne",
    spw:"Séances par semaine",eq:"Matériel disponible",inj:"Blessures ou limitations",fp:"Préférences alimentaires",
    srg:"Enregistrer et régénérer",syn:"Synthèse",cc:"Calculs actuels",actv:"Actif",st:"Structure",
    pro:"Protéines",car:"Glucides",lip:"Lipides",priv:"Confidentialité",lv:"Version locale",
    acc:"Comptes",rdy:"Préparé",syncc:"Synchronisation",toc:"À brancher",rai:"IA réelle",ss:"Côté serveur",
    off:"Hors ligne",ena:"Activé",cald:"Calendrier",rg:"Régénérer",rst:"Repos",
    lv2:"Dernières validations",lh:"Historique local",ns:"Aucune séance enregistrée",alt:"Alternatives",
    atp:"Selon douleur ou matériel",to:"Objectifs du jour",scn:"Scanner",csm:"consommées",fj:"Journal alimentaire",
    td2:"Aujourd'hui",af:"Ajouter un aliment",afp:"Ajouter un aliment",nf:"Aucun aliment aujourd'hui",
    frm:"Aliment supprimé",fda:"Aliment ajouté",crv:"Courbes",ws:"Poids et force",exp:"Export",
    msr:"Mensurations",lm:"Dernière mesure",wl:"Poids",wst:"Taille(cm)",var:"Variation",bdg:"Badges",mot:"Motivation",
    reg:"Régularité",strg:"Force",cv:"Conversation",disc:"Conseils généraux, pas un avis médical",
    cph:"Question nutrition, exercice ou récupération",snd:"Envoyer",qa:"Actions rapides",adj:"Ajustements",
    as1:"Adapter ma séance",as2:"Analyser une stagnation",cm:"Corriger mes macros",pr:"Planifier le repos",
    anl:"Analyse",ct:"Tendance actuelle",stg:"Stagnation",otr:"Surentraînement",nxa:"Prochaine action",
    tw:"À surveiller",lw:"Faible",ps:"Profil enregistré et programme régénéré",af2:"Ajoutez un aliment",
    wv:"validé",prg:"Programme régénéré",sr:"Le scan code-barres est prêt pour la version mobile",
    exr:"Export préparé",su:"Sauvegarde locale indisponible",swf:"Mode hors ligne non disponible ici",
    bgn:"Débutant",int:"Intermédiaire",adv:"Avancé",mn:"Homme",wm:"Femme",oth:"Autre",
    sed:"Sédentaire",mod:"Modérée",a2:"Active",va:"Très active",mg:"Prise de masse",wl2:"Perte de poids",
    cut:"Sèche",rec2:"Recomposition corporelle",end:"Endurance",fit:"Remise en forme",
    D:"Dim",L:"Lun",M:"Mar",Me:"Mer",J:"Jeu",V:"Ven",S:"Sam",
    bf:"Petit déjeuner",lu:"Déjeuner",sn:"Collation",di:"Dîner",
    cpl:"Validé",val:"Valider",kg:"kg",bw:"Poids du corps",surv:"Surveillance",
    pau:"Pause",res:"Reprendre",canc:"Annuler",rt:"Minuteur de repos",rtd:"Repos terminé !",rtc:"C'est reparti !",
    bs:"Scanner un code-barres",bss:"Scan en cours...",bsr:"Résultat",bnf:"Aliment non trouvé",
    nt:"Kinetic - Rappel",nb:"C'est l'heure de ta séance !",
    onb:"Bienvenue sur Kinetic",onbs:"Configure ton profil en quelques étapes",nxt:"Suivant",fin:"Terminer",
    s1:"Informations générales",s2:"Objectifs et matériel",s3:"Santé et nutrition",s4:"Récapitulatif",
    fav:"Favori",favs:"Favoris",set:"Paramètres",lang:"Langue",thm:"Thème",notif:"Notifications",
    en:"Activer les rappels",ne:"Notifications activées",nd:"Notifications refusées",
    ach:"Succès",achu:"Succès débloqué !",
    fw:"Premier pas",fwd:"Valide ton premier exercice",cs:"Régularité",csd:"3 séances dans la semaine",
    va2:"Gros volume",vad:"Atteins 5000 kg de volume total",saa:"Monte en charge",sad:"Soulève +80 kg au développé couché",
    mp:"Macros parfaites",mpd:"Atteins tes macros 3 jours de suite",sr2:"Suivi rigoureux",srd:"5 mesures corporelles",
    cur:"Curieux",curd:"Pose 5 questions au coach",poly:"Polyvalent",polyd:"5 exercices différents",
    rca:"Récupération",rcad:"Atteins 100% de récupération",stk:"Série en cours",stkd:"2 semaines consécutives",
    fw2:"Semaine complète",fw2d:"Toutes les séances planifiées faites",fwt:"50 séances",fwtd:"Enregistre 50 séances d'entraînement",
    olp:"Surcharge progressive",olpd:"Augmente la charge d'un exercice",
    st7:"Régulier",st7d:"7 jours d'affilée",st30:"Discipliné",st30d:"30 jours d'affilée",st100:"Inarrêtable",st100d:"100 jours d'affilée",
    po:"Surcharge progressive",aa:"Ajustement auto",nsl:"Charge proposée",pp2:"Performance précédente",
    inc:"Augmentation",th:"Trop lourd",jr:"Correct",ci:"Peut augmenter",
    rs2:"Rappel programmé",rsa:"Rappel déjà actif",rnd:"Active les notifications dans les paramètres",
    rmt:"Heure du rappel",sr3:"Programmer un rappel",un:"Prénom",yn:"Ton prénom",pc:"Profil complété !",
    wel:"Bonjour",bf2:"Masse grasse",mm:"Masse musculaire",bmi:"IMC",
    chk:"Check-in",hfl:"Comment te sens-tu aujourd'hui ?",en2:"Énergie",md:"Moral",sl:"Sommeil",sr4:"Courbatures",
    feels:{gr:"Super",gd:"Bien",ok:"Correct",ti:"Fatigué",ex:"Épuisé"},
    sf:"Rechercher un aliment",sfp:"Rechercher dans la base de données...",nr:"Aucun résultat",ad:"Ajouter",prv:"Précédent",
    aiKey:"Clé API Claude (coach IA réel)",aiKeyPlaceholder:"sk-ant-...",aiKeyHelp:"La clé est stockée uniquement sur cet appareil et sert à appeler directement l'API Claude. Sans clé, le coach utilise des réponses locales.",
    aiOn:"Coach IA réel activé",aiOff:"Coach local (pas de clé)",aiError:"IA indisponible, réponse locale",
    imp:"Importer",impDone:"Données importées",scanManual:"Saisir un code-barres",scanSearching:"Recherche du produit...",scanNoCam:"Caméra ou scan indisponible. Saisis le code-barres manuellement.",
    authWelcome:"Connecte-toi pour accéder à ton espace.",authCreate:"Crée ton compte (première utilisation).",authUser:"Identifiant",authPass:"Mot de passe",authLogin:"Se connecter",authRegister:"Créer le compte",authClosed:"Les inscriptions sont fermées : un compte existe déjà.",authOffline:"Hors ligne : connexion au serveur impossible. Reconnecte-toi quand le serveur sera disponible.",
    logout:"Déconnexion",aiServer:"Le coach IA et tes données sont sécurisés côté serveur. La clé API n'est jamais exposée au navigateur.",
    authNoAccount:"Pas encore de compte ?",authHaveAccount:"Déjà un compte ?",
    notifTest:"Tester la notification",notifSent:"Notification envoyée",notifBlocked:"Notifications bloquées par le navigateur",
    ageConfirm:"Je certifie avoir 14 ans ou plus.",ageRequired:"Tu dois avoir 14 ans ou plus pour créer un compte.",
    instTitle:"Installer Kinetic",instDone:"Application déjà installée",
    instIos:"Sur iPhone/iPad :<br>1. Appuie sur le bouton <b>Partager</b> (le carré avec une flèche ↑) dans la barre de Safari.<br>2. Fais défiler et choisis <b>« Sur l'écran d'accueil »</b>.<br>3. Appuie sur <b>« Ajouter »</b>. L'icône Kinetic apparaît sur ton écran d'accueil.",
    instOther:"Dans le menu de ton navigateur (icône <b>⋮</b> ou <b>≡</b>), choisis <b>« Installer l'application »</b> ou <b>« Ajouter à l'écran d'accueil »</b>.",
    startSession:"Démarrer la séance",session:"Séance",setN:"Série",weightKg:"Poids (kg)",validateSet:"Valider",nextEx:"Suivant",finishSession:"Terminer la séance",
    lastTime:"Dernière fois",noLastTime:"Première fois",progUp:"+2,5 kg conseillé",progHold:"Consolide à ce poids",sessionDone:"Séance enregistrée 💪",restWord:"repos",
    deloadTitle:"Semaine de décharge",deloadActive:"Décharge active",deloadActiveMsg:"Charges réduites de 10 % cette semaine pour récupérer.",deloadRecMsg:"Tes performances stagnent : une semaine de décharge (charges −10 %) peut relancer la progression.",deloadBtn:"Activer une semaine de décharge",deloadSuggest:"Plateau détecté — pense à une semaine de décharge.",deloadOn:"Semaine de décharge activée",plateauOn:"Plateau sur :",
    progPhotos:"Photos de progression",addPhoto:"Ajouter",photosLocal:"Les photos restent sur cet appareil.",photoAdded:"Photo ajoutée",photoFull:"Stockage des photos plein",
    exProgress:"Progression par exercice",noData:"Pas encore de données",
    water:"Hydratation",waterGoalLbl:"Objectif",meal:"Repas",grams:"Quantité (g)",qty:"Quantité",
    regTitle:"Régularité",regSub:"Ta constance jour après jour",curStreak:"Série en cours",bestStreak:"Record",daysShort:"j",dayS:"jour",daysPl:"jours",calLess:"Moins",calMore:"Plus",restDayMsg:"Jour de repos — récupération 💤"
  },
  en: {
    app:"Kinetic",tag:"AI Fitness Coach",h:"Home",p:"Profile",t:"Training",n:"Nutrition",g:"Progress",c:"AI Coach",
    tn:"Train",nn:"Food",gs:"Stats",tv:"Today's View",pp:"Personalized Program",ap:"Adaptive Program",
    cn:"Calories, macros & journal",mr:"Measurements, records & consistency",gc:"General personalized advice",
    td:"Dark mode enabled",tl:"Light mode enabled",ia:"Install from browser menu",
    ir:"Kinetic can be installed on this device",lo:"Local",ol:"online",ofl:"offline",
    wt:"Current week",ses:"sessions",seL:"Sessions",vol:"Volume",cal:"Calories",rec:"Recovery",
    rem:"remaining",adh:"adherence",ltr:"local tracking",rs:"Recommended Session",dt:"Daily Tip",
    la:"Local Analysis",stb:"Stable",det:"Detected",ld:"Load",nul:"Nutrition",rl:"Recovery",att:"Attention",
    ac:"Ask for advice",up:"User Profile",sv:"Data saved locally",fr:"France",
    age:"Age",sx:"Sex",hgt:"Height",wgt:"Weight",lvl:"Level",gl:"Goal",act:"Daily Activity",
    spw:"Sessions per week",eq:"Available Equipment",inj:"Injuries or Limitations",fp:"Food Preferences",
    srg:"Save & Regenerate",syn:"Summary",cc:"Current Calculations",actv:"Active",st:"Structure",
    pro:"Protein",car:"Carbs",lip:"Fat",priv:"Privacy",lv:"Local Version",
    acc:"Accounts",rdy:"Ready",syncc:"Sync",toc:"To connect",rai:"Real AI",ss:"Server side",
    off:"Offline",ena:"Enabled",cald:"Calendar",rg:"Regenerate",rst:"Rest",
    lv2:"Last Validations",lh:"Local History",ns:"No sessions recorded",alt:"Alternatives",
    atp:"By pain or equipment",to:"Today's Goals",scn:"Scan",csm:"consumed",fj:"Food Journal",
    td2:"Today",af:"Add Food",afp:"Add a food item",nf:"No food today",
    frm:"Food removed",fda:"Food added",crv:"Charts",ws:"Weight & Strength",exp:"Export",
    msr:"Measurements",lm:"Last Measure",wl:"Weight",wst:"Waist(cm)",var:"Change",bdg:"Badges",mot:"Motivation",
    reg:"Regularity",strg:"Strength",cv:"Conversation",disc:"General advice, not medical opinion",
    cph:"Question about nutrition, exercise or recovery",snd:"Send",qa:"Quick Actions",adj:"Adjustments",
    as1:"Adapt my session",as2:"Analyze stagnation",cm:"Fix my macros",pr:"Plan rest",
    anl:"Analysis",ct:"Current Trend",stg:"Stagnation",otr:"Overtraining",nxa:"Next Action",
    tw:"To watch",lw:"Low",ps:"Profile saved and program regenerated",af2:"Add a food item",
    wv:"validated",prg:"Program regenerated",sr:"Barcode scan ready for mobile version",
    exr:"Export prepared",su:"Local save unavailable",swf:"Offline mode not available here",
    bgn:"Beginner",int:"Intermediate",adv:"Advanced",mn:"Man",wm:"Woman",oth:"Other",
    sed:"Sedentary",mod:"Moderate",a2:"Active",va:"Very Active",mg:"Mass Gain",wl2:"Weight Loss",
    cut:"Cut",rec2:"Body Recomposition",end:"Endurance",fit:"Get Fit",
    D:"Sun",L:"Mon",M:"Tue",Me:"Wed",J:"Thu",V:"Fri",S:"Sat",
    bf:"Breakfast",lu:"Lunch",sn:"Snack",di:"Dinner",
    cpl:"Done",val:"Validate",kg:"kg",bw:"Bodyweight",surv:"Caution",
    pau:"Pause",res:"Resume",canc:"Cancel",rt:"Rest Timer",rtd:"Rest done!",rtc:"Let's go!",
    bs:"Scan barcode",bss:"Scanning...",bsr:"Result",bnf:"Food not found",
    nt:"Kinetic - Reminder",nb:"Time for your workout!",
    onb:"Welcome to Kinetic",onbs:"Set up your profile in a few steps",nxt:"Next",fin:"Finish",
    s1:"General Info",s2:"Goals & Equipment",s3:"Health & Nutrition",s4:"Summary",
    fav:"Favorite",favs:"Favorites",set:"Settings",lang:"Language",thm:"Theme",notif:"Notifications",
    en:"Enable reminders",ne:"Notifications enabled",nd:"Notifications denied",
    ach:"Achievements",achu:"Achievement unlocked!",
    fw:"First Step",fwd:"Validate your first exercise",cs:"Consistency",csd:"3 sessions in a week",
    va2:"Big Volume",vad:"Reach 5000 kg total volume",saa:"Going Up",sad:"Bench press over 80 kg",
    mp:"Perfect Macros",mpd:"Hit your macros 3 days in a row",sr2:"Rigorous Tracking",srd:"5 body measurements",
    cur:"Curious",curd:"Ask 5 questions to the coach",poly:"Versatile",polyd:"5 different exercises",
    rca:"Recovery",rcad:"Reach 100% recovery",stk:"On a Streak",stkd:"2 consecutive weeks without skipping",
    fw2:"Full Week",fw2d:"Complete all planned sessions",fwt:"50 Workouts",fwtd:"Record 50 workout sessions",
    olp:"Progressive Overload",olpd:"Increase weight on an exercise",
    st7:"Consistent",st7d:"7-day streak",st30:"Disciplined",st30d:"30-day streak",st100:"Unstoppable",st100d:"100-day streak",
    po:"Progressive Overload",aa:"Auto Adjust",nsl:"Suggested Load",pp2:"Previous Performance",
    inc:"Increase",th:"Too Heavy",jr:"Just Right",ci:"Could Increase",
    rs2:"Reminder scheduled",rsa:"Reminder already active",rnd:"Enable notifications in settings",
    rmt:"Reminder time",sr3:"Set reminder",un:"First name",yn:"Your first name",pc:"Profile complete!",
    wel:"Hello",bf2:"Body Fat",mm:"Muscle Mass",bmi:"BMI",
    chk:"Check-in",hfl:"How are you feeling today?",en2:"Energy",md:"Mood",sl:"Sleep",sr4:"Soreness",
    feels:{gr:"Great",gd:"Good",ok:"Okay",ti:"Tired",ex:"Exhausted"},
    sf:"Search food",sfp:"Search the database...",nr:"No results",ad:"Add",prv:"Previous",
    aiKey:"Claude API key (real AI coach)",aiKeyPlaceholder:"sk-ant-...",aiKeyHelp:"The key is stored only on this device and used to call the Claude API directly. Without a key, the coach uses local replies.",
    aiOn:"Real AI coach enabled",aiOff:"Local coach (no key)",aiError:"AI unavailable, local reply",
    imp:"Import",impDone:"Data imported",scanManual:"Enter a barcode",scanSearching:"Looking up product...",scanNoCam:"Camera or scanning unavailable. Enter the barcode manually.",
    authWelcome:"Log in to access your space.",authCreate:"Create your account (first use).",authUser:"Username",authPass:"Password",authLogin:"Log in",authRegister:"Create account",authClosed:"Registration is closed: an account already exists.",authOffline:"Offline: cannot reach the server. Log in again when it is available.",
    logout:"Log out",aiServer:"The AI coach and your data are secured server-side. The API key is never exposed to the browser.",
    authNoAccount:"No account yet?",authHaveAccount:"Already have an account?",
    notifTest:"Send a test notification",notifSent:"Notification sent",notifBlocked:"Notifications blocked by the browser",
    ageConfirm:"I confirm I am 14 or older.",ageRequired:"You must be 14 or older to create an account.",
    instTitle:"Install Kinetic",instDone:"App already installed",
    instIos:"On iPhone/iPad:<br>1. Tap the <b>Share</b> button (the square with an ↑ arrow) in Safari's bar.<br>2. Scroll and choose <b>“Add to Home Screen”</b>.<br>3. Tap <b>“Add”</b>. The Kinetic icon appears on your home screen.",
    instOther:"In your browser menu (<b>⋮</b> or <b>≡</b> icon), choose <b>“Install app”</b> or <b>“Add to Home Screen”</b>.",
    startSession:"Start workout",session:"Workout",setN:"Set",weightKg:"Weight (kg)",validateSet:"Done",nextEx:"Next",finishSession:"Finish workout",
    lastTime:"Last time",noLastTime:"First time",progUp:"+2.5 kg suggested",progHold:"Consolidate at this weight",sessionDone:"Workout saved 💪",restWord:"rest",
    deloadTitle:"Deload week",deloadActive:"Deload active",deloadActiveMsg:"Loads reduced by 10% this week to recover.",deloadRecMsg:"Your performance is stalling: a deload week (loads −10%) can restart progress.",deloadBtn:"Start a deload week",deloadSuggest:"Plateau detected — consider a deload week.",deloadOn:"Deload week started",plateauOn:"Plateau on:",
    progPhotos:"Progress photos",addPhoto:"Add",photosLocal:"Photos stay on this device.",photoAdded:"Photo added",photoFull:"Photo storage full",
    exProgress:"Per-exercise progress",noData:"No data yet",
    water:"Water",waterGoalLbl:"Goal",meal:"Meal",grams:"Amount (g)",qty:"Amount",
    regTitle:"Consistency",regSub:"Your day-by-day streak",curStreak:"Current streak",bestStreak:"Best",daysShort:"d",dayS:"day",daysPl:"days",calLess:"Less",calMore:"More",restDayMsg:"Rest day — recovery 💤"
  }
};

const icons = {
  home:'<svg viewBox="0 0 24 24"><path d="M3 12 12 4l9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  user:'<svg viewBox="0 0 24 24"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  dumbbell:'<svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M3 9v6"/><path d="M21 9v6"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>',
  utensils:'<svg viewBox="0 0 24 24"><path d="M7 2v8"/><path d="M11 2v8"/><path d="M7 6h4"/><path d="M9 10v12"/><path d="M17 2c2 2 2 5 0 7v13"/></svg>',
  chart:'<svg viewBox="0 0 24 24"><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 4-4 3 3 5-7"/></svg>',
  bot:'<svg viewBox="0 0 24 24"><path d="M12 3v3"/><path d="M7 8h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z"/><path d="M8 13h.01"/><path d="M16 13h.01"/><path d="M9 17h6"/></svg>',
  moon:'<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z"/></svg>',
  sun:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  download:'<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  message:'<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>',
  scan:'<svg viewBox="0 0 24 24"><path d="M4 7V5a1 1 0 0 1 1-1h2"/><path d="M17 4h2a1 1 0 0 1 1 1v2"/><path d="M20 17v2a1 1 0 0 1-1 1h-2"/><path d="M7 20H5a1 1 0 0 1-1-1v-2"/><path d="M7 8v8"/><path d="M10 8v8"/><path d="M14 8v8"/><path d="M17 8v8"/></svg>',
  trash:'<svg viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
  send:'<svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  refresh:'<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>',
  export:'<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  star:'<svg viewBox="0 0 24 24"><path d="M12 2l3 7 7 .5-5.3 5.2L18 21l-6-3.7L6 21l1.3-6.3L2 9.5 9 9Z"/></svg>',
  timer:'<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2"/><path d="M9 2h6"/></svg>',
  bell:'<svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  award:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M8.2 13.6 7 22l5-3 5 3-1.2-8.4"/></svg>',
  settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
  camera:'<svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l1.5-2h7L17 6h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/></svg>',
  checkCircle:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>'
};

const exerciseLibrary = [
  {id:"bench",name:"Développé couché",nameEn:"Bench Press",muscles:["Pectoraux","Triceps"],equipment:["Barre","Banc"],sets:4,reps:"8-10",rest:120,load:62.5,cue:"Omoplates serrées, pieds stables.",cueEn:"Retract scapulae, feet planted.",alternative:"Pompes inclinées",alternativeEn:"Incline push-ups",demo:"press"},
  {id:"db-press",name:"Développé haltères",nameEn:"Dumbbell Press",muscles:["Pectoraux","Épaules"],equipment:["Haltères","Banc"],sets:4,reps:"8-12",rest:90,load:24,cue:"Amplitude confortable, poignets alignés.",cueEn:"Comfortable range, wrists aligned.",alternative:"Pompes au sol",alternativeEn:"Floor push-ups",demo:"press"},
  {id:"row",name:"Rowing haltère",nameEn:"Dumbbell Row",muscles:["Dos","Biceps"],equipment:["Haltères"],sets:4,reps:"10-12",rest:90,load:28,cue:"Tire vers la hanche, buste stable.",cueEn:"Pull towards hip, stable torso.",alternative:"Rowing élastique",alternativeEn:"Band row",demo:"row"},
  {id:"goblet-squat",name:"Squat goblet",nameEn:"Goblet Squat",muscles:["Quadriceps","Fessiers","Gainage"],equipment:["Haltères"],sets:3,reps:"10-12",rest:90,load:26,cue:"Tempo lent, amplitude sans douleur.",cueEn:"Slow tempo, pain-free range.",alternative:"Box squat",alternativeEn:"Box squat",demo:"squat",limitation:"genou"},
  {id:"rdl",name:"Soulevé de terre roumain",nameEn:"Romanian Deadlift",muscles:["Ischios","Fessiers","Lombaires"],equipment:["Barre","Haltères"],sets:3,reps:"8-10",rest:120,load:70,cue:"Hanches vers l'arriere, dos neutre.",cueEn:"Hips back, neutral spine.",alternative:"Band hip hinge",alternativeEn:"Band hip hinge",demo:"row"},
  {id:"ohp",name:"Développé militaire",nameEn:"Overhead Press",muscles:["Épaules","Triceps"],equipment:["Barre","Haltères"],sets:3,reps:"6-8",rest:120,load:38,cue:"Gainage fort, trajectoire proche du visage.",cueEn:"Core tight, bar path near face.",alternative:"Élévations latérales",alternativeEn:"Lateral raises",demo:"press",limitation:"épaule"},
  {id:"lunge",name:"Fentes arrière",nameEn:"Reverse Lunges",muscles:["Jambes","Fessiers","Gainage"],equipment:["Poids du corps","Haltères"],sets:3,reps:"10/côté",rest:90,load:16,cue:"Pas arrière, genou avant stable.",cueEn:"Step back, front knee stable.",alternative:"Step-ups",alternativeEn:"Step-ups",demo:"squat",limitation:"genou"},
  {id:"plank",name:"Planche",nameEn:"Plank",muscles:["Gainage","Épaules"],equipment:["Poids du corps"],sets:3,reps:"40-60 s",rest:60,load:0,cue:"Bassin neutre, respiration régulière.",cueEn:"Neutral pelvis, steady breathing.",alternative:"Dead bug",alternativeEn:"Dead bug",demo:"plank"},
  {id:"pullup",name:"Traction pronation",nameEn:"Pull-up",muscles:["Dos","Biceps"],equipment:["Barre de traction"],sets:3,reps:"6-10",rest:120,load:0,cue:"Mains en pronation, tire les coudes vers le bas, poitrine vers la barre.",cueEn:"Overhand grip, pull elbows down, chest to bar.",alternative:"Tirage élastique",alternativeEn:"Band pulldown",demo:"pull",limitation:"épaule"},
  {id:"chinup",name:"Traction supination",nameEn:"Chin-up",muscles:["Dos","Biceps"],equipment:["Barre de traction"],sets:3,reps:"6-12",rest:120,load:0,cue:"Mains en supination, gainage serré, monte le menton au-dessus de la barre.",cueEn:"Underhand grip, brace core, chin over the bar.",alternative:"Curl haltères",alternativeEn:"Dumbbell curl",demo:"pull"},
  {id:"hang-leg-raise",name:"Relevé de jambes suspendu",nameEn:"Hanging Leg Raise",muscles:["Gainage"],equipment:["Barre de traction"],sets:3,reps:"8-12",rest:60,load:0,cue:"Suspendu à la barre, monte les jambes tendues sans balancer.",cueEn:"Hang from the bar, raise straight legs without swinging.",alternative:"Relevé de genoux",alternativeEn:"Knee raises",demo:"pull"},
  {id:"squat",name:"Squat barre",nameEn:"Barbell Squat",muscles:["Quadriceps","Fessiers","Ischios"],equipment:["Barre"],sets:4,reps:"6-8",rest:150,load:80,cue:"Dos gainé, genoux suivent les pieds.",cueEn:"Core braced, knees track toes.",alternative:"Squat goblet",alternativeEn:"Goblet squat",demo:"squat",limitation:"genou"},
  {id:"deadlift",name:"Soulevé de terre",nameEn:"Deadlift",muscles:["Ischios","Fessiers","Lombaires","Dos"],equipment:["Barre"],sets:3,reps:"5",rest:180,load:100,cue:"Dos droit, barre proche du corps.",cueEn:"Straight back, bar close.",alternative:"Romanian deadlift",alternativeEn:"Romanian deadlift",demo:"row"},
  {id:"dips",name:"Dips",nameEn:"Dips",muscles:["Pectoraux","Triceps","Épaules"],equipment:["Barre de dips"],sets:3,reps:"8-12",rest:90,load:0,cue:"Descente contrôlée, coudes serrés, buste légèrement penché en avant.",cueEn:"Controlled descent, elbows tucked, slight forward lean.",alternative:"Pompes serrées",alternativeEn:"Close-grip push-ups",demo:"dip",limitation:"épaule"},
  {id:"dips-triceps",name:"Dips triceps",nameEn:"Triceps Dips",muscles:["Triceps","Pectoraux"],equipment:["Barre de dips"],sets:3,reps:"10-15",rest:75,load:0,cue:"Buste vertical, coudes vers l'arrière pour cibler les triceps.",cueEn:"Upright torso, elbows back to target triceps.",alternative:"Extension triceps",alternativeEn:"Triceps extension",demo:"dip"},
  {id:"curl",name:"Curl haltères",nameEn:"Dumbbell Curl",muscles:["Biceps"],equipment:["Haltères"],sets:3,reps:"10-15",rest:60,load:12,cue:"Coudes fixes, contraction haute.",cueEn:"Elbows fixed, squeeze at top.",alternative:"Curl marteau",alternativeEn:"Hammer curl",demo:"press"},
  {id:"ext",name:"Extension triceps",nameEn:"Triceps Extension",muscles:["Triceps"],equipment:["Haltères"],sets:3,reps:"10-15",rest:60,load:10,cue:"Coudes vers le plafond.",cueEn:"Elbows up, slow descent.",alternative:"Dips au sol",alternativeEn:"Floor dips",demo:"press"},
  {id:"lat-raise",name:"Élévations latérales",nameEn:"Lateral Raises",muscles:["Épaules"],equipment:["Haltères","Élastiques"],sets:3,reps:"12-15",rest:45,load:8,cue:"Coudes légèrement fléchis.",cueEn:"Slightly bent elbows.",alternative:"Élévations avant",alternativeEn:"Front raises",demo:"press"},
  {id:"pushup",name:"Pompes",nameEn:"Push-ups",muscles:["Pectoraux","Triceps","Gainage"],equipment:["Poids du corps"],sets:3,reps:"15-20",rest:60,load:0,cue:"Corps aligné, coudes à 45°.",cueEn:"Body aligned, elbows at 45°.",alternative:"Pompes sur genoux",alternativeEn:"Knee push-ups",demo:"press"},
  {id:"leg-raise",name:"Relevé de jambes",nameEn:"Leg Raises",muscles:["Gainage"],equipment:["Poids du corps"],sets:3,reps:"12-15",rest:45,load:0,cue:"Dos au sol, jambes tendues.",cueEn:"Back on ground, straight legs.",alternative:"Crunches",alternativeEn:"Crunches",demo:"plank"},
  {id:"hip-thrust",name:"Hip thrust",nameEn:"Hip Thrust",muscles:["Fessiers","Ischios"],equipment:["Barre","Banc"],sets:4,reps:"10-12",rest:90,load:60,cue:"Épaules sur le banc, monte les hanches.",cueEn:"Shoulders on bench, drive hips up.",alternative:"Pont fessier",alternativeEn:"Glute bridge",demo:"squat"},
  {id:"calf-raise",name:"Mollets debout",nameEn:"Standing Calf Raise",muscles:["Mollets"],equipment:["Poids du corps","Haltères"],sets:4,reps:"15-20",rest:45,load:20,cue:"Amplitude complète, pause haute.",cueEn:"Full range, pause at top.",alternative:"Mollets assis",alternativeEn:"Seated calf raises",demo:"press"}
];

const foodDatabase = [
  {name:"Poulet grillé",nameEn:"Grilled chicken",cat:"Viandes",cal:220,pro:38,car:0,fat:7},
  {name:"Blanc de poulet",nameEn:"Chicken breast",cat:"Viandes",cal:165,pro:31,car:0,fat:3.6},
  {name:"Steak haché 5%",nameEn:"Lean ground beef",cat:"Viandes",cal:175,pro:27,car:0,fat:7},
  {name:"Steak haché 15%",nameEn:"Ground beef 15%",cat:"Viandes",cal:250,pro:26,car:0,fat:15},
  {name:"Saumon",nameEn:"Salmon",cat:"Poissons",cal:208,pro:20,car:0,fat:13},
  {name:"Thon au naturel",nameEn:"Canned tuna",cat:"Poissons",cal:116,pro:26,car:0,fat:0.8},
  {name:"Cabillaud",nameEn:"Cod",cat:"Poissons",cal:82,pro:18,car:0,fat:0.7},
  {name:"Oeufs (2)",nameEn:"Eggs (2)",cat:"Œufs",cal:140,pro:12,car:1,fat:10},
  {name:"Skyr nature",nameEn:"Plain skyr",cat:"Laitiers",cal:65,pro:11,car:4,fat:0.2},
  {name:"Fromage blanc 0%",nameEn:"Low-fat cheese",cat:"Laitiers",cal:48,pro:8,car:3.7,fat:0.2},
  {name:"Whey isolate",nameEn:"Whey isolate",cat:"Compléments",cal:110,pro:25,car:1,fat:0.5},
  {name:"Riz blanc cuit",nameEn:"White rice cooked",cat:"Féculents",cal:130,pro:2.7,car:28,fat:0.3},
  {name:"Riz complet cuit",nameEn:"Brown rice cooked",cat:"Féculents",cal:123,pro:2.7,car:26,fat:1},
  {name:"Pâtes cuites",nameEn:"Pasta cooked",cat:"Féculents",cal:131,pro:5,car:25,fat:0.6},
  {name:"Pâtes complètes",nameEn:"Whole wheat pasta",cat:"Féculents",cal:124,pro:5.3,car:24,fat:0.8},
  {name:"Pain complet",nameEn:"Whole wheat bread",cat:"Féculents",cal:265,pro:9,car:47,fat:3.4},
  {name:"Flocons d'avoine",nameEn:"Oatmeal",cat:"Féculents",cal:375,pro:14,car:62,fat:7.5},
  {name:"Pomme de terre",nameEn:"Potato",cat:"Féculents",cal:93,pro:2.5,car:21,fat:0.1},
  {name:"Patate douce",nameEn:"Sweet potato",cat:"Féculents",cal:86,pro:1.6,car:20,fat:0.1},
  {name:"Banane",nameEn:"Banana",cat:"Fruits",cal:105,pro:1.3,car:27,fat:0.4},
  {name:"Pomme",nameEn:"Apple",cat:"Fruits",cal:95,pro:0.5,car:25,fat:0.3},
  {name:"Avocat",nameEn:"Avocado",cat:"Fruits",cal:160,pro:2,car:8.5,fat:14.7},
  {name:"Brocoli",nameEn:"Broccoli",cat:"Légumes",cal:34,pro:2.8,car:7,fat:0.4},
  {name:"Épinards",nameEn:"Spinach",cat:"Légumes",cal:23,pro:2.9,car:3.6,fat:0.4},
  {name:"Salade verte",nameEn:"Green salad",cat:"Légumes",cal:15,pro:1.4,car:2.9,fat:0.2},
  {name:"Amandes",nameEn:"Almonds",cat:"Olélagineux",cal:579,pro:21,car:22,fat:50},
  {name:"Beurre de cacahuète",nameEn:"Peanut butter",cat:"Olélagineux",cal:588,pro:25,car:20,fat:50},
  {name:"Huile d'olive",nameEn:"Olive oil",cat:"MG",cal:884,pro:0,car:0,fat:100},
  {name:"Yaourt nature",nameEn:"Plain yogurt",cat:"Laitiers",cal:61,pro:4.7,car:4.7,fat:2.8},
  {name:"Lait demi-écrémé",nameEn:"Semi-skimmed milk",cat:"Laitiers",cal:47,pro:3.2,car:4.8,fat:1.6},
  {name:"Miel",nameEn:"Honey",cat:"Sucreries",cal:304,pro:0.3,car:82,fat:0},
  {name:"Tofu",nameEn:"Tofu",cat:"Protéines végétales",cal:76,pro:8,car:2,fat:4.8},
  {name:"Lentilles cuites",nameEn:"Cooked lentils",cat:"Légumineuses",cal:116,pro:9,car:20,fat:0.4},
  {name:"Pois chiches cuits",nameEn:"Cooked chickpeas",cat:"Légumineuses",cal:139,pro:7.6,car:23,fat:2.2},
  {name:"Chocolat noir 70%",nameEn:"Dark chocolate 70%",cat:"Sucreries",cal:600,pro:7.8,car:45,fat:42},
  {name:"Crevettes",nameEn:"Shrimp",cat:"Poissons",cal:99,pro:24,car:0.2,fat:0.3},
  {name:"Café noir",nameEn:"Black coffee",cat:"Boissons",cal:2,pro:0.3,car:0,fat:0},
  {name:"Eau",nameEn:"Water",cat:"Boissons",cal:0,pro:0,car:0,fat:0},
  {name:"Compote sans sucre",nameEn:"Applesauce",cat:"Fruits",cal:56,pro:0.2,car:14,fat:0.1},
  {name:"Poulet curry riz",nameEn:"Chicken curry rice",cat:"Plats",cal:450,pro:28,car:52,fat:14},
  {name:"Pâtes bolognaise",nameEn:"Pasta bolognese",cat:"Plats",cal:420,pro:22,car:50,fat:14},
  {name:"Salade césar",nameEn:"Caesar salad",cat:"Plats",cal:350,pro:22,car:14,fat:24},
  {name:"Noix de cajou",nameEn:"Cashew nuts",cat:"Olélagineux",cal:553,pro:18,car:30,fat:44}
];

const achievementsDef = [
  {id:"first-workout",ik:"fw",idk:"fwd",chk:()=>state.workouts.length>=1},
  {id:"consistency",ik:"cs",idk:"csd",chk:()=>weeklyWorkoutStats().sessions>=3},
  {id:"volume-5000",ik:"va2",idk:"vad",chk:()=>state.workouts.reduce((s,w)=>s+w.volume,0)>=5000},
  {id:"strength-80",ik:"saa",idk:"sad",chk:()=>state.measures.some(m=>m.bench>=80)},
  {id:"measures-5",ik:"sr2",idk:"srd",chk:()=>state.measures.length>=5},
  {id:"chat-5",ik:"cur",idk:"curd",chk:()=>state.chat.filter(c=>c.role==="user").length>=5},
  {id:"variety-5",ik:"poly",idk:"polyd",chk:()=>new Set(state.workouts.map(w=>w.exerciseId)).size>=5},
  {id:"full-week",ik:"fw2",idk:"fw2d",chk:()=>weeklyWorkoutStats().sessions>=state.profile.sessions},
  {id:"50-workouts",ik:"fwt",idk:"fwtd",chk:()=>state.workouts.length>=50},
  {id:"progressive-overload",ik:"olp",idk:"olpd",chk:()=>(state.overloadCount||0)>=1},
  {id:"streak-7",ik:"st7",idk:"st7d",chk:()=>Math.max(longestStreak(),state.bestStreak||0)>=7},
  {id:"streak-30",ik:"st30",idk:"st30d",chk:()=>Math.max(longestStreak(),state.bestStreak||0)>=30},
  {id:"streak-100",ik:"st100",idk:"st100d",chk:()=>Math.max(longestStreak(),state.bestStreak||0)>=100}
];

const defaultState = {
  onboardingDone:false,
  settings:{theme:"dark",language:"fr",notifications:false,reminderTime:"18:00"},
  profile:{name:"",age:30,sex:"Homme",height:175,weight:75,level:"Intermédiaire",goal:"Recomposition corporelle",activity:"Modérée",sessions:3,equipment:["Haltères"],limitations:"",foodPreferences:""},
  plan:null,workouts:[],foods:[],measures:[],chat:[],completedExercises:[],achievements:[],favorites:[],overloadCount:0,water:{},deloadUntil:null,bestStreak:0
};

let state = loadState();
let installPrompt = null;
let restTimerData = null;
let auth = { authenticated:false, username:null };
let serverSyncTimer = null;

if (!state.plan) { state.plan = buildPlan(state.profile); saveLocal(); }

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(); bindEvents();
  bootstrap();
});

// ---- Authentification & synchronisation serveur ----------------------------
function getCookie(name){
  const m=document.cookie.match(new RegExp("(?:^|; )"+name+"=([^;]*)"));
  return m?decodeURIComponent(m[1]):"";
}
async function api(path,{method="GET",body=null}={}){
  const headers={};
  if(body!==null)headers["Content-Type"]="application/json";
  if(method!=="GET"&&method!=="HEAD")headers["X-CSRFToken"]=getCookie("csrftoken");
  const res=await fetch(path,{method,headers,credentials:"same-origin",body:body!==null?JSON.stringify(body):null});
  let data=null; try{data=await res.json();}catch(e){}
  if(!res.ok){const err=new Error((data&&data.error)||("HTTP "+res.status));err.status=res.status;err.data=data;throw err;}
  return data;
}

async function bootstrap(){
  let me=null;
  try{ me=await api("/api/auth/me"); }
  catch(e){
    // Hors ligne : si une session locale existe, on travaille en mode hors ligne.
    if(localStorage.getItem("kinetic.session")==="1"){ auth.authenticated=true; startApp(); updateSyncStatus(); return; }
    renderAuth(true); return;
  }
  if(me.authenticated){
    auth.authenticated=true; auth.username=me.username;
    localStorage.setItem("kinetic.session","1");
    await pullServerState();
    startApp();
  }else{
    localStorage.removeItem("kinetic.session");
    renderAuth(false, me.registrationOpen);
  }
  updateSyncStatus();
}

function startApp(){
  const shell=document.querySelector(".app-shell"); if(shell)shell.style.display="";
  const mn=document.querySelector(".mobile-nav"); if(mn)mn.style.display="";
  const a=document.getElementById("authOverlay"); if(a)a.remove();
  injectIcons();
  if(!state.onboardingDone) renderOnboarding();
  else renderAll();
  registerServiceWorker(); updateSyncStatus(); scheduleWorkoutReminder();
}

async function pullServerState(){
  try{
    const r=await api("/api/state");
    if(r&&r.data&&Object.keys(r.data).length){
      const m=JSON.parse(JSON.stringify(defaultState));
      state={...m,...r.data,settings:{...m.settings,...(r.data.settings||{})},profile:{...m.profile,...(r.data.profile||{})}};
      if(!state.plan)state.plan=buildPlan(state.profile);
      saveLocal();
    }else{
      // Compte neuf : on pousse l'état local courant vers le serveur.
      await pushServerState();
    }
  }catch(e){ /* on garde l'état local */ }
}

async function pushServerState(){
  if(!auth.authenticated)return;
  try{ await api("/api/state",{method:"PUT",body:{data:state}}); markSynced(true); }
  catch(e){ markSynced(false); }
}

function scheduleServerSync(){
  if(!auth.authenticated)return;
  if(serverSyncTimer)clearTimeout(serverSyncTimer);
  serverSyncTimer=setTimeout(pushServerState,800);
}
function markSynced(ok){ const s=document.getElementById("syncStatus"); if(!s)return; s.dataset.synced=ok?"1":"0"; }

async function doLogin(username,password){ const me=await api("/api/auth/login",{method:"POST",body:{username,password}}); afterAuth(me); }
async function doRegister(username,password){ const me=await api("/api/auth/register",{method:"POST",body:{username,password,ageConfirmed:true}}); afterAuth(me); }
async function afterAuth(me){
  auth.authenticated=true; auth.username=me.username;
  localStorage.setItem("kinetic.session","1");
  await pullServerState(); startApp();
}
async function doLogout(){
  try{ await api("/api/auth/logout",{method:"POST"}); }catch(e){}
  auth.authenticated=false; auth.username=null;
  localStorage.removeItem("kinetic.session");
  location.reload();
}

function renderAuth(offline, registrationOpen){
  const shell=document.querySelector(".app-shell"); if(shell)shell.style.display="none";
  const mn=document.querySelector(".mobile-nav"); if(mn)mn.style.display="none";
  let c=document.getElementById("authOverlay");
  if(!c){ c=document.createElement("div"); c.id="authOverlay"; c.className="onboarding-overlay"; document.body.appendChild(c); }
  let mode = "login";
  function draw(){
    const isReg=mode==="register";
    c.innerHTML=`<div class="onboarding-modal auth-modal">
      <div class="onboarding-header"><h2>${_("app")}</h2><p>${isReg?_("authCreate"):_("authWelcome")}</p></div>
      <div class="onboarding-body">
        ${offline?`<div class="empty" style="margin-bottom:.8rem">${_("authOffline")}</div>`:""}
        <form class="onboarding-form" id="authForm">
          <label class="wide">${_("authUser")}<input id="authUser" autocomplete="username" required></label>
          <label class="wide">${_("authPass")}<input id="authPass" type="password" autocomplete="${isReg?"new-password":"current-password"}" required></label>
          ${isReg?`<label class="wide" style="display:flex;align-items:flex-start;gap:.5rem;font-size:.82rem;color:var(--muted)"><input type="checkbox" id="authAge" style="width:auto;margin-top:.2rem"> <span>${_("ageConfirm")}</span></label>`:""}
          <div class="wide" id="authError" style="color:var(--red);font-size:.85rem;min-height:1em"></div>
          <div class="wide"><button class="btn primary block" type="submit">${isReg?_("authRegister"):_("authLogin")}</button></div>
        </form>
        ${registrationOpen
          ? `<p style="font-size:.85rem;color:var(--muted);margin-top:.8rem;text-align:center">${isReg?_("authHaveAccount"):_("authNoAccount")} <a href="#" id="authToggle" style="color:var(--red)">${isReg?_("authLogin"):_("authRegister")}</a></p>`
          : (mode==="login" ? "" : `<p style="font-size:.8rem;color:var(--muted);margin-top:.6rem">${_("authClosed")}</p>`)}
      </div>
    </div>`;
    document.getElementById("authForm").addEventListener("submit",async e=>{
      e.preventDefault();
      const u=document.getElementById("authUser").value.trim();
      const p=document.getElementById("authPass").value;
      const err=document.getElementById("authError"); err.textContent="";
      if(isReg && !document.getElementById("authAge")?.checked){ err.textContent=_("ageRequired"); return; }
      const btn=e.currentTarget.querySelector("button"); btn.disabled=true;
      try{ if(isReg)await doRegister(u,p); else await doLogin(u,p); }
      catch(ex){ err.textContent=ex.message||"Erreur"; btn.disabled=false; }
    });
    const toggle=document.getElementById("authToggle");
    if(toggle)toggle.addEventListener("click",e=>{e.preventDefault();mode=isReg?"login":"register";draw();});
  }
  draw();
}

function _(k) {
  const l = (state.settings&&state.settings.language)||"fr";
  return (_t[l]&&_t[l][k])||(_t.fr[k])||k;
}

function esc(v) { return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c])); }

function bindEvents() {
  document.addEventListener("click",e=>{
    const nav=e.target.closest("[data-view-target]");
    if(nav){setView(nav.dataset.viewTarget);return;}
    const chip=e.target.closest("[data-equipment-chip]");
    if(chip){chip.setAttribute("aria-pressed",chip.getAttribute("aria-pressed")!=="true");return;}
    const complete=e.target.closest("[data-complete-exercise]");
    if(complete){completeExercise(complete.dataset.completeExercise);return;}
    const rf=e.target.closest("[data-remove-food]");
    if(rf){state.foods=state.foods.filter(f=>f.id!==rf.dataset.removeFood);persistAndRender(_("frm"));return;}
    const qp=e.target.closest("[data-quick-prompt]");
    if(qp){askCoach(qp.dataset.quickPrompt);return;}
    const lo=e.target.closest("[data-logout]");
    if(lo){doLogout();return;}
    const tf=e.target.closest("[data-toggle-fav]");
    if(tf){const id=tf.dataset.toggleFav;const idx=state.favorites.indexOf(id);if(idx>=0)state.favorites.splice(idx,1);else state.favorites.push(id);saveState();renderAll();showToast(state.favorites.includes(id)?"★ Favori":"☆ Retiré");return;}
    const sr=e.target.closest("[data-start-rest]");
    if(sr){startRestTimer(parseInt(sr.dataset.startRest,10));return;}
    const cr=e.target.closest("[data-cancel-rest]");
    if(cr){cancelRestTimer();return;}
    const tpr=e.target.closest("[data-toggle-pause-rest]");
    if(tpr){togglePauseRestTimer();return;}
    const cd=e.target.closest("[data-cal-day]");
    if(cd){selectedPlanDay=+cd.dataset.calDay;renderAll();return;}
    const bs=e.target.closest("[data-barcode-scan]");
    if(bs){startBarcodeScan();return;}
    const afd=e.target.closest("[data-add-food-db]");
    if(afd){const fi=foodDatabase.find(f=>f.name===afd.dataset.addFoodDb||f.nameEn===afd.dataset.addFoodDb);if(fi)openFoodModal({name:fi.name,per100:{cal:fi.cal,pro:fi.pro,car:fi.car,fat:fi.fat}});return;}
    const ssn=e.target.closest("[data-start-session]");
    if(ssn){startSession();return;}
    const wa=e.target.closest("[data-water]");
    if(wa){addWater(parseInt(wa.dataset.water,10));return;}
    const dph=e.target.closest("[data-del-photo]");
    if(dph){deleteProgressPhoto(dph.dataset.delPhoto);return;}
    const adl=e.target.closest("[data-apply-deload]");
    if(adl){applyDeload();return;}
    const feel=e.target.closest("[data-feel]");
    if(feel){state.checkins=state.checkins||[];state.checkins.push({date:todayISO(),feel:feel.dataset.feel,timestamp:Date.now()});saveState();renderAll();showToast("Check-in");return;}
    const srm=e.target.closest("[data-set-reminder]");
    if(srm){state.settings.reminderTime=document.getElementById("reminderTimeInput")?.value||"18:00";enableNotifications();return;}
    const tn=e.target.closest("[data-test-notif]");
    if(tn){sendTestNotification();return;}
  });

  document.getElementById("themeToggle").addEventListener("click",()=>{state.settings.theme=state.settings.theme==="light"?"dark":"light";applyTheme();saveState();showToast(state.settings.theme==="light"?_("tl"):_("td"));});
  document.getElementById("installBtn").addEventListener("click",showInstallHelp);
  window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;showToast(_("ir"));});
  window.addEventListener("online",()=>{updateSyncStatus();if(auth.authenticated)pushServerState();});window.addEventListener("offline",updateSyncStatus);
  document.addEventListener("change",e=>{
    const ls=e.target.closest("[data-lang-select]");if(ls){state.settings.language=ls.value;saveState();renderAll();showToast(ls.value==="fr"?"Français":"English");}
    const nt=e.target.closest("[data-notif-toggle]");if(nt){if(nt.checked)enableNotifications();else disableNotifications();}
  });
}

function setView(id) {
  const t=document.getElementById(id);if(!t)return;
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  document.querySelectorAll("[data-view-target]").forEach(b=>b.classList.toggle("active",b.dataset.viewTarget===id));
  document.getElementById("screenHeading").textContent=t.dataset.title||"Kinetic";
  document.getElementById("screenSubtitle").textContent=t.dataset.subtitle||"";
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderAll() { if(state.onboardingDone){renderDashboard();renderProfile();renderTraining();renderNutrition();renderProgress();renderCoach();renderWeekProgress();injectIcons();} }

function renderOnboarding() {
  let step=0;const total=4;
  const shell=document.querySelector(".app-shell");shell.style.display="none";
  const c=document.createElement("div");c.id="onboardingContainer";c.className="onboarding-overlay";document.body.appendChild(c);
  function rs(){
    const p=state.profile;const eq=["Haltères","Barre","Banc","Poulie","Barre de traction","Barre de dips","Élastiques","Poids du corps"];
    let h=`<div class="onboarding-modal"><div class="onboarding-header"><h2>${_("onb")}</h2><p>${_("onbs")}</p><div class="onboarding-steps">`;
    for(let i=0;i<total;i++)h+=`<div class="onboarding-dot ${i===step?"active":i<step?"done":""}"></div>`;
    h+=`</div></div><div class="onboarding-body">`;
    if(step===0){h+=`<h3>${_("s1")}</h3><div class="onboarding-form"><label>${_("un")}<input type="text" id="oname" value="${esc(p.name)}"></label><label>${_("age")}<input type="number" id="oage" value="${p.age}"></label><label>${_("sx")}<select id="osex"><option ${p.sex==="Homme"?"selected":""}>Homme</option><option ${p.sex==="Femme"?"selected":""}>Femme</option><option ${p.sex==="Autre"?"selected":""}>Autre</option></select></label><label>${_("hgt")}<input type="number" id="oheight" value="${p.height}"></label><label>${_("wgt")}<input type="number" id="oweight" value="${p.weight}"></label><label>${_("lvl")}<select id="olevel"><option ${p.level==="Débutant"?"selected":""}>Débutant</option><option ${p.level==="Intermédiaire"?"selected":""}>Intermédiaire</option><option ${p.level==="Avancé"?"selected":""}>Avancé</option></select></label></div>`;}
    else if(step===1){h+=`<h3>${_("s2")}</h3><div class="onboarding-form"><label>${_("gl")}<select id="ogoal"><option ${p.goal==="Prise de masse"?"selected":""}>Prise de masse</option><option ${p.goal==="Perte de poids"?"selected":""}>Perte de poids</option><option ${p.goal==="Sèche"?"selected":""}>Sèche</option><option ${p.goal==="Recomposition corporelle"?"selected":""} selected>Recomposition corporelle</option><option ${p.goal==="Force"?"selected":""}>Force</option><option ${p.goal==="Endurance"?"selected":""}>Endurance</option><option ${p.goal==="Remise en forme"?"selected":""}>Remise en forme</option></select></label><label>${_("act")}<select id="oactivity"><option ${p.activity==="Sédentaire"?"selected":""}>Sédentaire</option><option ${p.activity==="Modérée"?"selected":""} selected>Modérée</option><option ${p.activity==="Active"?"selected":""}>Active</option><option ${p.activity==="Très active"?"selected":""}>Très active</option></select></label><label>${_("spw")}<select id="osessions"><option ${p.sessions===2?"selected":""}>2</option><option ${p.sessions===3?"selected":""} selected>3</option><option ${p.sessions===4?"selected":""}>4</option><option ${p.sessions===5?"selected":""}>5</option><option ${p.sessions===6?"selected":""}>6</option></select></label><div class="wide"><label>${_("eq")}</label><div class="chip-row">${eq.map(i=>'<button type="button" class="chip" data-equipment-chip aria-pressed="'+p.equipment.includes(i)+'">'+i+'</button>').join("")}</div></div></div>`;}
    else if(step===2){h+=`<h3>${_("s3")}</h3><div class="onboarding-form"><label class="wide">${_("inj")}<textarea id="olimitations" rows="3">${esc(p.limitations)}</textarea></label><label class="wide">${_("fp")}<textarea id="ofoodPrefs" rows="3">${esc(p.foodPreferences)}</textarea></label></div>`;}
    else if(step===3){const t=calculateNutrition(p);h+=`<h3>${_("s4")}</h3><div class="onboarding-summary"><div><span>${_("un")}</span><strong>${esc(p.name)||"—"}</strong></div><div><span>${_("age")}</span><strong>${p.age}</strong></div><div><span>${_("sx")}</span><strong>${p.sex}</strong></div><div><span>${_("hgt")}</span><strong>${p.height} cm</strong></div><div><span>${_("wgt")}</span><strong>${p.weight} kg</strong></div><div><span>${_("lvl")}</span><strong>${p.level}</strong></div><div><span>${_("gl")}</span><strong>${p.goal}</strong></div><div><span>${_("spw")}</span><strong>${p.sessions}/sem</strong></div><div><span>${_("eq")}</span><strong>${p.equipment.join(", ")}</strong></div><div><span>${_("cal")}</span><strong>${t.calories} kcal</strong></div><div><span>${_("pro")}</span><strong>${t.protein}g</strong></div><div><span>${_("car")}</span><strong>${t.carbs}g</strong></div><div><span>${_("lip")}</span><strong>${t.fat}g</strong></div></div>`;}
    h+=`</div><div class="onboarding-footer"><div class="onboarding-buttons">`;
    if(step>0)h+=`<button class="btn ghost" id="onboardingPrev">${_("prv")}</button>`;else h+=`<div></div>`;
    if(step<total-1)h+=`<button class="btn primary" id="onboardingNext">${_("nxt")}</button>`;else h+=`<button class="btn primary" id="onboardingFinish">${_("fin")}</button>`;
    h+=`</div></div></div>`;c.innerHTML=h;
    document.getElementById("onboardingNext")?.addEventListener("click",()=>ss(step,()=>{step++;rs();}));
    document.getElementById("onboardingPrev")?.addEventListener("click",()=>{step--;rs();});
    document.getElementById("onboardingFinish")?.addEventListener("click",()=>ss(step,finish));
    // Les chips de matériel sont gérés par le clic global (bindEvents) ; pas de
    // second gestionnaire ici, sinon le double basculement annule la sélection.
  }
  function ss(cur,cb){
    if(cur===0){state.profile.name=(document.getElementById("oname")?.value||"").trim();state.profile.age=parseInt(document.getElementById("oage")?.value)||30;state.profile.sex=document.getElementById("osex")?.value||"Homme";state.profile.height=parseInt(document.getElementById("oheight")?.value)||175;state.profile.weight=parseInt(document.getElementById("oweight")?.value)||75;state.profile.level=document.getElementById("olevel")?.value||"Intermédiaire";}
    else if(cur===1){state.profile.goal=document.getElementById("ogoal")?.value||"Recomposition corporelle";state.profile.activity=document.getElementById("oactivity")?.value||"Modérée";state.profile.sessions=parseInt(document.getElementById("osessions")?.value)||3;state.profile.equipment=[...c.querySelectorAll("[data-equipment-chip]")].filter(c=>c.getAttribute("aria-pressed")==="true").map(c=>c.textContent.trim());if(!state.profile.equipment.length)state.profile.equipment=["Poids du corps"];}
    else if(cur===2){state.profile.limitations=document.getElementById("olimitations")?.value||"";state.profile.foodPreferences=document.getElementById("ofoodPrefs")?.value||"";}
    cb();
  }
  function finish(){state.onboardingDone=true;state.plan=buildPlan(state.profile);saveState();c.remove();document.querySelector(".app-shell").style.display="";renderAll();showToast(_("pc"));}
  rs();
}

// ===== Régularité : séries (streak) + calendrier =====
function isoStep(d){return d.toISOString().slice(0,10);}
function activeDateSet(){
  const s=new Set();
  (state.workouts||[]).forEach(w=>s.add(w.date));
  (state.foods||[]).forEach(f=>s.add(f.date));
  (state.checkins||[]).forEach(c=>s.add(c.date));
  Object.keys(state.water||{}).forEach(d=>{if(state.water[d]>0)s.add(d);});
  return s;
}
function hasWorkoutOn(date){return (state.workouts||[]).some(w=>w.date===date);}
function currentStreak(){
  const set=activeDateSet();let streak=0;const d=new Date(todayISO());
  if(!set.has(isoStep(d))){d.setUTCDate(d.getUTCDate()-1);if(!set.has(isoStep(d)))return 0;}
  while(set.has(isoStep(d))){streak++;d.setUTCDate(d.getUTCDate()-1);}
  return streak;
}
function longestStreak(){
  const dates=[...activeDateSet()].sort();if(!dates.length)return 0;
  let best=1,run=1;
  for(let i=1;i<dates.length;i++){const p=new Date(dates[i-1]);p.setUTCDate(p.getUTCDate()+1);run=isoStep(p)===dates[i]?run+1:1;if(run>best)best=run;}
  return best;
}
// Jour sélectionné dans le calendrier (0=Lun … 6=Dim) pour afficher sa séance.
let selectedPlanDay=null;
function todayWeekday(){return (new Date(todayISO()).getUTCDay()+6)%7;}
function streakCalendar(){
  const set=activeDateSet(),today=todayISO(),t=new Date(today);
  const dow=(t.getUTCDay()+6)%7,weekStart=new Date(t);weekStart.setUTCDate(t.getUTCDate()-dow);
  const WEEKS=6,start=new Date(weekStart);start.setUTCDate(weekStart.getUTCDate()-(WEEKS-1)*7);
  let cells="";
  for(let w=0;w<WEEKS;w++)for(let dd=0;dd<7;dd++){
    const c=new Date(start);c.setUTCDate(start.getUTCDate()+w*7+dd);const ds=isoStep(c),future=ds>today;
    const lvl=(!future&&set.has(ds))?(hasWorkoutOn(ds)?2:1):0;
    cells+=`<div class="cal-cell lvl-${lvl}${ds===today?" today":""}${future?" future":""}${dd===selectedPlanDay?" col-sel":""}" data-cal-day="${dd}" title="${esc(formatDate(ds))}"></div>`;
  }
  const days=["L","M","M","J","V","S","D"];
  return `<div class="cal-head">${days.map((d,i)=>`<span data-cal-day="${i}"${i===selectedPlanDay?' class="selected"':''}>${d}</span>`).join("")}</div><div class="cal-grid">${cells}</div>`;
}
// Programme prévu pour le jour sélectionné dans le calendrier.
function daySessionPanel(){
  const lang=state.settings.language==="en"?"en":"fr";
  const names={fr:["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],en:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}[lang];
  const idx=selectedPlanDay==null?todayWeekday():selectedPlanDay;
  const d=state.plan&&state.plan.week?state.plan.week[idx]:null;
  const todayTag=idx===todayWeekday()?(lang==="en"?" · today":" · aujourd'hui"):"";
  if(!d||!d.active||!d.exercises.length){
    return `<div class="day-session"><div class="panel-head"><div><h3>${names[idx]}${todayTag}</h3><p>${_("rst")}</p></div></div><div class="empty">${_("restDayMsg")}</div></div>`;
  }
  return `<div class="day-session"><div class="panel-head"><div><h3>${names[idx]}${todayTag}</h3><p>${esc(d.focus)} · ${d.duration} min</p></div><span class="tag warn">${d.exercises.length} ex.</span></div><button class="btn primary block" data-start-session style="margin:.2rem 0 .7rem"><span data-icon="check"></span>${_("startSession")}</button><div class="exercise-list">${d.exercises.map(exerciseCard).join("")}</div></div>`;
}
function streakCard(){
  const cur=currentStreak(),best=Math.max(longestStreak(),state.bestStreak||0);
  state.bestStreak=best;
  if(selectedPlanDay==null)selectedPlanDay=todayWeekday();
  return `<div class="panel streak-panel"><div class="panel-head"><div><h2>${_("regTitle")}</h2><p>${_("regSub")}</p></div><span class="tag ${cur>0?"good":""}">🔥 ${cur} ${_("daysShort")}</span></div>
    <div class="streak-stats"><div class="mini-metric"><span>${_("curStreak")}</span><strong>🔥 ${cur} ${cur>1?_("daysPl"):_("dayS")}</strong></div><div class="mini-metric"><span>${_("bestStreak")}</span><strong>🏆 ${best} ${best>1?_("daysPl"):_("dayS")}</strong></div></div>
    ${streakCalendar()}
    <div class="cal-legend"><span>${_("calLess")}</span><i class="cal-cell lvl-0"></i><i class="cal-cell lvl-1"></i><i class="cal-cell lvl-2"></i><span>${_("calMore")}</span></div>
    ${daySessionPanel()}
  </div>`;
}

function renderDashboard() {
  const targets=calculateNutrition(state.profile),totals=todaysFoodTotals(),week=weeklyWorkoutStats(),next=nextWorkout();
  const adherence=Math.min(100,Math.round((week.sessions/Math.max(1,state.profile.sessions))*100));
  document.getElementById("dashboardView").innerHTML=`
    <div class="grid">
      <div class="hero-band"><div><h2>${state.profile.name?_("wel")+" "+esc(state.profile.name)+" — ":""}Kinetic adapte ton plan</h2><p>${state.profile.sessions} séances/sem, ${_(state.profile.goal).toLowerCase()}, ${targets.calories} kcal.</p></div></div>
      <div class="grid cols-4">${metric(_("seL"),week.sessions+"/"+state.profile.sessions,adherence+"% "+_("adh"))}${metric(_("vol"),formatNumber(Math.round(week.volume/100)/10)+" t",_("ltr"))}${metric(_("cal"),formatNumber(totals.calories),Math.max(0,targets.calories-totals.calories)+" "+_("rem"))}${metric(_("rec"),recoveryScore()+"%",recoveryLabel())}</div>
      ${streakCard()}
      <div class="grid cols-2">
        <div class="panel"><div class="panel-head"><div><h2>${_("rs")}</h2><p>${esc(next.label)} · ${esc(next.focus)}</p></div><span class="tag warn">${next.duration} min</span></div><div class="exercise-list">${next.exercises.slice(0,3).map(exerciseCard).join("")}</div></div>
        <div class="panel"><div class="panel-head"><div><h2>${_("dt")}</h2><p>${_("la")}</p></div><span class="tag good">${_("stb")}</span></div><ul class="summary-list"><li><span>${_("ld")}</span><strong>${trainingAdvice().load}</strong></li><li><span>${_("nul")}</span><strong>${trainingAdvice().nutrition}</strong></li><li><span>${_("rl")}</span><strong>${trainingAdvice().recovery}</strong></li><li><span>${_("att")}</span><strong>${esc(limitationShort())}</strong></li></ul><button class="btn primary block" data-view-target="coach" style="margin-top:.9rem"><span data-icon="message"></span>${_("ac")}</button></div>
      </div>
    </div>`;
}

function renderProfile() {
  const p=state.profile,targets=calculateNutrition(p),allEq=["Haltères","Barre","Banc","Poulie","Barre de traction","Barre de dips","Élastiques","Poids du corps"];
  document.getElementById("profileView").innerHTML=`
    <div class="grid cols-2">
      <div class="panel"><div class="panel-head"><div><h2>${_("up")}</h2><p>${_("sv")}</p></div><span class="tag warn">${_("fr")}</span></div>
        <form class="form-grid" id="profileForm">${inp("name",_("un"),"text",p.name)}${inp("age",_("age"),"number",p.age)}${sel("sex",_("sx"),["Homme","Femme","Autre"],p.sex)}${inp("height",_("hgt"),"number",p.height)}${inp("weight",_("wgt"),"number",p.weight)}${sel("level",_("lvl"),["Débutant","Intermédiaire","Avancé"],p.level)}${sel("goal",_("gl"),["Prise de masse","Perte de poids","Sèche","Recomposition corporelle","Force","Endurance","Remise en forme"],p.goal)}${sel("activity",_("act"),["Sédentaire","Modérée","Active","Très active"],p.activity)}${sel("sessions",_("spw"),["2","3","4","5","6"],String(p.sessions))}
          <div class="wide"><label>${_("eq")}</label><div class="chip-row">${allEq.map(i=>'<button type="button" class="chip" data-equipment-chip aria-pressed="'+p.equipment.includes(i)+'">'+i+'</button>').join("")}</div></div>
          <label class="wide">${_("inj")}<textarea name="limitations" rows="3">${esc(p.limitations)}</textarea></label>
          <label class="wide">${_("fp")}<textarea name="foodPreferences" rows="3">${esc(p.foodPreferences)}</textarea></label>
          <div class="wide"><button class="btn primary" type="submit"><span data-icon="refresh"></span>${_("srg")}</button></div>
        </form>
      </div>
      <div class="grid">
        <div class="panel"><div class="panel-head"><div><h2>${_("syn")}</h2><p>${_("cc")}</p></div><span class="tag good">${_("actv")}</span></div><ul class="summary-list"><li><span>${_("st")}</span><strong>${esc(state.plan.split)}</strong></li><li><span>${_("cal")}</span><strong>${formatNumber(targets.calories)} kcal</strong></li><li><span>${_("pro")}</span><strong>${targets.protein}g</strong></li><li><span>${_("car")}</span><strong>${targets.carbs}g</strong></li><li><span>${_("lip")}</span><strong>${targets.fat}g</strong></li></ul></div>
        <div class="panel"><div class="panel-head"><div><h2>${_("set")}</h2></div></div>
          <div class="form-grid" style="grid-template-columns:1fr 1fr"><label>${_("lang")}<select data-lang-select><option value="fr" ${state.settings.language==="fr"?"selected":""}>Français</option><option value="en" ${state.settings.language==="en"?"selected":""}>English</option></select></label><label>${_("notif")}<input type="checkbox" data-notif-toggle ${state.settings.notifications?"checked":""} style="width:auto;margin-top:.5rem"></label></div>
          ${state.settings.notifications?`<label style="margin-top:.5rem">${_("rmt")}<div style="display:flex;gap:.5rem;margin-top:.3rem"><input type="time" id="reminderTimeInput" value="${state.settings.reminderTime||"18:00"}" style="width:auto;flex:1"><button class="btn primary" data-set-reminder>${_("sr3")}</button></div></label><button class="btn ghost block" data-test-notif style="margin-top:.5rem"><span data-icon="bell"></span>${_("notifTest")}</button>`:""}
          <div class="wide" style="margin-top:.7rem;display:flex;align-items:center;justify-content:space-between;gap:.5rem;flex-wrap:wrap">
            <div><strong>${_("acc")}</strong><div style="font-size:.85rem;color:var(--muted)">${auth.username?esc(auth.username):_("lo")}</div></div>
            ${auth.authenticated?`<button class="btn ghost" data-logout>${_("logout")}</button>`:""}
          </div>
          <small style="display:block;margin-top:.4rem;color:var(--muted)">${_("aiServer")}</small>
        </div>
        <div class="panel"><div class="panel-head"><div><h2>${_("priv")}</h2><p>${_("lv")}</p></div></div><ul class="summary-list"><li><span>${_("acc")}</span><strong>${_("rdy")}</strong></li><li><span>${_("syncc")}</span><strong>${_("toc")}</strong></li><li><span>${_("rai")}</span><strong>${_("ss")}</strong></li><li><span>${_("off")}</span><strong>${_("ena")}</strong></li></ul></div>
      </div>
    </div>`;
  document.getElementById("profileForm").addEventListener("submit",saveProfile);
}

function renderTraining() {
  const recent=state.workouts.slice(-5).reverse();
  const sel=selectedPlanDay==null?todayWeekday():selectedPlanDay;
  const sd=state.plan.week[sel],active=!!(sd&&sd.active&&sd.exercises.length);
  const todayTag=sel===todayWeekday()?" · "+(state.settings.language==="en"?"today":"aujourd'hui"):"";
  document.getElementById("trainingView").innerHTML=`
    <div class="grid">
      <div class="panel" id="restTimerPanel" style="display:none"></div>
      <div class="panel"><div class="panel-head"><div><h2>${_("cald")}</h2><p>${esc(state.plan.split)}</p></div><button class="btn ghost" id="regeneratePlanBtn"><span data-icon="refresh"></span>${_("rg")}</button></div>
        <div class="day-strip">${state.plan.week.map((d,i)=>`<div class="day ${d.active?"active":""}${i===sel?" selected":""}" data-cal-day="${i}"><strong>${esc(d.label)}</strong><span>${esc(d.focus)}</span></div>`).join("")}</div>
      </div>
      <div class="grid cols-2">
        <div class="panel"><div class="panel-head"><div><h2>${esc(active?sd.focus:_("rst"))}${todayTag}</h2><p>${esc(sd.label)}${active?" · "+sd.duration+" min":""}</p></div><span class="tag">${esc(state.profile.level)}</span></div>
          ${active?`<button class="btn primary block" data-start-session style="margin-bottom:.7rem"><span data-icon="check"></span>${_("startSession")}</button>`:""}
          ${active?`<div class="exercise-list">${sd.exercises.map(exerciseCard).join("")}</div>`:`<div class="empty">${_("restDayMsg")}</div>`}
          ${active?`<div style="margin-top:1rem;display:flex;gap:.5rem;flex-wrap:wrap"><button class="btn" data-start-rest="${sd.exercises[0].rest}"><span data-icon="timer"></span> ${_("rt")} (${sd.exercises[0].rest}s)</button></div>`:""}
        </div>
        <div class="grid">
          <div class="panel"><div class="panel-head"><div><h2>${_("lv2")}</h2><p>${_("lh")}</p></div></div>
            <div class="set-list">${recent.length?recent.map(i=>`<div class="set-row"><div><b>${esc(i.name)}</b><span>${formatDate(i.date)} · ${i.sets}x${i.reps} · RPE ${i.rpe}</span></div><strong>${formatNumber(i.volume)} kg</strong></div>`).join(""):`<div class="empty">${_("ns")}</div>`}</div>
          </div>
          ${active?`<div class="panel"><div class="panel-head"><div><h2>${_("alt")}</h2><p>${_("atp")}</p></div></div><ul class="summary-list">${sd.exercises.slice(0,4).map(e=>`<li><span>${esc(e.name)}</span><strong>${esc(e.alternative)}</strong></li>`).join("")}</ul></div>`:""}
        </div>
      </div>
    </div>`;
  document.getElementById("regeneratePlanBtn").addEventListener("click",()=>{state.plan=buildPlan(state.profile);persistAndRender(_("prg"));});
}

function renderNutrition() {
  const targets=calculateNutrition(state.profile),totals=todaysFoodTotals();
  const pct=clamp(Math.round((totals.calories/Math.max(1,targets.calories))*100),0,100);
  const td=state.foods.filter(f=>f.date===todayISO());
  document.getElementById("nutritionView").innerHTML=`
    <div class="grid cols-2">
      <div class="panel"><div class="panel-head"><div><h2>${_("to")}</h2><p>${esc(state.profile.goal)}</p></div><button class="btn ghost" id="scanBtn"><span data-icon="scan"></span>${_("scn")}</button></div>
        <div class="calorie-ring" style="--progress:${pct}%"><div><strong>${formatNumber(targets.calories)}</strong><span>${formatNumber(totals.calories)} ${_("csm")}</span></div></div>
        <div class="macro-grid">${macro(_("pro"),totals.protein,targets.protein,"g")}${macro(_("car"),totals.carbs,targets.carbs,"g")}${macro(_("lip"),totals.fat,targets.fat,"g")}</div>
        <div style="margin-top:.8rem"><div class="panel-head"><h3>${_("sf")}</h3></div><input id="foodSearchInput" placeholder="${_("sfp")}" style="margin-bottom:.5rem"><div id="foodSearchResults" class="food-search-results"></div></div>
      </div>
      <div class="panel"><div class="panel-head"><div><h2>${_("fj")}</h2><p>${_("td2")}</p></div><span class="tag good">${formatNumber(totals.calories)} kcal</span></div>
        <div class="meal-list">${td.map(f=>`<div class="meal-row"><div><b>${esc(f.name)}</b><span>${f.grams?f.grams+" "+(f.unit||"g")+" · ":""}${esc(f.meal)} · ${f.calories} kcal · ${f.protein}g P</span></div><button class="icon-btn" data-remove-food="${f.id}" title="Supprimer"><span data-icon="trash"></span></button></div>`).join("")||`<div class="empty">${_("nf")}</div>`}</div>
        <form class="composer" id="foodForm"><input name="foodName" placeholder="${_("afp")}"><button class="btn primary" type="submit"><span data-icon="plus"></span>${_("af")}</button></form>
        <button class="btn ghost block" data-barcode-scan style="margin-top:.5rem"><span data-icon="camera"></span>${_("bs")}</button>
      </div>
      <div class="panel"><div class="panel-head"><div><h2>${_("water")}</h2><p>${_("waterGoalLbl")} : ${waterGoal()} ml</p></div><span class="tag good">${waterToday()} ml</span></div>
        <div class="progress-line" style="margin:.5rem 0"><span style="--value:${clamp(Math.round(waterToday()/Math.max(1,waterGoal())*100),0,100)}%"></span></div>
        <div style="display:flex;gap:.5rem;flex-wrap:wrap"><button class="btn" data-water="250">+250 ml</button><button class="btn" data-water="500">+500 ml</button><button class="btn ghost" data-water="-250">−250 ml</button></div>
      </div>
    </div>`;
  document.getElementById("foodForm").addEventListener("submit",addFood);
  document.getElementById("scanBtn").addEventListener("click",startBarcodeScan);
  document.getElementById("foodSearchInput").addEventListener("input",function(){
    const q=this.value.toLowerCase().trim(),r=document.getElementById("foodSearchResults");
    if(!q){r.innerHTML="";return;}
    const m=foodDatabase.filter(f=>f.name.toLowerCase().includes(q)||(f.nameEn&&f.nameEn.toLowerCase().includes(q))).slice(0,8);
    r.innerHTML=m.length?m.map(f=>`<div class="food-search-item" data-add-food-db="${esc(f.name)}"><span><b>${esc(f.name)}</b> <small>${f.cal} kcal · P${f.pro} G${f.car} L${f.fat}</small></span><button class="btn ghost small" type="button">${_("ad")}</button></div>`).join(""):`<div class="empty">${_("nr")}</div>`;
  });
}

function renderProgress() {
  const week=weeklyWorkoutStats();
  const last=state.measures[state.measures.length-1]||{weight:state.profile.weight,waist:85,bench:0};
  const prev=state.measures[state.measures.length-2]||last;
  const delta=Math.round((last.weight-prev.weight)*10)/10;
  checkAchievements();
  const hist=exercisesWithHistory();if(!chartExId||!hist.some(h=>h.id===chartExId))chartExId=hist[0]?hist[0].id:null;
  const photos=loadPhotos();
  document.getElementById("progressView").innerHTML=`
    <div class="grid cols-2">
      <div class="panel"><div class="panel-head"><div><h2>${_("crv")}</h2><p>${_("ws")}</p></div><div style="display:flex;gap:.4rem"><button class="btn ghost" id="exportBtn"><span data-icon="export"></span>${_("exp")}</button><button class="btn ghost" id="importBtn"><span data-icon="download"></span>${_("imp")}</button><input type="file" id="importInput" accept="application/json" hidden></div></div>
        <div class="chart"><svg viewBox="0 0 600 220" preserveAspectRatio="none"><path class="red-line" d="${measurePath("weight")}"/><path class="green-line" d="${measurePath("bench")}"/></svg></div>
        <div style="margin-top:.5rem;display:flex;gap:.5rem;font-size:.78rem;color:var(--muted)"><span style="display:flex;align-items:center;gap:.3rem"><span style="width:.6rem;height:.6rem;border-radius:50%;background:var(--red);display:inline-block"></span> ${_("wl")}</span><span style="display:flex;align-items:center;gap:.3rem"><span style="width:.6rem;height:.6rem;border-radius:50%;background:var(--green);display:inline-block"></span> ${_("strg")}</span></div>
      </div>
      <div class="grid">
        <div class="panel"><div class="panel-head"><div><h2>${_("msr")}</h2><p>${_("lm")}</p></div></div><div class="split-stat"><div class="mini-metric"><span>${_("wl")}</span><strong>${last.weight} kg</strong></div><div class="mini-metric"><span>${_("wst")}</span><strong>${last.waist} cm</strong></div><div class="mini-metric"><span>${_("var")}</span><strong>${delta>0?"+":""}${delta} kg</strong></div></div></div>
        <div class="panel"><div class="panel-head"><div><h2>${_("bdg")}</h2><p>${_("mot")}</p></div></div><div class="badge-grid" style="grid-template-columns:repeat(3,1fr)"><div class="badge"><b>${_("reg")}</b><span>${week.sessions} séances</span></div><div class="badge"><b>${_("strg")}</b><span>Bench ${last.bench} kg</span></div><div class="badge"><b>${_("nul")}</b><span>${todaysFoodTotals().protein}g protéines</span></div></div></div>
        <div class="panel"><div class="panel-head"><div><h2>🏆 ${_("ach")}</h2><p>${state.achievements.length}/${achievementsDef.length}</p></div></div><div class="badge-grid" style="grid-template-columns:repeat(3,1fr)">${achievementsDef.map(a=>{const u=state.achievements.includes(a.id);return `<div class="badge" style="${u?"":"opacity:.4"}"><b>${_(a.ik)}</b><span>${u?"✅":"🔒"} ${_(a.idk)}</span></div>`;}).join("")}</div></div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-top:1rem">
      <div class="panel"><div class="panel-head"><div><h2>${_("exProgress")}</h2><p>${_("ws")}</p></div></div>${hist.length?`<select id="chartExSelect" style="margin-bottom:.5rem">${hist.map(h=>`<option value="${h.id}" ${h.id===chartExId?"selected":""}>${esc(h.name)}</option>`).join("")}</select><div class="chart"><svg viewBox="0 0 600 220" preserveAspectRatio="none"><path class="green-line" d="${exercisePath(chartExId)}"/></svg></div>`:`<div class="empty">${_("noData")}</div>`}</div>
      <div class="panel"><div class="panel-head"><div><h2>${_("progPhotos")}</h2><p>${_("photosLocal")}</p></div><button class="btn ghost" id="addPhotoBtn"><span data-icon="camera"></span>${_("addPhoto")}</button><input type="file" id="photoInput" accept="image/*" hidden></div><div class="photo-grid">${photos.length?photos.slice().reverse().map(p=>`<div class="photo-item"><img src="${p.data}" alt=""><span>${formatDate(p.date)}</span><button class="icon-btn photo-del" data-del-photo="${p.id}" title="Supprimer"><span data-icon="trash"></span></button></div>`).join(""):`<div class="empty">${_("noData")}</div>`}</div></div>
    </div>`;
  document.getElementById("exportBtn").addEventListener("click",exportData);
  const importInput=document.getElementById("importInput");
  document.getElementById("importBtn").addEventListener("click",()=>importInput.click());
  importInput.addEventListener("change",e=>{if(e.target.files&&e.target.files[0])importData(e.target.files[0]);});
  const chartSel=document.getElementById("chartExSelect");if(chartSel)chartSel.addEventListener("change",e=>{chartExId=e.target.value;renderProgress();injectIcons();});
  const photoBtn=document.getElementById("addPhotoBtn"),photoInput=document.getElementById("photoInput");
  if(photoBtn&&photoInput){photoBtn.addEventListener("click",()=>photoInput.click());photoInput.addEventListener("change",e=>{if(e.target.files&&e.target.files[0])addProgressPhoto(e.target.files[0]);});}
}

function renderCoach() {
  document.getElementById("coachView").innerHTML=`
    <div class="grid cols-2">
      <div class="panel"><div class="panel-head"><div><h2>${_("cv")}</h2><p>${_("disc")}</p></div><span class="tag good">${_("lo")}</span></div>
        <div class="chat" id="chatLog">${state.chat.map(m=>`<div class="bubble ${m.role==="user"?"user":""}">${esc(m.text)}</div>`).join("")}</div>
        <form class="composer" id="chatForm"><input name="question" placeholder="${_("cph")}"><button class="btn primary" type="submit"><span data-icon="send"></span>${_("snd")}</button></form>
      </div>
      <div class="grid">
        <div class="panel"><div class="panel-head"><div><h2>${_("qa")}</h2><p>${_("adj")}</p></div></div>
          <div class="chip-row">${[_("as1"),_("as2"),_("cm"),_("pr")].map(p=>`<button class="chip" data-quick-prompt="${esc(p)}">${esc(p)}</button>`).join("")}</div>
        </div>
        <div class="panel"><div class="panel-head"><div><h2>${_("anl")}</h2><p>${_("ct")}</p></div></div>
          <ul class="summary-list"><li><span>${_("adh")}</span><strong>${Math.min(100,Math.round((weeklyWorkoutStats().sessions/state.profile.sessions)*100))}%</strong></li><li><span>${_("stg")}</span><strong>${detectStagnation()}</strong></li><li><span>${_("otr")}</span><strong>${recoveryScore()<55?_("tw"):_("lw")}</strong></li><li><span>${_("nxa")}</span><strong>${trainingAdvice().load}</strong></li></ul>
        </div>
        ${(()=>{const r=recommendDeload();if(isDeload())return `<div class="panel"><div class="panel-head"><div><h2>${_("deloadTitle")}</h2></div><span class="tag warn">${_("deloadActive")}</span></div><p style="font-size:.85rem;color:var(--muted)">${_("deloadActiveMsg")}</p></div>`;if(!r.recommend)return "";return `<div class="panel" style="border-color:var(--red)"><div class="panel-head"><div><h2>${_("deloadTitle")}</h2><p>${r.plateau.length?_("plateauOn")+" "+esc(r.plateau.join(", ")):_("deloadRecMsg")}</p></div></div><p style="font-size:.85rem;color:var(--muted);margin-bottom:.6rem">${_("deloadRecMsg")}</p><button class="btn primary" data-apply-deload>${_("deloadBtn")}</button></div>`;})()}
        <div class="panel"><div class="panel-head"><div><h2>${_("po")}</h2></div></div>${renderOverload()}</div>
      </div>
    </div>`;
  const log=document.getElementById("chatLog");log.scrollTop=log.scrollHeight;
  document.getElementById("chatForm").addEventListener("submit",e=>{e.preventDefault();const q=new FormData(e.currentTarget).get("question").trim();if(!q)return;e.currentTarget.reset();askCoach(q);});
}

function renderOverload() {
  const recent=state.workouts.slice(-10);const map={};
  recent.forEach(w=>{if(!map[w.exerciseId])map[w.exerciseId]=[];map[w.exerciseId].push(w);});
  let h="";
  Object.entries(map).forEach(([id,entries])=>{
    if(entries.length<2)return;
    const last2=entries.slice(-2),avg=last2.reduce((s,e)=>s+e.load,0)/last2.length;
    h+=`<div class="set-row"><div><b>${esc(last2[0].name)}</b><span>${_("pp2")}: ${avg.toFixed(1)} kg</span></div><strong>${_("nsl")}: ${(avg*1.05).toFixed(1)} kg</strong></div>`;
  });
  return h||`<div class="empty">${_("ns")}</div>`;
}

function saveProfile(e){
  e.preventDefault();const f=e.currentTarget,d=new FormData(f);
  const eq=[...f.querySelectorAll("[data-equipment-chip]")].filter(c=>c.getAttribute("aria-pressed")==="true").map(c=>c.textContent.trim());
  state.profile={name:d.get("name")||"",age:Number(d.get("age")),sex:d.get("sex"),height:Number(d.get("height")),weight:Number(d.get("weight")),level:d.get("level"),goal:d.get("goal"),activity:d.get("activity"),sessions:Number(d.get("sessions")),equipment:eq.length?eq:["Poids du corps"],limitations:d.get("limitations").trim(),foodPreferences:d.get("foodPreferences").trim()};
  state.plan=buildPlan(state.profile);persistAndRender(_("ps"));setView("dashboard");
}

function addFood(e){e.preventDefault();const n=new FormData(e.currentTarget).get("foodName").trim();if(!n){showToast(_("af2"));return;}const est=estimateFood(n);e.currentTarget.reset();openFoodModal({name:n,per100:{cal:est.calories,pro:est.protein,car:est.carbs,fat:est.fat}});}

function completeExercise(id){
  const ex=exerciseLibrary.find(e=>e.id===id);if(!ex)return;if(state.completedExercises.includes(todayISO()+"-"+ex.id))return;
  const reps=parseInt(ex.reps,10)||10,load=adaptedLoad(ex,state.profile),vol=Math.round(ex.sets*reps*Math.max(load,1));
  state.workouts.push({id:createId("workout"),date:todayISO(),exerciseId:ex.id,name:ex.name,sets:ex.sets,reps,load,volume:vol,rpe:ex.limitation&&hasLimitation(ex.limitation)?6:7});
  state.completedExercises.push(todayISO()+"-"+ex.id);checkAchievements();persistAndRender(ex.name+" "+_("wv"));
}

// ===== Progression d'après les vraies performances =====
function targetReps(ex){const m=String(ex.reps).match(/\d+/);return m?parseInt(m[0],10):8;}
function lastPerf(exId){const r=state.workouts.filter(w=>w.exerciseId===exId);return r.length?r[r.length-1]:null;}
function roundLoad(x){return x>0?Math.max(2.5,Math.round(x/2.5)*2.5):0;}
function isDeload(){return !!(state.deloadUntil&&state.deloadUntil>=todayISO());}
function lastSummary(rec){if(!rec)return _("noLastTime");if(rec.setsDetail&&rec.setsDetail.length)return (rec.load?rec.load+" kg":_("bw"))+" × "+rec.setsDetail.map(s=>s.reps).join(", ");return rec.sets+"×"+rec.reps+(rec.load?" @ "+rec.load+" kg":"");}
function progressionFor(ex){
  const last=lastPerf(ex.id);
  let weight=adaptedLoad(ex,state.profile),hint=_("noLastTime");
  if(last){
    weight=last.load||0;
    const tgt=targetReps(ex);
    const minReps=last.setsDetail&&last.setsDetail.length?Math.min(...last.setsDetail.map(s=>s.reps)):last.reps;
    if(last.load&&minReps>=tgt){weight=last.load+2.5;hint="↑ "+_("progUp");}else{hint="→ "+_("progHold");}
  }
  if(isDeload())weight=weight*0.9;
  return {weight:roundLoad(weight),hint:last?hint:_("noLastTime"),last};
}
function suggestedWeight(ex){return progressionFor(ex).weight;}

// ===== Séance guidée =====
let sessionState=null;
function startSession(){
  const day=currentWorkout();
  if(!day.exercises||!day.exercises.length){showToast(_("ns"));return;}
  sessionState={idx:0,logs:{},exercises:day.exercises};
  day.exercises.forEach(ex=>{
    sessionState.logs[ex.id]={name:ex.name,exId:ex.id,rest:ex.rest,bw:!ex.load,
      weight:suggestedWeight(ex),sets:Array.from({length:ex.sets||3},()=>({reps:targetReps(ex),done:false}))};
  });
  renderSession();
}
function renderSession(){
  if(!sessionState)return;
  const exs=sessionState.exercises,ex=exs[sessionState.idx],log=sessionState.logs[ex.id],prog=progressionFor(ex);
  let c=document.getElementById("sessionOverlay");
  if(!c){c=document.createElement("div");c.id="sessionOverlay";c.className="onboarding-overlay";document.body.appendChild(c);}
  const dots=exs.map((e,i)=>`<div class="onboarding-dot ${i===sessionState.idx?"active":i<sessionState.idx?"done":""}"></div>`).join("");
  c.innerHTML=`<div class="onboarding-modal session-modal">
    <div class="session-head"><strong>${_("session")} · ${sessionState.idx+1}/${exs.length}</strong><button class="btn ghost" id="sessionClose">${_("canc")}</button></div>
    <div class="onboarding-steps">${dots}</div>
    <div class="session-ex"><div class="demo" aria-hidden="true">${demoSvg(ex.id)}</div><div><h3>${esc(ex.name)}</h3><p style="color:var(--muted);font-size:.82rem">${ex.sets} × ${esc(ex.reps)} · ${_("restWord")} ${ex.rest}s</p><p style="font-size:.8rem;margin-top:.3rem"><b>${_("lastTime")} :</b> ${esc(lastSummary(prog.last))}${prog.last?' · <span style="color:var(--red)">'+prog.hint+'</span>':''}</p></div></div>
    ${isDeload()?`<div class="empty" style="margin:.4rem 0">${_("deloadActive")}</div>`:""}
    <label class="wide" style="margin-top:.3rem">${_("weightKg")}<input type="number" step="2.5" id="sessWeight" value="${log.weight}"></label>
    <div class="set-rows">${log.sets.map((s,i)=>`<div class="set-log ${s.done?"done":""}"><span>${_("setN")} ${i+1}</span><input type="number" class="sess-reps" data-set="${i}" value="${s.reps}"><button class="btn ${s.done?"ghost":"primary"} sess-done" data-set="${i}">${s.done?"✓":_("validateSet")}</button></div>`).join("")}</div>
    <div id="sessionRestPanel" style="display:none;margin-top:.5rem"></div>
    <div class="session-nav">${sessionState.idx>0?`<button class="btn ghost" id="sessPrev">${_("prv")}</button>`:"<div></div>"}${sessionState.idx<exs.length-1?`<button class="btn" id="sessNext">${_("nextEx")}</button>`:`<button class="btn primary" id="sessFinish">${_("finishSession")}</button>`}</div>
  </div>`;
  injectIcons();
  document.getElementById("sessWeight").addEventListener("input",e=>{log.weight=parseFloat(e.target.value)||0;});
  c.querySelectorAll(".sess-reps").forEach(inp=>inp.addEventListener("input",e=>{log.sets[+e.target.dataset.set].reps=parseInt(e.target.value,10)||0;}));
  c.querySelectorAll(".sess-done").forEach(b=>b.addEventListener("click",()=>{const i=+b.dataset.set,s=log.sets[i];s.done=!s.done;b.closest(".set-log").classList.toggle("done",s.done);b.textContent=s.done?"✓":_("validateSet");b.classList.toggle("primary",!s.done);b.classList.toggle("ghost",s.done);if(s.done)startRestTimer(log.rest,"sessionRestPanel");}));
  document.getElementById("sessPrev")?.addEventListener("click",()=>{sessionState.idx--;renderSession();});
  document.getElementById("sessNext")?.addEventListener("click",()=>{sessionState.idx++;renderSession();});
  document.getElementById("sessFinish")?.addEventListener("click",finishSession);
  document.getElementById("sessionClose").addEventListener("click",()=>{cancelRestTimer();sessionState=null;c.remove();});
}
function finishSession(){
  let logged=0;
  Object.values(sessionState.logs).forEach(log=>{
    const done=log.sets.filter(s=>s.done);if(!done.length)return;
    const detail=done.map(s=>({weight:log.weight,reps:s.reps}));
    const vol=Math.round(detail.reduce((a,s)=>a+Math.max(s.weight,1)*s.reps,0));
    const avg=Math.round(detail.reduce((a,s)=>a+s.reps,0)/detail.length);
    state.workouts.push({id:createId("workout"),date:todayISO(),exerciseId:log.exId,name:log.name,load:log.weight,reps:avg,sets:detail.length,volume:vol,rpe:7,setsDetail:detail});
    logged++;
  });
  cancelRestTimer();
  const rec=recommendDeload();
  sessionState=null;document.getElementById("sessionOverlay")?.remove();
  checkAchievements();persistAndRender(logged?_("sessionDone"):_("ns"));
  if(rec.recommend&&!isDeload())setTimeout(()=>showToast(_("deloadSuggest")),2700);
}

// ===== Détection de plateau / décharge =====
function detectPlateauList(){
  const ids=[...new Set(state.workouts.map(w=>w.exerciseId))],out=[];
  ids.forEach(id=>{const recs=state.workouts.filter(w=>w.exerciseId===id);if(recs.length<3)return;const l=recs.slice(-3).map(r=>r.load||0);if(l[2]<=l[0]&&l[2]<=l[1]&&l[0]>0){const ex=exerciseLibrary.find(e=>e.id===id);out.push(ex?ex.name:id);}});
  return out;
}
function recommendDeload(){const pl=detectPlateauList();const wk=weeklyWorkoutStats();return{recommend:pl.length>=2||(wk.sessions>=state.profile.sessions&&recoveryScore()<60),plateau:pl};}
function applyDeload(){const d=new Date();d.setDate(d.getDate()+7);state.deloadUntil=d.toISOString().slice(0,10);state.plan=buildPlan(state.profile);persistAndRender(_("deloadOn"));}

// ===== Photos de progression (stockées sur l'appareil) =====
const PHOTO_KEY="kinetic.photos";
function loadPhotos(){try{return JSON.parse(localStorage.getItem(PHOTO_KEY)||"[]");}catch(e){return [];}}
function savePhotos(p){try{localStorage.setItem(PHOTO_KEY,JSON.stringify(p));}catch(e){showToast(_("photoFull"));}}
function addProgressPhoto(file){
  const url=URL.createObjectURL(file),img=new Image();
  img.onload=()=>{URL.revokeObjectURL(url);const max=820;let w=img.width,h=img.height;if(w>h&&w>max){h=Math.round(h*max/w);w=max;}else if(h>=w&&h>max){w=Math.round(w*max/h);h=max;}
    const cv=document.createElement("canvas");cv.width=w;cv.height=h;cv.getContext("2d").drawImage(img,0,0,w,h);
    const photos=loadPhotos();photos.push({id:createId("photo"),date:todayISO(),data:cv.toDataURL("image/jpeg",0.6)});savePhotos(photos);renderProgress();injectIcons();showToast(_("photoAdded"));};
  img.onerror=()=>{URL.revokeObjectURL(url);showToast(_("aiError"));};
  img.src=url;
}
function deleteProgressPhoto(id){savePhotos(loadPhotos().filter(p=>p.id!==id));renderProgress();injectIcons();}

// ===== Courbes par exercice =====
let chartExId=null;
function exercisesWithHistory(){return [...new Set(state.workouts.map(w=>w.exerciseId))].map(id=>{const ex=exerciseLibrary.find(e=>e.id===id);return{id,name:ex?ex.name:id};});}
function linePath(v){if(!v.length)return"";const min=Math.min(...v),max=Math.max(...v),range=max-min||1;return v.map((val,i)=>{const x=(i/Math.max(1,v.length-1))*600,y=190-((val-min)/range)*150;return [Math.round(x),Math.round(y)];}).map(([x,y],i)=>(i===0?"M":"L")+x+" "+y).join(" ");}
function exercisePath(exId){return linePath(state.workouts.filter(w=>w.exerciseId===exId).map(r=>r.load||0));}

// ===== Hydratation =====
function waterToday(){return (state.water&&state.water[todayISO()])||0;}
function waterGoal(){return Math.max(1500,Math.round((Number(state.profile.weight)||75)*35/100)*100);}
function addWater(ml){const d=todayISO();state.water=state.water||{};state.water[d]=Math.max(0,(state.water[d]||0)+ml);saveState();renderNutrition();injectIcons();}

// ===== Nutrition : quantités précises =====
// Devine si un aliment est liquide pour proposer « ml » par défaut (modifiable).
function isLiquidName(n){const l=(n||"").toLowerCase();return ["lait","jus","eau","soda","cola","boisson","smoothie","café","cafe","thé","sirop","huile","bouillon","soupe","shake","bière","biere","vin","cidre","kéfir","kefir","milk","juice","oil","soup","drink","beer","wine"].some(w=>l.includes(w));}
function openFoodModal(food){
  let c=document.getElementById("foodOverlay");if(!c){c=document.createElement("div");c.id="foodOverlay";c.className="scan-overlay";document.body.appendChild(c);}
  c.innerHTML=`<div class="scan-modal"><div class="scan-head"><h3>${esc(food.name)}</h3><button class="btn ghost" id="foodClose">${_("canc")}</button></div>
    <label class="wide">${_("qty")}<div style="display:flex;gap:.5rem"><input type="number" id="foodGrams" value="100" min="1" style="flex:1"><select id="foodUnit" style="width:5.5rem"><option value="g">g</option><option value="ml">ml</option></select></div></label>
    <label class="wide" style="margin-top:.4rem">${_("meal")}<select id="foodMeal"><option>${_("bf")}</option><option>${_("lu")}</option><option>${_("sn")}</option><option>${_("di")}</option></select></label>
    <div id="foodPreview" style="margin:.6rem 0;font-size:.92rem;color:var(--muted)"></div>
    <button class="btn primary block" id="foodAdd"><span data-icon="plus"></span>${_("af")}</button></div>`;
  injectIcons();
  const p=food.per100,r1=x=>Math.round(x*10)/10;
  const upd=()=>{const g=parseFloat(document.getElementById("foodGrams").value)||0;document.getElementById("foodPreview").innerHTML=`<b>${Math.round(p.cal*g/100)} kcal</b> · ${_("pro")} ${r1(p.pro*g/100)} g · ${_("car")} ${r1(p.car*g/100)} g · ${_("lip")} ${r1(p.fat*g/100)} g`;};
  document.getElementById("foodGrams").addEventListener("input",upd);upd();
  document.getElementById("foodMeal").value=inferMeal();
  document.getElementById("foodUnit").value=isLiquidName(food.name)?"ml":"g";
  document.getElementById("foodClose").addEventListener("click",()=>c.remove());
  c.addEventListener("click",e=>{if(e.target===c)c.remove();});
  document.getElementById("foodAdd").addEventListener("click",()=>{
    const g=parseFloat(document.getElementById("foodGrams").value)||100;
    const unit=document.getElementById("foodUnit").value;
    state.foods.push({id:createId("food"),date:todayISO(),name:food.name,meal:document.getElementById("foodMeal").value,grams:g,unit,calories:Math.round(p.cal*g/100),protein:r1(p.pro*g/100),carbs:r1(p.car*g/100),fat:r1(p.fat*g/100)});
    c.remove();persistAndRender(_("fda"));
  });
}

function buildPlan(profile){
  const split=profile.sessions<=3?"Full body "+profile.sessions+" jours":profile.sessions===4?"Haut / bas 4 jours":"Push / Pull / Legs";
  const templates=scheduleForSessions(profile.sessions);
  const allowed=new Set([...profile.equipment,"Poids du corps"]);
  const usable=exerciseLibrary.filter(e=>e.equipment.some(i=>allowed.has(i)));
  const pool=usable.length?usable:exerciseLibrary.filter(e=>e.equipment.includes("Poids du corps"));
  const week=["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map((label,i)=>{
    const t=templates.find(d=>d.index===i);
    if(!t)return{label,active:false,focus:_("rst"),duration:0,exercises:[]};
    const selected=selectExercises(pool,t.focus,profile);
    return{label,active:true,focus:t.focus,duration:45+Math.min(20,selected.length*5),exercises:selected};
  });
  return{split,week,updatedAt:new Date().toISOString()};
}

// Adapte la charge d'un exercice au profil (poids, niveau, sexe).
// Les charges de base de la bibliothèque sont calibrées pour ~75 kg, intermédiaire, homme.
function adaptedLoad(ex,profile){
  if(!ex.load)return 0; // exercices au poids du corps : pas de charge externe
  const lvl=profile.level==="Débutant"?0.72:profile.level==="Avancé"?1.28:1;
  const sex=profile.sex==="Femme"?0.62:profile.sex==="Autre"?0.8:1;
  const bw=clamp((Number(profile.weight)||75)/75,0.6,1.6);
  const load=ex.load*lvl*sex*bw;
  return Math.max(2.5,Math.round(load/2.5)*2.5); // arrondi au pas de 2,5 kg
}

function selectExercises(pool,focus,profile){
  const desired=focus.includes("Push")?["Pectoraux","Épaules","Triceps"]
    :focus.includes("Pull")?["Dos","Biceps","Gainage"]
    :(focus.includes("Bas")||focus.includes("Jambe"))?["Quadriceps","Fessiers","Ischios","Mollets","Gainage"]
    :focus.includes("Haut")?["Pectoraux","Dos","Épaules","Triceps","Biceps"]
    :["Pectoraux","Dos","Quadriceps","Fessiers","Gainage"];
  const target=profile.level==="Débutant"?3:5;
  // Décalage selon la séance (A/B/C, Push/Pull…) pour varier les exercices
  // d'une séance à l'autre et exploiter tout le matériel disponible.
  const variant=focus.charCodeAt(focus.length-1)||0;
  const selected=[];
  desired.forEach((m,mi)=>{
    if(selected.length>=target)return;
    const matches=pool.filter(e=>e.muscles.includes(m)&&!selected.includes(e));
    if(matches.length)selected.push(matches[(variant+mi)%matches.length]);
  });
  if(selected.length<target){
    const rest=pool.filter(e=>!selected.includes(e));
    for(let k=0;k<rest.length&&selected.length<target;k++)selected.push(rest[(variant+k)%rest.length]);
  }
  return [...new Set(selected)].slice(0,target).map(e=>({...e,load:adaptedLoad(e,profile),caution:e.limitation&&hasLimitation(e.limitation)?_("surv"):""}));
}

function scheduleForSessions(s){const sch={2:[{i:0,f:"Full body A"},{i:3,f:"Full body B"}],3:[{i:0,f:"Full body A"},{i:2,f:"Full body B"},{i:4,f:"Full body C"}],4:[{i:0,f:"Haut du corps"},{i:1,f:"Bas du corps"},{i:3,f:"Haut du corps"},{i:5,f:"Bas du corps"}],5:[{i:0,f:"Push"},{i:1,f:"Pull"},{i:2,f:"Bas du corps"},{i:4,f:"Haut du corps"},{i:5,f:"Bas léger"}],6:[{i:0,f:"Push"},{i:1,f:"Pull"},{i:2,f:"Jambes"},{i:3,f:"Push"},{i:4,f:"Pull"},{i:5,f:"Jambes"}]};return(sch[s]||sch[3]).map(d=>({index:d.i,focus:d.f}));}

function calculateNutrition(profile){
  const sexAdj=profile.sex==="Femme"?-161:profile.sex==="Autre"?-78:5;
  const actF={"Sédentaire":1.25,"Modérée":1.45,"Active":1.65,"Très active":1.82};
  const goalAdj={"Prise de masse":280,"Perte de poids":-420,"Sèche":-480,"Recomposition corporelle":-80,"Force":180,"Endurance":80,"Remise en forme":-120};
  const bmr=10*profile.weight+6.25*profile.height-5*profile.age+sexAdj;
  const cal=Math.round((bmr*(actF[profile.activity]||1.45)+(goalAdj[profile.goal]||0))/10)*10;
  // Protéines : selon l'objectif ET le niveau (g par kg de poids de corps).
  const goalProt=["Prise de masse","Sèche","Recomposition corporelle","Force"].includes(profile.goal)?2:1.7;
  const lvlProt=profile.level==="Avancé"?0.2:profile.level==="Débutant"?-0.1:0;
  const pf=goalProt+lvlProt;
  // Lipides : selon le sexe (besoins essentiels un peu plus élevés chez la femme).
  const fatFactor=profile.sex==="Femme"?1:0.9;
  const pro=Math.round(profile.weight*pf),fat=Math.round(profile.weight*fatFactor),car=Math.max(80,Math.round((cal-pro*4-fat*9)/4));
  return{calories:cal,protein:pro,carbs:car,fat:fat};
}

function exerciseCard(ex) {
  const done=state.completedExercises.includes(todayISO()+"-"+ex.id),fav=state.favorites.includes(ex.id);
  return `<article class="exercise"><div class="demo" aria-hidden="true">${demoSvg(ex.id)}</div><div><h3>${esc(ex.name)} ${fav?"★":""}</h3><p>${ex.sets} x ${esc(ex.reps)} · repos ${ex.rest}s. ${esc(ex.cue)}</p><div class="exercise-meta">${ex.muscles.map(m=>`<span class="tag">${esc(m)}</span>`).join("")}${ex.caution?`<span class="tag warn">${esc(ex.caution)}</span>`:""}<span class="tag good">${ex.load?ex.load+" kg":_("bw")}</span><button class="chip" style="padding:.2rem .4rem;font-size:.72rem" data-toggle-fav="${ex.id}">${fav?"★":"☆"}</button></div></div><button class="btn ${done?"ghost":""}" data-complete-exercise="${ex.id}" ${done?"disabled":""}><span data-icon="${done?"check":"plus"}"></span>${done?_("cpl"):_("val")}</button></article>`;
}

function demoSvg(id){
  // Une animation propre à chaque exercice : personnage « plein » + vrai matériel,
  // mouvement fidèle au nom (couché, debout, suspendu, hanche, etc.). Animé en CSS.
  const ground='<path class="rig" d="M16 90 H84"/>';
  // Développé militaire : debout, pousse la barre au-dessus de la tête.
  const press='<svg viewBox="0 0 100 100">'+ground+'<circle class="body" cx="50" cy="46" r="6"/><path class="limb" d="M50 52 V70"/><path class="limb" d="M50 70 L42 88 M50 70 L58 88"/><g class="anim-press"><path class="limb" d="M50 54 L40 40 M50 54 L60 40"/><rect class="plate" x="26" y="32" width="6" height="14" rx="2"/><rect class="plate" x="68" y="32" width="6" height="14" rx="2"/><path class="bar2" d="M24 39 H76"/></g></svg>';
  // Développé couché : allongé sur le banc, pousse la barre vers le haut.
  const bench='<svg viewBox="0 0 100 100"><path class="rig" d="M12 88 H88"/><rect class="bench" x="14" y="60" width="50" height="6" rx="2"/><path class="rig" d="M20 66 V82 M58 66 V82"/><circle class="body" cx="20" cy="55" r="5"/><path class="limb" d="M25 57 H50"/><path class="limb" d="M50 57 L60 67 L57 82 M50 57 L62 69 L66 82"/><g class="anim-press"><path class="limb" d="M33 56 L30 42 M33 56 L44 42"/><rect class="plate" x="20" y="36" width="5" height="12" rx="2"/><rect class="plate" x="47" y="36" width="5" height="12" rx="2"/><path class="bar2" d="M18 42 H54"/></g></svg>';
  // Rowing : buste penché, une main en appui sur le banc, tire l\'haltère vers la hanche.
  const row='<svg viewBox="0 0 100 100"><rect class="bench" x="16" y="66" width="40" height="6" rx="2"/><path class="rig" d="M22 72 V86 M50 72 V86"/><circle class="body" cx="70" cy="40" r="6"/><path class="limb" d="M40 58 L66 44"/><path class="limb" d="M46 54 L40 66"/><path class="limb" d="M40 58 L33 82 M40 58 L52 80"/><g class="anim-row"><path class="limb" d="M64 46 L60 64"/><rect class="plate" x="53" y="61" width="14" height="6" rx="3"/></g></svg>';
  // Squat barre : barre chargée sur les épaules, descend puis remonte.
  const squat='<svg viewBox="0 0 100 100">'+ground+'<g class="anim-squat"><rect class="plate" x="22" y="24" width="6" height="14" rx="2"/><rect class="plate" x="72" y="24" width="6" height="14" rx="2"/><path class="bar2" d="M20 31 H80"/><circle class="body" cx="50" cy="24" r="6"/><path class="limb" d="M50 30 V50"/><path class="limb" d="M50 34 L34 31 M50 34 L66 31"/><path class="limb" d="M50 50 L41 68 L43 86 M50 50 L59 68 L57 86"/></g></svg>';
  // Squat goblet : haltère tenu contre la poitrine, descend puis remonte.
  const goblet='<svg viewBox="0 0 100 100">'+ground+'<g class="anim-squat"><circle class="body" cx="50" cy="24" r="6"/><path class="limb" d="M50 30 V50"/><path class="limb" d="M50 36 L43 43 M50 36 L57 43"/><rect class="plate" x="44" y="39" width="12" height="9" rx="2"/><path class="limb" d="M50 50 L41 68 L43 86 M50 50 L59 68 L57 86"/></g></svg>';
  // Soulevé de terre roumain : jambes tendues, charnière de hanche, barre le long des cuisses.
  const hinge='<svg viewBox="0 0 100 100">'+ground+'<path class="limb" d="M50 56 L46 88 M50 56 L54 88"/><g class="anim-hinge"><circle class="body" cx="50" cy="26" r="6"/><path class="limb" d="M50 32 L50 56"/><path class="limb" d="M50 40 L47 58 M50 40 L53 58"/><rect class="plate" x="41" y="55" width="5" height="9" rx="2"/><rect class="plate" x="54" y="55" width="5" height="9" rx="2"/><path class="bar2" d="M39 59 H61"/></g></svg>';
  // Soulevé de terre : barre au sol, on se redresse jusqu\'à debout.
  const deadlift='<svg viewBox="0 0 100 100">'+ground+'<path class="limb" d="M50 58 L45 88 M50 58 L55 88"/><g class="anim-deadlift"><circle class="body" cx="50" cy="28" r="6"/><path class="limb" d="M50 34 L50 58"/><path class="limb" d="M50 42 L47 64 M50 42 L53 64"/><rect class="plate" x="37" y="58" width="7" height="14" rx="2"/><rect class="plate" x="56" y="58" width="7" height="14" rx="2"/><path class="bar2" d="M35 65 H65"/></g></svg>';
  // Fentes arrière : une jambe devant, une derrière, le corps descend.
  const lunge='<svg viewBox="0 0 100 100"><path class="rig" d="M14 90 H86"/><g class="anim-lunge"><circle class="body" cx="50" cy="30" r="6"/><path class="limb" d="M50 36 V58"/><path class="limb" d="M50 40 L42 50 M50 40 L58 50"/><rect class="plate" x="37" y="48" width="6" height="6" rx="2"/><rect class="plate" x="57" y="48" width="6" height="6" rx="2"/><path class="limb" d="M50 58 L40 72 L40 88"/><path class="limb" d="M50 58 L62 74 L70 86"/></g></svg>';
  // Gainage : appui sur les avant-bras, corps gainé.
  const plank='<svg viewBox="0 0 100 100"><path class="rig" d="M14 88 H86"/><g class="anim-plank"><circle class="body" cx="74" cy="52" r="6"/><path class="limb" d="M30 60 L68 55"/><path class="limb" d="M30 60 V74 M30 74 H41"/><path class="limb" d="M68 55 L84 78"/></g></svg>';
  // Traction : suspendu à la cage, le corps monte vers la barre.
  const pull='<svg viewBox="0 0 100 100"><path class="rig" d="M22 14 H78 M27 14 V32 M73 14 V32"/><g class="anim-pull"><path class="limb" d="M40 16 V32 M60 16 V32"/><circle class="body" cx="50" cy="40" r="6"/><path class="limb" d="M50 46 V66"/><path class="limb" d="M50 66 L43 82 M50 66 L57 82"/></g></svg>';
  // Relevé de jambes suspendu : corps fixe à la barre, les jambes montent.
  const hangleg='<svg viewBox="0 0 100 100"><path class="rig" d="M22 14 H78 M27 14 V30 M73 14 V30"/><path class="limb" d="M40 16 V32 M60 16 V32"/><circle class="body" cx="50" cy="40" r="6"/><path class="limb" d="M50 46 V62"/><g class="anim-hangleg"><path class="limb" d="M50 62 L46 82 M50 62 L54 82"/></g></svg>';
  // Dips : station à barres parallèles, descend puis remonte.
  const dip='<svg viewBox="0 0 100 100"><path class="rig" d="M22 40 H44 M56 40 H78 M28 40 V74 M72 40 V74"/><g class="anim-dip"><path class="limb" d="M36 40 V52 M64 40 V52"/><circle class="body" cx="50" cy="45" r="6"/><path class="limb" d="M50 51 V68"/><path class="limb" d="M50 68 L43 80 M50 68 L58 78"/></g></svg>';
  // Curl biceps : bras le long du corps, l\'avant-bras remonte l\'haltère.
  const curl='<svg viewBox="0 0 100 100">'+ground+'<circle class="body" cx="50" cy="28" r="6"/><path class="limb" d="M50 34 V60"/><path class="limb" d="M50 60 L44 88 M50 60 L56 88"/><path class="limb" d="M50 38 L60 52"/><g class="anim-curl"><path class="limb" d="M60 52 L60 70"/><rect class="plate" x="54" y="68" width="12" height="6" rx="3"/></g></svg>';
  // Extension triceps : bras à la verticale, l\'avant-bras se déplie vers le haut.
  const triceps='<svg viewBox="0 0 100 100">'+ground+'<circle class="body" cx="50" cy="42" r="6"/><path class="limb" d="M50 48 V66"/><path class="limb" d="M50 66 L44 88 M50 66 L56 88"/><path class="limb" d="M50 48 L50 30"/><g class="anim-triceps"><path class="limb" d="M50 30 L50 14"/><rect class="plate" x="44" y="10" width="12" height="6" rx="3"/></g></svg>';
  // Élévations latérales : vue de face, les bras montent sur les côtés.
  const latraise='<svg viewBox="0 0 100 100">'+ground+'<circle class="body" cx="50" cy="28" r="6"/><path class="limb" d="M50 34 V60"/><path class="limb" d="M50 60 L43 86 M50 60 L57 86"/><g class="anim-latl"><path class="limb" d="M50 40 L38 56"/><rect class="plate" x="33" y="54" width="9" height="6" rx="3"/></g><g class="anim-latr"><path class="limb" d="M50 40 L62 56"/><rect class="plate" x="58" y="54" width="9" height="6" rx="3"/></g></svg>';
  // Pompes : au sol, le corps monte et descend sur les bras.
  const pushup='<svg viewBox="0 0 100 100"><path class="rig" d="M12 86 H88"/><g class="anim-pushup"><circle class="body" cx="24" cy="56" r="5"/><path class="limb" d="M29 58 L70 60"/><path class="limb" d="M70 60 L84 78"/><path class="limb" d="M40 59 V78 M58 60 V78"/></g></svg>';
  // Relevé de jambes au sol : allongé, les jambes montent.
  const legraise='<svg viewBox="0 0 100 100"><path class="rig" d="M12 86 H88"/><circle class="body" cx="22" cy="74" r="5"/><path class="limb" d="M27 76 H52"/><path class="limb" d="M30 76 L24 66 M30 76 L36 66"/><g class="anim-legraise"><path class="limb" d="M52 76 L72 74 M52 76 L72 80"/></g></svg>';
  // Hip thrust : haut du dos sur le banc, les hanches montent.
  const hipthrust='<svg viewBox="0 0 100 100"><path class="rig" d="M12 88 H88"/><rect class="bench" x="12" y="48" width="22" height="6" rx="2"/><path class="rig" d="M16 54 V70 M30 54 V70"/><circle class="body" cx="20" cy="44" r="5"/><path class="limb" d="M58 62 L66 78 M58 62 L74 78"/><g class="anim-hipthrust"><path class="limb" d="M25 50 L58 62"/><rect class="plate" x="47" y="55" width="5" height="11" rx="2"/><rect class="plate" x="60" y="55" width="5" height="11" rx="2"/><path class="bar2" d="M45 60 H67"/></g></svg>';
  // Mollets debout : le corps s\'élève sur la pointe des pieds.
  const calf='<svg viewBox="0 0 100 100">'+ground+'<g class="anim-calf"><circle class="body" cx="50" cy="28" r="6"/><path class="limb" d="M50 34 V58"/><path class="limb" d="M50 40 L42 50 M50 40 L58 50"/><rect class="plate" x="36" y="48" width="6" height="6" rx="2"/><rect class="plate" x="58" y="48" width="6" height="6" rx="2"/><path class="limb" d="M50 58 L45 84 M50 58 L55 84"/></g></svg>';
  const map={
    bench:bench,"db-press":bench,row:row,"goblet-squat":goblet,rdl:hinge,ohp:press,
    lunge:lunge,plank:plank,pullup:pull,chinup:pull,"hang-leg-raise":hangleg,
    squat:squat,deadlift:deadlift,dips:dip,"dips-triceps":dip,curl:curl,ext:triceps,
    "lat-raise":latraise,pushup:pushup,"leg-raise":legraise,"hip-thrust":hipthrust,"calf-raise":calf
  };
  return map[id]||squat;
}

function inp(n,l,t,v){return `<label>${l}<input name="${n}" type="${t}" value="${esc(String(v))}"></label>`;}
function sel(n,l,o,v){return `<label>${l}<select name="${n}">${o.map(o=>`<option ${String(o)===String(v)?"selected":""}>${esc(String(o))}</option>`).join("")}</select></label>`;}
function metric(l,v,n){return `<div class="metric-card"><span>${l}</span><strong>${v}</strong><small>${n}</small></div>`;}
function macro(l,c,t,u){const p=clamp(Math.round((c/Math.max(1,t))*100),0,100);return `<div class="macro"><span>${l}</span><strong>${c} / ${t} ${u}</strong><div class="progress-line"><span style="--value:${p}%"></span></div></div>`;}

function todaysFoodTotals(){return state.foods.filter(f=>f.date===todayISO()).reduce((t,f)=>({calories:t.calories+f.calories,protein:t.protein+f.protein,carbs:t.carbs+f.carbs,fat:t.fat+f.fat}),{calories:0,protein:0,carbs:0,fat:0});}
function weeklyWorkoutStats(){const s=startOfWeek(new Date());const w=state.workouts.filter(w=>new Date(w.date)>=s);return{sessions:new Set(w.map(w=>w.date)).size,volume:w.reduce((s,w)=>s+w.volume,0)};}
function renderWeekProgress(){const w=weeklyWorkoutStats();const p=clamp(Math.round((w.sessions/Math.max(1,state.profile.sessions))*100),0,100);document.getElementById("weekProgressBar").style.setProperty("--value",p+"%");document.getElementById("weekProgressText").textContent=w.sessions+"/"+state.profile.sessions+" "+_("ses");}
function nextWorkout(){const a=state.plan.week.filter(d=>d.active);return a[0]||{label:_("rst"),focus:_("rst"),duration:30,exercises:[exerciseLibrary.find(e=>e.id==="plank")]};}
// Jour actuellement sélectionné dans le calendrier (peut être un jour de repos).
function selectedDay(){const i=selectedPlanDay==null?todayWeekday():selectedPlanDay;return (state.plan&&state.plan.week)?state.plan.week[i]:null;}
// Séance à démarrer : le jour sélectionné s'il est actif, sinon le 1er jour actif.
function currentWorkout(){const d=selectedDay();return (d&&d.active&&d.exercises&&d.exercises.length)?d:nextWorkout();}
function recoveryScore(){const w=weeklyWorkoutStats(),p=state.profile.sessions;if(w.sessions>p)return 58;if(w.sessions===p)return 76;return 84;}
function recoveryLabel(){const s=recoveryScore();if(s<60)return _("tw");if(s<78)return _("rl");return _("stb");}
function trainingAdvice(){return{load:detectPlateauList().length?"Micro-charge":"+1 rep avant charge",nutrition:todaysFoodTotals().protein<calculateNutrition(state.profile).protein*.7?"+ protéines":"Macros stables",recovery:recoveryScore()<60?"-20% volume":"Repos normal"};}
function detectStagnation(){return detectPlateauList().length?_("det"):_("stb");}
function limitationShort(){const t=state.profile.limitations.trim();return t?t.split(/[,.]/)[0]:"Aucune";}
function hasLimitation(t){return state.profile.limitations.toLowerCase().includes(t);}

function coachReply(q){
  const l=q.toLowerCase();const ctx=[];
  if(hasLimitation("genou"))ctx.push("genou sensible");if(hasLimitation("épaule"))ctx.push("épaule sensible");
  if(state.profile.goal==="Perte de poids")ctx.push("objectif perte de poids");
  if(state.profile.goal==="Prise de masse")ctx.push("objectif prise de masse");
  if(state.profile.goal==="Force")ctx.push("objectif force");
  if(recoveryScore()<60)ctx.push("fatigue élevée");
  const c=ctx.length?" (contexte: "+ctx.join(", ")+")":"";
  if(l.includes("nutrition")||l.includes("macro")||l.includes("calorie")){
    if(state.profile.goal==="Perte de poids")return "Maintiens un déficit modéré (~400 kcal), priorité aux protéines pour préserver la masse musculaire."+c;
    if(state.profile.goal==="Prise de masse")return "Surplus propre de ~300 kcal, glucides autour des séances, lipides modérés."+c;
    return "Garde les protéines proches de la cible, ajuste les glucides autour des séances."+c;
  }
  if(l.includes("stagn")||l.includes("force")||l.includes("record"))return "Passe 2 semaines sur 6-8 reps, repos 150s, augmente si la vitesse reste propre."+c;
  if(l.includes("repos")||l.includes("fatigue")||l.includes("sommeil")){if(recoveryScore()<60)return "Signes de fatigue : baisse le volume de 20% sur la prochaine séance."+c;return "Si la fatigue monte, baisse le volume de 20%."+c;}
  if(l.includes("genou")||l.includes("douleur")||l.includes("bless"))return "Reste dans une amplitude indolore, privilégie le goblet squat contrôlé, évite la charge lourde en flexion complète."+c;
  if(l.includes("adapt")||l.includes("séance"))return "Pour la séance prévue, garde les exercices de base, réduis le volume si nécessaire et fais 2 séries de chauffe."+c;
  return "Je te propose : garde la séance prévue, fais deux séries de chauffe et évite l'échec sur les mouvements sensibles."+c;
}

function addChat(t,u){state.chat.push({role:u?"user":"assistant",text:t});saveState();}

async function askCoach(q){
  q=(q||"").trim();if(!q)return;
  addChat(q,true);renderCoach();setView("coach");
  if(!auth.authenticated){addChat(coachReply(q),false);renderCoach();return;}
  showCoachTyping(true);
  try{
    const reply=await coachReplyAI();
    showCoachTyping(false);addChat(reply,false);renderCoach();
  }catch(e){
    showCoachTyping(false);addChat(coachReply(q),false);renderCoach();
    if(e&&e.message)showToast(e.message);
  }
}

function showCoachTyping(on){
  const log=document.getElementById("chatLog");if(!log)return;
  let t=document.getElementById("coachTyping");
  if(on){if(!t){t=document.createElement("div");t.id="coachTyping";t.className="bubble typing";t.textContent="…";log.appendChild(t);}log.scrollTop=log.scrollHeight;}
  else if(t){t.remove();}
}

async function coachReplyAI(){
  // L'appel à Claude se fait côté serveur (clé jamais exposée au navigateur).
  const messages=state.chat.filter(m=>m.role==="user"||m.role==="assistant").map(m=>({role:m.role,content:m.text}));
  const data=await api("/api/coach",{method:"POST",body:{messages,language:state.settings.language}});
  const text=((data&&data.reply)||"").trim();
  if(!text)throw new Error("empty");
  return text;
}

function estimateFood(n){
  const l=n.toLowerCase();
  if(l.includes("poulet")||l.includes("thon")||l.includes("whey")||l.includes("skyr")||l.includes("blanc"))return{calories:320,protein:38,carbs:18,fat:8};
  if(l.includes("riz")||l.includes("pâte")||l.includes("avoine")||l.includes("banane")||l.includes("pain"))return{calories:360,protein:10,carbs:68,fat:5};
  if(l.includes("saumon")||l.includes("oeuf")||l.includes("huile")||l.includes("avocat"))return{calories:420,protein:30,carbs:20,fat:22};
  if(l.includes("lait")||l.includes("yaourt")||l.includes("fromage"))return{calories:150,protein:12,carbs:8,fat:8};
  if(l.includes("légume")||l.includes("salade")||l.includes("brocoli"))return{calories:80,protein:5,carbs:12,fat:2};
  if(l.includes("noix")||l.includes("amande")||l.includes("cacahuète"))return{calories:180,protein:6,carbs:6,fat:16};
  return{calories:240,protein:18,carbs:24,fat:8};
}

function inferMeal(){const h=new Date().getHours();if(h<11)return _("bf");if(h<15)return _("lu");if(h<19)return _("sn");return _("di");}

function measurePath(key){
  const v=state.measures.map(m=>m[key]).filter(x=>x!==undefined&&x!==null);if(!v.length)return"";
  const min=Math.min(...v),max=Math.max(...v),range=max-min||1;
  return v.map((val,i)=>{const x=(i/Math.max(1,v.length-1))*600,y=190-((val-min)/range)*145;return [Math.round(x),Math.round(y)];}).map(([x,y],i)=>(i===0?"M":"L")+x+" "+y).join(" ");
}

function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="kinetic-export-"+todayISO()+".json";a.click();URL.revokeObjectURL(url);showToast(_("exr"));}
function importData(file){
  const r=new FileReader();
  r.onload=()=>{
    try{
      const d=JSON.parse(r.result);if(!d||typeof d!=="object")throw new Error("bad");
      state={...state,...d,settings:{...state.settings,...(d.settings||{})},profile:{...state.profile,...(d.profile||{})}};
      if(!state.plan)state.plan=buildPlan(state.profile);
      saveState();applyTheme();renderAll();showToast(_("impDone"));
    }catch(e){showToast(_("aiError"));}
  };
  r.readAsText(file);
}

function checkAchievements(){achievementsDef.forEach(a=>{if(state.achievements.includes(a.id))return;if(a.chk()){state.achievements.push(a.id);showToast("🏆 "+_(a.ik)+" : "+_(a.idk));}});}

function startRestTimer(seconds,panelId){
  cancelRestTimer();panelId=panelId||"restTimerPanel";restTimerData={remaining:seconds,paused:false,panelId};
  const p=document.getElementById(panelId);
  if(p){p.style.display="block";p.innerHTML=`<div class="rest-timer"><div class="rest-timer-display" id="restTimerDisplay">${formatTime(seconds)}</div><div class="rest-timer-controls"><button class="btn" id="restTimerToggle" data-toggle-pause-rest>${_("pau")}</button><button class="btn ghost" data-cancel-rest>${_("canc")}</button></div></div>`;}
  restTimerData.interval=setInterval(()=>{if(!restTimerData||restTimerData.paused)return;restTimerData.remaining--;const d=document.getElementById("restTimerDisplay");if(d)d.textContent=formatTime(restTimerData.remaining);if(restTimerData.remaining<=0){clearInterval(restTimerData.interval);if(p){p.innerHTML=`<div class="rest-timer rest-timer-done"><div class="rest-timer-display">${_("rtd")}</div><button class="btn primary" data-cancel-rest>${_("rtc")}</button></div>`;}restTimerData=null;showToast(_("rtc"));}},1000);
}

function togglePauseRestTimer(){if(!restTimerData)return;restTimerData.paused=!restTimerData.paused;const b=document.getElementById("restTimerToggle");if(b)b.textContent=restTimerData.paused?_("res"):_("pau");}
function cancelRestTimer(){if(restTimerData&&restTimerData.interval)clearInterval(restTimerData.interval);const p=restTimerData&&document.getElementById(restTimerData.panelId);restTimerData=null;if(p)p.style.display="none";}
function formatTime(s){const m=Math.floor(s/60),sec=s%60;return m+":"+(sec<10?"0":"")+sec;}

async function startBarcodeScan(){
  if(document.getElementById("scanOverlay"))return;
  const c=document.createElement("div");c.className="scan-overlay";c.id="scanOverlay";
  c.innerHTML=`<div class="scan-modal"><div class="scan-head"><h3>${_("bs")}</h3><button class="btn ghost" id="scanClose">${_("canc")}</button></div>
    <div class="scan-video-wrap"><video id="scanVideo" playsinline muted></video><div class="scan-reticle"></div></div>
    <div class="scan-status" id="scanStatus">${_("bss")}</div>
    <form class="composer" id="scanManualForm"><input id="scanManualInput" inputmode="numeric" placeholder="${_("scanManual")}"><button class="btn primary" type="submit"><span data-icon="search"></span></button></form>
  </div>`;
  document.body.appendChild(c);injectIcons();
  let stream=null,raf=null;
  const stop=()=>{if(raf)cancelAnimationFrame(raf);raf=null;if(stream){stream.getTracks().forEach(t=>t.stop());stream=null;}};
  window._scanStop=stop;
  document.getElementById("scanClose").addEventListener("click",closeScan);
  document.getElementById("scanManualForm").addEventListener("submit",ev=>{ev.preventDefault();const v=document.getElementById("scanManualInput").value.trim();if(v)lookupBarcode(v);});
  const statusEl=document.getElementById("scanStatus");
  if(!("BarcodeDetector"in window)||!navigator.mediaDevices?.getUserMedia){statusEl.textContent=_("scanNoCam");return;}
  try{
    const detector=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128"]});
    stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});
    const video=document.getElementById("scanVideo");video.srcObject=stream;await video.play();
    const tick=async()=>{
      if(!document.getElementById("scanOverlay")){stop();return;}
      try{const codes=await detector.detect(video);if(codes.length){stop();lookupBarcode(codes[0].rawValue);return;}}catch(_){}
      raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
  }catch(e){statusEl.textContent=_("scanNoCam");}
}
function closeScan(){if(window._scanStop)window._scanStop();const o=document.getElementById("scanOverlay");if(o)o.remove();}
async function lookupBarcode(code){
  const s=document.getElementById("scanStatus");if(s)s.textContent=_("scanSearching");
  try{
    const res=await fetch("https://world.openfoodfacts.org/api/v2/product/"+encodeURIComponent(code)+".json?fields=product_name,product_name_fr,brands,nutriments");
    const data=await res.json();
    if(data.status!==1||!data.product){if(s)s.textContent=_("bnf");return;}
    const pr=data.product,n=pr.nutriments||{};
    const num=x=>Number(x)||0;
    closeScan();
    openFoodModal({name:pr.product_name_fr||pr.product_name||pr.brands||code,per100:{
      cal:Math.round(num(n["energy-kcal_100g"])),pro:num(n.proteins_100g),car:num(n.carbohydrates_100g),fat:num(n.fat_100g)}});
  }catch(e){if(s)s.textContent=_("bnf");}
}

function requestNotifPermission(){return new Promise(r=>{if(!("Notification"in window)){r(false);return;}if(Notification.permission==="granted"){r(true);return;}if(Notification.permission==="denied"){r(false);return;}Notification.requestPermission().then(p=>r(p==="granted"));});}

// Au démarrage : si les notifications sont actives, rafraîchit l'abonnement push.
function scheduleWorkoutReminder(){ if(state.settings.notifications && auth.authenticated){ subscribePush().catch(()=>{}); } }

// ---- Notifications Web Push ------------------------------------------------
function urlBase64ToUint8Array(base64){
  const pad="=".repeat((4-base64.length%4)%4);
  const b=(base64+pad).replace(/-/g,"+").replace(/_/g,"/");
  const raw=atob(b);const arr=new Uint8Array(raw.length);
  for(let i=0;i<raw.length;i++)arr[i]=raw.charCodeAt(i);
  return arr;
}
async function subscribePush(){
  if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Notifications non supportées par ce navigateur.");
  const reg=await navigator.serviceWorker.ready;
  const {publicKey}=await api("/api/push/key");
  if(!publicKey)throw new Error("Notifications non configurées sur le serveur.");
  let sub=await reg.pushManager.getSubscription();
  if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array(publicKey)});
  const j=sub.toJSON();
  await api("/api/push/subscribe",{method:"POST",body:{endpoint:j.endpoint,keys:j.keys}});
  return true;
}
async function unsubscribePush(){
  try{
    const reg=await navigator.serviceWorker.ready;
    const sub=await reg.pushManager.getSubscription();
    if(sub){ await api("/api/push/unsubscribe",{method:"POST",body:{endpoint:sub.endpoint}}).catch(()=>{}); await sub.unsubscribe().catch(()=>{}); }
  }catch(e){}
}
async function enableNotifications(){
  if(!("Notification"in window)){ state.settings.notifications=false; saveState(); renderProfile(); injectIcons(); showToast(_("nd")); return; }
  const perm=await requestNotifPermission();
  if(!perm){ state.settings.notifications=false; saveState(); renderProfile(); injectIcons(); showToast(_("notifBlocked")); return; }
  try{ await subscribePush(); state.settings.notifications=true; saveState(); renderProfile(); injectIcons(); showToast(_("ne")); }
  catch(e){ state.settings.notifications=false; saveState(); renderProfile(); injectIcons(); showToast(e&&e.message?e.message:_("nd")); }
}
async function disableNotifications(){ state.settings.notifications=false; saveState(); await unsubscribePush(); renderProfile(); injectIcons(); }
async function sendTestNotification(){
  try{ if(state.settings.notifications)await subscribePush(); await api("/api/push/test",{method:"POST"}); showToast(_("notifSent")); }
  catch(e){ showToast(e&&e.message?e.message:_("nd")); }
}

function persistAndRender(m){saveState();renderAll();showToast(m);}
function saveLocal(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(e){showToast(_("su"));}}
function saveState(){saveLocal();scheduleServerSync();}
function loadState(){try{const s=localStorage.getItem(STORAGE_KEY);if(!s)return JSON.parse(JSON.stringify(defaultState));const m=JSON.parse(JSON.stringify(defaultState));const p=JSON.parse(s);return{...m,...p,settings:{...m.settings,...p.settings},profile:{...m.profile,...p.profile}};}catch(e){return JSON.parse(JSON.stringify(defaultState));}}
function applyTheme(){document.documentElement.dataset.theme=state.settings.theme;const i=document.querySelector("#themeToggle [data-icon]");if(i)i.dataset.icon=state.settings.theme==="light"?"sun":"moon";}
function injectIcons(){document.querySelectorAll("[data-icon]").forEach(e=>{const i=icons[e.dataset.icon];if(i)e.innerHTML=i;});}
function registerServiceWorker(){if(!("serviceWorker"in navigator)||!location.protocol.startsWith("http"))return;navigator.serviceWorker.register("sw.js").catch(()=>{showToast(_("swf"));});}
function updateSyncStatus(){const s=document.getElementById("syncStatus");if(!s)return;const o=navigator.onLine;const who=auth.authenticated?(auth.username||_("acc")):_("lo");s.textContent=who+" · "+(o?_("ol"):_("ofl"));s.classList.toggle("online",o);}

function isStandalone(){return window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;}
function showInstallHelp(){
  if(isStandalone()){showToast(_("instDone"));return;}
  // Android / Chrome desktop : vraie invite d'installation native.
  if(installPrompt){installPrompt.prompt();installPrompt.userChoice.finally(()=>{installPrompt=null;});return;}
  // Sinon (iOS Safari notamment) : instructions adaptées à l'appareil.
  const ios=/iphone|ipad|ipod/i.test(navigator.userAgent||"");
  const steps=ios?_("instIos"):_("instOther");
  if(document.getElementById("installOverlay"))return;
  const c=document.createElement("div");c.className="scan-overlay";c.id="installOverlay";
  c.innerHTML=`<div class="scan-modal"><div class="scan-head"><h3>${_("instTitle")}</h3><button class="btn ghost" id="installClose">${_("canc")}</button></div><div style="font-size:.92rem;line-height:1.55">${steps}</div></div>`;
  document.body.appendChild(c);
  document.getElementById("installClose").addEventListener("click",()=>c.remove());
  c.addEventListener("click",e=>{if(e.target===c)c.remove();});
}
function showToast(m){const t=document.getElementById("toast");if(!t)return;t.textContent=m;t.classList.add("show");window.clearTimeout(showToast.timer);showToast.timer=window.setTimeout(()=>t.classList.remove("show"),2600);}
function formatNumber(n){return Number(n||0).toLocaleString("fr-FR");}
function formatDate(d){return new Intl.DateTimeFormat("fr-FR",{day:"2-digit",month:"short"}).format(new Date(d));}
function todayISO(){return new Date().toISOString().slice(0,10);}
function startOfWeek(d){const c=new Date(d);const day=c.getDay()||7;c.setHours(0,0,0,0);c.setDate(c.getDate()-day+1);return c;}
function createId(p){return p+"-"+Date.now()+"-"+Math.random().toString(16).slice(2);}
function clamp(v,min,max){return Math.min(max,Math.max(min,v));}

