<?php get_header(); ?>

<?php if ( have_posts() ) : ?>

	<?php while ( have_posts() ) : the_post(); ?>
		<h2>
			<a href="<?=get_the_permalink();?>"><?= get_the_title(); ?></a>
		</h2>
		<small>by <?= get_the_author(); ?></small>
		<p><?= get_the_content(); ?></p>
	<?php endwhile; ?>

<?php endif; ?>
<?php get_footer(); ?>
