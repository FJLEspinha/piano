# Pureba la aplicacion
https://fjlespinha.github.io/piano/
# Empaquetado web

 - Tengo ofuscación 
 - Tengo mimificación
 - Tengo compresión de imagenes
 - Tree shaking -> tecnica en la que el sistema analiza el codigo y lo que no es necesario, lo quita
 - Tengo preprocesadores de css (scss)
 - Tengo frameworks de css (Tailwind)
 - Tengo frameworks web (react, vue)
 - Uso de lenguajes que no sean javascript (Typescript, jsx)
 - Tengo mecanismos de optimizacion del código
 - Servidor web de pruebas
 - Testing
 - etc etc
 - Todo esto lo ofrece los empaquetadores web, no lo pudimo hacer en vanilla

# Empaquetadores famosos

- webpack (era el empaquetador hasta 2021 empieza su ocaso, más o menos) Es complejo de usar y curva de aprendizaje dura
- rollup
- wmr
- esbuilt
- parcel
- snowpack
- * vite (en 2022 va a ser el empaquetador que todos van a usar). Este y parcel son sencillos de usar

# Pasos

## Crear un proyecto node a partir de npm
npm init 

## Añadir la dependencia con tonejs (dependencia de produccion)
npm install tone

## Añadir el empaquetador parcel (dependencia de desarrollo)
npm install -D parcel (forma corta)
npm instal --save-dev parcel (forma larga)
-D de desarrollo

## Construimos y arrancamos la aplicacion
npx parcel src/index.html
npx parcel build src/index.html

El bundle creado esta en la carpeta dist, es lo que hay que subir al servidor

## Añadimos la librería react
npm install react react-dom

# Comitear a github
git init
git add .
git commit -m "mesage"
git remote add origin url
git push origin master
