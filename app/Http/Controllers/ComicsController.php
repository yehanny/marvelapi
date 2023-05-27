<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreComicsRequest;
use App\Http\Requests\UpdateComicsRequest;
use App\Models\Comics;
use GuzzleHttp\Client;
use Inertia\Inertia;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

class ComicsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $limit = 10;
        $comicsApi = new Comics();
        $comics = $comicsApi->fetchComics();
        $data = $this->paginate($comics, $limit);

        return Inertia::render('Comics', [
            'comics' => $data
        ]);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function paginate($items, $perPage = 10, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     */
    public function show(Comics $comics)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comics $comics)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateComicsRequest $request, Comics $comics)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comics $comics)
    {
        //
    }
}
