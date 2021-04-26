<?php

namespace App\Http\Controllers;

use Facades\App\Repository\ApiResult;


class ApiCallController extends Controller
{
    //this function will get the Api data through ApiResult Class which is caching the data.  The function passes on 2 variables (data type and page number).

    function apiCall($callType, $pageNum) 
    {
        $response = ApiResult::apiget($callType, $pageNum);

        return $response;
    }

    //This function passes 2 variables (data type and search keyword).

    function apiSearchCall($callType, $ref) 
    {
        $response = ApiResult::apiSearch($callType, $ref);

        return $response;
    }

}
