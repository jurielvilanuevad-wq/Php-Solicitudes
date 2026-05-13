<?php
// Configuración SMTP para Gmail.
// Genera la contraseña de aplicación en: https://myaccount.google.com/apppasswords
// (requiere verificación en 2 pasos activada en tu cuenta Google)
define('MAIL_HOST',      getenv('MAIL_HOST')      ?: $_ENV['MAIL_HOST']      ?? '');
define('MAIL_PORT',      getenv('MAIL_PORT')      ?: $_ENV['MAIL_PORT']      ?? 587);
define('MAIL_USERNAME',  getenv('MAIL_USERNAME')  ?: $_ENV['MAIL_USERNAME']  ?? '');
define('MAIL_PASSWORD',  getenv('MAIL_PASSWORD')  ?: $_ENV['MAIL_PASSWORD']  ?? '');
define('MAIL_FROM',      getenv('MAIL_FROM')      ?: $_ENV['MAIL_FROM']      ?? '');
define('MAIL_FROM_NAME', getenv('MAIL_FROM_NAME') ?: $_ENV['MAIL_FROM_NAME'] ?? '');
