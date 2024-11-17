**Los correos y contraseñas se encuentran al final del documento e ingresando al link de la API**

Adan Ismael Santiago Anaya

Actividad de LOGIN 

API: https://fakestoreapi.com/users

1.- Construcción del proyecto

1.1.- Componente LOGIN

El componente LOGIN se encarga de mostrar la interfaz correspondiente al inicio de sesión, asi como de llamar al servicio de consumo de la API para la validación de los datos de acceso 

1.1.1.- Login.component.ts 
![image](https://github.com/user-attachments/assets/5f191725-075f-4a1c-a066-45d545fb8fc3)


1.1.2.- Login.component.html
![image](https://github.com/user-attachments/assets/1e324441-1f62-41eb-8765-00ee77de6fa4)

1.1.3.- Vista
![image](https://github.com/user-attachments/assets/64f09d62-3f1f-4f6a-8c53-3101d2c9eb0e)


1.2.- Componente HOME

El componente HOME se encarga de mostrar la interfaz correspondiente al inicio, se muestra posteriormente de realizar el ingreso de la pantalla de LOGIN, esta muestra un menú superior con diferes opciones

1.2.1.- home.component.ts
![image](https://github.com/user-attachments/assets/a2c98f00-4cb6-4c37-ba66-cf59ba1775bb)

1.2.2.- home.component.html
![image](https://github.com/user-attachments/assets/29bcf4c4-a636-49a0-911c-a83a71048198)

1.2.3.- Vista
![image](https://github.com/user-attachments/assets/47a34c8f-7831-4c50-a1d9-82fe108f7d76)


1.3.- Servicio API

El archvio llamado api.service.ts se encarga de realizar la llamada a la API para obtener todos los datos de los usuarios, se hará uso del correo y contraseña obtenidos 

1.3.1.- api.service.ts
![image](https://github.com/user-attachments/assets/456e3188-09ab-43f2-a96b-f563b564ed26)

1.3.2.- Elementos Obtenidos 
![image](https://github.com/user-attachments/assets/423b6a00-4679-41e7-8aa5-76181f1107bd)

1.5.- Routes

Dentro del archivo app.routes.ts es necesario agregar las rutas que redireccionarán a la pantalla de login y a la pantalla de home 

![image](https://github.com/user-attachments/assets/55576c50-8865-4473-8a07-e30cca6d224f)

1.6.- Config

El archivo app.config.ts se encarga de determinar la importacióin del archivo "provdeHttpClient" que se utiliza para la realización de peticiones HTTP

![image](https://github.com/user-attachments/assets/51af7572-d6a0-4e2d-adea-eebc2475e0e3)

1.7.- Lista de Registros Obtenidos

1. john@gmail.com - m38rmF$
2. morrison@gmail.com - 83r5^_
3. kevin@gmail.com - kev02937@
4. don@gmail.com - ewedon
5. derek@gmail.com - jklg*_56
6. david_r@gmail.com - 3478*#54
7. miriam@gmail.com - f238&@*$
8. william@gmail.com - William56$hj
9. kate@gmail.com - kfejk@*_
10. jimmie@gmail.com - klein*#%*

