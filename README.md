# Docker Comandos 🐋

## crear imagen 📷

Sintaxis

> docker build [opciones] nombre_imagen directorio_fuente

```bash
docker build -t nombre-imagen .
```

> crear imagen sin nombre

```bash
docker build  .
```

## listar imagenes 📷

```bash
docker image ls
```

## eliminar imagen ❌

Sintaxis

> docker image rm id_imagen

```bash
docker image rm 27b12019bcac
```

## Crear contenedor 🐋

Sintaxis

> docker run [opciones] --name nombre_contenedor nombre_imagen

```bash
docker run -d --name nombre-contendor nombre-imagen
```

> asignar un puerto de reenvio

Sintaxis

> docker run -p puerto_local:puerto_contenedor

```bash
docker run -p 4000:3000 -d --name nombre-contendor nombre-imagen
```

## listar contenedores 📃

```bash
docker ps
```

## Eliminar contenedor ❌🐋

Sintaxis

> docker rm [opciones] nombre_contenedor

```bash
docker rm -f nombre-contendor
```
