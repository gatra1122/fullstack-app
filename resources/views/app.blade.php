<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @viteReactRefresh 
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @routes
        @inertiaHead
        <link rel="icon" type="image/x-icon" href="/assets/img/vite.svg">
    </head>
    <body>
        @inertia
    </body>
</html>