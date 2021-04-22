<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;


class ApiCallController extends Controller
{
    //

    function peopleApi() 
    {
        $response = Http::withOptions(['verify' => false])->get("https://swapi.dev/api/people/");

        return $response->body();
    }


}
