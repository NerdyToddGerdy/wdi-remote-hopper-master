<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' CUENhulQYT|3^$x7-CM>#5PNcssoh*cR~6h^Lagp(8+4C,R-4:EyV:;.hiGlI6=');
define('SECURE_AUTH_KEY',  '%d_gSU.PCZmg6.i moYv@6rL.[9<L-iF;Fk&17_S@oV;4Xv%np|Y4hFCebz:CZ|&');
define('LOGGED_IN_KEY',    'Yzt,(V1b7_=sMeP2t[#xX&%nkS@`^j!)9*uKc25(6q0Jb:hZSk3mzag6+o8]{ @ ');
define('NONCE_KEY',        '%si89z4K y+hb~b2RR^5Tg)XYvNBlOkA)t6uiudTZkdQv!yRwdABy%YYR1NG9BqO');
define('AUTH_SALT',        '(kB_kB![js}<~*0SpddGrAfM?o`xYu3MAQ8yeoiq8m1~:*vUNf%nHVz @&PoBTE|');
define('SECURE_AUTH_SALT', 'rb?VJ(j2:PpOy@$7C|dby1@1[+HR!1S7+7Y]SF3``,*~E|.Xz|//oZh8!$PP}%ZI');
define('LOGGED_IN_SALT',   'f{GO-ip-p45]3lFg[2Gpci8WB0m+R.v@Yn` 0C}A3pur%9cV$z+5t9`vv;frat]X');
define('NONCE_SALT',       'V@DG8cHag8pH*fs~Q<R&NpHLM>c%UpXpQPi>?vLn2WjM=}p|zM_`l2?&ps}Nh%R>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
