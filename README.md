# Model de Portfolio : Un portfolio simple et efficace à la porté de tous le monde

## Description
Cet élégant portfolio est à la portée de tous, même sans connaissance en programmation.  
Il est développé avec Vite.js en utilisant un template React pour simplifier la mise en place. Le design est optimisé grâce à Tailwind CSS. Aucune compétence en codage n'est nécessaire pour une utilisation optimale. Toutes les données sont stockées dans des fichiers JSON, facilitant ainsi les mises à jour du contenu.  
 De plus, le formulaire de contact est directement connecté à Google Form, rendant son utilisation accessible à tous, quel que soit leur niveau de compétence en informatique.



## Prérequies :
- [NodeJS](https://nodejs.org/fr) doit être installé sur votre systeme
- Une metrise du format de données JSON est requise
- Un Google form est nécessaire


## Lancer le projet :
- Cloner le projet :
``` bash
git clone https://github.com/Roy-Bivash/portfolio-model-1.git
cd portfolio-model-1
```

- Installation des paquets node :
``` bash
npm install
```
- Démarrer le serveur node :
``` bash
npm run dev
```
- Ouvrir `http://127.0.0.1:5173/` sur votre navigateur préféré


## Configuration et Personnalisation :

Pour la configuration et la personnalisation du Portfolio il n'est pas nécessaire de savoir coder.
Toutes modifications et personnalisation se feront depuis un dossier uniquement : `./src/data/`

> #### Important : Toutes les images (png, jpg, ico ...) doivent être heberger et accécible sous forme de lien.

- #### Fichier `profile.json` :
    * Remplir avec vos informations.  
    * Le nom et prenom apparaîtront seulement sur l'onglet du navigateur.  
    * Les informations de contact tel que mail, github et linkedin sont obligatoire.  
    * Le `favicon` doit être sous format .ico  
    * Les competences sont sous le format suivant (Vous pouvez en créer autant que nécessaire) : 
    ``` json
    {
        "nom" : "",
        "img": "lien de l'image"
    }
    ```

- #### Fichier `parcours.json` :
    * Mettre a la suite votre parcours, elles seront affichées à la suite sans être triées  
    * Les parcours sont sous le format suivant (Vous pouvez en créer autant que nécessaire) : 
    ``` json
    {
        "date" : "le format de la date est à votre choix",
        "text": ""
    }
    ```

- #### Fichier `projects.json` :
    * Mettre a la suite vos projets, elles seront affichées à la suite sans être triées  
    * Les projets sont sous le format suivant (Vous pouvez en créer autant que nécessaire) : 
    ``` json
    {
        "id" : "mettre un identifiant different a chaque fois",
        "name": "le apparaitra en premier",
        "titre1": "Sous description du projet",
        "description":"description complete",
        "technologie": "mettre les technologie utilisé",
        "thumbnail":"images qui apparaitra en temps qu'icone du projet",
        "images": ["listes des images d'illustration"]
    }
    ```

- #### Fichier `googleForm.json` :
    A. Créez un Google Form avec les spécifications suivant :  
    *  Titre : `Nom Prenom` - Option : `Réponse courte`
    *  Titre : `Contact` - Option : `Réponse courte`
    *  Titre : `Message` - Option : `Paragraphe`

    B. En haut à droite cliquez sur les 3 petit points puis sur `Obtenir le lien`

    C. Remplire EXACTEMENT comme indiqué ci-dssou : *(Attention à ne pas mettre de majuscule)*  
    * `nomprenom` dans le champ Nom Prenom
    * `contact` dans le champ Contact
    * `message` dans le champ Message  
    
    D. Cliquez sur `obtenir le lien` puis sur `COPIER LE LIEN`  
    E. Une fois le lien obtenu coller le dans le fichier `./src/data/googleForm.json` :
    ``` json
    {
        "url" : "Collez votre lien ici",
    }
    ```

## Production

Pour deployer votre Portfolio il est nécessaire de compiler votre projet pour ensuite pouvoir deposer vos fichier dans votre serveur.

- Compiler le projet grâce à la commande :
``` bash
npm run build
```
- Puis copiez les fichiers du dossier `/dist` dans votre serveur.  
*(Il est important de noter que certain serveur n'accepte pas le fichier `.htaccess` fournie, il vous sera donc nécessaire de le modifier et de l'adapter à votre serveur)*

## Astuces
- Pour héberger vos images (jpeg, png, ico ...) utilisez un sous domaine que vous aurez créer (Un nombre de sous domaine est souvant offert avec votre nom de domaine)

- Libre à vous de modifier le code source du Portfolio


## License
MIT License

Feel free to customize and modify
