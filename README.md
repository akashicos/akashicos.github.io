# akashicos.github.io (dirección antigua)

Akashicos se ha mudado a <https://akashicos.gofiodesign.eu>. Este repo público solo contiene el aviso de mudanza:

- `index.html` y `404.html`: explican la mudanza y llevan a la nueva dirección. Las personas guardadas y los datos de «yo» viajan en el enlace (tras el `#`, sin pasar por ningún servidor) y la app los recoge con `js/migrar.js`.
- `sw.js`: sustituye al service worker de la app antigua, borra su copia sin conexión y se da de baja, para que quien la tenga instalada vea el aviso.
