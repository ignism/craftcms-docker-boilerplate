#!/bin/sh

if [ ! -f "${APACHE_DOCUMENT_ROOT}" ]; then
    mkdir -p $APACHE_DOCUMENT_ROOT;
fi

{
    echo '# This configuration file enables the default "Welcome" page if there'; \
    echo '# is no default index page present for the root URL.  To disable the'; \
    echo '# Welcome page, comment out all the lines below.'; \
    echo '#'; \
    echo '# NOTE: if this file is removed, it will be restored on upgrades.'; \
    echo '#'; \
    echo '<LocationMatch "^/+$">'; \
    echo '    Options -Indexes'; \
    echo '    ErrorDocument 403 /.noindex.html'; \
    echo '</LocationMatch>'; \
    echo ''; \
    echo '<Directory /var/www/extra>'; \
    echo '    AllowOverride None'; \
    echo '    Require all granted'; \
    echo '</Directory>'; \
    echo ''; \
    echo 'Alias /.noindex.html /var/www/extra/noindex.html'; \
    echo '  #Built in health check'; \
    echo 'Alias /health.html /var/www/extra/health.html'; \
    echo '<VirtualHost *:80>'; \
    echo '	# The ServerName directive sets the request scheme, hostname and port that'; \
    echo '	# the server uses to identify itself. This is used when creating'; \
    echo '	# redirection URLs. In the context of virtual hosts, the ServerName'; \
    echo '	# specifies what hostname must appear in the requests Host: header to'; \
    echo '	# match this virtual host. For the default virtual host (this file) this'; \
    echo '	# value is not decisive as it is used as a last resort host regardless.'; \
    echo '	# However, you must set it for any further virtual host explicitly.'; \
    echo '	#ServerName www.example.com'; \
    echo ''; \
    echo '	ServerAdmin webmaster@localhost'; \
    echo '	DocumentRoot '${APACHE_DOCUMENT_ROOT}; \
    echo ''; \
    echo '	# Available loglevels: trace8, ..., trace1, debug, info, notice, warn,'; \
    echo '	# error, crit, alert, emerg.'; \
    echo '	# It is also possible to configure the loglevel for particular'; \
    echo '	# modules, e.g.'; \
    echo '	#LogLevel info ssl:warn'; \
    echo ''; \
    echo '	ErrorLog ${APACHE_LOG_DIR}/error.log'; \
    echo '	CustomLog ${APACHE_LOG_DIR}/access.log combined'; \
    echo ''; \
    echo '      #rewrite if not https'; \
    echo '      #RewriteCond %{HTTP:X-Forwarded-Proto} !https'; \
    echo '      #RewriteRule (.*) https://%{SERVER_NAME}%{REQUEST_URI} [R,L]'; \
    echo ''; \
    echo '	# For most configuration files from conf-available/, which are'; \
    echo '	# enabled or disabled at a global level, it is possible to'; \
    echo '	# include a line for only one particular virtual host. For example the'; \
    echo '	# following line enables the CGI configuration for this host only'; \
    echo '	# after it has been globally disabled with "a2disconf".'; \
    echo '	#Include conf-available/serve-cgi-bin.conf'; \
    echo '</VirtualHost>'; \
    echo '<VirtualHost *:443>'; \
    echo '	# The ServerName directive sets the request scheme, hostname and port that'; \
    echo '	# the server uses to identify itself. This is used when creating'; \
    echo '	# redirection URLs. In the context of virtual hosts, the ServerName'; \
    echo '	# specifies what hostname must appear in the requests Host: header to'; \
    echo '	# match this virtual host. For the default virtual host (this file) this'; \
    echo '	# value is not decisive as it is used as a last resort host regardless.'; \
    echo '	# However, you must set it for any further virtual host explicitly.'; \
    echo '	#ServerName www.example.com'; \
    echo ''; \
    echo '	SSLEngine on'; \
    echo '	ServerAdmin webmaster@localhost'; \
    echo '	DocumentRoot '${APACHE_DOCUMENT_ROOT}; \
    echo ''; \
    echo '	# Available loglevels: trace8, ..., trace1, debug, info, notice, warn,'; \
    echo '	# error, crit, alert, emerg.'; \
    echo '	# It is also possible to configure the loglevel for particular'; \
    echo '	# modules, e.g.'; \
    echo '	#LogLevel info ssl:warn'; \
    echo ''; \
    echo '      SSLCertificateFile    /var/www/ssl/self-signed.crt'; \
    echo '      SSLCertificateKeyFile /var/www/ssl/self-signed.key'; \
    echo ''; \
    echo '	ErrorLog ${APACHE_LOG_DIR}/error.log'; \
    echo '	CustomLog ${APACHE_LOG_DIR}/access.log combined'; \
    echo ''; \
    echo '	# For most configuration files from conf-available/, which are'; \
    echo '	# enabled or disabled at a global level, it is possible to'; \
    echo '	# include a line for only one particular virtual host. For example the'; \
    echo '	# following line enables the CGI configuration for this host only'; \
    echo '	# after it has been globally disabled with "a2disconf".'; \
    echo '	#Include conf-available/serve-cgi-bin.conf'; \
    echo '</VirtualHost>'; \
    echo '# vim: syntax=apache ts=4 sw=4 sts=4 sr noet'; \
} | tee /etc/apache2/sites-enabled/000-default.conf;
