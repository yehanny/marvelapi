<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFavoritesRequest;
use App\Http\Requests\UpdateFavoritesRequest;
use App\Models\Favorites;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FavoritesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Favorites::all();

        return Inertia::render('Favorites', [
            'favorites' => $data
        ]);
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
    public function store(StoreFavoritesRequest $request)
    {
        try {
            $data = $request->validate([
                'title' => 'required|string',
                'issueNumber' => 'required|numeric',
                'thumbnailUrl' => 'required|string',
                'marvelId' => 'required|numeric|unique:favorites,marvelId',
            ]);

            Favorites::create($data);

            return response()->json(['message' => 'Comic added to favorites.']);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Favorites $favorites)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Favorites $favorites)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFavoritesRequest $request, Favorites $favorites)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Favorites $favorites)
    {
        //
    }
}
