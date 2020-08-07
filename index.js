const antagonist = [
    Humain = [
        'Savant névrosé',
        'Serviteur captif',
        'Philanthrope fou',
        'Stratège impitoyable',
        'Victime psychotique',
        'Artiste passionné'

    ],
    Animal = [
        'Insectes',
        'Prédateur',
        'Herbivores craintifs',
        'Reptiles égarés',
        'Groupe de petits nuisibles',
        'Oiseaux sauvages'
    ],
    Vegetal = [
        'Plantes empoisonnées',
        'Plantes intelligentes',
        'Plantes carnivores',
        'Plantes à croissance accélérée',
        'Lianes étrangleuses',
        'Spores ou pollen'
    ],
    Machine = [
        'Turbine flottante',
        'Poteau ou antenne',
        'Machine souterraine',
        'Plateforme flottante',
        'Sphère d’écho ou cube',
        'Anneaux de vibration'
    ],
    Intelligence_artificielle = [
        'Cyborg',
        'Virus informatique',
        'Nano robots',
        'Robot autonome',
        'Super ordinateur',
        'Esprit ruchet'
    ],
    Creature = [
        'Animal préhistorique',
        'Mort-vivant',
        'Monstre mythique',
        'Technologie bio-infectée',
        'Entité paranormale',
        'Extraterrestres'
    ]
]

const behaviour = [
    Motivation = [
        'Célébrité',
        'Vaincre un ennemi',
        'Former une nouvelle famille',
        'Être vénéré',
        'Être reconnu',
        'Rage aveugle',
        'Trouver l’âme sœur',
        'Rendre le monde meilleur',
        'Bien-être',
        'Vengeance',
        'Trouver un ami',
        'Rentrer chez soi',
        'Aider quelqu’un dans le besoin',
        'Entend des voix',
        'Menacé ou victime de chantage',
        'Collecte d’informations',
        'Se sentir indispensable',
        'Avoir le contrôle',
        'Guidé par une entité supérieure',
        'Démentir les propos de ses adversaires',
        'Curiosité',
        'Amour non réciproque',
        'Maladie incurable',
        'Dépassé par quelque chose',
        'Renaissance',
        'Perfectionnisme',
        'Prophétie',
        'Provoquer une apocalypse',
        'Bâtir une maison',
        'Créer',
        'Protéger un être cher',
        'Se fondre dans la masse',
        'Trouver des réponses',
        'Vivre le grand frisson',
        'Dominer le monde',
        'Prouver sa valeur'


    ],
    Instinct = [
        'Sanguinaire',
        'Chagrin insondable',
        'Retrouver son troupeau',
        'S’échapper',
        'Éliminer une menace',
        'Reproduction',
        'Esprit embrouillé',
        'Se faire comprendre',
        'Rester caché',
        'Rester en bonne santé',
        'Trouver des alliés',
        'Le frisson de la chasse',
        'Se débrouiller seul',
        'Imiter quelqu’un / quelque chose',
        'Corrompu ou infecté',
        'Éduquer sa descendance',
        'Être à la tête du troupeau',
        'Joueur',
        'Au seuil de la mort',
        'Survie',
        'Parasite',
        'Peur',
        'Trouver de la nourriture',
        'Retrouver des forces',
        'Autodéfense',
        'Automutilation',
        'Fabriquer un nid',
        'Protéger le groupe',
        'Protéger le territoire',
        'Trouver de l’aide',
        'Conquérir',
        'Calmer sa faim',
        'Le statut',
        'Symbiose',
        'Transformation',
        'Éradication'

    ]
]

