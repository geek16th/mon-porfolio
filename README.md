# Portfolio de Al Hassane Ba

Bienvenue sur mon portfolio en ligne !  
Ce site présente mes projets, compétences et réalisations dans le domaine du développement web, réseau et cybersécurité.

---

## À propos de moi
Je suis **Al Hassane Ba**, passionné par la cybersécurité et les reseaux.  
Je suis actuellement etudiant en **Telecommunication et Reseaux a l'Ecole Superieure Polytechnique de DAKAR**.

---

## Projets présentés
Voici quelques projets que vous pouvez découvrir sur ce portfolio :

1. **Projet de virtualisation réseau (SDN)**  
   - Mise en place d’un réseau SDN avec OpenvSwitch et Ryu dans Proxmox  
   - Technologies : SDN, Docker, Virtualisation réseau  

2. **Réseau de téléphonie IP avec Asterisk**  
   - Création d’un réseau IP pour faciliter la communication entre départements de l’ESP  
   - Technologies : Linux, Asterisk, VLAN, Protocole IP  

3. **Portfolio créatif**  
   - Site avec animations CSS avancées, design responsive et optimisation SEO  
   - Technologies : HTML5, CSS3, JavaScript  

4. **Système de surveillance et d’analyse réseau**  
   - Interface web pour surveiller la bande passante, les hôtes et les alertes  
   - Technologies : Python, MySQL, JavaScript, Frontend/Backend  

5. **Configuration d’équipements réseau Cisco et Huawei**  
   - Configuration de routeurs et switchs pour serveur DHCP  
   - Technologies : Cisco, Huawei, Protocole IP  

---

## Compétences techniques
- **Développement web :** HTML, CSS, JavaScript 
- **Backend :** Python 
- **Base de données :** MySQL  
- **Réseaux :** VLAN, SDN, Cisco, Huawei, Asterisk, pile TCP/IP  
- **Outils :** Git, VS Code, Linux  

---

## Installation / Visualisation
1. Cloner le dépôt :  
```bash
git clone https://github.com/geek16th/mon-porfolio.git
cd mon-porfolio
```
2. Ouvrir `index.html` dans un navigateur, ou lancer un serveur local pour tester les chemins et les modules JavaScript :
```bash
python -m http.server 8000
```
Puis ouvrir <http://localhost:8000>.

## Organisation

```text
index.html              # Page principale
site.webmanifest        # Configuration PWA
CNAME                   # Domaine GitHub Pages
assets/
   images/               # Photos, illustrations et aperçus de projets
   documents/            # CV, rapports et autres PDF
   icons/                # Favicons et icônes PWA
   js/                   # Scripts JavaScript réutilisables
```

## Bonnes pratiques

- Utiliser des chemins relatifs depuis `index.html` pour que le site fonctionne sur GitHub Pages et en local.
- Ajouter un texte `alt` descriptif à chaque image et compresser les images avant publication.
- Placer les nouveaux fichiers dans le dossier `assets` adapté, plutôt qu'à la racine.
- Tester les liens, les images et la version mobile avant chaque publication.
- Garder les secrets hors du dépôt : EmailJS doit utiliser une clé publique et aucune clé privée ne doit être ajoutée au code client.
