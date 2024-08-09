<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @viteReactRefresh 
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @routes
        @inertiaHead
    </head>
    <body style="background-color:#f3f4f6;color:#475569">
        @inertia
    </body>
</html>