const phenomena = [
    Evenements = [
        'Modification de la gravité',
        'Apparition d’une autre dimension',
        'Eau bouillonnante',
        'Animaux morts',
        'Décharges électriques ',
        'Explosions',
        'Chute de météorite',
        'Contrôlé à distance',
        'Eau empoisonnée',
        'Geyser',
        'Manipulation génétique',
        'Invasion d’insectes',
        'Tremblement de terre',
        'Substance chimique ',
        'Clonage',
        'Vague de froid',
        'Contrôle par ondes radio',
        'Rétrécissement (personne ou objet)',
        'Lévitation',
        'Formations nuageuses',
        'Mutation',
        'Artefact étrange',
        'Signaux radio',
        'Aurores boréales',
        'Tempête surnaturelle',
        'Invisibilité',
        'Inondation',
        'Radiations',
        'Modification du champ magnétique',
        'Feu de forêt',
        'Le temps s’arrête',
        'Brouillard dense ou nuages de gaz',
        'Téléportation',
        'Voyage dans le temps',
        'Vague de chaleur',
        'Calme',



    ],
    Anomalies = [
        'Réactions allergiques',
        'Implants cybernétiques',
        'Dopage',
        'Trafic de drogue',
        'Doppelgangers',
        'Un trésor incroyable',
        'Fausse identité',
        'Malédiction',
        'Système de défense',
        'Disparitions',
        'Manœuvres secrètes de l’armée',
        'Hypnose',
        'Vols et cambriolages',
        'Infiltration',
        'Cannibalisme',
        'Enlèvement',
        'Amnésie collective',
        'Imitation d’un comportement',
        'Hypersensibilité à la lumière',
        'Essais médicaux',
        'Harcèlement',
        'Meurtre',
        'Narcolepsie',
        'Immortalité',
        'Pouvoirs surnaturels',
        'Vol de personnalité',
        'Expériences dangereuses',
        'Les rêves deviennent réalité',
        'Épidémie',
        'Espionnage',
        'Apparition de fantômes',
        'Télépathie',
        'Silence',
        'Tout le monde évite un endroit',
        'Extorsion',
        'Légende urbaine',

    ]
]

const organizations_involved = [
    Organisation = [
        'Puissance étrangère',
        'Secte ou culte',
        'Riksenergi [DARPA]',
        'FOA [DART]',
        'Armée ou police',
        'Puissance surnaturelle'
    ],
    Implication = [
        'Responsabilité',
        'Enquête',
        'Protection',
        'Contrôle',
        'Auteur',
        'Incident'
    ],
]

const type_of_scenario = {
    Genre: [
        'Détective, mystère',
        'Aventure, détective',
        'Drame, policier',
        'Aventure, mystère',
        'Action, thriller',
        'Horreur, thriller'
    ],
    Introduction: [
        '« Le club des détectives » – enquête',
        '« Les têtes brûlées » – aventure',
        '« Les curieux » – divulgation',
        '« Les archéologues » – découverte',
        '« Les sauveurs » – héroïsme ',
        '« Dans les griffes de la terreur » – peur'
    ],
    Confrontation: [
        '« L’arrestation » – dévoiler la vérité',
        '« Plus forts que jamais » – surmonter sa peur',
        '« La vérité » – soif de connaissance',
        '« Collection » – exhiber son trophée',
        '« Gratitude » – reconnaissance',
        '« La vie » – survivre'
    ],
}

const clues = {
    Des_gens: [
        'Enfants fanfarons',
        'Adolescents paniqués',
        'Mission secrète',
        'Promenades nocturnes',
        'Vague de cambriolages',
        'Nouveaux plannings de travail'
    ],
    Des_animaux: [
        'Modification du comportement des troupeaux',
        'Animaux terrifiés',
        'Animaux agressifs',
        'Disparition d’animaux de compagnie',
        'Animaux doués de parole',
        'Animaux morts'
    ],
    Des_creatures: [
        'Prédateur monstrueux',
        'Extra-terrestres',
        'Créature sortie d’un film d’horreur',
        'Fantômes',
        'Créatures féeriques',
        'Jouets animés'
    ],
    Des_impressions: [
        'Lumières étranges',
        'Sons mystérieux',
        'Odeur entêtante',
        'Oreilles bouchées',
        'Goût métallique dans la bouche',
        'Hallucinations'
    ],
    Des_objets: [
        'Tentes et traces de campement',
        'Arme chargée',
        'Outils perdus',
        'Disparition de pièces mécaniques',
        'Coffre rempli de pièces',
        'Livre énigmatique'
    ],
    Des_evenements: [
        'Pouvoirs surnaturels',
        'Prophétie',
        'Maladie',
        'Objets volants',
        'Coupure de courant',
        'Interférences à la radio'
    ],

}

