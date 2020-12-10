<?php

declare(strict_types = 1);

namespace App\Service;

use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;

/**
 * Class TheMovieDBApiService
 * @package App\Service
 */
class TheMovieDBApiService
{
    private HttpClientInterface $httpClient;
    private ?string $theMovieDBApiKey;
    private string $endpoint;

    /**
     * TheMovieDBApiService constructor.
     * @param HttpClientInterface $httpClient
     * @param string|null $theMovieDBApiKey
     */
    public function __construct(HttpClientInterface $httpClient, ?string $theMovieDBApiKey = null)
    {
        $this->httpClient = $httpClient;
        $this->theMovieDBApiKey = $theMovieDBApiKey;
        $this->endpoint = 'https://api.themoviedb.org/3/';
    }

    /**
     * @param string $mediaType
     * @param string|null $title
     * @return ResponseInterface
     * @throws TransportExceptionInterface
     */
    public function search(string $mediaType = 'movie', string $title = null): ResponseInterface
    {
        $finalEndPoint = sprintf(
            $this->endpoint . "search/%s?api_key=%s",
            $mediaType,
            $this->theMovieDBApiKey
        );

        return $this->httpClient->request('GET', $finalEndPoint, [
            'query' => [
                'query' => $title
            ]
        ]);
    }

    /**
     * @param string $mediaType
     * @return ResponseInterface
     * @throws TransportExceptionInterface
     */
    public function popular(string $mediaType = 'movie'): ResponseInterface
    {
        $finalEndPoint = sprintf(
            $this->endpoint . "%s/popular?api_key=%s",
            $mediaType,
            $this->theMovieDBApiKey
        );

        return $this->httpClient->request('GET', $finalEndPoint);
    }

    /**
     * @param string $mediaType
     * @return ResponseInterface
     * @throws TransportExceptionInterface
     */
    public function genres(string $mediaType = 'movie'): ResponseInterface
    {
        $finalEndPoint = sprintf(
            $this->endpoint . "genre/%s/list?api_key=%s",
            $mediaType,
            $this->theMovieDBApiKey
        );

        return $this->httpClient->request('GET', $finalEndPoint);
    }

    /**
     * @param string $movieId
     * @param string $mediaType
     * @return ResponseInterface
     * @throws TransportExceptionInterface
     */
    public function details(string $movieId, string $mediaType = 'movie'): ResponseInterface
    {
        $finalEndPoint = sprintf(
            $this->endpoint . "%s/%s?api_key=%s",
            $mediaType,
            $movieId,
            $this->theMovieDBApiKey
        );
        return $this->httpClient->request('GET', $finalEndPoint);
    }

    /**
     * @param string $mediaType
     * @return ResponseInterface
     * @throws TransportExceptionInterface
     */
    public function trending(string $mediaType = 'movie'): ResponseInterface
    {
        $finalEndPoint = sprintf(
            $this->endpoint . "trending/%s/week?api_key=%s",
            $mediaType,
            $this->theMovieDBApiKey
        );
        return $this->httpClient->request('GET', $finalEndPoint);
    }
}
