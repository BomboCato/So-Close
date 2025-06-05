# So-Close

## Membres du Groupe 25

**Username**: Shamoun Marie  
**Login**: marie.shamoun

**Username**: Guellec Briac  
**Login**: briac.guellec

## Déploiement sur VM

```bash
npm run build
scp -i ../ssh_key -r dist/* sigl@so-close.groupe25.socra-sigl.fr:/home/sigl/
ssh sigl@groupe25.socra-sigl.fr -i /chemin/vers/ssh_key

sudo cp -r /home/sigl/* /var/www/so-close/
sudo systemctl restart nginx
```

# Déploiement Continu de l'application So-Close

### Fichier deploy.yml

Nous avons créer un fichier deploy.yml permettant de gérer le déploiement automatisé. Celui-ci, contenant appleboy pour pouvoir déployer via SCP.

### Secrets GitHub

Sur GitHub, nous avons ajouté les secrets nécessaires à notre pipeline CI/CD: aller dans **Settings > Secrets and variables > Actions > Repository secrets** et ajouter les secrets suivants :

- **`HOST`** : so-close.groupe25.socra-sigl.fr.
- **`USER`** : L'utilisateur SSH.
- **`SSH_KEY`** : La clé privée SSH.

## Étapes du pipeline de déploiement

### 1. Créer le `Dockerfile`

À la racine du projet, créez un fichier `Dockerfile` pour conteneuriser l'application :

```Dockerfile
# Utiliser une image de base Nginx
FROM nginx:alpine

# Copier le contenu du dossier dist dans le dossier de Nginx
COPY dist/ /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80
```

### 2. Construire l'image Docker
docker build -t so-close-image

### 3. Execution du conteneur
docker run -d --name so-close-container -p 80:80 so-close-image