const places = {
    Lieu_clos: [
        'Une vieille bâtisse',
        'Une salle d’arcade',
        'Une station essence',
        'Une bibliothèque',
        'Une station de police ou de pompier',
        '6 Un studio inoccupé',
        'Un bateau échoué',
        'Un camion abandonné',
        'Un hangar à bateaux délabré',
        'Une ancienne cachette',
        'Un garage fermé à clé',
        'Une épave rouillée',
        'Une grande maison',
        'Une salle de contrôle',
        'Une usine',
        'Un kiosque ou un restaurant',
        'Un poulailler ou une niche pour chien',
        'Un camping ou une caravane',
        'Une maison abandonnée',
        'Une porte du Loop',
        'Un cellier',
        'Une salle de stockage réfrigérée',
        'Une église',
        'Un laboratoire',
        'Un entrepôt',
        'Une grange',
        'Une école',
        'Une cabane',
        'Une piscine',
        'Un salon de tatouage',
        'Une maison perchée dans les arbres',
        'L’atelier d’un inventeur',
        'Un hôtel',
        'Un château d’eau',
        'Un magasin de cassettes vidéo',
        'Un grenier'
    ],
    Lieu_ouvert: [
        'Une zone de baignade',
        'Un ponton',
        'Une prairie sauvage ou un pâturage',
        'Au-delà de la clôture et des caméras',
        'Un chantier',
        'Un barrage',
        'Une route bloquée',
        'Un plateau désertique ou une falaise venteuse',
        'Un champ boueux',
        'Une forêt impénétrable',
        'Un arbre noueux',
        'Un terrain militaire interdit au public',
        'Une grande serre',
        'La piste d’atterrissage d’un aérodrome',
        'Une grotte secrète',
        'Une grande carrière ou une gravière',
        'Dans un marécage / un lac',
        'Dans un fleuve',
        'Dans les égouts',
        'Un cimetière',
        'Le long de la voie ferrée',
        'Un terrain de jeu',
        'Au fond d’un ravin',
        'Au fond de la mer',
        'Une clairière près d’un ruisseau',
        'La cour de récréation',
        'Une décharge',
        'Les conduites d’eau du Loop',
        'Une stèle en pierre',
        'La place du village',
        'Un jardin entretenu',
        'Sous la culée d’un pontest',
        'Au sommet d’une colline',
        'Au bord de l’eau',
        'L’antenne radio',
        'Une cabane de jardin'
    ],
}

const npc_personality = {
    Trait_de_personnalité: [
        'Souple, acrobate, musclé',
        'Optimiste, aime les enfants, intello',
        'Sûr de lui, cultivé, doué',
        'Beau, flatteur, doux',
        'Méchant, élitiste, colérique',
        'Vétérinaire, ami des bêtes, cynophile',
        'Désespéré, serviteur fidèle, idéaliste',
        'Sociable, débrouillard, futé',
        'Chasseur, excellent tireur, poigne ferme',
        'Esprit pratique, artisan, autodidacte',
        'Strict, discipliné, obsédé par le résultat',
        'Vaste réseau de contacts, chef d’entreprise, riche',
        'Masque ses sentiments, déconnecté, mal aimé',
        'Inspirant, attentif, ouvert d’esprit',
        'Rêveur, artiste, obstiné',
        'Doué pour les langues, bonne oreille, esprit d’analyse',
        'Fidèle, apprécié, cherche l’approbation des autres',
        'Déterminé, trouve toujours une solution, concentré',
        'Déprimé, triste, amer',
        'Impulsif, agressif, schizophrène',
        'Haineux, sadique, tourmenté',
        'Menteur, manipulateur, jeune',
        'Homme des bois, chasseur, survivaliste',
        'Persécuté, dévasté, terrifié',
        'Ingénieur, logique, esprit de déduction',
        'Psychologue, expert des comportements humains, anthropologue',
        'Courageux, force intérieure, vantard',
        'Costaud, ours mal léché, difforme',
        'Espion, déguisement, silhouette banale',
        'Alcoolique, hostile, fort',
        'Soldat, planification, tactique',
        'Boxeur, résistant à la douleur, endurci',
        'Protecteur, inquiet, attentif',
        'Emporté, sous pression, émotif',
        'Politicien, manipulateur, réactif',
        'Adore les ragots, curieux, fouineur'
    ],
    Special_attribute: [
        'Sportif',
        'Puéril',
        'Talentueux',
        'Beauté à couper le souffle',
        'Impatient',
        'Ami des bêtes',
        'Fanatique',
        'Malin',
        'Tir précis',
        'Bricoleur',
        'Chef exigeant',
        'Influent',
        'Indifférent',
        'Charismatique',
        'Imaginatif',
        'Linguiste',
        'Loyal',
        'Concentré sur son objectif',
        'Mélancolique',
        'Détraqué',
        'Malveillant',
        'Innocence feinte',
        'Expert en survie',
        'Paranoïaque',
        'Programmeur',
        'Psychologie',
        'Assurance',
        'Terrifiant',
        'Caméléon',
        'Alcoolisme',
        'Stratégie',
        'Costaud',
        'Vigilant',
        'Violent',
        'Éloquence',
        'Curiosité'
    ],
}

