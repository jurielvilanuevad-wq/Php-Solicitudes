use mi_base;

INSERT INTO rol (nombre)
    VALUES ("Solicitante");
    
INSERT INTO rol (nombre)
    VALUES ("Trabajador");
    
INSERT INTO rol (nombre)
    VALUES ("Administrador");
    
INSERT INTO area (nombre)
    VALUES ("Docencia");
    
INSERT INTO area (nombre)
    VALUES ("Coordinación Académica");
    
INSERT INTO area (nombre)
    VALUES ("Servicios Escolares");
    
INSERT INTO area (nombre)
    VALUES ("Recursos Humanos");
    
INSERT INTO estado_solicitud (nombre)
    VALUES ("Pendiente");
    
INSERT INTO estado_solicitud (nombre)
    VALUES ("En Proceso");
    
INSERT INTO estado_solicitud (nombre)
    VALUES ("Finalizada");
    
SELECT * from rol;
SELECT * from area;