<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;

class Comics extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'thumbnail',
        'description'
    ];

    public function fetchComics()
    {
        $client = new Client();
        $ts = time();
        $publicKey = env('MARVEL_API_KEY');
        $privateKey = env('MARVEL_PRIVATE_KEY');
        $hash = md5($ts . $privateKey . $publicKey);

        $response = $client->request('GET', env('MARVEL_GATEWAY') . '/v1/public/comics', [
            'query' => [
                'ts' => $ts,
                'apikey' => $publicKey,
                'hash' => $hash
            ],
        ]);

        return json_decode($response->getBody()->getContents())->data->results;
    }
}
