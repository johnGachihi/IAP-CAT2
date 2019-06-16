@extends("layouts.app")

@section("main")
    <script>
        const feeRecords = @json($records);
    </script>
    <div id="students-total-fees"></div>
@endsection