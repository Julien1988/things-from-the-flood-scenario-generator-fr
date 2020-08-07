const antagonist = {
    Humain: [
        'Savant névrosé',
        'Serviteur captif',
        'Philanthrope fou',
        'Stratège impitoyable',
        'Victime psychotique',
        'Artiste passionné'

    ],
    Animal: [
        'Insectes',
        'Prédateur',
        'Herbivores craintifs',
        'Reptiles égarés',
        'Groupe de petits nuisibles',
        'Oiseaux sauvages'
    ],
    Vegetal: [
        'Plantes empoisonnées',
        'Plantes intelligentes',
        'Plantes carnivores',
        'Plantes à croissance accélérée',
        'Lianes étrangleuses',
        'Spores ou pollen'
    ],
    Machine: [
        'Turbine flottante',
        'Poteau ou antenne',
        'Machine souterraine',
        'Plateforme flottante',
        'Sphère d’écho ou cube',
        'Anneaux de vibration'
    ],
    Intelligence_artificielle: [
        'Cyborg',
        'Virus informatique',
        'Nano robots',
        'Robot autonome',
        'Super ordinateur',
        'Esprit ruchet'
    ],
    Creature: [
        'Animal préhistorique',
        'Mort-vivant',
        'Monstre mythique',
        'Technologie bio-infectée',
        'Entité paranormale',
        'Extraterrestres'
    ]
}

const behaviour = {
    Motivation: [
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
    Instinct: [
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
}

const phenomena = {
    Evenements: [
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
    Anomalies: [
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
}

const organizations_involved = {
    Organisation: [
        'Puissance étrangère',
        'Secte ou culte',
        'Riksenergi [DARPA]',
        'FOA [DART]',
        'Armée ou police',
        'Puissance surnaturelle'
    ],
    Implication: [
        'Responsabilité',
        'Enquête',
        'Protection',
        'Contrôle',
        'Auteur',
        'Incident'
    ],
}

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
        'test',
        'test',
        'test',
        'test',
        'test',
        'test'
    ],
    Des_animaux: [
        'test',
        'test',
        'test',
        'test',
        'test',
        'test'
    ],
    Des_creatures: [
        'test',
        'test',
        'test',
        'test',
        'test',
        'test'
    ],
    Des_impressions: [
        'test',
        'test',
        'test',
        'test',
        'test',
        'test'
    ],
    Des_objets: [
        'test',
        'test',
        'test',
        'test',
        'test',
        'test'
    ],
    Des_evenements: [
        'test',
        'test',
        'test',
        'test',
        'test',
        'test'
    ],

}


console.log(clues)