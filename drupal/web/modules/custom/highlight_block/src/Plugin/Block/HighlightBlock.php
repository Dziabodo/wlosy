<?php

namespace Drupal\highlight_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a Highlight Block.
 *
 * @Block(
 *   id = "highlight_block",
 *   admin_label = @Translation("Highlight Block"),
 *   category = @Translation("Highlight Block"),
 * )
 */
class HighlightBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * {@inheritdoc}
   */
  protected $highlightNode;

  /**
   * @param array $configuration
   * @param string $plugin_id
   * @param mixed $plugin_definition
   * @param \Drupal\highlight_block\Services\FetchHighlightNodes $highlightNode
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition,  $highlightNode) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->highlightNode = $highlightNode;
  }

  /**
   * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
   * @param array $configuration
   * @param string $plugin_id
   * @param mixed $plugin_definition
   *
   * @return static
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('highlight_block.highlight_node')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#theme' => 'highlight_block',
      '#text' => $this->highlightNode->getText(),
      '#images' => $this->highlightNode->getImages()
    ];
  }

}
