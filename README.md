SANTIAGO ANAYA ADÁN ISMAEL     
25 DE NOVIEMBRE DEL 2024    
PRYECTO: CONSUMO DE APIS Y LOGIN FINAL    
DOCENTE: MARTINEZ NIETO ADELINA    
PROGRAMACIÓN WEB 2024     

APIS CONSUMIDAS:     
**API PARA EL ACCESO DE USUARIOS:**    
https://api.escuelajs.co/api/v1/users    
**API PARA MOSTRAR EN TABLA**    
https://rickandmortyapi.com/api/character     

PROCESO DE CONSTUCCIÓN DEL PROYECTO:   

1.-  Vista de Login 

La vista consiste en una pantalla con fondo azul donde se solicita al usuario un correo electrónico y una contraseña para poder logearse, esta muestra mensajes de error en caso de que no se complete exitosamente el inicio de sesión  
![image](https://github.com/user-attachments/assets/bef9436c-28d5-4ce7-9e05-f58dd4ab99a3)

Esta es generada mediante un componente llamado "login" que define la estructura HTML, estílo CSS y la funcionalidad mediante el documento TS, esta hace uso de la api: https://api.escuelajs.co/api/v1/users, donde se obtienen los usuarios y se verifica su existencia recuperando los datos de la API, este se define mediante un servicio llamado "api.service.ts":   
![image](https://github.com/user-attachments/assets/1dfb449e-bf37-452c-be9e-ba72c8e878e8)

2.- Vista de HOME  

La vista del componente HOME consiste en la integración de un menú superior con los datos del usuario ingresado y una tabla con diferentes características, que muestra la información de la API recuperada.    
![image](https://github.com/user-attachments/assets/b8aea742-ed1e-4efc-b4df-bfbebee54e3c)

Se hace el envío del usuario desde la pantalla de LOGIN para la verificación de los datos del usuario y la recuperación de su información personal y foto de perfil:   
![image](https://github.com/user-attachments/assets/ba226a34-95fb-4b9a-89cf-9261ad6a31ef)

La tabla recupera los datos de la api: https://rickandmortyapi.com/api/character    
![image](https://github.com/user-attachments/assets/186234d3-3160-44e7-a28f-4e70a50ab047)

Estos datos son desplegados en una tabla que contiene una barra de busqueda, elemento de paginación y muestra todos los datos de usuario junto con botones de acción implementados    
![image](https://github.com/user-attachments/assets/407ca619-63de-4e7e-ba56-f9e81e3b779d)

Los botones de acción consisten en: Visualizar la información adicional del registro, Editar la información del registro y Eliminar el registro:   
![image](https://github.com/user-attachments/assets/09afffcb-30e6-441a-bc77-c6b2734a2c29)

![image](https://github.com/user-attachments/assets/fcc35578-841a-4632-81f1-01e1195c280d)

![image](https://github.com/user-attachments/assets/8d4b1dda-e3e0-426b-849e-23e8ae24253f)

![image](https://github.com/user-attachments/assets/62fb5606-465b-48b4-af69-f2218218aeba)

3.- Estructura final del componente   


4.-  


5.-  


6.-  




