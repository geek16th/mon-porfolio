// Improved chatbot responses for Assistant Hassane
function botReply(msg) {
    msg = msg.toLowerCase();
    
    // Réponses sur le CV et résumé
    if (msg.includes("cv") || msg.includes("résumé") || msg.includes("resume")) {
        return "📄 Clique sur le bouton 'Résumé' ci-dessus pour voir mon parcours complet, ou télécharge mon CV directement depuis la section contact !";
    }
    
    // Réponses sur le contact
    if (msg.includes("contact") || msg.includes("email") || msg.includes("téléphone") || msg.includes("joindre")) {
        return "📩 Clique sur 'Contact' ci-dessus pour m'écrire directement, ou retrouve mes coordonnées dans la section contact du site !";
    }
    
    // Réponses sur les compétences
    if (msg.includes("compétence") || msg.includes("skill") || msg.includes("savoir")) {
        return "💻 Je maîtrise les réseaux, la cybersécurité, Linux, Python et le développement web. Consulte la section 'Compétences' pour plus de détails !";
    }
    
    // Réponses sur les projets
    if (msg.includes("projet") || msg.includes("réalisation") || msg.includes("travaux")) {
        return "🚀 J'ai travaillé sur plusieurs projets : SDN avec Proxmox, téléphonie IP avec Asterisk, surveillance réseau, et plus encore. Découvre-les dans la section 'Projets' !";
    }
    
    // Réponses sur la formation
    if (msg.includes("formation") || msg.includes("étude") || msg.includes("diplôme") || msg.includes("école")) {
        return "🎓 Je suis actuellement en DTS Télécom & Réseaux à l'ESP (2024-2026). J'ai aussi plusieurs certifications Cisco et Huawei. Voir la section 'Parcours' !";
    }
    
    // Réponses sur les technologies
    if (msg.includes("technologie") || msg.includes("outil") || msg.includes("langage")) {
        return "🔧 J'utilise Python, C, MySQL, Linux, Docker, Asterisk, et bien d'autres outils pour mes projets réseau et développement !";
    }
    
    // Réponses sur la disponibilité
    if (msg.includes("disponible") || msg.includes("stage") || msg.includes("emploi") || msg.includes("opportunité")) {
        return "✅ Je suis disponible pour des stages et collaborations en réseaux & cybersécurité. N'hésite pas à me contacter !";
    }
    
    // Réponses sur les réseaux sociaux
    if (msg.includes("linkedin") || msg.includes("github") || msg.includes("réseau social")) {
        return "🔗 Retrouve-moi sur LinkedIn (@hassanepro) et GitHub (@geek16th) pour suivre mes projets et mon parcours professionnel !";
    }
    
    // Salutations
    if (msg.includes("bonjour") || msg.includes("salut") || msg.includes("hello") || msg.includes("hi")) {
        return "👋 Salut ! Je suis l'assistant virtuel d'Al Hassane. Comment puis-je t'aider aujourd'hui ? Tu peux me poser des questions sur son parcours, ses compétences ou ses projets !";
    }
    
    // Remerciements
    if (msg.includes("merci") || msg.includes("thanks")) {
        return "😊 De rien ! N'hésite pas si tu as d'autres questions. Bonne visite sur le portfolio !";
    }
    
    // Aide générale
    if (msg.includes("aide") || msg.includes("help") || msg.includes("?")) {
        return "💡 Je peux t'aider à naviguer sur le portfolio ! Demande-moi des infos sur : les compétences, les projets, la formation, le CV, ou comment contacter Al Hassane.";
    }
    
    // Réponse par défaut améliorée
    return "🤖 Je suis là pour t'aider ! Tu peux me demander des infos sur les compétences, les projets, la formation, ou comment contacter Al Hassane. Utilise aussi les boutons ci-dessus pour un accès rapide !";
}
