<?php

declare(strict_types = 1);

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class MoviesControllerTest extends WebTestCase
{
    protected KernelBrowser $client;
    protected string $endpoint = '/api/movies';

    public function setUp(): void
    {
        $this->client = static::createClient();
        parent::setUp();
    }

    public function testDiscover(): void
    {
        $this->client->request('GET', $this->endpoint . '/discover');
        self::assertResponseIsSuccessful();
        self::assertResponseStatusCodeSame(Response::HTTP_OK);
    }

    public function testTrending(): void
    {
        $this->client->request('GET', $this->endpoint . '/trending');
        self::assertResponseIsSuccessful();
        self::assertResponseStatusCodeSame(Response::HTTP_OK);
    }

    public function testGenres(): void
    {
        $this->client->request('GET', $this->endpoint . '/genres');
        self::assertResponseIsSuccessful();
        self::assertResponseStatusCodeSame(Response::HTTP_OK);
    }

    public function testShow(): void
    {
        $this->client->request('GET', $this->endpoint . '/82856');
        self::assertResponseIsSuccessful();
        self::assertResponseStatusCodeSame(Response::HTTP_OK);
    }

    public function testSearch(): void
    {
        $this->client->request('POST', $this->endpoint . '/search', [
            'title' => 'Avengers'
        ]);

        self::assertResponseIsSuccessful();
        self::assertResponseStatusCodeSame(Response::HTTP_OK);
    }
}
