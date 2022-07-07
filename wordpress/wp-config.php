<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'formulaire' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2{zvkL,T.-G6d>bT>#*Tjk> n}h%V9;/p1Z*)`4lqyI%WJTfR=]sB*Lr(CCUUlM!' );
define( 'SECURE_AUTH_KEY',  'ck-7Sl{$V[*5Si6LGHq)*J]6)` {oK$F!n#(vo(.%JIs<L[-:L=L<|S!H/p,.57o' );
define( 'LOGGED_IN_KEY',    'sr>1O@jWF5Lb)|tu-:JxbDE;1oQU.8M*O2JN)5>Hgzus6vi%-Q;y~g|hoP7z^EJB' );
define( 'NONCE_KEY',        ',)xae%Rc|j1>Jl%(Phy ^qinf8=~:D)z6jL]codZYe`=X# ]25r|Q_9$d_!X]tfR' );
define( 'AUTH_SALT',        'amA+Y]W&^3^efF{S!mbcslzgkG]a>PJ9HLl@##1/W#/[n[jDWTS5]A%j8fAbC+CV' );
define( 'SECURE_AUTH_SALT', '2$[LdocL&e+J^GKTwVp^ki#`l3}e17pmzf=Bb15meLl[uytn9?Z]Fg>K.W;uTm^o' );
define( 'LOGGED_IN_SALT',   '8A!#,+gs&L$p{N/ZeV0K>+5s?#K7;FV~`ip;VOdc>aK6 ,N$HQ7Xnr@)XI&-PN%G' );
define( 'NONCE_SALT',       'L#]GIB JxzCA=8jc0?d`[ebA`p]oP/<27gY]VXdF)k2BofE}~{1 bOPXPh9A!}lw' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
