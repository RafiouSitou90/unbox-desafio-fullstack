<?php

declare(strict_types = 1);

namespace App\Controller;

use App\Service\TheMovieDBApiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

/**
 * Class MoviesController
 * @package App\Controller
 * @Route("/movies", name="api_movies_")
 */
class MoviesController extends AbstractController
{
    protected string $mediaType = 'movie';
    private TheMovieDBApiService $theMovieDBApiService;

    /**
     * MoviesController constructor.
     * @param TheMovieDBApiService $theMovieDBApiService
     */
    public function __construct(TheMovieDBApiService $theMovieDBApiService)
    {
        $this->theMovieDBApiService = $theMovieDBApiService;
    }

    /**
     * @Route("/discover", name="discover", methods={"GET"})
     *
     * @return JsonResponse
     * @throws ClientExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws ServerExceptionInterface
     * @throws TransportExceptionInterface
     */
    public function discover(): JsonResponse
    {
        $response = $this->theMovieDBApiService->popular($this->mediaType);

        return $this->json($response->toArray(), Response::HTTP_OK);
    }

    /**
     * @Route("/{movieId<\d+>}", name="show", methods={"GET"})
     *
     * @param string $movieId
     * @return JsonResponse
     * @throws ClientExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws ServerExceptionInterface
     * @throws TransportExceptionInterface
     */
    public function show(string $movieId): JsonResponse
    {
        $response = $this->theMovieDBApiService->details($movieId, $this->mediaType);
        return $this->json($response->toArray(), Response::HTTP_OK);
    }

    /**
     * @Route("/search", name="search", methods={"POST"})
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ClientExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws ServerExceptionInterface
     * @throws TransportExceptionInterface
     */
    public function search(Request $request): JsonResponse
    {
        $title = $request->request->get('title');
        $response = $this->theMovieDBApiService->search($this->mediaType, $title);

        return $this->json($response->toArray(), Response::HTTP_OK);
    }

    /**
     * @Route("/trending", name="trending", methods={"GET"})
     *
     * @return JsonResponse
     * @throws ClientExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws ServerExceptionInterface
     * @throws TransportExceptionInterface
     */
    public function trending(): JsonResponse
    {
        $response = $this->theMovieDBApiService->trending($this->mediaType);
        return $this->json($response->toArray(), Response::HTTP_OK);
    }

    /**
     * @Route("/genres", name="genres", methods={"GET"})
     *
     * @return JsonResponse
     * @throws ClientExceptionInterface
     * @throws DecodingExceptionInterface
     * @throws RedirectionExceptionInterface
     * @throws ServerExceptionInterface
     * @throws TransportExceptionInterface
     */
    public function genres(): JsonResponse
    {
        $response = $this->theMovieDBApiService->genres($this->mediaType);
        return $this->json($response->toArray(), Response::HTTP_OK);
    }
}
