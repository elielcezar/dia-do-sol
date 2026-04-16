<?php
/**
 * @file
 * Template overrides para o tema Promo Dia do Sol.
 */

/**
 * Implements hook_preprocess_html().
 * Remove CSS e JS desnecessários do Drupal para a LP.
 */
function promo_dia_do_sol_preprocess_html(&$variables) {
  // Remove estilos do core que podem conflitar
  drupal_add_css(drupal_get_path('module', 'system') . '/system.menus.css', array('preprocess' => FALSE, 'every_page' => TRUE, 'type' => 'file', 'group' => CSS_SYSTEM, 'weight' => -10));
}

/**
 * Implements hook_preprocess_page().
 */
function promo_dia_do_sol_preprocess_page(&$variables) {
  // Remove breadcrumb, tabs, sidebars - LP limpa
  $variables['breadcrumb'] = '';
  $variables['tabs'] = '';
  $variables['action_links'] = '';
}
