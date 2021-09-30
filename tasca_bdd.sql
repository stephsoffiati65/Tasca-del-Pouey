DROP TABLE IF EXISTS contenir;
DROP TABLE IF EXISTS avis;
DROP TABLE IF EXISTS tables;
DROP TABLE IF EXISTS produits;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS menus;
DROP TABLE IF EXISTS membres;

CREATE TABLE membres (
    id_membre BIGINT NOT NULL AUTO_INCREMENT,
    nom_membre VARCHAR(50) NOT NULL,
    prenom_membre VARCHAR(50) NOT NULL,
    dateNaissance_membre DATE NOT NULL,  
    mail_membre VARCHAR(150) NOT NULL,
    pointsFidelite_membre SMALLINT NOT NULL,
    PRIMARY KEY (id_membre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE avis (
    id_avis BIGINT NOT NULL AUTO_INCREMENT,
    contenu_avis TEXT NOT NULL,
    note_avis TINYINT(1),
    id_membre BIGINT NOT NULL,
    PRIMARY KEY (id_avis),
    CONSTRAINT avis_ibfk_1 FOREIGN KEY (id_membre) REFERENCES membres (id_membre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE restaurants (
    id_restaurant BIGINT NOT NULL AUTO_INCREMENT,
    nom_restaurant VARCHAR(50) NOT NULL,
    horaire_restaurant TEXT NOT NULL,
    pseudoAdmin_restaurant VARCHAR(50) NOT NULL,
    passwordAdmin_restaurant VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_restaurant)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE tables (
    id_table BIGINT NOT NULL AUTO_INCREMENT,
    nom_table VARCHAR(50) NOT NULL,
    capacite_table TINYINT(1),
    id_restaurant BIGINT NOT NULL,
    id_membre BIGINT NOT NULL,
    PRIMARY KEY (id_table),
    CONSTRAINT tables_ibfk_1 FOREIGN KEY (id_restaurant) REFERENCES restaurants (id_restaurant),
    CONSTRAINT tables_ibfk_2 FOREIGN KEY (id_membre) REFERENCES membres (id_membre)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE produits (
    id_produit BIGINT NOT NULL AUTO_INCREMENT,
    nom_produit VARCHAR(50) NOT NULL,
    type_produit VARCHAR(50) NOT NULL,
    prix_produit FLOAT NOT NULL,
    id_restaurant BIGINT NOT NULL,
    PRIMARY KEY (id_produit),
    CONSTRAINT produits_ibfk_1 FOREIGN KEY (id_restaurant) REFERENCES restaurants (id_restaurant)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE menus (
    id_menu BIGINT NOT NULL AUTO_INCREMENT,
    nom_menu VARCHAR(50) NOT NULL,
    prix_menu FLOAT NOT NULL,
    id_restaurant BIGINT NOT NULL,
    PRIMARY KEY (id_menu),
    CONSTRAINT menus_ibfk_1 FOREIGN KEY (id_restaurant) REFERENCES restaurants (id_restaurant)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE contenir (
    id_produit BIGINT NOT NULL,
    id_menu BIGINT NOT NULL,
    PRIMARY KEY (id_produit, id_menu),  
    CONSTRAINT contenir_ibfk_1 FOREIGN KEY (id_produit) REFERENCES produits (id_produit),
    CONSTRAINT contenir_ibfk_2 FOREIGN KEY (id_menu) REFERENCES menus (id_menu)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




