<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <script>
        const APP_URL = {!! json_encode(url('/')) !!};
    </script>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styling -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item @if(Route::currentRouteName() === "homepage") active @endif">
                    <a class="nav-link" href="{{ url('/') }}">Home</a>
                </li>
                <li class="nav-item @if(Route::currentRouteName() === "student-registration") active @endif">
                    <a class="nav-link" href="{{ url('/student-registration') }}">
                        Student Registration
                    </a>
                </li>
                <li class="nav-item @if(Route::currentRouteName() === "fee-payment") active @endif">
                    <a class="nav-link" href="{{ url('fee-payment') }}">Fee Payment</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Payment Records</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                </li>
            </ul>
        </div>
    </nav>
    @yield('main')
</body>

</html>