<?php

namespace Drupal\highlight_block\Services;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Language\LanguageManager;
use Drupal\file\Entity\File;

/**
 * Class FetchHighlightNodes.
 */
class FetchHighlightNodes {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * {@inheritdoc}
   */
  protected $highlighNode;

  /**
   * Constructs an BP MenuLinkTreeManipulators object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entity type manager.
   */
  public function __construct(EntityTypeManagerInterface $entityTypeManager) {
    $this->entityTypeManager = $entityTypeManager;
    $this->highlighNode = \Drupal::service('entity.repository')->getTranslationFromContext(current($this->entityTypeManager->getStorage('node')->loadByProperties(['type' => 'headline', 'promote' => true])));
  }

  /**
   * {@inheritdoc}
   */
  public function getText() {
    return [
      '#type' => 'processed_text',
      '#text' => $this->highlighNode->body->value,
      '#format' => $this->highlighNode->body->format,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getImages() {
    $images = [];
    foreach ($this->highlighNode->field_images as $key => $image) {
      $images[$key] = file_create_url(current($image->entity->field_header_images->referencedEntities())->getFileUri());
    }
    return array_reverse($images);
  }

}