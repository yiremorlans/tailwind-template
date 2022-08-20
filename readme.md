This is a guide for initializing a tailwindcss project.

- Visit the docs : https://tailwindcss.com/docs/installation 

- npm install -D tailwindcss : installs tailwind as a dependency

- npx tailwindcss init : creates tailwind config file

- npm init : allows you to add your tailwind css dev build script

- Configure your template path within your tailwind.config.js, under content: [] by including your html and js file. NO .css

- Add the Tailwind directives to your style.css file 

- Use the npx script to start the tailwind CLI build process. The --watch flag allows for automatic reload of classes when html is saved. 

- npx tailwindcss -i ./styles/style.css -o ./styles/tailwind.css --watch

- Start using tailwind in your index.html

- You can still add css styles to your style.css. They will be rendered into your tailwind.css

- Alternatively you can npm install and this template will be ready to go.

