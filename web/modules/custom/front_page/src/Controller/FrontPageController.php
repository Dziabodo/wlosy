<?php
namespace Drupal\front_page\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Provides route responses for the front page.
 */
class FrontPageController extends ControllerBase {

  /**
   * Returns a simple page.
   *
   * @return array
   *   A simple renderable array.
   */
  public function front() {
    return [
      '#markup' => ' ',
    ];
  }

}
