<?php
add_theme_support('post-thumbnails');
function Products(){
    register_post_type('products', array(
        'labels' => array(
            'name' => __('محصولات'),
            'singular_name' => __('محصول'),
            'add_new' => __( 'افزودن محصول'),
		    'add_new_item' => __( 'افزودن محصول')
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title','editor','custom-fields','thumbnail')
    ));
	register_taxonomy_for_object_type('category','products');
}
add_action('init','Products');
function add_theme_scripts() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );

	wp_enqueue_script( 'tailwind', get_template_directory_uri() . '/tailwind.js', array(), '1.0.0', true );
	wp_enqueue_script( 'script-main', get_template_directory_uri() . '/script.js', array('tailwind'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );