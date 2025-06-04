Username: Shamoun Marie 
login: marie.shamoun
Username: Guellec Briac
login: briac.guellec

# Déploiement sur VM

npm run build
scp -i ../ssh_key -r dist/* sigl@so-close.groupe25.socra-sigl.fr:/home/sigl/
ssh sigl@groupe25.socra-sigl.fr -i /chemin/vers/ssh_key

sudo cp -r /home/sigl/* /var/www/so-close/
sudo systemctl restart nginx


