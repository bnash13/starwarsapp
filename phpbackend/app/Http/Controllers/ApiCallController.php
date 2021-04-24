<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;


class ApiCallController extends Controller
{
    //this function will get params to set the page number and data type being fetch from online API
    //disabled cert verification as Guzzlehttp will fail to auth the cert.  A different approach would be taken under Prod Env. 

    function apiCall($callType, $pageNum) 
    {
        $page = '?page='.$pageNum;
        $response = Http::withOptions(['verify' => false])->get("https://swapi.dev/api/$callType/$page");

        return $response;
    }

    function apiSearchCall($callType, $ref) 
    {
        $response = Http::withOptions(['verify' => false])->get("https://swapi.dev/api/$callType/?search=$ref");

        return $response;
    }

}
