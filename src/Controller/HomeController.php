<?php

namespace App\Controller;

use App\Repository\AdRepository;
use App\Repository\UserRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(AdRepository $adRepo, UserRepository $userRepo)
    {
        return $this->render('home/index.html.twig', [
            'ads' => $adRepo->findBestAds(3),
            'users' => $userRepo->findBestUsers(2)
        ]);
    }
}
