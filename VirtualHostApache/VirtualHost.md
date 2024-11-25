# VirtualHost de base pour tout les projets

Créer un fichier dans etc/apache2/sites-availables portant le nom "nom-du-fichier.conf"

Copier / coller / adapter le code ci-dessous

```bash
<VirtualHost *:80>
    # Nom de domaine sur lequel on va aller pour accéder à l'application
    ServerName sous-domaine.nom-de-domaine.com
    # Chemin de l'application (racine du serveur web)
    DocumentRoot /var/www/html/Nom-du-dossier/Sous-dossier-dist-public

    # Si utilisation du LexikJWTAuthenticationBundle (à placer dans le VirtualHost 443)
    SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1

    # Emplacement logs Apache
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```