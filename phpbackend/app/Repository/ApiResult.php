<?php

namespace app\Repository;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Carbon\Carbon;

class ApiResult
{
    CONST CACHE_KEY = 'RESULT';

    //disabled cert verification for Api call functions as Guzzlehttp will fail to auth the cert.  A different approach would be taken under Prod Env. 

    //calls swapi by category and page number
    public function apiget($callType, $pageNum) 
    {
        $key = "all.{$callType}.{$pageNum}";
        $cacheKey = $this->getCacheKey($key);
        $page = '?page='.$pageNum;

        return cache()->remember($cacheKey, Carbon::now()->addMinutes(15), function() use($callType, $page) {
            $response = Http::withOptions(['verify' => false])->get("https://swapi.dev/api/$callType/$page")->body();
            return $response;
        });
    }

    //calls swapi by category and with a keyword
    public function apiSearch($callType, $ref) 
    {
        $response = Http::withOptions(['verify' => false])->get("https://swapi.dev/api/$callType/?search=$ref");

        return $response;
    }

    //creates final Cache Key used to identify cache data.
    public function getCacheKey($key)
    {
        $key = strtoupper($key);
        return self::CACHE_KEY .".$key";
    }
}