const creatures = {
    Rongeur: [
        'Discret 2', 'Vigilant 2', 'Esprit de meute 2'
    ],
    Lievre_Renard: [
        'Rapide 3'
    ],
    Rapace: [
        'Vol 3', 'Bec acéré 2'
    ],
    Chien_de_chasse: [
        'Morsure féroce 2', 'Rapide 2'
    ],
    Chien_de_garde: [
        'Excellente ouïe 2', 'Morsure féroce 2', 'Loyal 3'
    ],
    Loup: [
        'Esprit de meute 2', 'Morsure féroce 2', 'Odorat 2'
    ],
    Glouton_Blaireau: [
        'Morsure féroce 3', 'Tenace 2'
    ],
    Chevreuil_Cheval: [
        'Vigilant 2', 'Rapide 2'
    ],
    Elan_Cerf: [
        'Gros 2', 'Ramure perforante 2'
    ],
    Ours: [
        'Gros 2', 'Morsure féroce 3', 'Griffes acérées 2'
    ],
    Serrure_electronique: [
        'Mécanisme complexe 2'
    ],
    Systeme_d_alarme: [
        'Capteurs perfectionnés 2'
    ],
    Systeme_de_surveillance: [
        'Détecteur de mouvements 2'
    ],
    Robot_de_securite: [
        'Capteurs perfectionnés 2', 'Structure métallique 2'
    ],
    Cargo_Robot_pompier: [
        'Hydrauliques puissants 2', 'Châssis massif 3', 'Structure métallique 3'
    ],
    Drone_de_surveillance: [
        'Capteurs perfectionnés 3', 'Vol 2'
    ],
    Petit_dinosaure: [
        'Rapide 2'
    ],
    Velociraptor: [
        'Bête féroce 3', 'Rapide comme l’éclair 3'
    ],
    Pterodactyle: [
        'Bête féroce 2', 'Vol 2'
    ],
    Stegosaure_TRex: [
        'Bête féroce 3', 'Tenace 2'
    ],
    Zombie: [
        'Mort-vivant 2', 'Excellente ouïe 2'
    ],
    Momie: [
        'Mort-vivant 3'
    ],
    Fantome: [
        'Invisible 2', 'Terrifiant 2'
    ],
    Poltergeist: [
        'Invisible 3', 'Terrifiant 2', 'Télékinésie 2'
    ],
    Plante_carnivore_geante: [
        'Terrifiant 2', 'Séduction 2'
    ],
    Lianes_empoisonnees: [
        'Terrifiant 2', 'Tentacules empoisonnés 2', 'Nuage de spores 2'
    ],
    Plante_humanoide: [
        'Tentacules 2', 'Camouflage 2', 'info3'
    ],
    Monstre_a_tentacules: [
        'Terrifiant 3', 'Tentacules visqueux 3'
    ],
    Myriapode_geant: [
        'Terrifiant 3', 'Morsure féroce 2', 'Massif 2'
    ],
    Lutin_Gobelin: [
        'Invisible 2', 'Sournois 2', 'info3'
    ],
    Gelee_informe: [
        'Terrifiant 2', 'Vision fantasmagorique 2', 'Malléable 3'
    ],
    Creature_venue_d_un_portail_OW1: [
        'Terrifiant 2', 'Force surhumaine 3'
    ],
    Creature_venue_d_une_autre_dimension_DIM9: [
        'Terrifiant 2', 'Massif 3', 'Tentacules 2'
    ]

}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const generator = () => {
    // Random Antagonist
    const randomAntagonistCategory = getRandomInt(antagonist.length);
    const randomAntagonist = getRandomInt(antagonist[randomAntagonistCategory].length);
    const getRandomAntagonist = antagonist[randomAntagonistCategory][randomAntagonist];
    console.log(getRandomAntagonist)
    // Motivation or Instinct
    const randomBehaviourCategory = getRandomInt(behaviour.length);
    const randomBehaviour = getRandomInt(behaviour[randomBehaviourCategory].length);
    const getRandomBehaviour = behaviour[randomBehaviourCategory][randomBehaviour];
    console.log(getRandomBehaviour);
    // Event & Anomalies
    // -- Event
    const randomEvent = getRandomInt(phenomena[0].length);
    const getRandomEvent = phenomena[0][randomEvent];
    console.log(getRandomEvent)
    // - Anomalies
    const randomAnomalies = getRandomInt(phenomena[1].length);
    const getRandomAnomalies = phenomena[1][randomAnomalies];
    console.log(getRandomAnomalies);
    // Organisation & Implications
    // -- Organisation
    //console.log(organizations_involved);
    const randomOrganisation = getRandomInt(organizations_involved[0].length);
    const getRandomOrganisation = organizations_involved[0][randomOrganisation];
    console.log(getRandomOrganisation)
    // -- Implications 
    const randomImplication = getRandomInt(organizations_involved[1].length);
    const getRandomImplication = organizations_involved[1][randomImplication];
    console.log(getRandomImplication);







}

generator()