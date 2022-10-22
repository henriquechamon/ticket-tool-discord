/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: aliggshop
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `aliggshop` (
  `user` text NOT NULL,
  `ip` text NOT NULL,
  `script` text NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: bot_cfg
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `bot_cfg` (
  `id_categoria_ticket` varchar(100) DEFAULT NULL,
  `canal_tickets_recebidos` varchar(100) DEFAULT NULL,
  `setagem` varchar(255) DEFAULT NULL,
  `adelle` varchar(255) DEFAULT NULL,
  `idsv` text NOT NULL,
  `imgwl` varchar(500) DEFAULT NULL,
  `dono` varchar(255) DEFAULT NULL,
  `instalado` varchar(255) DEFAULT '0'
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COMMENT = 'CONFIGURE DE ACORDO COM OS ID''S FORNECIDO PELO DISCORD!';

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: aliggshop
# ------------------------------------------------------------

INSERT INTO
  `aliggshop` (`user`, `ip`, `script`)
VALUES
  ('Aligg#0002', '1', 'aligg_inventario');
INSERT INTO
  `aliggshop` (`user`, `ip`, `script`)
VALUES
  ('Aligg#0002', '1', 'aligg_inventario');
INSERT INTO
  `aliggshop` (`user`, `ip`, `script`)
VALUES
  ('Aligg#0002', '1', 'aligg_inventario');
INSERT INTO
  `aliggshop` (`user`, `ip`, `script`)
VALUES
  ('Aligg#0002', '1', 'aligg_inventario');
INSERT INTO
  `aliggshop` (`user`, `ip`, `script`)
VALUES
  ('Aligg#0002', '1', 'aligg_inventario');
INSERT INTO
  `aliggshop` (`user`, `ip`, `script`)
VALUES
  ('Aligg#0002', '1', 'aligg_inventario');
INSERT INTO
  `aliggshop` (`user`, `ip`, `script`)
VALUES
  ('Aligg#0002', '0', 'aligg_inventario');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: bot_cfg
# ------------------------------------------------------------

INSERT INTO
  `bot_cfg` (
    `id_categoria_ticket`,
    `canal_tickets_recebidos`,
    `setagem`,
    `adelle`,
    `idsv`,
    `imgwl`,
    `dono`,
    `instalado`
  )
VALUES
  (
    '',
    '',
    NULL,
    '1023676155078914188',
    '1023674205335715911',
    '',
    '',
    '1'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
