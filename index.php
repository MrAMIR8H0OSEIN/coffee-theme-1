<?php get_header(); ?>

<div id="content" class="max-w-[600px] m-auto">
    <img class="w-[400px] m-auto p-10" src="https://teamgraphic.ir/upload/920/files/aV8troYy/2ltJGTLX.png" alt="logo">
    <img id="menu-button" class="w-[120px] m-auto mt-10" src="<?php echo get_template_directory_uri() . '/img/ico_463_1638362258.png' ?>" alt="menu">
    <div id="socials" class="flex items-center w-full justify-center mt-20">
        <img class="bg-[#A17B3E] rounded-[20px] w-[50px] h-[50px] m-1" src="http://senso.qrmenusaz.com/Temp/rest_phone.png">
        <img class="bg-[#A17B3E] rounded-[20px] w-[50px] h-[50px] m-1" src="http://senso.qrmenusaz.com/Temp/rest_phone.png">
        <img class="bg-[#A17B3E] rounded-[20px] w-[50px] h-[50px] m-1" src="http://senso.qrmenusaz.com/Temp/rest_phone.png">
    </div>
</div> 
<div id="content-2" style="display: none;" class="max-w-[600px] m-auto">
    <div id="menu" class="flex flex-row-reverse">
        <div id="menu-bar" class="flex flex-col gap-5 mt-[10px] ml-[10px] mr-[5px] top-0 h-full fixed overflow-y-auto overflow-x-hidden">
            <a href="#back" id="back-button" class="text-white text-center block hover:bg-[#A17B3E] p-2 rounded-[10px] relative">بازگشت</a>
                <?php $args = array(
                        'taxonomy' => 'category',
                        'hide_empty' => false,
                        'parent' => 0
                    ); 
                    $terms = get_terms($args);
                    foreach($terms as $term){
                    ?>
                            
                            <a href="#menu-<?php echo $term->term_id; ?>" class="block items w-[73px] h-[73px] hover:bg-[#A17B3E] p-2 rounded-[10px] relative">
                                <img class="w-[45px] h-[60px] m-auto" src="<?php echo $term->description;  ?>">
                            </a>
                        
                    <?php   }
                    ?>
        </div>
        <div id="menu-content" class="w-full ml-[95px] mr-[10px] flex flex-col">
            <?php foreach($terms as $term){

                        $args = array('post_type' => 'products',
                            'cat' => $term->term_id,
                        ); 
                        $the_query = new WP_Query( $args );
                    ?>    
                            <div id="menu-<?php echo $term->term_id; ?>" class="items">
                                <div class="header bg-[#A17B3E] rounded-lg p-2 mt-[10px]"><p class="text-white text-center"><?php echo $term->name; ?></p></div>
                                <?php if ( $the_query->have_posts() ) {
                            while ( $the_query->have_posts() ) {
                                $the_query->the_post();?>
                                    <div id="menu-c-<?php echo $post->ID; ?>" class="items rounded-[5px] border-b-[1px] border-[#A17B3E] p-3 bg-[#011810] mt-5">
                                        <img class="w-full" src="<?php echo get_the_post_thumbnail_url(); ?>">
                                        <h3 class="text-[#A17B3E] mt-3"><strong><?php the_title(); ?></strong></h3>
                                        <p class="text-white mt-2"><?php echo get_the_content(); ?></p>
                                        <div class="price text-white text-left">تومان <span><?php echo get_post_meta($post->ID, 'price', true) ?></span></div>
                                        <div class="button hover:cursor-pointer text-white text-center bg-black rounded-lg mt-3 p-2">افزودن به یادداشت</div>
                                    </div>
                                <?php }} ?>
                            </div>
                    <?php }
                    ?>   
        </div>
    </div>
    <div id="orders-number" style="display: none;" class="hover:cursor-pointer w-full fixed bottom-0 right-0 text-center bg-black text-white p-5">مشاهده دفترچه یادداشت<div id="num" class="inline-block bg-[#A17B3E] px-2 rounded-full mr-2">5</div></div>
</div>
<div id="content-3" style="display: none;" class="max-w-[600px] m-auto bg-white  min-h-[100vh] block">
    <div id="header-c" class="flex justify-between px-4 pt-2">
        <p><strong>دفترچه یادداشت</strong></p>
        <p id="close-poup" class="hover:cursor-pointer">×</p>
    </div>
    <div id="cal-replace-js">
        <div class="content flex flex-col px-2 gap-2 mt-2"></div>
        <div class="final-price text-center bg-zinc-200 m-2 rounded-xl"></div>
    </div>
</div>

<?php get_footer(); ?>